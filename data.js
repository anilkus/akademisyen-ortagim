/* ═══════════════════════════════════════
   Akademisyen Ortağım — data.js
   Tüm statik veriler burada tutulur.
   Gerçek backend eklendiğinde burası
   API çağrılarıyla değiştirilir.
   ═══════════════════════════════════════ */

const PEOPLE = [
  {
    ini: 'AK', avc: 'av-i',
    name: 'Doç. Dr. Ahmet Kaya',
    uni: 'ODTÜ · Ankara',
    score: 94,
    alan: 'Makine Öğrenmesi',
    tags: [{ l: 'ML', c: 'mt-i' }, { l: 'NLP', c: 'mt-g' }],
    cx: 310, cy: 142, col: '#3a4898',
    det: {
      unvan: 'Doçent Doktor',
      kurum: 'ODTÜ Bilgisayar Mühendisliği Bölümü',
      konu: 'Derin öğrenme, büyük dil modelleri, doğal dil işleme',
      yayinlar: ['ICLR 2023', 'NeurIPS 2022', 'IEEE Trans. 2021'],
      hibe: 'TÜBİTAK 1001 (2023–2025)',
      orcid: '0000-0001-2345-6789'
    }
  },
  {
    ini: 'ZA', avc: 'av-t',
    name: 'Dr. Zeynep Arslan',
    uni: 'Ege Üniversitesi · İzmir',
    score: 87,
    alan: 'Biyomedikal',
    tags: [{ l: 'Biyomedikal', c: 'mt-t' }, { l: 'Görüntü İşleme', c: 'mt-i' }],
    cx: 138, cy: 158, col: '#2d7a6e',
    det: {
      unvan: 'Dr. Öğretim Üyesi',
      kurum: 'Ege Üniversitesi Biyomedikal Mühendislik',
      konu: 'Tıbbi görüntü segmentasyonu, CNN tabanlı tanı sistemleri',
      yayinlar: ['Medical Image Analysis 2023', 'MICCAI 2022'],
      hibe: 'AB Horizon Europe (2022–2024)',
      orcid: '0000-0002-3456-7890'
    }
  },
  {
    ini: 'SC', avc: 'av-r',
    name: 'Doç. Dr. Selin Çelik',
    uni: 'KTÜ · Trabzon',
    score: 81,
    alan: 'Çevre Bilimleri',
    tags: [{ l: 'Çevre', c: 'mt-r' }, { l: 'Uzaktan Algılama', c: 'mt-t' }],
    cx: 430, cy: 136, col: '#b85a28',
    det: {
      unvan: 'Doçent Doktor',
      kurum: 'KTÜ Çevre Mühendisliği Bölümü',
      konu: 'İklim modelleme, su kalitesi analizi, uzaktan algılama',
      yayinlar: ['Environmental Science 2023', 'Remote Sensing 2022'],
      hibe: 'TÜBİTAK 3501 (2023–2025)',
      orcid: '0000-0003-4567-8901'
    }
  },
  {
    ini: 'HO', avc: 'av-g',
    name: 'Prof. Dr. Hüseyin Öz',
    uni: 'Atatürk Üniversitesi · Erzurum',
    score: 74,
    alan: 'Malzeme Bilimi',
    tags: [{ l: 'Malzeme', c: 'mt-r' }, { l: 'Nano', c: 'mt-i' }],
    cx: 490, cy: 148, col: '#c9a84c',
    det: {
      unvan: 'Profesör Doktor',
      kurum: 'Atatürk Üniversitesi Malzeme Bilimi',
      konu: 'Nanokompozitler, metal alaşımları, yüzey kaplama teknolojileri',
      yayinlar: ['Acta Materialia 2023', 'J. Alloys 2022'],
      hibe: 'TÜBİTAK 1501 (2022–2024)',
      orcid: '0000-0004-5678-9012'
    }
  },
  {
    ini: 'MD', avc: 'av-t',
    name: 'Doç. Dr. Mert Demir',
    uni: 'Selçuk Üniversitesi · Konya',
    score: 68,
    alan: 'Enerji Sistemleri',
    tags: [{ l: 'Enerji', c: 'mt-t' }, { l: 'Optimizasyon', c: 'mt-g' }],
    cx: 345, cy: 192, col: '#2d7a6e',
    det: {
      unvan: 'Doçent Doktor',
      kurum: 'Selçuk Üniversitesi Elektrik-Elektronik Müh.',
      konu: 'Yenilenebilir enerji sistemleri, güç elektroniği, şebeke optimizasyonu',
      yayinlar: ['Energy 2023', 'IEEE Transactions on Energy 2022'],
      hibe: 'TÜBİTAK 3001 (2023–2024)',
      orcid: '0000-0005-6789-0123'
    }
  }
];

