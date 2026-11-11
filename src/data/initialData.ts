import {
  LayananItem,
  ProjectItem,
  ArtikelItem,
  RegulasiItem,
  InformasiPublikItem,
  TestimoniItem,
  ClientItem,
  TeamMember,
  SiteSettings,
  PermohonanMessage
} from '../types';

export const HERO_IMAGE = '/src/assets/images/hero_industrial_facility_1794365758667.jpg';
export const CNC_IMAGE = '/src/assets/images/cnc_precision_machining_1794365758665.jpg';
export const LASER_IMAGE = '/src/assets/images/laser_cutting_fabrication_1794365758854.jpg';
export const HQ_IMAGE = '/src/assets/images/corporate_engineering_hq_1794365759440.jpg';

export const initialSiteSettings: SiteSettings = {
  companyName: 'PPID Kemenag Kota Mojokerto',
  subName: 'Pusat Layanan Keterbukaan Informasi & Presisi Manufaktur',
  tagline: 'Solusi Rekayasa Presisi, Fabrikasi Logam Modern, dan Layanan Informasi Publik Terpercaya',
  phone: '(0321) 322123',
  whatsapp: '+62 812-3456-7890',
  email: 'ppid.kemenagkotamojokerto@kemenag.go.id',
  address: 'Jl. Taman Siswa No. 16, Mergelo, Magersari',
  city: 'Kota Mojokerto, Jawa Timur 61318',
  operationalHours: 'Senin - Jumat: 07.30 - 16.00 WIB',
  primaryColor: '#1E3A8A',
  accentColor: '#EA580C',
  metaTitle: 'PPID Kemenag Kota Mojokerto - Precision Manufacturing & Informasi Publik',
  metaDescription: 'Portal Resmi PPID Kemenag Kota Mojokerto: Solusi Manufaktur Modern, Precision Engineering, Fabrikasi Logam, Industrial Automation, dan Layanan Keterbukaan Informasi Publik.',
  metaKeywords: 'PPID Kemenag Kota Mojokerto, manufaktur Mojokerto, precision engineering, fabrikasi logam, CNC machining, laser cutting, industrial automation, informasi publik, Kemenag Mojokerto',
};

