# Akademisyen Ortağım

**Türkiye Akademik Eşleştirme Ağı** — Türkiye'deki akademisyenleri araştırma alanlarına göre eşleştiren platform.

## 🚀 GitHub Pages ile Yayınlama

1. Bu repoyu fork'la veya dosyaları kendi reponuza yükle
2. **Settings → Pages → Source: Deploy from branch → main → / (root)**
3. Birkaç dakika sonra `https://kullaniciadin.github.io/repo-adi` adresinde yayında

## 📁 Dosya Yapısı

```
├── index.html   → Ana HTML yapısı (4 sayfa, 3 modal)
├── style.css    → Tüm stiller ve responsive tasarım
├── data.js      → Statik veriler (akademisyenler, projeler, üniversiteler, şablonlar)
├── app.js       → Uygulama mantığı (eşleştirme, animasyon, modal yönetimi)
└── README.md    → Bu dosya
```

## ✨ Özellikler

- **Profil Ekleme**: CV, LinkedIn, Scopus, ORCID veya GitHub (en az 1 yeterli)
- **Harita Eşleştirme**: Türkiye haritası üzerinde görsel eşleştirme + elmas animasyonu
- **5 Ücretsiz Hak**: İlk 5 profil açık, sonrası için üyelik gerekli
- **İşbirliği Şablonları**: TÜBİTAK, Ortak Makale, Sempozyum, Serbest Teklif
- **Projeler Sayfası**: Platformdan doğan tamamlanan ve devam eden işbirlikleri
- **Üniversiteler Sayfası**: 218 üniversite, arama ve filtreleme

## 🔧 Backend Entegrasyonu

Şu an tamamen frontend (statik). Gerçek backend eklemek için:

- `data.js` içindeki `PEOPLE`, `PROJECTS`, `UNIS` dizilerini API çağrılarıyla değiştir
- `app.js` içindeki `runMatch()` fonksiyonunu gerçek eşleştirme algoritmasına bağla
- Kullanıcı girişi için Auth0, Firebase veya kendi backend'ini ekle

## 🎨 Tasarım

- Font: Cormorant Garamond (başlıklar) + DM Sans (metin)
- Renk paleti: Koyu arkaplan (#08090c) + altın vurgu (#c9a84c)
- Tam responsive (mobil uyumlu)

## 📄 Lisans

MIT — Serbestçe kullanabilirsiniz.
