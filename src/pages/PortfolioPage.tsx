import React from 'react';
import { PageType } from '../types';
import { ArrowLeft, ArrowUpRight, CheckCircle2, MapPin, Users, Calendar, Sparkles } from 'lucide-react';
import { PORTFOLIO_PROJECTS } from '../data/thriveData';

interface PortfolioPageProps {
  onNavigate: (page: PageType) => void;
}

export const PortfolioPage: React.FC<PortfolioPageProps> = ({ onNavigate }) => {
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
            <span className="text-amber-700 font-bold">Portofolio & Klien</span>
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
            <Sparkles className="w-3.5 h-3.5" />
            Proven Track Record & Client Success
          </div>
          <h1 className="font-display font-bold text-4xl sm:text-6xl text-slate-900 uppercase tracking-tight">
            Studi Kasus & Portofolio Acara
          </h1>
          <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
            Keberhasilan sebuah acara diukur dari dampak nyata yang dirasakan oleh peserta dan efisiensi koordinasi yang dirasakan oleh manajemen. Berikut adalah sebagian dari rekam jejak pelaksanaan event Thrive Experience.
          </p>
        </div>

        {/* Project Case Studies */}
        <div className="py-16 space-y-12">
          {PORTFOLIO_PROJECTS.map((proj, idx) => (
            <div
              key={proj.id}
              className="bg-white border border-slate-200 hover:border-amber-400 rounded-2xl p-8 lg:p-10 transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-6 mb-6">
                <div>
                  <span className="text-xs font-mono uppercase text-amber-700 font-bold tracking-wider">
                    PROYEK 0{idx + 1} // {proj.category}
                  </span>
                  <h2 className="font-display font-bold text-2xl sm:text-3xl text-slate-900 mt-1">
                    {proj.title}
                  </h2>
                  <p className="text-sm font-semibold text-slate-600 mt-1">{proj.client}</p>
                </div>

                <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-500">
                  <div className="flex items-center gap-1.5 bg-slate-100 px-3 py-1.5 rounded-full">
                    <MapPin className="w-3.5 h-3.5 text-amber-600" />
                    <span>{proj.location}</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-slate-100 px-3 py-1.5 rounded-full">
                    <Users className="w-3.5 h-3.5 text-amber-600" />
                    <span>{proj.participants} Peserta</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-slate-100 px-3 py-1.5 rounded-full">
                    <Calendar className="w-3.5 h-3.5 text-amber-600" />
                    <span>{proj.year}</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-4">
                <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                  <span className="text-xs uppercase font-mono text-amber-700 font-bold block mb-2">
                    Tantangan Klien:
                  </span>
                  <p className="text-sm text-slate-700 leading-relaxed">{proj.challenge}</p>
                </div>

                <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                  <span className="text-xs uppercase font-mono text-amber-700 font-bold block mb-2">
                    Solusi Kreatif Thrive:
                  </span>
                  <p className="text-sm text-slate-700 leading-relaxed">{proj.solution}</p>
                </div>

                <div className="bg-amber-50/70 p-6 rounded-xl border border-amber-200/60">
                  <span className="text-xs uppercase font-mono text-amber-800 font-bold block mb-2">
                    Hasil & Dampak Nyata:
                  </span>
                  <p className="text-sm text-amber-950 font-medium leading-relaxed">{proj.outcome}</p>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-mono text-slate-400 mr-2">Deliverables:</span>
                  {proj.deliverables.map((item, i) => (
                    <span
                      key={i}
                      className="text-xs px-2.5 py-1 bg-slate-100 border border-slate-200 rounded-md text-slate-700 font-medium"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => onNavigate('contact')}
                  className="inline-flex items-center gap-1.5 text-xs uppercase font-display font-bold text-amber-700 hover:text-amber-800 hover:underline"
                >
                  Konsultasikan Acara Serupa <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
