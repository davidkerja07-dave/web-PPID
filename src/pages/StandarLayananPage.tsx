import React from 'react';
import { useApp } from '../context/AppContext';
import {
  ShieldCheck,
  Clock,
  Coins,
  FileText,
  AlertTriangle,
  CheckCircle2,
  Send,
  HelpCircle,
  FileQuestion,
  ChevronRight
} from 'lucide-react';

export const StandarLayananPage: React.FC = () => {
  const { openPermohonanModal } = useApp();

  return (
    <div className="space-y-16 pb-20">
      
      {/* Header */}
      <section className="bg-slate-900 text-white py-16 sm:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-400">
            <ShieldCheck size={14} />
            <span className="uppercase tracking-wider">Standar Mutu Pelayanan Publik</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Standar Layanan & Maklumat Pelayanan
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed">
            Komitmen resmi PPID Kementerian Agama Kota Mojokerto dalam memberikan pelayanan informasi publik yang transparan, akuntabel, bebas pungli, serta didukung keandalan rekayasa manufaktur berstandar ISO 9001:2015.
          </p>
        </div>
      </section>

      {/* 1. MAKLUMAT PELAYANAN (OFFICIAL PLEDGE BOX) */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-blue-900 to-indigo-950 text-white p-8 sm:p-12 rounded-3xl shadow-xl border-2 border-amber-400/40 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <ShieldCheck size={140} />
          </div>

          <div className="relative z-10 text-center space-y-6">
            <div className="inline-block px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 font-mono text-xs font-bold tracking-widest uppercase">
              MAKLUMAT PELAYANAN RESMI
            </div>

            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold leading-snug">
              "DENGAN INI, KAMI MENYATAKAN SANGGUP MENYELENGGARAKAN PELAYANAN SESUAI STANDAR PELAYANAN YANG TELAH DITETAPKAN, SERTA MEMBERIKAN PELAYANAN YANG TRANSPARAN, AKUNTABEL, DAN BEBAS DARI SEGALA BENTUK PUNGUTAN LIAR"
            </h2>

            <div className="pt-4 border-t border-blue-700/60 max-w-md mx-auto text-xs text-blue-200">
              <p className="font-semibold text-white">Kepala Kantor Kementerian Agama Kota Mojokerto</p>
              <p className="text-slate-300 mt-0.5">Selaku Atasan PPID Kemenag Kota Mojokerto</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. WAKTU PENYELESAIAN & BIAYA LAYANAN */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Card Waktu Layanan */}
          <div className="p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <div className="flex items-center gap-3 text-blue-700 dark:text-blue-400">
              <div className="p-3 bg-blue-50 dark:bg-blue-950 rounded-xl">
                <Clock size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg text-slate-900 dark:text-white">
                  Jangka Waktu Penyelesaian
                </h3>
                <p className="text-xs text-slate-500">Sesuai UU KIP No. 14 Tahun 2008</p>
              </div>
            </div>

            <ul className="space-y-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                <span>
                  <strong>10 Hari Kerja:</strong> Petugas PPID wajib menyampaikan pemberitahuan tertulis atas permohonan informasi diterima, ditolak, atau memerlukan perpanjangan waktu.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                <span>
                  <strong>Perpanjangan 7 Hari Kerja:</strong> Diperbolehkan satu kali dengan alasan tertulis apabila dokumen memerlukan pengumpulan dan audit uji konsekuensi lanjutan.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                <span>
                  <strong>Layanan Manufaktur & Konsultasi:</strong> Respon penawaran teknis dan review gambar CAD dalam tempo 1x24 jam kerja.
                </span>
              </li>
            </ul>
          </div>

          {/* Card Biaya Tarif Layanan */}
          <div className="p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <div className="flex items-center gap-3 text-amber-600 dark:text-amber-400">
              <div className="p-3 bg-amber-50 dark:bg-amber-950 rounded-xl">
                <Coins size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg text-slate-900 dark:text-white">
                  Biaya / Tarif Layanan
                </h3>
                <p className="text-xs text-slate-500">Transparan & Tanpa Pungli</p>
              </div>
            </div>

            <ul className="space-y-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                <span>
                  <strong>Informasi Publik: GRATIS (Rp 0,-):</strong> Seluruh permohonan informasi dalam format digital (PDF, softcopy, email) tidak dikenakan biaya sepeser pun.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                <span>
                  <strong>Biaya Penggandaan Fisik (Bila Ada):</strong> Apabila pemohon meminta cetak hardcopy dalam jumlah besar, biaya fotokopi/pengiriman ditanggung pemohon sesuai tarif riil.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                <span>
                  <strong>Produksi Manufaktur:</strong> Dihitung berdasarkan Rincian Anggaran Biaya (RAB) resmi material, waktu kerja mesin CNC/laser, dan biaya standar PNBP/kontrak mitra.
                </span>
              </li>
            </ul>
          </div>

        </div>
      </section>

      {/* 3. ALUR PROSEDUR PERMOHONAN & PENGAJUAN KEBERATAN */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-700 dark:text-blue-400">
            SOP Terpadu
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
            Alur Prosedur Pelayanan & Pengajuan Keberatan
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Alur Permohonan Informasi */}
          <div className="bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
            <h3 className="font-bold text-base text-slate-900 dark:text-white flex items-center gap-2 border-b border-slate-100 dark:border-slate-800 pb-3">
              <FileText size={18} className="text-blue-600" />
              <span>Alur Permohonan Informasi Publik</span>
            </h3>

            <div className="space-y-4 text-xs">
              {[
                { step: '1', title: 'Pemohon Mengajukan Permintaan', desc: 'Mengisi formulir permohonan daring atau datang langsung ke Meja Layanan PPID Kemenag Kota Mojokerto.' },
                { step: '2', title: 'Pemeriksaan Kelengkapan Administrasi', desc: 'Petugas memeriksa identitas KTP/Badan Hukum dan mencatat nomor registrasi tiket resmi.' },
                { step: '3', title: 'Klasifikasi Dokumen oleh PPID', desc: 'PPID memverifikasi apakah informasi tergolong terbuka, atau masuk dalam kategori uji konsekuensi.' },
                { step: '4', title: 'Penyampaian Tanggapan & Penyerahan', desc: 'Informasi diserahkan secara daring atau fisik dalam batas waktu maksimal 10 hari kerja.' }
              ].map((s) => (
                <div key={s.step} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-400 font-bold flex items-center justify-center shrink-0">
                    {s.step}
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white">{s.title}</h4>
                    <p className="text-slate-500 dark:text-slate-400 mt-0.5 leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <button
                onClick={() => openPermohonanModal('Informasi Publik')}
                className="w-full py-2.5 bg-blue-700 hover:bg-blue-800 text-white rounded-xl text-xs font-semibold shadow transition-all text-center"
              >
                Mulai Permohonan Informasi Sekarang
              </button>
            </div>
          </div>

          {/* Alur Pengajuan Keberatan */}
          <div className="bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
            <h3 className="font-bold text-base text-slate-900 dark:text-white flex items-center gap-2 border-b border-slate-100 dark:border-slate-800 pb-3">
              <AlertTriangle size={18} className="text-amber-500" />
              <span>Alur Pengajuan Keberatan Informasi</span>
            </h3>

            <div className="space-y-4 text-xs">
              {[
                { step: '1', title: 'Alasan Keberatan Diajukan', desc: 'Permohonan ditolak tanpa alasan sah, informasi tidak diberikan tepat waktu, atau dikenakan biaya tidak wajar.' },
                { step: '2', title: 'Registrasi Keberatan ke Atasan PPID', desc: 'Pemohon menyampaikan formulir keberatan dalam jangka waktu 30 hari kerja sejak ditemukannya alasan keberatan.' },
                { step: '3', title: 'Tanggapan Atasan PPID (30 Hari)', desc: 'Atasan PPID (Kepala Kemenag) mengeluarkan keputusan tertulis dalam waktu paling lambat 30 hari kerja.' },
                { step: '4', title: 'Sengketa Informasi ke Komisi Informasi', desc: 'Apabila putusan atasan PPID belum memuaskan, pemohon berhak mengajukan sengketa ke Komisi Informasi Jawa Timur.' }
              ].map((s) => (
                <div key={s.step} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-400 font-bold flex items-center justify-center shrink-0">
                    {s.step}
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white">{s.title}</h4>
                    <p className="text-slate-500 dark:text-slate-400 mt-0.5 leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <button
                onClick={() => openPermohonanModal('Pengajuan Keberatan')}
                className="w-full py-2.5 bg-slate-800 hover:bg-slate-700 text-white rounded-xl text-xs font-semibold shadow transition-all text-center border border-slate-700"
              >
                Ajukan Formulir Keberatan
              </button>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
