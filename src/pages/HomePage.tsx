import React from 'react';
import { PageType } from '../types';
import { 
  ArrowUpRight, 
  Users, 
  ShieldCheck, 
  Compass, 
  Layers, 
  MapPin, 
  CheckCircle2, 
  Star, 
  Sparkles,
  PhoneCall
} from 'lucide-react';
import { SERVICE_SUBMENUS, CLIENT_LOGOS } from '../data/thriveData';
import { ThriveLogo } from '../components/ThriveLogo';

interface HomePageProps {
  onNavigate: (page: PageType) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* 1. HERO SECTION (Bright, Fresh & Airy) */}
      <section className="relative min-h-[90vh] flex flex-col justify-center pt-32 pb-20 overflow-hidden bg-gradient-to-b from-amber-50/50 via-white to-slate-50/50 border-b border-slate-200">
        {/* Subtle geometric dot matrix */}
        <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px]" />
          <div className="absolute top-20 right-10 w-96 h-96 bg-amber-200/30 rounded-full blur-3xl pointer-events-none" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Headline & Intro */}
            <div className="lg:col-span-7">
              {/* Eyebrow badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-amber-300 bg-amber-50 text-amber-800 text-xs uppercase tracking-wider font-semibold mb-6 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                Corporate Event • Gathering • Team Building • Adventure
              </div>

              {/* Headline */}
              <h1 className="font-display font-bold text-4xl sm:text-6xl md:text-7xl tracking-tight text-slate-900 uppercase leading-[0.98]">
                We Don't Just Organize Events<span className="text-amber-500">.</span>
                <br />
                <span className="text-slate-500">We Create</span>{' '}
                <span className="text-slate-900 underline decoration-amber-400 decoration-4 underline-offset-8">
                  Experiences
                </span>
                <span className="text-amber-500">.</span>
              </h1>

              {/* Subtitle */}
              <p className="mt-6 text-lg sm:text-xl text-slate-600 font-normal leading-relaxed max-w-2xl">
                THRIVE EXPERIENCE membantu perusahaan, instansi, dan kelompok menciptakan kegiatan yang terencana, profesional, kreatif, dan berkesan mendalam di seluruh Indonesia.
              </p>

              {/* Official Brand Tagline Bar */}
              <div className="mt-6 inline-flex items-center gap-3 py-2.5 px-4 bg-white border border-slate-200 rounded-xl shadow-xs">
                <span className="text-[11px] uppercase font-mono text-slate-400 font-bold">Brand Tagline:</span>
                <div className="text-xs font-black tracking-[0.2em] text-slate-900 uppercase flex items-center gap-2">
                  <span>CREATE</span>
                  <span className="text-amber-500 font-black">•</span>
                  <span>CONNECT</span>
                  <span className="text-amber-500 font-black">•</span>
                  <span>GROW</span>
                </div>
              </div>

              {/* Hero CTAs */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onNavigate('contact')}
                  className="inline-flex items-center gap-2.5 bg-amber-400 hover:bg-amber-500 text-slate-950 font-display font-bold text-sm uppercase tracking-wider px-8 py-4 rounded-full transition-all duration-200 shadow-md hover:shadow-lg hover:scale-[1.02]"
                >
                  Rencanakan Event Anda <ArrowUpRight className="w-5 h-5" />
                </button>

                <button
                  onClick={() => onNavigate('services')}
                  className="inline-flex items-center gap-2 border border-slate-300 hover:border-slate-400 bg-white hover:bg-slate-50 text-slate-800 font-display font-semibold text-sm uppercase tracking-wider px-7 py-4 rounded-full transition-all duration-200 shadow-sm"
                >
                  Lihat Layanan & Aktivitas <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Column: Full Official Logo Display Card */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-md bg-white border border-slate-200 hover:border-amber-400 rounded-3xl p-8 sm:p-10 shadow-xl shadow-slate-200/50 relative overflow-hidden transition-all duration-300">
                <div className="absolute top-0 right-0 w-44 h-44 bg-amber-100/60 rounded-full blur-3xl pointer-events-none" />
                <div className="relative z-10">
                  <ThriveLogo variant="full" />
                </div>
              </div>
            </div>
          </div>

          {/* Hero Bottom Meta info */}
          <div className="mt-16 pt-8 border-t border-slate-200 flex flex-col md:flex-row md:items-center justify-between gap-6 text-xs uppercase tracking-wider text-slate-500">
            <div className="flex items-center gap-2 font-medium text-slate-700">
              <MapPin className="w-4 h-4 text-amber-600" />
              <span>Bogor, Jawa Barat — Melayani Jabodetabek, Jabar & Seluruh Indonesia</span>
            </div>
            <div className="flex items-center gap-4 font-semibold">
              <span className="text-slate-900">Create</span>
              <span className="text-amber-500">•</span>
              <span className="text-slate-900">Connect</span>
              <span className="text-amber-500">•</span>
              <span className="text-slate-900">Grow</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STATS BAR (Clean & High Contrast) */}
      <section className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="border-l-2 border-amber-400 pl-4">
              <div className="font-display font-bold text-3xl sm:text-4xl text-white">500+</div>
              <p className="text-xs uppercase tracking-wider text-slate-400 mt-1">Acara Terselenggara</p>
            </div>
            <div className="border-l-2 border-amber-400 pl-4">
              <div className="font-display font-bold text-3xl sm:text-4xl text-amber-400">45.000+</div>
              <p className="text-xs uppercase tracking-wider text-slate-400 mt-1">Peserta Berdaya</p>
            </div>
            <div className="border-l-2 border-amber-400 pl-4">
              <div className="font-display font-bold text-3xl sm:text-4xl text-white">99.4%</div>
              <p className="text-xs uppercase tracking-wider text-slate-400 mt-1">Tingkat Kepuasan</p>
            </div>
            <div className="border-l-2 border-amber-400 pl-4">
              <div className="font-display font-bold text-3xl sm:text-4xl text-amber-400">100%</div>
              <p className="text-xs uppercase tracking-wider text-slate-400 mt-1">Kru Lapangan Tersertifikasi</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. BRAND PHILOSOPHY: CREATE - CONNECT - GROW */}
      <section className="py-24 border-b border-slate-200 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-[0.25em] text-amber-700 font-bold block mb-3">
              Filosofi & Keyakinan Kami
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-5xl text-slate-900 uppercase leading-tight">
              Sebuah event lebih dari sekadar susunan rundown jadwal.
            </h2>
            <p className="mt-5 text-slate-600 text-base sm:text-lg leading-relaxed">
              Kami percaya event adalah sarana transformatif. Sebuah kesempatan berharga untuk merajut kedekatan emosional, menumbuhkan kepercayaan tim, menyalakan gairah kerja, dan mencetak kenangan hangat yang terus diingat.
            </p>
          </div>

          {/* 3 Pillars in Clean Card Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="bg-white border border-slate-200 p-8 rounded-2xl shadow-sm hover:shadow-md hover:border-amber-400 transition-all duration-200 group">
              <span className="font-display font-bold text-4xl text-slate-200 group-hover:text-amber-500 transition-colors">
                01
              </span>
              <h3 className="font-display font-bold text-2xl text-slate-900 mt-3 group-hover:text-amber-700 transition-colors">
                CREATE
              </h3>
              <p className="text-sm text-slate-600 mt-3 leading-relaxed">
                Menciptakan konsep orisinil, narasi acara yang kuat, dan skenario aktivitas yang dirancang selaras dengan karakter audiens organisasi Anda.
              </p>
            </div>

            <div className="bg-white border border-slate-200 p-8 rounded-2xl shadow-sm hover:shadow-md hover:border-amber-400 transition-all duration-200 group">
              <span className="font-display font-bold text-4xl text-slate-200 group-hover:text-amber-500 transition-colors">
                02
              </span>
              <h3 className="font-display font-bold text-2xl text-slate-900 mt-3 group-hover:text-amber-700 transition-colors">
                CONNECT
              </h3>
              <p className="text-sm text-slate-600 mt-3 leading-relaxed">
                Menghubungkan orang lewat kebersamaan nyata di luar kantor, meruntuhkan batasan hierarki, dan membangun rasa saling percaya tanpa rasa canggung.
              </p>
            </div>

            <div className="bg-white border border-slate-200 p-8 rounded-2xl shadow-sm hover:shadow-md hover:border-amber-400 transition-all duration-200 group">
              <span className="font-display font-bold text-4xl text-slate-200 group-hover:text-amber-500 transition-colors">
                03
              </span>
              <h3 className="font-display font-bold text-2xl text-slate-900 mt-3 group-hover:text-amber-700 transition-colors">
                GROW
              </h3>
              <p className="text-sm text-slate-600 mt-3 leading-relaxed">
                Mendorong setiap individu dan divisi untuk bertumbuh bersama, memperkuat resiliensi, dan kembali ke tempat kerja dengan energi yang berlipat ganda.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CORE SERVICES & SUB-MENUS SHOWCASE WITH COPYRIGHT-FREE PHOTOS */}
      <section className="py-24 border-b border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <div>
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-amber-700 font-bold mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                Layanan & Aktivitas Utama
              </div>
              <h2 className="font-display font-bold text-3xl sm:text-5xl text-slate-900 uppercase">
                Pilih Kategori Pengalaman Anda
              </h2>
            </div>
            <p className="mt-4 md:mt-0 text-slate-500 text-sm max-w-md">
              Klik pada sub-layanan di bawah untuk membuka halaman rincian lengkap, dokumentasi foto bebas royalti, simulasi rundown, dan konsultasi.
            </p>
          </div>

          {/* 4 Cards Grid with Real Copyright-Free Photos */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SERVICE_SUBMENUS.map((service, idx) => (
              <div
                key={service.id}
                onClick={() => onNavigate(service.id)}
                className="bg-white border border-slate-200 hover:border-amber-400 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer group flex flex-col justify-between"
              >
                {/* Photo Banner */}
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-100">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                  
                  {/* Top floating badge */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="text-xs uppercase font-mono tracking-wider px-3 py-1 bg-white/90 backdrop-blur-md text-slate-900 font-bold rounded-full shadow-sm">
                      0{idx + 1} // {service.category}
                    </span>
                    {service.badge && (
                      <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-amber-400 text-slate-950 font-mono shadow-sm">
                        {service.badge}
                      </span>
                    )}
                  </div>

                  {/* Title overlay on bottom of image */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="font-display font-bold text-xl sm:text-2xl text-white group-hover:text-amber-300 transition-colors drop-shadow-sm">
                      {service.title}
                    </h3>
                  </div>
                </div>

                {/* Card Content Description */}
                <div className="p-6 sm:p-8 flex flex-col justify-between flex-1">
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {service.tagline}
                  </p>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs font-semibold text-amber-700 group-hover:text-amber-800 transition-colors">
                      Buka Rincian & Dokumentasi Foto
                    </span>
                    <div className="w-9 h-9 rounded-full bg-amber-100 group-hover:bg-amber-400 text-amber-900 group-hover:text-slate-950 flex items-center justify-center transition-all">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={() => onNavigate('services')}
              className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-display font-bold text-xs uppercase tracking-wider px-8 py-3.5 rounded-full transition-colors shadow-sm"
            >
              Lihat Halaman Lengkap Semua Layanan <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 5. 5-STEP EXECUTION FRAMEWORK */}
      <section className="py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs uppercase tracking-[0.25em] text-amber-700 font-bold block mb-3">
            Standar Eksekusi Profesional
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-5xl text-slate-900 uppercase mb-16">
            5 Tahap Eksekusi Tanpa Celah
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            <div className="bg-white border border-slate-200 p-6 rounded-xl shadow-sm">
              <span className="text-xs font-mono text-amber-600 font-bold block mb-2">TAHAP 01</span>
              <h3 className="font-display font-bold text-lg text-slate-900 mb-2">Listen</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Mendengarkan sasaran strategis, ekspektasi manajemen, profil peserta, dan batasan anggaran perusahaan.
              </p>
            </div>

            <div className="bg-white border border-slate-200 p-6 rounded-xl shadow-sm">
              <span className="text-xs font-mono text-amber-600 font-bold block mb-2">TAHAP 02</span>
              <h3 className="font-display font-bold text-lg text-slate-900 mb-2">Create</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Menyusun konsep tematik, dinamika permainan, visual panggung 3D, dan narasi acara yang menyentuh.
              </p>
            </div>

            <div className="bg-white border border-slate-200 p-6 rounded-xl shadow-sm">
              <span className="text-xs font-mono text-amber-600 font-bold block mb-2">TAHAP 03</span>
              <h3 className="font-display font-bold text-lg text-slate-900 mb-2">Plan</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Mengunci venue, akomodasi, katering, perizinan, sound lighting, serta simulasi kontinjensi darurat.
              </p>
            </div>

            <div className="bg-white border border-slate-200 p-6 rounded-xl shadow-sm">
              <span className="text-xs font-mono text-amber-600 font-bold block mb-2">TAHAP 04</span>
              <h3 className="font-display font-bold text-lg text-slate-900 mb-2">Execute</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Show director, stage manager, fasilitator, dan tim medis mengawal kelancaran acara detik demi detik.
              </p>
            </div>

            <div className="bg-white border border-slate-200 p-6 rounded-xl shadow-sm">
              <span className="text-xs font-mono text-amber-600 font-bold block mb-2">TAHAP 05</span>
              <h3 className="font-display font-bold text-lg text-slate-900 mb-2">Evaluate</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Penyampaian video aftermovie, arsip foto resolusi tinggi, dan laporan observasi dinamika tim untuk HRD.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CLIENT LOGOS & TRUST */}
      <section className="py-20 border-b border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs uppercase tracking-[0.25em] text-slate-400 font-bold block mb-8">
            Dipercaya Oleh Perusahaan Terkemuka di Seluruh Indonesia
          </span>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 items-center">
            {CLIENT_LOGOS.map((client, i) => (
              <div
                key={i}
                className="p-4 border border-slate-200 bg-slate-50 rounded-xl text-xs font-semibold text-slate-700 hover:text-amber-700 hover:border-amber-300 transition-all shadow-xs"
              >
                {client}
              </div>
            ))}
          </div>

          <div className="mt-12">
            <button
              onClick={() => onNavigate('portfolio')}
              className="text-xs uppercase tracking-wider text-amber-700 font-bold hover:underline inline-flex items-center gap-1.5"
            >
              Lihat Studi Kasus Proyek Sebelumnya <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 7. TESTIMONIALS */}
      <section className="py-24 border-b border-slate-200 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.25em] text-amber-700 font-bold block mb-3">
              Ulasan & Kepuasan Klien
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 uppercase">
              Apa Kata Klien Kami
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white border border-slate-200 p-8 rounded-2xl shadow-sm">
              <div className="flex text-amber-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-sm text-slate-700 leading-relaxed italic">
                "Thrive Experience sangat profesional. Koordinasi 450 orang karyawan kami berjalan tanpa cela, makanan lezat, dan panggung gala dinner-nya setara konser musik besar."
              </p>
              <div className="mt-6 pt-4 border-t border-slate-100">
                <div className="font-display font-bold text-slate-900 text-sm">Bambang S.</div>
                <div className="text-xs text-slate-500">Human Capital Director — Manufaktur Otomotif</div>
              </div>
            </div>

            <div className="bg-white border border-slate-200 p-8 rounded-2xl shadow-sm">
              <div className="flex text-amber-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-sm text-slate-700 leading-relaxed italic">
                "Games team building-nya berbobot dan bukan cuma sekadar lelucon fisik. Debrief fasilitatornya sangat tajam mengupas masalah komunikasi antar cabang."
              </p>
              <div className="mt-6 pt-4 border-t border-slate-100">
                <div className="font-display font-bold text-slate-900 text-sm">Dina Rahmawati</div>
                <div className="text-xs text-slate-500">People Development Head — Perbankan Nasional</div>
              </div>
            </div>

            <div className="bg-white border border-slate-200 p-8 rounded-2xl shadow-sm">
              <div className="flex text-amber-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-sm text-slate-700 leading-relaxed italic">
                "Rafting di Citarik dan offroad 4x4-nya luar biasa seru! Tim safety standby ketat, fotografernya jago ambil momen aksi berkecepatan tinggi."
              </p>
              <div className="mt-6 pt-4 border-t border-slate-100">
                <div className="font-display font-bold text-slate-900 text-sm">Fajar Nugraha</div>
                <div className="text-xs text-slate-500">Lead Architect — Tech Unicorn Indonesia</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. BOTTOM CALL TO ACTION BANNER */}
      <section className="py-20 bg-amber-400 text-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display font-bold text-4xl sm:text-6xl uppercase tracking-tight">
            Siap Memulai Acara Anda?
          </h2>
          <p className="mt-4 text-slate-900 text-lg max-w-xl mx-auto font-medium">
            Konsultasikan ide, sasaran acara, dan estimasi peserta Anda bersama kami. Tim Thrive siap memberikan rekomendasi konsep dan proposal resmi.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button
              onClick={() => onNavigate('contact')}
              className="bg-slate-950 hover:bg-slate-900 text-white font-display font-bold text-sm uppercase tracking-wider px-8 py-4 rounded-full transition-all shadow-md hover:scale-105 flex items-center gap-2"
            >
              Mulai Konsultasi Acara <ArrowUpRight className="w-5 h-5" />
            </button>
            <a
              href="https://wa.me/6281380908800?text=Halo%20Thrive%20Experience,%20saya%20ingin%20berdiskusi%20mengenai%20acara."
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-slate-950 bg-transparent hover:bg-slate-950 text-slate-950 hover:text-white font-display font-bold text-sm uppercase tracking-wider px-8 py-4 rounded-full transition-colors flex items-center gap-2"
            >
              Hubungi WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
