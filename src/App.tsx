import { useState, useEffect, useRef } from 'react';
import svgPaths from '../imports/svg-opovdd5lqn';
import WallPage from './WallPage';
import logoImg from './assets/logo.png';

type Page = 'dashboard' | 'wall' | 'results' | 'user-ranking' | 'badges' | 'gift-cards' | 'catalog';

function RibbonMedalIcon({ size = 20, color = '#F54900' }: { size?: number; color?: string }) {
  return (
    <svg fill="none" viewBox="0 0 35 35" width={size} height={size} strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
      <path
        d="M22.0993 18.4141L24.2627 30.589C24.2869 30.7324 24.2668 30.8798 24.205 31.0114C24.1433 31.143 24.0428 31.2526 23.917 31.3256C23.7913 31.3986 23.6462 31.4314 23.5013 31.4197C23.3564 31.408 23.2185 31.3524 23.106 31.2602L17.9939 27.4232C17.7471 27.2389 17.4473 27.1392 17.1392 27.1392C16.8312 27.1392 16.5314 27.2389 16.2846 27.4232L11.1639 31.2588C11.0515 31.3508 10.9138 31.4063 10.769 31.418C10.6243 31.4298 10.4794 31.397 10.3537 31.3243C10.228 31.2515 10.1275 31.1421 10.0656 31.0108C10.0037 30.8794 9.98334 30.7323 10.0072 30.589L12.1692 18.4141"
        stroke={color}
        strokeWidth="2.6"
      />
      <path
        d="M17.136 19.997C21.8679 19.997 25.7038 16.1611 25.7038 11.4292C25.7038 6.69729 21.8679 2.86133 17.136 2.86133C12.4041 2.86133 8.56812 6.69729 8.56812 11.4292C8.56812 16.1611 12.4041 19.997 17.136 19.997Z"
        stroke={color}
        strokeWidth="2.6"
      />
    </svg>
  );
}

// ─── SVG Icon primitives ──────────────────────────────────────────────────────

function SearchIcon() {
  return (
    <svg fill="none" viewBox="0 0 24 24" width="20" height="20" stroke="#99A1AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d={svgPaths.p1d782b80} />
      <path d={svgPaths.p121be780} />
    </svg>
  );
}

function BellIcon() {
  return (
    <svg fill="none" viewBox="0 0 24 24" width="22" height="22" stroke="#4A5565" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d={svgPaths.p22196b00} />
      <path d={svgPaths.p3d9d72a0} />
    </svg>
  );
}

function ChevronDownIcon({ color = '#4A5565', size = 16 }: { color?: string; size?: number }) {
  return (
    <svg fill="none" viewBox="0 0 19 19" width={size} height={size} stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d={svgPaths.p2ff2d740} />
    </svg>
  );
}

function ChevronUpIcon({ color = '#4A5565', size = 16 }: { color?: string; size?: number }) {
  return (
    <svg fill="none" viewBox="0 0 19 19" width={size} height={size} stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 12l5.5-5.5L15 12" />
    </svg>
  );
}

function FilterLinesIcon({ color = '#4A5565', size = 18 }: { color?: string; size?: number }) {
  return (
    <svg fill="none" viewBox="0 0 18 18" width={size} height={size} stroke={color} strokeWidth="1.8" strokeLinecap="round">
      <line x1="2" y1="5" x2="16" y2="5" />
      <line x1="4.5" y1="9" x2="13.5" y2="9" />
      <line x1="7" y1="13" x2="11" y2="13" />
    </svg>
  );
}

function DashboardIcon({ color = 'white' }: { color?: string }) {
  return (
    <svg fill="none" viewBox="0 0 24 24" width="22" height="22" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d={svgPaths.p14820060} />
      <path d="M17.89 16.89V8.94" />
      <path d="M12.92 16.89V4.96" />
      <path d="M7.95 16.89V13.91" />
    </svg>
  );
}

function WallIcon({ color = '#364153' }: { color?: string }) {
  return (
    <svg fill="none" viewBox="0 0 24 24" width="22" height="22" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d={svgPaths.p39710a90} />
      <path d={svgPaths.p1667e940} />
      <path d={svgPaths.p1f1ddd00} />
      <path d={svgPaths.p3bd67580} />
    </svg>
  );
}

function CatalogIcon({ color = '#364153' }: { color?: string }) {
  return (
    <svg fill="none" viewBox="0 0 24 24" width="22" height="22" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d={svgPaths.p2697c3a0} />
      <path d="M3.09 5.996H20.77" />
      <path d={svgPaths.pdbc3980} />
    </svg>
  );
}

function ProgramsIcon({ color = '#364153' }: { color?: string }) {
  return (
    <svg fill="none" viewBox="0 0 24 24" width="22" height="22" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d={svgPaths.p19ff6800} />
      <path d={svgPaths.p2c739f00} />
    </svg>
  );
}

function SettingsIcon({ color = '#364153' }: { color?: string }) {
  return (
    <svg fill="none" viewBox="0 0 24 24" width="22" height="22" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d={svgPaths.p9de2880} />
      <path d={svgPaths.p13574040} />
    </svg>
  );
}

function LogoutIcon() {
  return (
    <svg fill="none" viewBox="0 0 24 24" width="22" height="22" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d={svgPaths.p22b0b000} />
      <path d="M20.87 11.93H8.94" />
      <path d={svgPaths.p2657a9c0} />
    </svg>
  );
}

function ActivityIcon({ color = '#F54900' }: { color?: string }) {
  return (
    <svg fill="none" viewBox="0 0 24 24" width="22" height="22" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d={svgPaths.p2c39f180} />
    </svg>
  );
}

function TrophyIcon({ color = '#F54900' }: { color?: string }) {
  return (
    <svg fill="none" viewBox="0 0 24 24" width="22" height="22" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d={svgPaths.p29318680} />
      <path d={svgPaths.p1ac19d80} />
    </svg>
  );
}

function ShoppingBagIcon({ color = '#F54900' }: { color?: string }) {
  return (
    <svg fill="none" viewBox="0 0 24 24" width="22" height="22" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d={svgPaths.p10a5ac80} />
      <path d="M3.08 5.99H20.77" />
      <path d={svgPaths.paa34d00} />
    </svg>
  );
}

function CalendarIcon({ color = '#4A5565' }: { color?: string }) {
  return (
    <svg fill="none" viewBox="0 0 19 19" width="18" height="18" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6.36 1.59V4.77" />
      <path d="M12.72 1.59V4.77" />
      <path d={svgPaths.p24f3f200} />
      <path d="M2.38 7.96H16.70" />
    </svg>
  );
}

function TransactionsIcon({ color = '#F54900' }: { color?: string }) {
  return (
    <svg fill="none" viewBox="0 0 24 24" width="22" height="22" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d={svgPaths.p2d69680} />
    </svg>
  );
}

function RankingIcon({ color = '#F54900' }: { color?: string }) {
  return (
    <svg fill="none" viewBox="0 0 24 24" width="22" height="22" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d={svgPaths.p393f6100} />
    </svg>
  );
}

function BalanceIcon({ color = '#F54900' }: { color?: string }) {
  return (
    <svg fill="none" viewBox="0 0 24 24" width="22" height="22" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d={svgPaths.p20e41f80} />
    </svg>
  );
}

function HeartIcon({ color = '#0A0A0A' }: { color?: string }) {
  return (
    <svg fill="none" viewBox="0 0 18 16" width="17" height="16" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d={svgPaths.p28dcd200} />
    </svg>
  );
}

function TrendUpIcon({ color = 'white' }: { color?: string }) {
  return (
    <svg fill="none" viewBox="0 0 15 15" width="13" height="13" stroke={color} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <path d={svgPaths.p34c81500} />
      <path d={svgPaths.p37dc5ca6} />
    </svg>
  );
}

function TrendDownIcon({ color = 'white' }: { color?: string }) {
  return (
    <svg fill="none" viewBox="0 0 15 15" width="13" height="13" stroke={color} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <path d={svgPaths.p3b5f1100} />
      <path d={svgPaths.p1c60b0c0} />
    </svg>
  );
}

function DollarIcon({ color = '#FFEDD4' }: { color?: string }) {
  return (
    <svg fill="none" viewBox="0 0 19 19" width="18" height="18" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9.54 1.58V17.48" />
      <path d={svgPaths.p1ffb3900} />
    </svg>
  );
}

function InArrowIcon({ color = '#FFEDD4' }: { color?: string }) {
  return (
    <svg fill="none" viewBox="0 0 14 14" width="18" height="18" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d={svgPaths.p196e5980} />
      <path d={svgPaths.p3ee6ae00} />
    </svg>
  );
}

function OutArrowIcon({ color = '#FFEDD4' }: { color?: string }) {
  return (
    <svg fill="none" viewBox="0 0 14 14" width="18" height="18" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d={svgPaths.p2e0cdc80} />
      <path d={svgPaths.p34bd9b80} />
    </svg>
  );
}

function ChevronLeft() {
  return (
    <svg fill="none" viewBox="0 0 15 15" width="13" height="13" stroke="#4A5565" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <path d={svgPaths.p956f280} />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg fill="none" viewBox="0 0 15 15" width="13" height="13" stroke="#4A5565" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <path d={svgPaths.p65680} />
    </svg>
  );
}

function StarFull() {
  return (
    <svg fill="#F0B100" viewBox="0 0 15 15" width="14" height="14" stroke="#F0B100" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <clipPath id="sf1"><rect width="14.3115" height="14.3115" fill="white" /></clipPath>
      <g clipPath="url(#sf1)"><path d={svgPaths.p1485f00} /></g>
    </svg>
  );
}

function StarEmpty() {
  return (
    <svg fill="none" viewBox="0 0 15 15" width="14" height="14" stroke="#D1D5DC" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <clipPath id="se1"><rect width="14.3115" height="14.3115" fill="white" /></clipPath>
      <g clipPath="url(#se1)"><path d={svgPaths.pbac2500} /></g>
    </svg>
  );
}

// ─── Logo ────────────────────────────────────────────────────────────────────

function LogoBox() {
  return (
    <div
      className="relative rounded-[14px] shrink-0 size-[44px] drop-shadow-[0px_6px_10px_rgba(245,73,0,0.25)] flex items-center justify-center overflow-hidden"
    >
      <img src={logoImg} alt="LLS Logo" className="w-full h-full object-cover" />
    </div>
  );
}

// ─── Large shopping bag icon for product cards ───────────────────────────────

function LargeShoppingBag({ small = false }: { small?: boolean }) {
  const s = small ? 44 : 67;
  return (
    <svg fill="none" viewBox="0 0 67 67" width={s} height={s} strokeLinecap="round" strokeLinejoin="round" strokeWidth="5.57">
      <defs>
        <linearGradient id="bag-grad" x1="22" x2="45" y1="33" y2="33" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FF6900" />
          <stop offset="0.5" stopColor="#F54900" />
          <stop offset="1" stopColor="#CA3500" />
        </linearGradient>
      </defs>
      <path d={svgPaths.p1f3d0480} stroke="url(#bag-grad)" />
      <path d="M8.64 16.79H58.15" stroke="url(#bag-grad)" />
      <path d={svgPaths.p394a9980} stroke="url(#bag-grad)" />
    </svg>
  );
}

// ─── Gold trophy icon ─────────────────────────────────────────────────────────

function GoldTrophyIcon() {
  return (
    <svg fill="none" viewBox="0 0 40 40" width="38" height="38" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.34">
      <path d={svgPaths.p2c92d080} stroke="#F54900" />
      <path d={svgPaths.p10701a00} stroke="#F54900" />
    </svg>
  );
}

function ResultsIcon({ color = '#364153' }: { color?: string }) {
  return (
    <svg fill="none" viewBox="0 0 24 24" width="22" height="22" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
      <polyline points="16 7 22 7 22 13" />
    </svg>
  );
}

function GiftCardIcon({ color = '#364153' }: { color?: string }) {
  return (
    <svg fill="none" viewBox="0 0 24 24" width="22" height="22" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 12 20 22 4 22 4 12" />
      <rect x="2" y="7" width="20" height="5" rx="1" />
      <line x1="12" y1="22" x2="12" y2="7" />
      <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
      <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
    </svg>
  );
}

function TicketIcon({ color = '#F54900' }: { color?: string }) {
  return (
    <svg fill="none" viewBox="0 0 24 24" width="20" height="20" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 9a3 3 0 0 1 0 6v5a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a3 3 0 0 1 0-6V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v5z" />
      <line x1="9" y1="2" x2="9" y2="22" strokeDasharray="2 2" />
    </svg>
  );
}

// ─── Sidebar ─────────────────────────────────────────────────────────────────

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  onClick?: () => void;
}

function NavItem({ icon, label, active, onClick }: NavItemProps) {
  return (
    <div
      onClick={onClick}
      className={`flex gap-3 items-center h-[44px] px-4 rounded-[14px] w-full cursor-pointer transition-all duration-150 ${
        active
          ? 'bg-gradient-to-r from-[#ff6900] to-[#f54900] drop-shadow-[0px_10px_8px_#ffd6a7] text-white'
          : 'text-[#364153] hover:bg-orange-50 hover:text-[#F54900]'
      }`}
    >
      <span className="shrink-0 transition-colors duration-150">{icon}</span>
      <span className={`font-['Inter:Regular',sans-serif] text-[15px] leading-none tracking-[-0.01em] ${active ? 'text-white' : ''}`}>
        {label}
      </span>
      {active && <div className="ml-auto w-2 h-2 rounded-full bg-white shrink-0" />}
    </div>
  );
}

interface SidebarProps {
  activePage: Page;
  onNavigate: (page: Page) => void;
  mobile?: boolean;
}