export const initialLayananList: LayananItem[] = [
  {
    id: 'layanan-1',
    slug: 'fabrikasi-logam-presisi',
    title: 'Fabrikasi Logam & Heavy Structure',
    category: 'Manufaktur',
    shortDesc: 'Fabrikasi baja struktural, sheet metal presisi, tangki industri, dan ducting berstandar mutu tinggi.',
    description: 'Layanan fabrikasi logam komprehensif mencakup pemotongan, pembentukan, perakitan, dan pengelasan konstruksi baja berat hingga lembaran plat tipis (sheet metal). Didukung oleh peralatan bending hidrolik berkapasitas besar dan tenaga juru las bersertifikasi migas/industri.',
    image: LASER_IMAGE,
    iconName: 'Hammer',
    benefits: [
      'Toleransi dimensi presisi hingga ±0.5 mm pada konstruksi berat',
      'Material bersertifikasi mill certificate (SS400, SUS304, SUS316L, Hardox)',
      'Pengujian Non-Destructive Testing (NDT) Dye Penetrant & Ultrasonic',
      'Kapasitas produksi hingga 150 ton struktur per bulan'
    ],
    specifications: [
      { label: 'Kapasitas Plat', value: 'Ketebalan 0.8 mm – 50 mm' },
      { label: 'Metode Pengelasan', value: 'SMAW, GTAW (TIG), GMAW (MIG/MAG), SAW' },
      { label: 'Sertifikasi Juru Las', value: 'Welder Class 1 & 2 Kemenaker / AWS D1.1' },
      { label: 'Finishing', value: 'Sandblasting Sa 2.5, Epoxy Coating, Hot-Dip Galvanize' }
    ],
    faqs: [
      {
        question: 'Material apa saja yang dapat difabrikasi?',
        answer: 'Kami melayani Mild Steel, Carbon Steel (ASTM A36, SS400), Stainless Steel (SUS 201, 304, 316L), Aluminium Alloy, dan wear plate seperti Hardox.'
      },
      {
        question: 'Apakah fabrikasi dilengkapi sertifikat uji pengelasan?',
        answer: 'Ya, seluruh proyek kritis dilengkapi WPS (Welding Procedure Specification), PQR, dan laporan inspeksi visual/NDT.'
      }
    ],
    featured: true,
  },
  {
    id: 'layanan-2',
    slug: 'cnc-machining-5-axis',
    title: 'CNC Machining 5-Axis Presisi',
    category: 'Presisi',
    shortDesc: 'Pemesinan milling dan turning CNC tingkat lanjut dengan toleransi ultra-ketat hingga level mikron (±0.005 mm).',
    description: 'Unit machining presisi dilengkapi mesin CNC Milling 5-Axis dan CNC Lathe mutakhir untuk pembuatan komponen kompleks, cetakan mold/dies, impeler turbin, dan suku cadang mesin otomotif/alat berat.',
    image: CNC_IMAGE,
    iconName: 'Cpu',
    benefits: [
      'Kemampuan pengerjaan geometri rumit dalam sekali setup penjepitan',
      'Toleransi ultra-presisi hingga ±0.005 mm',
      'Inspeksi dimensi dengan CMM (Coordinate Measuring Machine) terkalibrasi',
      'Cocok untuk prototype cepat maupun produksi massal serial'
    ],
    specifications: [
      { label: 'Sumbu Pengerjaan', value: '3-Axis, 4-Axis, hingga simultan 5-Axis' },
      { label: 'Kecepatan Spindle', value: 'Hingga 18,000 RPM high-speed milling' },
      { label: 'Ukuran Meja Kerja', value: 'X: 1,200 mm, Y: 800 mm, Z: 600 mm' },
      { label: 'Software CAM', value: 'Mastercam 2026, Siemens NX, Fusion 360' }
    ],
    faqs: [
      {
        question: 'Format file 3D apa yang didukung untuk pesanan CNC?',
        answer: 'Kami menerima file STEP (.stp), IGES (.igs), Parasolid (.x_t), SolidWorks (.sldprt), dan DWG/DXF 2D.'
      },
      {
        question: 'Berapa jumlah minimum order (MOQ) untuk CNC?',
        answer: 'Kami melayani mulai dari pembuatan 1 unit prototype hingga ribuan unit produksi serial batch.'
      }
    ],
    featured: true,
  },
  {
    id: 'layanan-3',
    slug: 'laser-cutting-fiber-plate',
    title: 'Laser Cutting Fiber Daya Tinggi',
    category: 'Presisi',
    shortDesc: 'Pemotongan plat logam menggunakan teknologi Fiber Laser 12kW berkecepatan tinggi dengan potongan bersih bebas burr.',
    description: 'Teknologi pemotongan laser fiber terbaru yang mampu memotong aneka jenis plat logam dengan kecepatan tinggi, akurasi kontur maksimal, dan hasil sayatan yang halus tanpa memerlukan proses deburring sekunder yang memakan waktu.',
    image: LASER_IMAGE,
    iconName: 'Zap',
    benefits: [
      'Akurasi pemotongan kontur mikro ±0.03 mm',
      'Permukaan potongan bersih, sudut tajam, dan minim distorsi termal',
      'Software nesting otomatis untuk efisiensi pemakaian bahan baku hingga 92%',
      'Kecepatan potong hingga 40 meter per menit pada plat tipis'
    ],
    specifications: [
      { label: 'Daya Laser', value: 'Fiber Laser Resonator 12,000 Watt (12kW)' },
      { label: 'Dimensi Meja Potong', value: 'Exchange Table 2,000 mm x 6,000 mm' },
      { label: 'Maks Carbon Steel', value: 'Hingga ketebalan 32 mm' },
      { label: 'Maks Stainless Steel', value: 'Hingga ketebalan 25 mm (Gas N2 Clean Cut)' }
    ],
    faqs: [
      {
        question: 'Apakah hasil potongan laser stainless langsung siap las?',
        answer: 'Ya, penggunaan gas assist Nitrogen murni 99.999% menghasilkan potongan bebas oksida sehingga langsung siap untuk proses pengelasan higienis.'
      }
    ],
    featured: true,
  },
  {
    id: 'layanan-4',
    slug: 'welding-presisi-tig-mig',
    title: 'Welding Presisi & Robotik',
    category: 'Manufaktur',
    shortDesc: 'Pengelasan presisi TIG (GTAW), MIG/MAG (GMAW), dan sel pengelasan robotik otomatis untuk hasil sambungan homogen.',
    description: 'Pusat pengelasan tersertifikasi dengan fasilitas workstation berpenyedot asap, fixture kustom, serta unit Robotic Welding cell untuk konsistensi manik las yang estetis dan berdaya tahan mekanis tinggi.',
    image: HERO_IMAGE,
    iconName: 'Flame',
    benefits: [
      'Integritas penetrasi pengelasan 100% lolos radiografi',
      'Hasil las minim deformasi dengan thermal control ketat',
      'Stasiun robotik menjamin repetisi hasil las identik antar produk',
      'Sanitary welding untuk industri makanan, farmasi, dan kimia'
    ],
    specifications: [
      { label: 'Peralatan', value: 'Fronius TPS/i, Kemppi MasterTig, Fanuc Welding Robot' },
      { label: 'Gas Pelindung', value: 'Argon murni, Ar/CO2 mix, Helium Blend' },
      { label: 'Cakupan Material', value: 'Titanium, SS316L, Aluminium 6061, Duplex, Inconel' },
      { label: 'Standar Inspeksi', value: 'ASME Section IX, AWS D1.1 & D1.6' }
    ],
    faqs: [
      {
        question: 'Apakah melayani pengelasan material aluminium dan titanium?',
        answer: 'Ya, kami memiliki stasiun las AC/DC TIG khusus dengan kontrol pulse frekuensi tinggi untuk aluminium dan inert chamber box untuk titanium.'
      }
    ],
    featured: true,
  },
  {
    id: 'layanan-5',
    slug: 'assembly-dan-surface-finishing',
    title: 'Assembly & Surface Finishing',
    category: 'Manufaktur',
    shortDesc: 'Perakitan mekanikal-elektrikal, sandblasting Sa 2.5, powder coating elektrostatik, dan electroplating tahan korosi.',
    description: 'Solusi satu atap (one-stop solution) mulai dari perakitan sub-assembly mesin, integrasi bearing/pneumatik, hingga perlindungan permukaan anti-karat menggunakan cat oven industri berkualitas internasional.',
    image: HQ_IMAGE,
    iconName: 'Wrench',
    benefits: [
      'Ruang oven powder coating hingga panjang 6 meter',
      'Ketahanan salt spray test di atas 1,000 jam untuk proteksi maritim',
      'Perakitan mekanis berpedoman pada SOP torque meter terkalibrasi',
      'Pengemasan ekspor dengan wooden crate standar ISPM 15'
    ],
    specifications: [
      { label: 'Fasilitas Blasting', value: 'Steel Grit & Glass Bead Blasting Booth' },
      { label: 'Ketebalan Cat', value: 'Dry Film Thickness (DFT) 80 – 350 mikron' },
      { label: 'Uji Kualitas', value: 'Cross Hatch Adhesion Test ASTM D3359' },
      { label: 'Area Assembly', value: '1,500 m² clean workshop floor' }
    ],
    faqs: [
      {
        question: 'Warna cat apa saja yang tersedia untuk finishing?',
        answer: 'Tersedia seluruh palet warna standar RAL Classic, finishing matte, gloss, texture, hingga zinc-rich primer anti karat.'
      }
    ],
    featured: false,
  },
  {
    id: 'layanan-6',
    slug: 'industrial-automation-plc',
    title: 'Industrial Automation & PLC',
    category: 'Otomasi',
    shortDesc: 'Rancang bangun sistem kendali otomatis, panel kontrol PLC, SCADA, HMI, dan integrasi sensor IoT industri.',
    description: 'Membantu pabrik dan fasilitas industri melakukan modernisasi jalur produksi melalui rekayasa otomasi terintegrasi. Mencakup pemrograman PLC, pembuatan kabinet kontrol standar IP65, serta integrasi dashboard telemetri real-time.',
    image: HERO_IMAGE,
    iconName: 'Sliders',
    benefits: [
      'Peningkatan efisiensi lini produksi hingga 45%',
      'Pencegahan downtime dengan pemantauan prediktif sensorik',
      'Antarmuka HMI layar sentuh intuitif berbahasa Indonesia & Inggris',
      'Dukungan integrasi protokol Modbus, Profinet, EtherCAT, MQTT'
    ],
    specifications: [
      { label: 'Platform PLC', value: 'Siemens S7-1200/1500, Mitsubishi FX5U/iQ-R, Omron' },
      { label: 'SCADA Software', value: 'WinCC, Ignition, Wonderware InTouch' },
      { label: 'Standar Panel', value: 'IEC 61439, Komponen Schneider / ABB' },
      { label: 'Garansi Sistem', value: 'Garansi pemeliharaan 12 bulan penuh' }
    ],
    faqs: [
      {
        question: 'Bisakah meng-upgrade mesin lama yang masih manual menjadi otomatis?',
        answer: 'Bisa, tim engineer kami berpengalaman melakukan retrofitting mesin konvensional menjadi otomatis dengan penambahan servo motor, inverter, dan PLC.'
      }
    ],
    featured: true,
  },
  {
    id: 'layanan-7',
    slug: 'design-engineering-cad-cam',
    title: 'Design Engineering & 3D Scanning',
    category: 'Presisi',
    shortDesc: 'Desain rekayasa mekanik 3D CAD, simulasi beban FEA/CFD, dan reverse engineering menggunakan 3D Laser Scanner.',
    description: 'Departemen perancangan teknik kami menerjemahkan ide kebutuhan fungsional menjadi gambar kerja manufaktur siap produksi (Shop Drawing & BOM). Dilengkapi simulasi kekuatan elemen hingga (FEA) untuk memastikan keandalan struktur sebelum proses fabrikasi dimulai.',
    image: CNC_IMAGE,
    iconName: 'Compass',
    benefits: [
      'Validasi desain sebelum produksi fisik menghemat biaya riset & trial',
      'Reverse engineering suku cadang impor yang sudah discontinue',
      'Penyusunan dokumen teknik lengkap: 3D CAD, 2D Tolerancing, BOM',
      'Simulasi tegangan mekanik Von Mises dan faktor keamanan (Safety Factor)'
    ],
    specifications: [
      { label: 'Hardware Scanner', value: 'MetraSCAN 3D Optical CMM 0.025 mm accuracy' },
      { label: 'Software CAD/CAE', value: 'Autodesk Inventor, SolidWorks Professional, ANSYS' },
      { label: 'Format Output', value: 'PDF Shop Drawing, STEP, Parasolid, DXF, 3D PDF' },
      { label: 'Lama Pengerjaan', value: 'Mulai dari 2 hari kerja tergantung kompleksitas' }
    ],
    faqs: [
      {
        question: 'Apakah bisa membuatkan suku cadang jika hanya memiliki sampel fisiknya saja?',
        answer: 'Bisa, kami menggunakan 3D Scanner untuk memindai kontur suku cadang sampel dan merekonstruksi model CAD 3D yang identik dengan akurasi tinggi.'
      }
    ],
    featured: false,
  },
  {
    id: 'layanan-8',
    slug: 'maintenance-dan-factory-solution',
    title: 'Maintenance & Factory Solution',
    category: 'Manufaktur',
    shortDesc: 'Layanan pemeliharaan preventif, overhaul mesin industri, relokasi lini pabrik, dan perbaikan darurat 24/7.',
    description: 'Dukungan teknis berkelanjutan bagi fasilitas produksi untuk menjaga uptime operasional mesin industri. Menyediakan kontrak maintenance berkala, dynamic balancing impeler di lokasi, alignment laser poros motor, dan penggantian spare part kritis.',
    image: HQ_IMAGE,
    iconName: 'ShieldCheck',
    benefits: [
      'Tim respons cepat untuk penanganan emergency breakdown mesin',
      'Laser shaft alignment meminimalisir getaran dan memperpanjang umur bearing',
      'Pencatatan riwayat pemeliharaan mesin transparan & terdigitalisasi',
      'Penyediaan suku cadang pengganti kustom dengan toleransi OEM'
    ],
    specifications: [
      { label: 'Alat Alignment', value: 'Easy-Laser E710 Wireless Shaft Alignment' },
      { label: 'Balancing', value: 'Dynamic In-Situ Balancing ISO 1940 Grade 2.5' },
      { label: 'Vibration Analysis', value: 'FFT Spectrum Vibration Analyzer' },
      { label: 'Waktu Respon', value: 'Siaga kunjungan teknis dalam 24 jam wilayah Jatim' }
    ],
    faqs: [
      {
        question: 'Apakah melayani kontrak pemeliharaan tahunan (Annual Maintenance)?',
        answer: 'Ya, kami melayani SLA tahunan dengan jadwal inspeksi rutin bulanan dan jaminan respons darurat prioritas.'
      }
    ],
    featured: false,
  },
  {
    id: 'layanan-9',
    slug: 'layanan-permohonan-informasi-ppid',
    title: 'Layanan Keterbukaan Informasi Publik PPID',
    category: 'Layanan PPID',
    shortDesc: 'Akses permohonan informasi publik resmi Kemenag Kota Mojokerto secara cepat, transparan, dan akuntabel sesuai UU KIP.',
    description: 'Layanan resmi PPID Kemenag Kota Mojokerto untuk memfasilitasi hak setiap warga negara memperoleh informasi publik terkait program kerja, anggaran, pengadaan barang/jasa, dan regulasi keagamaan secara transparan tanpa pungutan biaya.',
    image: HQ_IMAGE,
    iconName: 'FileText',
    benefits: [
      'Proses permohonan cepat maksimal 10 + 7 hari kerja sesuai UU No. 14/2008',
      'Transparansi penuh tanpa pungutan biaya (Gratis Rp 0,-)',
      'Pengajuan dapat dilakukan online secara mandiri dengan nomor tiket pelacakan',
      'Dukungan pengajuan keberatan jika informasi belum memuaskan'
    ],
    specifications: [
      { label: 'Dasar Hukum', value: 'UU No. 14 Tahun 2008 & PMA No. 44 Tahun 2022' },
      { label: 'Waktu Tanggapan', value: '10 Hari Kerja (+ perpanjangan 7 hari)' },
      { label: 'Biaya Layanan', value: 'Gratis (Rp 0,-)' },
      { label: 'Format Informasi', value: 'Digital PDF, Salinan Cetak, Rekap Excel' }
    ],
    faqs: [
      {
        question: 'Siapa saja yang berhak mengajukan permohonan informasi?',
        answer: 'Setiap Warga Negara Indonesia (WNI) perseorangan dengan melampirkan KTP atau Badan Hukum Indonesia dengan melampirkan Akta Pendirian.'
      }
    ],
    featured: true,
  }
];