const PROJECTS = [
  {
    id: 1, type: 'tubitak',
    title: 'Derin Öğrenme Destekli Erken Kanser Teşhis Sistemi',
    uni1: 'İTÜ', uni2: 'Ege Üniversitesi',
    budget: '₺780.000', dur: '24 ay',
    status: 'Tamamlandı',
    members: ['Prof. Dr. A. Yıldız', 'Dr. Z. Arslan', 'Doç. Dr. M. Çetin'],
    yil: 2023
  },
  {
    id: 2, type: 'makale',
    title: 'Türkiye Kuş Göç Yollarının Makine Öğrenmesi ile Modellenmesi',
    uni1: 'ODTÜ', uni2: 'Hacettepe',
    budget: '—', dur: '—',
    status: 'Yayımlandı · Nature 2024',
    members: ['Doç. Dr. A. Kaya', 'Prof. Dr. S. Büyük'],
    yil: 2024
  },
  {
    id: 3, type: 'sempozyum',
    title: 'IEEE Signal Processing Türkiye Bölümü Konferansı Bildirisi',
    uni1: 'Boğaziçi', uni2: 'KTÜ',
    budget: '₺45.000 seyahat', dur: '—',
    status: 'Sunuldu · ICASSP 2024',
    members: ['Dr. E. Polat', 'Doç. Dr. S. Çelik'],
    yil: 2024
  },
  {
    id: 4, type: 'tubitak',
    title: 'Hızlı Şarjlı Nanoparçacık Bazlı Pil Elektrot Malzemeleri',
    uni1: 'ODTÜ', uni2: 'Atatürk Üniversitesi',
    budget: '₺1.2M', dur: '36 ay',
    status: 'Devam ediyor',
    members: ['Prof. Dr. H. Öz', 'Doç. Dr. F. Aras', 'Arş. Gör. K. Demir'],
    yil: 2023
  },
  {
    id: 5, type: 'makale',
    title: 'Büyük Dil Modellerinde Türkçe Morfoloji Analizi',
    uni1: 'İTÜ', uni2: 'ODTÜ',
    budget: '—', dur: '—',
    status: 'Hakemde · ACL 2025',
    members: ['Doç. Dr. A. Kaya', 'Dr. B. Şahin'],
    yil: 2025
  },
  {
    id: 6, type: 'diger',
    title: 'Akdeniz Havzası İklim Değişikliği Ortak Araştırma Grubu',
    uni1: 'KTÜ', uni2: 'Çukurova',
    budget: '—', dur: 'Süregelen',
    status: 'Aktif',
    members: ['Doç. Dr. S. Çelik', 'Prof. Dr. M. Yurt', 'Dr. G. Aydın'],
    yil: 2022
  },
  {
    id: 7, type: 'tubitak',
    title: 'Akıllı Şehirler için IoT Tabanlı Trafik Optimizasyonu',
    uni1: 'Selçuk', uni2: 'Gazi Üniversitesi',
    budget: '₺560.000', dur: '30 ay',
    status: 'Devam ediyor',
    members: ['Doç. Dr. M. Demir', 'Dr. A. Kılıç', 'Arş. Gör. S. Tekin'],
    yil: 2024
  },
  {
    id: 8, type: 'sempozyum',
    title: 'Kuantum Hesaplama Uygulamaları: Türkiye Perspektifi',
    uni1: 'Bilkent', uni2: 'Sabancı',
    budget: '₺28.000 seyahat', dur: '—',
    status: 'Planlanıyor · 2025',
    members: ['Prof. Dr. E. Yılmaz', 'Doç. Dr. C. Arslan'],
    yil: 2025
  }
];

