# SEO ajan iş akışı

Bu depodaki `seo-research` ve `seo-content`, Codex içinde çağrılabilen beceri talimatlarıdır. Çalışan arka plan servisi, zamanlanmış görev, harici API entegrasyonu veya otomatik yayın sistemi kurulmamıştır. Talimat dosyalarının bulunması bir araştırmanın ya da üretimin çalıştığı anlamına gelmez.

## Codex içinde kullanım

Codex'te `site` klasörünü çalışma projesi olarak açın. Beceri listesinde görünüyorsa `$seo-research` ve `$seo-content` ile çağırın. Görünmüyorsa aşağıdaki dosyaları açıkça okuyup uygulamasını isteyin:

- `.agents/skills/seo-research/SKILL.md`
- `.agents/skills/seo-content/SKILL.md`

Örnek istekler:

> `$seo-research` kullanarak Sindelfingen için altı farklı rakibin Türöffnung sayfalarını incele. Kaynakları ve tarihi kaydet; gözlenemeyen Google sıralamalarını null bırak.

> `$seo-content` kullanarak Sindelfingen, Stuttgart ve Böblingen pilot taslak JSON'larını oluştur. Araştırma boşluklarını belirt; doğrulanmamış kapsam için noindex koru.

> Pilot teknik sonuçlarını ve işletme doğrulamalarını incele. Hazır olan sonraki üç şehir için araştırma ve özgün içerik taslakları üret; eksikleri raporla.

Her çağrı etkin bir Codex çalışması ve mevcut web erişimi gerektirir. Bu iş akışını kullanmak için özel API anahtarı gerekmez. Zamanlama ya da sürekli izleme istenirse ayrı bir görev olarak kurulup gerçekten çalıştığı doğrulanmalıdır.

## Doğrulanmış temel bilgiler

- İşletme adı: Güngör Demir.
- Telefon: +49 172 1416144 (`tel:+491721416144`).
- Verilen işletme adresi: Mercedesstraße 12, 71063 Sindelfingen, Almanya.
- Hizmet odağı: ev/daire kapısında dışarıda kalma; Almanca `Türöffnung`, `ausgesperrt`, `Wohnungstür zugefallen`.
- Hedef şehir listesi pazarlama hedefidir; tek başına fiili hizmet kapsamı kanıtı değildir.

Saatler, ücretler, KDV uygulaması, ulaşım bedeli, hizmet yarıçapı, yerel ekipler, varış süreleri, değerlendirme sayıları, sertifikalar, stok ve domain sahipliği henüz bu iş akışında doğrulanmış sayılmaz. `src/lib/business.ts` yalnız doğrulanmış verilerle uyumlu tutulur. İşletme tarafından gelen yeni doğrulamalar kaynağı ve tarihiyle taslağın `verifiedFacts` alanına eklenir.

Model örneklerinin üretici kaynakları `docs/seo-research.md` dosyasındadır: ABUS D6X, DOM ix TwinStar ve EVVA 4KS. Ürün adının doğrulanması işletmenin bu ürünü sattığını veya her durumda açabildiğini kanıtlamaz.

## Araştırma JSON sözleşmesi

Her şehir `data/research/[slug].json` dosyasında bağımsız tutulur. Aşağıdaki örnek, kayıt biçimini gösterir; yapılmış çalışma değildir:

```json
{
  "city": "Sindelfingen",
  "slug": "sindelfingen",
  "researchedAt": "YYYY-MM-DD",
  "status": "incomplete",
  "searchContext": {"provider": "actual provider", "query": "Schlüsseldienst Türöffnung Sindelfingen", "language": "de", "location": null, "device": null},
  "rankMethod": "No localized Google rank measurement",
  "competitors": [{"url": "https://example.invalid/", "domain": "example.invalid", "fetchedAt": "YYYY-MM-DD", "rank": null, "resultType": "unknown", "title": "observed title", "h1": "observed H1", "keywords": [], "sections": [], "internalLinks": [], "observedTactics": [], "claimsByCompetitor": [], "limitations": []}],
  "recommendation": "Evidence-based original page plan",
  "gaps": ["Five additional competitor domains still need inspection"]
}
```

