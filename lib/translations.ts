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
      title: 'Fliegengitter Fenster - Qualität & Meisterschaft',
      subtitle: 'Maßgefertigte Insektenschutzlösungen für Fenster, Türen, Balkone und Terrassen. Premium Qualität aus EU-Produktion mit professioneller Montage in ganz Österreich und Europa. Österreich Fliegengitter und Insektenschutz Experte. Schützen Sie Ihr Zuhause effektiv vor Insekten und genießen Sie frische Luft ohne Störungen.',
      cta: 'Kostenloses Angebot Anfordern',
    },
    products: {
      title: 'Unsere Produkte',
      subtitle: 'Hochwertige Insektenschutzlösungen für jeden Bedarf. Von einfachen Fliegengittern bis zu fortschrittlichen Rollosystemen - wir haben die passende Lösung für Ihr Zuhause. Österreich Fliegengitter, Plissee, Jalousien und Zip Rollos für Fenster, Türen, Balkone und Terrassen. Maßgefertigte Lösungen nach Ihren genauen Maßen für perfekte Passform. Wetterfest, langlebig und pflegeleicht für jahrelange Nutzung.',
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
      description: 'Mit über 15 Jahren Erfahrung in der Branche sind wir Ihr vertrauenswürdiger Partner für Insektenschutzlösungen in Österreich und ganz Europa. Österreich Fliegengitter und Plissee Experte. Maßgefertigte Lösungen für Fenster, Türen, Balkone und Terrassen. Premium Qualität aus EU-Produktion mit professioneller Montage. Wir bieten kostenlose Beratung, kostenlose Messung und umfassende Garantie. Unser erfahrenes Team steht Ihnen rund um die Uhr zur Verfügung.',
      experience: '15+ Jahre Erfahrung',
      countries: '6+ Länder',
      quality: 'Premium Qualität',
      support: '24/7 Support',
      advantagesTitle: 'Unsere Vorteile',
      advantages: [
        'Maßgefertigte Lösungen für perfekte Passform',
        'Premium Materialien aus EU-Produktion',
        'Professionelle Montage in ganz Österreich',
        'Europaweite Lieferung in 4-10 Tagen',
        'Umfassende Garantie bis zu 10 Jahren',
        'Kostenlose Beratung und Messung',
        'Wetterfest und langlebig',
        'Pflegeleicht und wartungsarm',
        'Vielseitig für alle Fenster- und Türarten',
        'Hervorragender Kundenservice',
      ],
    },
    process: {
      title: 'So Geht Es',
      subtitle: 'Einfacher Prozess von Anfrage bis Montage. In nur 4 einfachen Schritten zu Ihrem perfekten Insektenschutz. Wir übernehmen alles von der Messung bis zur Installation. Kostenlose Beratung vor Ort, transparente Preisgestaltung, schnelle Lieferung und professionelle Montage durch erfahrenes Team.',
      steps: [
        { title: '1', desc: 'Anfrage senden' },
        { title: '2', desc: 'Angebot erhalten' },
        { title: '3', desc: 'Bestellung' },
        { title: '4', desc: 'Montage' },
      ],
    },
    features: {
      title: 'Eigenschaften',
      subtitle: 'Was uns von anderen unterscheidet. Langlebige Materialien, einfache Installation und wetterfeste Konstruktion. Unsere Produkte werden aus hochwertigen EU-Materialien hergestellt und sind für den ganzjährigen Einsatz geeignet. Pflegeleicht, wartungsarm und mit umfassender Garantie für Ihre Sicherheit.',
      items: [
        { title: 'Hochwertige Materialien', desc: 'EU-Produktion für maximale Langlebigkeit und Zuverlässigkeit' },
        { title: 'Wetterfest', desc: 'Für alle Witterungsbedingungen geeignet, ganzjähriger Einsatz' },
        { title: 'Pflegeleicht', desc: 'Einfache Reinigung und minimale Wartung für langanhaltende Schönheit' },
        { title: 'Langlebig', desc: 'Robuste Konstruktion für jahrelange Nutzung ohne Qualitätsverlust' },
      ],
    },
    quality: {
      title: 'Materialien & Qualität',
      description: 'Wir verwenden nur hochwertige Materialien für beste Ergebnisse. Aluminium, Fiberglas und Edelstahl nach EU-Standards. Alle Materialien werden in der EU hergestellt und erfüllen die strengsten Qualitätsstandards. Langlebig, wetterfest und pflegeleicht für jahrelange Nutzung. Umfassende Garantie auf alle Materialien für Ihre Sicherheit.',
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
      title: 'Einsatzbereiche',
      subtitle: 'Vielseitige Lösungen für verschiedene Anwendungen. Von Wohnhäusern bis zu gewerblichen Gebäuden - wir haben die passende Lösung. Ideal für Fenster, Türen, Balkone, Terrassen und Wintergärten. Perfekt für Wohnhäuser, Apartments, Büros, Hotels und Restaurants. Maßgefertigt nach Ihren spezifischen Anforderungen.',
      items: [
        { title: 'Wohnhäuser', desc: 'Schutz für Familien mit Kindern und Haustieren' },
        { title: 'Büros', desc: 'Professioneller Insektenschutz für Arbeitsplätze' },
        { title: 'Hotels', desc: 'Komfortable Lösungen für Gäste' },
      ],
    },
    testimonials: {
      title: 'Kundenstimmen',
      subtitle: 'Was unsere Kunden über uns sagen. Echte Erfahrungen von echten Kunden aus ganz Österreich und Europa. Über 10.000 zufriedene Kunden vertrauen auf unsere Qualität und unseren Service. Lesen Sie, was unsere Kunden über unsere Produkte und unseren Kundenservice sagen.',
      items: [
        { name: 'Maria M.', city: 'Wien', text: 'Ausgezeichnete Qualität! Die Fliegengitter passen perfekt und der Service war hervorragend.' },
        { name: 'Thomas K.', city: 'Graz', text: 'Schnelle Lieferung und professionelle Montage. Sehr empfehlenswert für jeden, der hochwertige Insektenschutzlösungen sucht.' },
        { name: 'Anna S.', city: 'Linz', text: 'Professioneller Service von Anfang bis Ende. Die Beratung war kostenlos und das Angebot transparent.' },
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
        { country: '🇦🇹', cities: 'Wien, Graz, Linz' },
        { country: '🇩🇪', cities: 'München, Berlin, Hamburg' },
        { country: '🇳🇱', cities: 'Amsterdam, Rotterdam' },
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
        { q: 'Wie lange dauert die Montage?', a: 'Die Montage dauert in der Regel 1-2 Stunden pro Fenster oder Tür. Bei größeren Projekten kann es bis zu einem Tag dauern. Unsere Monteure sind spezialisiert und arbeiten effizient.' },
        { q: 'Bieten Sie kostenlose Messung an?', a: 'Ja, wir bieten kostenlose Messung und Beratung vor Ort an. Unser Team kommt gerne zu Ihnen vorbei, misst alle Fenster und Türen und erstellt ein individuelles Angebot ohne Verpflichtung.' },
        { q: 'Wie lange ist die Garantie?', a: 'Wir bieten bis zu 10 Jahre Garantie auf ausgewählte Produkte und Komponenten. Außerdem bieten wir 2 Jahre Garantie auf die Montageleistung. Alle Garantiebedingungen werden im Angebot detailliert aufgeführt.' },
        { q: 'Liefern Sie in ganz Österreich?', a: 'Ja, wir liefern und montieren in ganz Österreich. Außerdem bieten wir europaweite Lieferung in 6 Ländern an: Deutschland, Niederlande, Belgien, Frankreich und Schweiz. Die Lieferzeit beträgt 4-10 Tage.' },
        { q: 'Welche Materialien verwenden Sie?', a: 'Wir verwenden nur hochwertige Materialien aus EU-Produktion. Aluminium, Fiberglas und Edelstahl nach EU-Standards. Alle Materialien sind wetterfest, langlebig und pflegeleicht für jahrelange Nutzung.' },
      ],
    },
    cta: {
      title: 'Bereit?',
      description: 'Kontaktieren Sie uns für ein kostenloses Angebot. Wir sind für Sie da.',
      whatsapp: 'WhatsApp',
      call: 'Anrufen',
    },
    popup: {
      title: 'Kostenlose Website!',
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
      title: 'Sineklik Pencereleri - Kalite & Ustalık',
      subtitle: 'Avusturya sineklik ve plise sineklik lideri. Avusturya plise perde ve tüm sineklik çözümleri için en kaliteli hizmet. Avusturya sineklik ve böcek koruma uzmanıyız. Pencereler, kapılar ve balkonlar için ölçüye göre üretilen sistemler. En yüksek kalite, uzun ömürlü malzemeler ve Avrupa genelinde profesyonel montaj. Evinizi etkili bir şekilde böceklerden koruyun ve taze havanın tadını çıkarın.',
      cta: 'Ücretsiz Teklif Alın',
    },
    products: {
      title: 'Ürünlerimiz',
      subtitle: 'Her ihtiyaç için yüksek kaliteli sineklik çözümleri. Basit sinekliklerden gelişmiş perde sistemlerine kadar - eviniz için uygun çözümü sunuyoruz. Avusturya sineklik, plise sineklik, jaluzi ve zip perde için lider çözümler. Pencereler, kapılar, balkonlar ve teraslar için ölçüye göre üretilen sistemler. Mükemmel uyum için ölçüye göre üretilen çözümler. Hava koşullarına dayanıklı, uzun ömürlü ve bakım kolaylığı ile yıllarca kullanım.',
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
      description: 'Sektörde 15 yılı aşkın deneyimimizle, Avusturya ve tüm Avrupa\'daki en güvenilir sineklik çözümleri ortağınızız. Avusturya sineklik ve plise sineklik lideri. Pencereler, kapılar, balkonlar ve teraslar için ölçüye göre üretilen çözümler. AB üretiminden gelen premium kalite ve profesyonel montaj hizmeti. Ücretsiz danışmanlık, ücretsiz ölçüm ve kapsamlı garanti sunuyoruz. Deneyimli ekibimiz gün boyu size hizmet vermek için hazır.',
      experience: '15+ Yıl Deneyim',
      countries: '6+ Ülke',
      quality: 'Premium Kalite',
      support: '7/24 Destek',
      advantagesTitle: 'Avantajlarımız',
      advantages: [
        'Mükemmel uyum için ölçüye göre üretilen çözümler',
        'AB üretiminden gelen premium malzemeler',
        'Tüm Avusturya\'da profesyonel montaj',
        '4-10 günde Avrupa genelinde teslimat',
        '10 yıla kadar kapsamlı garanti',
        'Ücretsiz danışmanlık ve ölçüm',
        'Hava koşullarına dayanıklı ve uzun ömürlü',
        'Bakım kolaylığı ve az bakım gerektirir',
        'Tüm pencere ve kapı türleri için çok yönlü',
        'Mükemmel müşteri hizmetleri',
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
        { country: '🇦🇹', cities: 'Viyana, Graz, Linz' },
        { country: '🇩🇪', cities: 'Münih, Berlin, Hamburg' },
        { country: '🇳🇱', cities: 'Amsterdam, Rotterdam' },
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
        { q: 'Montaj ne kadar sürer?', a: 'Montaj genellikle her pencere veya kapı için 1-2 saat sürer. Daha büyük projelerde bir güne kadar sürebilir. Montajcılarımız uzman ve verimli çalışır.' },
        { q: 'Ücretsiz ölçüm sunuyor musunuz?', a: 'Evet, yerinde ücretsiz ölçüm ve danışmanlık sunuyoruz. Ekibimiz gelip tüm pencereleri ve kapıları ölçer ve yükümlülük olmadan kişisel bir teklif oluşturur.' },
        { q: 'Garanti ne kadar süre?', a: 'Seçili ürünler ve bileşenler için 10 yıla kadar garanti sunuyoruz. Ayrıca montaj hizmeti için 2 yıl garanti veriyoruz. Tüm garanti koşulları teklifte detaylı olarak listelenir.' },
        { q: 'Tüm Avusturya\'ya teslimat yapıyor musunuz?', a: 'Evet, tüm Avusturya\'ya teslimat ve montaj yapıyoruz. Ayrıca 6 Avrupa ülkesine Avrupa genelinde teslimat sunuyoruz: Almanya, Hollanda, Belçika, Fransa ve İsviçre. Teslimat süresi 4-10 gündür.' },
        { q: 'Hangi malzemeleri kullanıyorsunuz?', a: 'Sadece AB üretiminden gelen yüksek kaliteli malzemeler kullanıyoruz. AB standartlarına göre alüminyum, fiberglas ve paslanmaz çelik. Tüm malzemeler hava koşullarına dayanıklı, uzun ömürlü ve bakım kolaylığı ile yıllarca kullanım için idealdir.' },
        { q: 'Ücretsiz teklif alabilir miyim?', a: 'Evet, ücretsiz ve yükümlülüksüz bir teklif isteyebilirsiniz. Telefon, WhatsApp veya E-posta ile bizimle iletişime geçin. Yerinde ölçüm yapıyoruz ve 24-48 saat içinde detaylı bir teklif oluşturuyoruz.' },
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
