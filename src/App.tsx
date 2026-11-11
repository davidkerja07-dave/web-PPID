import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { PermohonanModal } from './components/modals/PermohonanModal';
import { DocPreviewModal } from './components/modals/DocPreviewModal';

// Pages
import { HomePage } from './pages/HomePage';
import { ProfilPage } from './pages/ProfilPage';
import { RegulasiPage } from './pages/RegulasiPage';
import { LayananPage } from './pages/LayananPage';
import { DetailLayananPage } from './pages/DetailLayananPage';
import { InformasiPublikPage } from './pages/InformasiPublikPage';
import { DaftarInformasiPage } from './pages/DaftarInformasiPage';
import { StandarLayananPage } from './pages/StandarLayananPage';
import { ProjectPage } from './pages/ProjectPage';
import { DetailProjectPage } from './pages/DetailProjectPage';
import { ArtikelPage } from './pages/ArtikelPage';
import { DetailArtikelPage } from './pages/DetailArtikelPage';
import { KontakPage } from './pages/KontakPage';
import { AdminDashboard } from './pages/AdminDashboard';

const AppContent: React.FC = () => {
  const { currentRoute } = useApp();

  if (currentRoute === 'admin') {
    return (
      <div className="min-h-screen bg-slate-100 dark:bg-slate-950 text-slate-900 dark:text-slate-100">
        <AdminDashboard />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-200">
      <Navbar />

      <main className="flex-1">
        {currentRoute === 'beranda' && <HomePage />}
        {currentRoute === 'profil' && <ProfilPage />}
        {currentRoute === 'regulasi' && <RegulasiPage />}
        {currentRoute === 'layanan' && <LayananPage />}
        {currentRoute === 'detail-layanan' && <DetailLayananPage />}
        {currentRoute === 'informasi-publik' && <InformasiPublikPage />}
        {currentRoute === 'daftar-informasi' && <DaftarInformasiPage />}
        {currentRoute === 'standar-layanan' && <StandarLayananPage />}
        {currentRoute === 'project' && <ProjectPage />}
        {currentRoute === 'detail-project' && <DetailProjectPage />}
        {currentRoute === 'artikel' && <ArtikelPage />}
        {currentRoute === 'detail-artikel' && <DetailArtikelPage />}
        {currentRoute === 'kontak' && <KontakPage />}
      </main>

      <Footer />

      {/* Global Interactive Modals */}
      <PermohonanModal />
      <DocPreviewModal />
    </div>
  );
};

export default function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}
