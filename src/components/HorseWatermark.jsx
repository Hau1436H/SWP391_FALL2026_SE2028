import React from 'react';
import horseBg from '../assets/HorseBG.png';

/**
 * Background artistic horse illustration watermark matching the Figma design
 */
export default function HorseWatermark({
  className = '',
  opacity = 'opacity-85',
}) {
  return (
    <div
      className={`absolute right-0 bottom-0 pointer-events-none select-none z-0 overflow-hidden flex items-end justify-end w-[75%] sm:w-[65%] md:w-[55%] lg:w-[48%] max-w-5xl ${className}`}
      aria-hidden="true"
    >
      <img
        src={horseBg}
        alt="Horse Watermark Background"
        className={`w-full h-auto object-contain object-right-bottom ${opacity} pointer-events-none`}
      />
    </div>
  );
}
