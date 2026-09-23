import { SubmenuItem, ServiceDetail, PortfolioProject, GalleryItem } from '../types';

export const SERVICE_SUBMENUS: SubmenuItem[] = [
  {
    id: 'service-gathering',
    title: 'Corporate & Family Gathering',
    tagline: 'Employee & family appreciation events that foster belonging and long-term synergy',
    category: 'Gathering',
    badge: 'Popular',
    iconName: 'Users',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'service-teambuilding',
    title: 'Team Building & Outbound',
    tagline: 'Psychological safety, experiential games, leadership and cross-department collaboration',
    category: 'Synergy',
    badge: 'High Impact',
    iconName: 'ShieldCheck',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'service-adventure',
    title: 'Adventure & Outdoor Expeditions',
    tagline: 'White water rafting, 4x4 offroad safari, ATV trail, paintball, and wilderness camps',
    category: 'Adventure',
    badge: 'Thrilling',
    iconName: 'Compass',
    image: 'https://images.unsplash.com/photo-1530866495561-507c9faab2ed?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'service-production',
    title: 'Event Management & Production',
    tagline: 'End-to-end turnkey event handling: stage, lighting, audio visual, master of ceremony, and media crew',
    category: 'Production',
    badge: 'Full Service',
    iconName: 'Layers',
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=600&q=80'
  }
];