function Sidebar({ activePage, onNavigate, mobile }: SidebarProps) {
  return (
    <aside className={`${mobile ? 'flex' : 'hidden md:flex'} w-[250px] flex-none flex-col bg-white border-r border-gray-200 shadow-[0px_20px_40px_rgba(0,0,0,0.08)] sticky top-0 h-screen overflow-hidden`}>
      {/* Logo header */}
      <div className="flex items-center justify-between px-5 pt-5 pb-4 border-b border-gray-100">
        <div className="flex items-center gap-3">
          <LogoBox />
          <div className="flex flex-col">
            <span className="font-['Inter:Regular',sans-serif] text-[17px] text-[#101828] leading-tight">Dashboard</span>
            <span className="font-['Inter:Regular',sans-serif] text-[13px] text-[#f54900] leading-tight">Premium User</span>
          </div>
        </div>
        <button className="p-2 rounded-[11px] hover:bg-gray-100 transition-colors duration-150 cursor-pointer">
          <svg fill="none" viewBox="0 0 22 22" width="20" height="20" stroke="#4A5565" strokeWidth="2" strokeLinecap="round">
            <line x1="3" y1="6" x2="19" y2="6" />
            <line x1="3" y1="11" x2="19" y2="11" />
            <line x1="3" y1="16" x2="19" y2="16" />
          </svg>
        </button>
      </div>

      {/* Nav sections */}
      <div className="flex-1 overflow-y-auto px-3 py-4 flex flex-col gap-5">
        {/* MAIN */}
        <div>
          <p className="font-['Inter:Regular',sans-serif] text-[11px] text-[#99a1af] tracking-[0.06em] uppercase px-3 mb-2">Main</p>
          <div className="flex flex-col gap-0.5">
            <NavItem icon={<DashboardIcon color={activePage === 'dashboard' ? 'white' : '#364153'} />} label="Dashboard" active={activePage === 'dashboard'} onClick={() => onNavigate('dashboard')} />
            <NavItem icon={<WallIcon color={activePage === 'wall' ? 'white' : '#364153'} />} label="Wall" active={activePage === 'wall'} onClick={() => onNavigate('wall')} />
            <NavItem icon={<ResultsIcon color={activePage === 'results' ? 'white' : '#364153'} />} label="Results" active={activePage === 'results'} onClick={() => onNavigate('results')} />
            <NavItem icon={<RankingIcon color={activePage === 'user-ranking' ? 'white' : '#364153'} />} label="User Ranking" active={activePage === 'user-ranking'} onClick={() => onNavigate('user-ranking')} />
            <NavItem icon={<RibbonMedalIcon size={20} color={activePage === 'badges' ? 'white' : '#364153'} />} label="Badges" active={activePage === 'badges'} onClick={() => onNavigate('badges')} />
            <NavItem icon={<GiftCardIcon color={activePage === 'gift-cards' ? 'white' : '#364153'} />} label="Gift Cards" active={activePage === 'gift-cards'} onClick={() => onNavigate('gift-cards')} />
            <NavItem icon={<CatalogIcon color={activePage === 'catalog' ? 'white' : '#364153'} />} label="Catalog" active={activePage === 'catalog'} onClick={() => onNavigate('catalog')} />
          </div>
        </div>
        {/* PROGRAMS */}
        <div>
          <p className="font-['Inter:Regular',sans-serif] text-[11px] text-[#99a1af] tracking-[0.06em] uppercase px-3 mb-2">Programs</p>
          <div className="flex flex-col gap-0.5">
            <NavItem icon={<ProgramsIcon />} label="Programs" />
          </div>
        </div>
        {/* SETTINGS */}
        <div>
          <p className="font-['Inter:Regular',sans-serif] text-[11px] text-[#99a1af] tracking-[0.06em] uppercase px-3 mb-2">Settings</p>
          <div className="flex flex-col gap-0.5">
            <NavItem icon={<SettingsIcon />} label="Settings" />
          </div>
        </div>
      </div>

      {/* Logout */}
      <div className="px-4 pb-5 pt-4 border-t border-gray-100">
        <button className="w-full bg-gradient-to-r from-[#ff6900] to-[#f54900] hover:from-[#e55d00] hover:to-[#d94000] flex items-center justify-center gap-2.5 h-[52px] rounded-[14px] cursor-pointer transition-all duration-150 active:scale-[0.98]">
          <LogoutIcon />
          <span className="font-['Inter:Regular',sans-serif] text-[17px] text-white">Logout</span>
        </button>
      </div>
    </aside>
  );
}

// ─── Mobile Header ───────────────────────────────────────────────────────────