export const initialProjectList: ProjectItem[] = [
  {
    id: 'proj-1',
    slug: 'sistem-otomasi-sorting-pabrik-logistik',
    title: 'Sistem Konveyor Otomasi & Sorting Lini Logistik',
    category: 'Otomasi Pabrik',
    location: 'Mojokerto Industrial Estate (Ngoro), Jawa Timur',
    year: '2026',
    client: 'PT Mitra Logistik Nusantara',
    thumbnail: HERO_IMAGE,
    gallery: [HERO_IMAGE, CNC_IMAGE, LASER_IMAGE],
    description: 'Pembangunan jalur konveyor terotomasi sepanjang 120 meter yang terintegrasi dengan pemindai barcode kamera industri dan pneumatic sorting pusher untuk memisahkan paket berdasarkan kode pos tujuan.',
    challenge: 'Klien mengalami bottleneck pada proses pemilahan manual dengan tingkat kesalahan mencapai 4.2% pada volume pengiriman tinggi melebihi 25,000 paket per hari.',
    solution: 'Merancang sistem konveyor modular dengan kontrol terdistribusi Siemens PLC S7-1500, motor servo efisiensi tinggi IE3, dan algoritma tracking paket real-time.',
    technologies: ['Siemens S7-1500 PLC', 'Cognex Vision Barcode Reader', 'Festo Pneumatics', 'SCADA WinCC Unified'],
    results: [
      'Peningkatan kecepatan sortir hingga 3,200 paket/jam',
      'Penurunan tingkat salah sortir dari 4.2% menjadi 0.02%',
      'Penghematan konsumsi daya listrik fasilitas sebesar 18%'
    ],
    featured: true,
  },
  {
    id: 'proj-2',
    slug: 'fabrikasi-impeller-turbin-mikrohidro',
    title: 'Fabrikasi Runner Impeller Turbin Mikrohidro 250 kW',
    category: 'Komponen Presisi',
    location: 'Pacet, Mojokerto',
    year: '2025',
    client: 'Konsorsium Energi Terbarukan Mandiri',
    thumbnail: CNC_IMAGE,
    gallery: [CNC_IMAGE, LASER_IMAGE, HERO_IMAGE],
    description: 'Pemesinan runner turbin Francis dari balok baja tahan karat SUS316L utuh (monoblock) menggunakan mesin CNC 5-Axis simultan untuk pembangkit listrik tenaga mikrohidro pedesaan.',
    challenge: 'Profil sudu turbin yang sangat rumit dengan kelengkungan 3D ganda menuntut akurasi permukaan hydrofoil tinggi guna mencegah kavitasi air bertekanan deras.',
    solution: 'Menggunakan pemodelan CFD fluida untuk optimasi profil bilah, dilanjutkan pemotongan high-speed 5-axis milling dengan dynamic balancing hingga standar ISO 1940 G1.0.',
    technologies: ['CNC 5-Axis DMG Mori', 'Mastercam Multiaxis CAM', 'CFD Hydrodynamic Flow', 'CMM Coordinate Inspection'],
    results: [
      'Efisiensi hidrolik runner mencapai 91.4%',
      'Toleransi ketebalan sudu terkontrol dalam rentang ±0.015 mm',
      'Operasional turbin tanpa getaran pada putaran 1,500 RPM'
    ],
    featured: true,
  },
  {
    id: 'proj-3',
    slug: 'tangki-reaktor-stainless-foodgrade-316l',
    title: 'Tangki Reaktor Tekan Stainless Steel 316L Food-Grade',
    category: 'Fabrikasi',
    location: 'Kawasan Industri Mojosari, Mojokerto',
    year: '2026',
    client: 'PT Agrobisnis Pangan Sehat',
    thumbnail: LASER_IMAGE,
    gallery: [LASER_IMAGE, HQ_IMAGE, CNC_IMAGE],
    description: 'Perancangan dan manufaktur 4 unit tangki reaktor pencampur berkapasitas masing-masing 15,000 liter dengan dinding isolasi termal ganda (dimple jacket) untuk pengolahan sirup glukosa konsumsi.',
    challenge: 'Persyaratan higienis ketat standar BPOM dan cGMP mengharuskan permukaan bagian dalam tangki bebas celah bakteri dengan tingkat kehalusan Ra < 0.4 mikron.',
    solution: 'Menggunakan orbital automatic TIG welding, pembersihan electropolishing pada seluruh sambungan dalam tangki, dan uji tekanan hidrostatik 1.5x tekanan kerja desain.',
    technologies: ['Orbital TIG Welding', 'Electropolishing Interior', 'Hydrostatic Pressure Test 6 Bar', 'ASME Section VIII Div 1'],
    results: [
      'Lolos sertifikasi kelayakan kontak pangan internasional',
      'Tingkat kekasaran permukaan dalam terukur Ra 0.28 mikron',
      'Zero leakage pada pengujian radiografi dan hidrostatik'
    ],
    featured: true,
  },
  {
    id: 'proj-4',
    slug: 'precision-die-casting-mold-automotive',
    title: 'Cetakan Presisi Die Casting Komponen Mesin Otomotif',
    category: 'Komponen Presisi',
    location: 'Gresik - Mojokerto Corridor',
    year: '2025',
    client: 'PT Komponen Presisi Nusantara',
    thumbnail: CNC_IMAGE,
    gallery: [CNC_IMAGE, HERO_IMAGE, LASER_IMAGE],
    description: 'Pembuatan blok cetakan die casting baja perkakas H13 vacuum hardened untuk produksi rumah pompa air (water pump housing) kendaraan bermotor roda dua.',
    challenge: 'Cetakan harus tahan terhadap thermal shock aluminium cair bersuhu 680°C dan tekanan injeksi hingga 800 bar tanpa mengalami retak mikro atau deformasi dimensi.',
    solution: 'Penerapan baja impor premium Böhler W300, heat treatment vacuum furnace bertahap, dan pembuatan saluran pendingin conformal cooling menggunakan CNC deep hole drilling.',
    technologies: ['Böhler H13 Tool Steel', 'Vacuum Heat Treatment (HRC 48-50)', 'EDM Wire Cut & Sinker', 'Conformal Cooling Simulation'],
    results: [
      'Siklus cetak (cycle time) berkurang 22% berkat pendinginan merata',
      'Masa pakai cetakan mencapai lebih dari 150,000 shot',
      'Dimensi produk akhir konsisten dalam batas CPK > 1.67'
    ],
    featured: true,
  },
  {
    id: 'proj-5',
    slug: 'mesin-packaging-custom-multi-line',
    title: 'Rancang Bangun Mesin Packaging Sachet Otomatis Custom',
    category: 'Mesin Khusus',
    location: 'Kota Mojokerto',
    year: '2026',
    client: 'UMKM Mandiri Unggul Binaan Kemenag',
    thumbnail: HERO_IMAGE,
    gallery: [HERO_IMAGE, HQ_IMAGE, CNC_IMAGE],
    description: 'Mesin pengemas sachet 4-line berkecepatan tinggi yang dirancang khusus untuk memfasilitasi kemasan higienis produk rempah dan minuman herbal lokal bersertifikat Halal.',
    challenge: 'Mesin impor sejenis memiliki harga yang sangat mahal dengan suku cadang yang sulit diperoleh di dalam negeri, serta sulit dioperasikan oleh operator lokal.',
    solution: 'Merancang mesin modular dengan 85% kandungan lokal (TKDN), menggunakan komponen standard industri yang mudah dibeli di pasaran nasional dan antarmuka layar sentuh bahasa Indonesia.',
    technologies: ['Omron PLC CP2E', 'Schneider Servo Drives', 'Stainless Steel 304 Contact Parts', 'Temperature PID Controller'],
    results: [
      'Kapasitas produksi mencapai 180 sachet per menit',
      'Biaya investasi 60% lebih terjangkau dibanding mesin impor',
      'Tingkat presisi takaran bahan bubuk ±0.2 gram'
    ],
    featured: true,
  },
  {
    id: 'proj-6',
    slug: 'konstruksi-overhead-crane-15-ton',
    title: 'Fabrikasi & Instalasi Girder Overhead Crane 15 Ton',
    category: 'Fabrikasi',
    location: 'Puri, Mojokerto',
    year: '2025',
    client: 'PT Baja Perkasa Workshop',
    thumbnail: LASER_IMAGE,
    gallery: [LASER_IMAGE, HERO_IMAGE, CNC_IMAGE],
    description: 'Fabrikasi girder box baja struktur bentang 24 meter dengan kapasitas angkat 15 Ton untuk area penanganan material berat di workshop fabrikasi alat berat.',
    challenge: 'Bentang girder yang panjang berisiko mengalami defleksi melebihi batas toleransi keselamatan kerja jika pengelasan struktur mengalami tegangan sisa (residual stress).',
    solution: 'Perhitungan camber pra-fabrikasi, pengelasan busur terendam otomatis (Submerged Arc Welding / SAW) secara simetris, dan uji beban dinamis 125% kapasitas nominal.',
    technologies: ['SAW Submerged Arc Welding', 'Plat Baja SM490YA', 'Inverter Hoist Dual Speed', 'Laser Deflection Measurement'],
    results: [
      'Defleksi pada beban penuh terukur 1/950 bentang (jauh di bawah batas izin 1/800)',
      'Lolos uji beban dan sertifikasi laik operasi Disnakertrans Jatim',
      'Operasional halus dengan sistem anti-sway elektronik'
    ],
    featured: false,
  },
  {
    id: 'proj-7',
    slug: 'jembatan-timbang-digital-heavy-duty',
    title: 'Jembatan Timbang Truk Digital Pitless Kapasitas 80 Ton',
    category: 'Mesin Khusus',
    location: 'Bypass Mojokerto',
    year: '2025',
    client: 'Koperasi Pabrik Gula Mojokerto Raya',
    thumbnail: HQ_IMAGE,
    gallery: [HQ_IMAGE, LASER_IMAGE, HERO_IMAGE],
    description: 'Konstruksi platform timbangan truk panjang 18 meter berstruktur baja I-Beam ganda dengan sistem digital load cell tahan petir dan integrasi software penimbangan otomatis.',
    challenge: 'Platform harus mampu menahan beban lalu lintas armada truk tebu muatan berat secara kontinu selama masa giling tanpa mengalami fatigue atau ketidakstabilan kalibrasi.',
    solution: 'Desain deck plat bordes 10 mm dengan stiffener diagonal berkekuatan tinggi, dilengkapi 8 titik sensor load cell IP68 hermetically sealed dan pembacaan digital akurat.',
    technologies: ['Digital Load Cell Zemic IP68', 'Baja Profil WF 600', 'Automated Barrier Gate & RFID', 'Software Timbangan Cloud'],
    results: [
      'Ketepatan timbang teruji dengan nilai tera Metrologi Legal Jawa Timur',
      'Waktu proses penimbangan armada terpangkas dari 7 menit menjadi 1.5 menit',
      'Pencegahan kecurangan timbangan dengan sistem proteksi kamera ANPR'
    ],
    featured: false,
  },
  {
    id: 'proj-8',
    slug: 'retrofitting-mesin-bubut-cnc-mazak',
    title: 'Modernisasi & Retrofit Kontrol Mesin Bubut CNC Industri',
    category: 'Otomasi Pabrik',
    location: 'Mojokerto Workshop Center',
    year: '2026',
    client: 'PT Sarana Presisi Mandiri',
    thumbnail: CNC_IMAGE,
    gallery: [CNC_IMAGE, HERO_IMAGE, HQ_IMAGE],
    description: 'Peremajaan mesin bubut heavy-duty dengan mengganti sistem kontrol analog yang usang menjadi kontroler CNC modern berbasis PC industri dengan motor servo digital.',
    challenge: 'Sistem elektronik mesin asli sering mengalami error dan spare part board komputer sudah tidak lagi diproduksi oleh manufaktur aslinya.',
    solution: 'Merekayasa ulang wiring diagram elektrik, memasang kontroler CNC Sinumerik/Syntec baru, serta mengganti ball screw dan linear guide yang aus dengan komponen presisi baru.',
    technologies: ['Syntec 22TA CNC Controller', 'Yaskawa Sigma-7 Servo Drives', 'THK Precision Ball Screws', 'Renishaw QC20 Ballbar Testing'],
    results: [
      'Mengembalikan akurasi posisi mesin ke standar awal pabrik ±0.008 mm',
      'Biaya retrofit hanya 25% dibandingkan membeli unit mesin baru',
      'Mesin kembali produktif dengan antarmuka layar modern dan port USB/LAN'
    ],
    featured: false,
  }
];

