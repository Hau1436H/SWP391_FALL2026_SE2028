import React, { useState } from 'react';
import StatCard from './StatCard';
import HorseCard from './HorseCard';
import HorseWatermark from './HorseWatermark';

// Import các icon mẫu cho StatCard và Horse
import iconStatTrips from '../assets/icons/stat-trips.svg';
import iconStatRequests from '../assets/icons/stat-requests.svg';
import iconStatBids from '../assets/icons/stat-bids.svg';
import iconStatHorses from '../assets/icons/stat-horses.svg';

export default function Dashboard({
  onBookClick,
  onAddHorseClick,
}) {
  // Dữ liệu thống kê mẫu theo hình
  const stats = [
    {
      id: 'active-trips',
      value: 0,
      label: 'Active Trips',
      iconSrc: iconStatTrips,
      iconBgColor: 'bg-[#FEF3C7]',
      dotColor: 'bg-[#D97706]',
    },
    {
      id: 'open-requests',
      value: 0,
      label: 'Open Requests',
      iconSrc: iconStatRequests,
      iconBgColor: 'bg-[#E0F2FE]',
      dotColor: 'bg-[#0284C7]',
    },
    {
      id: 'bids-received',
      value: 0,
      label: 'Bids Received',
      iconSrc: iconStatBids,
      iconBgColor: 'bg-[#FEF3C7]',
      dotColor: 'bg-[#D97706]',
    },
    {
      id: 'my-horses',
      value: 3,
      label: 'My Horses',
      iconSrc: iconStatHorses,
      iconBgColor: 'bg-[#E0F2FE]',
      dotColor: 'bg-[#0284C7]',
    },
  ];

  // Danh sách ngựa mẫu theo thiết kế Figma
  const horses = [
    {
      id: '1',
      name: 'Midnight Gunner',
      breed: 'Quarter Horse',
      riskLevel: 'CRITICAL',
      avatarSrc: iconStatHorses,
    },
    {
      id: '2',
      name: 'Royal Duchess',
      breed: 'Thoroughbred',
      riskLevel: 'HIGH',
      avatarSrc: iconStatHorses,
    },
    {
      id: '3',
      name: 'Lightning',
      breed: 'Thoroughbred',
      riskLevel: 'LOW',
      avatarSrc: iconStatHorses,
    },
  ];

  return (
    <div className="relative flex-1 px-8 py-6 flex flex-col justify-between overflow-x-hidden">
      {/* Nền đồ họa ngựa nghệ thuật (Figma watermark) */}
      <HorseWatermark />

      <div className="relative z-10 max-w-7xl w-full">
        {/* ========================================================= */}
        {/* TIÊU ĐỀ DASHBOARD + NÚT "+ BOOK"                          */}
        {/* ========================================================= */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Dashboard
            </h1>
            <p className="text-sm text-slate-500 font-normal mt-1">
              Track your horses and transport
            </p>
          </div>

          <button
            type="button"
            onClick={onBookClick}
            className="flex items-center gap-1.5 px-6 py-2.5 bg-[#F7B944] hover:bg-[#e6a836] text-slate-900 font-bold text-sm rounded-full shadow-sm hover:shadow transition-all active:scale-95"
          >
            <span className="text-base font-bold leading-none">+</span>
            <span>Book</span>
          </button>
        </div>

        {/* ========================================================= */}
        {/* KHỐI 4 THẺ THỐNG KÊ (4 STAT CARDS)                        */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {stats.map((stat) => (
            <StatCard
              key={stat.id}
              value={stat.value}
              label={stat.label}
              iconSrc={stat.iconSrc}
              iconBgColor={stat.iconBgColor}
              dotColor={stat.dotColor}
            />
          ))}
        </div>

        {/* ========================================================= */}
        {/* KHU VỰC "MY HORSES"                                       */}
        {/* ========================================================= */}
        <div className="mb-8">
          {/* Header của My Horses */}
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
              My Horses
            </h2>

            <button
              type="button"
              onClick={onAddHorseClick}
              className="flex items-center gap-1 text-sm font-bold text-slate-900 hover:text-amber-600 transition-colors cursor-pointer"
            >
              <span className="text-base font-bold leading-none">+</span>
              <span>Add Horse</span>
            </button>
          </div>

          {/* Danh sách 3 thẻ thông tin ngựa */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {horses.map((horse) => (
              <HorseCard
                key={horse.id}
                name={horse.name}
                breed={horse.breed}
                riskLevel={horse.riskLevel}
                avatarSrc={horse.avatarSrc}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
