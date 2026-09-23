import React, { useState } from 'react';

interface ThriveLogoProps {
  variant?: 'full' | 'horizontal' | 'mark' | 'compact';
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showTagline?: boolean;
}

export const ThriveLogo: React.FC<ThriveLogoProps> = ({
  variant = 'horizontal',
  className = '',
  size = 'md',
  showTagline = true
}) => {
  const [imgError, setImgError] = useState(false);

  // Dynamically resolve base URL for GitHub Pages / sub-path hosting
  const baseUrl = import.meta.env.BASE_URL || './';
  const prefix = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`;
  const markSrc = `${prefix}thrive-mark.png`;
  const logoSrc = `${prefix}thrive-logo.png`;

  // Fallback SVG if image is somehow missing
  const FallbackMarkSvg = ({ s = 44 }: { s?: number }) => (
    <svg
      width={s}
      height={s}
      viewBox="0 0 160 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0"
    >
      <defs>
        <linearGradient id="fallbackGoldGrad" x1="20" y1="140" x2="150" y2="20" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#F59E0B" />
          <stop offset="50%" stopColor="#FBBF24" />
          <stop offset="100%" stopColor="#F59E0B" />
        </linearGradient>
      </defs>
      <path d="M24 16 L88 16 L88 42 L64 42 L64 74 C58 92 50 114 44 136 L72 136 L68 148 L40 134 C44 110 52 86 58 64 L36 64 L24 40 L44 40 Z" fill="#000000" />
      <path d="M62 60 L78 60 L62 136 L48 132 C52 110 58 84 62 60 Z" fill="#000000" />
      <path d="M38 134 C42 98 62 62 94 36 C114 20 138 12 152 10 C136 24 116 44 98 76 C82 104 74 130 72 144 C66 142 46 138 38 134 Z" fill="url(#fallbackGoldGrad)" />
      <path d="M92 48 L114 136 L130 46 L94 46 Z" fill="url(#fallbackGoldGrad)" />
    </svg>
  );

  // 1. MARK ONLY (Top stylized T emblem)
  if (variant === 'mark') {
    const dim = size === 'sm' ? 32 : size === 'lg' ? 60 : size === 'xl' ? 96 : 44;
    return (
      <div className={`inline-flex items-center justify-center ${className}`}>
        {!imgError ? (
          <img
            src={markSrc}
            alt="Thrive Mark"
            style={{ height: dim, width: 'auto' }}
            className="object-contain"
            onError={() => setImgError(true)}
          />
        ) : (
          <FallbackMarkSvg s={dim} />
        )}
      </div>
    );
  }

  // 2. HORIZONTAL (Optimal for Navigation Header / Top Left Corner)
  if (variant === 'horizontal') {
    const markHeight = size === 'sm' ? 34 : size === 'lg' ? 52 : 42;
    return (
      <div className={`flex items-center gap-3 sm:gap-3.5 select-none ${className}`}>
        {/* Genuine Icon Mark directly from uploaded logo */}
        {!imgError ? (
          <img
            src={markSrc}
            alt="Thrive Experience Emblem"
            style={{ height: markHeight, width: 'auto' }}
            className="object-contain drop-shadow-xs shrink-0 transition-transform duration-200 group-hover:scale-105"
            onError={() => setImgError(true)}
          />
        ) : (
          <FallbackMarkSvg s={markHeight} />
        )}

        {/* Official Typography Lockup */}
        <div className="flex flex-col justify-center">
          <div className="flex items-baseline gap-1.5 sm:gap-2">
            <span className="font-display font-black text-slate-950 tracking-tight text-xl sm:text-2xl leading-none">
              THRIVE
            </span>
            <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.28em] font-bold text-amber-600 font-sans">
              EXPERIENCE
            </span>
          </div>

          {showTagline && (
            <div className="flex items-center gap-1 sm:gap-1.5 mt-1 text-[8px] sm:text-[9.5px] uppercase tracking-[0.2em] font-bold text-slate-700">
              <span>CREATE</span>
              <span className="text-amber-500 font-black">•</span>
              <span>CONNECT</span>
              <span className="text-amber-500 font-black">•</span>
              <span>GROW</span>
            </div>
          )}
        </div>
      </div>
    );
  }

  // 3. COMPACT
  if (variant === 'compact') {
    return (
      <div className={`flex items-center gap-2 ${className}`}>
        <img
          src={markSrc}
          alt="Thrive Mark"
          className="h-7 w-auto object-contain"
        />
        <div className="flex flex-col">
          <span className="font-display font-black text-slate-950 text-sm leading-none">
            THRIVE
          </span>
          <span className="text-[7.5px] uppercase tracking-[0.2em] font-bold text-amber-600">
            CREATE • CONNECT • GROW
          </span>
        </div>
      </div>
    );
  }

  // 4. FULL OFFICIAL LOGO IMAGE (Exact 1:1 image from the user's uploaded asset)
  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <img
        src={logoSrc}
        alt="THRIVE EXPERIENCE - EVENT • GATHERING • TEAM BUILDING • ADVENTURE - CREATE • CONNECT • GROW"
        className="w-full h-auto max-w-[320px] sm:max-w-[380px] object-contain rounded-xl select-none"
      />
    </div>
  );
};