export const initialArtikelList: ArtikelItem[] = [
  {
    id: 'art-1',
    slug: 'standar-toleransi-iso-2768-manufaktur-presisi',
    title: 'Memahami Standar Toleransi ISO 2768 dalam Manufaktur Logam Presisi',
    category: 'Standar Mutu',
    summary: 'Panduan lengkap penerapan toleransi umum linier dan geometrik menurut ISO 2768 untuk memastikan kesesuaian fitting komponen mesin.',
    content: [
      'Dalam industri manufaktur presisi modern, penetapan toleransi dimensi bukan sekadar formalitas pada gambar teknik, melainkan penentu utama apakah suatu suku cadang dapat berfungsi optimal di perakitan akhir.',
      'Standar ISO 2768 membagi toleransi menjadi dua bagian penting: ISO 2768-1 untuk dimensi linier dan sudut, serta ISO 2768-2 untuk toleransi geometrik (seperti kelurusan, kerataan, kebulatan, dan kesimetrisan). Dengan menerapkan kelas toleransi m (medium) atau f (fine), desainer dapat menghemat waktu penyusunan gambar kerja tanpa mengorbankan kualitas produk.',
      'Di workshop PPID Kemenag Kota Mojokerto, seluruh proses pengerjaan CNC didasarkan pada audit ketat terhadap standar ini, didukung oleh mesin CMM berakurasi tinggi untuk menjamin kepatuhan spesifikasi teknis klien.'
    ],
    thumbnail: CNC_IMAGE,
    author: 'Ir. Hendro Wahyudi, M.T.',
    authorRole: 'Kepala Divisi Engineering & Presisi',
    date: '8 November 2026',
    readTime: '5 min baca',
    tags: ['ISO 2768', 'Toleransi Presisi', 'CNC Machining', 'Quality Control'],
    views: 1420,
    featured: true,
  },
  {
    id: 'art-2',
    slug: 'keterbukaan-informasi-publik-ppid-kemenag-mojokerto',
    title: 'Komitmen Keterbukaan Informasi Publik: Transparansi untuk Kemajuan Bersama',
    category: 'Keterbukaan Informasi',
    summary: 'Bagaimana PPID Kemenag Kota Mojokerto mengintegrasikan pelayanan informasi publik yang cepat, mudah, dan akuntabel berbasis teknologi digital.',
    content: [
      'Keterbukaan informasi publik adalah fondasi tata kelola pemerintahan yang bersih dan berintegritas. Sebagaimana diamanatkan dalam Undang-Undang Nomor 14 Tahun 2008, masyarakat memiliki hak konstitusional untuk mengetahui proses perumusan kebijakan publik dan pengalokasian anggaran negara.',
      'Melalui portal terpadu ini, PPID Kemenag Kota Mojokerto memberikan akses terbuka terhadap informasi berkala, informasi serta-merta, dan informasi setiap saat. Mulai dari laporan realisasi anggaran satuan kerja hingga pengadaan barang dan jasa, semua disajikan secara transparan dan dapat diunduh langsung.',
      'Kami juga menyediakan mekanisme permohonan informasi secara online yang dilengkapi nomor registrasi otomatis, memastikan setiap permohonan ditindaklanjuti dalam batas waktu maksimal 10 hari kerja tanpa dipungut biaya apapun.'
    ],
    thumbnail: HQ_IMAGE,
    author: 'Drs. H. M. Zainuri, M.Pd.I.',
    authorRole: 'Ketua Tim PPID Kemenag Kota Mojokerto',
    date: '3 November 2026',
    readTime: '4 min baca',
    tags: ['PPID', 'Transparansi', 'UU KIP', 'Pelayanan Publik'],
    views: 2190,
    featured: true,
  },
  {
    id: 'art-3',
    slug: 'penerapan-fiber-laser-cutting-12kw-industri',
    title: 'Penerapan Fiber Laser 12kW: Revolusi Efisiensi Pemotongan Plat Baja Tebal',
    category: 'Teknologi Manufaktur',
    summary: 'Kajian teknis keunggulan teknologi laser fiber berdaya tinggi dibanding metode plasma dan oxy-fuel konvensional.',
    content: [
      'Peralihan dari teknologi laser CO2 ke fiber laser telah mentransformasi lanskap fabrikasi lembaran logam secara global. Dengan panjang gelombang 1.064 mikron, sinar fiber laser diserap jauh lebih efisien oleh logam seperti baja karbon, stainless steel, dan tembaga.',
      'Mesin Fiber Laser 12kW yang dioperasikan di fasilitas kami mampu memotong plat mild steel hingga ketebalan 32 mm dengan kecepatan yang 3x lebih cepat dibanding metode plasma cutting, menghasilkan kerf (celah potong) yang sangat sempit dan zona pengaruh panas (HAZ) yang minimal.',
      'Hasilnya adalah komponen yang langsung siap dirakit tanpa memerlukan proses gerinda ulang, memangkas waktu siklus produksi dan menghemat biaya fabrikasi hingga 35% bagi para mitra industri kami.'
    ],
    thumbnail: LASER_IMAGE,
    author: 'Bambang Sugianto, S.T.',
    authorRole: 'Spesialis Laser & Sheet Metal Fabrication',
    date: '28 Oktober 2026',
    readTime: '6 min baca',
    tags: ['Fiber Laser', 'Sheet Metal', 'Fabrikasi', 'Efisiensi Pabrik'],
    views: 1850,
    featured: true,
  },
  {
    id: 'art-4',
    slug: 'integrasi-plc-iot-monitoring-mesin-realtime',
    title: 'Transformasi Otomasi Industri 4.0: Integrasi PLC dan IoT Sensorik',
    category: 'Otomasi Industri',
    summary: 'Menghubungkan Programmable Logic Controller ke cloud untuk pemeliharaan prediktif dan penghitungan OEE mesin secara otomatis.',
    content: [
      'Dalam era Industri 4.0, data operasional mesin merupakan aset paling berharga bagi manajemen pabrik. Namun banyak fasilitas manufaktur yang masih mengandalkan pencatatan logbook manual yang lambat dan rentan kekeliruan.',
      'Dengan menghubungkan PLC lini produksi menggunakan protokol industri modern seperti MQTT dan OPC-UA ke dashboard monitoring cloud, parameter penting seperti temperatur motor, laju getaran bearing, dan jumlah unit output dapat dipantau seketika dari gawai smartphone.',
      'Penerapan ini memungkinkan deteksi dini anomali mekanikal sebelum terjadi kegagalan fatal (breakdown), mengubah strategi pemeliharaan dari reaktif menjadi prediktif yang jauh lebih ekonomis.'
    ],
    thumbnail: HERO_IMAGE,
    author: 'Ahmad Fauzan, M.Eng.',
    authorRole: 'Lead Automation & IoT Engineer',
    date: '20 Oktober 2026',
    readTime: '5 min baca',
    tags: ['IoT Industri', 'PLC Otomasi', 'Smart Factory', 'OEE'],
    views: 1280,
    featured: false,
  },
  {
    id: 'art-5',
    slug: 'maklumat-pelayanan-kemenag-bebas-pungli',
    title: 'Maklumat Pelayanan PPID: Penegasan Integritas Bebas Pungutan Liar',
    category: 'Keterbukaan Informasi',
    summary: 'Standar baku pelayanan informasi publik di lingkungan Kantor Kementerian Agama Kota Mojokerto demi kepuasan publik.',
    content: [
      'Kementerian Agama Republik Indonesia telah berkomitmen penuh dalam pembangunan Zona Integritas menuju Wilayah Bebas dari Korupsi (WBK) dan Wilayah Birokrasi Bersih dan Melayani (WBBM).',
      'Maklumat Pelayanan yang dipublikasikan secara terbuka menegaskan bahwa seluruh staf dan petugas PPID berkewajiban melayani pemohon dengan ramah, santun, transparan, dan tidak menerima imbalan dalam bentuk apapun (Gratis Rp 0,-).',
      'Masyarakat pemohon informasi dipersilakan memanfaatkan kanal pengaduan jika menemukan indikasi penyimpangan standar pelayanan agar segera ditindaklanjuti oleh tim kepatuhan internal.'
    ],
    thumbnail: HQ_IMAGE,
    author: 'Siti Nur Azizah, S.Sos.',
    authorRole: 'Petugas Meja Informasi PPID',
    date: '15 Oktober 2026',
    readTime: '3 min baca',
    tags: ['Maklumat Pelayanan', 'Zona Integritas', 'WBK WBBM', 'Kemenag'],
    views: 940,
    featured: false,
  },
  {
    id: 'art-6',
    slug: 'teknologi-tig-vs-mig-memilih-pengelasan-kritis',
    title: 'TIG vs MIG: Menentukan Metode Pengelasan yang Tepat untuk Struktur Kritis',
    category: 'Teknologi Manufaktur',
    summary: 'Perbandingan komprehensif antara Gas Tungsten Arc Welding dan Gas Metal Arc Welding dalam proyek manufaktur komersial.',
    content: [
      'Dua metode pengelasan berpelindung gas yang paling dominan di dunia manufaktur saat ini adalah TIG (GTAW) dan MIG (GMAW). Meskipun keduanya menggunakan gas pelindung untuk mencegah oksidasi kawah las, karakteristik mekanik dan aplikasinya memiliki perbedaan mendasar.',
      'Pengelasan TIG memberikan kendali termal yang superior, estetika manik las layaknya sisik ikan yang sempurna, serta kemampuan menyambung material tipis hingga pipa bertekanan tinggi tanpa spatter (percikan). Sebaliknya, pengelasan MIG menawarkan laju deposisi kawat yang sangat cepat, menjadikannya opsi ideal untuk fabrikasi konstruksi baja berat berdimensi besar.',
      'Melalui artikel ini, kami mengulas matriks pemilihan proses las berdasarkan jenis material, ketebalan, posisi pengerjaan, dan efisiensi biaya proyek.'
    ],
    thumbnail: LASER_IMAGE,
    author: 'Wahyu Hidayat, CWI (AWS)',
    authorRole: 'Inspektur Las Bersertifikasi Internasional',
    date: '5 Oktober 2026',
    readTime: '7 min baca',
    tags: ['TIG Welding', 'MIG Welding', 'Metallurgy', 'Inspeksi Las'],
    views: 1610,
    featured: false,
  }
];