const UNIS = [
  { name: 'İstanbul Teknik Üniversitesi', city: 'İstanbul', aka: 4200, prj: 320, tags: ['Müh.', 'Fen', 'Mimarlık'] },
  { name: 'Orta Doğu Teknik Üniversitesi', city: 'Ankara', aka: 3800, prj: 290, tags: ['Müh.', 'Fen', 'Sosyal'] },
  { name: 'Boğaziçi Üniversitesi', city: 'İstanbul', aka: 2100, prj: 210, tags: ['Fen', 'Sosyal', 'Eğitim'] },
  { name: 'Hacettepe Üniversitesi', city: 'Ankara', aka: 5200, prj: 410, tags: ['Tıp', 'Eczacılık', 'Fen'] },
  { name: 'Ege Üniversitesi', city: 'İzmir', aka: 4500, prj: 280, tags: ['Tıp', 'Müh.', 'Tarım'] },
  { name: 'Karadeniz Teknik Üniversitesi', city: 'Trabzon', aka: 3100, prj: 195, tags: ['Müh.', 'Fen', 'Ormancılık'] },
  { name: 'Atatürk Üniversitesi', city: 'Erzurum', aka: 4800, prj: 220, tags: ['Fen', 'Tıp', 'Müh.'] },
  { name: 'Çukurova Üniversitesi', city: 'Adana', aka: 4200, prj: 180, tags: ['Tarım', 'Tıp', 'Müh.'] },
  { name: 'Selçuk Üniversitesi', city: 'Konya', aka: 5100, prj: 200, tags: ['Müh.', 'Tarım', 'Tıp'] },
  { name: 'Sabancı Üniversitesi', city: 'İstanbul', aka: 680, prj: 145, tags: ['Müh.', 'Yönetim', 'Sanat'] },
  { name: 'Koç Üniversitesi', city: 'İstanbul', aka: 720, prj: 160, tags: ['Müh.', 'Tıp', 'İşletme'] },
  { name: 'Bilkent Üniversitesi', city: 'Ankara', aka: 910, prj: 170, tags: ['Fen', 'Müh.', 'Beşeri'] },
  { name: 'Gazi Üniversitesi', city: 'Ankara', aka: 6200, prj: 310, tags: ['Eğitim', 'Müh.', 'Tıp'] },
  { name: 'İstanbul Üniversitesi', city: 'İstanbul', aka: 7100, prj: 280, tags: ['Hukuk', 'Tıp', 'Fen'] },
  { name: 'Ankara Üniversitesi', city: 'Ankara', aka: 5800, prj: 265, tags: ['Hukuk', 'Fen', 'Eczacılık'] },
  { name: 'Dokuz Eylül Üniversitesi', city: 'İzmir', aka: 4900, prj: 230, tags: ['Müh.', 'Güzel Sanatlar', 'Tıp'] },
];

