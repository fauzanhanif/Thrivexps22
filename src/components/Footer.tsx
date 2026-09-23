import React from 'react';
import { PageType } from '../types';
import { ArrowUpRight, Phone, Mail, MapPin, Instagram } from 'lucide-react';
import { SERVICE_SUBMENUS } from '../data/thriveData';
import { ThriveLogo } from './ThriveLogo';

interface FooterProps {
  onNavigate: (page: PageType) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-slate-50 text-slate-700 border-t border-slate-200 pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Massive Brand Statement with Official Logo */}
        <div className="pb-16 border-b border-slate-200 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">
          <div className="max-w-3xl">
            <div className="mb-6">
              <ThriveLogo variant="horizontal" showTagline={true} size="lg" />
            </div>

            <h2 className="font-display font-bold text-3xl sm:text-5xl md:text-6xl tracking-tight text-slate-900 uppercase leading-[0.98]">
              Create<span className="text-amber-500">.</span> Connect
              <span className="text-amber-500">.</span> Grow
              <span className="text-amber-500">.</span>
            </h2>
            <p className="mt-5 max-w-2xl text-slate-600 text-base sm:text-lg leading-relaxed">
              Kami percaya event bukan sekadar susunan rundown seremonial. Kami menciptakan momen kebersamaan, sinergi kepemimpinan, dan petualangan yang memberi dampak nyata bagi tim Anda.
            </p>
          </div>

          {/* Clean Official Logo Badge in Footer */}
          <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm max-w-[260px] shrink-0 flex flex-col items-center">
            <ThriveLogo variant="full" />
          </div>
        </div>

        {/* 3-Column Clean Directory */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 py-16 border-b border-slate-200">
          {/* Column 1: Services Submenus */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-slate-900 mb-5">
              Layanan & Aktivitas
            </h3>
            <ul className="space-y-3.5">
              {SERVICE_SUBMENUS.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => onNavigate(item.id)}
                    className="text-sm text-slate-600 hover:text-amber-600 transition-colors flex items-center gap-1.5 text-left group"
                  >
                    <span>{item.title}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-amber-600" />
                  </button>
                </li>
              ))}
              <li className="pt-2">
                <button
                  onClick={() => onNavigate('services')}
                  className="text-xs text-amber-600 font-semibold hover:underline"
                >
                  Buka Ringkasan Semua Layanan →
                </button>
              </li>
            </ul>
          </div>

          {/* Column 2: Quick Company Navigation */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-slate-900 mb-5">
              Profil & Kredensial
            </h3>
            <ul className="space-y-3.5">
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="text-sm text-slate-600 hover:text-amber-600 transition-colors"
                >
                  Tentang Kami & Tim Manajemen
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('portfolio')}
                  className="text-sm text-slate-600 hover:text-amber-600 transition-colors"
                >
                  Studi Kasus Proyek Klien Korporasi
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('gallery')}
                  className="text-sm text-slate-600 hover:text-amber-600 transition-colors"
                >
                  Galeri Dokumentasi Foto & Video
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="text-sm text-slate-600 hover:text-amber-600 transition-colors"
                >
                  Permintaan Proposal & Konsultasi Gratis
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Office */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-slate-900 mb-5">
              Kantor Operasional & Kontak
            </h3>
            <div className="space-y-4 text-sm text-slate-600">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-amber-600 shrink-0 mt-1" />
                <span>
                  Bogor, Jawa Barat — Indonesia (Melayani Area Jabodetabek, Jawa Barat, & Seluruh Indonesia)
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-amber-600 shrink-0" />
                <a
                  href="https://wa.me/6281380908800"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-600 font-semibold text-slate-900 transition-colors"
                >
                  0813-8090-8800 (WhatsApp)
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-amber-600 shrink-0" />
                <a
                  href="mailto:Hi@thrivexps.com"
                  className="hover:text-amber-600 transition-colors"
                >
                  Hi@thrivexps.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Instagram className="w-4 h-4 text-amber-600 shrink-0" />
                <a
                  href="https://instagram.com/thriveexperience.eo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-600 transition-colors"
                >
                  @thriveexperience.eo
                </a>
              </div>
              <div className="pt-2">
                <button
                  onClick={() => onNavigate('contact')}
                  className="w-full bg-amber-400 hover:bg-amber-500 text-slate-950 font-display font-bold text-xs uppercase tracking-wider py-3 rounded-lg transition-colors shadow-sm"
                >
                  Hubungi Konsultan Event Kami
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex flex-wrap items-center gap-2">
            <span>© {new Date().getFullYear()} THRIVE EXPERIENCE. All rights reserved.</span>
            <span>•</span>
            <span className="font-semibold text-slate-700">Founders: Mohamad Rifki Sopyan Sauri & Ibu Indri</span>
          </div>
          <div className="flex items-center gap-6">
            <button onClick={() => onNavigate('about')} className="hover:text-slate-900 transition-colors">
              Tentang Thrive
            </button>
            <button onClick={() => onNavigate('contact')} className="hover:text-slate-900 transition-colors">
              Konsultasi Acara
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
