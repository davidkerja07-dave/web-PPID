import React, { useState, useEffect } from 'react';
import { useApp } from '../../context/AppContext';
import { PermohonanMessage } from '../../types';
import { X, CheckCircle, Copy, Check, Send, AlertCircle, FileText } from 'lucide-react';

export const PermohonanModal: React.FC = () => {
  const {
    isPermohonanModalOpen,
    closePermohonanModal,
    presetPermohonanType,
    addPermohonan
  } = useApp();

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [type, setType] = useState<PermohonanMessage['type']>('Informasi Publik');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const [submittedTicket, setSubmittedTicket] = useState<string | null>(null);
  const [isCopied, setIsCopied] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (presetPermohonanType) {
      setType(presetPermohonanType);
    }
  }, [presetPermohonanType, isPermohonanModalOpen]);

  if (!isPermohonanModalOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email || !phone || !subject || !message) {
      setErrorMessage('Mohon lengkapi seluruh kolom formulir bertanda wajib.');
      return;
    }

    setErrorMessage('');
    const ticket = addPermohonan({
      fullName,
      email,
      phone,
      company: company || 'Individu / Warga Negara',
      type,
      subject,
      message,
    });

    setSubmittedTicket(ticket);
  };

  const handleCopyTicket = () => {
    if (submittedTicket) {
      navigator.clipboard.writeText(submittedTicket);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2500);
    }
  };

  const handleResetAndClose = () => {
    setSubmittedTicket(null);
    setFullName('');
    setEmail('');
    setPhone('');
    setCompany('');
    setSubject('');
    setMessage('');
    closePermohonanModal();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-2xl max-w-2xl w-full border border-slate-200 dark:border-slate-800 overflow-hidden relative max-h-[92vh] flex flex-col">
        
        {/* Header */}
        <div className="px-6 py-4 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800 shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-blue-600 rounded-lg text-white">
              <FileText size={18} />
            </div>
            <div>
              <h3 className="font-bold text-base">
                Formulir Permohonan Online PPID & Manufaktur
              </h3>
              <p className="text-xs text-slate-400">
                Layanan Terpadu Satu Pintu Kemenag Kota Mojokerto
              </p>
            </div>
          </div>
          <button
            onClick={handleResetAndClose}
            className="text-slate-400 hover:text-white p-1.5 rounded-lg hover:bg-slate-800 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto">
          {submittedTicket ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle size={36} />
              </div>
              <h4 className="text-xl font-bold text-slate-900 dark:text-white">
                Permohonan Berhasil Terkirim!
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto">
                Permohonan Anda telah resmi terdaftar di sistem PPID Kemenag Kota Mojokerto. Simpan nomor tiket berikut untuk melacak status tanggapan layanan Anda:
              </p>

              <div className="p-4 bg-slate-100 dark:bg-slate-800 rounded-xl max-w-sm mx-auto flex items-center justify-between border border-slate-200 dark:border-slate-700">
                <span className="font-mono text-base font-bold text-blue-700 dark:text-blue-400">
                  {submittedTicket}
                </span>
                <button
                  onClick={handleCopyTicket}
                  className="px-3 py-1.5 bg-white dark:bg-slate-700 text-xs font-medium rounded-lg text-slate-700 dark:text-slate-200 shadow-sm border border-slate-300 dark:border-slate-600 flex items-center gap-1.5 hover:bg-slate-50 transition-colors"
                >
                  {isCopied ? <Check size={14} className="text-emerald-500" /> : <Copy size={14} />}
                  <span>{isCopied ? 'Tersalin' : 'Salin Tiket'}</span>
                </button>
              </div>

              <div className="text-xs text-slate-500 dark:text-slate-400 pt-2 space-y-1">
                <p>• Permohonan Informasi Publik diproses dalam maksimal 10 hari kerja (sesuai UU KIP No. 14/2008).</p>
                <p>• Permintaan layanan teknis / penawaran manufaktur akan ditindaklanjuti engineer dalam 1x24 jam.</p>
              </div>

              <div className="pt-4">
                <button
                  onClick={handleResetAndClose}
                  className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-lg transition-colors shadow-md"
                >
                  Selesai & Tutup Jendela
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              {errorMessage && (
                <div className="p-3 bg-red-50 dark:bg-red-950/60 border border-red-200 dark:border-red-800 rounded-lg text-red-700 dark:text-red-300 flex items-center gap-2">
                  <AlertCircle size={16} />
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* Service Type Selection */}
              <div>
                <label className="block font-semibold text-slate-700 dark:text-slate-200 mb-1.5">
                  Jenis Layanan yang Dimohonkan <span className="text-red-500">*</span>
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {(['Informasi Publik', 'Layanan Manufaktur', 'Pengajuan Keberatan', 'Konsultasi Teknis'] as const).map(
                    (cat) => (
                      <button
                        type="button"
                        key={cat}
                        onClick={() => setType(cat)}
                        className={`p-2 rounded-lg border text-left transition-all ${
                          type === cat
                            ? 'border-blue-600 bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 font-semibold'
                            : 'border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300'
                        }`}
                      >
                        {cat}
                      </button>
                    )
                  )}
                </div>
              </div>

              {/* 2-Column Inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-slate-700 dark:text-slate-200 mb-1">
                    Nama Lengkap Pemohon <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Contoh: Budi Santoso"
                    className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white focus:outline-none focus:border-blue-500 text-xs"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 dark:text-slate-200 mb-1">
                    Email Aktif <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="nama@email.com"
                    className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white focus:outline-none focus:border-blue-500 text-xs"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 dark:text-slate-200 mb-1">
                    No. Telepon / WhatsApp <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="0812xxxxxxxx"
                    className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white focus:outline-none focus:border-blue-500 text-xs font-mono"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 dark:text-slate-200 mb-1">
                    Perusahaan / Instansi / Lembaga
                  </label>
                  <input
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="Opsional (Isi nama institusi bila ada)"
                    className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white focus:outline-none focus:border-blue-500 text-xs"
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label className="block font-semibold text-slate-700 dark:text-slate-200 mb-1">
                  Subjek / Pokok Permohonan <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="Misal: Permohonan RUP 2026 atau Permintaan Penawaran CNC Milling"
                  className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white focus:outline-none focus:border-blue-500 text-xs"
                />
              </div>

              {/* Message Details */}
              <div>
                <label className="block font-semibold text-slate-700 dark:text-slate-200 mb-1">
                  Uraian Lengkap Rincian Informasi atau Kebutuhan Teknis <span className="text-red-500">*</span>
                </label>
                <textarea
                  rows={4}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Jelaskan secara spesifik informasi yang dibutuhkan, atau spesifikasi dimensi material & kuantiti untuk jasa manufaktur..."
                  className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white focus:outline-none focus:border-blue-500 text-xs resize-none"
                />
              </div>

              {/* Submission Button */}
              <div className="pt-2 flex items-center justify-end gap-3 border-t border-slate-200 dark:border-slate-800">
                <button
                  type="button"
                  onClick={handleResetAndClose}
                  className="px-4 py-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 bg-blue-700 hover:bg-blue-800 active:scale-95 text-white font-semibold rounded-lg shadow-md transition-all flex items-center gap-1.5"
                >
                  <Send size={14} />
                  <span>Kirim Permohonan</span>
                </button>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};
