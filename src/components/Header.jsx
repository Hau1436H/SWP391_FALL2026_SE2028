import React from 'react';
import IconImg from './IconImg';
import iconSearch from '../assets/icons/search.svg';
import iconBell from '../assets/icons/bell.svg';

export default function Header({
  searchQuery,
  onSearchChange,
  userName = 'Kaze Lee',
  userRole = 'Owner Portal',
  userInitials = 'KL',
  userAvatarSrc = null, // Có thể truyền ảnh đại diện của user nếu có
}) {
  return (
    <header className="h-20 px-8 flex items-center justify-between z-10">
      {/* 1. THANH TÌM KIẾM (SEARCH BAR) */}
      <div className="relative w-full max-w-md">
        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
          {/* Icon tìm kiếm bằng thẻ <img> */}
          <IconImg
            src={iconSearch}
            alt="Search"
            className="w-4 h-4 opacity-60"
            dotColor="bg-slate-400"
          />
        </div>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange && onSearchChange(e.target.value)}
          placeholder="Search routes, jobs, stalls, or ..."
          className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200/90 rounded-full text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-100 transition-all shadow-xs"
        />
      </div>

      {/* 2. KHU VỰC THÔNG BÁO VÀ THÔNG TIN TÀI KHOẢN */}
      <div className="flex items-center gap-5">
        {/* Nút chuông thông báo (Bell notification) */}
        <button
          type="button"
          aria-label="Notifications"
          className="p-2 rounded-full text-slate-600 hover:text-slate-900 hover:bg-white/80 transition-colors relative"
        >
          {/* Icon chuông bằng thẻ <img> */}
          <IconImg
            src={iconBell}
            alt="Notifications"
            className="w-5 h-5"
            dotColor="bg-slate-500"
          />
        </button>

        {/* Khối người dùng (User Profile Avatar & Name) */}
        <div className="flex items-center gap-3 cursor-pointer pl-1">
          {/* Avatar (Có thể dùng ảnh img hoặc chữ viết tắt KL) */}
          {userAvatarSrc ? (
            <img
              src={userAvatarSrc}
              alt={userName}
              className="w-10 h-10 rounded-full object-cover ring-2 ring-white shadow-xs"
            />
          ) : (
            <div className="w-10 h-10 rounded-full bg-[#F5A623] text-white font-bold flex items-center justify-center text-sm shadow-xs tracking-wider">
              {userInitials}
            </div>
          )}

          {/* Tên và chức vụ */}
          <div className="flex flex-col text-left">
            <span className="text-sm font-bold text-slate-900 leading-tight">
              {userName}
            </span>
            <span className="text-xs text-slate-500 leading-tight mt-0.5">
              {userRole}
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
