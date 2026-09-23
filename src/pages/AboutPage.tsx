import React from 'react';
import { PageType } from '../types';
import { 
  ArrowLeft, 
  ArrowUpRight, 
  ShieldCheck, 
  HeartHandshake, 
  Users, 
  Compass, 
  Award, 
  CheckCircle2, 
  MapPin, 
  Sparkles 
} from 'lucide-react';
import { ThriveLogo } from '../components/ThriveLogo';

interface AboutPageProps {
  onNavigate: (page: PageType) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
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
            <span className="text-amber-700 font-bold">Tentang Thrive Experience</span>
          </div>

          <button
            onClick={() => onNavigate('home')}
            className="inline-flex items-center gap-2 text-slate-600 hover:text-amber-600 transition-colors font-semibold"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Kembali
          </button>
        </div>

        {/* Hero with Brand Identity Spotlight */}
        <div className="py-16 border-b border-slate-200">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-amber-700 font-bold mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                Profil Perusahaan & Nilai Dasar
              </div>
              <h1 className="font-display font-bold text-4xl sm:text-6xl text-slate-900 uppercase tracking-tight leading-tight">
                THRIVE Berarti Bertumbuh<span className="text-amber-500">.</span>
              </h1>
              <p className="mt-6 text-slate-600 text-lg sm:text-xl leading-relaxed">
                THRIVE EXPERIENCE adalah perusahaan Event Organizer & Experience Management yang berbasis di Bogor, Jawa Barat. Kami hadir untuk membuktikan bahwa event bukan sekadar seremonial formalitas, melainkan katalis utama bagi tim untuk berkembang, memperkuat rasa saling percaya, dan melompat lebih tinggi.
              </p>

              {/* Tagline Box */}
              <div className="mt-8 p-5 bg-white border border-slate-200 rounded-2xl shadow-xs">
                <span className="text-xs uppercase font-mono text-amber-700 font-bold block mb-1">
                  Motto & Tagline Resmi:
                </span>
                <div className="text-sm sm:text-base font-black tracking-[0.22em] text-slate-950 uppercase flex items-center gap-2">
                  <span>CREATE</span>
                  <span className="text-amber-500 font-bold">•</span>
                  <span>CONNECT</span>
                  <span className="text-amber-500 font-bold">•</span>
                  <span>GROW</span>
                </div>
                <p className="text-xs text-slate-500 mt-2">
                  <strong>Create:</strong> Menciptakan konsep orisinil & berkesan. <strong>Connect:</strong> Mempererat ikatan emosional dan sinergi antar-peserta. <strong>Grow:</strong> Mendorong pertumbuhan karakter individu dan performa organisasi.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center">
              <div className="bg-white border border-slate-200 p-8 sm:p-10 rounded-3xl shadow-lg w-full max-w-sm flex flex-col items-center">
                <ThriveLogo variant="full" />
              </div>
            </div>
          </div>
        </div>

        {/* Leadership Bios */}
        <div className="py-20 border-b border-slate-200">
          <span className="text-xs uppercase tracking-[0.25em] text-amber-700 font-bold block mb-10">
            Pimpinan & Pendiri Thrive Experience
          </span>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Founder 1 */}
            <div className="bg-white border border-slate-200 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-amber-400 text-slate-950 font-display font-black text-2xl flex items-center justify-center shadow-inner">
                  RS
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-slate-900">
                    Mohamad Rifki Sopyan Sauri
                  </h3>
                  <p className="text-xs uppercase font-mono text-amber-700 font-bold tracking-wider mt-0.5">
                    Founder & Managing Director
                  </p>
                </div>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">
                Berpengalaman lebih dari 8 tahun dalam manajemen event outdoor, perancangan simulasi experiential learning, dan eksekusi ratusan agenda korporasi skala nasional. Rifki memimpin visi Thrive untuk menghadirkan event yang tidak hanya tertib secara operasional, namun juga membawa transformasi emosional positif bagi peserta.
              </p>
            </div>

            {/* Founder 2 */}
            <div className="bg-white border border-slate-200 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-slate-900 text-white font-display font-black text-2xl flex items-center justify-center shadow-inner">
                  IN
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-slate-900">
                    Ibu Indri
                  </h3>
                  <p className="text-xs uppercase font-mono text-amber-700 font-bold tracking-wider mt-0.5">
                    Co-Founder & Operational Director
                  </p>
                </div>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">
                Mengawasi ketepatan alur kerja, standar hospitality, perizinan, dan kepuasan klien. Dengan dedikasi tinggi pada manajemen logistik dan detail keselamatan, Ibu Indri memastikan setiap acara yang dipercayakan kepada Thrive terlaksana dengan standar kebersihan, kelezatan katering, dan kenyamanan tertinggi.
              </p>
            </div>
          </div>
        </div>

        {/* 4 Core Corporate Values */}
        <div className="py-20 border-b border-slate-200">
          <span className="text-xs uppercase tracking-[0.25em] text-amber-700 font-bold block mb-4">
            Our Core Values
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 uppercase mb-12">
            Pilar Nilai Layanan Thrive
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white border border-slate-200 p-6 rounded-xl shadow-xs">
              <ShieldCheck className="w-8 h-8 text-amber-500 mb-4" />
              <h3 className="font-display font-bold text-lg text-slate-900 mb-2">Safety First</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Nol kompromi dalam keselamatan. Seluruh instruktur dan peralatan outdoor kami memiliki sertifikasi resmi dan standar protokol rescue terlatih.
              </p>
            </div>

            <div className="bg-white border border-slate-200 p-6 rounded-xl shadow-xs">
              <Sparkles className="w-8 h-8 text-amber-500 mb-4" />
              <h3 className="font-display font-bold text-lg text-slate-900 mb-2">Creativity</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Menolak konsep klise membosankan. Kami meracik skenario visual, tata panggung, dan dinamika interaksi yang segar serta relevan dengan zaman.
              </p>
            </div>

            <div className="bg-white border border-slate-200 p-6 rounded-xl shadow-xs">
              <HeartHandshake className="w-8 h-8 text-amber-500 mb-4" />
              <h3 className="font-display font-bold text-lg text-slate-900 mb-2">Total Empathy</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Kami mendengarkan dengan tulus kekhawatiran panitia internal, menyelaraskan ekspektasi anggaran dengan hasil yang melampaui harapan.
              </p>
            </div>

            <div className="bg-white border border-slate-200 p-6 rounded-xl shadow-xs">
              <Award className="w-8 h-8 text-amber-500 mb-4" />
              <h3 className="font-display font-bold text-lg text-slate-900 mb-2">Accountability</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Transparansi penuh dalam penawaran biaya tanpa biaya tersembunyi. Tepat waktu, tepat sasaran, dan akuntabel hingga laporan akhir.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Contact CTA */}
        <div className="pt-20 text-center max-w-2xl mx-auto">
          <h2 className="font-display font-bold text-3xl text-slate-900 uppercase">
            Ingin Berkolaborasi Bersama Kami?
          </h2>
          <p className="mt-4 text-slate-600 text-sm leading-relaxed">
            Tim konsultan acara Thrive siap berdiskusi tatap muka di kantor Anda atau via Google Meet untuk mendengarkan visi acara mendatang.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <button
              onClick={() => onNavigate('contact')}
              className="bg-amber-400 hover:bg-amber-500 text-slate-950 font-display font-bold text-xs uppercase tracking-wider px-8 py-3.5 rounded-full transition-colors flex items-center gap-2 shadow-sm"
            >
              Hubungi Kami Sekarang <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
