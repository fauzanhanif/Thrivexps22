import React, { useState } from 'react';
import { PageType } from '../types';
import { 
  ArrowLeft, 
  ArrowUpRight, 
  CheckCircle2, 
  Clock, 
  Users, 
  HelpCircle, 
  ChevronDown, 
  Sparkles,
  PhoneCall,
  Camera,
  ShieldCheck
} from 'lucide-react';
import { SERVICE_DETAILS, SERVICE_SUBMENUS } from '../data/thriveData';

interface ServiceDetailPageProps {
  pageId: string;
  onNavigate: (page: PageType) => void;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({ pageId, onNavigate }) => {
  const service = SERVICE_DETAILS[pageId] || SERVICE_DETAILS['service-gathering'];
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Breadcrumb & Back */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-200 text-xs">
          <div className="flex items-center gap-2 text-slate-500 font-mono">
            <button onClick={() => onNavigate('home')} className="hover:text-amber-600 transition-colors">
              Beranda
            </button>
            <span>/</span>
            <button onClick={() => onNavigate('services')} className="hover:text-amber-600 transition-colors">
              Layanan
            </button>
            <span>/</span>
            <span className="text-amber-700 font-bold">{service.category}</span>
          </div>

          <button
            onClick={() => onNavigate('services')}
            className="inline-flex items-center gap-2 text-slate-600 hover:text-amber-600 transition-colors font-semibold"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Kembali ke Semua Layanan
          </button>
        </div>

        {/* Hero Banner with Copyright-Free Real Image */}
        <div className="py-10 border-b border-slate-200">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="text-xs uppercase tracking-wider px-3 py-1 bg-amber-100 text-amber-900 font-bold font-mono rounded-full">
                  Kategori: {service.category}
                </span>
                <span className="text-xs text-slate-500 font-medium">
                  Min. {service.minParticipants} Peserta • {service.duration}
                </span>
              </div>

              <h1 className="font-display font-bold text-3xl sm:text-5xl md:text-6xl text-slate-900 uppercase tracking-tight leading-tight">
                {service.title}
              </h1>

              <p className="mt-3 text-amber-700 font-display text-lg sm:text-xl font-semibold">
                {service.subtitle}
              </p>

              <p className="mt-5 text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl">
                {service.description}
              </p>

              {/* Quick Action bar */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onNavigate('contact')}
                  className="bg-amber-400 hover:bg-amber-500 text-slate-950 font-display font-bold text-xs uppercase tracking-wider px-7 py-3.5 rounded-full transition-all flex items-center gap-2 shadow-sm hover:shadow-md"
                >
                  Minta Proposal Resmi <ArrowUpRight className="w-4 h-4" />
                </button>
                <a
                  href={`https://wa.me/6281380908800?text=Halo%20Thrive%20Experience,%20saya%20tertarik%20dengan%20layanan%20${encodeURIComponent(service.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-slate-300 hover:border-slate-400 bg-white text-slate-800 hover:text-slate-900 font-display font-semibold text-xs uppercase tracking-wider px-6 py-3.5 rounded-full transition-colors flex items-center gap-2 shadow-xs"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-emerald-600" />
                  Konsultasi WhatsApp
                </a>
              </div>
            </div>

            {/* Visual Hero Image Card */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-200 relative bg-slate-100 group">
                <img
                  src={service.heroImage}
                  alt={service.title}
                  className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="inline-flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-mono text-amber-300 mb-1.5">
                    <Camera className="w-3.5 h-3.5" />
                    <span>Contoh Dokumentasi Nyata (Lisensi Bebas Royalti)</span>
                  </div>
                  <p className="text-xs text-white/90 leading-tight">
                    {service.imageCaption}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Other Sub-menu Switcher Tabs */}
        <div className="py-6 border-b border-slate-200 flex items-center gap-2 overflow-x-auto no-scrollbar">
          <span className="text-xs text-slate-400 uppercase font-semibold mr-2 shrink-0">Sub-Layanan Lain:</span>
          {SERVICE_SUBMENUS.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`text-xs uppercase font-display font-semibold tracking-wider px-4 py-2 rounded-full whitespace-nowrap transition-all ${
                item.id === pageId
                  ? 'bg-amber-400 text-slate-950 font-bold shadow-xs'
                  : 'border border-slate-200 text-slate-600 hover:text-slate-900 hover:border-slate-300 bg-white'
              }`}
            >
              {item.title.split('&')[0]}
            </button>
          ))}
        </div>

        {/* Real Activity Gallery (3 High-Res Copyright-Free Photos) */}
        <div className="py-12 border-b border-slate-200">
          <div className="flex items-center justify-between mb-6">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] font-bold text-amber-700 block">
                Galeri Visual Kegiatan
              </span>
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-slate-900 mt-1">
                Contoh Suasana & Dokumentasi Nyata
              </h2>
            </div>
            <span className="text-xs text-slate-500 font-mono hidden sm:inline-block">
              Foto Bebas Royalti Unsplash
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {service.galleryImages.map((img, i) => (
              <div key={i} className="rounded-xl overflow-hidden border border-slate-200 bg-white shadow-sm group">
                <div className="aspect-[16/10] overflow-hidden relative">
                  <img
                    src={img.url}
                    alt={img.caption}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-4">
                  <p className="text-xs text-slate-600 leading-relaxed font-medium">
                    {img.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Content Body: 2 Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 py-16">
          {/* Main 2 Cols */}
          <div className="lg:col-span-2 space-y-16">
            {/* Key Highlights */}
            <div>
              <h2 className="text-xs uppercase tracking-[0.2em] font-bold text-amber-700 mb-6">
                Keunggulan & Karakteristik Layanan
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.highlights.map((point, idx) => (
                  <div key={idx} className="bg-white border border-slate-200 p-5 rounded-xl flex items-start gap-3 shadow-xs">
                    <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-700 leading-relaxed font-medium">{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Activities Included */}
            <div>
              <h2 className="text-xs uppercase tracking-[0.2em] font-bold text-amber-700 mb-6">
                Pilihan Modul & Aktivitas Skenario
              </h2>
              <div className="space-y-3">
                {service.activities.map((act, idx) => (
                  <div key={idx} className="bg-white border border-slate-200 hover:border-amber-300 p-4 rounded-xl flex items-center justify-between transition-colors shadow-xs">
                    <div className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-800 text-xs font-mono flex items-center justify-center font-bold">
                        {idx + 1}
                      </span>
                      <span className="text-sm font-semibold text-slate-900">{act}</span>
                    </div>
                    <Sparkles className="w-4 h-4 text-amber-500" />
                  </div>
                ))}
              </div>
            </div>

            {/* Sample Detailed Rundown */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xs uppercase tracking-[0.2em] font-bold text-amber-700">
                  Simulasi Rundown Acara (Contoh Format)
                </h2>
                <span className="text-xs text-slate-500 font-mono">Dapat disesuaikan 100%</span>
              </div>
              <div className="border border-slate-200 rounded-xl overflow-hidden bg-white divide-y divide-slate-100 shadow-xs">
                {service.sampleItinerary.map((item, idx) => (
                  <div key={idx} className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 hover:bg-slate-50 transition-colors">
                    <div className="flex items-center gap-3">
                      <Clock className="w-4 h-4 text-amber-600 shrink-0" />
                      <span className="text-xs font-mono font-bold text-amber-700 w-28 shrink-0">
                        {item.time}
                      </span>
                      <span className="text-sm font-semibold text-slate-900">
                        {item.activity}
                      </span>
                    </div>
                    <span className="text-xs text-slate-500 pl-7 sm:pl-0 sm:text-right">
                      {item.notes}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQs Accordion */}
            <div>
              <h2 className="text-xs uppercase tracking-[0.2em] font-bold text-amber-700 mb-6">
                Pertanyaan Umum Mengenai Layanan Ini (FAQ)
              </h2>
              <div className="space-y-3">
                {service.faqs.map((faq, idx) => (
                  <div key={idx} className="border border-slate-200 bg-white rounded-xl overflow-hidden shadow-xs">
                    <button
                      onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                      className="w-full text-left p-4 sm:p-5 flex items-center justify-between font-display font-semibold text-sm sm:text-base text-slate-900 hover:text-amber-700 transition-colors"
                    >
                      <span>{faq.q}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-amber-600 transition-transform ${
                          openFaq === idx ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {openFaq === idx && (
                      <div className="p-4 sm:p-5 pt-0 text-sm text-slate-600 leading-relaxed border-t border-slate-100 mt-2">
                        {faq.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Sidebar: Inclusions & Quote Box */}
          <div className="space-y-8">
            <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-md sticky top-28">
              <span className="text-[10px] font-mono uppercase tracking-wider text-amber-700 font-bold block mb-2">
                Fasilitas & Inklusi
              </span>
              <h3 className="font-display font-bold text-xl text-slate-900 mb-4">
                Paket Fasilitas Terlengkap
              </h3>

              <ul className="space-y-3 text-xs text-slate-600 border-b border-slate-200 pb-6 mb-6">
                {service.inclusions.map((inc, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                    <span>{inc}</span>
                  </li>
                ))}
              </ul>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-xs text-slate-600">
                  <span>Minimum Peserta:</span>
                  <span className="font-bold text-slate-900">{service.minParticipants} Orang</span>
                </div>
                <div className="flex justify-between text-xs text-slate-600">
                  <span>Durasi Rekomendasi:</span>
                  <span className="font-bold text-slate-900">{service.duration}</span>
                </div>
                <div className="flex justify-between text-xs text-slate-600">
                  <span>Estimasi Biaya:</span>
                  <span className="font-bold text-amber-700">{service.startingPrice}</span>
                </div>
              </div>

              <button
                onClick={() => onNavigate('contact')}
                className="w-full bg-amber-400 hover:bg-amber-500 text-slate-950 font-display font-bold text-xs uppercase tracking-wider py-3.5 rounded-full transition-colors flex items-center justify-center gap-2 mb-3 shadow-sm"
              >
                Minta Proposal Acara Ini <ArrowUpRight className="w-4 h-4" />
              </button>

              <a
                href={`https://wa.me/6281380908800?text=Halo%20Thrive%20Experience,%20saya%20ingin%20konsultasi%20layanan%20${encodeURIComponent(service.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full border border-slate-300 hover:border-slate-400 text-slate-800 hover:text-slate-950 font-display font-semibold text-xs uppercase tracking-wider py-3 rounded-full transition-colors flex items-center justify-center gap-2 text-center"
              >
                Chat WhatsApp Langsung
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
