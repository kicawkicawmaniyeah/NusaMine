import React from 'react';
import { PageId, UserRole } from '../types';

interface SidebarProps {
  activePage: PageId;
  onNavigate: (page: PageId) => void;
  currentRole: UserRole;
  isMobileOpen?: boolean;
  onCloseMobile?: () => void;
}

const navItems: Array<{ id: PageId; label: string; icon: string }> = [
  { id: 'ringkasan', label: 'Ringkasan', icon: 'dashboard' },
  { id: 'pemeriksaan-risiko', label: 'Pemeriksaan Risiko', icon: 'shield_with_heart' },
  { id: 'validasi-data', label: 'Validasi Data', icon: 'compare_arrows' },
  { id: 'bukti-dan-audit-trail', label: 'Bukti & Audit Trail', icon: 'history_edu' },
  { id: 'sanggahan', label: 'Sanggahan', icon: 'gavel' },
  { id: 'inspeksi-lapangan', label: 'Inspeksi Lapangan', icon: 'pin_drop' },
  { id: 'transparansi-publik', label: 'Transparansi Publik', icon: 'public' },
  { id: 'nusawatch', label: 'NusaWatch', icon: 'satellite_alt' },
  { id: 'pengaturan', label: 'Pengaturan', icon: 'settings' },
  { id: 'ragam-kondisi', label: 'Ragam Kondisi Sistem', icon: 'view_in_ar' },
];

export const Sidebar: React.FC<SidebarProps> = ({
  activePage,
  onNavigate,
  isMobileOpen,
  onCloseMobile,
}) => {
  const isSanggahanActive =
    activePage === 'sanggahan' ||
    activePage === 'portal-sanggahan' ||
    activePage === 'workspace-sanggahan';

  return (
    <>
      {/* Mobile Backdrop */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-xs z-40 lg:hidden"
          onClick={onCloseMobile}
        />
      )}

      <aside
        className={`fixed left-0 top-0 h-full w-60 bg-bg-surface-subtle z-50 flex flex-col justify-between text-on-surface shadow-[0_1px_8px_rgba(0,0,0,0.06)] transition-transform duration-200 ease-in-out ${
          isMobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        <div className="flex flex-col">
          {/* Logo & Brand Header */}
          <div className="px-space-md pt-space-lg pb-space-md">
            <div className="flex items-center justify-between mb-space-xs">
              <div
                className="flex items-center gap-space-sm cursor-pointer"
                onClick={() => {
                  onNavigate('ringkasan');
                  onCloseMobile?.();
                }}
              >
                <img
                  alt="NusaMine Logo"
                  className="h-10 w-auto object-contain rounded-md"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZn5E9wtK1t97z4ELoUJHDuux2hsevmdl0nWeksanes8Otvj9C24XMIQ0L_JdxgLwB_8J1M4vS5yC8PvqfAH8iVY5emeoujgHN2_XlX6RX2rqZ-lNiV5RMCxehP1iTNOOElzdMSLj3zKPLPlrn1GdNlKer-ICJ-G6y-1_5pMt-AB-TQ9Z6D0uceYJi0QQZmh6ygcaIoFpXmjLA1upZN27OceyGTMK2E1QgEyMIE7ebuo5Ex5MjkzAM8A"
                />
                <div className="flex flex-col">
                  <span className="font-headline-sm text-headline-sm text-primary font-bold tracking-tight">
                    NusaMine
                  </span>
                  <span className="font-label-xs text-label-xs text-secondary font-semibold uppercase tracking-wider">
                    Governance AI
                  </span>
                </div>
              </div>

              {/* Close button on mobile */}
              <button
                className="p-1 rounded-md text-on-surface-variant hover:text-on-surface lg:hidden"
                onClick={onCloseMobile}
                type="button"
              >
                <span className="material-symbols-outlined text-[20px]">close</span>
              </button>
            </div>

            {/* Pilot Stage Badge */}
            <div className="mt-space-sm inline-flex items-center gap-1.5 px-space-sm py-0.5 rounded-full bg-surface text-secondary font-label-xs text-label-xs shadow-xs border border-border-warm">
              <span className="w-1.5 h-1.5 rounded-full bg-status-verified"></span>
              Pilot Batu Bara: Kaltim &amp; Kalsel
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col gap-1 px-space-sm mt-space-xs">
            {navItems.map((item) => {
              const isActive =
                item.id === 'sanggahan'
                  ? isSanggahanActive
                  : activePage === item.id || (item.id === 'pemeriksaan-risiko' && activePage === 'detail-kasus');

              return (
                <button
                  key={item.id}
                  onClick={() => {
                    onNavigate(item.id);
                    onCloseMobile?.();
                  }}
                  className={`flex items-center gap-space-sm px-space-sm py-2 rounded-lg transition-all text-left w-full cursor-pointer font-body-sm text-body-sm ${
                    isActive
                      ? 'bg-surface text-status-verified font-bold shadow-sm border border-[#6A6F4C]/20'
                      : 'text-on-surface-variant hover:bg-surface/80 hover:text-primary font-medium'
                  }`}
                  type="button"
                >
                  <span
                    className={`material-symbols-outlined text-[18px] ${
                      isActive ? 'text-status-verified' : 'text-secondary'
                    }`}
                  >
                    {item.icon}
                  </span>
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>
        </div>

        {/* Bottom Platform Status Box */}
        <div className="px-space-md pb-space-lg flex flex-col gap-space-sm">
          <div className="bg-surface rounded-lg p-space-sm flex flex-col gap-1 shadow-xs border border-border-warm">
            <div className="flex items-center justify-between font-label-xs text-label-xs">
              <span className="text-primary font-semibold">SIMBARA Engine</span>
              <span className="inline-flex items-center gap-1 text-status-verified font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-status-verified animate-pulse"></span>
                Terhubung
              </span>
            </div>
            <div className="text-[10px] text-on-surface-variant font-mono">
              Protokol v2.4.1 • Sandi SHA-256
            </div>
          </div>
          <div className="text-[11px] text-on-surface-variant text-center font-label-xs font-medium">
            ESDM • Kemendag • Kemenkeu
          </div>
        </div>
      </aside>
    </>
  );
};