export const initialRegulasiList: RegulasiItem[] = [
  {
    id: 'reg-1',
    nomor: 'UU No. 14 Tahun 2008',
    title: 'Undang-Undang tentang Keterbukaan Informasi Publik (UU KIP)',
    category: 'Undang-Undang',
    year: '2008',
    dateIssued: '30 April 2008',
    description: 'Payung hukum fundamental yang menjamin hak warga negara untuk memperoleh informasi publik dan mewajibkan badan publik mengelola dokumentasi secara transparan.',
    fileSize: '1.8 MB',
    downloadUrl: '#'
  },
  {
    id: 'reg-2',
    nomor: 'PP No. 61 Tahun 2010',
    title: 'Peraturan Pemerintah tentang Pelaksanaan UU No. 14 Tahun 2008',
    category: 'Peraturan Pemerintah',
    year: '2010',
    dateIssued: '23 Agustus 2010',
    description: 'Peraturan pelaksana teknis mengenai tata kelola PPID, penunjukan pejabat pengelola, serta batasan jangka waktu pengujian konsekuensi informasi yang dikecualikan.',
    fileSize: '950 KB',
    downloadUrl: '#'
  },
  {
    id: 'reg-3',
    nomor: 'Perki No. 1 Tahun 2021',
    title: 'Peraturan Komisi Informasi tentang Standar Layanan Informasi Publik (SLIP)',
    category: 'Peraturan Menteri',
    year: '2021',
    dateIssued: '30 November 2021',
    description: 'Standar operasional terpadu bagi seluruh badan publik di Indonesia dalam menyusun Daftar Informasi Publik (DIP) dan mekanisme uji konsekuensi berkala.',
    fileSize: '2.4 MB',
    downloadUrl: '#'
  },
  {
    id: 'reg-4',
    nomor: 'PMA No. 44 Tahun 2022',
    title: 'Peraturan Menteri Agama tentang Pelayanan Informasi Publik pada Kementerian Agama',
    category: 'Peraturan Menteri',
    year: '2022',
    dateIssued: '18 Oktober 2022',
    description: 'Pedoman struktur organisasi, tugas, wewenang, dan tata kerja PPID di lingkungan unit kerja pusat, Kanwil Provinsi, hingga Kantor Kemenag Kabupaten/Kota.',
    fileSize: '3.1 MB',
    downloadUrl: '#'
  },
  {
    id: 'reg-5',
    nomor: 'Kep. Kakankemenag No. 12/2026',
    title: 'Keputusan Kepala Kantor Kemenag Kota Mojokerto tentang Penetapan DIP Tahun 2026',
    category: 'SOP Teknis',
    year: '2026',
    dateIssued: '5 Januari 2026',
    description: 'Surat Keputusan resmi mengenai Daftar Informasi Publik (DIP) yang wajib disediakan dan diumumkan secara berkala serta setiap saat oleh Kankemenag Kota Mojokerto.',
    fileSize: '1.2 MB',
    downloadUrl: '#'
  },
  {
    id: 'reg-6',
    nomor: 'SOP-MFG-004 Rev. 2',
    title: 'Standar Operasional Prosedur Pengujian Mutu & Keselamatan Manufaktur Presisi',
    category: 'SOP Teknis',
    year: '2025',
    dateIssued: '14 Juli 2025',
    description: 'Prosedur baku pengawasan mutu (Quality Assurance), kalibrasi instrumen ukur digital, serta keselamatan kerja (K3) pada area fabrikasi logam dan pemesinan CNC.',
    fileSize: '1.5 MB',
    downloadUrl: '#'
  }
];