Altı farklı birincil domainin sayfası gerçekten açılmadan `status: complete` kullanmayın. Aynı domainin altı sayfası altı rakip değildir. Rank yalnız ölçüm yöntemiyle destekleniyorsa sayı olabilir; arama sağlayıcısının sonuç sırasını Google sırası olarak etiketlemeyin. Reklamlar ve Maps ayrı kayıt türleridir. Backlink, schema, Core Web Vitals ve trafik hakkında ölçülmemiş iddialar eklemeyin.

## İçerik JSON sözleşmesi

Her şehir `data/drafts/[slug].json` olarak yazılır:

```json
{
  "city": "Sindelfingen",
  "slug": "sindelfingen",
  "language": "de",
  "status": "draft",
  "pilot": true,
  "coverageConfirmed": false,
  "noindex": true,
  "title": "Türöffnung Sindelfingen | Güngör Demir",
  "description": "Original German description without unsupported promises",
  "h1": "Ausgesperrt in Sindelfingen?",
  "enquiryNote": "Original local enquiry guidance",
  "sections": [{"heading": "Original heading", "body": "Original text"}],
  "faq": [{"question": "Original question", "answer": "Accurate answer"}],
  "verifiedFacts": [{"claim": "Business phone", "value": "+491721416144", "source": "user supplied", "confirmedAt": null}],
  "researchSources": [],
  "researchGaps": [],
  "claimsToConfirm": ["service coverage", "working hours", "prices"],
  "technicalChecks": {"status": "not_run", "evidence": []},
  "seoPerformance": {"status": "not_measured", "evidence": []}
}
```

JSON taslağı doğrudan uygulama tarafından kullanılmıyor olabilir. Uygulamaya aktarım ayrı bir kod değişikliğidir; aktarımda `noindex` ve kapsam durumu korunmalıdır. Tüm taslaklar varsayılan olarak indeksleme dışıdır. Kapsam onaylanana kadar sayfaları sitemap'e eklemeyin. Kapsam onayı diğer açık yanlış iddiaları çözmez; onları da düzeltin.

## Pilot, test ve ölçekleme

1. Sindelfingen, Stuttgart ve Böblingen için tarihli altı-rakip araştırması ve özgün taslak hazırlayın. `docs/seo-research.md` ilk pilot araştırmasının sınırlarını içerir; her şehirde altı-rakip çalışması tamamlanmış değildir.
2. Gerçek işletme bilgilerini gözden geçirin. Saat, fiyat ve bölge kapsamına ilişkin eksikleri gösterin; boşlukları rakip değerleriyle doldurmayın.
3. Teknik testte Almanca `lang`, tek H1, meta alanları, canonical, iç bağlantılar, telefon/adres, mobil taşma, fotoğraflar ve yapılandırılmış verileri kontrol edin. Tasarımın CSS, font ve animasyonlarına dokunmayın. Çalıştırılmayan kontrolü `passed` yazmayın.
4. Yayın sonrası indeksleme ve SEO performansını Search Console/gerçek dönüşüm verisiyle ayrı değerlendirin. Bir build'in geçmesi sıralama başarısı değildir. Veri yoksa `not_measured` durumunu koruyun.
5. Pilot teknik hatalar çözüldükten sonra diğer şehirleri küçük gruplar halinde araştırıp taslaklayın. Özgün bilgi bulunamıyorsa şehir adı değiştirilmiş zayıf sayfayı yayınlamak yerine taslakta bırakın. Hizmet kapsamı doğrulanmadan indekslemeyi açmayın.

Bu beceriler kendiliğinden yayın yapmaz. Kullanıcının mevcut yayın yetkisi korunur; doğru ve tamamlanmış içerik için gereksiz yeniden onay istenmez. Yayınlanacak iddialar yanlış veya doğrulanmamışsa bunları düzeltin ya da taslakta bırakıp gereken somut bilgiyi bildirin.

## Hedefler ve editoryal tohumlar

`data/location-editorial.json`, 18 şehri ve farklı Almanca soru açılarını içerir. Üç pilotta ek bölüm/SSS taslağı bulunur. Bu dosya rakip araştırması, pilot test, kapsam onayı veya yayının yerine geçmez. Yerel notlar verilen adres ve şehir gruplarına dayanır; mahalle, süre veya saha işi uydurmaz.
