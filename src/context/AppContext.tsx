import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  PageRoute,
  LayananItem,
  ProjectItem,
  ArtikelItem,
  RegulasiItem,
  InformasiPublikItem,
  TestimoniItem,
  ClientItem,
  TeamMember,
  SiteSettings,
  PermohonanMessage
} from '../types';
import {
  initialSiteSettings,
  initialLayananList,
  initialProjectList,
  initialArtikelList,
  initialRegulasiList,
  initialInformasiPublikList,
  initialTestimoniList,
  initialClientList,
  initialTeamList,
  initialPermohonanList
} from '../data/initialData';

interface AppContextType {
  currentRoute: PageRoute;
  selectedLayananSlug: string | null;
  selectedProjectSlug: string | null;
  selectedArtikelSlug: string | null;
  isDarkMode: boolean;
  setIsDarkMode: (val: boolean) => void;
  toggleDarkMode: () => void;
  navigate: (route: PageRoute, slug?: string) => void;

  siteSettings: SiteSettings;
  updateSiteSettings: (settings: Partial<SiteSettings>) => void;

  layananList: LayananItem[];
  addLayanan: (item: LayananItem) => void;
  updateLayanan: (item: LayananItem) => void;
  deleteLayanan: (id: string) => void;

  projectList: ProjectItem[];
  addProject: (item: ProjectItem) => void;
  updateProject: (item: ProjectItem) => void;
  deleteProject: (id: string) => void;

  artikelList: ArtikelItem[];
  addArtikel: (item: ArtikelItem) => void;
  updateArtikel: (item: ArtikelItem) => void;
  deleteArtikel: (id: string) => void;

  regulasiList: RegulasiItem[];
  addRegulasi: (item: RegulasiItem) => void;
  updateRegulasi: (item: RegulasiItem) => void;
  deleteRegulasi: (id: string) => void;

  informasiPublikList: InformasiPublikItem[];
  testimoniList: TestimoniItem[];
  clientList: ClientItem[];
  teamList: TeamMember[];

  permohonanList: PermohonanMessage[];
  addPermohonan: (msg: Omit<PermohonanMessage, 'id' | 'ticketNumber' | 'status' | 'createdAt'>) => string;
  updatePermohonanStatus: (id: string, status: PermohonanMessage['status']) => void;

  resetToDefaultData: () => void;

  // Global Interactive Modals
  isPermohonanModalOpen: boolean;
  openPermohonanModal: (presetType?: PermohonanMessage['type']) => void;
  closePermohonanModal: () => void;
  presetPermohonanType: PermohonanMessage['type'];

  activeDocModal: { title: string; nomor?: string; type?: string; size?: string; date?: string } | null;
  openDocModal: (doc: { title: string; nomor?: string; type?: string; size?: string; date?: string }) => void;
  closeDocModal: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Navigation State
  const [currentRoute, setCurrentRoute] = useState<PageRoute>('beranda');
  const [selectedLayananSlug, setSelectedLayananSlug] = useState<string | null>(null);
  const [selectedProjectSlug, setSelectedProjectSlug] = useState<string | null>(null);
  const [selectedArtikelSlug, setSelectedArtikelSlug] = useState<string | null>(null);