const TMPLS = {
  tubitak: {
    name: 'TÜBİTAK Projesi',
    build: (p) => `
      <div class="fg"><span class="flbl">Proje Başlığı</span><input class="fin" placeholder="Proje adını yazın…"/></div>
      <div class="fg"><span class="flbl">TÜBİTAK Programı</span>
        <select class="fsel">
          <option>1001 — Araştırma Projeleri</option>
          <option>1501 — Sanayi Ar-Ge</option>
          <option>3501 — Kariyer Geliştirme</option>
          <option>3001 — Başlangıç Ar-Ge</option>
          <option>2209 — Öğrenci Projeleri</option>
        </select>
      </div>
      <div class="fg2">
        <div class="fg"><span class="flbl">Başlangıç</span><input class="fin" type="month"/></div>
        <div class="fg"><span class="flbl">Süre (ay)</span><input class="fin" type="number" placeholder="24"/></div>
      </div>
      <div class="fg"><span class="flbl">Tahmini Bütçe (₺)</span><input class="fin" placeholder="500.000"/></div>
      <div class="fg"><span class="flbl">Hibe / Ödenek Kalemleri</span><input class="fin" placeholder="Personel, Ekipman, Seyahat…"/></div>
      <div class="fg"><span class="flbl">Proje Özeti</span><textarea class="fta" placeholder="Araştırma problemi ve hedefler…"></textarea></div>
      <div class="fg">
        <span class="flbl">Görev Dağılımı — Ekip</span>
        <div class="add-row"><input class="fin" value="${p.name} — Yürütücü"/></div>
        <div class="add-row"><input class="fin" placeholder="Ad Soyad — Araştırmacı"/><button class="add-btn" onclick="addMR(this)">+ Ekle</button></div>
      </div>
      <div class="fg"><span class="flbl">Kurum / BAP No.</span><input class="fin" placeholder="Kurum adı ve BAP proje no (varsa)"/></div>
    `
  },
  makale: {
    name: 'Ortak Makale',
    build: (p) => `
      <div class="fg"><span class="flbl">Makale Başlığı (Taslak)</span><input class="fin" placeholder="Başlık taslağı…"/></div>
      <div class="fg"><span class="flbl">Hedef Dergi / Konferans</span><input class="fin" placeholder="Nature, IEEE, Elsevier, ICLR…"/></div>
      <div class="fg2">
        <div class="fg"><span class="flbl">1. Yazar</span><input class="fin" placeholder="Ad Soyad"/></div>
        <div class="fg"><span class="flbl">2. Yazar</span><input class="fin" value="${p.name}"/></div>
      </div>
      <div class="fg"><span class="flbl">Diğer Yazarlar</span><input class="fin" placeholder="Ad Soyad, Ad Soyad…"/></div>
      <div class="fg"><span class="flbl">Sorumlu Yazar (Corresponding)</span><input class="fin" placeholder="Kim üstlenecek?"/></div>
      <div class="fg2">
        <div class="fg"><span class="flbl">Submission Tarihi</span><input class="fin" type="month"/></div>
        <div class="fg"><span class="flbl">Erişim Türü</span>
          <select class="fsel"><option>Open Access</option><option>Subscription</option><option>Hybrid</option></select>
        </div>
      </div>
      <div class="fg"><span class="flbl">Katkı Notları (Kim ne yazacak?)</span><textarea class="fta" placeholder="Giriş: … · Yöntem: … · Veri analizi: …"></textarea></div>
    `
  },
  sempozyum: {
    name: 'Sempozyum Bildirisi',
    build: (p) => `
      <div class="fg"><span class="flbl">Bildiri Başlığı</span><input class="fin" placeholder="Bildiri başlığı…"/></div>
      <div class="fg"><span class="flbl">Önerilen Sempozyum</span>
        <select class="fsel">
          <option>ICML 2025</option>
          <option>NeurIPS 2025</option>
          <option>IEEE Signal Processing 2025</option>
          <option>EMNLP 2025</option>
          <option>TÜBİTAK Destekli Sempozyum</option>
          <option>Ulusal Akademi Kongresi</option>
          <option>Diğer (aşağıya yazın)</option>
        </select>
      </div>
      <div class="fg"><span class="flbl">Sempozyum (Diğer ise belirtin)</span><input class="fin" placeholder="Sempozyum adı, şehir, tarih…"/></div>
      <div class="fg2">
        <div class="fg"><span class="flbl">Tarih</span><input class="fin" type="month"/></div>
        <div class="fg"><span class="flbl">Sunum Türü</span>
          <select class="fsel"><option>Sözlü Sunum</option><option>Poster</option><option>Workshop</option><option>Davetli Konuşma</option></select>
        </div>
      </div>
      <div class="fg"><span class="flbl">Sunum Yapacak Kişi</span><input class="fin" placeholder="Ad Soyad — Kurum"/></div>
      <div class="fg"><span class="flbl">Tüm Yazarlar</span><input class="fin" value="${p.name}" placeholder="Ad Soyad, Ad Soyad…"/></div>
      <div class="fg"><span class="flbl">Seyahat / Burs Notu</span><textarea class="fta" placeholder="Seyahat desteği, kayıt ücreti kimin üstleneceği…"></textarea></div>
    `
  },
  diger: {
    name: 'Serbest Teklif',
    build: (p) => `
      <div class="fg"><span class="flbl">Konu</span><input class="fin" placeholder="Ne üzerine çalışmak istiyorsunuz?"/></div>
      <div class="fg"><span class="flbl">Teklif Detayı</span><textarea class="fta" style="height:72px" placeholder="Detaylı açıklama…"></textarea></div>
      <div class="fg2">
        <div class="fg"><span class="flbl">Öngörülen Süre</span><input class="fin" placeholder="6 ay, 1 yıl…"/></div>
        <div class="fg"><span class="flbl">Toplantı Tercihi</span>
          <select class="fsel"><option>Çevrimiçi</option><option>Yüz yüze</option><option>Hibrit</option></select>
        </div>
      </div>
      <div class="fg">
        <span class="flbl">Ekip Üyeleri</span>
        <div class="add-row"><input class="fin" value="${p.name}"/><button class="add-btn" onclick="addMR(this)">+ Ekle</button></div>
      </div>
    `
  }
};