export const SERVICE_DETAILS: Record<string, ServiceDetail> = {
  'service-gathering': {
    id: 'service-gathering',
    title: 'Corporate & Family Gathering',
    subtitle: 'Menciptakan Momen Kebersamaan yang Mengikat & Berkesan',
    category: 'Gathering & Appreciation',
    description: 'Program gathering yang dirancang khusus untuk mempererat tali silaturahmi antar karyawan, manajemen, dan keluarga besar perusahaan. Kami mengemas kegiatan ini dengan perpaduan relaksasi, fun engagement, apresiasi internal, dan entertainment berkualitas tinggi.',
    heroImage: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      { 
        url: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=800&q=80', 
        caption: 'Momen keakraban keluarga besar dan tim perusahaan saat makan bersama (Unsplash License)' 
      },
      { 
        url: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80', 
        caption: 'Sesi keynote interaktif & selebrasi milestone tahunan korporasi (Unsplash License)' 
      },
      { 
        url: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80', 
        caption: 'Panggung hiburan malam gala dinner & pembagian apresiasi award (Unsplash License)' 
      }
    ],
    highlights: [
      'Konsep acara disesuaikan dengan DNA dan corporate culture perusahaan',
      'Ice-breaking yang inklusif untuk segala usia (karyawan hingga anak-anak)',
      'Gala dinner berkelas dengan hiburan live acoustic, awarding night, dan doorprize show',
      'Pilihan akomodasi premium dari resort bintang 4 hingga luxury private villa',
      'Tim dokumentasi profesional (fotografer, videografer, & drone pilot)'
    ],
    activities: [
      'Fun Family Olympiad & Carnival Games',
      'Company Milestones & Awarding Night',
      'Themed Gala Dinner & Live Performance',
      'Morning Wellness & Sunrise Yoga Session',
      'Kids Activity Zone & Creative Workshop'
    ],
    sampleItinerary: [
      { time: '07:00 - 09:30', activity: 'Departure & Scenic Transit', notes: 'Executive AC bus dengan snack & games pembuka' },
      { time: '10:00 - 12:00', activity: 'Arrival, Welcome Drink & Opening Session', notes: 'Sambutan pimpinan & Ice Breaking interaktif' },
      { time: '12:00 - 13:30', activity: 'Buffet Lunch & Room Check-in', notes: 'Prasmanan katering Nusantara / Internasional' },
      { time: '13:30 - 16:30', activity: 'Fun Synergy Team Games', notes: 'Inflatable games, team building & fun competitions' },
      { time: '16:30 - 18:30', activity: 'Free Leisure & Sunset Coffee Break', notes: 'Waktu santai santap sore di area resort' },
      { time: '19:00 - 22:00', activity: 'Grand Gala Dinner & Awarding Night', notes: 'Live band, doorprize, selebrasi tim & kembang api' }
    ],
    inclusions: [
      'Transport bus pariwisata eksekutif AC Jakarta - Lokasi PP',
      'Akomodasi resort / hotel berbintang (twin/triple share)',
      'Konsumsi lengkap: 3x makan prasmanan + 2x coffee break snack',
      'Master of Ceremony (MC) profesional dwibahasa',
      'Tim fasilitator, game master, dan crew lapangan',
      'Sound system standar konser + panggung & backdrop',
      'Paket hadiah fun games & medali penghargaan',
      'Full dokumentasi foto, video cinematic teaser, dan drone',
      'Medical first responder standby & asuransi kegiatan'
    ],
    idealFor: [
      'Perusahaan korporasi & BUMN',
      'Divisi HRD, People & Culture, dan Corporate Communication',
      'Asosiasi industri & perkumpulan alumni profesional',
      'Keluarga besar karyawan (Family Gathering Tahunan)'
    ],
    startingPrice: 'Mulai Rp 650.000 / orang',
    minParticipants: 30,
    duration: '1 Hari (One Day) atau 2H1M (Overnight)',
    imageCaption: 'Dokumentasi Acara Gathering Tahunan Klien Korporasi Thrive Experience',
    faqs: [
      {
        q: 'Apakah konsep acara bisa dikustomisasi sesuai tema internal perusahaan?',
        a: 'Ya, 100% konsep kegiatan, tema seragam, tata letak panggung, hingga materi games akan diselaraskan dengan Core Values dan tema tahunan perusahaan Anda.'
      },
      {
        q: 'Bagaimana jika membawa anak-anak dan keluarga kecil peserta?',
        a: 'Kami menyediakan Kids Corner khusus dengan pendamping terlatih, mini-carnival games, dan workshop edukatif agar orang tua dapat mengikuti sesi utama dengan tenang.'
      },
      {
        q: 'Apakah Thrive menyediakan opsi akomodasi ramah difabel atau lansia?',
        a: 'Tentu. Tim kami selalu melakukan survey venue terlebih dahulu dan mengutamakan venue dengan aksesibilitas ramah keluarga serta fasilitas kesehatan terdekat.'
      }
    ]
  },

  'service-teambuilding': {
    id: 'service-teambuilding',
    title: 'Team Building & Outbound Training',
    subtitle: 'Membongkar Silo, Membangun Kepercayaan, & Menumbuhkan Ketangguhan Tim',
    category: 'Experiential Synergy',
    description: 'Bukan sekadar permainan seru-seruan fisik tanpa makna. Program outbound Thrive dirancang berbasis ilmu perilaku organisasi dan experiential learning (Kolb Model). Setiap simulasi menantang peserta untuk berkomunikasi jernih di bawah tekanan, mendelegasikan wewenang, dan saling percaya.',
    heroImage: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      { 
        url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80', 
        caption: 'Simulasi kolaborasi tim dan penyelarasan visi bersama (Unsplash License)' 
      },
      { 
        url: 'https://images.unsplash.com/photo-1526976668912-1a811878dd37?auto=format&fit=crop&w=800&q=80', 
        caption: 'Sesi outdoor team games di area alam terbuka (Unsplash License)' 
      },
      { 
        url: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=800&q=80', 
        caption: 'Debrief psikologis & fasilitasi refleksi performa tim (Unsplash License)' 
      }
    ],
    highlights: [
      'Struktur modul berbasis Experiential Learning dengan sesi debriefing terukur',
      'Fasilitator & trainer berlisensi BNSP bidang kepemanduan outbound',
      'Laporan observasi dinamika tim (Team Dynamics Assessment Report) pasca acara',
      'Peralatan simulasi berstandar keselamatan internasional (UIAA / CE certified)',
      'Game adaptif: dapat disesuaikan untuk level staf, supervisor, hingga jajaran C-Level'
    ],
    activities: [
      'Ice Breaking & Team Identity Creation',
      'Low Impact Trust-Building Challenges',
      'Medium Impact Problem-Solving Scenarios (Blind Walk, Minefield, Bridge Building)',
      'High Impact Resilience Simulation (Survival Mission & Strategic Trade)',
      'Facilitated Psychological Debrief & Action Plan Formulation'
    ],
    sampleItinerary: [
      { time: '08:00 - 08:30', activity: 'Grouping & Conditioning', notes: 'Pelepasan atribut jabatan & pembagian tim lintas unit' },
      { time: '08:30 - 10:00', activity: 'Synergy Energizer & Trust Drills', notes: 'Membongkar batasan canggung dan menguji kepercayaan' },
      { time: '10:00 - 10:15', activity: 'Energy Refresh Break', notes: 'Snack sehat, kelapa muda, dan hidrasi' },
      { time: '10:15 - 12:30', activity: 'Strategic Problem Solving Simulation', notes: 'Siklus tantangan: perencanaan, eksekusi, & evaluasi' },
      { time: '12:30 - 13:30', activity: 'Mindful Lunch & Networking', notes: 'Makan siang bersama tanpa sekat posisi' },
      { time: '13:30 - 15:30', activity: 'The Ultimate Team Challenge', notes: 'Satu misi besar di mana semua kelompok harus bersatu' },
      { time: '15:30 - 16:30', activity: 'Insightful Debrief & Commitment Wall', notes: 'Refleksi fasilitator & deklarasi komitmen kerja baru' }
    ],
    inclusions: [
      'Master Trainer & Fasilitator Outbound bersertifikasi BNSP',
      'Logistik dan peralatan permainan lengkap berstandar safety',
      'Arena lapangan outbound exclusive + tenda peneduh / aula',
      'Konsumsi: makan siang prasmanan + 2x snack coffee break',
      'Air mineral bebas isi ulang (hydration station)',
      'Name tag / bandana identitas kelompok peserta',
      'Team Dynamics Evaluation Report untuk manajemen HRD',
      'Tim First-Aid Kit & paramedis lapangan',
      'Asuransi kecelakaan diri seluruh peserta'
    ],
    idealFor: [
      'Tim baru terbentuk (New Team Mergers / Post-M&A)',
      'Divisi penjualan (Sales & Marketing Boost)',
      'Leadership Camp untuk calon manajer dan supervisor',
      'Perusahaan yang ingin menyelesaikan problem komunikasi internal'
    ],
    startingPrice: 'Mulai Rp 385.000 / orang',
    minParticipants: 20,
    duration: '1 Hari Penuh (Full Day: 6-8 Jam)',
    imageCaption: 'Aktivitas Team Building Dinamis & Outbound Fasilitasi Thrive Experience',
    faqs: [
      {
        q: 'Apakah games outbound melelahkan secara fisik atau berbahaya bagi usia senior?',
        a: 'Tidak. Kami merancang permainan bertingkat (low, medium, dynamic). Fokus utama adalah strategi berpikir dan komunikasi, bukan ketahanan fisik atletik.'
      },
      {
        q: 'Apakah kami mendapatkan laporan evaluasi setelah kegiatan?',
        a: 'Ya. Fasilitator kami mencatat pola perilaku kepemimpinan, hambatan komunikasi, dan sinergi tim, lalu menyusun laporan Team Dynamics Assessment untuk HRD.'
      },
      {
        q: 'Dapatkah program team building digabungkan dengan meeting tahunan?',
        a: 'Sangat bisa. Kami sering memadukan sesi formal Raker/Townhall di pagi hari dengan sesi team building outbound penyegar di siang atau sore harinya.'
      }
    ]
  },

  'service-adventure': {
    id: 'service-adventure',
    title: 'Adventure & Outdoor Expeditions',
    subtitle: 'Memacu Adrenalin, Menembus Batas, & Menikmati Keindahan Alam Bebas',
    category: 'Wilderness & Adrenaline',
    description: 'Bawa tim Anda keluar dari zona nyaman menuju keindahan alam bebas yang menantang. Dari mengarungi jeram sungai Citarik dan Cisadane, menembus jalur lumpur dengan jip 4x4 Land Rover klasik, hingga permainan strategi taktis paintball di tengah hutan pinus rimbun.',
    heroImage: 'https://images.unsplash.com/photo-1530866495561-507c9faab2ed?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      { 
        url: 'https://images.unsplash.com/photo-1533587851505-d119e13fa0d7?auto=format&fit=crop&w=800&q=80', 
        caption: 'Ekspedisi 4x4 Offroad melintasi jalur perkebunan teh & bukit berlumpur (Unsplash License)' 
      },
      { 
        url: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=800&q=80', 
        caption: 'Sensasi berkemah glamping mewah di tengah hutan pinus sejuk (Unsplash License)' 
      },
      { 
        url: 'https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?auto=format&fit=crop&w=800&q=80', 
        caption: 'Malam keakraban api unggun dan barbeque di alam terbuka (Unsplash License)' 
      }
    ],
    highlights: [
      'Standard Operating Procedure (SOP) keselamatan ekstrem ketat berstandar rescue',
      'Skipper rafting & driver offroad berlisensi resmi dengan jam terbang tinggi',
      'Peralatan pelampung, helm, perahu, dan tali bersertifikasi internasional',
      'Termasuk tim rescue air (swimmer team) dan unit medis siaga di titik rawan',
      'Asuransi kecelakaan diri khusus olahraga petualangan luar ruang'
    ],
    activities: [
      'White Water Rafting (Arung Jeram 5 km, 9 km, hingga 12 km Grade 3+)',
      '4x4 Offroad Safari Expedition (Trek Hutan Hambalang, Sukawana, atau Cisarua)',
      'Paintball War Simulation (Taktik militer di tengah hutan alam)',
      'River Tubing & Body Rafting Canyon',
      'Wilderness Bushcraft & Glamping Campfire Night'
    ],
    sampleItinerary: [
      { time: '08:30 - 09:30', activity: 'Arrival & Welcome Refreshment', notes: 'Kelapa muda, pisang rebus & safety waiver registration' },
      { time: '09:30 - 10:00', activity: 'Gear Fitting & Safety Briefing', notes: 'Pemasangan pelampung, helm, dan instruksi rescue dasar' },
      { time: '10:00 - 12:30', activity: 'White Water Rafting Expedition', notes: 'Menaklukkan 15+ jeram menantang dipandu skipper handal' },
      { time: '12:30 - 13:00', activity: 'Rest Area & Rescue Pickup', notes: 'Transit armada lokal kembali ke basecamp awal' },
      { time: '13:00 - 14:30', activity: 'Shower & Traditional Hot Lunch', notes: 'Makan siang prasmanan masakan khas Sunda lezat' },
      { time: '14:30 - 16:30', activity: 'Offroad Jeep Safari or Paintball Match', notes: 'Petualangan lanjutan melintasi jalur offroad perkebunan' }
    ],
    inclusions: [
      'Perahu karet arung jeram kualitas terbaik & dayung standar kompetisi',
      'Pelampung keselamatan (life jacket) & helm bersertifikat standar rescue',
      'Pemandu sungai (skipper) bersertifikasi + rescue swimmer standby',
      'Armada Jeep 4x4 lokal beserta driver handal untuk offroad safari',
      'Senjata paintball semi-otomatis, google mask, dan 50 peluru per peserta',
      'Ruang bilas, locker, dan fasilitas basecamp nyaman',
      'Makan siang prasmanan Sunda + kelapa muda segar',
      'Tim dokumentasi action-shot foto & video kamera tahan air',
      'Asuransi petualangan luar ruang (Full Coverage)'
    ],
    idealFor: [
      'Kelompok pencinta tantangan adrenalin & alam terbuka',
      'Reward trip untuk tim dengan performa terbaik (Sales Incentive)',
      'Komunitas otomotif dan pecinta petualangan luar ruang',
      'Organisasi yang ingin membangun mental tangguh dan keberanian'
    ],
    startingPrice: 'Mulai Rp 450.000 / orang',
    minParticipants: 15,
    duration: 'Half Day (4 Jam) hingga Full Day (8 Jam)',
    imageCaption: 'Petualangan Arung Jeram & Offroad Safari Ekspedisi Bersama Thrive Experience',
    faqs: [
      {
        q: 'Apakah peserta yang tidak bisa berenang aman mengikuti arung jeram?',
        a: 'Sangat aman! Seluruh peserta wajib mengenakan Life Jacket berkekuatan apung tinggi, didampingi skipper bersertifikasi, serta tim rescue air yang siaga di setiap jeram deras.'
      },
      {
        q: 'Berapa batasan usia untuk rafting dan offroad safari?',
        a: 'Untuk rafting jalur keluarga (5 km), usia minimal 7 tahun hingga 60 tahun (dalam kondisi fisik sehat tanpa riwayat penyakit jantung/asma akut).'
      },
      {
        q: 'Bagaimana bila cuaca hujan lebat turun?',
        a: 'Kami memiliki early warning system debit air sungai. Jika debit air melebihi batas aman, rute akan dialihkan ke skenario alternatif atau ditunda demi keselamatan mutlak.'
      }
    ]
  },

  'service-production': {
    id: 'service-production',
    title: 'Event Management & Production',
    subtitle: 'Solusi Turnkey Eksekusi Event: Audio Visual, Stage, Lighting, & Talent',
    category: 'Production & Show Direction',
    description: 'Mengubah ide kreatif menjadi panggung pertunjukan yang memukau. Tim produksi Thrive menangani seluruh aspek teknis: mulai dari visual 3D rendering venue, konstruksi panggung megah, sistem tata suara standar konser, tata lampu dinamis, multimedia LED screen, hingga manajemen talent dan artis.',
    heroImage: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      { 
        url: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=800&q=80', 
        caption: 'Panggung megah dengan tata cahaya dan audio visual spektakuler (Unsplash License)' 
      },
      { 
        url: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800&q=80', 
        caption: 'Ballroom gala event dengan panggung LED display modern (Unsplash License)' 
      },
      { 
        url: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=800&q=80', 
        caption: 'Selebrasi malam puncak acara dengan efek panggung berkilau (Unsplash License)' 
      }
    ],
    highlights: [
      'Visualisasi konsep venue berbasis 3D CAD & Digital Rendering sebelum eksekusi',
      'Sound System Line Array standar konser internasional (5.000 - 40.000 Watt)',
      'LED Screen Display P2.9 / P3.9 Indoor & Outdoor dengan refresh rate tinggi',
      'Show Director, Stage Manager, dan Floor Crew berpengalaman di event nasional',
      'Koneksi luas dengan MC profesional, band pengisi acara, dan artis ternama'
    ],
    activities: [
      'Grand Opening Ceremony & Product Launching',
      'Corporate Anniversary & Gala Dinner Show',
      'Conference, Hybrid Summit & Multi-camera Live Streaming',
      'Exhibition Booth Design & Fabrication',
      'Awarding Night & Entertainment Spectacular'
    ],
    sampleItinerary: [
      { time: 'H-1 Event', activity: 'Venue Ingress & Rigging Setup', notes: 'Instalasi panggung, struktur truss, LED screen, dan tata lampu' },
      { time: 'H-0 (09:00)', activity: 'Audio Visual Alignment & Calibration', notes: 'Penyetelan sistem tata suara, video switcher, dan delay speaker' },
      { time: 'H-0 (14:00)', activity: 'Full Technical Rehearsal (Gladi Resik)', notes: 'Gladi kotor & gladi bersih bersama MC, talent, dan cue director' },
      { time: 'H-0 (18:00)', activity: 'Doors Open & VIP Reception', notes: 'Ambience lighting, welcome music, dan registrasi tamu digital' },
      { time: 'H-0 (19:00)', activity: 'Main Show Execution', notes: 'Opening dance, speech, awarding session, dan penampilan bintang tamu' },
      { time: 'H-0 (22:30)', activity: 'Closing & Safe Egress', notes: 'Pembongkaran tertib dan serah terima materi rekaman dokumentasi' }
    ],
    inclusions: [
      'Panggung rigging / melamin customized sesuai ukuran venue',
      'Sistem tata suara (Sound system) premium beserta sound engineer ahli',
      'Tata lampu panggung (Moving head beam, par LED, follow spot, hazer effect)',
      'Videotron LED Screen resolusi tajam beserta video playback switcher',
      'Show Director, Stage Manager, Lighting Operator & Audio Engineer',
      'Master of Ceremony (MC) berpengalaman',
      'Multi-camera video shooting (Full HD / 4K) & drone aerial shoot',
      'Backstage hospitality management & genset kelistrikan cadangan'
    ],
    idealFor: [
      'Peluncuran produk baru (Product Launching)',
      'Ulang tahun korporasi (Corporate Anniversary & Gala Dinner)',
      'Malam penganugerahan (National Awarding Night)',
      'Konferensi industri berskala besar & konser apresiasi karyawan'
    ],
    startingPrice: 'Customized (Sesuai Spesifikasi Teknis & Skala Venue)',
    minParticipants: 50,
    duration: 'Persiapan H-1 hingga Hari-H (Turnkey Project)',
    imageCaption: 'Produksi Panggung & Tata Lampu Konser Korporasi oleh Thrive Experience',
    faqs: [
      {
        q: 'Apakah tim Thrive dapat membantu pengurusan izin keramaian kepolisian dan genset?',
        a: 'Ya. Sebagai EO profesional, kami menangani seluruh perizinan resmi kepolisian, satgas setempat, hingga koordinasi genset daya cadangan tanpa membebani klien.'
      },
      {
        q: 'Apakah bisa mengundang artis nasional atau bintang tamu tertentu?',
        a: 'Bisa. Kami memiliki jalur langsung dengan manajemen artis, band ternama, komika stand-up, dan MC papan atas Indonesia dengan biaya negosiasi transparan.'
      },
      {
        q: 'Bagaimana jika event kami diadakan secara hybrid (online & offline)?',
        a: 'Kami memiliki tim broadcast khusus dengan setup multi-kamera PTZ/Broadcast, audio interface studio, dan platform streaming aman berkapasitas ribuan pemirsa online.'
      }
    ]
  }
};

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: 'proj-1',
    client: 'PT Astra International Tbk (Divisi Sales & Network)',
    title: 'National Sales Gathering & Leadership Synergy 2024',
    category: 'Corporate Gathering & Outbound',
    location: 'Puncak Highlands, Bogor',
    participants: 320,
    year: '2024',
    challenge: 'Menggabungkan 320 kepala cabang dari 18 provinsi yang memiliki target penjualan agresif dan latar belakang budaya berbeda, dalam format yang tidak membosankan.',
    solution: 'Thrive menyusun konsep 2 Hari 1 Malam: Sesi energizer team building di alam terbuka, simulasi strategi kolaboratif, serta malam apresiasi bernuansa panggung concert-grade.',
    outcome: 'Skor kepuasan peserta mencapai 99.2%. Pimpinan mengapresiasi mencairnya silo komunikasi antar cabang yang terbukti meningkatkan koordinasi internal.',
    deliverables: ['Full Event Concept', '40+ Fasilitator & Crew', 'Panggung LED 12x4m & Lighting', 'Akomodasi 320 Pax', 'Aftermovie 4K']
  },
  {
    id: 'proj-2',
    client: 'Bank Mandiri (Persero) Tbk (Regional Office)',
    title: 'High-Impact Team Building & Innovation Camp',
    category: 'Team Building & Training',
    location: 'Lembang, Bandung',
    participants: 180,
    year: '2024',
    challenge: 'Menumbuhkan budaya inovasi digital dan ketangkasan (agility) di kalangan manajer muda pasca perombakan struktur organisasi.',
    solution: 'Program dirancang dengan metode Experiential Learning: simulasi tantangan bisnis dinamis, debriefing psikologis mendalam, dan sesi refleksi komitmen bersama.',
    outcome: 'Teridentifikasinya 15 calon katalis perubahan internal dan terbentuknya kesepakatan kolaborasi lintas divisi tanpa birokrasi berbelit.',
    deliverables: ['Custom Simulation Design', 'Trainer Bersertifikat BNSP', 'Assessment Report Dinamika Tim', 'Dokumentasi Teaser']
  },
  {
    id: 'proj-3',
    client: 'Shopee Indonesia (Operations & Fulfillment Team)',
    title: 'Wilderness Adventure: Rafting Expedition & 4x4 Jeep Safari',
    category: 'Adventure Expeditions',
    location: 'Sungai Citarik & Sukabumi',
    participants: 140,
    year: '2023',
    challenge: 'Memberikan pelepasan penat (stress release) maksimal bagi divisi operasional dengan ritme kerja 24/7 dan perputaran shift yang padat.',
    solution: 'Ekspedisi arung jeram 12 km jeram grade 3-4 di Citarik dengan pengawalan tim rescue ketat, dilanjutkan reli jip offroad menembus hutan tropis Sukabumi.',
    outcome: 'Nol insiden keselamatan (Zero Accident). Energi dan semangat kerja tim meningkat signifikan saat kembali bertugas di distribution center.',
    deliverables: ['25 Armada Perahu & Jip', 'Rescue Team Siaga', 'Katering Khas Sunda', 'Drone & Action Cam Dokumentasi']
  },
  {
    id: 'proj-4',
    client: 'PT Pertamina (Persero) Hulu Energi',
    title: 'Annual Stakeholders Summit & Awarding Gala Night',
    category: 'Event Management & Production',
    location: 'Bogor Iconic Convention Hall',
    participants: 450,
    year: '2023',
    challenge: 'Menyelenggarakan malam penganugerahan prestisius bagi mitra dan pejabat kementerian dengan standar protokol keamanan tinggi dan tampilan panggung spektakuler.',
    solution: 'Turnkey stage production: tata panggung megah melamin lengkung, videotron LED screen resolusi tinggi, audio visual berstandar konser, dan koordinasi VIP hospitality.',
    outcome: 'Acara berjalan tepat waktu tanpa kendala teknis (Zero Glitch). Klien memesan kembali Thrive sebagai mitra EO untuk tahun berikutnya.',
    deliverables: ['Stage & Lighting Rigging', 'LED Screen P2.9', 'Show Direction & MC', 'VIP Hospitality Protocol']
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Sesi Kolaborasi Outbound Sinergi Tim',
    category: 'teambuilding',
    location: 'Bogor Highlands',
    aspect: 'wide',
    imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'gal-2',
    title: 'Adrenalin Jeram Sungai Arung Rafting',
    category: 'adventure',
    location: 'Sungai Citarik, Sukabumi',
    aspect: 'wide',
    imageUrl: 'https://images.unsplash.com/photo-1530866495561-507c9faab2ed?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'gal-3',
    title: 'Malam Penghargaan & Gala Dinner Korporasi',
    category: 'production',
    location: 'Ballroom Resort Puncak',
    aspect: 'wide',
    imageUrl: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'gal-4',
    title: 'Kebersamaan Hangat Gathering Karyawan',
    category: 'gathering',
    location: 'Resort Lembang, Bandung',
    aspect: 'wide',
    imageUrl: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'gal-5',
    title: 'Reli Jeep Safari Offroad Menembus Hutan',
    category: 'adventure',
    location: 'Sukawana, Lembang',
    aspect: 'wide',
    imageUrl: 'https://images.unsplash.com/photo-1533587851505-d119e13fa0d7?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'gal-6',
    title: 'Panggung Spektakuler dengan Tata Lampu Megah',
    category: 'production',
    location: 'Convention Hall Bogor',
    aspect: 'wide',
    imageUrl: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=800&q=80'
  }
];

export const CLIENT_LOGOS: string[] = [
  'PT Astra International Tbk',
  'Bank Mandiri (Persero) Tbk',
  'PT Telkom Indonesia Tbk',
  'Shopee Indonesia',
  'PT Pertamina (Persero)',
  'PT Unilever Indonesia Tbk',
  'BCA (Bank Central Asia)',
  'Kementerian BUMN RI',
  'PT Kalbe Farma Tbk',
  'Tokopedia Indonesia',
  'PT Danone Indonesia',
  'PT Pegadaian (Persero)'
];