export const initialInformasiPublikList: InformasiPublikItem[] = [
  {
    id: 'inf-1',
    title: 'Rencana Strategis (Renstra) Kankemenag Kota Mojokerto Periode 2025-2029',
    type: 'Berkala',
    category: 'Perencanaan',
    year: '2025',
    responsibleUnit: 'Subbag Tata Usaha',
    fileFormat: 'PDF',
    fileSize: '4.6 MB',
    lastUpdated: '10 Januari 2026'
  },
  {
    id: 'inf-2',
    title: 'Laporan Kinerja Instansi Pemerintah (LKjIP) Kemenag Kota Mojokerto TA 2025',
    type: 'Berkala',
    category: 'Akuntabilitas',
    year: '2025',
    responsibleUnit: 'Seksi Pendis & Keuangan',
    fileFormat: 'PDF',
    fileSize: '3.2 MB',
    lastUpdated: '2 Februari 2026'
  },
  {
    id: 'inf-3',
    title: 'Daftar Isian Pelaksanaan Anggaran (DIPA) Tahun Anggaran 2026',
    type: 'Berkala',
    category: 'Keuangan',
    year: '2026',
    responsibleUnit: 'Bendahara Pengeluaran',
    fileFormat: 'PDF',
    fileSize: '2.1 MB',
    lastUpdated: '15 Januari 2026'
  },
  {
    id: 'inf-4',
    title: 'Rencana Umum Pengadaan (RUP) Barang dan Jasa Manufaktur & Sarpras 2026',
    type: 'Berkala',
    category: 'Pengadaan',
    year: '2026',
    responsibleUnit: 'Pejabat Pembuat Komitmen (PPK)',
    fileFormat: 'XLSX / PDF',
    fileSize: '1.4 MB',
    lastUpdated: '8 Januari 2026'
  },
  {
    id: 'inf-5',
    title: 'Informasi Peringatan Dini Cuaca Ekstrem dan Protokol K3 Workshop Industri',
    type: 'Serta Merta',
    category: 'Keselamatan',
    year: '2026',
    responsibleUnit: 'Tim K3 & Pengawas Lapangan',
    fileFormat: 'PDF',
    fileSize: '850 KB',
    lastUpdated: '22 Februari 2026'
  },
  {
    id: 'inf-6',
    title: 'Profil Sumber Daya Manusia dan Sertifikasi Kompetensi Tenaga Teknis Presisi',
    type: 'Setiap Saat',
    category: 'Kepegawaian',
    year: '2026',
    responsibleUnit: 'Bagian Kepegawaian',
    fileFormat: 'PDF',
    fileSize: '1.9 MB',
    lastUpdated: '1 Maret 2026'
  },
  {
    id: 'inf-7',
    title: 'Hasil Uji Konsekuensi Informasi yang Dikecualikan Terkait Rahasia Paten Desain',
    type: 'Dikecualikan',
    category: 'Hukum & HKI',
    year: '2026',
    responsibleUnit: 'PPID Utama & Tim Pertimbangan Hukum',
    fileFormat: 'PDF (Berita Acara)',
    fileSize: '1.1 MB',
    lastUpdated: '12 Januari 2026'
  }
];

