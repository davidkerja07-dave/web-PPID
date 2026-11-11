import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  ArrowLeft,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  FileText,
  ShieldCheck,
  Send,
  Wrench,
  Cpu,
  Layers,
  Sparkles
} from 'lucide-react';

export const DetailLayananPage: React.FC = () => {
  const { layananList, selectedLayananSlug, navigate, openPermohonanModal } = useApp();

  const layanan = layananList.find((l) => l.slug === selectedLayananSlug) || layananList[0];

  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="space-y-16 pb-20">
      
      {/* 1. HERO DETAIL LAYANAN */}
      <section className="bg-slate-900 text-white py-14 sm:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          
          <button
            onClick={() => navigate('layanan')}
            className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors"
          >
            <ArrowLeft size={14} />
            <span>Kembali ke Daftar Layanan</span>
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-400">
                <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                <span className="uppercase tracking-wider">Kategori: {layanan.category}</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
                {layanan.title}
              </h1>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
                {layanan.shortDesc}
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => openPermohonanModal('Layanan Manufaktur')}
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl text-xs sm:text-sm shadow-md transition-all flex items-center gap-2"
                >
                  <Send size={15} />
                  <span>Ajukan Penawaran Layanan Ini</span>
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-slate-700 aspect-[4/3]">
                <img
                  src={layanan.image}
                  alt={layanan.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. DESKRIPSI LENGKAP & SPESIFIKASI TEKNIS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Main Description */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                Gambaran & Ruang Lingkup Layanan
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed text-justify">
                {layanan.description}
              </p>
            </div>

            {/* 3. BENEFIT & KEUNGGULAN */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Sparkles size={18} className="text-blue-600" />
                <span>Keunggulan & Manfaat Utama</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {layanan.benefits.map((benefit, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 flex items-start gap-3"
                  >
                    <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* 4. ALUR PROSES KERJA / SOP */}
            <div className="space-y-4 pt-4">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Layers size={18} className="text-blue-600" />
                <span>Tahapan Pelaksanaan Prosedur (SOP)</span>
              </h3>
              <div className="space-y-3">
                {[
                  { step: '01', title: 'Penerimaan Gambar Kerja & Review Teknis', desc: 'Analisis gambar CAD/CAM, toleransi geometri, serta spesifikasi material yang diajukan pemohon.' },
                  { step: '02', title: 'Penetapan Estimasi & Surat Penawaran', desc: 'Perhitungan efisiensi bahan, estimasi jam kerja mesin, dan penyusunan RAB resmi tanpa biaya tersembunyi.' },
                  { step: '03', title: 'Fabrikasi & Quality Control Berkala', desc: 'Proses permesinan / fabrikasi diawasi oleh inspektur mutu dengan instrumen CMM terkalibrasi.' },
                  { step: '04', title: 'Uji Akhir & Serah Terima Resmi', desc: 'Penerbitan Berita Acara Serah Terima (BAST), sertifikat inspeksi mutu, dan pengemasan standar industri.' }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                    <span className="font-mono font-extrabold text-blue-600 text-sm">{item.step}</span>
                    <div className="space-y-1">
                      <h4 className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white">{item.title}</h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Sidebar Specifications & Quick Contact */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Technical Specs Card */}
            <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
              <div className="flex items-center gap-2 text-slate-900 dark:text-white font-bold text-base border-b border-slate-100 dark:border-slate-800 pb-3">
                <Cpu size={18} className="text-blue-600" />
                <span>Spesifikasi Kapabilitas Teknis</span>
              </div>

              <div className="space-y-3 text-xs">
                {layanan.specifications.map((spec, idx) => (
                  <div key={idx} className="flex justify-between py-2 border-b border-slate-100 dark:border-slate-800 last:border-0">
                    <span className="text-slate-500 dark:text-slate-400 font-medium">{spec.label}</span>
                    <span className="font-semibold text-slate-900 dark:text-white text-right font-mono">{spec.value}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <button
                  onClick={() => openPermohonanModal('Layanan Manufaktur')}
                  className="w-full py-2.5 bg-blue-700 hover:bg-blue-800 text-white rounded-xl text-xs font-semibold shadow transition-all text-center"
                >
                  Minta Penawaran Spesifikasi Khusus
                </button>
              </div>
            </div>

            {/* Quality Commitment Box */}
            <div className="bg-slate-50 dark:bg-slate-850 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 space-y-3 text-xs">
              <div className="flex items-center gap-2 text-blue-700 dark:text-blue-400 font-bold text-sm">
                <ShieldCheck size={18} />
                <span>Jaminan Kualitas PPID</span>
              </div>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Seluruh pesanan dikerjakan sesuai prosedur ISO 9001:2015 dengan dokumen pelaporan berkala yang dapat dipantau oleh pemohon.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 5. FAQ ACCORDION */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-700 dark:text-blue-400">
            Pertanyaan Umum
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
            FAQ Seputar Layanan {layanan.title}
          </h2>
        </div>

        <div className="space-y-3">
          {layanan.faqs.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 text-xs sm:text-sm font-semibold text-slate-900 dark:text-white hover:text-blue-600 transition-colors"
                >
                  <span>{faq.question}</span>
                  {isOpen ? <ChevronUp size={16} className="shrink-0 text-blue-600" /> : <ChevronDown size={16} className="shrink-0 text-slate-400" />}
                </button>
                {isOpen && (
                  <div className="px-5 pb-4 text-xs text-slate-600 dark:text-slate-400 leading-relaxed border-t border-slate-100 dark:border-slate-800 pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 6. CTA HUBUNGI */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-slate-900 text-white text-center space-y-4 border border-slate-800 shadow-xl">
          <h3 className="text-xl sm:text-2xl font-extrabold">
            Butuh Konsultasi Langsung Mengenai {layanan.title}?
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
            Hubungi customer service dan staf engineering kami untuk mendiskusikan kebutuhan permesinan atau permohonan informasi publik Anda.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => openPermohonanModal('Layanan Manufaktur')}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold rounded-xl shadow-md transition-all"
            >
              Ajukan Tiket Permohonan
            </button>
            <button
              onClick={() => navigate('kontak')}
              className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold rounded-xl border border-slate-700 transition-all"
            >
              Hubungi Kontak Kantor
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
