import React, { useState } from 'react';
import { PageId, UserRole, FilterState } from '../types';

interface TopbarProps {
  activePage: PageId;
  onNavigate: (page: PageId) => void;
  currentRole: UserRole;
  onChangeRole: (role: UserRole) => void;
  filters: FilterState;
  onFilterChange: (filters: FilterState) => void;
  onToggleMobileMenu?: () => void;
  selectedCaseId?: string;
}

const notificationsList = [
  {
    id: 1,
    title: 'Anomali Terdeteksi (Volumetrik +12,4%)',
    desc: 'Kasus NM-2025-0891 - PT Mahakam Bara Energi memerlukan verifikasi penelaah.',
    time: '35 menit lalu',
    unread: true,
    page: 'detail-kasus' as PageId,
  },
  {
    id: 2,
    title: 'Sanggahan Baru Diajukan',
    desc: 'PT Mahakam Bara Energi mengunggah Berita Acara & CoA pembanding Carsurin.',
    time: '2 jam lalu',
    unread: true,
    page: 'workspace-sanggahan' as PageId,
  },
  {
    id: 3,
    title: 'Inspeksi Lapangan Disetujui',
    desc: 'Surat tugas fisik diterbitkan untuk Jetty Muatan Muara Jawa, Kaltim.',
    time: '5 jam lalu',
    unread: false,
    page: 'inspeksi-lapangan' as PageId,
  },
  {
    id: 4,
    title: 'Sinkronisasi Inaportnet Berhasil',
    desc: 'Pusat integrasi maritim KSOP Samarinda memperbarui 128 manifes tongkang.',
    time: '1 hari lalu',
    unread: false,
    page: 'validasi-data' as PageId,
  },
];

