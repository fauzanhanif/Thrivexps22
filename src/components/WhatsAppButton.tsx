import React, { useState } from 'react';
import { MessageCircle, ArrowUpRight } from 'lucide-react';

export const WhatsAppButton: React.FC = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center">
      {/* Tooltip badge */}
      <div
        className={`hidden sm:flex items-center gap-2 mr-3 bg-white text-slate-900 border border-slate-200 text-xs px-4 py-2.5 rounded-full shadow-xl transition-all duration-200 ${
          hovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2 pointer-events-none'
        }`}
      >
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
        <span className="font-semibold text-slate-900">Chat EO Specialist (0813-8090-8800)</span>
        <ArrowUpRight className="w-3.5 h-3.5 text-amber-600" />
      </div>

      {/* Main Button */}
      <a
        href="https://wa.me/6281380908800?text=Halo%20Thrive%20Experience,%20saya%20ingin%20konsultasi%20mengenai%20rencana%20event%20gathering/outbound/adventure%20kami."
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="w-14 h-14 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 group"
        aria-label="Chat with WhatsApp"
      >
        <MessageCircle className="w-7 h-7 text-white group-hover:scale-110 transition-transform" />
      </a>
    </div>
  );
};
