import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { KemenagLogo } from '../common/KemenagLogo';
import { PageRoute } from '../../types';
import {
  Menu,
  X,
  Moon,
  Sun,
  ShieldCheck,
  ChevronDown,
  PhoneCall,
  FileCheck2,
  Lock,
  ArrowRight
} from 'lucide-react';

export const Navbar: React.FC = () => {
  const {
    currentRoute,
    navigate,
    isDarkMode,
    toggleDarkMode,
    openPermohonanModal,
    siteSettings
  } = useApp();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const navItems: { label: string; route: PageRoute }[] = [
    { label: 'Beranda', route: 'beranda' },
    { label: 'Profil', route: 'profil' },
    { label: 'Regulasi', route: 'regulasi' },
    { label: 'Layanan Informasi', route: 'layanan' },
    { label: 'Informasi Publik', route: 'informasi-publik' },
    { label: 'Daftar Informasi', route: 'daftar-informasi' },
    { label: 'Standar Layanan', route: 'standar-layanan' },
    { label: 'Project', route: 'project' },
    { label: 'Artikel', route: 'artikel' },
    { label: 'Kontak', route: 'kontak' },
  ];

  const handleNavClick = (route: PageRoute) => {
    navigate(route);
    setIsMobileMenuOpen(false);
    setIsDropdownOpen(false);
  };

  return (
    <>
      {/* Top Notification Strip / Government Trust Bar */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4 sm:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400"></span>
            <span className="font-medium text-white">Portal Resmi PPID Kemenag Kota Mojokerto</span>
            <span className="hidden md:inline text-slate-500">|</span>
            <span className="hidden md:inline text-slate-400">Layanan Informasi & Presisi Manufaktur</span>
          </div>
          <div className="flex items-center gap-4 text-slate-300">
            <span className="hidden sm:inline font-mono">{siteSettings.operationalHours}</span>
            <span className="hidden sm:inline text-slate-600">·</span>
            <a
              href={`tel:${siteSettings.phone.replace(/[^0-9]/g, '')}`}
              className="hover:text-amber-400 transition-colors flex items-center gap-1 font-mono"
            >
              <PhoneCall size={12} className="text-amber-400" />
              <span>{siteSettings.phone}</span>
            </a>
            <span className="text-slate-600">·</span>
            <button
              onClick={() => handleNavClick('admin')}
              className={`hover:text-blue-400 transition-colors flex items-center gap-1 font-medium ${
                currentRoute === 'admin' ? 'text-amber-400 font-semibold' : 'text-slate-300'
              }`}
              title="Akses Dashboard Pengelola PPID"
            >
              <Lock size={12} />
              <span>Portal Admin</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Top Bar */}
      <header className="sticky top-0 z-40 bg-white/95 dark:bg-slate-950/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors duration-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-6">
          
          {/* Brand Zone: Authentic Kemenag Logo + Clean Title */}
          <button
            onClick={() => handleNavClick('beranda')}
            className="flex items-center gap-3 text-left group shrink-0 focus:outline-none"
          >
            <KemenagLogo size={46} className="group-hover:scale-105 transition-transform" />
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-xl tracking-tight text-blue-900 dark:text-blue-400 font-sans">
                  PPID
                </span>
                <span className="font-bold text-lg tracking-tight text-slate-900 dark:text-white">
                  Kemenag Kota Mojokerto
                </span>
              </div>
              <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400 tracking-wide uppercase">
                Precision Manufacturing & Public Information
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1 text-[13px] font-medium text-slate-700 dark:text-slate-200">
            {navItems.slice(0, 5).map(item => {
              const isActive = currentRoute === item.route;
              return (
                <button
                  key={item.route}
                  onClick={() => handleNavClick(item.route)}
                  className={`px-3 py-2 rounded-lg transition-colors whitespace-nowrap ${
                    isActive
                      ? 'bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-400 font-semibold'
                      : 'hover:text-blue-700 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-900'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}

            {/* Dropdown for More PPID & Portfolio Menus */}
            <div className="relative group">
              <button
                onClick={() => setIsDropdownOpen(prev => !prev)}
                className={`px-3 py-2 rounded-lg transition-colors flex items-center gap-1 whitespace-nowrap ${
                  ['daftar-informasi', 'standar-layanan', 'project', 'artikel', 'kontak'].includes(currentRoute)
                    ? 'bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-400 font-semibold'
                    : 'hover:text-blue-700 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-900'
                }`}
              >
                <span>Lainnya</span>
                <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-200" />
              </button>

              <div className="absolute right-0 top-full mt-2 w-56 bg-white dark:bg-slate-900 rounded-xl shadow-xl border border-slate-200 dark:border-slate-800 p-2 hidden group-hover:block transition-all">
                <button
                  onClick={() => handleNavClick('daftar-informasi')}
                  className={`w-full text-left px-3 py-2 text-xs rounded-lg transition-colors flex items-center justify-between ${
                    currentRoute === 'daftar-informasi'
                      ? 'bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 font-semibold'
                      : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                >
                  <span>Daftar Informasi (DIP)</span>
                  <FileCheck2 size={13} className="text-slate-400" />
                </button>
                <button
                  onClick={() => handleNavClick('standar-layanan')}
                  className={`w-full text-left px-3 py-2 text-xs rounded-lg transition-colors flex items-center justify-between ${
                    currentRoute === 'standar-layanan'
                      ? 'bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 font-semibold'
                      : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                >
                  <span>Standar Layanan & Maklumat</span>
                  <ShieldCheck size={13} className="text-slate-400" />
                </button>
                <div className="my-1 border-t border-slate-100 dark:border-slate-800" />
                <button
                  onClick={() => handleNavClick('project')}
                  className={`w-full text-left px-3 py-2 text-xs rounded-lg transition-colors ${
                    currentRoute === 'project'
                      ? 'bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 font-semibold'
                      : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                >
                  Galeri Project Manufaktur
                </button>
                <button
                  onClick={() => handleNavClick('artikel')}
                  className={`w-full text-left px-3 py-2 text-xs rounded-lg transition-colors ${
                    currentRoute === 'artikel'
                      ? 'bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 font-semibold'
                      : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                >
                  Artikel & Berita Mutu
                </button>
                <button
                  onClick={() => handleNavClick('kontak')}
                  className={`w-full text-left px-3 py-2 text-xs rounded-lg transition-colors ${
                    currentRoute === 'kontak'
                      ? 'bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 font-semibold'
                      : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                >
                  Kontak & Lokasi Kantor
                </button>
              </div>
            </div>
          </nav>

          {/* Action Zone: Theme Toggle & Primary Button */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Dark Mode Switcher */}
            <button
              onClick={toggleDarkMode}
              className="p-2.5 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Ganti mode gelap/terang"
              title={isDarkMode ? 'Beralih ke mode terang' : 'Beralih ke mode gelap'}
            >
              {isDarkMode ? <Sun size={18} className="text-amber-400" /> : <Moon size={18} />}
            </button>

            {/* Primary Action Button */}
            <button
              onClick={() => openPermohonanModal('Informasi Publik')}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold text-white bg-blue-700 hover:bg-blue-800 active:scale-95 shadow-md shadow-blue-700/20 transition-all whitespace-nowrap"
            >
              <span>Ajukan Permohonan</span>
              <ArrowRight size={14} />
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setIsMobileMenuOpen(prev => !prev)}
              className="xl:hidden p-2.5 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none"
              aria-label="Buka menu navigasi"
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="xl:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-4 pt-3 pb-6 shadow-xl animate-in fade-in slide-in-from-top duration-200">
            <div className="flex flex-col gap-1">
              {navItems.map(item => {
                const isActive = currentRoute === item.route;
                return (
                  <button
                    key={item.route}
                    onClick={() => handleNavClick(item.route)}
                    className={`text-left px-3.5 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-blue-600 text-white font-semibold'
                        : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
              
              <div className="pt-3 mt-2 border-t border-slate-200 dark:border-slate-800 flex flex-col gap-2">
                <button
                  onClick={() => {
                    handleNavClick('admin');
                  }}
                  className="w-full py-2.5 px-3.5 text-left text-sm rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-medium flex items-center justify-between"
                >
                  <span className="flex items-center gap-2">
                    <Lock size={15} />
                    Portal Admin Dashboard
                  </span>
                  <span className="text-xs text-blue-600 dark:text-blue-400">Masuk &rarr;</span>
                </button>

                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    openPermohonanModal('Informasi Publik');
                  }}
                  className="w-full py-3 rounded-lg text-sm font-semibold text-white bg-blue-700 hover:bg-blue-800 text-center shadow-md shadow-blue-700/20"
                >
                  Ajukan Permohonan Informasi
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
