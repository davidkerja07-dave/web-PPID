import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle,
  ExternalLink,
  MessageSquare,
  AlertCircle
} from 'lucide-react';

export const KontakPage: React.FC = () => {
  const { siteSettings, addPermohonan } = useApp();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const [successTicket, setSuccessTicket] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !phone || !subject || !message) {
      setErrorMsg('Mohon lengkapi semua kolom bertanda wajib (*)');
      return;
    }

    setErrorMsg('');
    const ticket = addPermohonan({
      fullName: name,
      email,
      phone,
      company: company || 'Individu / Warga Negara',
      type: 'Konsultasi Teknis',
      subject,
      message
    });

    setSuccessTicket(ticket);
    setName('');
    setEmail('');
    setPhone('');
    setCompany('');
    setSubject('');
    setMessage('');
  };

  return (
    <div className="space-y-16 pb-20">
      
      {/* Header */}
      <section className="bg-slate-900 text-white py-16 sm:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-400">
            <MessageSquare size={14} />
            <span className="uppercase tracking-wider">Pusat Bantuan & Meja Informasi</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Hubungi Kami
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed">
            Pintu komunikasi resmi PPID Kantor Kementerian Agama Kota Mojokerto. Kami siap melayani permohonan informasi publik serta kebutuhan rekayasa manufaktur presisi Anda.
          </p>
        </div>
      </section>

      {/* Main Grid: Form + Office Information */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Form Column (lg:col-span-7) */}
          <div className="lg:col-span-7 bg-white dark:bg-slate-900 p-6 sm:p-10 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
            <div className="space-y-1">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                Kirim Pesan & Konsultasi
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                Isi formulir di bawah ini. Tim kami akan merespons melalui email atau WhatsApp dalam tempo 1x24 jam kerja.
              </p>
            </div>

            {successTicket ? (
              <div className="p-6 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 rounded-2xl text-center space-y-4 animate-in fade-in">
                <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle size={28} />
                </div>
                <h3 className="font-bold text-lg text-slate-900 dark:text-white">
                  Pesan Anda Berhasil Diterima!
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                  Nomor registrasi tiket Anda adalah:
                </p>
                <div className="p-3 bg-white dark:bg-slate-800 font-mono font-bold text-blue-700 dark:text-blue-400 rounded-xl inline-block border border-slate-200 dark:border-slate-700 text-sm">
                  {successTicket}
                </div>
                <p className="text-xs text-slate-500">
                  Staf meja layanan kami akan menghubungi Anda sesuai nomor kontak yang diberikan.
                </p>
                <button
                  onClick={() => setSuccessTicket(null)}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg text-xs font-semibold hover:bg-blue-700 transition-colors"
                >
                  Kirim Pesan Lainnya
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                {errorMsg && (
                  <div className="p-3 bg-red-50 dark:bg-red-950/60 border border-red-200 dark:border-red-800 rounded-lg text-red-700 dark:text-red-300 flex items-center gap-2">
                    <AlertCircle size={16} />
                    <span>{errorMsg}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-semibold text-slate-700 dark:text-slate-200 mb-1">
                      Nama Lengkap <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Nama Anda"
                      className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white focus:outline-none focus:border-blue-500 text-xs"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 dark:text-slate-200 mb-1">
                      Alamat Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="email@instansi.com"
                      className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white focus:outline-none focus:border-blue-500 text-xs"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 dark:text-slate-200 mb-1">
                      Nomor Telepon / WhatsApp <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="08123456789"
                      className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white focus:outline-none focus:border-blue-500 text-xs font-mono"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 dark:text-slate-200 mb-1">
                      Nama Perusahaan / Instansi
                    </label>
                    <input
                      type="text"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="PT / CV / Universitas (Opsional)"
                      className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white focus:outline-none focus:border-blue-500 text-xs"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 dark:text-slate-200 mb-1">
                    Subjek Pertanyaan / Kebutuhan <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="Contoh: Konsultasi Laser Cutting Plat Stainless atau Permohonan Data Laporan"
                    className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white focus:outline-none focus:border-blue-500 text-xs"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 dark:text-slate-200 mb-1">
                    Isi Pesan Lengkap <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    rows={5}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tuliskan pesan detail atau pertanyaan teknis yang ingin disampaikan..."
                    className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white focus:outline-none focus:border-blue-500 text-xs resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3 bg-blue-700 hover:bg-blue-800 text-white font-semibold rounded-xl text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2"
                  >
                    <Send size={15} />
                    <span>Kirim Pesan Sekarang</span>
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Office Info & Map Column (lg:col-span-5) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Info Card */}
            <div className="bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
              <h3 className="font-bold text-lg text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-3">
                Informasi Kantor & Meja Layanan
              </h3>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="flex items-start gap-3">
                  <div className="p-2.5 bg-blue-50 dark:bg-blue-950 text-blue-600 rounded-xl shrink-0">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white">Alamat Kantor</h4>
                    <p className="text-slate-600 dark:text-slate-300 mt-0.5 leading-relaxed">
                      {siteSettings.address}, Mergelo, Kecamatan Magersari, {siteSettings.city}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2.5 bg-amber-50 dark:bg-amber-950 text-amber-600 rounded-xl shrink-0">
                    <Phone size={18} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white">Telepon & WhatsApp</h4>
                    <p className="text-slate-600 dark:text-slate-300 mt-0.5 font-mono">
                      {siteSettings.phone} / {siteSettings.whatsapp}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2.5 bg-emerald-50 dark:bg-emerald-950 text-emerald-600 rounded-xl shrink-0">
                    <Mail size={18} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white">Surel Resmi (Email)</h4>
                    <p className="text-slate-600 dark:text-slate-300 mt-0.5 truncate">
                      {siteSettings.email}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2.5 bg-indigo-50 dark:bg-indigo-950 text-indigo-600 rounded-xl shrink-0">
                    <Clock size={18} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white">Jam Operasional Pelayanan</h4>
                    <p className="text-slate-600 dark:text-slate-300 mt-0.5">
                      {siteSettings.operationalHours}
                    </p>
                    <p className="text-slate-400 text-[11px] mt-0.5">
                      Sabtu, Minggu & Hari Libur Nasional: Tutup
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps Simulation View */}
            <div className="bg-white dark:bg-slate-900 p-4 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
              <div className="relative rounded-2xl overflow-hidden aspect-[16/10] bg-slate-800 flex flex-col items-center justify-center text-center p-6 text-white border border-slate-700">
                <MapPin size={32} className="text-red-500 mb-2 animate-bounce" />
                <h4 className="font-bold text-sm">Lokasi PPID Kemenag Kota Mojokerto</h4>
                <p className="text-xs text-slate-300 mt-1 max-w-xs">
                  Jl. Taman Siswa No. 16, Magersari, Kota Mojokerto, Jawa Timur
                </p>
                <div className="mt-3 px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-[10px] font-mono">
                  Koordinat: -7.4725° S, 112.4385° E
                </div>
              </div>

              <a
                href="https://maps.google.com/?q=Kemenag+Kota+Mojokerto"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
              >
                <span>Buka Rute di Google Maps Langsung</span>
                <ExternalLink size={13} />
              </a>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};
