import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  Search,
  ArrowRight,
  Hammer,
  Cpu,
  Zap,
  Flame,
  Wrench,
  Sliders,
  Compass,
  ShieldCheck,
  FileText,
  Filter
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

export const LayananPage: React.FC = () => {
  const { layananList, navigate, openPermohonanModal } = useApp();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');

  const categories = ['Semua', 'Manufaktur', 'Presisi', 'Otomasi', 'Layanan PPID'];

  const filteredLayanan = layananList.filter((item) => {
    const matchCat = selectedCategory === 'Semua' || item.category === selectedCategory;
    const matchSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="space-y-12 pb-20">
      
      {/* Header */}
      <section className="bg-slate-900 text-white py-16 sm:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-400">
            <Wrench size={14} />
            <span className="uppercase tracking-wider">Katalog Layanan & Fasilitas</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Layanan Manufaktur & Informasi Terpadu
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed">
            Menyediakan kapabilitas rekayasa mesin presisi, fabrikasi lembaran logam modern, pemrograman otomasi pabrik, hingga akses pelayanan informasi publik resmi sesuai standar kepatuhan nasional.
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
                placeholder="Cari spesifikasi mesin, layanan, atau kata kunci..."
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:border-blue-500"
              />
            </div>

            <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
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

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredLayanan.length === 0 ? (
          <div className="p-12 text-center bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 text-slate-500">
            <p className="font-semibold text-sm">Tidak ada layanan yang sesuai dengan pencarian Anda.</p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedCategory('Semua'); }}
              className="mt-3 text-xs text-blue-600 hover:underline"
            >
              Tampilkan Semua Layanan
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredLayanan.map((item) => {
              const IconComp = iconMap[item.iconName] || Hammer;
              return (
                <div
                  key={item.id}
                  onClick={() => navigate('detail-layanan', item.slug)}
                  className="group bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:border-blue-500/50 transition-all duration-300 flex flex-col cursor-pointer"
                >
                  <div className="relative h-48 overflow-hidden bg-slate-100 dark:bg-slate-800">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-3 right-3 p-2 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm rounded-lg text-blue-700 dark:text-blue-400 shadow">
                      <IconComp size={18} />
                    </div>
                    <div className="absolute bottom-2 left-3 px-2 py-0.5 bg-slate-900/80 backdrop-blur-sm rounded text-[10px] font-semibold text-white">
                      {item.category}
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      <h3 className="font-bold text-slate-900 dark:text-white text-base group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mt-2 line-clamp-3">
                        {item.shortDesc}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-semibold text-blue-700 dark:text-blue-400">
                      <span>Rincian Kapabilitas & SOP</span>
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>

      {/* CTA Bottom Banner */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 pt-8">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white">
          Memerlukan Solusi Manufaktur Khusus yang Belum Terdaftar?
        </h3>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
          Tim rekayasa kami dapat membuatkan perkakas khusus (custom machine), jig & fixture, serta prototipe sesuai gambar teknik Anda.
        </p>
        <button
          onClick={() => openPermohonanModal('Layanan Manufaktur')}
          className="px-6 py-3 bg-blue-700 hover:bg-blue-800 text-white text-xs font-semibold rounded-xl shadow-md transition-all"
        >
          Konsultasikan Kebutuhan Teknis Anda
        </button>
      </section>

    </div>
  );
};
