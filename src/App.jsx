import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import logoBlue from './assets/LogoBlue.png';

export default function App() {
  const [activeTab, setActiveTab] = useState('Dashboard');
  const [searchQuery, setSearchQuery] = useState('');

  const logoSrc = logoBlue;

  const handleBook = () => {
    alert('Chức năng đặt chuyến (+ Book) được kích hoạt!');
  };

  const handleAddHorse = () => {
    alert('Chức năng thêm ngựa (+ Add Horse) được kích hoạt!');
  };

  return (
    <div className="min-h-screen flex bg-[#FAF6EE] text-slate-800 antialiased font-sans selection:bg-amber-200">
      {/* Cột Sidebar bên trái */}
      <Sidebar
        logoSrc={logoSrc}
        activeTab={activeTab}
        onTabChange={(tab) => setActiveTab(tab)}
      />

      {/* Khu vực nội dung chính bên phải */}
      <div className="flex-1 flex flex-col min-h-screen overflow-y-auto">
        {/* Header trên cùng (Tìm kiếm, Thông báo, Thông tin User) */}
        <Header
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          userName="Kaze Lee"
          userRole="Owner Portal"
          userInitials="KL"
        />

        {/* Nội dung Dashboard chính */}
        {activeTab === 'Dashboard' ? (
          <Dashboard
            onBookClick={handleBook}
            onAddHorseClick={handleAddHorse}
          />
        ) : (
          <div className="flex-1 p-8 flex items-center justify-center">
            <div className="text-center bg-white/80 p-8 rounded-2xl shadow-xs">
              <h3 className="text-xl font-bold text-slate-800 mb-2">Trang {activeTab}</h3>
              <p className="text-sm text-slate-500">Nội dung đang được cập nhật...</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
