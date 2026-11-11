export type PageRoute =
  | 'beranda'
  | 'profil'
  | 'regulasi'
  | 'layanan'
  | 'detail-layanan'
  | 'informasi-publik'
  | 'daftar-informasi'
  | 'standar-layanan'
  | 'project'
  | 'detail-project'
  | 'artikel'
  | 'detail-artikel'
  | 'kontak'
  | 'admin';

export interface LayananItem {
  id: string;
  slug: string;
  title: string;
  category: 'Manufaktur' | 'Presisi' | 'Otomasi' | 'Layanan PPID';
  shortDesc: string;
  description: string;
  image: string;
  iconName: string;
  benefits: string[];
  specifications: { label: string; value: string }[];
  faqs: { question: string; answer: string }[];
  featured?: boolean;
}

export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  category: 'Fabrikasi' | 'Otomasi Pabrik' | 'Mesin Khusus' | 'Komponen Presisi';
  location: string;
  year: string;
  client: string;
  thumbnail: string;
  gallery: string[];
  description: string;
  challenge: string;
  solution: string;
  technologies: string[];
  results: string[];
  featured?: boolean;
}

export interface ArtikelItem {
  id: string;
  slug: string;
  title: string;
  category: 'Teknologi Manufaktur' | 'Keterbukaan Informasi' | 'Otomasi Industri' | 'Standar Mutu';
  summary: string;
  content: string[];
  thumbnail: string;
  author: string;
  authorRole: string;
  date: string;
  readTime: string;
  tags: string[];
  views?: number;
  featured?: boolean;
}

export interface RegulasiItem {
  id: string;
  nomor: string;
  title: string;
  category: 'Undang-Undang' | 'Peraturan Pemerintah' | 'Peraturan Menteri' | 'SOP Teknis';
  year: string;
  dateIssued: string;
  description: string;
  fileSize: string;
  downloadUrl?: string;
}

export interface InformasiPublikItem {
  id: string;
  title: string;
  type: 'Berkala' | 'Serta Merta' | 'Setiap Saat' | 'Dikecualikan';
  category: string;
  year: string;
  responsibleUnit: string;
  fileFormat: string;
  fileSize: string;
  lastUpdated: string;
}

export interface TestimoniItem {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar?: string;
  quote: string;
  rating: number;
  projectContext: string;
}

export interface ClientItem {
  id: string;
  name: string;
  industry: string;
  logoText: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  division: string;
  bio: string;
  image?: string;
}

export interface PermohonanMessage {
  id: string;
  ticketNumber: string;
  fullName: string;
  email: string;
  phone: string;
  company: string;
  type: 'Informasi Publik' | 'Layanan Manufaktur' | 'Pengajuan Keberatan' | 'Konsultasi Teknis';
  subject: string;
  message: string;
  status: 'Baru' | 'Diproses' | 'Selesai';
  createdAt: string;
}

export interface SiteSettings {
  companyName: string;
  subName: string;
  tagline: string;
  phone: string;
  whatsapp: string;
  email: string;
  address: string;
  city: string;
  operationalHours: string;
  primaryColor: string;
  accentColor: string;
  metaTitle: string;
  metaDescription: string;
  metaKeywords: string;
}
