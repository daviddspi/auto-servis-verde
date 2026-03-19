export const BUSINESS_CONFIG = {
  name: "Auto Servis Verde",
  logo: "/logo.svg",
  slug: "auto-servis-verde",
  tagline: "Najviši standard održavanja za Maserati i Ferrari vozila.",
  shortDescription: "Specijalizovani smo za servisiranje i održavanje premijum italijanskih brendova, uz vrhunsku dijagnostiku, mehaniku i elektroniku.",
  longDescription: "Smešten na Ledinama (Novi Beograd), Auto Servis Verde pruža profesionalne usluge servisa za luksuzna vozila poput Ferrari-ja, Maserati-ja, Lamborghini-ja i ostalih. Naš tim stručnjaka koristi najsavremeniju opremu kako bi osigurao vrhunske performanse vašeg vozila.",
  philosophy: {
    quote: "Poverite nam svoj automobil i dozvolite da opravdamo dobru reputaciju i zaslužimo vaše poverenje.",
    author: "Tim Verde"
  },
  stats: [
    { label: 'Specijalisti', value: 'Maserati & Ferrari' },
    { label: 'Brzina', value: 'Originalni delovi za par dana' },
    { label: 'Lokacija', value: 'Novi Beograd' },
    { label: 'Google Ocena', value: '4.8 / 5' },
  ],
  contact: {
    phones: ["+381 64 2742646"],
    emails: ["office@autoservisverde.rs"],
    locations: [
      {
        name: "Servis Ledine",
        address: "Rembrantova 36, Novi Beograd",
        mapUrl: "https://www.google.com/maps/place/Autoservisverde.rs/@44.8070857,20.343272,16z"
      }
    ],
    workingHours: "Pon–Pet: 09:00 – 17:00, Sub: Na poziv, Ned: Zatvoreno",
    social: {
      instagram: "https://www.instagram.com/maserati_ferrari_servis_/",
      facebook: "https://www.facebook.com/AutoVerdeservis",
      youtube: "https://www.youtube.com/channel/UC488JlCzxSMPuCawClSpAsw"
    }
  },
  services: [
    { 
      title: 'Maserati Granturismo Servis', 
      description: 'Zamena motornog ulja, filtera za vazduh i kabinu za modele Granturismo i Quattroporte V (4,2 i 4,7s).',
      price: '668 €',
      duration: 'Od 60 min'
    },
    { 
      title: 'Maserati Ghibli/Levante Servis', 
      description: 'Kompletan redovan servis za dizel i benzinske motore (3,0 i 3,8). Zamena svih filtera i ulja.',
      price: 'Od 590 €',
      duration: 'Od 60 min'
    },
    { 
      title: 'Servis automatskih menjača', 
      description: 'Zamena filtera, kartera, ispiranje sklopa i sipanje novog ulja za 6-stepene i 8-stepene menjače.',
      price: 'Od 550 €',
      duration: '2-4 sata'
    },
    { 
      title: 'Servis kočionog sistema', 
      description: 'Zamena diskova i pločica uz korišćenje vrhunskih komponenti. Precizno doziranje snage kočenja.',
      price: 'Od 339 €',
      duration: 'Od 2 sata'
    },
    { 
      title: 'Veliki servis motora', 
      description: 'Pumpe za vodu, kajiševi, zatezači i antifriz. Preporuka na svakih 50.000 km.',
      price: 'Od 1618 €',
      duration: '1-2 dana'
    },
    { 
      title: 'Auto-elektronika i dijagnostika', 
      description: 'Rešavanje najkompleksnijih kvarova elektronike pomoću najsavremenijih dijagnostičkih uređaja.',
      price: 'Upit',
      duration: 'Dogovor'
    },
  ],
  serviceCategories: [
    {
      title: "Redovno Održavanje (Mali i Veliki Servis)",
      services: [
        { name: "Maserati Granturismo / Quattroporte V (4.2 & 4.7s) - Redovan servis", price: "668 €" },
        { name: "Maserati Diesel (Ghibli, Levante, QP VI) - Redovan servis", price: "590 €" },
        { name: "Maserati Diesel (Ghibli, Levante, QP VI) - Veliki servis (sa malim)", price: "2308 €" },
        { name: "Maserati Benzin (Ghibli, Levante, QP VI) - Redovan servis", price: "610 €" },
        { name: "Maserati Benzin (Ghibli, Levante, QP VI) - Veliki servis (sa malim)", price: "2370 €" },
      ]
    },
    {
      title: "Servis Automatskog Menjača",
      services: [
        { name: "Osmostepeni menjač (Ghibli, Levante, Quattroporte VI)", price: "1072 €" },
        { name: "Šestostepeni F1 menjač (Granturismo, Quattroporte V)", price: "550 €" },
      ]
    },
    {
      title: "Kočioni Sistem (Pločice i Diskovi)",
      services: [
        { name: "Maserati Ghibli Diesel - Prednji diskovi i pločice", price: "1416 €" },
        { name: "Maserat Ghibli Diesel - Zadnji diskovi i pločice", price: "1012 €" },
        { name: "Maserati Levante Diesel - Prednji diskovi i pločice", price: "1314 €" },
        { name: "Maserati Levante Diesel - Zadnji diskovi i pločice", price: "1129 €" },
        { name: "Maserati Granturismo S - Prednji diskovi i pločice", price: "2712 €" },
        { name: "Maserati Granturismo S - Zadnji diskovi i pločice", price: "1770 €" },
      ]
    }
  ],
  reviews: [
    { 
      name: 'Goran Šuković', 
      location: 'Beograd', 
      vehicle: 'Ferrari Owner',
      service: 'Kompletan servis',
      text: 'Gde drugde čovek dopravi svog Ferarija ili Mazeratija? Pa, ovde !!! Najbolji su.', 
      rating: 5 
    },
    { 
      name: 'Kuki Mirde', 
      location: 'Novi Beograd', 
      vehicle: 'Maserati Client',
      service: 'Mehanika',
      text: 'Moram da pohvalim mehaničare hirurge, oni su najjači lekari na Balkanu, svaka čast na poštenju i trudu.', 
      rating: 5 
    },
    { 
      name: 'Vladimir Vukovic', 
      location: 'Beograd', 
      vehicle: 'VW Group',
      service: 'Servis menjača',
      text: 'Vrhunski majstori. Servis automatskog menjača je rađen dva puta, bolje nego u ovlašćenom servisu.', 
      rating: 5 
    },
    { 
      name: 'DOKTOR DOCA', 
      location: 'Ledine', 
      vehicle: 'Regular Client',
      service: 'Održavanje',
      text: 'Pošteno, profesionalno, tačno... VIŠE NEGO VRSTE! To "da te glava ne boli". Sve preporuke!', 
      rating: 5 
    },
    { 
      name: 'Dusica Dusica', 
      location: 'Novi Beograd', 
      vehicle: 'Alfa Romeo',
      service: 'Redovan servis',
      text: 'Vrlo pošteni majstori, svaka preporuka za Auto Servis Verde.', 
      rating: 5 
    },
  ],
  faqs: [
    {
      q: 'Da li koristite originalne delove?',
      a: 'Da, za sve premijum brendove obezbeđujemo originalne delove u roku od par dana direktno iz uvoza.',
    },
    {
      q: 'Koliko često treba raditi servis menjača?',
      a: 'Preporučujemo servis automatskog menjača na svakih 50.000 pređenih kilometara kako bi se produžio radni vek sklopa.',
    },
    {
      q: 'Da li servisirate i druge marke osim Maseratija?',
      a: 'Naravno, pored Maseratija, Ferrarija i Lamborghinija, servisiramo i brendove Alfa Romeo, Lancia, Jeep, Fiat i ostala putnička vozila.',
    },
    {
      q: 'Gde se tačno nalazite?',
      a: 'Nalazimo se na Novom Beogradu, naselje Ledine, u ulici Rembrantova 36. Lako smo dostupni odmah pored Surčinskog puta.',
    },
    {
      q: 'Da li je obavezno zakazivanje?',
      a: 'Preporučujemo da unapred zakažete termin za bilo koju vrstu servisa kako bismo vam posvetili maksimalnu pažnju.',
    },
  ]
};

;
