import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  ArrowLeft,
  Calendar,
  Clock,
  User,
  Share2,
  Copy,
  Check,
  Bookmark,
  ArrowRight,
  Send
} from 'lucide-react';

export const DetailArtikelPage: React.FC = () => {
  const { artikelList, selectedArtikelSlug, navigate } = useApp();
  const [isCopied, setIsCopied] = useState(false);

  const artikel = artikelList.find((a) => a.slug === selectedArtikelSlug) || artikelList[0];

  const relatedArtikels = artikelList
    .filter((a) => a.id !== artikel.id)
    .slice(0, 3);

  const handleShare = (platform: 'whatsapp' | 'twitter' | 'copy') => {
    const url = window.location.href;
    const text = encodeURIComponent(`${artikel.title} - PPID Kemenag Kota Mojokerto\n${url}`);
    
    if (platform === 'whatsapp') {
      window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
    } else if (platform === 'twitter') {
      window.open(`https://twitter.com/intent/tweet?text=${text}`, '_blank');
    } else {
      navigator.clipboard.writeText(window.location.href);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2500);
    }
  };

  return (
    <div className="space-y-12 pb-20">
      
      {/* Top Breadcrumb & Return */}
      <section className="bg-slate-900 text-white pt-10 pb-16 border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          
          <button
            onClick={() => navigate('artikel')}
            className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors"
          >
            <ArrowLeft size={14} />
            <span>Kembali ke Seluruh Artikel</span>
          </button>

          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-400 font-mono">
              <span className="w-2 h-2 rounded-full bg-amber-400"></span>
              <span className="uppercase tracking-wider">{artikel.category}</span>
            </div>
            
            <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight leading-tight">
              {artikel.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 pt-2 border-t border-slate-800">
              <span className="text-white font-medium">{artikel.author}</span>
              <span>·</span>
              <span className="font-mono">{artikel.date}</span>
              <span>·</span>
              <span className="font-mono">{artikel.readTime}</span>
            </div>
          </div>

        </div>
      </section>

      {/* Main Article Body & Cover */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 -mt-8">
        
        {/* Cover Image */}
        <div className="rounded-2xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 aspect-[16/9] bg-slate-900">
          <img
            src={artikel.thumbnail}
            alt={artikel.title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Share & Actions Toolbar */}
        <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
            <Share2 size={16} />
            <span>Bagikan Artikel Ini:</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => handleShare('whatsapp')}
              className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-medium transition-colors shadow-sm"
            >
              WhatsApp
            </button>
            <button
              onClick={() => handleShare('twitter')}
              className="px-3 py-1.5 rounded-lg bg-sky-600 hover:bg-sky-500 text-white text-xs font-medium transition-colors shadow-sm"
            >
              Twitter / X
            </button>
            <button
              onClick={() => handleShare('copy')}
              className="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 text-xs font-medium transition-colors flex items-center gap-1.5 border border-slate-200 dark:border-slate-700"
            >
              {isCopied ? <Check size={13} className="text-emerald-500" /> : <Copy size={13} />}
              <span>{isCopied ? 'Tautan Tersalin' : 'Salin Tautan'}</span>
            </button>
          </div>
        </div>

        {/* Formatted Content */}
        <div className="bg-white dark:bg-slate-900 p-6 sm:p-10 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-6 text-sm sm:text-base text-slate-700 dark:text-slate-200 leading-relaxed">
          {artikel.content.map((paragraph, idx) => (
            <p key={idx} className="text-justify leading-relaxed">
              {paragraph}
            </p>
          ))}

          {/* Tags */}
          <div className="pt-6 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold text-slate-400">Kata Kunci:</span>
            {artikel.tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 rounded bg-slate-100 dark:bg-slate-800 text-xs font-mono text-slate-600 dark:text-slate-300"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Author Box */}
          <div className="mt-8 p-5 bg-slate-50 dark:bg-slate-850 rounded-xl border border-slate-200 dark:border-slate-800 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-400 font-bold flex items-center justify-center shrink-0">
              <User size={22} />
            </div>
            <div>
              <h4 className="font-bold text-sm text-slate-900 dark:text-white">
                {artikel.author}
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {artikel.authorRole} · PPID Kemenag Kota Mojokerto
              </p>
            </div>
          </div>
        </div>

        {/* Artikel Terkait */}
        <div className="space-y-6 pt-6">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white">
            Artikel & Publikasi Terkait
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {relatedArtikels.map((item) => (
              <div
                key={item.id}
                onClick={() => navigate('detail-artikel', item.slug)}
                className="group bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all cursor-pointer flex flex-col"
              >
                <div className="relative h-36 overflow-hidden bg-slate-100 dark:bg-slate-800">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-4 flex-1 flex flex-col justify-between space-y-2">
                  <h4 className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white line-clamp-2 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-[11px] font-mono text-slate-400">{item.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </section>

    </div>
  );
};
