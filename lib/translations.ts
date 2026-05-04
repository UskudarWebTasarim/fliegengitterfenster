export type Language = 'de' | 'tr';

export type Translations = {
  header: {
    home: string;
    products: string;
    about: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
  };
  products: {
    title: string;
    subtitle: string;
    flyscreen: string;
    plissee: string;
    plisseeCurtain: string;
    blinds: string;
    honeycomb: string;
    duette: string;
    zip: string;
  };
  about: {
    title: string;
    description: string;
    experience: string;
    countries: string;
    quality: string;
    support: string;
    advantagesTitle: string;
    advantages: string[];
  };
  process: {
    title: string;
    subtitle: string;
    steps: Array<{ title: string; desc: string }>;
  };
  features: {
    title: string;
    subtitle: string;
    items: Array<{ title: string; desc: string }>;
  };
  quality: {
    title: string;
    description: string;
    table: {
      headers: string[];
      rows: string[][];
    };
  };
  examples: {
    title: string;
    subtitle: string;
    items: Array<{ title: string; desc: string }>;
  };
  testimonials: {
    title: string;
    subtitle: string;
    items: Array<{ name: string; city: string; text: string }>;
  };
  trust: {
    title: string;
    items: Array<{ title: string; desc: string }>;
  };
  targetMarket: {
    title: string;
    subtitle: string;
    markets: Array<{ country: string; cities: string }>;
  };
  serviceAreas: {
    title: string;
    description: string;
    subtitle: string;
  };
  installation: {
    title: string;
    subtitle: string;
    items: Array<{ title: string; desc: string }>;
  };
  warranty: {
    title: string;
    subtitle: string;
    items: Array<{ title: string; desc: string }>;
  };
  faq: {
    title: string;
    subtitle: string;
    faqs: Array<{ q: string; a: string }>;
  };
  cta: {
    title: string;
    description: string;
    whatsapp: string;
    call: string;
  };
  popup: {
    title: string;
  };
  contact: {
    phone: string;
    whatsapp: string;
    email: string;
    address: string;
  };
};