  // Theme State
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    try {
      const saved = localStorage.getItem('ppid_theme');
      return saved === 'dark';
    } catch {
      return false;
    }
  });

  useEffect(() => {
    try {
      if (isDarkMode) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('ppid_theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('ppid_theme', 'light');
      }
    } catch (e) {
      console.error(e);
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode(prev => !prev);

  // Persistent Collections with localStorage fallback
  const [siteSettings, setSiteSettings] = useState<SiteSettings>(() => {
    try {
      const saved = localStorage.getItem('ppid_settings');
      return saved ? JSON.parse(saved) : initialSiteSettings;
    } catch {
      return initialSiteSettings;
    }
  });

  const [layananList, setLayananList] = useState<LayananItem[]>(() => {
    try {
      const saved = localStorage.getItem('ppid_layanan');
      return saved ? JSON.parse(saved) : initialLayananList;
    } catch {
      return initialLayananList;
    }
  });

  const [projectList, setProjectList] = useState<ProjectItem[]>(() => {
    try {
      const saved = localStorage.getItem('ppid_projects');
      return saved ? JSON.parse(saved) : initialProjectList;
    } catch {
      return initialProjectList;
    }
  });

  const [artikelList, setArtikelList] = useState<ArtikelItem[]>(() => {
    try {
      const saved = localStorage.getItem('ppid_artikel');
      return saved ? JSON.parse(saved) : initialArtikelList;
    } catch {
      return initialArtikelList;
    }
  });

  const [regulasiList, setRegulasiList] = useState<RegulasiItem[]>(() => {
    try {
      const saved = localStorage.getItem('ppid_regulasi');
      return saved ? JSON.parse(saved) : initialRegulasiList;
    } catch {
      return initialRegulasiList;
    }
  });

  const [informasiPublikList] = useState<InformasiPublikItem[]>(initialInformasiPublikList);
  const [testimoniList] = useState<TestimoniItem[]>(initialTestimoniList);
  const [clientList] = useState<ClientItem[]>(initialClientList);
  const [teamList] = useState<TeamMember[]>(initialTeamList);

  const [permohonanList, setPermohonanList] = useState<PermohonanMessage[]>(() => {
    try {
      const saved = localStorage.getItem('ppid_permohonan');
      return saved ? JSON.parse(saved) : initialPermohonanList;
    } catch {
      return initialPermohonanList;
    }
  });

  // Sync back to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('ppid_settings', JSON.stringify(siteSettings));
    } catch (e) { console.error(e); }
  }, [siteSettings]);

  useEffect(() => {
    try {
      localStorage.setItem('ppid_layanan', JSON.stringify(layananList));
    } catch (e) { console.error(e); }
  }, [layananList]);

  useEffect(() => {
    try {
      localStorage.setItem('ppid_projects', JSON.stringify(projectList));
    } catch (e) { console.error(e); }
  }, [projectList]);

  useEffect(() => {
    try {
      localStorage.setItem('ppid_artikel', JSON.stringify(artikelList));
    } catch (e) { console.error(e); }
  }, [artikelList]);

  useEffect(() => {
    try {
      localStorage.setItem('ppid_regulasi', JSON.stringify(regulasiList));
    } catch (e) { console.error(e); }
  }, [regulasiList]);

  useEffect(() => {
    try {
      localStorage.setItem('ppid_permohonan', JSON.stringify(permohonanList));
    } catch (e) { console.error(e); }
  }, [permohonanList]);

  // Modals state
  const [isPermohonanModalOpen, setIsPermohonanModalOpen] = useState(false);
  const [presetPermohonanType, setPresetPermohonanType] = useState<PermohonanMessage['type']>('Informasi Publik');
  const [activeDocModal, setActiveDocModal] = useState<{ title: string; nomor?: string; type?: string; size?: string; date?: string } | null>(null);

  const openPermohonanModal = (presetType: PermohonanMessage['type'] = 'Informasi Publik') => {
    setPresetPermohonanType(presetType);
    setIsPermohonanModalOpen(true);
  };
  const closePermohonanModal = () => setIsPermohonanModalOpen(false);

  const openDocModal = (doc: { title: string; nomor?: string; type?: string; size?: string; date?: string }) => {
    setActiveDocModal(doc);
  };
  const closeDocModal = () => setActiveDocModal(null);

  // Navigation handler
  const navigate = (route: PageRoute, slug?: string) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (route === 'detail-layanan' && slug) {
      setSelectedLayananSlug(slug);
    } else if (route === 'detail-project' && slug) {
      setSelectedProjectSlug(slug);
    } else if (route === 'detail-artikel' && slug) {
      setSelectedArtikelSlug(slug);
    }
    setCurrentRoute(route);
  };

  // CRUD actions
  const updateSiteSettings = (settings: Partial<SiteSettings>) => {
    setSiteSettings(prev => ({ ...prev, ...settings }));
  };

  const addLayanan = (item: LayananItem) => {
    setLayananList(prev => [item, ...prev]);
  };
  const updateLayanan = (item: LayananItem) => {
    setLayananList(prev => prev.map(l => l.id === item.id ? item : l));
  };
  const deleteLayanan = (id: string) => {
    setLayananList(prev => prev.filter(l => l.id !== id));
  };

  const addProject = (item: ProjectItem) => {
    setProjectList(prev => [item, ...prev]);
  };
  const updateProject = (item: ProjectItem) => {
    setProjectList(prev => prev.map(p => p.id === item.id ? item : p));
  };
  const deleteProject = (id: string) => {
    setProjectList(prev => prev.filter(p => p.id !== id));
  };

  const addArtikel = (item: ArtikelItem) => {
    setArtikelList(prev => [item, ...prev]);
  };
  const updateArtikel = (item: ArtikelItem) => {
    setArtikelList(prev => prev.map(a => a.id === item.id ? item : a));
  };
  const deleteArtikel = (id: string) => {
    setArtikelList(prev => prev.filter(a => a.id !== id));
  };

  const addRegulasi = (item: RegulasiItem) => {
    setRegulasiList(prev => [item, ...prev]);
  };
  const updateRegulasi = (item: RegulasiItem) => {
    setRegulasiList(prev => prev.map(r => r.id === item.id ? item : r));
  };
  const deleteRegulasi = (id: string) => {
    setRegulasiList(prev => prev.filter(r => r.id !== id));
  };

  const addPermohonan = (msg: Omit<PermohonanMessage, 'id' | 'ticketNumber' | 'status' | 'createdAt'>): string => {
    const randomSeq = Math.floor(1000 + Math.random() * 9000);
    const ticketNumber = `PPID-MJK-2026-${randomSeq}`;
    const newEntry: PermohonanMessage = {
      ...msg,
      id: `perm-${Date.now()}`,
      ticketNumber,
      status: 'Baru',
      createdAt: new Date().toLocaleDateString('id-ID', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      }) + ' WIB'
    };
    setPermohonanList(prev => [newEntry, ...prev]);
    return ticketNumber;
  };

  const updatePermohonanStatus = (id: string, status: PermohonanMessage['status']) => {
    setPermohonanList(prev => prev.map(p => p.id === id ? { ...p, status } : p));
  };

  const resetToDefaultData = () => {
    try {
      localStorage.removeItem('ppid_settings');
      localStorage.removeItem('ppid_layanan');
      localStorage.removeItem('ppid_projects');
      localStorage.removeItem('ppid_artikel');
      localStorage.removeItem('ppid_regulasi');
      localStorage.removeItem('ppid_permohonan');
    } catch (e) {
      console.error(e);
    }
    setSiteSettings(initialSiteSettings);
    setLayananList(initialLayananList);
    setProjectList(initialProjectList);
    setArtikelList(initialArtikelList);
    setRegulasiList(initialRegulasiList);
    setPermohonanList(initialPermohonanList);
  };

  return (
    <AppContext.Provider
      value={{
        currentRoute,
        selectedLayananSlug,
        selectedProjectSlug,
        selectedArtikelSlug,
        isDarkMode,
        setIsDarkMode,
        toggleDarkMode,
        navigate,

        siteSettings,
        updateSiteSettings,

        layananList,
        addLayanan,
        updateLayanan,
        deleteLayanan,

        projectList,
        addProject,
        updateProject,
        deleteProject,

        artikelList,
        addArtikel,
        updateArtikel,
        deleteArtikel,

        regulasiList,
        addRegulasi,
        updateRegulasi,
        deleteRegulasi,

        informasiPublikList,
        testimoniList,
        clientList,
        teamList,

        permohonanList,
        addPermohonan,
        updatePermohonanStatus,

        resetToDefaultData,

        isPermohonanModalOpen,
        openPermohonanModal,
        closePermohonanModal,
        presetPermohonanType,

        activeDocModal,
        openDocModal,
        closeDocModal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
