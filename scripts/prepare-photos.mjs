import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import sharp from 'sharp';

const json=p=>JSON.parse(fs.readFileSync(p,'utf8'));
const pages=data=>Object.values(data.query.pages);
const plain=s=>(s||'').replace(/<[^>]*>/g,'').replace(/&amp;/g,'&').replace(/&#39;/g,"'").replace(/&quot;/g,'"').trim();
const discovery=pages(json('data/city-photo-discovery.json'));
const metadata=pages(json('data/city-photo-metadata.json'));
const editorial=json('data/location-editorial.json').locations;
const find=(file,title)=>pages(json(file)).find(p=>p.title===title);
const leonberg=find('data/search-Leonberg-Marktplatz.json','File:Leonberg Fachwerkhäuser am Marktplatz.jpg');
const assets=[];
for(const city of editorial){
 const discovered=discovery.find(p=>p.title===city.city);
 assert.ok(discovered,city.slug);
 const page=city.slug==='leonberg'?leonberg:metadata.find(p=>p.title.replaceAll(' ','_')==='File:'+discovered.pageimage);
 assert.ok(page?.imageinfo?.[0],city.slug+' metadata');
 assets.push({id:city.slug,kind:'city',label:city.city,alt:'Stadtansicht von '+city.city,page});
}
for(const [id,file,title,alt] of [
 ['tueroeffnung','data/search-key-in-door-lock.json',"File:Closeup of a man's hand inserting a key into the door lock of a gate.jpg",'Hand mit Schlüssel an einem Türschloss'],
 ['schluessel-steckt-innen','data/search-intitle-Schließzylinder.json','File:Janus-Schließzylinder.jpg','Schließzylinder mit Schlüssel als Beispiel für die Bauform'],
]){const page=find(file,title);assert.ok(page?.imageinfo?.[0],id);assets.push({id,kind:'service',label:id,alt,page})}

fs.mkdirSync('public/photos/cities',{recursive:true});fs.mkdirSync('public/photos/services',{recursive:true});
const credits=[];
for(const asset of assets){
 const info=asset.page.imageinfo[0],meta=info.extmetadata;
 const src='/photos/'+(asset.kind==='city'?'cities/':'services/')+asset.id+'.webp';
 const destination=path.join('public',src);
 if(!fs.existsSync(destination)){
  const response=await fetch(info.thumburl||info.url,{headers:{'User-Agent':'GuengoerDemirWebsite/1.0 (photo attribution preparation)'}});
  if(!response.ok)throw new Error(asset.id+' download '+response.status);
  const data=Buffer.from(await response.arrayBuffer());
  await sharp(data).rotate().resize({width:1600,withoutEnlargement:true}).webp({quality:82}).toFile(destination);
 }
 const author=asset.id==='karlsruhe'?'A.Savin, Wikipedia':plain(meta.Artist?.value);
 assert.ok(author||meta.Copyrighted?.value==='False',asset.id+' author');
 credits.push({id:asset.id,kind:asset.kind,label:asset.label,src,alt:asset.alt,title:asset.page.title.replace(/^File:/,''),author,source:info.descriptionurl,original:info.url,license:meta.LicenseShortName.value,licenseUrl:meta.LicenseUrl?.value?.replace(/^http:/,'https:')||'https://commons.wikimedia.org/wiki/Commons:Public_domain',modifications:'Verkleinert und als WebP gespeichert; im Seitenkopf durch CSS zugeschnitten und abgedunkelt.',verifiedOn:'2026-11-01'});
 console.log(asset.id+' – '+meta.LicenseShortName.value);
}
assert.equal(new Set(credits.map(c=>c.original)).size,credits.length);
fs.writeFileSync('data/photo-credits.json',JSON.stringify(credits,null,2)+'\n');
console.log('Prepared '+credits.length+' unique attributed photographs.');
