import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { HERO_IMAGE, HQ_IMAGE } from '../data/initialData';
import {
  ArrowRight,
  ShieldCheck,
  Award,
  Users,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Hammer,
  Cpu,
  Zap,
  Flame,
  Wrench,
  Sliders,
  Compass,
  FileText,
  Clock,
  Sparkles,
  Search,
  ExternalLink,
  Target,
  Eye,
  Layers,
  Check
} from 'lucide-react';

const iconMap: Record<string, React.FC<{ size?: number; className?: string }>> = {
  Hammer,
  Cpu,
  Zap,
  Flame,
  Wrench,
  Sliders,
  Compass,
  ShieldCheck,
  FileText
};

export const HomePage: React.FC = () => {
  const {
    navigate,
    layananList,
    projectList,
    artikelList,
    clientList,
    testimoniList,
    openPermohonanModal
  } = useApp();

  // Testimonial slider state
  const [currentTestiIndex, setCurrentTestiIndex] = useState(0);

  const nextTesti = () => {
    setCurrentTestiIndex((prev) => (prev + 1) % testimoniList.length);
  };
  const prevTesti = () => {
    setCurrentTestiIndex((prev) => (prev - 1 + testimoniList.length) % testimoniList.length);
  };

  // Layanan filter
  const [selectedLayananCategory, setSelectedLayananCategory] = useState<string>('Semua');
  const filteredLayanan = selectedLayananCategory === 'Semua'
    ? layananList
    : layananList.filter((l) => l.category === selectedLayananCategory);

  // Animated counters simulation on mount
  const [counterStats, setCounterStats] = useState({
    years: 0,
    projects: 0,
    employees: 0,
    satisfaction: 0
  });

  useEffect(() => {
    const duration = 1200;
    const steps = 30;
    const intervalTime = duration / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      setCounterStats({
        years: Math.floor(progress * 22),
        projects: Math.floor(progress * 520),
        employees: Math.floor(progress * 135),
        satisfaction: Math.floor(progress * 98.8)
      });
      if (step >= steps) {
        clearInterval(timer);
        setCounterStats({
          years: 22,
          projects: 520,
          employees: 135,
          satisfaction: 99
        });
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="space-y-24 pb-16">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-8 sm:pt-14 pb-12 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content Column (lg:col-span-7) */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Clean Kicker / Badge (No static pill sandwich) */}
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-blue-700 dark:text-blue-400">
                <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400"></span>
                <span className="tracking-wide uppercase">PPID & Pusat Rekayasa Manufaktur Presisi</span>
                <span className="text-slate-400">·</span>
                <span className="text-slate-500 dark:text-slate-400">Kota Mojokerto</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.15]" style={{ textWrap: 'balance' }}>
                Solusi Manufaktur Presisi & <span className="text-blue-700 dark:text-blue-400">Keterbukaan Informasi</span> Berstandar Tinggi
              </h1>

              {/* Value Proposition Description */}
              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
                Mengintegrasikan keunggulan rekayasa mesin modern—fabrikasi lembaran logam, pemesinan CNC 5-Axis, pemotongan fiber laser 12kW, dan otomasi industri—dengan tata kelola transparansi pelayanan publik yang akuntabel dan berintegritas.
              </p>

              {/* Primary Actions */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => openPermohonanModal('Layanan Manufaktur')}
                  className="px-6 py-3.5 bg-blue-700 hover:bg-blue-800 text-white font-semibold rounded-xl shadow-lg shadow-blue-700/25 active:scale-95 transition-all flex items-center gap-2 text-sm"
                >
                  <span>Hubungi Kami & Konsultasi</span>
                  <ArrowRight size={16} />
                </button>
                <button
                  onClick={() => navigate('layanan')}
                  className="px-6 py-3.5 bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-white font-semibold rounded-xl border border-slate-300 dark:border-slate-700 active:scale-95 transition-all text-sm shadow-sm"
                >
                  Lihat Seluruh Layanan
                </button>
              </div>

              {/* Trust Subtext */}
              <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-slate-500 dark:text-slate-400">
                <div className="flex items-center gap-1.5">
                  <Check size={14} className="text-emerald-500" />
                  <span>Jaminan Akurasi Dimensi Mikron</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Check size={14} className="text-emerald-500" />
                  <span>Pelayanan Informasi Tanpa Pungli</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Check size={14} className="text-emerald-500" />
                  <span>Standar Mutu ISO 9001:2015</span>
                </div>
              </div>

            </div>

            {/* Right Visual Column (lg:col-span-5) */}
            <div className="lg:col-span-5 relative">
              
              {/* Main High-Impact Industrial Photo */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 aspect-[4/3] group">
                <img
                  src={HERO_IMAGE}
                  alt="Fasilitas Rekayasa Manufaktur & Perakitan Otomasi Modern PPID Kemenag Kota Mojokerto"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                
                <div className="absolute bottom-4 left-4 right-4 text-white text-xs">
                  <p className="font-semibold text-sm">Fasilitas Presisi & Otomasi Pabrik</p>
                  <p className="text-slate-300 text-[11px]">Kapasitas produksi industri terdistribusi & tersertifikasi</p>
                </div>
              </div>

              {/* Floating Card 1: 20+ Tahun Pengalaman (Top-Left Offset) */}
              <div className="absolute -top-6 -left-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-3.5 shadow-xl flex items-center gap-3 animate-in fade-in slide-in-from-top-4 duration-500">
                <div className="p-2.5 bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-400 rounded-lg">
                  <Award size={20} />
                </div>
                <div>
                  <div className="font-extrabold text-base font-mono text-slate-900 dark:text-white">
                    20+ Tahun
                  </div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                    Pengalaman Industri
                  </div>
                </div>
              </div>

              {/* Floating Card 2: 500+ Project Selesai (Bottom-Right Offset) */}
              <div className="absolute -bottom-6 -right-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-3.5 shadow-xl flex items-center gap-3 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="p-2.5 bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-400 rounded-lg">
                  <Layers size={20} />
                </div>
                <div>
                  <div className="font-extrabold text-base font-mono text-slate-900 dark:text-white">
                    500+ Project
                  </div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                    Selesai & Beroperasi
                  </div>
                </div>
              </div>

              {/* Floating Badge 3: ISO Certified (Center-Right Offset) */}
              <div className="hidden sm:flex absolute top-1/2 -right-6 -translate-y-1/2 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border border-slate-200 dark:border-slate-800 rounded-xl px-3.5 py-2.5 shadow-lg items-center gap-2.5">
                <ShieldCheck size={18} className="text-emerald-500" />
                <div className="text-left">
                  <span className="block text-xs font-bold text-slate-900 dark:text-white font-mono">ISO Certified</span>
                  <span className="block text-[10px] text-slate-500 dark:text-slate-400">ISO 9001:2015</span>
                </div>
              </div>

              {/* Floating Badge 4: 98% Client Satisfaction (Bottom-Left) */}
              <div className="hidden sm:flex absolute bottom-8 -left-8 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border border-slate-200 dark:border-slate-800 rounded-xl px-3.5 py-2.5 shadow-lg items-center gap-2.5">
                <Sparkles size={18} className="text-amber-500" />
                <div>
                  <span className="block text-xs font-bold text-slate-900 dark:text-white font-mono">98% Satisfaction</span>
                  <span className="block text-[10px] text-slate-500 dark:text-slate-400">Tingkat Kepuasan Klien</span>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 2. SECTION CLIENT / MITRA INDUSTRI */}
      <section className="border-y border-slate-200 dark:border-slate-800 bg-slate-100/60 dark:bg-slate-900/40 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-6">
            Dipercaya Oleh Mitra Industri, Badan Publik, dan Institusi Nasional
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
            {clientList.map((client) => (
              <div
                key={client.id}
                className="p-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 text-center hover:border-blue-500 transition-colors group"
              >
                <div className="font-bold text-xs tracking-wider text-slate-700 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {client.logoText}
                </div>
                <div className="text-[10px] text-slate-400 mt-1 truncate">
                  {client.industry}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SECTION TENTANG (2-KOLOM LAYOUT DENGAN FOTO PABRIK) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Image with Stats Overlay (lg:col-span-5) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-200 dark:border-slate-800 aspect-[4/3] relative">
              <img
                src={HQ_IMAGE}
                alt="Kantor Pelayanan Terpadu & Gedung Engineering PPID Kemenag Kota Mojokerto"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white text-xs">
                <span className="font-mono text-amber-400 text-xs font-semibold">GEDUNG UTAMA & WORKSHOP</span>
                <p className="font-medium text-sm mt-0.5">Jl. Taman Siswa No. 16, Kota Mojokerto</p>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900 text-xs space-y-2">
              <h4 className="font-bold text-blue-900 dark:text-blue-300 text-sm flex items-center gap-1.5">
                <ShieldCheck size={16} />
                Komitmen Mutu & Integritas Pelayanan
              </h4>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                Setiap proses fabrikasi logam dan permohonan informasi publik diawasi langsung dengan sistem manajemen mutu ISO 9001:2015 serta kepatuhan penuh terhadap Peraturan Komisi Informasi No. 1 Tahun 2021.
              </p>
            </div>
          </div>

          {/* Right Column: Narrative, Visi, Misi (lg:col-span-7) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-700 dark:text-blue-400">
                Tentang Kami
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Membangun Sinergi Rekayasa Industri Presisi dan Akuntabilitas Publik
              </h2>
            </div>

            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              PPID Kementerian Agama Kota Mojokerto tidak hanya menjalankan fungsi birokrasi keterbukaan informasi, namun juga memelopori integrasi fasilitas workshop permesinan presisi untuk mendukung pengadaan sarana prasarana teknis, suku cadang mesin, dan pelatihan teknologi manufaktur bagi masyarakat Jawa Timur.
            </p>

            {/* Visi & Misi Box */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2 shadow-sm">
                <div className="flex items-center gap-2 text-blue-700 dark:text-blue-400 font-bold text-sm">
                  <Target size={18} />
                  <span>Visi Kami</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  Menjadi pusat layanan informasi publik dan rekayasa manufaktur presisi yang unggul, transparan, terpercaya, serta berdaya saing global untuk kemajuan umat dan bangsa.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2 shadow-sm">
                <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400 font-bold text-sm">
                  <Eye size={18} />
                  <span>Misi Kami</span>
                </div>
                <ul className="text-xs text-slate-600 dark:text-slate-400 space-y-1.5 leading-relaxed">
                  <li>• Menjamin hak publik atas informasi secara cepat dan akurat.</li>
                  <li>• Menghadirkan produk manufaktur berkualitas standar ISO.</li>
                  <li>• Mendorong digitalisasi dan efisiensi teknologi otomasi.</li>
                </ul>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => navigate('profil')}
                className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
              >
                <span>Pelajari Sejarah & Struktur Organisasi Lengkap</span>
                <ArrowRight size={15} />
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* 4. SECTION LAYANAN (MINIMAL 8 LAYANAN) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-700 dark:text-blue-400">
              Kapabilitas & Layanan
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Solusi Terpadu Manufaktur, Fabrikasi & Layanan Informasi
            </h2>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-200/70 dark:bg-slate-800/80 rounded-xl">
            {['Semua', 'Manufaktur', 'Presisi', 'Otomasi', 'Layanan PPID'].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedLayananCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                  selectedLayananCategory === cat
                    ? 'bg-white dark:bg-slate-900 text-blue-700 dark:text-blue-400 shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 8+ Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredLayanan.map((layanan) => {
            const IconComponent = iconMap[layanan.iconName] || Hammer;
            return (
              <div
                key={layanan.id}
                onClick={() => navigate('detail-layanan', layanan.slug)}
                className="group bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-all duration-300 flex flex-col cursor-pointer"
              >
                {/* Thumbnail Image */}
                <div className="relative h-44 overflow-hidden bg-slate-100 dark:bg-slate-800">
                  <img
                    src={layanan.image}
                    alt={layanan.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 right-3 p-2 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm rounded-lg text-blue-700 dark:text-blue-400 shadow">
                    <IconComponent size={18} />
                  </div>
                  <div className="absolute bottom-2 left-3 text-[11px] font-semibold text-white drop-shadow">
                    {layanan.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white text-base group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-1">
                      {layanan.title}
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mt-2 line-clamp-2">
                      {layanan.shortDesc}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-semibold text-blue-700 dark:text-blue-400">
                    <span>Lihat Rincian Teknis</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 5. SECTION KEUNGGULAN (DENGAN ICON MODERN) */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Mengapa Memilih Kami
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Keunggulan Rekayasa Presisi & Standar Kualitas PPID
            </h2>
            <p className="text-sm text-slate-400">
              Kombinasi teknologi industri terdepan, transparansi biaya, dan pengawasan mutu tanpa kompromi demi kepuasan klien.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Cpu,
                title: 'Teknologi Modern Terintegrasi',
                desc: 'Didukung mesin CNC 5-Axis high-speed, fiber laser cutting 12kW, pemindai 3D optik, dan perangkat lunak CAM terkini.'
              },
              {
                icon: Users,
                title: 'Tim Ahli & Welder Bersertifikasi',
                desc: 'Juru las tersertifikasi Kemenaker dan inspektur las AWS D1.1 berpengalaman menangani permesinan komponen kritis.'
              },
              {
                icon: ShieldCheck,
                title: 'Kualitas Mutu Terjamin',
                desc: 'Pengawasan mutu menyeluruh (QC/QA), pengujian radiografi/ultrasonic (NDT), dan kalibrasi CMM hingga toleransi mikron.'
              },
              {
                icon: Clock,
                title: 'Pengiriman Tepat Waktu (On-Time SLA)',
                desc: 'Manajemen proyek digital memastikan setiap tahapan manufaktur dan respon informasi diselesaikan sesuai target waktu.'
              },
              {
                icon: Award,
                title: 'Biaya Transparan & Kompetitif',
                desc: 'Efisiensi nesting plat hingga 92% menekan biaya material, serta layanan informasi publik gratis tanpa biaya siluman.'
              },
              {
                icon: CheckCircle2,
                title: 'Garansi Pekerjaan & Purna Jual',
                desc: 'Setiap sistem mesin otomatis dan konstruksi fabrikasi kami lindungi dengan garansi pemeliharaan dan suku cadang.'
              }
            ].map((keunggulan, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-800/60 border border-slate-700/80 hover:border-blue-500 transition-colors space-y-3"
              >
                <div className="p-3 bg-blue-600/20 text-blue-400 rounded-xl w-fit">
                  <keunggulan.icon size={22} />
                </div>
                <h3 className="font-bold text-base text-white">
                  {keunggulan.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {keunggulan.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. SECTION STATISTIK (ANIMATED COUNTERS) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white shadow-xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center divide-y lg:divide-y-0 lg:divide-x divide-blue-700/60">
            
            <div className="space-y-1">
              <div className="text-3xl sm:text-5xl font-extrabold font-mono text-amber-400 tabular-nums">
                {counterStats.years}+
              </div>
              <p className="text-xs sm:text-sm font-medium text-blue-200">
                Tahun Pengalaman Institusi
              </p>
            </div>

            <div className="pt-4 lg:pt-0 space-y-1">
              <div className="text-3xl sm:text-5xl font-extrabold font-mono text-white tabular-nums">
                {counterStats.projects}+
              </div>
              <p className="text-xs sm:text-sm font-medium text-blue-200">
                Project & Pesanan Selesai
              </p>
            </div>

            <div className="pt-4 lg:pt-0 space-y-1">
              <div className="text-3xl sm:text-5xl font-extrabold font-mono text-amber-400 tabular-nums">
                {counterStats.employees}+
              </div>
              <p className="text-xs sm:text-sm font-medium text-blue-200">
                Karyawan & Tenaga Ahli
              </p>
            </div>

            <div className="pt-4 lg:pt-0 space-y-1">
              <div className="text-3xl sm:text-5xl font-extrabold font-mono text-white tabular-nums">
                {counterStats.satisfaction}%
              </div>
              <p className="text-xs sm:text-sm font-medium text-blue-200">
                Tingkat Kepuasan Klien
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 7. SECTION PROJECT (MINIMAL 8 PROJECT DENGAN DETAIL ROUTE) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-700 dark:text-blue-400">
              Portofolio Manufaktur
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Studi Kasus & Implementasi Nyata di Lapangan
            </h2>
          </div>
          <button
            onClick={() => navigate('project')}
            className="text-xs font-semibold text-blue-700 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 flex items-center gap-1 self-start md:self-auto"
          >
            <span>Lihat Semua {projectList.length} Project</span>
            <ArrowRight size={14} />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projectList.slice(0, 8).map((project) => (
            <div
              key={project.id}
              onClick={() => navigate('detail-project', project.slug)}
              className="group bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:border-blue-500/50 transition-all duration-300 flex flex-col cursor-pointer"
            >
              <div className="relative h-44 overflow-hidden bg-slate-100 dark:bg-slate-800">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-2.5 left-2.5 px-2.5 py-1 bg-slate-900/80 backdrop-blur-sm rounded-md text-[10px] font-semibold text-white">
                  {project.category}
                </div>
              </div>

              <div className="p-4 flex-1 flex flex-col justify-between space-y-2">
                <div>
                  <h3 className="font-bold text-sm text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                    {project.title}
                  </h3>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 line-clamp-1">
                    📍 {project.location}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[11px] font-medium text-slate-400">
                  <span className="font-mono">{project.year}</span>
                  <span className="text-blue-600 dark:text-blue-400 font-semibold group-hover:translate-x-1 transition-transform">
                    Rincian &rarr;
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. SECTION TESTIMONI (SLIDER CAROUSEL) */}
      <section className="bg-slate-100/70 dark:bg-slate-900/40 py-16 border-y border-slate-200 dark:border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="text-center space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-700 dark:text-blue-400">
              Testimoni Mitra
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Apa Kata Klien dan Pemohon Informasi Kami
            </h2>
          </div>

          {/* Testimonial Active Card */}
          <div className="relative bg-white dark:bg-slate-900 rounded-3xl p-8 sm:p-12 shadow-md border border-slate-200 dark:border-slate-800 transition-all">
            <div className="flex flex-col items-center text-center space-y-6">
              
              {/* Star Rating */}
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(testimoniList[currentTestiIndex].rating)].map((_, i) => (
                  <span key={i} className="text-lg">★</span>
                ))}
              </div>

              {/* Quote Body */}
              <blockquote className="text-base sm:text-lg text-slate-700 dark:text-slate-200 leading-relaxed font-medium italic">
                "{testimoniList[currentTestiIndex].quote}"
              </blockquote>

              {/* Author & Role */}
              <div className="space-y-1">
                <div className="font-bold text-slate-900 dark:text-white text-base">
                  {testimoniList[currentTestiIndex].name}
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400">
                  {testimoniList[currentTestiIndex].role} · <span className="text-blue-600 dark:text-blue-400">{testimoniList[currentTestiIndex].company}</span>
                </div>
                <div className="text-[11px] font-mono text-slate-400 mt-1">
                  Proyek: {testimoniList[currentTestiIndex].projectContext}
                </div>
              </div>

            </div>

            {/* Slider Navigation Buttons */}
            <div className="flex items-center justify-between pt-6 border-t border-slate-100 dark:border-slate-800 mt-6">
              <button
                onClick={prevTesti}
                className="p-2.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-blue-600 hover:text-white transition-colors"
                aria-label="Testimoni sebelumnya"
              >
                <ChevronLeft size={18} />
              </button>
              
              <div className="flex items-center gap-1.5">
                {testimoniList.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentTestiIndex(idx)}
                    className={`h-2 rounded-full transition-all ${
                      currentTestiIndex === idx ? 'w-6 bg-blue-600' : 'w-2 bg-slate-300 dark:bg-slate-700'
                    }`}
                    aria-label={`Ke slide ${idx + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextTesti}
                className="p-2.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-blue-600 hover:text-white transition-colors"
                aria-label="Testimoni berikutnya"
              >
                <ChevronRight size={18} />
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* 9. SECTION ARTIKEL (MINIMAL 6 ARTIKEL DENGAN DETAIL ROUTE) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-700 dark:text-blue-400">
              Warta & Berita Mutu
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Artikel Edukasi Teknis & Informasi Publik Terkini
            </h2>
          </div>
          <button
            onClick={() => navigate('artikel')}
            className="text-xs font-semibold text-blue-700 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 flex items-center gap-1 self-start md:self-auto"
          >
            <span>Lihat Semua Artikel</span>
            <ArrowRight size={14} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {artikelList.slice(0, 6).map((artikel) => (
            <article
              key={artikel.id}
              onClick={() => navigate('detail-artikel', artikel.slug)}
              className="group bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:border-blue-500/50 transition-all duration-300 flex flex-col cursor-pointer"
            >
              <div className="relative h-48 overflow-hidden bg-slate-100 dark:bg-slate-800">
                <img
                  src={artikel.thumbnail}
                  alt={artikel.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 left-3 px-2.5 py-1 bg-slate-900/80 backdrop-blur-sm rounded-md text-[10px] font-semibold text-white">
                  {artikel.category}
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-[11px] text-slate-400 font-mono">
                    <span>{artikel.date}</span>
                    <span>·</span>
                    <span>{artikel.readTime}</span>
                  </div>
                  <h3 className="font-bold text-slate-900 dark:text-white text-base group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2 leading-snug">
                    {artikel.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed">
                    {artikel.summary}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                  <span className="font-medium truncate max-w-[170px]">{artikel.author}</span>
                  <span className="text-blue-600 dark:text-blue-400 font-semibold group-hover:translate-x-1 transition-transform">
                    Baca &rarr;
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 10. SECTION CTA (AJAK PENGUNJUNG MENGHUBUNGI PERUSAHAAN) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-slate-900 text-white p-8 sm:p-14 overflow-hidden border border-slate-800 shadow-2xl">
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -left-20 -top-20 w-80 h-80 bg-amber-600/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl space-y-5">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Kemitraan & Layanan
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight leading-tight">
              Siap Mewujudkan Proyek Manufaktur atau Membutuhkan Informasi Resmi?
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Tim engineering dan meja informasi publik PPID Kemenag Kota Mojokerto siap melayani kebutuhan Anda dengan profesionalisme, presisi tinggi, dan transparansi penuh.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={() => openPermohonanModal('Layanan Manufaktur')}
                className="px-6 py-3.5 bg-blue-600 hover:bg-blue-500 active:scale-95 text-white font-semibold rounded-xl text-sm transition-all shadow-lg shadow-blue-600/30 flex items-center gap-2"
              >
                <span>Ajukan Penawaran / Permohonan</span>
                <ArrowRight size={16} />
              </button>
              <button
                onClick={() => navigate('kontak')}
                className="px-6 py-3.5 bg-slate-800 hover:bg-slate-700 active:scale-95 text-white font-semibold rounded-xl text-sm border border-slate-700 transition-all"
              >
                Kunjungi Kantor Kami
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
