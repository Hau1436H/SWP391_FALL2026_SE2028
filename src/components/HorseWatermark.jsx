import React from 'react';

/**
 * Background artistic horse illustration watermark matching the Figma design
 */
export default function HorseWatermark() {
  return (
    <div className="absolute right-0 bottom-0 pointer-events-none select-none overflow-hidden z-0 w-[55%] h-[75%] opacity-70">
      <svg
        viewBox="0 0 700 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full object-cover object-bottom"
        preserveAspectRatio="xMaxYMax meet"
      >
        <defs>
          <linearGradient id="horseGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FBD38D" stopOpacity="0.85" />
            <stop offset="60%" stopColor="#F6AD55" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#ED8936" stopOpacity="0.4" />
          </linearGradient>
          <linearGradient id="duneGrad1" x1="0%" y1="50%" x2="100%" y2="50%">
            <stop offset="0%" stopColor="#FBD38D" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#ED8936" stopOpacity="0.75" />
          </linearGradient>
          <linearGradient id="duneGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FEEBC8" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#FBD38D" stopOpacity="0.8" />
          </linearGradient>
        </defs>

        {/* Stylized Horse Silhouette with mane and dynamic curves */}
        <g fill="url(#horseGrad)">
          {/* Horse Neck & Head */}
          <path d="M 520,120 
                   C 480,140 440,160 410,210 
                   C 390,240 370,290 380,340 
                   C 400,310 430,270 460,240 
                   C 480,220 510,200 540,190 
                   C 530,170 525,145 520,120 Z" />
          
          {/* Horse Ears & Forehead */}
          <path d="M 425,230 
                   C 428,215 435,200 440,190 
                   C 445,205 442,220 435,235 Z" />

          {/* Horse Mane strands */}
          <path d="M 500,130 
                   C 550,135 600,160 630,210 
                   C 600,195 560,185 520,180 Z" />
          <path d="M 540,180 
                   C 590,200 640,240 660,300 
                   C 620,270 575,250 535,240 Z" />
          <path d="M 560,250 
                   C 605,290 645,340 665,410 
                   C 625,370 580,340 540,320 Z" />

          {/* Body curve */}
          <path d="M 450,300 
                   C 470,360 480,420 500,480 
                   C 470,450 430,410 400,370 
                   C 410,340 430,315 450,300 Z" />
        </g>

        {/* Dynamic Dunes / Landscape Waves at bottom */}
        <path
          d="M 0,440 
             C 120,430 220,450 320,400 
             C 420,350 490,410 570,390 
             C 630,370 670,330 700,340 
             L 700,500 L 0,500 Z"
          fill="url(#duneGrad2)"
        />

        <path
          d="M 120,470 
             C 240,440 360,460 480,410 
             C 550,380 610,400 700,370 
             L 700,500 L 120,500 Z"
          fill="url(#duneGrad1)"
        />

        <path
          d="M 280,480 
             C 400,450 500,430 620,420 
             C 660,415 680,410 700,405 
             L 700,500 L 280,500 Z"
          fill="#ECC94B"
          opacity="0.85"
        />
      </svg>
    </div>
  );
}
