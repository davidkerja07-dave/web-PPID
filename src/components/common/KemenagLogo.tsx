import React from 'react';

interface KemenagLogoProps {
  className?: string;
  size?: number;
}

export const KemenagLogo: React.FC<KemenagLogoProps> = ({ className = '', size = 42 }) => {
  return (
    <img
      src="/assets/aistudio/Logo_Kemenag_7bf78457.webp"
      alt="Logo Kementerian Agama Republik Indonesia"
      width={size}
      height={size}
      style={{ width: size, height: size }}
      className={`shrink-0 object-contain drop-shadow-sm select-none ${className}`}
      referrerPolicy="no-referrer"
    />
  );
};
