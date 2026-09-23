import React, { useState, useEffect } from 'react';
import { PageType } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { HomePage } from './pages/HomePage';
import { ServicesIndexPage } from './pages/ServicesIndexPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { AboutPage } from './pages/AboutPage';
import { PortfolioPage } from './pages/PortfolioPage';
import { GalleryPage } from './pages/GalleryPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>(() => {
    // Read URL search params or hash on initial load
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      const pageParam = urlParams.get('page') as PageType;
      if (pageParam && isValidPage(pageParam)) return pageParam;

      const hash = window.location.hash.replace('#', '') as PageType;
      if (hash && isValidPage(hash)) return hash;
    }
    return 'home';
  });

  function isValidPage(p: string): p is PageType {
    const validPages: PageType[] = [
      'home',
      'about',
      'services',
      'service-gathering',
      'service-teambuilding',
      'service-adventure',
      'service-production',
      'portfolio',
      'gallery',
      'contact'
    ];
    return validPages.includes(p as PageType);
  }

  // Handle browser back and forward navigation
  useEffect(() => {
    const handlePopState = () => {
      const urlParams = new URLSearchParams(window.location.search);
      const pageParam = urlParams.get('page') as PageType;
      if (pageParam && isValidPage(pageParam)) {
        setCurrentPage(pageParam);
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }

      const hash = window.location.hash.replace('#', '') as PageType;
      if (hash && isValidPage(hash)) {
        setCurrentPage(hash);
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }

      setCurrentPage('home');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = (page: PageType) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Update browser history URL
    try {
      const url = new URL(window.location.href);
      if (page === 'home') {
        url.searchParams.delete('page');
        window.history.pushState({}, '', url.pathname);
      } else {
        url.searchParams.set('page', page);
        window.history.pushState({}, '', url.toString());
      }
    } catch {
      window.location.hash = page;
    }
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={navigateTo} />;

      case 'services':
        return <ServicesIndexPage onNavigate={navigateTo} />;

      case 'service-gathering':
      case 'service-teambuilding':
      case 'service-adventure':
      case 'service-production':
        return <ServiceDetailPage pageId={currentPage} onNavigate={navigateTo} />;

      case 'about':
        return <AboutPage onNavigate={navigateTo} />;

      case 'portfolio':
        return <PortfolioPage onNavigate={navigateTo} />;

      case 'gallery':
        return <GalleryPage onNavigate={navigateTo} />;

      case 'contact':
        return <ContactPage onNavigate={navigateTo} />;

      default:
        return <HomePage onNavigate={navigateTo} />;
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-amber-300 selection:text-slate-950">
      {/* Modern Light Minimalist Navbar with Submenus */}
      <Navbar currentPage={currentPage} onNavigate={navigateTo} />

      {/* Main Dynamic Page Content */}
      <main className="flex-1">
        {renderCurrentPage()}
      </main>

      {/* Modern Light Minimalist Footer */}
      <Footer onNavigate={navigateTo} />

      {/* Direct WhatsApp Consultation CTA */}
      <WhatsAppButton />
    </div>
  );
}
