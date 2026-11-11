import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  FileText,
  Search,
  Download,
  Eye,
  Filter,
  ShieldCheck,
  Calendar,
  Layers
} from 'lucide-react';

export const RegulasiPage: React.FC = () => {
  const { regulasiList, openDocModal } = useApp();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');

  const categories = ['Semua', 'Undang-Undang', 'Peraturan Pemerintah', 'Peraturan Menteri', 'SOP Teknis'];

  const filteredRegulasi = regulasiList.filter((reg) => {
    const matchCat = selectedCategory === 'Semua' || reg.category === selectedCategory;
    const matchSearch =
      reg.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      reg.nomor.toLowerCase().includes(searchQuery.toLowerCase()) ||
      reg.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="space-y-12 pb-20">
      
      {/* Header */}
      <section className="bg-slate-900 text-white py-16 sm:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-400">
            <ShieldCheck size={14} />
            <span className="uppercase tracking-wider">Payung Hukum & Keterbukaan Publik</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Regulasi & Dasar Hukum
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed">
            Kumpulan peraturan perundang-undangan Republik Indonesia, peraturan menteri, serta standar operasional prosedur teknis yang menjadi landasan operasional PPID Kemenag Kota Mojokerto.
          </p>
        </div>
      </section>

      {/* Search & Filter Toolbar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-slate-900 p-4 sm:p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            
            {/* Search Input */}
            <div className="relative w-full md:max-w-md">
              <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Cari regulasi, nomor surat, atau kata kunci..."
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:border-blue-500"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                    selectedCategory === cat
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Regulation List */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-4">
          {filteredRegulasi.length === 0 ? (
            <div className="p-12 text-center bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 text-slate-500">
              <FileText size={36} className="mx-auto mb-3 text-slate-400" />
              <p className="font-semibold text-sm">Tidak ada dokumen regulasi yang cocok dengan pencarian.</p>
              <button
                onClick={() => { setSearchQuery(''); setSelectedCategory('Semua'); }}
                className="mt-3 text-xs text-blue-600 hover:underline"
              >
                Reset Filter Pencarian
              </button>
            </div>
          ) : (
            filteredRegulasi.map((reg) => (
              <div
                key={reg.id}
                className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-blue-500/50 shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row md:items-center justify-between gap-6"
              >
                <div className="space-y-2 flex-1">
                  <div className="flex flex-wrap items-center gap-2 text-xs">
                    <span className="font-mono font-bold text-blue-700 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 px-2.5 py-0.5 rounded border border-blue-200 dark:border-blue-900">
                      {reg.nomor}
                    </span>
                    <span className="text-slate-400">·</span>
                    <span className="text-slate-600 dark:text-slate-400 font-medium">{reg.category}</span>
                    <span className="text-slate-400">·</span>
                    <span className="text-slate-500 font-mono text-[11px]">Tahun {reg.year}</span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                    {reg.title}
                  </h3>

                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {reg.description}
                  </p>
                </div>

                <div className="flex items-center gap-2.5 shrink-0 pt-2 md:pt-0 border-t md:border-t-0 border-slate-100 dark:border-slate-800">
                  <button
                    onClick={() =>
                      openDocModal({
                        title: reg.title,
                        nomor: reg.nomor,
                        type: reg.category,
                        size: reg.fileSize,
                        date: reg.dateIssued
                      })
                    }
                    className="px-3.5 py-2 text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-colors flex items-center gap-1.5"
                  >
                    <Eye size={14} />
                    <span>Lihat Pratinjau</span>
                  </button>

                  <button
                    onClick={() =>
                      openDocModal({
                        title: reg.title,
                        nomor: reg.nomor,
                        type: reg.category,
                        size: reg.fileSize,
                        date: reg.dateIssued
                      })
                    }
                    className="px-3.5 py-2 text-xs font-semibold bg-blue-700 hover:bg-blue-800 text-white rounded-lg transition-colors flex items-center gap-1.5 shadow-sm"
                  >
                    <Download size={14} />
                    <span>Unduh ({reg.fileSize})</span>
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </section>

    </div>
  );
};
