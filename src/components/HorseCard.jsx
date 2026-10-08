import React from 'react';
import IconImg from './IconImg';

export default function HorseCard({
  avatarSrc,
  avatarAlt = 'horse icon',
  name,
  breed,
  riskLevel = 'LOW', // 'CRITICAL' | 'HIGH' | 'LOW'
}) {
  // Cấu hình style màu sắc cho từng mức độ Risk Badge
  const riskStyles = {
    CRITICAL: {
      label: 'CRITICAL risk',
      className: 'bg-[#F87171] text-white font-bold',
    },
    HIGH: {
      label: 'HIGH risk',
      className: 'bg-[#FCD34D] text-[#92400E] font-bold',
    },
    LOW: {
      label: 'LOW risk',
      className: 'bg-[#86EFAC] text-[#166534] font-bold',
    },
  };

  const currentRisk = riskStyles[riskLevel.toUpperCase()] || riskStyles.LOW;

  return (
    <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm hover:shadow-md transition-all flex items-center justify-between gap-3">
      {/* Khối bên trái: Avatar icon + Thông tin tên/giống ngựa */}
      <div className="flex items-center gap-3 min-w-0">
        {/* Hình tròn chứa icon (thẻ <img>) */}
        <div className="w-10 h-10 rounded-full bg-[#E0F2FE] flex items-center justify-center shrink-0">
          <IconImg
            src={avatarSrc}
            alt={avatarAlt}
            className="w-5 h-5"
            dotColor="bg-[#0284C7]"
          />
        </div>

        {/* Tên và giống */}
        <div className="truncate">
          <h4 className="text-sm font-bold text-slate-900 truncate leading-tight">
            {name}
          </h4>
          <p className="text-xs text-slate-500 truncate leading-tight mt-0.5">
            {breed}
          </p>
        </div>
      </div>

      {/* Khối bên phải: Risk Badge */}
      <div className="shrink-0">
        <span
          className={`inline-block text-[11px] px-2.5 py-1 rounded-full tracking-wide text-center whitespace-nowrap shadow-2xs ${currentRisk.className}`}
        >
          {currentRisk.label}
        </span>
      </div>
    </div>
  );
}
