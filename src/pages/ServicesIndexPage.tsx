import React from 'react';
import { PageType } from '../types';
import { ArrowLeft, ArrowUpRight, CheckCircle2, ShieldCheck, Sparkles, Camera } from 'lucide-react';
import { SERVICE_SUBMENUS, SERVICE_DETAILS } from '../data/thriveData';

interface ServicesIndexPageProps {
  onNavigate: (page: PageType) => void;
}

export const ServicesIndexPage: React.FC<ServicesIndexPageProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="flex items-center justify-between pb-6 border-b border-slate-200 text-xs text-slate-500 font-mono">
          <div className="flex items-center gap-2">
            <button onClick={() => onNavigate('home')} className="hover:text-amber-600 transition-colors">
              Beranda
            </button>
            <span>/</span>
            <span className="text-amber-700 font-bold">Layanan & Aktivitas</span>
          </div>

          <button
            onClick={() => onNavigate('home')}
            className="inline-flex items-center gap-2 text-slate-600 hover:text-amber-600 transition-colors font-semibold"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Kembali ke Beranda
          </button>
        </div>

        {/* Hero */}
        <div className="py-12 border-b border-slate-200 max-w-4xl">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-amber-700 font-bold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            End-To-End Experience Solutions
          </div>
          <h1 className="font-display font-bold text-4xl sm:text-6xl text-slate-900 uppercase tracking-tight">
            Spesialisasi Acara & Aktivitas
          </h1>
          <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
            Setiap acara memiliki dinamika dan tujuan yang berbeda. Temukan spesialisasi yang sesuai dengan kebutuhan organisasi Anda di bawah ini, lengkap dengan contoh foto dokumentasi kegiatan nyata bebas royalti.
          </p>
        </div>

        {/* 4 Cards Grid with Copyright-Free Photography */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-16">
          {SERVICE_SUBMENUS.map((sub, idx) => {
            const detail = SERVICE_DETAILS[sub.id];
            return (
              <div
                key={sub.id}
                className="bg-white border border-slate-200 hover:border-amber-400 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                {/* Photo showcase banner */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                  <img
                    src={detail?.heroImage || sub.image}
                    alt={sub.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

                  {/* Top tags */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="text-xs uppercase font-mono tracking-wider px-3 py-1 bg-white/90 backdrop-blur-md text-slate-900 font-bold rounded-full shadow-sm">
                      Kategori 0{idx + 1} // {sub.category}
                    </span>
                    {sub.badge && (
                      <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-amber-400 text-slate-950 font-mono shadow-sm">
                        {sub.badge}
                      </span>
                    )}
                  </div>

                  {/* Copyright-free attribution badge */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs">
                    <div className="flex items-center gap-1.5 bg-black/60 backdrop-blur-sm px-2.5 py-1 rounded-full text-[10px] text-white/90 font-mono">
                      <Camera className="w-3 h-3 text-amber-400" />
                      <span>Foto Dokumentasi (Bebas Royalti Unsplash)</span>
                    </div>
                  </div>
                </div>

                {/* Content body */}
                <div className="p-6 sm:p-8 flex flex-col justify-between flex-1">
                  <div>
                    <h2 className="font-display font-bold text-2xl sm:text-3xl text-slate-900 group-hover:text-amber-700 transition-colors">
                      {sub.title}
                    </h2>

                    <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                      {sub.tagline}
                    </p>

                    {/* Highlights of activities */}
                    <div className="mt-6 pt-5 border-t border-slate-100 space-y-2">
                      <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                        Contoh Modul / Aktivitas:
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {detail?.activities.slice(0, 3).map((act, i) => (
                          <span key={i} className="text-xs px-3 py-1 bg-slate-100 border border-slate-200 rounded-lg text-slate-700 font-medium">
                            {act}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Footer actions */}
                  <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <span className="text-[11px] text-slate-500 block">Estimasi Investasi:</span>
                      <span className="font-display font-bold text-base text-amber-700">
                        {detail?.startingPrice}
                      </span>
                    </div>

                    <button
                      onClick={() => onNavigate(sub.id)}
                      className="bg-amber-400 hover:bg-amber-500 text-slate-950 font-display font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-full transition-colors flex items-center gap-1.5 shadow-sm"
                    >
                      Buka Rincian <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
