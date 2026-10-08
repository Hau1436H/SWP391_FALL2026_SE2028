import React from 'react';
import IconImg from './IconImg';

// Import các icon mẫu dưới dạng file SVG/IMG để thẻ <img> hiển thị
import iconDashboard from '../assets/icons/dashboard.svg';
import iconHorses from '../assets/icons/horses.svg';
import iconVetRecords from '../assets/icons/vet-records.svg';
import iconTransportRequests from '../assets/icons/transport-requests.svg';
import iconActiveTrips from '../assets/icons/active-trips.svg';
import iconMessages from '../assets/icons/messages.svg';
import iconProfile from '../assets/icons/profile.svg';
import iconBilling from '../assets/icons/billing.svg';
import iconSettings from '../assets/icons/settings.svg';
import defaultLogo from '../assets/logo-placeholder.svg';

export default function Sidebar({
  logoSrc = defaultLogo, // Khi có logo.png, bạn chỉ cần thay đường dẫn tại đây hoặc truyền qua prop!
  activeTab = 'Dashboard',
  onTabChange,
}) {
  const mainNavItems = [
    { id: 'Dashboard', label: 'Dashboard', iconSrc: iconDashboard, dotColor: 'bg-slate-900' },
    { id: 'My Horses', label: 'My Horses', iconSrc: iconHorses, dotColor: 'bg-slate-400' },
    { id: 'Vet Records', label: 'Vet Records', iconSrc: iconVetRecords, dotColor: 'bg-slate-400' },
    { id: 'Transport Requests', label: 'Transport Requests', iconSrc: iconTransportRequests, dotColor: 'bg-slate-400' },
    { id: 'Active Trips', label: 'Active Trips', iconSrc: iconActiveTrips, dotColor: 'bg-slate-400' },
    { id: 'Messages', label: 'Messages', iconSrc: iconMessages, dotColor: 'bg-slate-400' },
  ];

  const accountNavItems = [
    { id: 'My Profile', label: 'My Profile', iconSrc: iconProfile, dotColor: 'bg-slate-400' },
    { id: 'Billing & Payments', label: 'Billing & Payments', iconSrc: iconBilling, dotColor: 'bg-slate-400' },
    { id: 'Settings', label: 'Settings', iconSrc: iconSettings, dotColor: 'bg-slate-400' },
  ];

  return (
    <aside className="w-64 bg-white border-r border-slate-200/80 flex flex-col shrink-0 min-h-screen select-none z-20">
      {/* ========================================================================= */}
      {/* 1. KHU VỰC LOGO: DÀNH KHOẢNG TRỐNG RIÊNG CHO FILE PNG CỦA BẠN               */}
      {/* Bạn có thể đặt file logo.png vào thư mục src/assets/ và truyền vào logoSrc */}
      {/* ========================================================================= */}
      <div className="h-20 px-6 flex items-center border-b border-transparent">
        <div className="w-full h-12 flex items-center">
          {logoSrc ? (
            <img
              src={logoSrc}
              alt="International Equine Transport"
              className="max-h-11 w-auto object-contain cursor-pointer transition-transform hover:scale-102"
            />
          ) : (
            /* Khung placeholder trống để gắn file PNG sau này */
            <div className="w-full h-11 border-2 border-dashed border-amber-300 rounded-lg flex items-center justify-center text-xs font-semibold text-amber-700 bg-amber-50/50">
              [ CHỖ ĐỂ LOGO PNG ]
            </div>
          )}
        </div>
      </div>

      {/* 2. MENU ĐIỀU HƯỚNG CHÍNH */}
      <nav className="flex-1 px-4 py-3 space-y-1">
        {mainNavItems.map((item) => {
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onTabChange && onTabChange(item.id)}
              className={`w-full flex items-center gap-3.5 px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all text-left group ${
                isActive
                  ? 'bg-[#F7B944] text-slate-900 font-semibold shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              {/* Thẻ <img> icon (kèm chấm tròn fallback tượng trưng nếu file chưa có) */}
              <div
                className={`w-5 h-5 flex items-center justify-center shrink-0 ${
                  isActive ? 'text-slate-900' : 'text-slate-500 group-hover:text-slate-900'
                }`}
              >
                <IconImg
                  src={item.iconSrc}
                  alt={item.label}
                  className={`w-4 h-4 ${isActive ? 'filter brightness-0' : 'opacity-70 group-hover:opacity-100'}`}
                  dotColor={item.dotColor}
                />
              </div>
              <span className="truncate">{item.label}</span>
            </button>
          );
        })}

        {/* 3. NHÓM TÀI KHOẢN (ACCOUNT) */}
        <div className="pt-6 pb-2">
          <p className="px-3.5 text-xs font-bold text-slate-900 uppercase tracking-wider">
            Account
          </p>
        </div>

        {accountNavItems.map((item) => {
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onTabChange && onTabChange(item.id)}
              className={`w-full flex items-center gap-3.5 px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all text-left group ${
                isActive
                  ? 'bg-[#F7B944] text-slate-900 font-semibold'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              {/* Thẻ <img> icon cho từng mục Account */}
              <div
                className={`w-5 h-5 flex items-center justify-center shrink-0 ${
                  isActive ? 'text-slate-900' : 'text-slate-500 group-hover:text-slate-900'
                }`}
              >
                <IconImg
                  src={item.iconSrc}
                  alt={item.label}
                  className={`w-4 h-4 ${isActive ? 'filter brightness-0' : 'opacity-70 group-hover:opacity-100'}`}
                  dotColor={item.dotColor}
                />
              </div>
              <span className="truncate">{item.label}</span>
            </button>
          );
        })}
      </nav>
    </aside>
  );
}
