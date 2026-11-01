import credits from '@/../data/photo-credits.json';
import {ContentSection} from '@/components/ContentSection';

export const metadata = {title: 'Bildnachweise', description: 'Quellen, Urheber und Lizenzen der Stadt- und Servicefotos.', alternates:{canonical:'/bildnachweise/'}};

export default function Page() {
  return <ContentSection title="Bildnachweise"><h1 className="text-heading-3 text-frost">Fotos und Lizenzen</h1>
    <p>Die Stadtansichten und ergänzenden Servicefotos stammen aus Wikimedia Commons. Die jeweiligen Fotos wurden verkleinert und als WebP gespeichert. In den Seitenköpfen werden sie durch CSS zugeschnitten und abgedunkelt. Die Lizenzangaben gelten für die jeweiligen Fotografien.</p>
    <div className="divide-y divide-line">{credits.map(p => <article key={p.kind+p.id} className="py-6">
      <h2 className="text-heading-4 text-frost mb-2">{p.kind==='city'?p.label:'Servicefoto'} – {p.title}</h2>
      <p>Foto: {p.author || 'Gemeinfrei'} · <a className="underline" href={p.source} target="_blank" rel="noopener noreferrer">Wikimedia Commons / Originalquelle</a> · <a className="underline" href={p.licenseUrl} target="_blank" rel="noopener noreferrer">{p.license}</a></p>
      <p className="text-body-small mt-2">{p.modifications}</p>
    </article>)}</div>
    <p>Die persönlichen Fotos des Inhabers Güngör Demir, seiner Werkstatt und seinen Arbeiten wurden vom Betreiber für diese Website bereitgestellt. Symbolfotos zu Schließzylindern stellen keine Liefer- oder Öffnungszusage für ein bestimmtes Modell dar.</p>
  </ContentSection>;
}
