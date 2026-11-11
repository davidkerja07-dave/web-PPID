import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { KemenagLogo } from '../common/KemenagLogo';
import { PageRoute } from '../../types';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  FileText
} from 'lucide-react';

export const Footer: React.FC = () => {
  const { navigate, siteSettings, layananList } = useApp();
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setNewsletterSubscribed(true);
      setNewsletterEmail('');
      setTimeout(() => setNewsletterSubscribed(false), 5000);
    }
  };

  const navLinks: { label: string; route: PageRoute }[] = [
    { label: 'Beranda Utama', route: 'beranda' },
    { label: 'Profil & Visi Misi', route: 'profil' },
    { label: 'Regulasi Keterbukaan', route: 'regulasi' },
    { label: 'Layanan Informasi Publik', route: 'informasi-publik' },
    { label: 'Daftar Informasi (DIP)', route: 'daftar-informasi' },
    { label: 'Standar Layanan & SOP', route: 'standar-layanan' },
    { label: 'Galeri Project Manufaktur', route: 'project' },
    { label: 'Artikel & Publikasi', route: 'artikel' },
    { label: 'Kontak & Konsultasi', route: 'kontak' },
  ];

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-800">
          
          {/* Col 1: Brand & Profile (lg:col-span-4) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <KemenagLogo size={48} />
              <div>
                <h3 className="font-extrabold text-white text-lg tracking-tight">
                  PPID Kemenag Kota Mojokerto
                </h3>
                <p className="text-xs text-slate-400 font-medium">
                  Manufaktur Presisi & Keterbukaan Informasi
                </p>
              </div>
            </div>

            <p className="text-xs leading-relaxed text-slate-400">
              Unit layanan terpadu Pejabat Pengelola Informasi dan Dokumentasi (PPID) Kementerian Agama Kota Mojokerto yang mengintegrasikan akuntabilitas transparansi publik dengan rekayasa manufaktur presisi, fabrikasi logam, dan otomasi industri modern.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <div className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-[11px] font-mono text-emerald-400 flex items-center gap-1.5">
                <ShieldCheck size={13} />
                <span>ISO 9001:2015 Certified</span>
              </div>
              <div className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-[11px] font-mono text-blue-400 flex items-center gap-1.5">
                <FileText size={13} />
                <span>UU KIP No. 14/2008</span>
              </div>
            </div>

            {/* Newsletter Subscription */}
            <div className="pt-3">
              <p className="text-xs font-semibold text-white mb-2">
                Berlangganan Warta Mutu & Buletin Informasi
              </p>
              {newsletterSubscribed ? (
                <div className="p-2.5 bg-emerald-950/60 border border-emerald-800 rounded-lg text-emerald-300 text-xs flex items-center gap-2">
                  <CheckCircle2 size={15} />
                  <span>Terima kasih! Email Anda telah terdaftar.</span>
                </div>
              ) : (
                <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
                  <input
                    type="email"
                    required
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Masukkan alamat email Anda"
                    className="flex-1 px-3 py-2 text-xs bg-slate-900 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                  />
                  <button
                    type="submit"
                    className="px-3 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-xs font-medium transition-colors flex items-center gap-1 shrink-0"
                    title="Daftar newsletter"
                  >
                    <span>Kirim</span>
                    <Send size={12} />
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Col 2: Navigation Links (lg:col-span-2) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Struktur Menu
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-400">
              {navLinks.slice(0, 7).map((item) => (
                <li key={item.route}>
                  <button
                    onClick={() => navigate(item.route)}
                    className="hover:text-blue-400 transition-colors text-left"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Layanan Manufaktur (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Layanan Unggulan
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-400">
              {layananList.slice(0, 7).map((layanan) => (
                <li key={layanan.id}>
                  <button
                    onClick={() => navigate('detail-layanan', layanan.slug)}
                    className="hover:text-blue-400 transition-colors text-left line-clamp-1"
                  >
                    {layanan.title}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => navigate('layanan')}
                  className="text-amber-400 hover:text-amber-300 font-medium inline-flex items-center gap-1"
                >
                  <span>Lihat Seluruh Layanan</span>
                  <ExternalLink size={10} />
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Kontak & Maps Preview (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Kantor & Lokasi
            </h4>
            
            <div className="space-y-2 text-xs text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin size={14} className="text-amber-400 shrink-0 mt-0.5" />
                <span>{siteSettings.address}, {siteSettings.city}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={14} className="text-blue-400 shrink-0" />
                <span className="font-mono">{siteSettings.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={14} className="text-blue-400 shrink-0" />
                <span className="truncate">{siteSettings.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={14} className="text-emerald-400 shrink-0" />
                <span>{siteSettings.operationalHours}</span>
              </div>
            </div>

            {/* Interactive Mini Map Box */}
            <div className="mt-3 rounded-lg overflow-hidden border border-slate-800 bg-slate-900 p-2 relative group">
              <div className="h-24 w-full bg-slate-800 rounded flex flex-col items-center justify-center text-center p-2 text-slate-400 hover:bg-slate-750 transition-colors">
                <MapPin size={20} className="text-red-500 mb-1 group-hover:scale-110 transition-transform" />
                <span className="text-[11px] font-semibold text-white">Jl. Taman Siswa No. 16</span>
                <span className="text-[10px] text-slate-400">Magersari, Kota Mojokerto, Jawa Timur</span>
              </div>
              <a
                href="https://maps.google.com/?q=Kemenag+Kota+Mojokerto"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 text-[11px] text-blue-400 hover:text-blue-300 font-medium flex items-center justify-center gap-1 w-full"
              >
                <span>Buka di Google Maps</span>
                <ExternalLink size={11} />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Social Links */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} PPID Kantor Kementerian Agama Kota Mojokerto. Hak Cipta Dilindungi Undang-Undang.
          </p>
          <div className="flex items-center gap-6">
            <button onClick={() => navigate('regulasi')} className="hover:text-slate-300 transition-colors">
              Dasar Hukum
            </button>
            <button onClick={() => navigate('standar-layanan')} className="hover:text-slate-300 transition-colors">
              Maklumat Pelayanan
            </button>
            <button onClick={() => navigate('kontak')} className="hover:text-slate-300 transition-colors">
              Peta Lokasi
            </button>
            <button onClick={() => navigate('admin')} className="hover:text-amber-400 transition-colors font-mono">
              Portal Admin
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
