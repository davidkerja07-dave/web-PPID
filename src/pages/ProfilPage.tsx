import React from 'react';
import { useApp } from '../context/AppContext';
import { HQ_IMAGE, HERO_IMAGE } from '../data/initialData';
import {
  ShieldCheck,
  Target,
  Eye,
  Award,
  Calendar,
  CheckCircle2,
  FileCheck2,
  Building,
  Briefcase
} from 'lucide-react';

export const ProfilPage: React.FC = () => {
  const { teamList, openPermohonanModal } = useApp();

  const timelineMilestones = [
    {
      year: '2004',
      title: 'Pendirian Workshop Mekanikal Kemenag',
      description: 'Awal mula pendirian unit pemeliharaan sarana prasarana dan fabrikasi bengkel kerja permesinan di lingkungan Kemenag Kota Mojokerto.'
    },
    {
      year: '2008',
      title: 'Implementasi UU No. 14 Tahun 2008',
      description: 'Penetapan struktur awal Pejabat Pengelola Informasi dan Dokumentasi (PPID) guna menjamin akuntabilitas dan hak masyarakat atas informasi publik.'
    },
    {
      year: '2016',
      title: 'Modernisasi Mesin CNC & Sertifikasi ISO',
      description: 'Pengadaan mesin CNC milling dan perolehan sertifikasi Sistem Manajemen Mutu ISO 9001:2015 untuk standardisasi proses permesinan presisi.'
    },
    {
      year: '2021',
      title: 'Perki No. 1/2021 & Integrasi Laser 12kW',
      description: 'Penyelarasan standar layanan informasi publik nasional serta penambahan fasilitas pemotongan plat Fiber Laser daya tinggi berkapasitas 12kW.'
    },
    {
      year: '2026',
      title: 'Portal Terpadu Manufaktur & Layanan Digital PPID',
      description: 'Peluncuran platform digital modern terpadu yang memadukan layanan permohonan informasi publik online dengan pemesanan rekayasa manufaktur presisi.'
    }
  ];

  const legalitasDocs = [
    { label: 'Dasar Pembentukan PPID', value: 'Keputusan Kepala Kantor Kemenag Kota Mojokerto No. 04 Tahun 2022' },
    { label: 'Sertifikasi Mutu', value: 'ISO 9001:2015 Quality Management System (Reg: QMS-IDN-2024)' },
    { label: 'Kualifikasi Juru Las', value: 'Welding Procedure Specification (WPS) & Welder Certificate AWS D1.1' },
    { label: 'Kepatuhan Regulasi', value: 'PMA No. 44 Tahun 2022 & Perki No. 1 Tahun 2021' },
    { label: 'K3 & Lingkungan', value: 'Sistem Manajemen Keselamatan dan Kesehatan Kerja (SMK3) Kemenaker' }
  ];

  return (
    <div className="space-y-20 pb-20">
      
      {/* Header Banner */}
      <section className="bg-slate-900 text-white py-16 sm:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-400">
            <Building size={14} />
            <span className="uppercase tracking-wider">Profil Institusi & Fasilitas</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Profil PPID Kemenag Kota Mojokerto
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed">
            Menegakkan keterbukaan informasi publik yang transparan sekaligus menggerakkan solusi rekayasa manufaktur presisi modern bagi industri nasional.
          </p>
        </div>
      </section>

      {/* Sejarah & Latar Belakang */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-5">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-700 dark:text-blue-400">
              Sejarah & Latar Belakang
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Dua Dekade Mengabdi: Dari Bengkel Perawatan Hingga Pusat Presisi Terpadu
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed text-justify">
              Berdiri di jantung historis Kota Mojokerto, Kantor Kementerian Agama Kota Mojokerto mengembangkan unit kerja PPID dan fasilitas workshop permesinan presisi sebagai wujud dedikasi kepada masyarakat. Kami meyakini bahwa transparansi tata kelola pemerintahan harus berjalan beriringan dengan kemampuan nyata dalam memproduksi teknologi dan peralatan berdaya guna tinggi.
            </p>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed text-justify">
              Sejak diundangkannya UU KIP Nomor 14 Tahun 2008, PPID Kemenag Kota Mojokerto secara konsisten memperoleh predikat Badan Publik Informatif dari Komisi Informasi Provinsi Jawa Timur. Di saat yang sama, fasilitas permesinan kami terus diperbaharui dengan teknologi 5-Axis CNC, Laser Cutting 12kW, serta laboratorium perancangan CAD/CAM untuk menyokong kebutuhan komponen industri lokal maupun nasional.
            </p>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-200 dark:border-slate-800 aspect-[4/3] relative">
              <img
                src={HQ_IMAGE}
                alt="Gedung Pelayanan Terpadu & Laboratorium Manufaktur"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white text-xs">
                <p className="font-semibold text-sm">Gedung Pelayanan Terpadu Satu Pintu</p>
                <p className="text-slate-300 text-[11px]">Kota Mojokerto, Jawa Timur</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Visi, Misi & Nilai Perusahaan */}
      <section className="bg-slate-100/70 dark:bg-slate-900/40 py-16 border-y border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-700 dark:text-blue-400">
              Fondasi Organisasi
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Visi, Misi & Nilai-Nilai Utama
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
              <div className="flex items-center gap-3 text-blue-700 dark:text-blue-400">
                <div className="p-3 bg-blue-50 dark:bg-blue-950 rounded-xl">
                  <Target size={24} />
                </div>
                <h3 className="font-extrabold text-lg text-slate-900 dark:text-white">
                  Visi Organisasi
                </h3>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed text-justify">
                "Terwujudnya pelayanan informasi publik yang transparan, profesional, dan akuntabel serta keunggulan rekayasa manufaktur presisi yang berdaya saing tinggi demi kemajuan industri dan kesejahteraan masyarakat berlandaskan nilai-nilai integritas."
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
              <div className="flex items-center gap-3 text-amber-600 dark:text-amber-400">
                <div className="p-3 bg-amber-50 dark:bg-amber-950 rounded-xl">
                  <Eye size={24} />
                </div>
                <h3 className="font-extrabold text-lg text-slate-900 dark:text-white">
                  Misi Strategis
                </h3>
              </div>
              <ul className="text-sm text-slate-600 dark:text-slate-300 space-y-2 leading-relaxed">
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                  <span>Menjamin akses informasi publik yang mudah, cepat, dan tanpa pungutan biaya sesuai UU KIP.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                  <span>Menghasilkan produk manufaktur logam, pemesinan presisi, dan otomasi berstandar mutu ISO 9001:2015.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                  <span>Meningkatkan kompetensi sumber daya manusia teknis dan integritas aparatur sipil negara.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Core Values */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
            {[
              {
                title: 'Integritas & Ikhlas Beramal',
                desc: 'Bekerja secara jujur, bebas korupsi, dan berorientasi pada kemaslahatan publik.'
              },
              {
                title: 'Presisi & Akurasi Tinggi',
                desc: 'Ketelitian hingga batas mikron pada setiap detail permesinan maupun data informasi.'
              },
              {
                title: 'Transparansi Penuh',
                desc: 'Keterbukaan informasi tanpa diskriminasi sesuai amanat undang-undang publik.'
              },
              {
                title: 'Inovasi Berkelanjutan',
                desc: 'Adaptasi aktif terhadap otomasi Industri 4.0 dan sistem digitalisasi pelayanan.'
              }
            ].map((val, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center space-y-2"
              >
                <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-400 font-bold text-xs flex items-center justify-center mx-auto">
                  0{idx + 1}
                </div>
                <h4 className="font-bold text-sm text-slate-900 dark:text-white">
                  {val.title}
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Timeline Perjalanan */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-700 dark:text-blue-400">
            Jejak Langkah
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Timeline Perjalanan Institusi
          </h2>
        </div>

        <div className="space-y-6 relative before:absolute before:inset-0 before:left-8 before:w-0.5 before:bg-slate-200 dark:before:bg-slate-800">
          {timelineMilestones.map((item, idx) => (
            <div key={idx} className="relative flex items-start gap-6 group">
              <div className="w-16 h-16 rounded-2xl bg-blue-50 dark:bg-slate-800 border-2 border-blue-600 text-blue-700 dark:text-blue-400 font-mono font-bold text-sm flex items-center justify-center shrink-0 z-10 shadow-sm group-hover:scale-105 transition-transform">
                {item.year}
              </div>
              <div className="flex-1 p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-1">
                <h3 className="font-bold text-base text-slate-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Legalitas & Sertifikasi */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-700 dark:text-blue-400">
            Legalitas & Standar
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Dasar Hukum & Sertifikasi Mutu Resmi
          </h2>
        </div>

        <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
          <div className="divide-y divide-slate-100 dark:divide-slate-800 text-xs">
            {legalitasDocs.map((doc, idx) => (
              <div key={idx} className="py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <span className="font-semibold text-slate-900 dark:text-white flex items-center gap-2">
                  <FileCheck2 size={16} className="text-blue-600" />
                  {doc.label}
                </span>
                <span className="text-slate-600 dark:text-slate-300 font-mono bg-slate-50 dark:bg-slate-800 px-3 py-1 rounded border border-slate-200 dark:border-slate-700">
                  {doc.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tim Ahli & Struktur Pimpinan */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-700 dark:text-blue-400">
            Struktur Tim
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Pimpinan PPID & Tim Rekayasa Engineering
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            Dikelola oleh tenaga profesional dan aparatur berpengalaman di bidang pelayanan publik serta manufaktur presisi.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamList.map((member) => (
            <div
              key={member.id}
              className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4 hover:border-blue-500 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-400 font-bold flex items-center justify-center text-base">
                  {member.name.split(' ').slice(0, 2).map(n => n[0]).join('')}
                </div>
                <div>
                  <h3 className="font-bold text-sm text-slate-900 dark:text-white line-clamp-1">
                    {member.name}
                  </h3>
                  <p className="text-[11px] font-medium text-blue-600 dark:text-blue-400">
                    {member.role}
                  </p>
                </div>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                {member.bio}
              </p>
              <div className="pt-2 border-t border-slate-100 dark:border-slate-800 text-[10px] font-mono text-slate-400">
                Divisi: {member.division}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to action */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white">
          Ingin Berkonsultasi Mengenai Layanan Kami?
        </h3>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-lg mx-auto">
          Silakan hubungi tim kami atau ajukan permohonan secara daring melalui formulir layanan terpadu.
        </p>
        <button
          onClick={() => openPermohonanModal('Layanan Manufaktur')}
          className="px-6 py-3 bg-blue-700 hover:bg-blue-800 text-white text-xs font-semibold rounded-xl shadow-md transition-all"
        >
          Hubungi Tim PPID & Engineering
        </button>
      </section>

    </div>
  );
};
