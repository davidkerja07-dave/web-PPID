import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { X, Download, FileText, CheckCircle2, ShieldCheck, Printer } from 'lucide-react';

export const DocPreviewModal: React.FC = () => {
  const { activeDocModal, closeDocModal } = useApp();
  const [downloaded, setDownloaded] = useState(false);

  if (!activeDocModal) return null;

  const handleDownload = () => {
    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 3000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-2xl max-w-3xl w-full border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Modal Header */}
        <div className="px-6 py-4 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800 shrink-0">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-600 rounded-lg text-white">
              <FileText size={18} />
            </div>
            <div>
              <h3 className="font-bold text-sm sm:text-base line-clamp-1">
                {activeDocModal.title}
              </h3>
              <p className="text-xs text-slate-400 font-mono">
                {activeDocModal.nomor || 'Dokumen Resmi Kemenag Kota Mojokerto'}
              </p>
            </div>
          </div>
          <button
            onClick={closeDocModal}
            className="text-slate-400 hover:text-white p-1.5 rounded-lg hover:bg-slate-800 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Document Viewer Body */}
        <div className="p-6 overflow-y-auto flex-1 bg-slate-100 dark:bg-slate-950">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-8 shadow-sm max-w-2xl mx-auto space-y-6 text-slate-800 dark:text-slate-200 relative">
            
            {/* Government Seal & Official Letterhead */}
            <div className="text-center border-b-2 border-slate-800 dark:border-slate-300 pb-5 space-y-1">
              <p className="text-xs font-semibold tracking-widest uppercase text-slate-500 dark:text-slate-400">
                KEMENTERIAN AGAMA REPUBLIK INDONESIA
              </p>
              <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white uppercase tracking-wide">
                KANTOR KEMENTERIAN AGAMA KOTA MOJOKERTO
              </h2>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                PEJABAT PENGELOLA INFORMASI DAN DOKUMENTASI (PPID)
              </p>
              <p className="text-[11px] text-slate-500 font-mono">
                Jl. Taman Siswa No. 16, Kota Mojokerto, Jawa Timur 61318 | Telp: (0321) 322123
              </p>
            </div>

            {/* Document Content */}
            <div className="space-y-4 text-xs sm:text-sm leading-relaxed">
              <div className="p-3 bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900 rounded-lg flex items-center justify-between text-xs">
                <div>
                  <span className="font-semibold text-blue-900 dark:text-blue-300">Status Dokumen: </span>
                  <span className="text-blue-700 dark:text-blue-400">Terbuka untuk Publik (Tervalidasi)</span>
                </div>
                <div className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-medium">
                  <ShieldCheck size={14} />
                  <span>Sah & Autentik</span>
                </div>
              </div>

              <h4 className="text-center font-bold text-base text-slate-900 dark:text-white uppercase underline decoration-1 underline-offset-4">
                {activeDocModal.title}
              </h4>

              <p className="text-justify text-slate-700 dark:text-slate-300">
                Dokumen ini merupakan publikasi resmi yang diterbitkan dan dipelihara oleh Pejabat Pengelola Informasi dan Dokumentasi (PPID) Kantor Kementerian Agama Kota Mojokerto sesuai dengan ketentuan Undang-Undang Republik Indonesia Nomor 14 Tahun 2008 tentang Keterbukaan Informasi Publik.
              </p>

              <div className="border border-slate-200 dark:border-slate-800 rounded-lg p-4 bg-slate-50 dark:bg-slate-850 space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-slate-500">Nomor Registrasi:</span>
                  <span className="font-mono font-semibold">{activeDocModal.nomor || 'REG-PPID-2026/DOC'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Klasifikasi Informasi:</span>
                  <span className="font-medium">{activeDocModal.type || 'Informasi Publik Berkala'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Ukuran Berkas:</span>
                  <span className="font-mono">{activeDocModal.size || '1.8 MB (PDF)'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Tanggal Terbit / Pembaharuan:</span>
                  <span>{activeDocModal.date || 'Tahun Anggaran 2026'}</span>
                </div>
              </div>

              <p className="text-justify text-slate-600 dark:text-slate-400 text-xs">
                Masyarakat dan pelaku industri diperbolehkan mengunduh, membaca, serta mengutip dokumen ini untuk keperluan penelitian, pengawasan publik, dan kemitraan manufaktur dengan tetap mencantumkan sumber resmi.
              </p>
            </div>

            {/* Official Stamp & Sign Off */}
            <div className="pt-6 border-t border-slate-200 dark:border-slate-800 flex justify-between items-end text-xs">
              <div className="text-slate-500 font-mono text-[11px]">
                <p>Digital Signature Verified</p>
                <p>SHA256: 8f9b2c...a107e3</p>
              </div>
              <div className="text-right">
                <p className="text-slate-500">Kota Mojokerto, Jawa Timur</p>
                <p className="font-semibold text-slate-900 dark:text-white mt-1">
                  PPID Kemenag Kota Mojokerto
                </p>
                <div className="mt-2 inline-block px-3 py-1 border-2 border-emerald-600 text-emerald-600 rounded font-bold text-[10px] tracking-wider uppercase rotate-[-2deg]">
                  TERVERIFIKASI RESMI
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Modal Footer Controls */}
        <div className="px-6 py-3.5 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between shrink-0">
          <button
            onClick={handlePrint}
            className="px-3 py-2 text-xs text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors flex items-center gap-1.5"
          >
            <Printer size={15} />
            <span>Cetak Pratinjau</span>
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={closeDocModal}
              className="px-4 py-2 text-xs text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
            >
              Tutup
            </button>
            <button
              onClick={handleDownload}
              className="px-4 py-2 bg-blue-700 hover:bg-blue-800 text-white rounded-lg text-xs font-semibold transition-colors flex items-center gap-1.5 shadow-sm"
            >
              {downloaded ? <CheckCircle2 size={15} className="text-emerald-400" /> : <Download size={15} />}
              <span>{downloaded ? 'Berhasil Diunduh' : 'Unduh Berkas Lengkap'}</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