export const initialTestimoniList: TestimoniItem[] = [
  {
    id: 'testi-1',
    name: 'Ir. Agus Pratama',
    role: 'Plant Maintenance Director',
    company: 'PT Petrokimia Mitra Industri',
    quote: 'Presisi pengerjaan komponen impeller dan tangki reaktor yang dikerjakan oleh tim workshop PPID Kemenag Kota Mojokerto melampaui ekspektasi kami. Uji NDT 100% sempurna tanpa cacat, dan jadwal penyelesaian tepat 3 hari sebelum deadline.',
    rating: 5,
    projectContext: 'Fabrikasi Runner Turbin & Tangki Stainless',
  },
  {
    id: 'testi-2',
    name: 'Suhartono, S.T.',
    role: 'Head of Industrial Automation',
    company: 'PT Logistik Maju Nusantara',
    quote: 'Sistem otomasi konveyor sortir paket yang dirancang bersama berjalan sangat stabil selama 6 bulan terakhir tanpa ada error kritis. Antarmuka SCADA sangat mudah dipahami oleh operator kami di lapangan.',
    rating: 5,
    projectContext: 'Sistem Konveyor Sorting Logistik 120m',
  },
  {
    id: 'testi-3',
    name: 'Hj. Rina Kusuma, M.M.',
    role: 'Ketua Asosiasi UMKM Industri Pangan',
    company: 'Konsorsium Produk Halal Mojokerto',
    quote: 'Sebagai perwakilan pelaku usaha, kami sangat terbantu dengan keterbukaan informasi publik dan layanan pendampingan rancang bangun mesin packaging custom yang higienis dan terjangkau bagi pelaku usaha lokal.',
    rating: 5,
    projectContext: 'Mesin Packaging Multi-Line Custom TKDN',
  },
  {
    id: 'testi-4',
    name: 'Dedi Kurniawan',
    role: 'Procurement Specialist',
    company: 'PT Barata Sarana Prima',
    quote: 'Pelayanan informasi publiknya cepat dan sangat responsif. Dokumen tender dan spesifikasi teknis dapat diakses transparan tanpa birokrasi berbelit. Sangat profesional untuk institusi publik modern.',
    rating: 5,
    projectContext: 'Permohonan Keterbukaan Informasi & Lelang',
  }
];