export const Topbar: React.FC<TopbarProps> = ({
  activePage,
  onNavigate,
  currentRole,
  onChangeRole,
  filters,
  onFilterChange,
  onToggleMobileMenu,
  selectedCaseId = 'NM-2025-0891',
}) => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [notifications, setNotifications] = useState(notificationsList);

  const getBreadcrumb = () => {
    switch (activePage) {
      case 'ringkasan':
        return 'Ringkasan Tata Kelola';
      case 'pemeriksaan-risiko':
        return 'Pemeriksaan Risiko & Triase';
      case 'detail-kasus':
        return `Kasus ${selectedCaseId}`;
      case 'validasi-data':
        return 'Validasi Silang Data';
      case 'bukti-dan-audit-trail':
        return 'Bukti & Rantai Audit';
      case 'sanggahan':
      case 'portal-sanggahan':
        return 'Portal Sanggahan Pelaku Usaha';
      case 'workspace-sanggahan':
        return 'Telaah Sanggahan Reviewer';
      case 'inspeksi-lapangan':
        return 'Inspeksi Lapangan';
      case 'transparansi-publik':
        return 'Transparansi Publik';
      case 'nusawatch':
        return 'NusaWatch (Platform Health)';
      case 'pengaturan':
        return 'Pengaturan Sistem & Akses';
      case 'ragam-kondisi':
        return 'Katalog Ragam Kondisi Sistem';
      default:
        return 'Sistem Tata Kelola';
    }
  };

  const getProfileData = () => {
    switch (currentRole) {
      case 'perusahaan':
        return {
          name: 'Ir. Hendro Wijaya',
          title: 'Direktur Ops PT Mahakam Bara Energi',
          avatar:
            'https://lh3.googleusercontent.com/aida-public/AB6AXuCsgdMyzUMMHZ8qYNCobZRQ93Ufrqod0wwcqHULPIK_ru6cUbah-nfQuzjpSh01wKkvqhcT1GqqkKS7RFLaiA8q8kV783kqAKlNclxoM1d9bCWj_L1GetlTutKhaEz53rh9xyNvWr8EDGV05_ziAwKnY6I69PMc1MO0iEt72O1R32oySv9G6s-27h-5c19d1nyQjhr2Oaw6hE4LO8N4j-0z2F_ZkSTbhQpfjHtOe_Fa4N5Y4ma9-4iPYQ',
        };
      case 'publik':
        return {
          name: 'Akses Publik Terbuka',
          title: 'Pengawasan Rantai Pasok Minerba',
          avatar:
            'https://lh3.googleusercontent.com/aida-public/AB6AXuDDHtMX3R3Gdp4TVVXGrXVT2IHtaNjJLHPr-7dgtKAUIV9RmUEy05SNg5B7OoTgm4ai5of7rJXJxOOxwmHpxpuiLlyMs7NpuxLDb1I5Au7iGpou8iZ3Larayb1vX9Uc7_TbCDAKTrsYY3xE6JuAViB826JDigEsP4wrsiJHAJAfkG9f9z25mYnb2gHof9-RBZTPEqQjEOkvbDY3XlxQomrS6ec5NB1fY50JQxktH9mR',
        };
      case 'nusawatch':
        return {
          name: 'Siti Rahma, S.Kom.',
          title: 'SysOps & Security Lead BSSN/ESDM',
          avatar:
            'https://lh3.googleusercontent.com/aida-public/AB6AXuAf1_euO_51PLaHuXrVnixrOLbR36xq-kL8sDHLRflVmTU1cJVZ_VJ7uT4USpijSSzsOKkWvSpH24XvrQJOAd3Tt0RR5lec7-kPpeh6wuzlgs_4jSo6jaCs0LZxHIM1jF7gl-26oOOZmmYG1aqyAZGMSGG7CAfS9CaISGRia2lKFJ_rRS6RLZWx26iF0m29aJ1RTICnhzsIaNhW77l5vW8Y56f2TY8tNhMxfq28T99N',
        };
      case 'pemerintah':
      default:
        return {
          name: 'Bambang S., S.T., M.Si.',
          title: 'Auditor Ditjen Minerba ESDM',
          avatar:
            'https://lh3.googleusercontent.com/aida-public/AB6AXuDU5KUdjbCGLYDN2TDGFCHSO28Vv6lKeuo1sxq49zSVQfrvyRm7tVGySEcoTlEmCDJg2sUei2j6nAF3n0jslzDdrPmJWeyconQqp6eGJLsSN4NPvVi-stGkUlo8O-rcNQZFDWVKeTB2YIC3gpZdNBnK_HEINgbbKDpN6FQ0xcUyQhre-vTs2l7hmdTAUUjFY2hrK6v1u7EfiZRjU_IVp9QkmR2XSQEGkmiZ3CiKlgSt',
        };
    }
  };

  const profile = getProfileData();
  const unreadCount = notifications.filter((n) => n.unread).length;

  return (
    <header className="fixed top-0 left-0 lg:left-60 right-0 h-16 bg-surface/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] z-40 flex items-center justify-between px-space-md lg:px-space-lg gap-space-md border-b border-border-warm/40">
      {/* Left: Mobile hamburger & Breadcrumb */}
      <div className="flex items-center gap-space-sm min-w-0">
        <button
          className="p-1.5 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low lg:hidden"
          onClick={onToggleMobileMenu}
          aria-label="Buka Menu"
          type="button"
        >
          <span className="material-symbols-outlined text-[24px]">menu</span>
        </button>

        <div className="flex items-center gap-2 font-label-md text-label-md text-on-surface-variant truncate">
          <span
            className="text-on-surface-variant font-medium cursor-pointer hover:text-primary transition-colors hidden sm:inline"
            onClick={() => onNavigate('ringkasan')}
          >
            NusaMine
          </span>
          <span className="text-outline-variant font-normal hidden sm:inline">/</span>
          <span className="text-on-surface font-semibold truncate">{getBreadcrumb()}</span>
        </div>

        {/* Global Filters Selector (Desktop) */}
        <div className="hidden xl:flex items-center gap-2 bg-surface-container-low px-space-sm py-1 rounded-lg text-on-surface font-label-xs text-label-xs ml-2">
          <select
            className="bg-transparent text-on-surface font-label-xs focus:outline-none cursor-pointer py-0.5"
            value={filters.region}
            onChange={(e) => onFilterChange({ ...filters, region: e.target.value })}
          >
            <option value="Semua Wilayah">Semua Wilayah</option>
            <option value="Kalimantan Timur">Kalimantan Timur</option>
            <option value="Sumatera Selatan">Sumatera Selatan</option>
            <option value="Kalimantan Selatan">Kalimantan Selatan</option>
          </select>
          <span className="text-outline-variant">|</span>
          <select
            className="bg-transparent text-on-surface font-label-xs focus:outline-none cursor-pointer py-0.5"
            value={filters.commodity}
            onChange={(e) => onFilterChange({ ...filters, commodity: e.target.value })}
          >
            <option value="Batu Bara (Pilot)">Batu Bara (Pilot)</option>
            <option value="Nikel (Fase 2)">Nikel (Fase 2)</option>
          </select>
          <span className="text-outline-variant">|</span>
          <select
            className="bg-transparent text-on-surface font-label-xs focus:outline-none cursor-pointer py-0.5"
            value={filters.dateRange}
            onChange={(e) => onFilterChange({ ...filters, dateRange: e.target.value })}
          >
            <option value="30 Hari Terakhir">30 Hari Terakhir</option>
            <option value="7 Hari Terakhir">7 Hari Terakhir</option>
            <option value="90 Hari">90 Hari</option>
            <option value="YTD 2025">YTD 2025</option>
          </select>
        </div>
      </div>

      {/* Right: Shadow Mode Badge, Role Switcher, Notifications, Profile */}
      <div className="flex items-center gap-space-sm sm:gap-space-md shrink-0">
        {/* Shadow Mode Badge */}
        <div
          className="hidden lg:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-status-review-bg border border-status-review/30 cursor-pointer hover:bg-status-review-bg/80 transition-all"
          onClick={() => onNavigate('ringkasan')}
          title="Sistem berjalan dalam Mode Bayangan (Shadow Mode) - Klik untuk melihat indikator evaluasi"
        >
          <span className="w-2 h-2 rounded-full bg-status-review animate-ping"></span>
          <span className="w-1.5 h-1.5 rounded-full bg-status-review -ml-2.5"></span>
          <span className="font-label-xs text-label-xs text-status-review font-bold">Mode Bayangan (Shadow Mode)</span>
        </div>

        {/* Role Switcher (4 Archetypes) */}
        <div className="hidden md:flex items-center bg-surface-container-low p-0.5 rounded-lg text-label-xs font-label-xs border border-border-warm/30">
          <button
            className={`px-2.5 py-1 rounded transition-all cursor-pointer ${
              currentRole === 'pemerintah'
                ? 'bg-surface text-primary font-bold shadow-xs'
                : 'text-on-surface-variant hover:text-on-surface'
            }`}
            onClick={() => onChangeRole('pemerintah')}
            type="button"
          >
            Pemerintah &amp; Auditor
          </button>
          <button
            className={`px-2.5 py-1 rounded transition-all cursor-pointer ${
              currentRole === 'perusahaan'
                ? 'bg-surface text-primary font-bold shadow-xs'
                : 'text-on-surface-variant hover:text-on-surface'
            }`}
            onClick={() => onChangeRole('perusahaan')}
            type="button"
          >
            Perusahaan
          </button>
          <button
            className={`px-2.5 py-1 rounded transition-all cursor-pointer ${
              currentRole === 'publik'
                ? 'bg-surface text-primary font-bold shadow-xs'
                : 'text-on-surface-variant hover:text-on-surface'
            }`}
            onClick={() => onChangeRole('publik')}
            type="button"
          >
            Publik
          </button>
          <button
            className={`px-2.5 py-1 rounded transition-all cursor-pointer ${
              currentRole === 'nusawatch'
                ? 'bg-surface text-primary font-bold shadow-xs'
                : 'text-on-surface-variant hover:text-on-surface'
            }`}
            onClick={() => onChangeRole('nusawatch')}
            type="button"
          >
            NusaWatch
          </button>
        </div>

        {/* Notifications Bell */}
        <div className="relative">
          <button
            className="relative p-2 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low transition-colors cursor-pointer"
            onClick={() => setShowNotifications(!showNotifications)}
            aria-label="Pemberitahuan Sistem"
            type="button"
          >
            <span className="material-symbols-outlined text-[20px]">notifications</span>
            {unreadCount > 0 && (
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-status-anomaly animate-pulse"></span>
            )}
          </button>

          {/* Notifications Dropdown */}
          {showNotifications && (
            <div className="absolute right-0 mt-2 w-80 sm:w-96 bg-surface rounded-xl shadow-xl border border-border-warm z-50 overflow-hidden animate-in fade-in-50 slide-in-from-top-2 duration-150">
              <div className="p-space-md border-b border-border-subtle flex items-center justify-between bg-surface-container-low/50">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-[18px]">notifications</span>
                  <span className="font-headline-sm text-headline-sm text-on-surface font-bold">
                    Pemberitahuan Tata Kelola
                  </span>
                </div>
                {unreadCount > 0 && (
                  <button
                    className="text-label-xs text-secondary hover:underline cursor-pointer font-medium"
                    onClick={() => {
                      setNotifications(notifications.map((n) => ({ ...n, unread: false })));
                    }}
                  >
                    Tandai dibaca
                  </button>
                )}
              </div>
              <div className="divide-y divide-border-subtle max-h-80 overflow-y-auto">
                {notifications.map((n) => (
                  <div
                    key={n.id}
                    className={`p-3.5 hover:bg-surface-container-low/40 transition-colors cursor-pointer flex flex-col gap-1 ${
                      n.unread ? 'bg-surface-container-low/20' : ''
                    }`}
                    onClick={() => {
                      onNavigate(n.page);
                      setShowNotifications(false);
                    }}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-label-md text-label-md font-semibold text-on-surface flex items-center gap-1.5">
                        {n.unread && <span className="w-1.5 h-1.5 rounded-full bg-status-anomaly"></span>}
                        {n.title}
                      </span>
                      <span className="text-[11px] text-on-surface-variant font-mono">{n.time}</span>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-snug">
                      {n.desc}
                    </p>
                  </div>
                ))}
              </div>
              <div className="p-2.5 text-center bg-surface-container-low/40 border-t border-border-subtle">
                <button
                  className="font-label-xs text-label-xs text-primary font-semibold hover:underline cursor-pointer"
                  onClick={() => {
                    onNavigate('pemeriksaan-risiko');
                    setShowNotifications(false);
                  }}
                >
                  Lihat Seluruh Antrean Pemeriksaan →
                </button>
              </div>
            </div>
          )}
        </div>

        {/* User Profile Card */}
        <div className="flex items-center gap-space-sm pl-space-xs border-l border-border-warm/40">
          <img
            alt={profile.name}
            className="w-8 h-8 rounded-full object-cover shrink-0 ring-1 ring-border-warm"
            src={profile.avatar}
          />
          <div className="hidden lg:flex flex-col text-left">
            <span className="font-label-md text-label-md text-on-surface font-semibold leading-tight">
              {profile.name}
            </span>
            <span className="font-label-xs text-label-xs text-on-surface-variant leading-tight">
              {profile.title}
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};
