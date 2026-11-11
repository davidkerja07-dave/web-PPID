import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  LayoutDashboard,
  FileText,
  Wrench,
  Layers,
  BookOpen,
  Settings,
  Image as ImageIcon,
  Search,
  Plus,
  Trash2,
  Edit3,
  CheckCircle,
  Clock,
  ShieldCheck,
  Moon,
  Sun,
  Eye,
  RotateCcw,
  Save,
  Palette,
  ExternalLink,
  MessageSquare,
  Sparkles,
  Users
} from 'lucide-react';
import { LayananItem, ProjectItem, ArtikelItem, RegulasiItem } from '../types';
import { HERO_IMAGE, CNC_IMAGE, LASER_IMAGE, HQ_IMAGE } from '../data/initialData';

type AdminTab =
  | 'overview'
  | 'permohonan'
  | 'layanan'
  | 'project'
  | 'artikel'
  | 'regulasi'
  | 'hero_profil'
  | 'media'
  | 'seo'
  | 'settings';

export const AdminDashboard: React.FC = () => {
  const {
    isDarkMode,
    toggleDarkMode,
    navigate,
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
    permohonanList,
    updatePermohonanStatus,
    siteSettings,
    updateSiteSettings,
    resetToDefaultData
  } = useApp();

  const [activeTab, setActiveTab] = useState<AdminTab>('overview');
  const [successToast, setSuccessToast] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setSuccessToast(msg);
    setTimeout(() => setSuccessToast(null), 3000);
  };

  // State for Service Modal Editor
  const [editingLayanan, setEditingLayanan] = useState<LayananItem | null>(null);
  const [isLayananModalOpen, setIsLayananModalOpen] = useState(false);

  // State for Project Modal Editor
  const [editingProject, setEditingProject] = useState<ProjectItem | null>(null);
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);

  // State for Article Modal Editor
  const [editingArtikel, setEditingArtikel] = useState<ArtikelItem | null>(null);
  const [isArtikelModalOpen, setIsArtikelModalOpen] = useState(false);

  // Settings local edit state
  const [localSettings, setLocalSettings] = useState(siteSettings);

  const handleSaveSettings = (e: React.FormEvent) => {
    e.preventDefault();
    updateSiteSettings(localSettings);
    showToast('Pengaturan portal berhasil disimpan & disinkronkan!');
  };

  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-950 text-slate-800 dark:text-slate-100 flex flex-col md:flex-row transition-colors">
      
      {/* Toast Notification */}
      {successToast && (
        <div className="fixed top-24 right-6 z-50 p-4 bg-emerald-600 text-white rounded-xl shadow-xl flex items-center gap-2 text-xs font-semibold animate-in fade-in">
          <CheckCircle size={16} />
          <span>{successToast}</span>
        </div>
      )}

      {/* Sidebar Navigation */}
      <aside className="w-full md:w-64 bg-slate-900 text-slate-300 p-4 flex flex-col justify-between shrink-0 border-r border-slate-800">
        <div className="space-y-6">
          
          {/* Admin Header */}
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <div>
              <div className="text-white font-extrabold text-base tracking-tight flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
                <span>Portal Admin PPID</span>
              </div>
              <p className="text-[11px] text-slate-400">Kemenag Kota Mojokerto</p>
            </div>
            <button
              onClick={toggleDarkMode}
              className="p-1.5 rounded-lg bg-slate-800 text-slate-300 hover:text-white"
              title="Ganti Tema"
            >
              {isDarkMode ? <Sun size={15} className="text-amber-400" /> : <Moon size={15} />}
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="space-y-1 text-xs">
            {[
              { id: 'overview', label: 'Ringkasan Dashboard', icon: LayoutDashboard },
              { id: 'permohonan', label: `Kotak Permohonan (${permohonanList.filter(p => p.status === 'Baru').length})`, icon: MessageSquare },
              { id: 'layanan', label: 'Kelola Layanan (CRUD)', icon: Wrench },
              { id: 'project', label: 'Kelola Project (CRUD)', icon: Layers },
              { id: 'artikel', label: 'Kelola Artikel (CRUD)', icon: BookOpen },
              { id: 'regulasi', label: 'Kelola Regulasi (CRUD)', icon: FileText },
              { id: 'hero_profil', label: 'Kelola Profil & Hero', icon: Sparkles },
              { id: 'media', label: 'Media Manager', icon: ImageIcon },
              { id: 'seo', label: 'Pengaturan SEO', icon: Search },
              { id: 'settings', label: 'Pengaturan Warna & Kontak', icon: Settings },
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as AdminTab)}
                  className={`w-full text-left px-3 py-2.5 rounded-xl font-medium transition-colors flex items-center gap-2.5 ${
                    isActive
                      ? 'bg-blue-600 text-white font-semibold shadow-sm'
                      : 'hover:bg-slate-800 text-slate-400 hover:text-white'
                  }`}
                >
                  <Icon size={16} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </nav>

        </div>

        {/* Bottom Actions */}
        <div className="pt-6 border-t border-slate-800 space-y-2 text-xs">
          <button
            onClick={() => navigate('beranda')}
            className="w-full py-2 px-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-center flex items-center justify-center gap-1.5 transition-colors"
          >
            <Eye size={14} />
            <span>Lihat Website Utama</span>
          </button>
          <button
            onClick={() => {
              if (window.confirm('Reset seluruh data ke kondisi awal pabrik / dummy bawaan?')) {
                resetToDefaultData();
                showToast('Data berhasil di-reset ke kondisi awal!');
              }
            }}
            className="w-full py-1.5 px-3 rounded-lg text-slate-500 hover:text-red-400 text-center flex items-center justify-center gap-1.5 transition-colors text-[11px]"
          >
            <RotateCcw size={12} />
            <span>Reset Data Bawaan</span>
          </button>
        </div>
      </aside>

      {/* Main Admin Workspace */}
      <main className="flex-1 p-6 md:p-10 overflow-y-auto space-y-8">
        
        {/* TAB 1: OVERVIEW */}
        {activeTab === 'overview' && (
          <div className="space-y-8 animate-in fade-in">
            <div className="space-y-1">
              <h1 className="text-2xl font-bold">Ringkasan Sistem & Statistik Layanan</h1>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Data real-time portal PPID & fasilitas manufaktur presisi Kemenag Kota Mojokerto
              </p>
            </div>

            {/* Metric KPI Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-5 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-2">
                <span className="text-xs text-slate-500 font-medium">Permohonan Masuk</span>
                <div className="text-2xl font-bold font-mono text-blue-600 dark:text-blue-400">
                  {permohonanList.length} Tiket
                </div>
                <span className="text-[11px] text-amber-500 font-medium">
                  {permohonanList.filter(p => p.status === 'Baru').length} tiket berstatus baru
                </span>
              </div>

              <div className="p-5 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-2">
                <span className="text-xs text-slate-500 font-medium">Layanan Aktif</span>
                <div className="text-2xl font-bold font-mono text-emerald-600 dark:text-emerald-400">
                  {layananList.length} Layanan
                </div>
                <span className="text-[11px] text-slate-400">
                  8+ Manufaktur & Layanan PPID
                </span>
              </div>

              <div className="p-5 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-2">
                <span className="text-xs text-slate-500 font-medium">Project Selesai</span>
                <div className="text-2xl font-bold font-mono text-amber-600 dark:text-amber-400">
                  {projectList.length} Proyek
                </div>
                <span className="text-[11px] text-slate-400">
                  Studi kasus & portofolio publik
                </span>
              </div>

              <div className="p-5 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-2">
                <span className="text-xs text-slate-500 font-medium">Artikel & Warta</span>
                <div className="text-2xl font-bold font-mono text-indigo-600 dark:text-indigo-400">
                  {artikelList.length} Berita
                </div>
                <span className="text-[11px] text-slate-400">
                  Edukasi teknis & informasi mutu
                </span>
              </div>
            </div>

            {/* Recent Submissions Table */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm p-6 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-sm">Permohonan & Pesan Kontak Terbaru</h3>
                <button
                  onClick={() => setActiveTab('permohonan')}
                  className="text-xs text-blue-600 font-medium hover:underline"
                >
                  Lihat Seluruh ({permohonanList.length}) Tiket
                </button>
              </div>

              <div className="divide-y divide-slate-100 dark:divide-slate-800 text-xs">
                {permohonanList.slice(0, 5).map((p) => (
                  <div key={p.id} className="py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-mono font-bold text-blue-600 dark:text-blue-400">{p.ticketNumber}</span>
                        <span className="text-slate-400">·</span>
                        <span className="font-semibold text-slate-800 dark:text-white">{p.fullName}</span>
                        <span className="text-slate-400">({p.company})</span>
                      </div>
                      <p className="text-slate-600 dark:text-slate-400 mt-1">{p.subject}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                        p.status === 'Baru' ? 'bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-400' :
                        p.status === 'Diproses' ? 'bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-400' :
                        'bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400'
                      }`}>
                        {p.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: KOTAK PERMOHONAN */}
        {activeTab === 'permohonan' && (
          <div className="space-y-6 animate-in fade-in">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-xl font-bold">Daftar Permohonan & Pesan Masuk</h1>
                <p className="text-xs text-slate-500">Kelola status tanggapan masyarakat dan calon klien industri</p>
              </div>
            </div>

            <div className="space-y-4">
              {permohonanList.map((p) => (
                <div
                  key={p.id}
                  className="p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-3"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-3 text-xs">
                    <div className="flex items-center gap-2">
                      <span className="font-mono font-bold text-blue-600 dark:text-blue-400">{p.ticketNumber}</span>
                      <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium">
                        {p.type}
                      </span>
                      <span className="text-slate-400 font-mono text-[11px]">{p.createdAt}</span>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <span className="text-slate-400">Status:</span>
                      <select
                        value={p.status}
                        onChange={(e) => updatePermohonanStatus(p.id, e.target.value as any)}
                        className="px-2 py-1 text-xs rounded border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 font-semibold"
                      >
                        <option value="Baru">Baru</option>
                        <option value="Diproses">Diproses</option>
                        <option value="Selesai">Selesai</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1 text-xs">
                    <h3 className="font-bold text-sm text-slate-900 dark:text-white">{p.subject}</h3>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed bg-slate-50 dark:bg-slate-850 p-3 rounded-lg border border-slate-200 dark:border-slate-800">
                      {p.message}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 text-[11px] text-slate-500 font-mono pt-1">
                    <span>Pemohon: {p.fullName}</span>
                    <span>Instansi: {p.company}</span>
                    <span>Email: {p.email}</span>
                    <span>Telp: {p.phone}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: KELOLA LAYANAN (CRUD) */}
        {activeTab === 'layanan' && (
          <div className="space-y-6 animate-in fade-in">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-xl font-bold">Kelola Layanan Manufaktur & PPID</h1>
                <p className="text-xs text-slate-500">Tambah, sunting, atau hapus item layanan di website</p>
              </div>
              <button
                onClick={() => {
                  setEditingLayanan({
                    id: `layanan-${Date.now()}`,
                    slug: `layanan-baru-${Date.now()}`,
                    title: 'Layanan Manufaktur Baru',
                    category: 'Manufaktur',
                    shortDesc: 'Deskripsi ringkas layanan baru.',
                    description: 'Penjelasan lengkap layanan rekayasa presisi.',
                    image: LASER_IMAGE,
                    iconName: 'Wrench',
                    benefits: ['Jaminan mutu ISO', 'Pengerjaan cepat'],
                    specifications: [{ label: 'Toleransi', value: '±0.01 mm' }],
                    faqs: [{ question: 'Berapa lama pengerjaan?', answer: 'Tergantung kuantiti.' }]
                  });
                  setIsLayananModalOpen(true);
                }}
                className="px-4 py-2 bg-blue-700 hover:bg-blue-800 text-white rounded-xl text-xs font-semibold flex items-center gap-1.5 shadow"
              >
                <Plus size={15} />
                <span>Tambah Layanan Baru</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {layananList.map((item) => (
                <div
                  key={item.id}
                  className="p-5 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-3 flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <span className="text-[10px] font-bold text-blue-600 bg-blue-50 dark:bg-blue-950 px-2 py-0.5 rounded">
                      {item.category}
                    </span>
                    <h3 className="font-bold text-sm line-clamp-1">{item.title}</h3>
                    <p className="text-xs text-slate-500 line-clamp-2">{item.shortDesc}</p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
                    <button
                      onClick={() => {
                        setEditingLayanan({ ...item });
                        setIsLayananModalOpen(true);
                      }}
                      className="text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-1"
                    >
                      <Edit3 size={13} />
                      <span>Sunting</span>
                    </button>
                    <button
                      onClick={() => {
                        if (window.confirm(`Hapus layanan "${item.title}"?`)) {
                          deleteLayanan(item.id);
                          showToast('Layanan berhasil dihapus!');
                        }
                      }}
                      className="text-red-500 hover:text-red-700 font-semibold flex items-center gap-1"
                    >
                      <Trash2 size={13} />
                      <span>Hapus</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 4: KELOLA PROJECT (CRUD) */}
        {activeTab === 'project' && (
          <div className="space-y-6 animate-in fade-in">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-xl font-bold">Kelola Portofolio Project</h1>
                <p className="text-xs text-slate-500">Tambah dan kelola studi kasus rekayasa manufaktur</p>
              </div>
              <button
                onClick={() => {
                  setEditingProject({
                    id: `proj-${Date.now()}`,
                    slug: `project-baru-${Date.now()}`,
                    title: 'Proyek Rekayasa Baru',
                    category: 'Fabrikasi',
                    location: 'Kota Mojokerto, Jawa Timur',
                    year: '2026',
                    client: 'PT Mitra Baru',
                    thumbnail: HERO_IMAGE,
                    gallery: [HERO_IMAGE, CNC_IMAGE],
                    description: 'Uraian proyek permesinan baru.',
                    challenge: 'Tantangan spesifik proyek.',
                    solution: 'Solusi teknis yang diterapkan.',
                    technologies: ['CNC Milling', 'Siemens PLC'],
                    results: ['Peningkatan efisiensi 25%']
                  });
                  setIsProjectModalOpen(true);
                }}
                className="px-4 py-2 bg-blue-700 hover:bg-blue-800 text-white rounded-xl text-xs font-semibold flex items-center gap-1.5 shadow"
              >
                <Plus size={15} />
                <span>Tambah Project Baru</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {projectList.map((item) => (
                <div
                  key={item.id}
                  className="p-5 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-3 flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <span className="text-[10px] font-bold text-amber-600 bg-amber-50 dark:bg-amber-950 px-2 py-0.5 rounded">
                      {item.category}
                    </span>
                    <h3 className="font-bold text-sm line-clamp-1">{item.title}</h3>
                    <p className="text-xs text-slate-500">{item.client} · {item.location}</p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
                    <button
                      onClick={() => {
                        setEditingProject({ ...item });
                        setIsProjectModalOpen(true);
                      }}
                      className="text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-1"
                    >
                      <Edit3 size={13} />
                      <span>Sunting</span>
                    </button>
                    <button
                      onClick={() => {
                        if (window.confirm(`Hapus project "${item.title}"?`)) {
                          deleteProject(item.id);
                          showToast('Project berhasil dihapus!');
                        }
                      }}
                      className="text-red-500 hover:text-red-700 font-semibold flex items-center gap-1"
                    >
                      <Trash2 size={13} />
                      <span>Hapus</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 5: KELOLA ARTIKEL (CRUD) */}
        {activeTab === 'artikel' && (
          <div className="space-y-6 animate-in fade-in">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-xl font-bold">Kelola Artikel & Berita Mutu</h1>
                <p className="text-xs text-slate-500">Publikasi edukasi dan informasi resmi PPID</p>
              </div>
              <button
                onClick={() => {
                  setEditingArtikel({
                    id: `art-${Date.now()}`,
                    slug: `artikel-baru-${Date.now()}`,
                    title: 'Judul Artikel Baru',
                    category: 'Teknologi Manufaktur',
                    summary: 'Ringkasan singkat artikel.',
                    content: ['Paragraf pertama isi artikel.', 'Paragraf kedua isi artikel.'],
                    thumbnail: CNC_IMAGE,
                    author: 'Staf Redaksi PPID',
                    authorRole: 'Tim Dokumentasi',
                    date: '10 November 2026',
                    readTime: '4 min baca',
                    tags: ['Manufaktur', 'PPID']
                  });
                  setIsArtikelModalOpen(true);
                }}
                className="px-4 py-2 bg-blue-700 hover:bg-blue-800 text-white rounded-xl text-xs font-semibold flex items-center gap-1.5 shadow"
              >
                <Plus size={15} />
                <span>Tulis Artikel Baru</span>
              </button>
            </div>

            <div className="space-y-3">
              {artikelList.map((art) => (
                <div
                  key={art.id}
                  className="p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex items-center justify-between gap-4 text-xs"
                >
                  <div className="space-y-1">
                    <span className="text-[10px] font-semibold text-blue-600 bg-blue-50 dark:bg-blue-950 px-2 py-0.5 rounded">
                      {art.category}
                    </span>
                    <h3 className="font-bold text-sm text-slate-900 dark:text-white line-clamp-1">{art.title}</h3>
                    <p className="text-slate-400 font-mono text-[11px]">{art.date} · Oleh {art.author}</p>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => {
                        setEditingArtikel({ ...art });
                        setIsArtikelModalOpen(true);
                      }}
                      className="px-3 py-1.5 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 rounded-lg font-medium hover:bg-slate-200"
                    >
                      Sunting
                    </button>
                    <button
                      onClick={() => {
                        if (window.confirm(`Hapus artikel "${art.title}"?`)) {
                          deleteArtikel(art.id);
                          showToast('Artikel berhasil dihapus!');
                        }
                      }}
                      className="px-3 py-1.5 bg-red-50 text-red-600 rounded-lg font-medium hover:bg-red-100"
                    >
                      Hapus
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 6: KELOLA REGULASI (CRUD) */}
        {activeTab === 'regulasi' && (
          <div className="space-y-6 animate-in fade-in">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-xl font-bold">Kelola Dokumen Regulasi & SOP</h1>
                <p className="text-xs text-slate-500">Dokumen payung hukum resmi UU, PP, PMA, dan SOP</p>
              </div>
            </div>

            <div className="space-y-3">
              {regulasiList.map((reg) => (
                <div
                  key={reg.id}
                  className="p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex items-center justify-between gap-4 text-xs"
                >
                  <div className="space-y-1">
                    <span className="font-mono font-bold text-blue-600">{reg.nomor}</span>
                    <h3 className="font-bold text-sm text-slate-900 dark:text-white">{reg.title}</h3>
                    <p className="text-slate-400">{reg.category} · Ukuran {reg.fileSize}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 7: HERO & PROFIL SETTINGS */}
        {activeTab === 'hero_profil' && (
          <div className="space-y-6 animate-in fade-in">
            <div className="space-y-1">
              <h1 className="text-xl font-bold">Kelola Teks Hero Banner & Profil</h1>
              <p className="text-xs text-slate-500">Sesuaikan kata kunci headline, tagline, dan deskripsi publik</p>
            </div>

            <form onSubmit={handleSaveSettings} className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4 text-xs max-w-2xl">
              <div>
                <label className="block font-semibold mb-1">Nama Lembaga Resmi</label>
                <input
                  type="text"
                  value={localSettings.companyName}
                  onChange={(e) => setLocalSettings({ ...localSettings, companyName: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-800 border rounded-lg"
                />
              </div>

              <div>
                <label className="block font-semibold mb-1">Sub Judul / Tagline</label>
                <input
                  type="text"
                  value={localSettings.tagline}
                  onChange={(e) => setLocalSettings({ ...localSettings, tagline: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-800 border rounded-lg"
                />
              </div>

              <button
                type="submit"
                className="px-5 py-2.5 bg-blue-700 hover:bg-blue-800 text-white font-semibold rounded-lg flex items-center gap-1.5 shadow"
              >
                <Save size={14} />
                <span>Simpan Perubahan Teks</span>
              </button>
            </form>
          </div>
        )}

        {/* TAB 8: MEDIA MANAGER */}
        {activeTab === 'media' && (
          <div className="space-y-6 animate-in fade-in">
            <div className="space-y-1">
              <h1 className="text-xl font-bold">Media Manager & Library Aset</h1>
              <p className="text-xs text-slate-500">Aset gambar industrial beresolusi tinggi yang tersimpan lokal</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { title: 'Hero Industrial Facility', src: HERO_IMAGE, aspect: '16:9' },
                { title: 'CNC 5-Axis Precision', src: CNC_IMAGE, aspect: '4:3' },
                { title: 'Laser Cutting 12kW', src: LASER_IMAGE, aspect: '4:3' },
                { title: 'HQ Gedung PPID Kemenag', src: HQ_IMAGE, aspect: '16:9' }
              ].map((m, idx) => (
                <div key={idx} className="bg-white dark:bg-slate-900 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm p-3 space-y-2">
                  <div className="aspect-[4/3] rounded-lg overflow-hidden bg-slate-800">
                    <img src={m.src} alt={m.title} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs line-clamp-1">{m.title}</h4>
                    <p className="text-[10px] text-slate-400 font-mono">Format: JPG · Ratio: {m.aspect}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 9: PENGATURAN SEO */}
        {activeTab === 'seo' && (
          <div className="space-y-6 animate-in fade-in">
            <div className="space-y-1">
              <h1 className="text-xl font-bold">Pengaturan SEO Global & Meta Data</h1>
              <p className="text-xs text-slate-500">Konfigurasi OpenGraph, Schema.org, dan mesin pencari Google</p>
            </div>

            <form onSubmit={handleSaveSettings} className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4 text-xs max-w-2xl">
              <div>
                <label className="block font-semibold mb-1">Meta Title (Judul Tab Browser)</label>
                <input
                  type="text"
                  value={localSettings.metaTitle}
                  onChange={(e) => setLocalSettings({ ...localSettings, metaTitle: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-800 border rounded-lg"
                />
              </div>

              <div>
                <label className="block font-semibold mb-1">Meta Description (Snippet Pencarian)</label>
                <textarea
                  rows={3}
                  value={localSettings.metaDescription}
                  onChange={(e) => setLocalSettings({ ...localSettings, metaDescription: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-800 border rounded-lg"
                />
              </div>

              <div>
                <label className="block font-semibold mb-1">Meta Keywords</label>
                <input
                  type="text"
                  value={localSettings.metaKeywords}
                  onChange={(e) => setLocalSettings({ ...localSettings, metaKeywords: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-800 border rounded-lg"
                />
              </div>

              <button
                type="submit"
                className="px-5 py-2.5 bg-blue-700 hover:bg-blue-800 text-white font-semibold rounded-lg flex items-center gap-1.5 shadow"
              >
                <Save size={14} />
                <span>Simpan Pengaturan SEO</span>
              </button>
            </form>
          </div>
        )}

        {/* TAB 10: PENGATURAN KONTAK & TEMA */}
        {activeTab === 'settings' && (
          <div className="space-y-6 animate-in fade-in">
            <div className="space-y-1">
              <h1 className="text-xl font-bold">Pengaturan Warna, Logo & Kontak</h1>
              <p className="text-xs text-slate-500">Identitas kantor, nomor telepon, dan jam layanan</p>
            </div>

            <form onSubmit={handleSaveSettings} className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4 text-xs max-w-2xl">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-semibold mb-1">Nomor Telepon Kantor</label>
                  <input
                    type="text"
                    value={localSettings.phone}
                    onChange={(e) => setLocalSettings({ ...localSettings, phone: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-800 border rounded-lg font-mono"
                  />
                </div>
                <div>
                  <label className="block font-semibold mb-1">WhatsApp Customer Service</label>
                  <input
                    type="text"
                    value={localSettings.whatsapp}
                    onChange={(e) => setLocalSettings({ ...localSettings, whatsapp: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-800 border rounded-lg font-mono"
                  />
                </div>
              </div>

              <div>
                <label className="block font-semibold mb-1">Email Resmi</label>
                <input
                  type="email"
                  value={localSettings.email}
                  onChange={(e) => setLocalSettings({ ...localSettings, email: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-800 border rounded-lg"
                />
              </div>

              <div>
                <label className="block font-semibold mb-1">Alamat Kantor</label>
                <input
                  type="text"
                  value={localSettings.address}
                  onChange={(e) => setLocalSettings({ ...localSettings, address: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-800 border rounded-lg"
                />
              </div>

              <div>
                <label className="block font-semibold mb-1">Jam Operasional Pelayanan</label>
                <input
                  type="text"
                  value={localSettings.operationalHours}
                  onChange={(e) => setLocalSettings({ ...localSettings, operationalHours: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-800 border rounded-lg font-mono"
                />
              </div>

              <button
                type="submit"
                className="px-5 py-2.5 bg-blue-700 hover:bg-blue-800 text-white font-semibold rounded-lg flex items-center gap-1.5 shadow"
              >
                <Save size={14} />
                <span>Simpan Pengaturan Kontak</span>
              </button>
            </form>
          </div>
        )}

      </main>

      {/* MODAL EDITOR: LAYANAN */}
      {isLayananModalOpen && editingLayanan && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-900 rounded-2xl max-w-lg w-full p-6 border border-slate-200 dark:border-slate-800 space-y-4 max-h-[90vh] overflow-y-auto text-xs">
            <h3 className="font-bold text-base">Sunting / Tambah Layanan</h3>
            <div>
              <label className="block font-semibold mb-1">Nama Layanan</label>
              <input
                type="text"
                value={editingLayanan.title}
                onChange={(e) => setEditingLayanan({ ...editingLayanan, title: e.target.value })}
                className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-800 border rounded-lg text-xs"
              />
            </div>
            <div>
              <label className="block font-semibold mb-1">Kategori</label>
              <select
                value={editingLayanan.category}
                onChange={(e) => setEditingLayanan({ ...editingLayanan, category: e.target.value as any })}
                className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-800 border rounded-lg text-xs"
              >
                <option value="Manufaktur">Manufaktur</option>
                <option value="Presisi">Presisi</option>
                <option value="Otomasi">Otomasi</option>
                <option value="Layanan PPID">Layanan PPID</option>
              </select>
            </div>
            <div>
              <label className="block font-semibold mb-1">Deskripsi Singkat</label>
              <textarea
                rows={2}
                value={editingLayanan.shortDesc}
                onChange={(e) => setEditingLayanan({ ...editingLayanan, shortDesc: e.target.value })}
                className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-800 border rounded-lg text-xs"
              />
            </div>
            <div>
              <label className="block font-semibold mb-1">Deskripsi Lengkap</label>
              <textarea
                rows={4}
                value={editingLayanan.description}
                onChange={(e) => setEditingLayanan({ ...editingLayanan, description: e.target.value })}
                className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-800 border rounded-lg text-xs"
              />
            </div>

            <div className="flex justify-end gap-2 pt-2">
              <button
                type="button"
                onClick={() => setIsLayananModalOpen(false)}
                className="px-3 py-1.5 rounded-lg text-slate-500"
              >
                Batal
              </button>
              <button
                type="button"
                onClick={() => {
                  const exists = layananList.some(l => l.id === editingLayanan.id);
                  if (exists) {
                    updateLayanan(editingLayanan);
                    showToast('Layanan berhasil diperbarui!');
                  } else {
                    addLayanan(editingLayanan);
                    showToast('Layanan baru berhasil ditambahkan!');
                  }
                  setIsLayananModalOpen(false);
                }}
                className="px-4 py-2 bg-blue-700 text-white rounded-lg font-semibold"
              >
                Simpan
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL EDITOR: PROJECT */}
      {isProjectModalOpen && editingProject && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-900 rounded-2xl max-w-lg w-full p-6 border border-slate-200 dark:border-slate-800 space-y-4 max-h-[90vh] overflow-y-auto text-xs">
            <h3 className="font-bold text-base">Sunting / Tambah Project</h3>
            <div>
              <label className="block font-semibold mb-1">Judul Project</label>
              <input
                type="text"
                value={editingProject.title}
                onChange={(e) => setEditingProject({ ...editingProject, title: e.target.value })}
                className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-800 border rounded-lg text-xs"
              />
            </div>
            <div>
              <label className="block font-semibold mb-1">Kategori</label>
              <select
                value={editingProject.category}
                onChange={(e) => setEditingProject({ ...editingProject, category: e.target.value as any })}
                className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-800 border rounded-lg text-xs"
              >
                <option value="Fabrikasi">Fabrikasi</option>
                <option value="Otomasi Pabrik">Otomasi Pabrik</option>
                <option value="Mesin Khusus">Mesin Khusus</option>
                <option value="Komponen Presisi">Komponen Presisi</option>
              </select>
            </div>
            <div>
              <label className="block font-semibold mb-1">Klien</label>
              <input
                type="text"
                value={editingProject.client}
                onChange={(e) => setEditingProject({ ...editingProject, client: e.target.value })}
                className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-800 border rounded-lg text-xs"
              />
            </div>
            <div>
              <label className="block font-semibold mb-1">Lokasi</label>
              <input
                type="text"
                value={editingProject.location}
                onChange={(e) => setEditingProject({ ...editingProject, location: e.target.value })}
                className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-800 border rounded-lg text-xs"
              />
            </div>

            <div className="flex justify-end gap-2 pt-2">
              <button
                type="button"
                onClick={() => setIsProjectModalOpen(false)}
                className="px-3 py-1.5 rounded-lg text-slate-500"
              >
                Batal
              </button>
              <button
                type="button"
                onClick={() => {
                  const exists = projectList.some(p => p.id === editingProject.id);
                  if (exists) {
                    updateProject(editingProject);
                    showToast('Project berhasil diperbarui!');
                  } else {
                    addProject(editingProject);
                    showToast('Project baru berhasil ditambahkan!');
                  }
                  setIsProjectModalOpen(false);
                }}
                className="px-4 py-2 bg-blue-700 text-white rounded-lg font-semibold"
              >
                Simpan
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL EDITOR: ARTIKEL */}
      {isArtikelModalOpen && editingArtikel && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-900 rounded-2xl max-w-lg w-full p-6 border border-slate-200 dark:border-slate-800 space-y-4 max-h-[90vh] overflow-y-auto text-xs">
            <h3 className="font-bold text-base">Sunting / Tulis Artikel</h3>
            <div>
              <label className="block font-semibold mb-1">Judul Artikel</label>
              <input
                type="text"
                value={editingArtikel.title}
                onChange={(e) => setEditingArtikel({ ...editingArtikel, title: e.target.value })}
                className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-800 border rounded-lg text-xs"
              />
            </div>
            <div>
              <label className="block font-semibold mb-1">Ringkasan</label>
              <textarea
                rows={2}
                value={editingArtikel.summary}
                onChange={(e) => setEditingArtikel({ ...editingArtikel, summary: e.target.value })}
                className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-800 border rounded-lg text-xs"
              />
            </div>
            <div>
              <label className="block font-semibold mb-1">Penulis</label>
              <input
                type="text"
                value={editingArtikel.author}
                onChange={(e) => setEditingArtikel({ ...editingArtikel, author: e.target.value })}
                className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-800 border rounded-lg text-xs"
              />
            </div>

            <div className="flex justify-end gap-2 pt-2">
              <button
                type="button"
                onClick={() => setIsArtikelModalOpen(false)}
                className="px-3 py-1.5 rounded-lg text-slate-500"
              >
                Batal
              </button>
              <button
                type="button"
                onClick={() => {
                  const exists = artikelList.some(a => a.id === editingArtikel.id);
                  if (exists) {
                    updateArtikel(editingArtikel);
                    showToast('Artikel berhasil diperbarui!');
                  } else {
                    addArtikel(editingArtikel);
                    showToast('Artikel baru berhasil diterbitkan!');
                  }
                  setIsArtikelModalOpen(false);
                }}
                className="px-4 py-2 bg-blue-700 text-white rounded-lg font-semibold"
              >
                Simpan
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