export const translations: Record<Language, Translations> = {
  de: {
    header: {
      home: 'Startseite',
      products: 'Produkte',
      about: 'Über Uns',
      contact: 'Kontakt',
    },
    hero: {
      title: 'Fliegengitter Fenster',
      subtitle: 'Premium Insektenschutz aus Österreich. Maßgefertigte Lösungen für Fenster, Türen und Balkone. Höchste Qualität, langlebige Materialien und professionelle Montage in ganz Europa. Schützen Sie Ihr Zuhause effektiv vor Insekten.',
      cta: 'Angebot Anfordern',
    },
    products: {
      title: 'Unsere Produkte',
      subtitle: 'Hochwertige Insektenschutzlösungen für jeden Bedarf. Von einfachen Fliegengittern bis zu fortschrittlichen Rollosystemen - wir haben die passende Lösung für Ihr Zuhause.',
      flyscreen: 'Fliegengitter',
      plissee: 'Plissee',
      plisseeCurtain: 'Plissee Vorhänge',
      blinds: 'Jalousien',
      honeycomb: 'Honeycomb',
      duette: 'Düette',
      zip: 'Zip Rollos',
    },
    about: {
      title: 'Warum Wir?',
      description: 'Wir bieten erstklassige Insektenschutzlösungen aus Österreich. Höchste Qualität für Ihr Zuhause. Mit über 15 Jahren Erfahrung und Präsenz in 6 europäischen Ländern garantieren wir erstklassige Produkte und professionellen Service. Unsere Produkte werden nach höchsten EU-Standards gefertigt.',
      experience: '15+ Jahre',
      countries: '6 Länder',
      quality: 'Premium',
      support: '24/7',
      advantagesTitle: 'Vorteile',
      advantages: [
        'Maßgefertigt',
        'Professionelle Montage',
        'Europaweite Lieferung',
        'Garantierte Qualität',
      ],
    },
    process: {
      title: 'So Geht Es',
      subtitle: 'Einfacher Prozess von Anfrage bis Montage. In nur 4 einfachen Schritten zu Ihrem perfekten Insektenschutz.',
      steps: [
        { title: '1', desc: 'Anfrage senden' },
        { title: '2', desc: 'Angebot erhalten' },
        { title: '3', desc: 'Bestellung' },
        { title: '4', desc: 'Montage' },
      ],
    },
    features: {
      title: 'Eigenschaften',
      subtitle: 'Was uns von anderen unterscheidet. Langlebige Materialien, einfache Installation und wetterfeste Konstruktion.',
      items: [
        { title: 'Langlebig', desc: 'Hochwertige Materialien für jahrelange Nutzung' },
        { title: 'Einfach', desc: 'Leichte Montage ohne Werkzeug' },
        { title: 'Wetterfest', desc: 'Für alle Jahreszeiten geeignet' },
        { title: 'Pflegeleicht', desc: 'Einfach zu reinigen und zu warten' },
      ],
    },
    quality: {
      title: 'Materialien & Qualität',
      description: 'Wir verwenden nur hochwertige Materialien für beste Ergebnisse. Aluminium, Fiberglas und Edelstahl nach EU-Standards.',
      table: {
        headers: ['Material', 'Eigenschaft', 'Garantie'],
        rows: [
          ['Aluminium', 'Langlebig', '5 Jahre'],
          ['Fiberglas', 'Stabil', '3 Jahre'],
          ['Edelstahl', 'Rostfrei', '10 Jahre'],
        ],
      },
    },
    examples: {
      title: 'Anwendungen',
      subtitle: 'Vielseitige Lösungen für jede Situation. Von Privathäusern bis zu gewerblichen Gebäuden.',
      items: [
        { title: 'Privathäuser', desc: 'Schutz für Ihr Zuhause' },
        { title: 'Bürogebäude', desc: 'Komfortables Arbeiten' },
        { title: 'Hotels', desc: 'Gästezufriedenheit' },
        { title: 'Restaurants', desc: 'Hygiene & Komfort' },
      ],
    },
    testimonials: {
      title: 'Kundenstimmen',
      subtitle: 'Was unsere Kunden über uns sagen. Echte Erfahrungen von echten Kunden.',
      items: [
        { name: 'Maria M.', city: 'Wien', text: 'Ausgezeichnete Qualität!' },
        { name: 'Thomas K.', city: 'Graz', text: 'Schnelle Lieferung.' },
        { name: 'Anna S.', city: 'Linz', text: 'Professioneller Service.' },
      ],
    },
    trust: {
      title: 'Vertrauen',
      items: [
        { title: 'Zertifiziert', desc: 'EU Normen erfüllt' },
        { title: 'Erfahren', desc: '15+ Jahre Erfahrung' },
        { title: 'Zuverlässig', desc: 'Pünktliche Lieferung' },
        { title: 'Support', desc: 'Kundenservice' },
      ],
    },
    targetMarket: {
      title: 'Zielmärkte',
      subtitle: 'Präsenz in ganz Europa. Wir liefern in 6 europäische Länder.',
      markets: [
        { country: '🇦🇹 AT', cities: 'Wien, Graz, Linz' },
        { country: '🇩🇪 DE', cities: 'München, Berlin, Hamburg' },
        { country: '🇳🇱 NL', cities: 'Amsterdam, Rotterdam' },
      ],
    },
    serviceAreas: {
      title: 'Liefergebiete',
      description: 'Wir liefern in alle europäischen Länder. Schnelle und zuverlässige Lieferung.',
      subtitle: 'Lieferzeit: 4-10 Tage',
    },
    installation: {
      title: 'Montage',
      subtitle: 'Professionelle Installation durch geschulte Monteure. Vor-Ort-Messung und umfassende Einweisung.',
      items: [
        { title: 'Messung', desc: 'Vor-Ort-Messung' },
        { title: 'Montage', desc: 'Professionelle Installation' },
        { title: 'Einweisung', desc: 'Umfassende Einweisung' },
      ],
    },
    warranty: {
      title: 'Garantie',
      subtitle: 'Sorglos kaufen mit umfassender Garantie. Produktparantie, Montagegarantie und lebenslanger Support.',
      items: [
        { title: 'Produkt', desc: '5 Jahre Garantie' },
        { title: 'Montage', desc: '2 Jahre Garantie' },
        { title: 'Service', desc: 'Lebenslanger Support' },
      ],
    },
    faq: {
      title: 'FAQ',
      subtitle: 'Häufige Fragen und Antworten. Alles was Sie wissen müssen.',
      faqs: [
        { q: 'Wie lange dauert die Lieferung?', a: 'Die Lieferung dauert in der Regel 4-10 Tage je nach Zielort. Für Lieferungen innerhalb Österreichs beträgt die Lieferzeit meist 4-6 Tage, während Lieferungen nach Deutschland, Niederlande und andere europäische Länder 7-10 Tage dauern können. Wir arbeiten mit zuverlässigen Versandpartnern zusammen, um eine pünktliche Lieferung zu gewährleisten. Sobald Ihre Bestellung versandt wurde, erhalten Sie eine Tracking-Nummer, mit der Sie Ihre Sendung jederzeit verfolgen können.' },
        { q: 'Wie viel kostet der Quadratmeter?', a: 'Die Preise variieren je nach Produkttyp, gewähltem Material und gewünschter Konfiguration. Fliegengitter beginnen bei etwa 25€ pro m², während Plissee-Rollos und fortschrittlichere Systeme zwischen 35-60€ pro m² liegen können. Für ein genaues Angebot empfehlen wir Ihnen, eine kostenlose Messung und Beratung zu vereinbaren. Unser Team kommt gerne zu Ihnen vorbei, misst alle Fenster und Türen und erstellt Ihnen ein individuelles Angebot ohne Verpflichtung.' },
        { q: 'Bieten Sie Montage an?', a: 'Ja, wir bieten professionelle Montage in ganz Österreich an. Unsere erfahrenen Monteure sind geschult, um alle unsere Insektenschutzsysteme fachgerecht zu installieren. Die Montage beinhaltet die Lieferung, Installation sowie eine umfassende Einweisung in die Bedienung der Systeme. Für Kunden in anderen europäischen Ländern arbeiten wir mit lokalen Partnern zusammen oder liefern Bausätze mit detaillierten Montageanleitungen für die Selbstmontage.' },
        { q: 'Sind die Produkte garantiert?', a: 'Ja, alle unsere Produkte haben Herstellergarantie. Die Garantiedauer variiert je nach Produkt und Material: Aluminiumsysteme haben 5 Jahre Garantie, Fiberglas-Systeme 3 Jahre und Edelstahl-Komponenten bis zu 10 Jahre. Zusätzlich bieten wir 2 Jahre Garantie auf die Montageleistung. Sollte ein Problem auftreten, sind wir für Sie da und kümmern uns um eine schnelle Lösung. Unser Kundenservice ist rund um die Uhr für Sie erreichbar.' },
      ],
    },
    cta: {
      title: 'Bereit?',
      description: 'Kontaktieren Sie uns für ein kostenloses Angebot. Wir sind für Sie da.',
      whatsapp: 'WhatsApp',
      call: 'Anrufen',
    },
    popup: {
      title: 'Web Sitesine Ücretsiz Sahip Olun!',
    },
    contact: {
      phone: '+90 540 336 3873',
      whatsapp: '+90 540 336 3873',
      email: 'info@fenetresystems.com',
      address: 'Mariahilfer Straße 123, 1070 Wien, Österreich',
    },
  },
  tr: {
    header: {
      home: 'Ana Sayfa',
      products: 'Ürünler',
      about: 'Hakkımızda',
      contact: 'İletişim',
    },
    hero: {
      title: 'Fliegengitter Fenster',
      subtitle: 'Avusturya kalitesi. Eviniz için özel üretilmiş sineklik çözümleri. Pencereler, kapılar ve balkonlar için ölçüye göre üretilen sistemler. En yüksek kalite, uzun ömürlü malzemeler ve Avrupa genelinde profesyonel montaj. Evinizi etkili bir şekilde böceklerden koruyun.',
      cta: 'Teklif Alın',
    },
    products: {
      title: 'Ürünlerimiz',
      subtitle: 'Her ihtiyaç için yüksek kaliteli sineklik çözümleri. Basit sinekliklerden gelişmiş perde sistemlerine kadar - eviniz için uygun çözümü sunuyoruz.',
      flyscreen: 'Sineklik',
      plissee: 'Plise',
      plisseeCurtain: 'Plise Perde',
      blinds: 'Jaluzi',
      honeycomb: 'Honeycomb',
      duette: 'Düet',
      zip: 'Zip Perde',
    },
    about: {
      title: 'Neden Biz?',
      description: 'Avusturya\'dan birinci sınıf sineklik çözümleri. Eviniz için en yüksek kalite. 15 yıldan fazla deneyim ve 6 Avrupa ülkesinde varlık ile birinci sınıf ürünler ve profesyonel hizmet garantisi veriyoruz. Ürünlerimiz en yüksek AB standartlarına göre üretilmektedir.',
      experience: '15+ Yıl',
      countries: '6 Ülke',
      quality: 'Premium',
      support: '7/24',
      advantagesTitle: 'Avantajlar',
      advantages: [
        'Özel Üretim',
        'Profesyonel Montaj',
        'Avrupa Geneli Teslimat',
        'Garantili Kalite',
      ],
    },
    process: {
      title: 'Nasıl Çalışır',
      subtitle: 'Talepten montaja kadar basit süreç. Sadece 4 basit adımda mükemmel sineklik sisteminize kavuşun.',
      steps: [
        { title: '1', desc: 'Talep gönderin' },
        { title: '2', desc: 'Teklif alın' },
        { title: '3', desc: 'Sipariş' },
        { title: '4', desc: 'Montaj' },
      ],
    },
    features: {
      title: 'Özellikler',
      subtitle: 'Bizi diğerlerinden ayıran özellikler. Uzun ömürlü malzemeler, kolay kurulum ve hava durumuna dayanıklı yapı.',
      items: [
        { title: 'Uzun Ömürlü', desc: 'Yıllarca kullanım için yüksek kaliteli malzemeler' },
        { title: 'Kolay', desc: 'Alet gerektirmeden kolay montaj' },
        { title: 'Hava Durumu', desc: 'Tüm mevsimler için uygun' },
        { title: 'Bakım', desc: 'Kolay temizlik ve bakım' },
      ],
    },
    quality: {
      title: 'Malzemeler & Kalite',
      description: 'En iyi sonuçlar için yüksek kaliteli malzemeler kullanıyoruz. AB standartlarına göre alüminyum, fiberglas ve paslanmaz çelik.',
      table: {
        headers: ['Malzeme', 'Özellik', 'Garanti'],
        rows: [
          ['Alüminyum', 'Uzun ömürlü', '5 Yıl'],
          ['Fiberglas', 'Stabil', '3 Yıl'],
          ['Paslanmaz Çelik', 'Paslanmaz', '10 Yıl'],
        ],
      },
    },
    examples: {
      title: 'Uygulamalar',
      subtitle: 'Her durum için çok yönlü çözümler. Özel evlerden ticari binalara kadar.',
      items: [
        { title: 'Özel Evler', desc: 'Evinizi koruyun' },
        { title: 'Ofis Binaları', desc: 'Konforlu çalışma' },
        { title: 'Oteller', desc: 'Misafir memnuniyeti' },
        { title: 'Restoranlar', desc: 'Hijyen ve konfor' },
      ],
    },
    testimonials: {
      title: 'Müşteri Yorumları',
      subtitle: 'Müşterilerimiz bizim hakkında ne diyor. Gerçek müşterilerden gerçek deneyimler.',
      items: [
        { name: 'Ayşe Y.', city: 'Viyana', text: 'Mükemmel kalite!' },
        { name: 'Mehmet K.', city: 'Graz', text: 'Hızlı teslimat.' },
        { name: 'Fatma S.', city: 'Linz', text: 'Profesyonel hizmet.' },
      ],
    },
    trust: {
      title: 'Güven',
      items: [
        { title: 'Sertifikalı', desc: 'AB standartları' },
        { title: 'Deneyimli', desc: '15+ yıl' },
        { title: 'Güvenilir', desc: 'Zamanında' },
        { title: 'Destek', desc: 'Müşteri hizmetleri' },
      ],
    },
    targetMarket: {
      title: 'Hedef Pazarlar',
      subtitle: 'Tüm Avrupa\'da varlık. 6 Avrupa ülkesine teslimat yapıyoruz.',
      markets: [
        { country: '🇦🇹 AT', cities: 'Viyana, Graz, Linz' },
        { country: '🇩🇪 DE', cities: 'Münih, Berlin, Hamburg' },
        { country: '🇳🇱 NL', cities: 'Amsterdam, Rotterdam' },
      ],
    },
    serviceAreas: {
      title: 'Teslimat Bölgeleri',
      description: 'Tüm Avrupa ülkelerine teslimat yapıyoruz. Hızlı ve güvenilir teslimat.',
      subtitle: 'Teslimat süresi: 4-10 gün',
    },
    installation: {
      title: 'Montaj',
      subtitle: 'Eğitimli montörler tarafından profesyonel kurulum. Yerinde ölçüm ve kapsamlı eğitim.',
      items: [
        { title: 'Ölçü', desc: 'Yerinde ölçüm' },
        { title: 'Montaj', desc: 'Profesyonel kurulum' },
        { title: 'Eğitim', desc: 'Kapsamlı eğitim' },
      ],
    },
    warranty: {
      title: 'Garanti',
      subtitle: 'Kapsamlı garanti ile güvenli alışveriş. Ürün garantisi, montaj garantisi ve ömür boyu destek.',
      items: [
        { title: 'Ürün', desc: '5 yıl garanti' },
        { title: 'Montaj', desc: '2 yıl garanti' },
        { title: 'Servis', desc: 'Ömür boyu destek' },
      ],
    },
    faq: {
      title: 'SSS',
      subtitle: 'Sık sorulan sorular ve cevaplar. Bilmeniz gereken her şey.',
      faqs: [
        { q: 'Teslimat ne kadar sürer?', a: 'Teslimat süresi genellikle hedef yere göre 4-10 gün arasındadır. Avusturya içindeki teslimatlar için teslimat süresi genellikle 4-6 gün sürerken, Almanya, Hollanda ve diğer Avrupa ülkelerine yapılan teslimatlar 7-10 gün sürebilir. Zamanında teslimatı sağlamak için güvenilir kargo şirketleri ile çalışıyoruz. Siparişiniz kargoya verildiğinde, gönderinizi her zaman takip edebileceğiniz bir takip numarası alırsınız.' },
        { q: 'Metrekare fiyatı ne kadar?', a: 'Fiyatlar ürün tipine, seçilen malzemeye ve istenen konfigürasyona göre değişir. Sineklikler yaklaşık 25€/m²\'den başlar, plise perde ve daha gelişmiş sistemler ise 35-60€/m² arasında olabilir. Kesin bir fiyat almak için ücretsiz ölçüm ve danışmanlık randevusu almanızı öneririz. Ekibimiz memnuniyetle size gelir, tüm pencereleri ve kapıları ölçer ve size yükümlülük olmayan kişisel bir teklif sunar.' },
        { q: 'Montaj hizmeti sunuyor musunuz?', a: 'Evet, tüm Avusturya\'da profesyonel montaj hizmeti sunuyoruz. Deneyimli montörlerimiz tüm sineklik sistemlerini uzmanlıkla kurmak için eğitilmiştir. Montaj hizmeti teslimatı, kurulumu ve sistemlerin kullanımına ilişkin kapsamlı bir eğitimi içerir. Diğer Avrupa ülkelerindeki müşteriler için yerel ortaklarla çalışıyoruz veya kendi montajı için detaylı kurulum talimatları içeren montaj kitleri gönderiyoruz.' },
        { q: 'Ürünler garanti kapsamında mı?', a: 'Evet, tüm ürünlerimiz üretici garantisi altındadır. Garanti süresi ürüne ve malzemeye göre değişir: Alüminyum sistemler 5 yıl garanti, fiberglas sistemler 3 yıl ve paslanmaz çelik bileşenler 10 yıla kadar garanti. Ayrıca montaj hizmeti için 2 yıl garanti sunuyoruz. Bir sorun oluşursa, buradayız ve hızlı bir çözüm için ilgileniyoruz. Müşteri hizmetlerimiz gün boyu size ulaşılabilir durumda.' },
      ],
    },
    cta: {
      title: 'Hazır Mısınız?',
      description: 'Ücretsiz teklif için bize ulaşın. Sizin için buradayız.',
      whatsapp: 'WhatsApp',
      call: 'Ara',
    },
    popup: {
      title: 'Bu Web Sitesine Ücretsiz Sahip Olun!',
    },
    contact: {
      phone: '+90 540 336 3873',
      whatsapp: '+90 540 336 3873',
      email: 'info@fenetresystems.com',
      address: 'Mariahilfer Straße 123, 1070 Viyana, Avusturya',
    },
  },
};
