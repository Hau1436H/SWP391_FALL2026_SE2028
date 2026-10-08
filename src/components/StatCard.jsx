import React from 'react';
import IconImg from './IconImg';

export default function StatCard({
  iconSrc,
  iconAlt = 'stat icon',
  iconBgColor = 'bg-[#FEF3C7]', // Màu nền hình tròn chứa icon
  dotColor = 'bg-amber-500',    // Màu chấm tròn fallback nếu không có ảnh
  value = 0,
  label = '',
}) {
  return (
    <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between min-h-[140px]">
      {/* Vòng tròn chứa icon (dùng thẻ <img>) */}
      <div
        className={`w-9 h-9 rounded-full ${iconBgColor} flex items-center justify-center shrink-0`}
      >
        <IconImg
          src={iconSrc}
          alt={iconAlt}
          className="w-4 h-4"
          dotColor={dotColor}
        />
      </div>

      {/* Giá trị số và nhãn */}
      <div className="mt-3">
        <div className="text-3xl font-bold text-slate-900 leading-none">
          {value}
        </div>
        <div className="text-sm text-slate-500 font-medium mt-1.5">
          {label}
        </div>
      </div>
    </div>
  );
}
