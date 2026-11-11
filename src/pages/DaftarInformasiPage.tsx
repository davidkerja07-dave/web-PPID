import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  FileCheck2,
  Search,
  Download,
  Eye,
  ShieldCheck,
  Building,
  CheckCircle2,
  ExternalLink
} from 'lucide-react';

export const DaftarInformasiPage: React.FC = () => {
  const { openDocModal, openPermohonanModal } = useApp();
  const [searchTerm, setSearchTerm] = useState('');

  const dipItems = [
    {
      ringkasan: 'Profil Lembaga, Tugas, Fungsi, dan Struktur Organisasi PPID',
      pejabatPenguasa: 'Subbag Tata Usaha',
      penanggungJawab: 'PPID Pelaksana',
      waktuPembuatan: '2026',
      bentukInformasi: 'Softcopy / Hardcopy',
      jangkaSimpan: 'Permanen',
      jenisMedia: 'Website Resmi & Papan Pengumuman'
    },
    {
      ringkasan: 'Rencana Strategis (Renstra) & Rencana Kerja Tahunan (RKT)',
      pejabatPenguasa: 'Perencana & TU',
      penanggungJawab: 'PPID Pelaksana',
      waktuPembuatan: '2025 - 2026',
      bentukInformasi: 'Softcopy (PDF)',
      jangkaSimpan: '5 Tahun',
      jenisMedia: 'Website PPID Kemenag Kota Mojokerto'
    },
    {
      ringkasan: 'Laporan Realisasi Anggaran DIPA & Neraca Keuangan Satker',
      pejabatPenguasa: 'Bendahara & Keuangan',
      penanggungJawab: 'PPID Pelaksana',
      waktuPembuatan: 'Triwulan / Tahunan',
      bentukInformasi: 'Softcopy (PDF / XLSX)',
      jangkaSimpan: '10 Tahun',
      jenisMedia: 'Website PPID & Meja Informasi'
    },
    {
      ringkasan: 'Daftar Rencana Umum Pengadaan (RUP) Barang dan Jasa',
      pejabatPenguasa: 'Pejabat Pembuat Komitmen',
      penanggungJawab: 'PPID Pelaksana',
      waktuPembuatan: 'Awal Tahun Anggaran',
      bentukInformasi: 'Digital Portal SiRUP / PDF',
      jangkaSimpan: '5 Tahun',
      jenisMedia: 'LPSE & Website PPID'
    },
    {
      ringkasan: 'Standar Operasional Prosedur (SOP) Layanan Informasi & Manufaktur',
      pejabatPenguasa: 'Tim Pengendalian Mutu',
      penanggungJawab: 'PPID Pelaksana',
      waktuPembuatan: '2025',
      bentukInformasi: 'Buku Pedoman & Softcopy',
      jangkaSimpan: 'Selama Berlaku',
      jenisMedia: 'Ruang Layanan & Website'
    },
    {
      ringkasan: 'Laporan Layanan Informasi Publik Tahunan & Rekapitulasi Permohonan',
      pejabatPenguasa: 'Sekretariat PPID',
      penanggungJawab: 'PPID Utama',
      waktuPembuatan: 'Tahunan (Akhir Tahun)',
      bentukInformasi: 'Softcopy & Cetak',
      jangkaSimpan: '10 Tahun',
      jenisMedia: 'Komisi Informasi & Website'
    }
  ];

  const filteredDIP = dipItems.filter((item) =>
    item.ringkasan.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.pejabatPenguasa.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-12 pb-20">
      
      {/* Header */}
      <section className="bg-slate-900 text-white py-16 sm:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-400">
            <FileCheck2 size={14} />
            <span className="uppercase tracking-wider">Dokumen Resmi DIP Tahun 2026</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Daftar Informasi Publik (DIP)
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed">
            Daftar Informasi Publik yang wajib disediakan dan diumumkan secara berkala serta setiap saat oleh Kantor Kementerian Agama Kota Mojokerto sesuai Surat Keputusan Penetapan DIP Tahun 2026.
          </p>
        </div>
      </section>

      {/* Overview & Search */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        <div className="p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1">
            <h2 className="text-base font-bold text-slate-900 dark:text-white">
              Tabel Rekapitulasi Daftar Informasi Publik (DIP)
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Menampilkan {filteredDIP.length} kategori informasi publik terdaftar
            </p>
          </div>

          <div className="relative w-full md:max-w-xs">
            <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Cari ringkasan informasi..."
              className="w-full pl-9 pr-3 py-2 text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>

        {/* DIP Table */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-slate-50 dark:bg-slate-800/80 border-b border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-semibold uppercase tracking-wider">
                  <th className="py-3.5 px-4 w-12 text-center">No</th>
                  <th className="py-3.5 px-4">Ringkasan Isi Informasi</th>
                  <th className="py-3.5 px-4">Pejabat yang Menguasai</th>
                  <th className="py-3.5 px-4">Waktu Pembuatan</th>
                  <th className="py-3.5 px-4">Bentuk & Media</th>
                  <th className="py-3.5 px-4">Jangka Simpan</th>
                  <th className="py-3.5 px-4 text-right">Aksi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {filteredDIP.map((item, index) => (
                  <tr key={index} className="hover:bg-slate-50/80 dark:hover:bg-slate-800/40 transition-colors">
                    <td className="py-4 px-4 text-center font-mono text-slate-400">
                      {index + 1}
                    </td>
                    <td className="py-4 px-4 font-semibold text-slate-900 dark:text-white max-w-xs">
                      {item.ringkasan}
                    </td>
                    <td className="py-4 px-4 text-slate-600 dark:text-slate-300">
                      {item.pejabatPenguasa}
                    </td>
                    <td className="py-4 px-4 font-mono text-slate-500">
                      {item.waktuPembuatan}
                    </td>
                    <td className="py-4 px-4 text-slate-600 dark:text-slate-400">
                      <p>{item.bentukInformasi}</p>
                      <p className="text-[10px] text-slate-400">{item.jenisMedia}</p>
                    </td>
                    <td className="py-4 px-4 font-mono text-slate-600 dark:text-slate-300 whitespace-nowrap">
                      {item.jangkaSimpan}
                    </td>
                    <td className="py-4 px-4 text-right whitespace-nowrap">
                      <button
                        onClick={() =>
                          openDocModal({
                            title: item.ringkasan,
                            type: 'Daftar Informasi Publik (DIP)',
                            size: '1.2 MB',
                            date: 'Tahun 2026'
                          })
                        }
                        className="px-2.5 py-1.5 bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-900 rounded-lg font-medium transition-colors inline-flex items-center gap-1"
                      >
                        <Eye size={12} />
                        <span>Detail DIP</span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </section>

      {/* Bottom CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 pt-6">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white">
          Butuh Salinan Dokumen Resmi Tertentu?
        </h3>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-lg mx-auto">
          Apabila dokumen yang Anda butuhkan tercantum pada DIP namun berkas lengkap belum Anda miliki, ajukan formulir permohonan daring sekarang.
        </p>
        <button
          onClick={() => openPermohonanModal('Informasi Publik')}
          className="px-6 py-3 bg-blue-700 hover:bg-blue-800 text-white text-xs font-semibold rounded-xl shadow-md transition-all"
        >
          Isi Formulir Permohonan Informasi
        </button>
      </section>

    </div>
  );
};
