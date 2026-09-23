import React, { useState } from 'react';
import { PageType } from '../types';
import { ArrowLeft, ArrowUpRight, Camera, Filter, MapPin } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/thriveData';

interface GalleryPageProps {
  onNavigate: (page: PageType) => void;
}

export const GalleryPage: React.FC<GalleryPageProps> = ({ onNavigate }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'gathering' | 'teambuilding' | 'adventure' | 'production'>('all');

  const filteredItems = activeFilter === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeFilter);

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
            <span className="text-amber-700 font-bold">Galeri Dokumentasi</span>
          </div>

          <button
            onClick={() => onNavigate('home')}
            className="inline-flex items-center gap-2 text-slate-600 hover:text-amber-600 transition-colors font-semibold"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Kembali
          </button>
        </div>

        {/* Hero */}
        <div className="py-16 border-b border-slate-200 max-w-4xl">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-amber-700 font-bold mb-4">
            <Camera className="w-3.5 h-3.5" />
            Visual Archive & Live Action
          </div>
          <h1 className="font-display font-bold text-4xl sm:text-6xl text-slate-900 uppercase tracking-tight">
            Galeri Dokumentasi Kegiatan
          </h1>
          <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
            Menyajikan rekaman visual energi, tawa, kekompakan, dan keindahan panorama alam dalam berbagai rangkaian acara Thrive Experience. Seluruh foto berlisensi bebas royalti (Unsplash).
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="py-8 flex flex-wrap items-center gap-2 border-b border-slate-200">
          <span className="text-xs uppercase font-mono text-slate-400 mr-2 flex items-center gap-1">
            <Filter className="w-3 h-3" /> Filter Kategori:
          </span>
          {[
            { id: 'all', label: 'Semua Dokumentasi' },
            { id: 'gathering', label: 'Corporate Gathering' },
            { id: 'teambuilding', label: 'Team Building & Outbound' },
            { id: 'adventure', label: 'Adventure & Rafting' },
            { id: 'production', label: 'Stage & Production' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id as any)}
              className={`text-xs uppercase font-display font-semibold tracking-wider px-4 py-2 rounded-full transition-all ${
                activeFilter === tab.id
                  ? 'bg-amber-400 text-slate-950 font-bold shadow-xs'
                  : 'border border-slate-200 text-slate-600 hover:text-slate-900 hover:border-slate-300 bg-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-12">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group flex flex-col"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-slate-900 text-[10px] font-mono font-bold uppercase px-2.5 py-1 rounded-full shadow-xs">
                  {item.category}
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display font-bold text-base text-slate-900 group-hover:text-amber-700 transition-colors">
                    {item.title}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 mt-2">
                    <MapPin className="w-3.5 h-3.5 text-amber-600" />
                    <span>{item.location}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Gallery Footer Note */}
        <div className="mt-8 p-6 bg-white border border-slate-200 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-xs">
          <div>
            <span className="font-display font-bold text-slate-900 text-sm">
              Layanan Dokumentasi Profesional Terintegrasi
            </span>
            <p className="text-xs text-slate-500 mt-0.5">
              Setiap paket event Thrive mencakup fotografer, videografer, dan pilot drone dengan hasil aftermovie cinematic 4K.
            </p>
          </div>
          <button
            onClick={() => onNavigate('contact')}
            className="bg-slate-900 hover:bg-slate-800 text-white font-display font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-full transition-colors whitespace-nowrap shadow-xs"
          >
            Konsultasikan Dokumentasi Acara
          </button>
        </div>
      </div>
    </div>
  );
};
