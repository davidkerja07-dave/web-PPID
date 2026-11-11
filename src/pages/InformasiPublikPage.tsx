import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  FileText,
  Search,
  Eye,
  Download,
  Filter,
  ShieldCheck,
  Calendar,
  Layers,
  ArrowRight
} from 'lucide-react';

export const InformasiPublikPage: React.FC = () => {
  const { informasiPublikList, openDocModal, openPermohonanModal } = useApp();
  const [selectedType, setSelectedType] = useState<string>('Semua');
  const [searchQuery, setSearchQuery] = useState('');

  const types = ['Semua', 'Berkala', 'Serta Merta', 'Setiap Saat', 'Dikecualikan'];

  const filteredDocs = informasiPublikList.filter((doc) => {
    const matchType = selectedType === 'Semua' || doc.type === selectedType;
    const matchSearch =
      doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.responsibleUnit.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.year.includes(searchQuery);
    return matchType && matchSearch;
  });

  return (
    <div className="space-y-12 pb-20">
      
      {/* Header */}
      <section className="bg-slate-900 text-white py-16 sm:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-400">
            <FileText size={14} />
            <span className="uppercase tracking-wider">Keterbukaan Informasi Publik (UU No. 14/2008)</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Klasifikasi Informasi Publik
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed">
            Akses resmi terhadap informasi berkala, informasi serta-merta, informasi setiap saat, dan hasil uji konsekuensi informasi yang dikecualikan di lingkungan Kantor Kemenag Kota Mojokerto.
          </p>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-slate-900 p-4 sm:p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            
            <div className="relative w-full md:max-w-md">
              <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Cari judul dokumen, satuan kerja, atau tahun..."
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:border-blue-500"
              />
            </div>

            <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
              {types.map((type) => (
                <button
                  key={type}
                  onClick={() => setSelectedType(type)}
                  className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                    selectedType === type
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                  }`}
                >
                  {type === 'Semua' ? 'Semua Klasifikasi' : `Informasi ${type}`}
                </button>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Document Table */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
          
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-slate-50 dark:bg-slate-800/80 border-b border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 font-semibold uppercase tracking-wider">
                  <th className="py-3.5 px-4">Nama Dokumen Informasi</th>
                  <th className="py-3.5 px-4">Klasifikasi</th>
                  <th className="py-3.5 px-4">Unit Penanggung Jawab</th>
                  <th className="py-3.5 px-4">Tahun</th>
                  <th className="py-3.5 px-4">Format / Ukuran</th>
                  <th className="py-3.5 px-4 text-right">Aksi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {filteredDocs.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="py-10 text-center text-slate-500">
                      Tidak ada dokumen yang sesuai dengan pencarian Anda.
                    </td>
                  </tr>
                ) : (
                  filteredDocs.map((doc) => (
                    <tr
                      key={doc.id}
                      className="hover:bg-slate-50/80 dark:hover:bg-slate-800/40 transition-colors"
                    >
                      <td className="py-4 px-4 font-semibold text-slate-900 dark:text-white max-w-xs sm:max-w-sm">
                        {doc.title}
                      </td>
                      <td className="py-4 px-4 whitespace-nowrap">
                        <span
                          className={`px-2 py-0.5 rounded text-[10px] font-mono font-semibold ${
                            doc.type === 'Berkala'
                              ? 'bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-400'
                              : doc.type === 'Serta Merta'
                              ? 'bg-amber-50 dark:bg-amber-950 text-amber-700 dark:text-amber-400'
                              : doc.type === 'Setiap Saat'
                              ? 'bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400'
                              : 'bg-red-50 dark:bg-red-950 text-red-700 dark:text-red-400'
                          }`}
                        >
                          {doc.type}
                        </span>
                      </td>
                      <td className="py-4 px-4 text-slate-600 dark:text-slate-400 whitespace-nowrap">
                        {doc.responsibleUnit}
                      </td>
                      <td className="py-4 px-4 font-mono text-slate-600 dark:text-slate-300">
                        {doc.year}
                      </td>
                      <td className="py-4 px-4 font-mono text-slate-500 whitespace-nowrap">
                        {doc.fileFormat} · {doc.fileSize}
                      </td>
                      <td className="py-4 px-4 text-right whitespace-nowrap">
                        <div className="flex items-center justify-end gap-2">
                          <button
                            onClick={() =>
                              openDocModal({
                                title: doc.title,
                                type: `Informasi ${doc.type}`,
                                size: doc.fileSize,
                                date: doc.lastUpdated
                              })
                            }
                            className="p-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
                            title="Pratinjau Dokumen"
                          >
                            <Eye size={14} />
                          </button>
                          <button
                            onClick={() =>
                              openDocModal({
                                title: doc.title,
                                type: `Informasi ${doc.type}`,
                                size: doc.fileSize,
                                date: doc.lastUpdated
                              })
                            }
                            className="px-2.5 py-1.5 rounded-lg bg-blue-700 hover:bg-blue-800 text-white font-medium flex items-center gap-1 shadow-sm"
                            title="Unduh Berkas"
                          >
                            <Download size={13} />
                            <span>Unduh</span>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

        </div>
      </section>

      {/* Need more info banner */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 pt-6">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white">
          Informasi yang Anda Cari Belum Tersedia di Tabel?
        </h3>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-lg mx-auto">
          Masyarakat berhak mengajukan permohonan informasi khusus secara online melalui mekanisme Permohonan Informasi Publik PPID.
        </p>
        <button
          onClick={() => openPermohonanModal('Informasi Publik')}
          className="px-6 py-3 bg-blue-700 hover:bg-blue-800 text-white text-xs font-semibold rounded-xl shadow-md transition-all"
        >
          Ajukan Permohonan Informasi Online
        </button>
      </section>

    </div>
  );
};
