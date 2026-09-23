import React, { useState } from 'react';
import { PageType } from '../types';
import { 
  ArrowLeft, 
  Send, 
  Phone, 
  Mail, 
  MapPin, 
  Instagram, 
  CheckCircle2, 
  Clock, 
  Sparkles,
  ArrowUpRight 
} from 'lucide-react';

interface ContactPageProps {
  onNavigate: (page: PageType) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    eventType: 'Corporate & Family Gathering',
    participants: '50',
    preferredLocation: 'Bogor & Puncak (atau Rekomendasi Thrive)',
    targetDate: '',
    notes: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleForwardToWhatsApp = () => {
    const msg = `Halo Thrive Experience, saya ingin meminta proposal resmi dengan rincian berikut:
- Nama: ${formData.name}
- Perusahaan / Komunitas: ${formData.company}
- Email: ${formData.email}
- No. WhatsApp: ${formData.phone}
- Kategori Layanan: ${formData.eventType}
- Estimasi Peserta: ${formData.participants} orang
- Preferensi Lokasi: ${formData.preferredLocation}
- Rencana Tanggal: ${formData.targetDate || 'Fleksibel / Belum Ditentukan'}
- Kebutuhan Khusus: ${formData.notes || '-'}

Mohon konfirmasi ketersediaan dan kirimkan proposal resmi. Terima kasih!`;

    window.open(`https://wa.me/6281380908800?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="flex items-center justify-between pb-6 border-b border-slate-200 text-xs font-mono text-slate-500">
          <div className="flex items-center gap-2">
            <button onClick={() => onNavigate('home')} className="hover:text-amber-600 transition-colors">
              Beranda
            </button>
            <span>/</span>
            <span className="text-amber-700 font-bold">Kontak & Permintaan Proposal</span>
          </div>

          <button
            onClick={() => onNavigate('home')}
            className="inline-flex items-center gap-2 text-slate-600 hover:text-amber-600 transition-colors font-semibold"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Kembali
          </button>
        </div>

        {/* Hero Header */}
        <div className="py-12 border-b border-slate-200 max-w-4xl">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-amber-700 font-bold mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Mulai Diskusi Acara Anda
          </div>
          <h1 className="font-display font-bold text-4xl sm:text-6xl text-slate-900 uppercase tracking-tight">
            Hubungi Tim Konsultan Thrive
          </h1>
          <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
            Ceritakan rencana dan sasaran acara Anda. Tim spesialis kami siap memberikan rekomendasi konsep acara orisinil, opsi venue terbaik, dan kalkulasi estimasi anggaran dalam 24 jam kerja.
          </p>
        </div>

        {/* 2 Column Layout: Form & Contacts */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 py-16">
          {/* Left Column: Interactive Form */}
          <div className="lg:col-span-7">
            {submitted ? (
              <div className="bg-white border border-emerald-300 p-8 sm:p-10 rounded-2xl shadow-sm text-center">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="font-display font-bold text-2xl text-slate-900 uppercase">
                  Permintaan Proposal Terkirim!
                </h3>
                <p className="mt-3 text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
                  Terima kasih, <strong>{formData.name}</strong>. Tim Thrive Experience akan segera memproses informasi Anda dan menyusun proposal resmi.
                </p>

                <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row justify-center gap-4">
                  <button
                    onClick={handleForwardToWhatsApp}
                    className="bg-emerald-600 hover:bg-emerald-700 text-white font-display font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-full transition-colors flex items-center justify-center gap-2 shadow-sm"
                  >
                    Kirim Salinan Langsung via WhatsApp <ArrowUpRight className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => setSubmitted(false)}
                    className="border border-slate-300 text-slate-700 hover:bg-slate-50 font-display font-semibold text-xs uppercase tracking-wider px-6 py-3.5 rounded-full transition-colors"
                  >
                    Isi Formulir Baru
                  </button>
                </div>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white border border-slate-200 p-8 sm:p-10 rounded-2xl shadow-sm space-y-6"
              >
                <div>
                  <h2 className="font-display font-bold text-2xl text-slate-900 uppercase">
                    Formulir Permintaan Penawaran
                  </h2>
                  <p className="text-xs text-slate-500 mt-1">
                    Silakan lengkapi detail awal untuk membantu kami menyiapkan simulasi konsep.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-xs font-semibold text-slate-700 uppercase tracking-wider block mb-2">
                      Nama Lengkap *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Budi Santoso"
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:bg-white transition-all"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-700 uppercase tracking-wider block mb-2">
                      Nama Perusahaan / Organisasi *
                    </label>
                    <input
                      type="text"
                      name="company"
                      required
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="PT Astra International Tbk"
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:bg-white transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-xs font-semibold text-slate-700 uppercase tracking-wider block mb-2">
                      Email Bisnis / Kantor *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="budi@perusahaan.com"
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:bg-white transition-all"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-700 uppercase tracking-wider block mb-2">
                      No. WhatsApp / HP *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="0812-3456-7890"
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:bg-white transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-xs font-semibold text-slate-700 uppercase tracking-wider block mb-2">
                      Kategori Layanan *
                    </label>
                    <select
                      name="eventType"
                      value={formData.eventType}
                      onChange={handleChange}
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:bg-white transition-all cursor-pointer"
                    >
                      <option value="Corporate & Family Gathering">Corporate & Family Gathering</option>
                      <option value="Team Building & Outbound">Team Building & Outbound</option>
                      <option value="Adventure & Outdoor Expeditions">Adventure & Outdoor Expeditions</option>
                      <option value="Event Management & Production">Event Management & Production</option>
                      <option value="Kombinasi / Konsultasi Kustom">Kombinasi / Konsultasi Kustom</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-700 uppercase tracking-wider block mb-2">
                      Estimasi Jumlah Peserta *
                    </label>
                    <input
                      type="number"
                      name="participants"
                      required
                      min="10"
                      value={formData.participants}
                      onChange={handleChange}
                      placeholder="Contoh: 75"
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:bg-white transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-xs font-semibold text-slate-700 uppercase tracking-wider block mb-2">
                      Preferensi Lokasi / Kawasan
                    </label>
                    <input
                      type="text"
                      name="preferredLocation"
                      value={formData.preferredLocation}
                      onChange={handleChange}
                      placeholder="Contoh: Bogor / Puncak / Bandung"
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:bg-white transition-all"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-700 uppercase tracking-wider block mb-2">
                      Perkiraan Tanggal Acara
                    </label>
                    <input
                      type="date"
                      name="targetDate"
                      value={formData.targetDate}
                      onChange={handleChange}
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:bg-white transition-all cursor-pointer"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-700 uppercase tracking-wider block mb-2">
                    Catatan Kebutuhan Khusus / Harapan Acara
                  </label>
                  <textarea
                    name="notes"
                    rows={4}
                    value={formData.notes}
                    onChange={handleChange}
                    placeholder="Ceritakan tema, batasan bujet, atau aktivitas spesifik yang diinginkan manajemen..."
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:bg-white transition-all"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full bg-amber-400 hover:bg-amber-500 text-slate-950 font-display font-bold text-xs uppercase tracking-wider py-4 rounded-xl transition-all shadow-sm hover:shadow-md flex items-center justify-center gap-2"
                  >
                    Kirim Permintaan Proposal Resmi <Send className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Office Address & Contacts */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-white border border-slate-200 p-8 rounded-2xl shadow-sm">
              <h3 className="font-display font-bold text-xl text-slate-900 mb-6">
                Kantor Operasional & Kontak
              </h3>

              <div className="space-y-6 text-sm text-slate-600">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-semibold text-slate-900 block">Head Office:</span>
                    <span>Bogor, Jawa Barat — Indonesia</span>
                    <p className="text-xs text-slate-500 mt-1">
                      Melayani operasional seluruh Jabodetabek, Jawa Barat, dan kota-kota besar se-Indonesia.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-semibold text-slate-900 block">WhatsApp & Hot Call:</span>
                    <a
                      href="https://wa.me/6281380908800"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-amber-700 hover:underline font-bold"
                    >
                      0813-8090-8800
                    </a>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Senin - Minggu: 08.00 - 22.00 WIB
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-800 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-semibold text-slate-900 block">Official Inquiry Email:</span>
                    <a
                      href="mailto:Hi@thrivexps.com"
                      className="text-amber-700 hover:underline font-medium"
                    >
                      Hi@thrivexps.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-pink-100 text-pink-800 flex items-center justify-center shrink-0">
                    <Instagram className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-semibold text-slate-900 block">Instagram Resmi:</span>
                    <a
                      href="https://instagram.com/thriveexperience.eo"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-amber-700 hover:underline font-medium"
                    >
                      @thriveexperience.eo
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Response Time Guarantee Box */}
            <div className="bg-amber-50 border border-amber-200/80 p-6 rounded-2xl">
              <div className="flex items-center gap-3 mb-2">
                <Clock className="w-5 h-5 text-amber-700" />
                <span className="font-display font-bold text-sm text-slate-900">
                  Komitmen Respon Cepat (SLA 24 Jam)
                </span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Proposal resmi beserta estimasi biaya transparan akan kami kirimkan ke email dan WhatsApp Anda dalam waktu maksimal 24 jam kerja setelah perincian awal diterima.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
