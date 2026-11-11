import React from 'react';

interface KemenagLogoProps {
  className?: string;
  size?: number;
}

export const KemenagLogo: React.FC<KemenagLogoProps> = ({ className = '', size = 42 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 drop-shadow-sm ${className}`}
      aria-label="Logo Kementerian Agama Republik Indonesia"
    >
      {/* Outer Pentagon / Perisai Segilima */}
      <polygon
        points="50,4 96,26 80,92 20,92 4,26"
        fill="#047857"
        stroke="#F59E0B"
        strokeWidth="3.5"
      />

      {/* Inner Pentagon Border */}
      <polygon
        points="50,11 88,30 74,86 26,86 12,30"
        fill="#065F46"
        stroke="#FCD34D"
        strokeWidth="1.5"
      />

      {/* Central Star (Bintang Emas) */}
      <polygon
        points="50,17 53,26 62,26 55,32 58,40 50,35 42,40 45,32 38,26 47,26"
        fill="#FBBF24"
        stroke="#D97706"
        strokeWidth="0.8"
      />

      {/* Scales Pillar (Tiang Keadilan) */}
      <rect x="48.5" y="38" width="3" height="34" fill="#FBBF24" rx="1.5" />
      <line x1="31" y1="44" x2="69" y2="44" stroke="#FBBF24" strokeWidth="2.5" strokeLinecap="round" />

      {/* Left Scale Pan */}
      <line x1="31" y1="44" x2="25" y2="54" stroke="#FCD34D" strokeWidth="1.2" />
      <line x1="31" y1="44" x2="37" y2="54" stroke="#FCD34D" strokeWidth="1.2" />
      <path d="M22 54 C22 58, 40 58, 40 54 Z" fill="#FBBF24" />

      {/* Right Scale Pan */}
      <line x1="69" y1="44" x2="63" y2="54" stroke="#FCD34D" strokeWidth="1.2" />
      <line x1="69" y1="44" x2="75" y2="54" stroke="#FCD34D" strokeWidth="1.2" />
      <path d="M60 54 C60 58, 78 58, 78 54 Z" fill="#FBBF24" />

      {/* Open Book / Kitab Suci */}
      <path
        d="M32 68 Q50 64 50 71 Q50 64 68 68 L68 76 Q50 72 50 78 Q50 72 32 76 Z"
        fill="#FFFFFF"
        stroke="#047857"
        strokeWidth="1"
      />

      {/* Quill Pen / Pena */}
      <path
        d="M48 57 L52 57 L51 68 L49 68 Z"
        fill="#F59E0B"
      />

      {/* Ribbon Banner at Bottom */}
      <path
        d="M22 83 Q50 79 78 83 L75 88 Q50 84 25 88 Z"
        fill="#FBBF24"
        stroke="#D97706"
        strokeWidth="0.8"
      />
      <text
        x="50"
        y="86.5"
        textAnchor="middle"
        fontSize="4.2"
        fontFamily="sans-serif"
        fontWeight="bold"
        fill="#065F46"
        letterSpacing="0.8"
      >
        IKHLAS BERAMAL
      </text>
    </svg>
  );
};
