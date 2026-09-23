import React, { useState, useEffect, useRef } from 'react';
import { 
  ChevronDown, 
  Menu, 
  X, 
  ArrowUpRight, 
  Users, 
  ShieldCheck, 
  Compass, 
  Layers, 
  Sparkles,
  PhoneCall
} from 'lucide-react';
import { PageType } from '../types';
import { SERVICE_SUBMENUS } from '../data/thriveData';
import { ThriveLogo } from './ThriveLogo';

interface NavbarProps {
  currentPage: PageType;
  onNavigate: (page: PageType) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<'services' | null>(null);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnter = (menu: 'services') => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setActiveDropdown(menu);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 180);
  };

  const handleSubmenuClick = (page: PageType) => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
    onNavigate(page);
  };

  const renderIcon = (name: string, className: string = 'w-4 h-4') => {
    switch (name) {
      case 'Users': return <Users className={className} />;
      case 'ShieldCheck': return <ShieldCheck className={className} />;
      case 'Compass': return <Compass className={className} />;
      case 'Layers': return <Layers className={className} />;
      default: return <Sparkles className={className} />;
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md border-b border-slate-200 py-3 shadow-sm'
            : 'bg-white/90 backdrop-blur-sm border-b border-slate-100 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between">
            {/* Brand Logo with exact official mark in the top left corner */}
            <button
              onClick={() => handleSubmenuClick('home')}
              className="flex items-center group text-left focus:outline-none hover:opacity-90 transition-opacity"
              aria-label="Kembali ke Beranda"
            >
              <ThriveLogo variant="horizontal" showTagline={true} size="lg" />
            </button>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center space-x-1 xl:space-x-3">
              {/* Home */}
              <button
                onClick={() => handleSubmenuClick('home')}
                className={`px-3 py-2 text-xs uppercase tracking-wider font-semibold transition-all relative rounded-md ${
                  currentPage === 'home'
                    ? 'text-amber-600 font-bold bg-amber-50'
                    : 'text-slate-700 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                Beranda
              </button>

              {/* Services Dropdown with copyright-free visual preview */}
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter('services')}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  onClick={() => handleSubmenuClick('services')}
                  className={`flex items-center gap-1.5 px-3 py-2 text-xs uppercase tracking-wider font-semibold transition-all rounded-md ${
                    currentPage.startsWith('service')
                      ? 'text-amber-600 font-bold bg-amber-50'
                      : 'text-slate-700 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  Layanan & Aktivitas
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      activeDropdown === 'services' ? 'rotate-180 text-amber-600' : 'text-slate-400'
                    }`}
                  />
                </button>

                {/* Rich Submenu Popover with photo cards */}
                {activeDropdown === 'services' && (
                  <div className="absolute top-full left-0 w-[420px] bg-white border border-slate-200 rounded-xl p-3 shadow-xl mt-1 animate-in fade-in slide-in-from-top-2 duration-150">
                    <div className="flex items-center justify-between px-3 py-2 border-b border-slate-100 mb-2">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                        Kategori Layanan Utama
                      </span>
                      <span className="text-[10px] text-amber-700 bg-amber-50 px-2 py-0.5 rounded font-medium">
                        Foto Kegiatan Nyata
                      </span>
                    </div>

                    <div className="space-y-1.5">
                      {SERVICE_SUBMENUS.map((item) => (
                        <button
                          key={item.id}
                          onClick={() => handleSubmenuClick(item.id)}
                          className={`w-full text-left p-2 rounded-lg flex items-center gap-3 transition-colors group ${
                            currentPage === item.id
                              ? 'bg-amber-50 text-amber-900 border border-amber-200'
                              : 'hover:bg-slate-50 text-slate-800'
                          }`}
                        >
                          {/* Mini Thumbnail Image */}
                          <div className="w-14 h-14 rounded-md overflow-hidden shrink-0 bg-slate-100 border border-slate-200 relative">
                            {item.image ? (
                              <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                loading="lazy"
                              />
                            ) : (
                              <div className="w-full h-full flex items-center justify-center text-slate-400">
                                {renderIcon(item.iconName)}
                              </div>
                            )}
                          </div>

                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between">
                              <span className="text-xs font-bold text-slate-900 group-hover:text-amber-600 transition-colors">
                                {item.title}
                              </span>
                              {item.badge && (
                                <span className="text-[9px] uppercase px-1.5 py-0.5 rounded bg-amber-100 text-amber-800 font-semibold font-mono">
                                  {item.badge}
                                </span>
                              )}
                            </div>
                            <p className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
                              {item.tagline}
                            </p>
                          </div>
                        </button>
                      ))}
                    </div>

                    <div className="mt-2 pt-2 border-t border-slate-100 flex justify-between items-center px-2">
                      <button
                        onClick={() => handleSubmenuClick('services')}
                        className="text-xs text-amber-600 font-bold hover:text-amber-700 flex items-center gap-1"
                      >
                        Buka Ringkasan Semua Layanan <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* About Us */}
              <button
                onClick={() => handleSubmenuClick('about')}
                className={`px-3 py-2 text-xs uppercase tracking-wider font-semibold transition-all rounded-md ${
                  currentPage === 'about'
                    ? 'text-amber-600 font-bold bg-amber-50'
                    : 'text-slate-700 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                Tentang Kami
              </button>

              {/* Portfolio */}
              <button
                onClick={() => handleSubmenuClick('portfolio')}
                className={`px-3 py-2 text-xs uppercase tracking-wider font-semibold transition-all rounded-md ${
                  currentPage === 'portfolio'
                    ? 'text-amber-600 font-bold bg-amber-50'
                    : 'text-slate-700 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                Portofolio & Klien
              </button>

              {/* Gallery */}
              <button
                onClick={() => handleSubmenuClick('gallery')}
                className={`px-3 py-2 text-xs uppercase tracking-wider font-semibold transition-all rounded-md ${
                  currentPage === 'gallery'
                    ? 'text-amber-600 font-bold bg-amber-50'
                    : 'text-slate-700 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                Galeri
              </button>
            </div>

            {/* Desktop Action CTAs */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="https://wa.me/6281380908800?text=Halo%20Thrive%20Experience,%20saya%20ingin%20konsultasi%20mengenai%20rencana%20event."
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-slate-600 hover:text-slate-900 flex items-center gap-1.5 px-3 py-2 rounded-md hover:bg-slate-50"
              >
                <PhoneCall className="w-3.5 h-3.5 text-emerald-600" />
                <span>0813-8090-8800</span>
              </a>

              <button
                onClick={() => handleSubmenuClick('contact')}
                className="bg-amber-400 hover:bg-amber-500 text-slate-950 font-display font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded-full transition-all shadow-sm hover:shadow-md flex items-center gap-1.5"
              >
                Minta Proposal <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>

            {/* Mobile Menu Trigger Button */}
            <div className="flex lg:hidden items-center gap-2">
              <button
                onClick={() => handleSubmenuClick('contact')}
                className="bg-amber-400 text-slate-950 font-display font-bold text-xs uppercase tracking-wider px-3.5 py-1.5 rounded-full"
              >
                Proposal
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-slate-700 hover:text-slate-900 rounded-md hover:bg-slate-100 focus:outline-none"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-slate-900/40 backdrop-blur-sm lg:hidden pt-20 animate-in fade-in">
          <div className="bg-white border-b border-slate-200 max-h-[calc(100vh-5rem)] overflow-y-auto p-6 space-y-5 shadow-2xl">
            <div className="space-y-1">
              <button
                onClick={() => handleSubmenuClick('home')}
                className={`w-full text-left py-2.5 px-3 rounded-lg text-sm font-semibold ${
                  currentPage === 'home' ? 'bg-amber-50 text-amber-700 font-bold' : 'text-slate-800'
                }`}
              >
                Beranda
              </button>

              {/* Mobile Services Accordion */}
              <div className="border-t border-slate-100 pt-2">
                <div className="text-xs uppercase font-bold text-slate-400 px-3 py-1 tracking-wider">
                  Layanan & Aktivitas
                </div>
                <div className="grid grid-cols-1 gap-1 mt-1">
                  {SERVICE_SUBMENUS.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => handleSubmenuClick(item.id)}
                      className="w-full text-left p-2.5 rounded-lg flex items-center gap-3 hover:bg-slate-50 transition-colors"
                    >
                      <div className="w-10 h-10 rounded-md overflow-hidden shrink-0 border border-slate-200">
                        {item.image && (
                          <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-xs font-bold text-slate-900">{item.title}</div>
                        <div className="text-[11px] text-slate-500 line-clamp-1">{item.category}</div>
                      </div>
                    </button>
                  ))}
                  <button
                    onClick={() => handleSubmenuClick('services')}
                    className="w-full text-left py-2 px-3 text-xs text-amber-600 font-bold hover:underline"
                  >
                    Buka Ringkasan Semua Layanan →
                  </button>
                </div>
              </div>

              <div className="border-t border-slate-100 pt-2 space-y-1">
                <button
                  onClick={() => handleSubmenuClick('about')}
                  className={`w-full text-left py-2.5 px-3 rounded-lg text-sm font-semibold ${
                    currentPage === 'about' ? 'bg-amber-50 text-amber-700 font-bold' : 'text-slate-800'
                  }`}
                >
                  Tentang Thrive & Leadership
                </button>

                <button
                  onClick={() => handleSubmenuClick('portfolio')}
                  className={`w-full text-left py-2.5 px-3 rounded-lg text-sm font-semibold ${
                    currentPage === 'portfolio' ? 'bg-amber-50 text-amber-700 font-bold' : 'text-slate-800'
                  }`}
                >
                  Portofolio & Klien
                </button>

                <button
                  onClick={() => handleSubmenuClick('gallery')}
                  className={`w-full text-left py-2.5 px-3 rounded-lg text-sm font-semibold ${
                    currentPage === 'gallery' ? 'bg-amber-50 text-amber-700 font-bold' : 'text-slate-800'
                  }`}
                >
                  Galeri Foto & Video
                </button>

                <button
                  onClick={() => handleSubmenuClick('contact')}
                  className={`w-full text-left py-2.5 px-3 rounded-lg text-sm font-semibold ${
                    currentPage === 'contact' ? 'bg-amber-50 text-amber-700 font-bold' : 'text-slate-800'
                  }`}
                >
                  Kontak & Permintaan Proposal
                </button>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200 space-y-3">
              <a
                href="https://wa.me/6281380908800"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-slate-900 text-white font-display font-bold text-xs uppercase tracking-wider py-3 rounded-xl flex items-center justify-center gap-2"
              >
                Chat WhatsApp (0813-8090-8800)
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