export const initialClientList: ClientItem[] = [
  { id: 'c-1', name: 'PT Petrokimia Partner', industry: 'Chemical & Energy', logoText: 'PETROKIMIA PARTNER' },
  { id: 'c-2', name: 'PT Barata Mitra Indah', industry: 'Heavy Machinery & Steel', logoText: 'BARATA MITRA' },
  { id: 'c-3', name: 'PT Logistik Nusantara', industry: 'Supply Chain & Automation', logoText: 'LOGISTIK NUSANTARA' },
  { id: 'c-4', name: 'Astra Precision Component', industry: 'Automotive Parts', logoText: 'ASTRA COMPONENT' },
  { id: 'c-5', name: 'Dinas Perindustrian Jatim', industry: 'Pemerintah Provinsi Jatim', logoText: 'DISPERINDAG JATIM' },
  { id: 'c-6', name: 'Pabrik Gula Gempolkrep', industry: 'Agro Industrial', logoText: 'PG GEMPOLKREP' },
];

export const initialTeamList: TeamMember[] = [
  {
    id: 'tm-1',
    name: 'Drs. H. M. Zainuri, M.Pd.I.',
    role: 'Ketua PPID & Penanggung Jawab Layanan',
    division: 'Pimpinan Eksekutif',
    bio: 'Berpengalaman lebih dari 22 tahun dalam tata kelola birokrasi dan keterbukaan informasi publik Kementerian Agama dengan predikat Badan Publik Informatif.',
  },
  {
    id: 'tm-2',
    name: 'Ir. Hendro Wahyudi, M.T.',
    role: 'Kepala Divisi Presisi & Engineering',
    division: 'Rekayasa Manufaktur',
    bio: 'Pakar manufaktur CNC 5-Axis dan simulasi elemen hingga dengan pengalaman memimpin berbagai proyek permesinan alat berat nasional.',
  },
  {
    id: 'tm-3',
    name: 'Bambang Sugianto, S.T.',
    role: 'Spesialis Laser & Sheet Metal Fabrication',
    division: 'Fabrikasi Logam',
    bio: 'Sertifikasi internasional pemrograman fiber laser daya tinggi dan manajemen efisiensi nesting lembaran plat baja industri.',
  },
  {
    id: 'tm-4',
    name: 'Ahmad Fauzan, M.Eng.',
    role: 'Lead Automation & PLC Engineer',
    division: 'Industrial Automation',
    bio: 'Fokus pada arsitektur sistem kendali terdistribusi SCADA, PLC Siemens/Omron, dan implementasi monitoring sensor IoT pabrik.',
  },
  {
    id: 'tm-5',
    name: 'Siti Nur Azizah, S.Sos.',
    role: 'Sekretaris PPID & Pelayanan Publik',
    division: 'Meja Layanan Informasi',
    bio: 'Mengelola meja permohonan informasi publik, pengarsipan berkala, serta koordinasi uji konsekuensi informasi publik.',
  }
];

export const initialPermohonanList: PermohonanMessage[] = [
  {
    id: 'perm-1',
    ticketNumber: 'PPID-MJK-2026-0042',
    fullName: 'Rizky Firmansyah',
    email: 'rizky.f@teknikmandiri.co.id',
    phone: '081238947120',
    company: 'PT Teknik Mandiri Bersama',
    type: 'Layanan Manufaktur',
    subject: 'Permintaan Penawaran Jasa Laser Cutting Plat Hardox 450 16mm',
    message: 'Mohon informasi estimasi biaya dan waktu pengerjaan laser cutting untuk 45 lembar plat Hardox 450 dimensi 1500 x 3000 mm sesuai file CAD terlampir.',
    status: 'Diproses',
    createdAt: '2026-11-08 09:30 WIB'
  },
  {
    id: 'perm-2',
    ticketNumber: 'PPID-MJK-2026-0039',
    fullName: 'Dewi Anggraini',
    email: 'dewi.anggraini@univ-brawijaya.ac.id',
    phone: '085732198004',
    company: 'Fakultas Teknik Universitas Brawijaya',
    type: 'Informasi Publik',
    subject: 'Permohonan Data Rencana Pengadaan Peralatan Mesin 2026',
    message: 'Untuk keperluan riset akademis analisis rantai pasok manufaktur publik di Jawa Timur, kami memohon salinan dokumen RUP peralatan tahun 2026.',
    status: 'Selesai',
    createdAt: '2026-11-04 14:15 WIB'
  },
  {
    id: 'perm-3',
    ticketNumber: 'PPID-MJK-2026-0045',
    fullName: 'Heru Tri Prasetyo',
    email: 'heru.tri@agroindustri.com',
    phone: '081390451290',
    company: 'CV Surya Agro Persada',
    type: 'Konsultasi Teknis',
    subject: 'Konsultasi Pembuatan Konveyor Belt Food Grade',
    message: 'Ingin mendiskusikan kemungkinan perancangan konveyor pembawa beras higienis dengan rangka stainless 304 panjang 15 meter.',
    status: 'Baru',
    createdAt: '2026-11-10 11:20 WIB'
  }
];