function MobileHeader({ onMenuOpen }: { onMenuOpen: () => void }) {
  return (
    <header
      className="flex md:hidden sticky top-0 z-20 bg-white border-b border-gray-200 shadow-[0px_1px_3px_rgba(0,0,0,0.08)] items-center gap-3 px-4"
      style={{ minHeight: 62, paddingTop: 'max(env(safe-area-inset-top, 0px), 0px)', height: 'calc(62px + env(safe-area-inset-top, 0px))' }}
    >
      <button
        onClick={onMenuOpen}
        className="p-2 rounded-[11px] hover:bg-gray-100 transition-colors duration-150 cursor-pointer shrink-0"
      >
        <svg fill="none" viewBox="0 0 22 22" width="22" height="22" stroke="#4A5565" strokeWidth="2.2" strokeLinecap="round">
          <line x1="3" y1="6" x2="19" y2="6" />
          <line x1="3" y1="11" x2="19" y2="11" />
          <line x1="3" y1="16" x2="19" y2="16" />
        </svg>
      </button>
      <LogoBox />
      <div className="flex-1" />
      <button className="flex items-center gap-1.5 bg-[#f9fafb] border border-[#e5e7eb] rounded-[11px] px-3 py-1.5 cursor-pointer hover:border-[#f54900] transition-all duration-150">
        <span className="font-['Inter:Regular',sans-serif] text-[14px] text-[#364153]">Spanish</span>
        <ChevronDownIcon />
      </button>
      <button className="relative p-2 rounded-[11px] hover:bg-gray-100 transition-colors duration-150 cursor-pointer">
        <BellIcon />
        <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-[#ff6900]" />
      </button>
    </header>
  );
}

// ─── Header ──────────────────────────────────────────────────────────────────

function Header() {
  return (
    <header className="hidden md:flex bg-white/85 backdrop-blur-sm border-b border-gray-200 shadow-[0px_1px_3px_rgba(0,0,0,0.08)] sticky top-0 z-10 items-center gap-4 px-6 h-[74px]">
      {/* Search */}
      <div className="relative flex-1 max-w-[480px]">
        <div className="absolute left-3.5 top-1/2 -translate-y-1/2">
          <SearchIcon />
        </div>
        <input
          type="text"
          placeholder="Search anything..."
          className="w-full bg-[#f9fafb] border border-[#e5e7eb] rounded-[14px] pl-[44px] pr-4 py-3 font-['Inter:Regular',sans-serif] text-[16px] text-[rgba(10,10,10,0.5)] placeholder:text-[rgba(10,10,10,0.4)] outline-none focus:border-[#f54900] focus:ring-1 focus:ring-[#f54900] transition-colors duration-150"
        />
      </div>

      <div className="ml-auto flex items-center gap-3">
        {/* Bell */}
        <button className="relative p-2.5 rounded-[14px] hover:bg-gray-100 transition-colors duration-150 cursor-pointer">
          <BellIcon />
          <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 rounded-full bg-[#ff6900]" />
        </button>

        {/* Language */}
        <button className="flex items-center gap-2 bg-[#f9fafb] border border-[#e5e7eb] rounded-[14px] px-4 py-2 cursor-pointer hover:border-[#f54900] hover:bg-orange-50 transition-all duration-150">
          <span className="font-['Inter:Regular',sans-serif] text-[15px] text-[#364153]">Spanish</span>
          <ChevronDownIcon />
        </button>
      </div>
    </header>
  );
}

// ─── Stat Card ───────────────────────────────────────────────────────────────

interface StatCardProps {
  label: string;
  value: string;
  trend: 'up' | 'down';
  trendValue: string;
  icon: React.ReactNode;
  gradientAngle?: string;
  circleLeft?: string;
  mini?: boolean;
}

function StatCard({ label, value, trend, trendValue, icon, gradientAngle = '153deg', circleLeft = '172px', mini = false }: StatCardProps) {
  return (
    <div
      className={`relative rounded-[15px] overflow-hidden shadow-[0px_10px_16px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] flex-1 min-w-0 ${mini ? 'h-[126px]' : 'h-[180px]'} hover:shadow-[0px_16px_24px_-4px_rgba(245,73,0,0.25)] transition-shadow duration-200 cursor-default`}
      style={{ backgroundImage: `linear-gradient(${gradientAngle}, rgb(245,73,0) 0%, rgb(248,81,1) 100%)` }}
    >
      {/* Decorative circle */}
      <div
        className="absolute rounded-full bg-white/10 pointer-events-none"
        style={mini ? { width: '84px', height: '84px', right: '-16px', top: '-20px' } : { left: circleLeft, top: '-68px', width: '138px', height: '138px' }}
      />

      {/* Content */}
      <div className={`absolute inset-0 flex flex-col justify-between ${mini ? 'p-2.5 sm:p-3' : 'p-6'}`}>
        <div>
          <div className={`flex items-center gap-1.5 ${mini ? 'mb-1' : 'mb-4 gap-2.5'}`}>
            <span className={mini ? '[&_svg]:w-[14px] [&_svg]:h-[14px]' : ''}>{icon}</span>
            <span className={`font-['Inter:Regular',sans-serif] text-[#ffedd4] tracking-[-0.02em] leading-tight ${mini ? 'text-[12px]' : 'text-[17px]'}`}>{label}</span>
          </div>
          <p className={`font-['Inter:Medium',sans-serif] text-white leading-tight tracking-[0.01em] ${mini ? 'text-[20px] sm:text-[22px]' : 'text-[38px]'}`}>{value}</p>
        </div>
        <div className="flex items-center gap-1 flex-wrap">
          <div className={`flex items-center gap-1 bg-white/20 ${mini ? 'px-1.5 py-[2px] rounded-[6px]' : 'px-3 py-1 rounded-[9px]'}`}>
            {trend === 'up' ? <TrendUpIcon /> : <TrendDownIcon />}
            <span className={`font-['Inter:Medium',sans-serif] text-white ${mini ? 'text-[10px]' : 'text-[13px]'}`}>{trendValue}</span>
          </div>
          <span className={`font-['Inter:Regular',sans-serif] text-[#ffedd4] ${mini ? 'text-[9.5px]' : 'text-[15px]'}`}>vs last month</span>
        </div>
      </div>
    </div>
  );
}

// ─── Achievements Card (Desktop) ──────────────────────────────────────────────

function AchievementsCard({ onOpenModal }: { onOpenModal?: () => void }) {
  return (
    <div
      onClick={onOpenModal}
      className="rounded-[15px] border border-[#ffd6a7] drop-shadow-[0px_10px_8px_rgba(0,0,0,0.1)] h-[180px] w-full md:w-[320px] xl:w-[360px] relative overflow-hidden cursor-pointer hover:shadow-[0px_12px_24px_rgba(255,105,0,0.15)] transition-all duration-200 group"
      style={{ backgroundImage: "linear-gradient(161deg, rgb(255,247,237) 0%, rgb(255,255,255) 100%)" }}
    >
      {/* Title */}
      <div className="flex items-center justify-between px-5 pt-5">
        <div className="flex items-center gap-2">
          <RibbonMedalIcon size={24} color="#F54900" />
          <span className="font-['Inter:Regular',sans-serif] text-[17px] text-[#0a0a0a] tracking-[-0.02em]">Achievements | Trophies</span>
        </div>
      </div>
      <button
        onClick={(e) => {
          e.stopPropagation();
          onOpenModal?.();
        }}
        className="absolute top-5 right-5 font-['Inter:Regular',sans-serif] text-[13px] text-[#f54900] group-hover:underline cursor-pointer transition-colors duration-150"
      >
        View All →
      </button>

      {/* Gold content */}
      <div className="flex flex-col items-center mt-3">
        <div className="flex items-center gap-2">
          <RibbonMedalIcon size={36} color="#F54900" />
          <span
            className="font-['Inter:Bold',sans-serif] text-[36px] bg-clip-text text-transparent"
            style={{ backgroundImage: "linear-gradient(90deg, #ff6900, #f54900, #ca3500)" }}
          >
            Gold
          </span>
        </div>
        <p className="font-['Inter:Regular',sans-serif] text-[12px] text-[#6a7282] mt-0.5">Elite Performance Award</p>
      </div>
    </div>
  );
}

// ─── Achievements Card (Mobile compact) ──────────────────────────────────────

function AchievementsCardMobile({ onOpenModal }: { onOpenModal?: () => void }) {
  return (
    <div
      onClick={onOpenModal}
      className="w-full shrink-0 min-h-[54px] h-[54px] sm:h-[56px] rounded-[14px] border border-[#ffd6a7] flex items-center justify-between px-3.5 sm:px-4 cursor-pointer hover:border-[#ff9a3d] transition-all duration-150 active:scale-[0.99] group shadow-xs bg-white"
      style={{
        minHeight: '54px',
        height: '54px',
        flexShrink: 0,
        backgroundImage: 'linear-gradient(174deg, rgb(255, 247, 237) 0%, rgb(255, 255, 255) 100%)',
      }}
    >
      {/* Left: Ribbon + Title */}
      <div className="flex items-center gap-2 shrink-0">
        <RibbonMedalIcon size={22} color="#F54900" />
        <span className="font-['Inter:Regular',sans-serif] text-[13.5px] sm:text-[15px] text-[#0a0a0a] tracking-[-0.01em] whitespace-nowrap">
          Achievements | Trophies
        </span>
      </div>

      {/* Center: Ribbon + Gold */}
      <div className="flex items-center gap-1.5 shrink-0">
        <RibbonMedalIcon size={22} color="#F54900" />
        <span
          className="font-['Inter:Bold',sans-serif] text-[20px] sm:text-[22px] text-[#f54900] font-bold leading-none"
        >
          Gold
        </span>
      </div>

      {/* Right: View All */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onOpenModal?.();
        }}
        className="shrink-0 font-['Inter:Medium',sans-serif] text-[12px] sm:text-[13px] text-[#f54900] group-hover:underline cursor-pointer transition-colors duration-150 whitespace-nowrap"
      >
        View All →
      </button>
    </div>
  );
}

// ─── Achievements & Badges Modal ─────────────────────────────────────────────

interface AchievementsBadgesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

function AchievementsBadgesModal({ isOpen, onClose }: AchievementsBadgesModalProps) {
  const [filter, setFilter] = useState<'all' | 'unlocked' | 'locked'>('all');

  if (!isOpen) return null;

  const badges = [
    {
      id: '1',
      title: 'Top Performer',
      category: 'Performance',
      description: 'Achieved #1 sales rank among 2,210 team members',
      icon: '🥇',
      unlocked: true,
      date: 'Aug 28, 2026',
      points: '+250 Pts',
      tier: 'Gold',
    },
  ];

  const filteredBadges = badges.filter((b) => {
    if (filter === 'unlocked') return b.unlocked;
    if (filter === 'locked') return !b.unlocked;
    return true;
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-xs">
      <div className="absolute inset-0" onClick={onClose} />
      <div className="relative bg-white w-full max-w-[620px] max-h-[90vh] rounded-[22px] shadow-2xl border border-orange-100 flex flex-col overflow-hidden z-10">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-5 sm:px-6 py-4 border-b border-gray-100 bg-gradient-to-r from-orange-50/50 via-white to-orange-50/30">
          <div className="flex items-center gap-2.5">
            <RibbonMedalIcon size={26} color="#F54900" />
            <div>
              <h2 className="font-['Inter:Bold',sans-serif] text-[18px] sm:text-[20px] text-[#0a0a0a] leading-tight">
                Achievements & Badges
              </h2>
              <p className="font-['Inter:Regular',sans-serif] text-[12px] sm:text-[13px] text-[#6a7282]">
                Your performance honors, medals, and badges
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-[10px] hover:bg-gray-100 text-gray-400 hover:text-gray-700 transition-colors cursor-pointer"
          >
            <svg fill="none" viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="flex-1 overflow-y-auto px-5 sm:px-6 py-4 space-y-4">
          {/* Current Tier Banner */}
          <div
            className="rounded-[16px] p-4 sm:p-5 border border-[#ffd6a7] shadow-[0px_4px_12px_rgba(255,105,0,0.08)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3"
            style={{ backgroundImage: "linear-gradient(135deg, rgb(255,247,237) 0%, rgb(255,255,255) 100%)" }}
          >
            <div className="flex items-center gap-3">
              <div className="size-[48px] rounded-[14px] bg-gradient-to-tr from-[#ff6900] to-[#f54900] flex items-center justify-center text-white shadow-md shadow-orange-500/20 shrink-0">
                <RibbonMedalIcon size={28} color="white" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-['Inter:Bold',sans-serif] text-[20px] bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(90deg, #ff6900, #f54900, #ca3500)" }}>
                    Gold Tier
                  </span>
                  <span className="px-2 py-0.5 rounded-full text-[11px] font-semibold bg-orange-100 text-orange-700">Level 4</span>
                </div>
                <p className="font-['Inter:Regular',sans-serif] text-[13px] text-[#4a5565]">
                  Elite Performance Award · 1,683 Total Points
                </p>
              </div>
            </div>

            {/* Next tier progress */}
            <div className="w-full sm:w-[160px] bg-white/80 rounded-[12px] p-2.5 border border-orange-100/80">
              <div className="flex justify-between text-[11px] font-medium text-[#4a5565] mb-1">
                <span>Next: Platinum</span>
                <span className="text-[#f54900] font-bold">84%</span>
              </div>
              <div className="w-full h-2 bg-orange-100 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-[#ff6900] to-[#f54900] rounded-full" style={{ width: '84%' }} />
              </div>
              <span className="text-[10px] text-[#99a1af] block text-right mt-1">317 pts needed</span>
            </div>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-gray-100/80 rounded-[12px] text-[13px]">
            <button
              onClick={() => setFilter('all')}
              className={`flex-1 py-1.5 rounded-[9px] font-medium transition-all cursor-pointer ${
                filter === 'all' ? 'bg-white text-[#0a0a0a] shadow-xs' : 'text-[#6a7282] hover:text-[#0a0a0a]'
              }`}
            >
              All Badges ({badges.length})
            </button>
            <button
              onClick={() => setFilter('unlocked')}
              className={`flex-1 py-1.5 rounded-[9px] font-medium transition-all cursor-pointer ${
                filter === 'unlocked' ? 'bg-white text-[#0a0a0a] shadow-xs' : 'text-[#6a7282] hover:text-[#0a0a0a]'
              }`}
            >
              Unlocked ({badges.filter((b) => b.unlocked).length})
            </button>
            <button
              onClick={() => setFilter('locked')}
              className={`flex-1 py-1.5 rounded-[9px] font-medium transition-all cursor-pointer ${
                filter === 'locked' ? 'bg-white text-[#0a0a0a] shadow-xs' : 'text-[#6a7282] hover:text-[#0a0a0a]'
              }`}
            >
              In Progress ({badges.filter((b) => !b.unlocked).length})
            </button>
          </div>

          {/* Badges List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pb-2">
            {filteredBadges.map((badge) => (
              <div
                key={badge.id}
                className="p-3.5 rounded-[15px] border border-orange-200/80 bg-gradient-to-br from-orange-50/40 via-white to-white shadow-xs"
              >
                <div className="flex items-start gap-3">
                  <div className="size-[42px] rounded-[12px] flex items-center justify-center text-[22px] shrink-0 bg-orange-100/70 border border-orange-200/50">
                    {badge.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-1">
                      <h4 className="font-['Inter:Medium',sans-serif] text-[14px] text-[#0a0a0a] truncate">
                        {badge.title}
                      </h4>
                      <span className="text-[11px] font-semibold text-[#f54900] shrink-0">
                        {badge.points}
                      </span>
                    </div>
                    <p className="font-['Inter:Regular',sans-serif] text-[12px] text-[#6a7282] mt-0.5 line-clamp-2">
                      {badge.description}
                    </p>
                    <div className="mt-2 flex items-center justify-between text-[11px]">
                      <span className="inline-flex items-center gap-1 text-emerald-600 font-medium">
                        ✓ Earned {badge.date}
                      </span>
                      <span className="text-[10px] text-orange-700 px-1.5 py-0.5 rounded-sm bg-orange-100 font-medium">
                        {badge.tier}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Upcoming Badges Placeholder */}
            {filter !== 'locked' && (
              <div className="p-3.5 rounded-[15px] border border-dashed border-orange-200 bg-orange-50/30 flex items-center gap-3">
                <div className="size-[42px] rounded-[12px] flex items-center justify-center text-[20px] shrink-0 bg-white border border-dashed border-orange-200 text-orange-400">
                  🔒
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-['Inter:Medium',sans-serif] text-[13.5px] text-[#364153] font-medium">
                    More Honors Coming Soon
                  </h4>
                  <p className="font-['Inter:Regular',sans-serif] text-[11.5px] text-[#6a7282] mt-0.5">
                    Unlock additional trophies as you hit new performance goals.
                  </p>
                </div>
              </div>
            )}

            {filteredBadges.length === 0 && filter === 'locked' && (
              <div className="col-span-full py-8 text-center flex flex-col items-center gap-1.5">
                <span className="text-2xl">🏆</span>
                <p className="text-[13px] text-[#4a5565] font-medium">No badges in progress currently.</p>
                <p className="text-[11.5px] text-[#99a1af]">You've claimed all active tier rewards!</p>
              </div>
            )}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-5 sm:px-6 py-3 bg-gray-50 border-t border-gray-100 flex items-center justify-between">
          <div className="text-[12px] text-gray-500">
            Current rank: <span className="font-bold text-[#f54900]">#1</span> of 2,210 members
          </div>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-[11px] bg-gradient-to-r from-[#ff6900] to-[#f54900] text-white font-medium text-[13px] hover:from-[#e55d00] hover:to-[#d94000] transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Wall Feed Card ───────────────────────────────────────────────────────────

function WallFeedCard() {
  return (
    <div
      className="rounded-[15px] overflow-hidden shadow-[0px_10px_16px_-3px_rgba(0,0,0,0.1)] flex-1 cursor-default"
      style={{ backgroundImage: "linear-gradient(90deg, #ff6900, #f54900, #ca3500)" }}
    >
      {/* Header row */}
      <div className="flex items-center justify-between px-6 pt-5 pb-0">
        <div className="flex items-center gap-2.5">
          <ActivityIcon color="white" />
          <span className="font-['Inter:Regular',sans-serif] text-[17px] text-white tracking-[-0.02em]">Últimos Posts Del Wall</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="bg-white/20 px-3 py-1 rounded-[9px]">
            <span className="font-['Inter:Semi_Bold',sans-serif] text-[11px] text-white">Live</span>
          </div>
          <button className="font-['Inter:Medium',sans-serif] text-[13px] text-white hover:underline cursor-pointer transition-colors duration-150">View All →</button>
        </div>
      </div>

      {/* Posts */}
      <div className="px-6 pt-4 pb-4 flex flex-col gap-3">
        {/* Post 1 */}
        <div className="bg-white/23 rounded-[15px] p-4 flex items-center gap-3 hover:bg-white/30 transition-colors duration-150 cursor-pointer">
          <span className="text-2xl shrink-0">🎉</span>
          <div>
            <p className="font-['Inter:Medium',sans-serif] text-[17px] text-white leading-snug">Juan acaba de canjear unos audífonos</p>
            <p className="font-['Inter:Regular',sans-serif] text-[13px] text-[#ffedd4] mt-0.5">Hace 5 minutos</p>
          </div>
        </div>

        {/* Post 2 */}
        <div className="bg-white/23 rounded-[15px] p-4 flex items-center gap-3 hover:bg-white/30 transition-colors duration-150 cursor-pointer">
          <span className="text-2xl shrink-0">⭐</span>
          <div>
            <p className="font-['Inter:Medium',sans-serif] text-[17px] text-white leading-snug">Ana subió al puesto #2 en el ranking</p>
            <p className="font-['Inter:Regular',sans-serif] text-[13px] text-[#ffedd4] mt-0.5">Hace 12 minutos</p>
          </div>
        </div>

        {/* View more */}
        <button className="w-full bg-white rounded-[15px] h-[46px] hover:bg-orange-50 hover:shadow-md transition-all duration-150 cursor-pointer active:scale-[0.99]">
          <span className="font-['Inter:Regular',sans-serif] text-[17px] text-[#f54900]">Ver más del Wall</span>
        </button>
      </div>
    </div>
  );
}

// ─── Recent Transactions ──────────────────────────────────────────────────────

const transactions = [
  { date: '01-01', detail: 'Purchase', amount: '+100K', type: 'positive' },
  { date: '01-01', detail: 'Refund', amount: '-20K', type: 'neutral' },
  { date: '03-01', detail: 'Sale', amount: '+250K', type: 'positive' },
  { date: '01-01', detail: 'Purchase', amount: '+100K', type: 'positive' },
  { date: '02-01', detail: 'Refund', amount: '-20K', type: 'neutral' },
  { date: '03-01', detail: 'Sale', amount: '+250K', type: 'positive' },
];

function RecentTransactionsCard() {
  return (
    <div
      className="rounded-[15px] border border-[#ffd6a7] drop-shadow-[0px_10px_8px_rgba(0,0,0,0.1)] cursor-default w-full md:w-[320px] xl:w-[360px] md:flex-none"
      style={{ backgroundImage: "linear-gradient(138deg, rgb(255,247,237) 0%, rgb(255,255,255) 100%)" }}
    >
      {/* Title */}
      <div className="flex items-center justify-between px-5 pt-5 pb-3">
        <div className="flex items-center gap-2.5">
          <TransactionsIcon />
          <span className="font-['Inter:Regular',sans-serif] text-[17px] text-[#0a0a0a]">Recent Transactions</span>
        </div>
        <button className="font-['Inter:Regular',sans-serif] text-[13px] text-[#f54900] hover:underline cursor-pointer transition-colors duration-150">View All →</button>
      </div>

      {/* Table */}
      <div className="mx-4 md:mx-5 mb-4 rounded-[11px] border border-[#ffedd4] shadow-[0px_1px_3px_rgba(0,0,0,0.06)] overflow-hidden">
        {/* Header */}
        <div className="grid grid-cols-[80px_1fr_90px] bg-gradient-to-r from-[#ff6900] to-[#f54900]">
          <div className="px-3 py-3"><span className="font-['Inter:Bold',sans-serif] text-[13px] text-white">Date</span></div>
          <div className="px-3 py-3"><span className="font-['Inter:Bold',sans-serif] text-[13px] text-white">Details</span></div>
          <div className="px-3 py-3"><span className="font-['Inter:Bold',sans-serif] text-[13px] text-white">Amount</span></div>
        </div>
        {/* Rows */}
        {transactions.map((tx, i) => (
          <div
            key={i}
            className={`grid grid-cols-[80px_1fr_90px] border-b border-[#f3f4f6] last:border-0 hover:bg-orange-50/50 transition-colors duration-100 cursor-pointer`}
          >
            <div className="px-3 py-3.5">
              <span className="font-['Inter:Regular',sans-serif] text-[11px] text-[#364153]">{tx.date}</span>
            </div>
            <div className="px-3 py-3.5">
              <span className="font-['Inter:Regular',sans-serif] text-[13px] text-[#4a5565]">{tx.detail}</span>
            </div>
            <div className="px-3 py-3.5">
              <span
                className={`font-['Inter:Medium',sans-serif] text-[13px] px-2.5 py-1 rounded-[9px] ${
                  tx.type === 'positive' ? 'bg-[#ffedd4] text-[#ca3500]' : 'bg-[#f3f4f6] text-[#364153]'
                }`}
              >
                {tx.amount}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between px-5 pb-4">
        <button className="flex items-center gap-2 opacity-30 cursor-not-allowed px-3 py-1.5 rounded-[11px]">
          <ChevronLeft />
          <span className="font-['Inter:Regular',sans-serif] text-[13px] text-[#4a5565]">Prev</span>
        </button>
        <div className="border border-black/10 rounded-[9px] px-3 py-1">
          <span className="font-['Inter:Medium',sans-serif] text-[13px] text-[#0a0a0a]">1/5</span>
        </div>
        <button className="flex items-center gap-2 hover:bg-gray-100 px-3 py-1.5 rounded-[11px] cursor-pointer transition-colors duration-150 active:bg-gray-200">
          <span className="font-['Inter:Regular',sans-serif] text-[13px] text-[#4a5565]">Next</span>
          <ChevronRight />
        </button>
      </div>
    </div>
  );
}

// ─── Ranking & Program Balance ────────────────────────────────────────────────

function RankingCard({ mobileBottomLink = false }: { mobileBottomLink?: boolean }) {
  return (
    <div
      className="rounded-[15px] border border-[#ffd6a7] drop-shadow-[0px_10px_8px_rgba(0,0,0,0.1)] flex-1 py-4 px-4 md:py-5 md:px-5 cursor-default hover:shadow-[0px_12px_24px_rgba(255,105,0,0.12)] transition-shadow duration-200 flex flex-col justify-between"
      style={{ backgroundImage: "linear-gradient(166deg, rgb(255,247,237) 0%, rgb(255,255,255) 100%)" }}
    >
      <div className="flex items-center justify-between mb-3 gap-1">
        <div className="flex items-center gap-1.5 md:gap-2 min-w-0">
          <RankingIcon />
          <span className="font-['Inter:Regular',sans-serif] text-[13.5px] md:text-[17px] text-[#0a0a0a] tracking-[-0.02em] truncate">Ranking Actual</span>
        </div>
        {!mobileBottomLink && (
          <button className="font-['Inter:Regular',sans-serif] text-[12px] md:text-[13px] text-[#f54900] hover:underline cursor-pointer transition-colors duration-150 shrink-0">View All →</button>
        )}
      </div>
      <div className="text-center my-1">
        <p
          className="font-['Inter:Bold',sans-serif] text-[34px] md:text-[46px] bg-clip-text text-transparent tracking-[0.01em] leading-none"
          style={{ backgroundImage: "linear-gradient(90deg, #ff6900, #f54900, #ca3500)" }}
        >
          #1
        </p>
        <p className="font-['Inter:Regular',sans-serif] text-[11px] md:text-[12px] text-[#6a7282] mt-1.5">#1 of 2210 Members</p>
      </div>
      {mobileBottomLink && (
        <div className="text-center mt-3 pt-1">
          <button className="font-['Inter:Regular',sans-serif] text-[12px] text-[#f54900] hover:underline cursor-pointer transition-colors duration-150">View All →</button>
        </div>
      )}
    </div>
  );
}

function ProgramBalanceCard({ mobileBottomLink = false }: { mobileBottomLink?: boolean }) {
  return (
    <div
      className="rounded-[15px] border border-[#ffd6a7] drop-shadow-[0px_10px_8px_rgba(0,0,0,0.1)] flex-1 py-4 px-4 md:py-5 md:px-5 cursor-default hover:shadow-[0px_12px_24px_rgba(255,105,0,0.12)] transition-shadow duration-200 flex flex-col justify-between"
      style={{ backgroundImage: "linear-gradient(166deg, rgb(255,247,237) 0%, rgb(255,255,255) 100%)" }}
    >
      <div className="flex items-center justify-between mb-3 gap-1">
        <div className="flex items-center gap-1.5 md:gap-2 min-w-0">
          <BalanceIcon />
          <span className="font-['Inter:Regular',sans-serif] text-[13.5px] md:text-[17px] text-[#0a0a0a] tracking-[-0.02em] truncate">Program Balance</span>
        </div>
        {!mobileBottomLink && (
          <button className="font-['Inter:Regular',sans-serif] text-[12px] md:text-[13px] text-[#f54900] hover:underline cursor-pointer transition-colors duration-150 shrink-0">View All →</button>
        )}
      </div>
      <div className="text-center my-1">
        <p
          className="font-['Inter:Bold',sans-serif] text-[34px] md:text-[46px] bg-clip-text text-transparent tracking-[0.01em] leading-none"
          style={{ backgroundImage: "linear-gradient(90deg, #ff6900, #f54900, #ca3500)" }}
        >
          66
        </p>
        <p className="font-['Inter:Regular',sans-serif] text-[11px] md:text-[12px] text-[#6a7282] mt-1.5">Total Points</p>
      </div>
      {mobileBottomLink && (
        <div className="text-center mt-3 pt-1">
          <button className="font-['Inter:Regular',sans-serif] text-[12px] text-[#f54900] hover:underline cursor-pointer transition-colors duration-150">View All →</button>
        </div>
      )}
    </div>
  );
}

// ─── Product Card ─────────────────────────────────────────────────────────────

function ProductCard() {
  return (
    <div className="bg-white border border-[#ffd6a7] drop-shadow-[0px_4px_3px_rgba(0,0,0,0.06)] rounded-[15px] flex-1 min-w-0 cursor-default group hover:shadow-[0px_12px_24px_rgba(255,105,0,0.15)] transition-shadow duration-200">
      {/* Image area */}
      <div
        className="mx-3 md:mx-4 mt-3 md:mt-4 rounded-[11px] h-[110px] md:h-[196px] flex items-center justify-center relative overflow-hidden"
        style={{ backgroundImage: "linear-gradient(147deg, rgb(255,247,237) 0%, rgb(255,237,212) 100%)" }}
      >
        <LargeShoppingBag />
        {/* Badge */}
        <div className="absolute bottom-3 left-3 bg-white rounded-[9px] shadow-[0px_1px_3px_rgba(0,0,0,0.08)] px-2.5 py-1">
          <span className="font-['Inter:Medium',sans-serif] text-[13px] text-[#f54900]">2000 pts</span>
        </div>
      </div>

      {/* Info */}
      <div className="px-3 md:px-4 pt-2 md:pt-3 pb-1">
        <p className="font-['Inter:Regular',sans-serif] text-[13px] md:text-[15px] text-[#101828]">Product 01</p>
        <div className="flex items-center gap-0.5 md:gap-1 mt-1">
          <StarFull /><StarFull /><StarFull /><StarFull /><StarEmpty />
        </div>
      </div>

      {/* Redeem button */}
      <div className="px-3 md:px-4 pb-3 md:pb-4 pt-1 md:pt-2">
        <button className="w-full h-[32px] md:h-[38px] rounded-[10px] bg-gradient-to-r from-[#ff6900] to-[#f54900] text-white font-['Inter:Regular',sans-serif] text-[13px] md:text-[15px] hover:from-[#e55d00] hover:to-[#d94000] transition-all duration-150 cursor-pointer active:scale-[0.98]">
          Redeem
        </button>
      </div>
    </div>
  );
}

// ─── Products Catalog ─────────────────────────────────────────────────────────

function ProductsCatalog() {
  const [activeTab, setActiveTab] = useState<'gallery' | 'favorites'>('gallery');

  return (
    <div className="bg-white border border-[rgba(255,105,0,0.34)] rounded-[15px] shadow-[0px_10px_16px_-3px_rgba(0,0,0,0.06)] cursor-default">
      {/* Card header */}
      <div className="flex items-center justify-between px-6 pt-5">
        <div className="flex items-center gap-2.5">
          <ShoppingBagIcon />
          <span className="font-['Inter:Regular',sans-serif] text-[17px] text-[#0a0a0a] tracking-[-0.02em]">Products Catalog</span>
        </div>
        <button className="font-['Inter:Regular',sans-serif] text-[17px] text-[#f54900] hover:underline cursor-pointer transition-colors duration-150">View All →</button>
      </div>

      {/* Tabs */}
      <div className="mx-6 mt-4 bg-[#ececf0] rounded-[15px] p-1 flex gap-1">
        <button
          onClick={() => setActiveTab('gallery')}
          className={`flex-1 py-2 rounded-[13px] font-['Inter:Medium',sans-serif] text-[15px] transition-all duration-150 cursor-pointer ${
            activeTab === 'gallery'
              ? 'bg-white text-[#0a0a0a] shadow-sm border border-[#ff8d28]'
              : 'text-[#0a0a0a] hover:bg-white/50'
          }`}
        >
          Product Gallery
        </button>
        <button
          onClick={() => setActiveTab('favorites')}
          className={`flex-1 py-2 rounded-[13px] font-['Inter:Medium',sans-serif] text-[15px] transition-all duration-150 cursor-pointer flex items-center justify-center gap-2 ${
            activeTab === 'favorites'
              ? 'bg-white text-[#0a0a0a] shadow-sm border border-[#ff8d28]'
              : 'text-[#0a0a0a] hover:bg-white/50'
          }`}
        >
          <HeartIcon />
          Favorites
        </button>
      </div>

      {/* Product grid */}
      <div className="grid grid-cols-2 md:flex md:flex-row gap-4 px-6 py-5">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
}

// ─── Budget Table ─────────────────────────────────────────────────────────────

const budgetRows = [
  { variable: 'sales', period: 'Agosto 2026', targets: 100, results: 95, achievement: 78, points: 0 },
  { variable: 'sales', period: 'Agosto 2026', targets: 100, results: 95, achievement: 76, points: 0 },
  { variable: 'sales', period: 'Agosto 2026', targets: 100, results: 95, achievement: 78, points: 0 },
  { variable: 'sales', period: 'Agosto 2026', targets: 100, results: 95, achievement: 78, points: 0 },
  { variable: 'sales', period: 'Agosto 2026', targets: 100, results: 95, achievement: 78, points: 0 },
];

function ProgressBar({ value }: { value: number }) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex-1 h-1.5 bg-[#d9d9d9] rounded-full overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-[#ff6900] via-[#f54900] to-[#ca3500]"
          style={{ width: `${value}%` }}
        />
      </div>
      <span
        className="font-['Inter:Semi_Bold',sans-serif] text-[14px] bg-clip-text text-transparent shrink-0"
        style={{ backgroundImage: "linear-gradient(180deg, #ff8d28, #c05a00)" }}
      >
        {value}%
      </span>
    </div>
  );
}

function BudgetTable() {
  return (
    <div
      className="rounded-[15px] border border-[#ffd6a7] drop-shadow-[0px_10px_8px_rgba(0,0,0,0.06)] cursor-default"
      style={{ backgroundImage: "linear-gradient(160deg, rgb(255,247,237) 0%, rgb(255,255,255) 100%)" }}
    >
      {/* Title */}
      <div className="flex items-center justify-between px-6 pt-5 pb-4">
        <div className="flex items-center gap-2 min-w-0">
          <ActivityIcon />
          <span className="font-['Inter:Regular',sans-serif] text-[13px] md:text-[17px] text-[#0a0a0a] tracking-[-0.02em] leading-tight">
            Select period to view budget
          </span>
        </div>
        <button className="font-['Inter:Regular',sans-serif] text-[17px] text-[#f54900] hover:underline cursor-pointer transition-colors duration-150 shrink-0 ml-4">View All →</button>
      </div>

      {/* Table container */}
      <div className="mx-4 md:mx-6 mb-4 rounded-[11px] border border-[#ffedd4] shadow-[0px_1px_3px_rgba(0,0,0,0.06)] overflow-x-auto">
        {/* Header */}
        <div className="grid grid-cols-[1.2fr_1.2fr_0.8fr_0.8fr_1.5fr_0.8fr] bg-gradient-to-r from-[#ff6900] to-[#f54900]">
          {['VARIABLE NAME', 'PERIOD', 'TARGETS', 'RESULTS', 'ACHIEVEMENT', 'POINTS'].map(col => (
            <div key={col} className="px-4 py-4">
              <span className="font-['Inter:Medium',sans-serif] text-[13px] text-white tracking-[0.03em]">{col}</span>
            </div>
          ))}
        </div>

        {/* Rows */}
        {budgetRows.map((row, i) => (
          <div
            key={i}
            className="grid grid-cols-[1.2fr_1.2fr_0.8fr_0.8fr_1.5fr_0.8fr] border-b border-[#f3f4f6] last:border-0 hover:bg-orange-50/40 transition-colors duration-100"
          >
            <div className="px-4 py-4">
              <span className="font-['Inter:Regular',sans-serif] text-[17px] text-[#4a5565]">{row.variable}</span>
            </div>
            <div className="px-4 py-4">
              <span className="font-['Inter:Regular',sans-serif] text-[14px] text-[#364153]">{row.period}</span>
            </div>
            <div className="px-4 py-4">
              <span className="font-['Inter:Regular',sans-serif] text-[14px] text-[#364153]">{row.targets}</span>
            </div>
            <div className="px-4 py-4">
              <span className="font-['Inter:Regular',sans-serif] text-[14px] text-[#364153]">{row.results}</span>
            </div>
            <div className="px-4 py-4">
              <ProgressBar value={row.achievement} />
            </div>
            <div className="px-4 py-4">
              <span className="font-['Inter:Regular',sans-serif] text-[14px] text-[#364153]">{row.points}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between px-6 pb-5">
        <button className="flex items-center gap-2 opacity-30 cursor-not-allowed px-3 py-1.5 rounded-[11px]">
          <ChevronLeft />
          <span className="font-['Inter:Regular',sans-serif] text-[13px] text-[#4a5565]">Prev</span>
        </button>
        <div className="border border-black/10 rounded-[9px] px-3 py-1">
          <span className="font-['Inter:Medium',sans-serif] text-[13px] text-[#0a0a0a]">1/5</span>
        </div>
        <button className="flex items-center gap-2 hover:bg-gray-100 px-3 py-1.5 rounded-[11px] cursor-pointer transition-colors duration-150 active:bg-gray-200">
          <span className="font-['Inter:Regular',sans-serif] text-[13px] text-[#4a5565]">Next</span>
          <ChevronRight />
        </button>
      </div>
    </div>
  );
}

// ─── Results Page ─────────────────────────────────────────────────────────────

const RESULTS_DATA = [
  { id: 1, program: 'Aogsto', type: 'Primary', start: '21, Agosto 2026', end: '21, Agosto 2026' },
  { id: 2, program: 'Aogsto', type: 'Primary', start: '21, Agosto 2026', end: '21, Agosto 2026' },
  { id: 3, program: 'Aogsto', type: 'Primary', start: '21, Agosto 2026', end: '21, Agosto 2026' },
  { id: 4, program: 'Aogsto', type: 'Primary', start: '21, Agosto 2026', end: '21, Agosto 2026' },
  { id: 5, program: 'Aogsto', type: 'Purchase', start: '21, Agosto 2026', end: '21, Agosto 2026' },
  { id: 6, program: '01-01', type: 'Purchase', start: '21, Agosto 2026', end: '21, Agosto 2026' },
];

const RESULTS_PER_PAGE_MOBILE = 6;
const RESULTS_PER_PAGE_DESKTOP = 4;
const TOTAL_PAGES = 5;

function ResultsPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [tableOptionsOpen, setTableOptionsOpen] = useState(false);

  return (
    <main className="flex-1 overflow-y-auto px-4 md:px-6 py-5 md:py-6 flex flex-col gap-4 md:gap-5">
      {/* Page heading — same gradient style as WallPage */}
      <div className="flex flex-col gap-1 md:gap-2">
        <h1
          className="font-['Inter:Regular',sans-serif] text-[28px] md:text-[38px] leading-tight bg-clip-text text-transparent"
          style={{ backgroundImage: "linear-gradient(90deg, rgb(16,24,40) 0%, rgb(245,73,0) 100%)" }}
        >
          Results
        </h1>
        <div className="flex items-center gap-2">
          <CalendarIcon color="#4A5565" />
          <p className="font-['Inter:Regular',sans-serif] text-[14px] md:text-[17px] text-[#4a5565]">Here are your results</p>
        </div>
      </div>

      {/* Orange header bar — same height/style as WallPage banner */}
      <div
        className="relative rounded-[14px] overflow-hidden shadow-[0px_10px_16px_-3px_rgba(0,0,0,0.08)] flex items-center gap-3 px-4 md:px-6 h-[64px] md:h-[72px] shrink-0"
        style={{ backgroundImage: "linear-gradient(to right, #ff6900, #f54900, #ca3500)" }}
      >
        <ResultsIcon color="white" />
        <span className="font-['Inter:Regular',sans-serif] text-[15px] md:text-[17px] text-white">Program Results</span>
        <div className="ml-auto relative">
          <button
            onClick={() => setTableOptionsOpen(!tableOptionsOpen)}
            className="flex items-center gap-2 bg-white/20 hover:bg-white/30 px-3 md:px-4 py-1 md:py-1.5 rounded-[10px] md:rounded-[11px] cursor-pointer transition-all duration-150"
          >
            <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[13px] md:text-[14px] text-white">Table Options</span>
            <ChevronDownIcon />
          </button>
          {tableOptionsOpen && (
            <div className="absolute right-0 top-full mt-2 w-[180px] bg-white rounded-[12px] shadow-lg border border-[#ffd6a7] py-1 z-20">
              {['Export CSV', 'Export PDF', 'Filter Columns', 'Sort'].map((opt) => (
                <button key={opt} className="w-full text-left px-4 py-2.5 text-[13px] text-[#364153] font-['Inter:Regular',sans-serif] hover:bg-orange-50 hover:text-[#f54900] transition-colors duration-100 cursor-pointer">
                  {opt}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Results table card — same style as RecentTransactionsCard */}
      <div
        className="rounded-[15px] border border-[#ffd6a7] drop-shadow-[0px_10px_8px_rgba(0,0,0,0.1)] cursor-default"
        style={{ backgroundImage: "linear-gradient(138deg, rgb(255,247,237) 0%, rgb(255,255,255) 100%)" }}
      >
        {/* Card sub-header */}
        <div className="flex items-center justify-between px-5 pt-5 pb-3">
          <div className="flex items-center gap-2.5">
            <ResultsIcon color="#f54900" />
            <span className="font-['Inter:Regular',sans-serif] text-[17px] text-[#0a0a0a]">Here are your results</span>
          </div>
          <button className="font-['Inter:Regular',sans-serif] text-[13px] text-[#f54900] hover:underline cursor-pointer transition-colors duration-150">View All →</button>
        </div>

        {/* Inner table container — same as RecentTransactionsCard */}
        <div className="mx-4 md:mx-5 mb-4 rounded-[11px] border border-[#ffedd4] shadow-[0px_1px_3px_rgba(0,0,0,0.06)] overflow-hidden">
          {/* Desktop table */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr style={{ backgroundImage: "linear-gradient(to right, #ff6900, #f54900, #ca3500)" }}>
                  <th className="text-left px-5 py-3 font-['Inter:Bold',sans-serif] text-[13px] text-white uppercase tracking-[0.04em]">Program Name</th>
                  <th className="text-left px-5 py-3 font-['Inter:Bold',sans-serif] text-[13px] text-white uppercase tracking-[0.04em]">Type</th>
                  <th className="text-left px-5 py-3 font-['Inter:Bold',sans-serif] text-[13px] text-white uppercase tracking-[0.04em]">Start Date</th>
                  <th className="text-left px-5 py-3 font-['Inter:Bold',sans-serif] text-[13px] text-white uppercase tracking-[0.04em]">End Date</th>
                  <th className="text-left px-5 py-3 font-['Inter:Bold',sans-serif] text-[13px] text-white uppercase tracking-[0.04em]">Actions</th>
                </tr>
              </thead>
              <tbody>
                {RESULTS_DATA.slice(0, RESULTS_PER_PAGE_DESKTOP).map((row, idx) => (
                  <tr
                    key={row.id}
                    className={`${idx < RESULTS_PER_PAGE_DESKTOP - 1 ? 'border-b border-[#f3f4f6]' : ''} hover:bg-orange-50/50 transition-colors duration-100 cursor-pointer`}
                  >
                    <td className="px-5 py-3.5 font-['Inter:Regular',sans-serif] text-[13px] text-[#364153]">{row.program}</td>
                    <td className="px-5 py-3.5 font-['Inter:Regular',sans-serif] text-[13px] text-[#4a5565]">{row.type}</td>
                    <td className="px-5 py-3.5 font-['Inter:Regular',sans-serif] text-[13px] text-[#4a5565]">{row.start}</td>
                    <td className="px-5 py-3.5 font-['Inter:Regular',sans-serif] text-[13px] text-[#4a5565]">{row.end}</td>
                    <td className="px-5 py-3.5">
                      <button className="font-['Inter:Regular',sans-serif] text-[13px] text-[#f54900] hover:underline cursor-pointer">View</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile table — 3 columns */}
          <div className="md:hidden overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr style={{ backgroundImage: "linear-gradient(to right, #ff6900, #f54900, #ca3500)" }}>
                  <th className="text-left px-3 py-3 font-['Inter:Bold',sans-serif] text-[11px] text-white uppercase tracking-[0.04em]">Program Name</th>
                  <th className="text-left px-3 py-3 font-['Inter:Bold',sans-serif] text-[11px] text-white uppercase tracking-[0.04em]">Type</th>
                  <th className="text-left px-3 py-3 font-['Inter:Bold',sans-serif] text-[11px] text-white uppercase tracking-[0.04em]">Start Date</th>
                </tr>
              </thead>
              <tbody>
                {RESULTS_DATA.slice(0, RESULTS_PER_PAGE_MOBILE).map((row, idx) => (
                  <tr key={row.id} className={`${idx < RESULTS_PER_PAGE_MOBILE - 1 ? 'border-b border-[#f3f4f6]' : ''} hover:bg-orange-50/50 transition-colors duration-100`}>
                    <td className="px-3 py-3.5 font-['Inter:Regular',sans-serif] text-[11px] text-[#364153]">{row.program === 'Aogsto' ? '01-01' : row.program}</td>
                    <td className="px-3 py-3.5 font-['Inter:Regular',sans-serif] text-[11px] text-[#4a5565]">Purchase</td>
                    <td className="px-3 py-3.5 font-['Inter:Regular',sans-serif] text-[11px] text-[#4a5565]">{row.start}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pagination — same style as RecentTransactionsCard */}
        <div className="flex items-center justify-between px-5 pb-4">
          <button
            onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="flex items-center gap-2 disabled:opacity-30 disabled:cursor-not-allowed px-3 py-1.5 rounded-[11px] hover:bg-orange-50 cursor-pointer transition-colors duration-150 active:bg-gray-200"
          >
            <ChevronLeft />
            <span className="font-['Inter:Regular',sans-serif] text-[13px] text-[#4a5565]">Prev</span>
          </button>
          <div className="border border-black/10 rounded-[9px] px-3 py-1">
            <span className="font-['Inter:Medium',sans-serif] text-[13px] text-[#0a0a0a]">{currentPage}/{TOTAL_PAGES}</span>
          </div>
          <button
            onClick={() => setCurrentPage(p => Math.min(TOTAL_PAGES, p + 1))}
            disabled={currentPage === TOTAL_PAGES}
            className="flex items-center gap-2 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-orange-50 px-3 py-1.5 rounded-[11px] cursor-pointer transition-colors duration-150 active:bg-gray-200"
          >
            <span className="font-['Inter:Regular',sans-serif] text-[13px] text-[#4a5565]">Next</span>
            <ChevronRight />
          </button>
        </div>
      </div>
    </main>
  );
}

// ─── User Rankings Page ───────────────────────────────────────────────────────

const RANKINGS_DATA = [
  { id: 1, currentRank: 1, prevRank: '-', userId: '6776j', userName: 'user1', achievement: '25%' },
  { id: 2, currentRank: 2, prevRank: '-', userId: 'tyyt678', userName: 'user3', achievement: '25%' },
  { id: 3, currentRank: 3, prevRank: '-', userId: 'gh6677', userName: 'uskhan', achievement: '-' },
  { id: 4, currentRank: 4, prevRank: '2', userId: 'ak8821', userName: 'alex99', achievement: '50%' },
  { id: 5, currentRank: 5, prevRank: '6', userId: 'mr1092', userName: 'maria_l', achievement: '75%' },
  { id: 6, currentRank: 6, prevRank: '4', userId: 'cr4490', userName: 'carlos_r', achievement: '10%' },
];

function UserRankingsPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [filtersOpen, setFiltersOpen] = useState(false);

  return (
    <main className="flex-1 overflow-y-auto px-4 md:px-6 py-5 md:py-6 flex flex-col gap-4 md:gap-5">
      {/* Page heading — matches design system & Results / WallPage */}
      <div className="flex flex-col gap-1 md:gap-2">
        <h1
          className="font-['Inter:Regular',sans-serif] text-[28px] md:text-[38px] leading-tight bg-clip-text text-transparent"
          style={{ backgroundImage: "linear-gradient(90deg, rgb(16,24,40) 0%, rgb(245,73,0) 100%)" }}
        >
          User Rankings
        </h1>
        <div className="flex items-center gap-2">
          <CalendarIcon color="#4A5565" />
          <p className="font-['Inter:Regular',sans-serif] text-[14px] md:text-[17px] text-[#4a5565]">Here are the current user rankings and achievements</p>
        </div>
      </div>

      {/* Top Banner Bar — same height/style as Results / WallPage banner */}
      <div
        className="relative rounded-[14px] overflow-hidden shadow-[0px_10px_16px_-3px_rgba(0,0,0,0.08)] flex items-center gap-3 px-4 md:px-6 h-[64px] md:h-[72px] shrink-0"
        style={{ backgroundImage: "linear-gradient(to right, #ff6900, #f54900, #ca3500)" }}
      >
        <RankingIcon color="white" />
        <span className="font-['Inter:Regular',sans-serif] text-[15px] md:text-[17px] text-white">User Rankings</span>
        <div className="ml-auto relative">
          <button
            onClick={() => setFiltersOpen(!filtersOpen)}
            className="flex items-center gap-2 bg-white/20 hover:bg-white/30 px-3 md:px-4 py-1 md:py-1.5 rounded-[10px] md:rounded-[11px] cursor-pointer transition-all duration-150"
          >
            <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[13px] md:text-[14px] text-white">Filters</span>
            <ChevronDownIcon />
          </button>
          {filtersOpen && (
            <div className="absolute right-0 top-full mt-2 w-[180px] bg-white rounded-[12px] shadow-lg border border-[#ffd6a7] py-1 z-20">
              {['All Users', 'Top 10', 'Top 50', 'By Achievement', 'Active Only'].map((opt) => (
                <button
                  key={opt}
                  className="w-full text-left px-4 py-2.5 text-[13px] text-[#364153] font-['Inter:Regular',sans-serif] hover:bg-orange-50 hover:text-[#f54900] transition-colors duration-100 cursor-pointer"
                >
                  {opt}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* User Rankings Card — consistent warm gradient and borders */}
      <div
        className="rounded-[15px] border border-[#ffd6a7] drop-shadow-[0px_10px_8px_rgba(0,0,0,0.1)] cursor-default"
        style={{ backgroundImage: "linear-gradient(138deg, rgb(255,247,237) 0%, rgb(255,255,255) 100%)" }}
      >
        {/* Card Title Header */}
        <div className="flex items-center justify-between px-5 pt-5 pb-3">
          <div className="flex items-center gap-2.5">
            <RankingIcon color="#f54900" />
            <span className="font-['Inter:Regular',sans-serif] text-[17px] text-[#0a0a0a]">User Rankings</span>
          </div>
          <button className="font-['Inter:Regular',sans-serif] text-[13px] text-[#f54900] hover:underline cursor-pointer transition-colors duration-150">
            View All →
          </button>
        </div>

        {/* Inner Table Container */}
        <div className="mx-4 md:mx-5 mb-4 rounded-[11px] border border-[#ffedd4] shadow-[0px_1px_3px_rgba(0,0,0,0.06)] overflow-hidden">
          {/* Desktop Table (md+) */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr style={{ backgroundImage: "linear-gradient(to right, #ff6900, #f54900, #ca3500)" }}>
                  <th className="text-center px-5 py-3 font-['Inter:Bold',sans-serif] text-[13px] text-white uppercase tracking-[0.04em] border-r border-white/20">
                    CURRENT RANK
                  </th>
                  <th className="text-center px-5 py-3 font-['Inter:Bold',sans-serif] text-[13px] text-white uppercase tracking-[0.04em] border-r border-white/20">
                    PREVIOUS RANK
                  </th>
                  <th className="text-center px-5 py-3 font-['Inter:Bold',sans-serif] text-[13px] text-white uppercase tracking-[0.04em] border-r border-white/20">
                    USER ID
                  </th>
                  <th className="text-center px-5 py-3 font-['Inter:Bold',sans-serif] text-[13px] text-white uppercase tracking-[0.04em] border-r border-white/20">
                    USER NAME
                  </th>
                  <th className="text-center px-5 py-3 font-['Inter:Bold',sans-serif] text-[13px] text-white uppercase tracking-[0.04em]">
                    ACHIEVEMENT
                  </th>
                </tr>
              </thead>
              <tbody>
                {RANKINGS_DATA.map((row, idx) => (
                  <tr
                    key={row.id}
                    className={`${idx < RANKINGS_DATA.length - 1 ? 'border-b border-[#f3f4f6]' : ''} hover:bg-orange-50/50 transition-colors duration-100 cursor-pointer`}
                  >
                    <td className="px-5 py-4 text-center font-['Inter:Regular',sans-serif] text-[14px] text-[#364153]">
                      {row.currentRank}
                    </td>
                    <td className="px-5 py-4 text-center font-['Inter:Regular',sans-serif] text-[14px] text-[#4a5565]">
                      {row.prevRank}
                    </td>
                    <td className="px-5 py-4 text-center font-['Inter:Regular',sans-serif] text-[14px] text-[#364153] font-mono">
                      {row.userId}
                    </td>
                    <td className="px-5 py-4 text-center font-['Inter:Regular',sans-serif] text-[14px] text-[#364153]">
                      {row.userName}
                    </td>
                    <td className="px-5 py-4 flex items-center justify-center">
                      {row.achievement === '-' ? (
                        <span className="text-[#4a5565] font-['Inter:Regular',sans-serif] text-[14px]">-</span>
                      ) : (
                        <div className="w-[120px] h-[26px] rounded-[7px] border border-[#ff8d28]/60 overflow-hidden flex items-center relative bg-white">
                          <div
                            className="h-full"
                            style={{ width: row.achievement, backgroundImage: "linear-gradient(to right, #ff6900, #f54900, #ca3500)" }}
                          />
                          <span className="absolute inset-0 flex items-center justify-center font-['Inter:Bold',sans-serif] text-[12px] font-bold text-[#1f2937]">
                            {row.achievement}
                          </span>
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Table */}
          <div className="md:hidden overflow-x-auto">
            <table className="w-full min-w-[340px]">
              <thead>
                <tr style={{ backgroundImage: "linear-gradient(to right, #ff6900, #f54900, #ca3500)" }}>
                  <th className="text-center px-3 py-3 font-['Inter:Bold',sans-serif] text-[11px] text-white uppercase tracking-[0.04em] border-r border-white/20">
                    RANK
                  </th>
                  <th className="text-center px-3 py-3 font-['Inter:Bold',sans-serif] text-[11px] text-white uppercase tracking-[0.04em] border-r border-white/20">
                    USER
                  </th>
                  <th className="text-center px-3 py-3 font-['Inter:Bold',sans-serif] text-[11px] text-white uppercase tracking-[0.04em]">
                    ACHIEVEMENT
                  </th>
                </tr>
              </thead>
              <tbody>
                {RANKINGS_DATA.map((row, idx) => (
                  <tr
                    key={row.id}
                    className={`${idx < RANKINGS_DATA.length - 1 ? 'border-b border-[#f3f4f6]' : ''} hover:bg-orange-50/50 transition-colors duration-100`}
                  >
                    <td className="px-3 py-3.5 text-center font-['Inter:Regular',sans-serif] text-[12px] text-[#364153]">
                      #{row.currentRank}
                    </td>
                    <td className="px-3 py-3.5 text-center font-['Inter:Regular',sans-serif] text-[12px] text-[#364153]">
                      <div className="font-medium text-[#101828]">{row.userName}</div>
                      <div className="text-[10px] text-[#6a7282] font-mono">{row.userId}</div>
                    </td>
                    <td className="px-3 py-3.5 flex items-center justify-center">
                      {row.achievement === '-' ? (
                        <span className="text-[#4a5565] font-['Inter:Regular',sans-serif] text-[12px]">-</span>
                      ) : (
                        <div className="w-[84px] h-[22px] rounded-[6px] border border-[#ff8d28]/60 overflow-hidden flex items-center relative bg-white">
                          <div
                            className="h-full"
                            style={{ width: row.achievement, backgroundImage: "linear-gradient(to right, #ff6900, #f54900, #ca3500)" }}
                          />
                          <span className="absolute inset-0 flex items-center justify-center font-['Inter:Bold',sans-serif] text-[10px] font-bold text-[#1f2937]">
                            {row.achievement}
                          </span>
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pagination — matches theme exactly */}
        <div className="flex items-center justify-between px-5 pb-4">
          <button
            onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="flex items-center gap-2 disabled:opacity-30 disabled:cursor-not-allowed px-3 py-1.5 rounded-[11px] hover:bg-orange-50 cursor-pointer transition-colors duration-150 active:bg-gray-200"
          >
            <ChevronLeft />
            <span className="font-['Inter:Regular',sans-serif] text-[13px] text-[#4a5565]">Prev</span>
          </button>
          <div className="border border-black/10 rounded-[9px] px-3 py-1">
            <span className="font-['Inter:Medium',sans-serif] text-[13px] text-[#0a0a0a]">{currentPage}/5</span>
          </div>
          <button
            onClick={() => setCurrentPage(p => Math.min(5, p + 1))}
            disabled={currentPage === 5}
            className="flex items-center gap-2 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-orange-50 px-3 py-1.5 rounded-[11px] cursor-pointer transition-colors duration-150 active:bg-gray-200"
          >
            <span className="font-['Inter:Regular',sans-serif] text-[13px] text-[#4a5565]">Next</span>
            <ChevronRight />
          </button>
        </div>
      </div>
    </main>
  );
}

// ─── Badges Page ──────────────────────────────────────────────────────────────

const PAGE_BADGES = [
  {
    id: '1',
    title: 'Top Performer',
    category: 'Performance',
    description: 'Achieved #1 sales rank among 2,210 team members',
    icon: '🥇',
    unlocked: true,
    date: 'Aug 28, 2026',
    points: '+250 Pts',
    tier: 'Gold',
  },
];

function BadgesPage() {
  const [filter, setFilter] = useState<'all' | 'unlocked' | 'locked'>('all');
  const [filtersOpen, setFiltersOpen] = useState(false);

  const filteredBadges = PAGE_BADGES.filter((b) => {
    if (filter === 'unlocked') return b.unlocked;
    if (filter === 'locked') return !b.unlocked;
    return true;
  });

  return (
    <main className="flex-1 overflow-y-auto px-4 md:px-6 py-5 md:py-6 flex flex-col gap-4 md:gap-5">
      {/* Page Heading */}
      <div className="flex flex-col gap-1 md:gap-2">
        <h1
          className="font-['Inter:Regular',sans-serif] text-[28px] md:text-[38px] leading-tight bg-clip-text text-transparent"
          style={{ backgroundImage: "linear-gradient(90deg, rgb(16,24,40) 0%, rgb(245,73,0) 100%)" }}
        >
          Badges
        </h1>
        <div className="flex items-center gap-2">
          <CalendarIcon color="#4A5565" />
          <p className="font-['Inter:Regular',sans-serif] text-[14px] md:text-[17px] text-[#4a5565]">
            Here are your achievements and earned badges
          </p>
        </div>
      </div>

      {/* Top Banner Bar */}
      <div
        className="relative rounded-[14px] overflow-hidden shadow-[0px_10px_16px_-3px_rgba(0,0,0,0.08)] flex items-center gap-3 px-4 md:px-6 h-[64px] md:h-[72px] shrink-0"
        style={{ backgroundImage: "linear-gradient(to right, #ff6900, #f54900, #ca3500)" }}
      >
        <RibbonMedalIcon size={24} color="white" />
        <span className="font-['Inter:Regular',sans-serif] text-[15px] md:text-[17px] text-white">Badges & Honors</span>
        <div className="ml-auto relative">
          <button
            onClick={() => setFiltersOpen(!filtersOpen)}
            className="flex items-center gap-2 bg-white/20 hover:bg-white/30 px-3 md:px-4 py-1 md:py-1.5 rounded-[10px] md:rounded-[11px] cursor-pointer transition-all duration-150"
          >
            <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[13px] md:text-[14px] text-white">Options</span>
            <ChevronDownIcon />
          </button>
          {filtersOpen && (
            <div className="absolute right-0 top-full mt-2 w-[180px] bg-white rounded-[12px] shadow-lg border border-[#ffd6a7] py-1 z-20">
              {['All Badges', 'Gold Tier Only', 'Recent First', 'Highest Points'].map((opt) => (
                <button
                  key={opt}
                  className="w-full text-left px-4 py-2.5 text-[13px] text-[#364153] font-['Inter:Regular',sans-serif] hover:bg-orange-50 hover:text-[#f54900] transition-colors duration-100 cursor-pointer"
                >
                  {opt}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Badges Overview Card */}
      <div
        className="rounded-[15px] border border-[#ffd6a7] drop-shadow-[0px_10px_8px_rgba(0,0,0,0.1)] p-5 md:p-6 flex flex-col gap-5 cursor-default"
        style={{ backgroundImage: "linear-gradient(138deg, rgb(255,247,237) 0%, rgb(255,255,255) 100%)" }}
      >
        {/* Tier Progress Header Banner */}
        <div
          className="rounded-[16px] p-4 sm:p-5 border border-[#ffd6a7] shadow-[0px_4px_12px_rgba(255,105,0,0.08)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
          style={{ backgroundImage: "linear-gradient(135deg, rgb(255,247,237) 0%, rgb(255,255,255) 100%)" }}
        >
          <div className="flex items-center gap-3.5">
            <div
              className="size-[52px] rounded-[15px] flex items-center justify-center text-white shadow-md shadow-orange-500/20 shrink-0"
              style={{ backgroundImage: "linear-gradient(to right, #ff6900, #f54900, #ca3500)" }}
            >
              <RibbonMedalIcon size={30} color="white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-['Inter:Bold',sans-serif] text-[22px] bg-clip-text text-transparent font-bold" style={{ backgroundImage: "linear-gradient(90deg, #ff6900, #f54900, #ca3500)" }}>
                  Gold Tier
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-orange-100 text-orange-700">Level 4</span>
              </div>
              <p className="font-['Inter:Regular',sans-serif] text-[13px] text-[#4a5565] mt-0.5">
                Elite Performance Award · 1,683 Total Points
              </p>
            </div>
          </div>

          {/* Next tier progress */}
          <div className="w-full sm:w-[220px] bg-white/90 rounded-[14px] p-3 border border-[#ffd6a7]/70 shadow-xs">
            <div className="flex justify-between text-[12px] font-medium text-[#4a5565] mb-1.5">
              <span>Next: Platinum</span>
              <span className="text-[#f54900] font-bold">84%</span>
            </div>
            <div className="w-full h-2.5 bg-orange-100 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full"
                style={{ width: '84%', backgroundImage: "linear-gradient(to right, #ff6900, #f54900, #ca3500)" }}
              />
            </div>
            <span className="text-[11px] text-[#99a1af] block text-right mt-1">317 pts needed</span>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-2 p-1.5 bg-gray-100/80 rounded-[14px] text-[13px]">
          <button
            onClick={() => setFilter('all')}
            className={`flex-1 py-2 rounded-[10px] font-medium transition-all cursor-pointer ${
              filter === 'all'
                ? 'bg-white text-[#f54900] shadow-sm font-semibold'
                : 'text-[#4a5565] hover:text-[#0a0a0a]'
            }`}
          >
            All Badges ({PAGE_BADGES.length})
          </button>
          <button
            onClick={() => setFilter('unlocked')}
            className={`flex-1 py-2 rounded-[10px] font-medium transition-all cursor-pointer ${
              filter === 'unlocked'
                ? 'bg-white text-[#f54900] shadow-sm font-semibold'
                : 'text-[#4a5565] hover:text-[#0a0a0a]'
            }`}
          >
            Unlocked ({PAGE_BADGES.filter((b) => b.unlocked).length})
          </button>
          <button
            onClick={() => setFilter('locked')}
            className={`flex-1 py-2 rounded-[10px] font-medium transition-all cursor-pointer ${
              filter === 'locked'
                ? 'bg-white text-[#f54900] shadow-sm font-semibold'
                : 'text-[#4a5565] hover:text-[#0a0a0a]'
            }`}
          >
            In Progress ({PAGE_BADGES.filter((b) => !b.unlocked).length})
          </button>
        </div>

        {/* Badges Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
          {filteredBadges.map((badge) => (
            <div
              key={badge.id}
              className="p-4 rounded-[16px] border border-[#ffd6a7]/80 bg-white/90 shadow-xs hover:shadow-md hover:border-[#f54900]/50 transition-all"
            >
              <div className="flex items-start gap-3.5">
                <div className="size-[48px] rounded-[14px] flex items-center justify-center text-[24px] shrink-0 bg-orange-100/70 border border-orange-200/60">
                  {badge.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-1.5">
                    <h4 className="font-['Inter:Medium',sans-serif] text-[15px] font-semibold text-[#0a0a0a] truncate">
                      {badge.title}
                    </h4>
                    <span
                      className="text-[11px] font-bold px-2 py-0.5 rounded-full text-white shrink-0"
                      style={{ backgroundImage: "linear-gradient(to right, #ff6900, #f54900, #ca3500)" }}
                    >
                      {badge.points}
                    </span>
                  </div>
                  <p className="font-['Inter:Regular',sans-serif] text-[12.5px] text-[#6a7282] mt-1 leading-snug">
                    {badge.description}
                  </p>
                  <div className="mt-3 flex items-center justify-between text-[11.5px] pt-2 border-t border-gray-100">
                    <span className="inline-flex items-center gap-1 text-emerald-600 font-medium">
                      ✓ Earned {badge.date}
                    </span>
                    <span className="text-[10.5px] text-orange-700 px-2 py-0.5 rounded-md bg-orange-100 border border-orange-200 font-medium">
                      {badge.tier}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Placeholder for upcoming badges */}
          {filter !== 'locked' && (
            <div className="p-4 rounded-[16px] border-2 border-dashed border-orange-200/80 bg-white/60 flex items-center gap-3.5">
              <div className="size-[48px] rounded-[14px] bg-orange-50 border border-dashed border-orange-200 flex items-center justify-center text-[22px] shrink-0 text-orange-400">
                🔒
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-['Inter:Medium',sans-serif] text-[14.5px] font-semibold text-[#364153]">
                  Upcoming Milestones
                </h4>
                <p className="font-['Inter:Regular',sans-serif] text-[12px] text-[#6a7282] mt-0.5">
                  Keep hitting your sales and balance goals to unlock next tier trophies and honor badges.
                </p>
              </div>
            </div>
          )}

          {filteredBadges.length === 0 && filter === 'locked' && (
            <div className="col-span-full py-12 flex flex-col items-center justify-center text-center gap-2">
              <div className="size-12 rounded-full bg-orange-100 flex items-center justify-center text-[22px]">
                ⭐
              </div>
              <h4 className="font-['Inter:Medium',sans-serif] text-[16px] font-semibold text-[#0a0a0a]">
                No Badges Currently In Progress
              </h4>
              <p className="text-[13px] text-[#6a7282] max-w-[340px]">
                All active achievements for this tier are unlocked. Check back soon for the next quarterly challenge!
              </p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

// ─── Gift Cards Page ──────────────────────────────────────────────────────────

interface RedeemedGiftCard {
  id: string;
  code: string;
  points: number;
  date: string;
  name: string;
}

function GiftCardsPage() {
  const [code, setCode] = useState('');
  const [redeemedCards, setRedeemedCards] = useState<RedeemedGiftCard[]>([]);
  const [feedback, setFeedback] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const handleRedeem = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const cleanCode = code.trim().toUpperCase();
    if (!cleanCode) return;

    if (redeemedCards.some((c) => c.code === cleanCode)) {
      setFeedback({ type: 'error', message: 'This gift card code has already been redeemed.' });
      return;
    }

    const newCard: RedeemedGiftCard = {
      id: Date.now().toString(),
      code: cleanCode,
      points: 250,
      date: 'Today, Just now',
      name: 'Reward Voucher',
    };

    setRedeemedCards([newCard, ...redeemedCards]);
    setCode('');
    setFeedback({ type: 'success', message: `Successfully claimed +250 points with code ${cleanCode}!` });
  };

  return (
    <main className="flex-1 overflow-y-auto px-4 md:px-6 py-5 md:py-6 flex flex-col gap-4 md:gap-5">
      {/* Page Heading */}
      <div className="flex flex-col gap-1 md:gap-2">
        <h1
          className="font-['Inter:Regular',sans-serif] text-[28px] md:text-[38px] leading-tight bg-clip-text text-transparent flex items-center gap-2.5"
          style={{ backgroundImage: "linear-gradient(90deg, rgb(16,24,40) 0%, rgb(245,73,0) 100%)" }}
        >
          <GiftCardIcon color="#f54900" />
          Gift Cards
        </h1>
        <p className="font-['Inter:Regular',sans-serif] text-[14px] md:text-[17px] text-[#4a5565]">
          Redeem the gift cards you've received.
        </p>
      </div>

      {/* Top Banner Bar */}
      <div
        className="relative rounded-[14px] overflow-hidden shadow-[0px_10px_16px_-3px_rgba(0,0,0,0.08)] flex items-center gap-3 px-4 md:px-6 h-[64px] md:h-[72px] shrink-0"
        style={{ backgroundImage: "linear-gradient(to right, #ff6900, #f54900, #ca3500)" }}
      >
        <GiftCardIcon color="white" />
        <span className="font-['Inter:Regular',sans-serif] text-[15px] md:text-[17px] text-white">Gift Card Center</span>
        <div className="ml-auto bg-white/20 px-3 md:px-4 py-1 md:py-1.5 rounded-[10px] md:rounded-[11px]">
          <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[13px] md:text-[14px] text-white">
            {redeemedCards.length > 0 ? `${redeemedCards.length} Redeemed` : '0 Redeemed'}
          </span>
        </div>
      </div>

      {/* Card 1: Redeem a code */}
      <div
        className="rounded-[15px] border border-[#ffd6a7] drop-shadow-[0px_10px_8px_rgba(0,0,0,0.1)] p-5 md:p-6 flex flex-col gap-4 cursor-default"
        style={{ backgroundImage: "linear-gradient(138deg, rgb(255,247,237) 0%, rgb(255,255,255) 100%)" }}
      >
        {/* Title row */}
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <TicketIcon color="#f54900" />
            <h2 className="font-['Inter:Bold',sans-serif] text-[18px] md:text-[20px] text-[#0a0a0a] font-bold">
              Redeem a code
            </h2>
          </div>
          <p className="font-['Inter:Regular',sans-serif] text-[13px] md:text-[14px] text-[#4a5565]">
            Enter your secret gift card code to claim your points.
          </p>
        </div>

        {/* Input & Action */}
        <form onSubmit={handleRedeem} className="flex flex-col sm:flex-row items-stretch gap-3 mt-1">
          <input
            type="text"
            value={code}
            onChange={(e) => { setCode(e.target.value); setFeedback(null); }}
            placeholder="ENTER YOUR CODE"
            className="flex-1 bg-white border border-[#ffd6a7] rounded-[12px] px-4 py-3.5 font-['Inter:Regular',sans-serif] text-[15px] text-[#101828] placeholder:text-[#99a1af] outline-none focus:border-[#f54900] focus:ring-2 focus:ring-orange-200 transition-all uppercase tracking-wider"
          />
          <button
            type="submit"
            disabled={!code.trim()}
            className="px-7 py-3.5 rounded-[12px] font-['Inter:Medium',sans-serif] text-[15px] text-white shadow-md transition-all duration-150 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed hover:opacity-95 active:scale-98 shrink-0 flex items-center justify-center font-medium"
            style={{ backgroundImage: "linear-gradient(to right, #ff6900, #f54900, #ca3500)" }}
          >
            Redeem
          </button>
        </form>

        {feedback && (
          <div className={`text-[13px] px-3.5 py-2 rounded-[10px] font-medium ${
            feedback.type === 'success' ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' : 'bg-rose-50 text-rose-700 border border-rose-200'
          }`}>
            {feedback.message}
          </div>
        )}
      </div>

      {/* Card 2: Your gift cards */}
      <div
        className="rounded-[15px] border border-[#ffd6a7] drop-shadow-[0px_10px_8px_rgba(0,0,0,0.1)] p-5 md:p-6 flex flex-col gap-4 cursor-default"
        style={{ backgroundImage: "linear-gradient(138deg, rgb(255,247,237) 0%, rgb(255,255,255) 100%)" }}
      >
        <div className="flex items-center justify-between">
          <h2 className="font-['Inter:Bold',sans-serif] text-[18px] md:text-[20px] text-[#0a0a0a] font-bold">
            Your gift cards
          </h2>
          {redeemedCards.length > 0 && (
            <span className="text-[13px] text-[#f54900] font-medium">
              {redeemedCards.length} cards total
            </span>
          )}
        </div>

        {redeemedCards.length === 0 ? (
          <div className="rounded-[13px] border border-dashed border-[#ffd6a7] bg-white/60 py-14 px-4 flex flex-col items-center justify-center text-center">
            <GiftCardIcon color="#d1d5db" />
            <p className="font-['Inter:Regular',sans-serif] text-[14px] md:text-[15px] text-[#99a1af] mt-2">
              You don't have any gift cards yet.
            </p>
          </div>
        ) : (
          <div className="flex flex-col gap-3">
            {redeemedCards.map((c) => (
              <div
                key={c.id}
                className="bg-white rounded-[14px] p-4 border border-[#ffd6a7]/80 flex items-center justify-between shadow-xs"
              >
                <div className="flex items-center gap-3">
                  <div className="size-[42px] rounded-[12px] bg-orange-100 flex items-center justify-center text-orange-600 shrink-0">
                    <GiftCardIcon color="#f54900" />
                  </div>
                  <div>
                    <div className="font-mono font-bold text-[14px] text-[#101828]">{c.code}</div>
                    <div className="text-[12px] text-[#6a7282]">{c.date}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[13px] font-bold text-[#f54900]">+{c.points} Pts</span>
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-emerald-100 text-emerald-700">
                    Claimed
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}

// ─── Store Catalog Page ───────────────────────────────────────────────────────

interface CatalogProduct {
  id: string;
  name: string;
  pts: number;
  rating: number;
  category: string;
}

const CATALOG_PRODUCTS: CatalogProduct[] = [
  { id: '1', name: 'Product 01', pts: 2000, rating: 4, category: 'Clothing' },
  { id: '2', name: 'Product 01', pts: 2000, rating: 4, category: 'Clothing' },
  { id: '3', name: 'Product 01', pts: 2000, rating: 4, category: 'Clothing' },
  { id: '4', name: 'Product 01', pts: 2000, rating: 4, category: 'Clothing' },
  { id: '5', name: 'Product 01', pts: 2000, rating: 4, category: 'Clothing' },
  { id: '6', name: 'Product 01', pts: 2000, rating: 4, category: 'Clothing' },
  { id: '7', name: 'Product 01', pts: 2000, rating: 4, category: 'Clothing' },
  { id: '8', name: 'Product 01', pts: 2000, rating: 4, category: 'Clothing' },
  { id: '9', name: 'Product 01', pts: 2000, rating: 4, category: 'Clothing' },
  { id: '10', name: 'Product 01', pts: 2000, rating: 4, category: 'Clothing' },
  { id: '11', name: 'Product 01', pts: 2000, rating: 4, category: 'Clothing' },
  { id: '12', name: 'Product 01', pts: 2000, rating: 4, category: 'Clothing' },
  { id: '13', name: 'Product 01', pts: 2000, rating: 4, category: 'Clothing' },
  { id: '14', name: 'Product 01', pts: 2000, rating: 4, category: 'Clothing' },
  { id: '15', name: 'Product 01', pts: 2000, rating: 4, category: 'Clothing' },
];

const FILTER_SECTIONS = [
  {
    title: 'Categories',
    options: ['Clothing', 'Electronics', 'Accessories', 'Gift Cards', 'Home & Living', 'Footwear'],
  },
  {
    title: 'Price Range',
    options: ['Price', 'Under 500 pts', '500 - 1,000 pts', '1,000 - 2,000 pts', '2,000+ pts'],
  },
  {
    title: 'Sort By',
    options: ['Sort', 'Featured', 'Price: Low to High', 'Price: High to Low', 'Top Rated'],
  },
];

function CatalogPage() {
  const [activeFilters, setActiveFilters] = useState<string[]>(['Price', 'Sort', 'Clothing']);
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [redeemProduct, setRedeemProduct] = useState<CatalogProduct | null>(null);
  const [redeemSuccessMessage, setRedeemSuccessMessage] = useState<string | null>(null);

  const toggleFilter = (filterName: string) => {
    setActiveFilters((prev) =>
      prev.includes(filterName) ? prev.filter((f) => f !== filterName) : [...prev, filterName]
    );
  };

  const removeFilter = (filterName: string) => {
    setActiveFilters((prev) => prev.filter((f) => f !== filterName));
  };

  const resetFilters = () => {
    setActiveFilters([]);
  };

  const handleConfirmRedeem = (product: CatalogProduct) => {
    setRedeemProduct(null);
    setRedeemSuccessMessage(`Successfully requested redemption for ${product.name}!`);
    setTimeout(() => {
      setRedeemSuccessMessage(null);
    }, 4000);
  };

  return (
    <main className="flex-1 overflow-y-auto px-4 md:px-6 py-5 md:py-6 flex flex-col gap-4 md:gap-5">
      {/* Redemption Confirmation Modal */}
      {redeemProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="absolute inset-0" onClick={() => setRedeemProduct(null)} />
          <div className="relative bg-white w-full max-w-[420px] rounded-[22px] shadow-2xl border border-orange-100 p-6 flex flex-col items-center text-center z-10">
            <div className="size-16 rounded-[18px] bg-orange-50 border border-orange-200/60 flex items-center justify-center mb-3 text-[#f54900]">
              <svg fill="none" viewBox="0 0 48 48" width="38" height="38" stroke="#F54900" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="10" y="8" width="28" height="32" rx="5" />
                <path d="M19 14c0 3.5 2 6 5 6s5-2.5 5-6" />
              </svg>
            </div>
            <h3 className="font-['Inter:Bold',sans-serif] text-[20px] font-bold text-[#0a0a0a]">
              Redeem {redeemProduct.name}?
            </h3>
            <p className="font-['Inter:Regular',sans-serif] text-[14px] text-[#4a5565] mt-2 leading-relaxed">
              This will deduct <span className="font-semibold text-[#f54900]">{redeemProduct.pts} pts</span> from your rewards balance.
            </p>
            <div className="flex gap-3 w-full mt-6">
              <button
                onClick={() => setRedeemProduct(null)}
                className="flex-1 py-2.5 rounded-[12px] border border-gray-200 text-[#4a5565] font-medium hover:bg-gray-50 cursor-pointer transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => handleConfirmRedeem(redeemProduct)}
                className="flex-1 py-2.5 rounded-[12px] bg-gradient-to-r from-[#ff6900] to-[#f54900] text-white font-medium hover:from-[#e55d00] hover:to-[#d94000] cursor-pointer transition-colors shadow-xs"
              >
                Redeem Now
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Success Toast */}
      {redeemSuccessMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#101828] text-white px-5 py-3.5 rounded-[14px] shadow-2xl flex items-center gap-3 border border-gray-700/80">
          <span className="text-xl">🎁</span>
          <div>
            <p className="text-[14px] font-medium">{redeemSuccessMessage}</p>
            <p className="text-[12px] text-gray-400">Your redemption order has been placed.</p>
          </div>
          <button
            onClick={() => setRedeemSuccessMessage(null)}
            className="ml-2 text-gray-400 hover:text-white cursor-pointer"
          >
            ✕
          </button>
        </div>
      )}

      {/* Page Heading */}
      <div className="flex flex-col gap-1 md:gap-2">
        <h1
          className="font-['Inter:Regular',sans-serif] text-[28px] md:text-[38px] leading-tight text-[#101828]"
        >
          Store <span className="text-[#f54900] font-bold">Catalog.</span>
        </h1>
        <div className="flex items-center gap-2">
          <CalendarIcon color="#4A5565" />
          <p className="font-['Inter:Regular',sans-serif] text-[14px] md:text-[17px] text-[#4a5565]">
            Here is your store for redemption{/* matches both mobile/desktop text */}
          </p>
        </div>
      </div>

      {/* Top Banner Bar */}
      <div
        className="relative rounded-[14px] overflow-hidden shadow-[0px_10px_16px_-3px_rgba(245,73,0,0.18)] flex items-center gap-3 px-4 md:px-6 h-[54px] md:h-[64px] shrink-0"
        style={{ backgroundImage: "linear-gradient(to right, #ff6900, #f54900, #ca3500)" }}
      >
        <svg fill="none" viewBox="0 0 24 24" width="22" height="22" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
          <rect x="4" y="3" width="16" height="18" rx="3" />
          <path d="M9 7c0 2 1.2 3.5 3 3.5s3-1.5 3-3.5" />
        </svg>
        <span className="font-['Inter:Medium',sans-serif] text-[15px] md:text-[17px] text-white font-medium">Store</span>
      </div>

      {/* Filters Bar Card (Both Desktop and Phone Responsive) */}
      <div className="rounded-[15px] border border-[#e5e7eb] bg-white shadow-xs p-3.5 md:p-4 flex flex-col gap-3 transition-all duration-200">
        {/* DESKTOP layout (md+) */}
        <div className="hidden md:flex items-center justify-between gap-4">
          {/* Left: Reset Filters + Chips */}
          <div className="flex items-center gap-3 flex-wrap">
            <button
              onClick={resetFilters}
              className="text-[#f54900] hover:underline font-['Inter:Regular',sans-serif] text-[14.5px] cursor-pointer shrink-0"
            >
              Reset Filters
            </button>
            <div className="flex items-center gap-2 flex-wrap">
              {activeFilters.map((filter) => (
                <span
                  key={filter}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-[10px] border border-[#ff8d28] bg-white text-[#f54900] text-[13.5px] font-medium shadow-2xs"
                >
                  <span>{filter}</span>
                  <button
                    onClick={() => removeFilter(filter)}
                    className="hover:text-red-600 rounded-full p-0.5 cursor-pointer"
                    title={`Remove ${filter}`}
                  >
                    ✕
                  </button>
                </span>
              ))}
              {activeFilters.length === 0 && (
                <span className="text-[13px] text-[#99a1af] italic">No active filters</span>
              )}
            </div>
          </div>

          {/* Right: Filters toggle button */}
          <button
            onClick={() => setFiltersOpen(!filtersOpen)}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-[10px] hover:bg-orange-50 border border-transparent hover:border-orange-200 transition-all cursor-pointer shrink-0"
          >
            <FilterLinesIcon color={filtersOpen ? '#f54900' : '#4A5565'} size={18} />
            <span className={`font-['Inter:Medium',sans-serif] text-[14.5px] ${filtersOpen ? 'text-[#f54900] font-semibold' : 'text-[#364153]'}`}>
              Filters
            </span>
            <div className={`transition-transform duration-300 ${filtersOpen ? 'rotate-180' : 'rotate-0'}`}>
              <ChevronDownIcon color={filtersOpen ? '#f54900' : '#4A5565'} size={16} />
            </div>
          </button>
        </div>

        {/* MOBILE layout (<md) — Exactly matches the attached screenshot */}
        <div className="flex md:hidden flex-col gap-3">
          {/* Line 1: Filters on left, Chevron on right */}
          <div
            onClick={() => setFiltersOpen(!filtersOpen)}
            className="flex items-center justify-between cursor-pointer py-0.5"
          >
            <div className="flex items-center gap-2">
              <FilterLinesIcon color={filtersOpen ? '#f54900' : '#4A5565'} size={18} />
              <span className={`font-['Inter:Medium',sans-serif] text-[15px] ${filtersOpen ? 'text-[#f54900] font-semibold' : 'text-[#0a0a0a]'}`}>
                Filters
              </span>
            </div>
            <div className={`transition-transform duration-300 ${filtersOpen ? 'rotate-180' : 'rotate-0'}`}>
              <ChevronDownIcon color={filtersOpen ? '#f54900' : '#4A5565'} size={16} />
            </div>
          </div>

          {/* Line 2: Reset Filters (underlined) + scrollable chips */}
          <div className="flex items-center gap-2.5 overflow-x-auto pb-1 no-scrollbar">
            <button
              onClick={resetFilters}
              className="text-[#f54900] underline underline-offset-3 font-['Inter:Regular',sans-serif] text-[13.5px] cursor-pointer shrink-0 whitespace-nowrap"
            >
              Reset Filters
            </button>
            <div className="flex items-center gap-2 shrink-0">
              {activeFilters.map((filter) => (
                <span
                  key={filter}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-[10px] border border-[#ff8d28] bg-white text-[#f54900] text-[13px] font-medium shadow-2xs shrink-0 whitespace-nowrap"
                >
                  <span>{filter}</span>
                  <button
                    onClick={() => removeFilter(filter)}
                    className="hover:text-red-600 rounded-full p-0.5 cursor-pointer"
                  >
                    ✕
                  </button>
                </span>
              ))}
              {activeFilters.length === 0 && (
                <span className="text-[12px] text-[#99a1af] italic">None</span>
              )}
            </div>
          </div>
        </div>

        {/* Expandable / Drag-open Filter Model Panel with Smooth Open/Close Animation */}
        <div
          className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${
            filtersOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0 pointer-events-none'
          }`}
        >
          <div className="overflow-hidden">
            <div className="pt-3.5 mt-1 border-t border-gray-100 flex flex-col gap-4">
              {/* Subtle drag handle representation */}
              <div className="flex justify-center -mt-1">
                <div className="w-10 h-1 rounded-full bg-gray-200" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {FILTER_SECTIONS.map((sec) => (
                  <div key={sec.title} className="flex flex-col gap-2 bg-orange-50/30 p-3 rounded-[12px] border border-orange-100/60">
                    <span className="font-['Inter:Semi_Bold',sans-serif] text-[12.5px] font-semibold text-[#364153] uppercase tracking-wider">
                      {sec.title}
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {sec.options.map((opt) => {
                        const isSelected = activeFilters.includes(opt);
                        return (
                          <button
                            key={opt}
                            onClick={() => toggleFilter(opt)}
                            className={`px-2.5 py-1 rounded-[8px] text-[12.5px] font-medium transition-all cursor-pointer flex items-center gap-1.5 ${
                              isSelected
                                ? 'bg-gradient-to-r from-[#ff6900] to-[#f54900] text-white shadow-xs'
                                : 'bg-white text-[#4a5565] border border-gray-200 hover:border-orange-300 hover:text-[#f54900]'
                            }`}
                          >
                            {isSelected && <span>✓</span>}
                            <span>{opt}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between pt-1 pb-0.5 text-[13px]">
                <span className="text-[#6a7282]">
                  {activeFilters.length} filter{activeFilters.length === 1 ? '' : 's'} selected
                </span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={resetFilters}
                    className="px-3 py-1.5 rounded-[9px] text-[#4a5565] hover:bg-gray-100 cursor-pointer font-medium transition-colors"
                  >
                    Clear All
                  </button>
                  <button
                    onClick={() => setFiltersOpen(false)}
                    className="px-4 py-1.5 rounded-[9px] bg-gradient-to-r from-[#ff6900] to-[#f54900] text-white font-medium hover:from-[#e55d00] hover:to-[#d94000] cursor-pointer shadow-xs transition-all"
                  >
                    Done
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Store Catalog Card */}
      <div className="rounded-[16px] border border-[#ffd6a7]/80 bg-white shadow-xs p-4 sm:p-5 md:p-6 flex flex-col gap-4 md:gap-5 cursor-default">
        {/* Header inside card */}
        <div className="flex items-center gap-2.5">
          <svg fill="none" viewBox="0 0 24 24" width="20" height="20" stroke="#F54900" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="4" y="3" width="16" height="18" rx="3" />
            <path d="M9 7c0 2 1.2 3.5 3 3.5s3-1.5 3-3.5" />
          </svg>
          <span className="font-['Inter:Regular',sans-serif] text-[16px] md:text-[17px] text-[#0a0a0a] tracking-[-0.02em]">
            <span className="hidden md:inline">Store Catalog</span>
            <span className="inline md:hidden">Products Catalog</span>
          </span>
        </div>

        {/* Products Grid: 5 columns on desktop, 2 columns on phone */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4 md:gap-5">
          {CATALOG_PRODUCTS.map((prod, index) => (
            <div
              key={`${prod.id}-${index}`}
              className="bg-white border border-[#ffd6a7]/80 rounded-[15px] p-2.5 sm:p-3 flex flex-col justify-between hover:shadow-[0px_8px_18px_rgba(245,73,0,0.12)] hover:border-[#ff9a3d] transition-all duration-200 group"
            >
              {/* Product Image Box */}
              <div
                className="w-full rounded-[12px] h-[130px] sm:h-[150px] md:h-[165px] flex items-center justify-center relative overflow-hidden shrink-0"
                style={{ backgroundImage: "linear-gradient(147deg, rgb(255,247,237) 0%, rgb(255,237,212) 100%)" }}
              >
                {/* Center Shopping Bag Outline Icon */}
                <svg fill="none" viewBox="0 0 48 48" width="50" height="50" stroke="#F54900" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" className="group-hover:scale-105 transition-transform duration-200">
                  <rect x="10" y="8" width="28" height="32" rx="5" />
                  <path d="M19 14c0 3.5 2 6 5 6s5-2.5 5-6" />
                </svg>

                {/* Floating points badge on bottom-left */}
                <div className="absolute bottom-2.5 left-2.5 bg-white rounded-[8px] shadow-[0px_1px_3px_rgba(0,0,0,0.08)] px-2 sm:px-2.5 py-0.5">
                  <span className="font-['Inter:Medium',sans-serif] text-[11.5px] sm:text-[13px] text-[#f54900] font-medium">
                    {prod.pts} pts
                  </span>
                </div>
              </div>

              {/* Info: Title & Star Rating */}
              <div className="pt-2.5 pb-1 px-1">
                <p className="font-['Inter:Medium',sans-serif] text-[13.5px] sm:text-[15px] text-[#101828] font-medium truncate">
                  {prod.name}
                </p>
                <div className="flex items-center gap-0.5 mt-1">
                  <StarFull />
                  <StarFull />
                  <StarFull />
                  <StarFull />
                  <StarEmpty />
                </div>
              </div>

              {/* Full-width Redeem Button */}
              <div className="pt-1.5 px-1 pb-0.5">
                <button
                  onClick={() => setRedeemProduct(prod)}
                  className="w-full h-[34px] sm:h-[38px] rounded-[10px] bg-gradient-to-r from-[#ff6900] to-[#f54900] hover:from-[#e55d00] hover:to-[#d94000] text-white font-['Inter:Medium',sans-serif] text-[13px] sm:text-[14.5px] font-medium transition-all duration-150 cursor-pointer active:scale-[0.98] shadow-2xs"
                >
                  Redeem
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

// ─── Main App ─────────────────────────────────────────────────────────────────

export default function App() {
  const [page, setPage] = useState<Page>('dashboard');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [achievementsModalOpen, setAchievementsModalOpen] = useState(false);

  return (
    <div className="flex h-full overflow-hidden bg-white">
      {/* Achievements & Badges Modal */}
      <AchievementsBadgesModal
        isOpen={achievementsModalOpen}
        onClose={() => setAchievementsModalOpen(false)}
      />

      {/* Mobile sidebar overlay (always mounted for smooth transitions) */}
      <div
        className={`fixed inset-0 z-50 md:hidden transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? 'visible' : 'invisible pointer-events-none'
        }`}
      >
        <div
          className={`absolute inset-0 bg-black/40 backdrop-blur-[2px] transition-opacity duration-300 ease-in-out ${
            mobileMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setMobileMenuOpen(false)}
        />
        <div
          className={`absolute left-0 top-0 bottom-0 w-[280px] shadow-2xl overflow-hidden transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] ${
            mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <Sidebar mobile activePage={page} onNavigate={(p) => { setPage(p); setMobileMenuOpen(false); }} />
        </div>
      </div>

      {/* Desktop sidebar (hidden on mobile via aside className) */}
      <Sidebar activePage={page} onNavigate={setPage} />

      {/* Main area */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <MobileHeader onMenuOpen={() => setMobileMenuOpen(true)} />
        <Header />

        {/* Scrollable content */}
        {page === 'wall' ? (
          <WallPage />
        ) : page === 'results' ? (
          <ResultsPage />
        ) : page === 'user-ranking' ? (
          <UserRankingsPage />
        ) : page === 'badges' ? (
          <BadgesPage />
        ) : page === 'gift-cards' ? (
          <GiftCardsPage />
        ) : page === 'catalog' ? (
          <CatalogPage />
        ) : (
          <>
            {/* ── MOBILE layout (hidden on md+) ─────────────────────────────── */}
            <main className="flex flex-col md:hidden flex-1 overflow-y-auto px-4 py-5 gap-4">
              {/* Welcome */}
              <div className="flex flex-col gap-1">
                <h1
                  className="font-['Inter:Regular',sans-serif] text-[28px] leading-tight bg-clip-text text-transparent"
                  style={{ backgroundImage: "linear-gradient(90deg, rgb(16,24,40) 0%, rgb(245,73,0) 100%)" }}
                >
                  Welcome Back, User! 👋
                </h1>
                <p className="font-['Inter:Regular',sans-serif] text-[14px] text-[#4a5565]">
                  Here's what's happening with your performance today
                </p>
              </div>

              {/* 1. Achievements & Trophies bar (above tabs and below greeting) */}
              <AchievementsCardMobile onOpenModal={() => setAchievementsModalOpen(true)} />

              {/* 2. Stat cards 3-column row */}
              <div className="flex flex-row gap-2">
                <StatCard
                  mini
                  label="In"
                  value="120"
                  trend="up"
                  trendValue="+12%"
                  icon={<InArrowIcon />}
                  gradientAngle="153deg"
                />
                <StatCard
                  mini
                  label="Out"
                  value="650"
                  trend="up"
                  trendValue="+8%"
                  icon={<OutArrowIcon />}
                  gradientAngle="154deg"
                />
                <StatCard
                  mini
                  label="Balance"
                  value="1,683 Pts"
                  trend="up"
                  trendValue="+2%"
                  icon={<DollarIcon />}
                  gradientAngle="153deg"
                />
              </div>

              {/* 3. Ranking + Balance row */}
              <div className="flex gap-3">
                <RankingCard mobileBottomLink />
                <ProgramBalanceCard mobileBottomLink />
              </div>

              {/* 4. Products Catalog */}
              <ProductsCatalog />

              {/* 5. Recent Transactions */}
              <RecentTransactionsCard />

              {/* 6. Wall Feed */}
              <WallFeedCard />

              {/* 7. Budget Table */}
              <BudgetTable />
            </main>

            {/* ── DESKTOP layout (hidden on mobile) ─────────────────────────── */}
            <main className="hidden md:flex flex-col flex-1 overflow-y-auto px-6 py-6 gap-5">
              {/* Welcome */}
              <div className="flex flex-col gap-2">
                <h1
                  className="font-['Inter:Regular',sans-serif] text-[38px] leading-tight bg-clip-text text-transparent"
                  style={{ backgroundImage: "linear-gradient(90deg, rgb(16,24,40) 0%, rgb(245,73,0) 100%)" }}
                >
                  Welcome Back, User! 👋
                </h1>
                <div className="flex items-center gap-2">
                  <CalendarIcon />
                  <p className="font-['Inter:Regular',sans-serif] text-[17px] text-[#4a5565]">Here's what's happening with your performance today</p>
                </div>
              </div>

              {/* Stat cards + Achievements on right */}
              <div className="flex flex-row gap-4 items-stretch">
                <StatCard
                  label="In"
                  value="120"
                  trend="up"
                  trendValue="+12%"
                  icon={<InArrowIcon />}
                  gradientAngle="153deg"
                  circleLeft="170px"
                />
                <StatCard
                  label="Out"
                  value="650"
                  trend="down"
                  trendValue="-8%"
                  icon={<OutArrowIcon />}
                  gradientAngle="154deg"
                  circleLeft="200px"
                />
                <StatCard
                  label="Available Balance"
                  value="1,683 Pts"
                  trend="up"
                  trendValue="+12%"
                  icon={<DollarIcon />}
                  gradientAngle="153deg"
                  circleLeft="230px"
                />
                <div className="flex-none">
                  <AchievementsCard onOpenModal={() => setAchievementsModalOpen(true)} />
                </div>
              </div>

              {/* Wall + Transactions */}
              <div className="flex flex-row gap-5 items-start">
                {/* Left: wall feed + ranking/balance */}
                <div className="flex-1 min-w-0 flex flex-col gap-4">
                  <WallFeedCard />
                  <div className="flex gap-4">
                    <RankingCard />
                    <ProgramBalanceCard />
                  </div>
                </div>
                {/* Right: Recent Transactions */}
                <RecentTransactionsCard />
              </div>

              {/* Products Catalog */}
              <ProductsCatalog />

              {/* Budget Table */}
              <BudgetTable />
            </main>
          </>
        )}
      </div>
    </div>
  );
}
