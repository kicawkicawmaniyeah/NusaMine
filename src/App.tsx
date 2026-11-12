import React, { useState } from 'react';
import { PageId, UserRole, FilterState } from './types';
import { Sidebar } from './components/Sidebar';
import { Topbar } from './components/Topbar';

// Page components
import RingkasanPage from './pages/RingkasanPage';
import PemeriksaanRisikoPage from './pages/PemeriksaanRisikoPage';
import DetailKasusPage from './pages/DetailKasusPage';
import ValidasiDataPage from './pages/ValidasiDataPage';
import BuktiAuditTrailPage from './pages/BuktiAuditTrailPage';
import WorkspaceSanggahanPage from './pages/WorkspaceSanggahanPage';
import PortalSanggahanPage from './pages/PortalSanggahanPage';
import InspeksiLapanganPage from './pages/InspeksiLapanganPage';
import TransparansiPublikPage from './pages/TransparansiPublikPage';
import NusaWatchPage from './pages/NusaWatchPage';
import PengaturanAksesPage from './pages/PengaturanAksesPage';
import RagamKondisiPage from './pages/RagamKondisiPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('ringkasan');
  const [currentRole, setCurrentRole] = useState<UserRole>('pemerintah');
  const [selectedCaseId, setSelectedCaseId] = useState<string>('NM-2025-0891');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [sanggahanSubTab, setSanggahanSubTab] = useState<'portal' | 'reviewer'>('reviewer');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const [filters, setFilters] = useState<FilterState>({
    region: 'Semua Wilayah',
    commodity: 'Batu Bara (Pilot)',
    dateRange: '30 Hari Terakhir',
  });

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  const handleRoleChange = (role: UserRole) => {
    setCurrentRole(role);
    if (role === 'pemerintah') {
      setCurrentPage('ringkasan');
      setSanggahanSubTab('reviewer');
      showToast('Beralih ke peran: Pemerintah & Auditor (Ditjen Minerba)');
    } else if (role === 'perusahaan') {
      setCurrentPage('portal-sanggahan');
      setSanggahanSubTab('portal');
      showToast('Beralih ke peran: Pelaku Usaha (PT Mahakam Bara Energi)');
    } else if (role === 'publik') {
      setCurrentPage('transparansi-publik');
      showToast('Beralih ke peran: Akses Publik Terbuka');
    } else if (role === 'nusawatch') {
      setCurrentPage('nusawatch');
      showToast('Beralih ke peran: NusaWatch Platform Administrator');
    }
  };

  const handleNavigate = (page: string) => {
    if (page === 'sanggahan') {
      if (currentRole === 'perusahaan') {
        setCurrentPage('portal-sanggahan');
        setSanggahanSubTab('portal');
      } else {
        setCurrentPage('workspace-sanggahan');
        setSanggahanSubTab('reviewer');
      }
    } else {
      setCurrentPage(page as PageId);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectCase = (caseId: string) => {
    setSelectedCaseId(caseId);
    setCurrentPage('detail-kasus');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background font-body-md text-on-surface antialiased flex flex-col">
      {/* Toast Notification Banner */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-primary text-on-primary px-5 py-3 rounded-xl shadow-2xl flex items-center gap-3 border border-border-warm animate-in fade-in slide-in-from-bottom-3 duration-200">
          <span className="material-symbols-outlined text-status-verified text-[22px]">verified</span>
          <span className="font-body-sm font-semibold">{toastMessage}</span>
          <button
            onClick={() => setToastMessage(null)}
            className="ml-2 text-on-primary/70 hover:text-on-primary cursor-pointer"
          >
            <span className="material-symbols-outlined text-[16px]">close</span>
          </button>
        </div>
      )}

      {/* Persistent Left Sidebar */}
      <Sidebar
        activePage={currentPage}
        onNavigate={handleNavigate}
        currentRole={currentRole}
        isMobileOpen={isMobileMenuOpen}
        onCloseMobile={() => setIsMobileMenuOpen(false)}
      />

      {/* Main Content Area */}
      <div className="pl-0 lg:pl-60 flex-1 flex flex-col">
        {/* Persistent Topbar */}
        <Topbar
          activePage={currentPage}
          onNavigate={handleNavigate}
          currentRole={currentRole}
          onChangeRole={handleRoleChange}
          filters={filters}
          onFilterChange={setFilters}
          onToggleMobileMenu={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          selectedCaseId={selectedCaseId}
        />

        {/* Global Sub-navigation for Sanggahan to allow switching between Pelaku Usaha and Reviewer Workspace */}
        {(currentPage === 'sanggahan' ||
          currentPage === 'portal-sanggahan' ||
          currentPage === 'workspace-sanggahan') && (
          <div className="pt-16 bg-surface-container-low px-space-md lg:px-space-lg py-2 border-b border-border-warm/60 flex items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="font-label-xs text-on-surface-variant uppercase tracking-wider font-semibold">
                Pilih Perspektif Sanggahan:
              </span>
              <div className="inline-flex items-center bg-surface p-1 rounded-lg shadow-xs border border-border-subtle">
                <button
                  onClick={() => {
                    setSanggahanSubTab('reviewer');
                    setCurrentPage('workspace-sanggahan');
                  }}
                  className={`px-3 py-1 rounded-md text-label-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                    currentPage === 'workspace-sanggahan' ||
                    (currentPage === 'sanggahan' && sanggahanSubTab === 'reviewer')
                      ? 'bg-primary-container text-on-primary shadow-xs'
                      : 'text-on-surface-variant hover:text-on-surface'
                  }`}
                  type="button"
                >
                  <span className="material-symbols-outlined text-[15px]">shield_person</span>
                  Workspace Penelaah (Auditor Reviewer)
                </button>
                <button
                  onClick={() => {
                    setSanggahanSubTab('portal');
                    setCurrentPage('portal-sanggahan');
                  }}
                  className={`px-3 py-1 rounded-md text-label-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                    currentPage === 'portal-sanggahan' ||
                    (currentPage === 'sanggahan' && sanggahanSubTab === 'portal')
                      ? 'bg-primary-container text-on-primary shadow-xs'
                      : 'text-on-surface-variant hover:text-on-surface'
                  }`}
                  type="button"
                >
                  <span className="material-symbols-outlined text-[15px]">domain</span>
                  Portal Pelaku Usaha (Hak Jawab &amp; Bukti)
                </button>
              </div>
            </div>

            <div className="hidden sm:inline-flex items-center gap-1.5 text-label-xs text-secondary font-medium">
              <span className="material-symbols-outlined text-[15px]">schedule</span>
              Batas Waktu Hak Jawab: 14 Hari Kerja
            </div>
          </div>
        )}

        {/* Page Content View Router */}
        <main
          className={`w-full bg-background min-h-screen px-space-md lg:px-space-lg py-space-lg ${
            currentPage === 'sanggahan' ||
            currentPage === 'portal-sanggahan' ||
            currentPage === 'workspace-sanggahan'
              ? 'pt-4'
              : 'pt-20'
          }`}
        >
          {currentPage === 'ringkasan' && (
            <RingkasanPage onNavigate={handleNavigate} onSelectCase={handleSelectCase} />
          )}

          {currentPage === 'pemeriksaan-risiko' && (
            <PemeriksaanRisikoPage onNavigate={handleNavigate} onSelectCase={handleSelectCase} />
          )}

          {currentPage === 'detail-kasus' && (
            <DetailKasusPage onNavigate={handleNavigate} onSelectCase={handleSelectCase} />
          )}

          {currentPage === 'validasi-data' && (
            <ValidasiDataPage onNavigate={handleNavigate} onSelectCase={handleSelectCase} />
          )}

          {currentPage === 'bukti-dan-audit-trail' && (
            <BuktiAuditTrailPage onNavigate={handleNavigate} onSelectCase={handleSelectCase} />
          )}

          {((currentPage === 'sanggahan' && sanggahanSubTab === 'reviewer') ||
            currentPage === 'workspace-sanggahan') && (
            <WorkspaceSanggahanPage onNavigate={handleNavigate} onSelectCase={handleSelectCase} />
          )}

          {((currentPage === 'sanggahan' && sanggahanSubTab === 'portal') ||
            currentPage === 'portal-sanggahan') && (
            <PortalSanggahanPage onNavigate={handleNavigate} onSelectCase={handleSelectCase} />
          )}

          {currentPage === 'inspeksi-lapangan' && (
            <InspeksiLapanganPage onNavigate={handleNavigate} onSelectCase={handleSelectCase} />
          )}

          {currentPage === 'transparansi-publik' && (
            <TransparansiPublikPage onNavigate={handleNavigate} onSelectCase={handleSelectCase} />
          )}

          {currentPage === 'nusawatch' && (
            <NusaWatchPage onNavigate={handleNavigate} onSelectCase={handleSelectCase} />
          )}

          {currentPage === 'pengaturan' && (
            <PengaturanAksesPage onNavigate={handleNavigate} onSelectCase={handleSelectCase} />
          )}

          {currentPage === 'ragam-kondisi' && (
            <RagamKondisiPage onNavigate={handleNavigate} onSelectCase={handleSelectCase} />
          )}
        </main>
      </div>
    </div>
  );
}
