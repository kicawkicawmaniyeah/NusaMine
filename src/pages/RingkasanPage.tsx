import React, { useState } from 'react';
import { ShadowModePanel } from '../components/ShadowModePanel';
import { SystemArchitecturePanel } from '../components/SystemArchitecturePanel';
import { ImplementationRoadmapPanel } from '../components/ImplementationRoadmapPanel';

interface Props {
  onNavigate?: (path: string) => void;
  onSelectCase?: (caseId: string) => void;
}

interface TriageCase {
  id: string;
  company: string;
  iup: string;
  commodity: string;
  region: string;
  anomalyTitle: string;
  anomalyDetail: string;
  riskBand: 'Tinggi' | 'Sedang' | 'Rendah';
  age: string;
  statusLabel: string;
  statusColor: 'anomaly' | 'review' | 'verified' | 'neutral' | 'tertiary';
  reviewerName: string;
  reviewerRole: string;
}

const TRIAGE_CASES: TriageCase[] = [
  {
    id: 'NM-2025-0891',
    company: 'PT Mahakam Bara Energi',
    iup: 'IUP-OP: 503/014/IUP/DPMPTSP',
    commodity: 'Batu Bara',
    region: 'Kutai Kartanegara, Kaltim',
    anomalyTitle: 'Selisih Volume SIMBARA vs Inaportnet',
    anomalyDetail: 'Deviasi +12.450 MT (12,4%)',
    riskBand: 'Tinggi',
    age: '3 hari',
    statusLabel: 'Sanggahan Diajukan',
    statusColor: 'tertiary',
    reviewerName: 'Bambang S.',
    reviewerRole: 'Ditjen Minerba',
  },
  {
    id: 'NM-2025-0842',
    company: 'PT Bukit Prima Coal',
    iup: 'IUP-OP: 503/089/IUP/DPMPTSP',
    commodity: 'Batu Bara',
    region: 'Muara Enim, SumSel',
    anomalyTitle: 'Perbedaan Kalori CoA Lab Surveyor',
    anomalyDetail: 'Selisih GAR 480 kcal/kg',
    riskBand: 'Sedang',
    age: '5 hari',
    statusLabel: 'Klarifikasi Dikirim',
    statusColor: 'review',
    reviewerName: 'Hendra W.',
    reviewerRole: 'Auditor Lapangan',
  },
  {
    id: 'NM-2025-0774',
    company: 'PT Borneo Mineral Persada',
    iup: 'IUP-OP: 503/102/IUP/DPMPTSP',
    commodity: 'Batu Bara',
    region: 'Tanah Bumbu, KalSel',
    anomalyTitle: 'Discrepancy Titik Muat Drone vs RKAB',
    anomalyDetail: 'Deviasi titik kordinat Jetty #4',
    riskBand: 'Tinggi',
    age: '11 hari',
    statusLabel: 'Dijadwalkan Lapangan',
    statusColor: 'review',
    reviewerName: 'Tim Terpadu 2',
    reviewerRole: 'ESDM & Surveyor',
  },
  {
    id: 'NM-2025-0621',
    company: 'PT Nusantara Coal Mandiri',
    iup: 'IUP-OP: 503/054/IUP/DPMPTSP',
    commodity: 'Batu Bara',
    region: 'Kutai Barat, Kaltim',
    anomalyTitle: 'Stempel Waktu Timbangan Melewati Batas Muat',
    anomalyDetail: 'Deviasi rentang 36 jam',
    riskBand: 'Sedang',
    age: '4 hari',
    statusLabel: 'Dalam Verifikasi Berkas',
    statusColor: 'neutral',
    reviewerName: 'Siti Rahma',
    reviewerRole: 'Verifikator PNBP',
  },
  {
    id: 'NM-2025-0589',
    company: 'PT Sumber Sejahtera Tambang',
    iup: 'IUP-OP: 503/218/IUP/DPMPTSP',
    commodity: 'Batu Bara',
    region: 'Lahat, SumSel',
    anomalyTitle: 'Selisih Pelaporan Tongkang e-PNBP (2.8%)',
    anomalyDetail: 'Di bawah ambang batas toleransi 5%',
    riskBand: 'Rendah',
    age: '1 hari',
    statusLabel: 'Menunggu Penugasan',
    statusColor: 'neutral',
    reviewerName: 'Belum ditugaskan',
    reviewerRole: '',
  },
  {
    id: 'NM-2025-0512',
    company: 'PT Barito Coal Logistics',
    iup: 'IUP-OP: 503/310/IUP/DPMPTSP',
    commodity: 'Batu Bara',
    region: 'Barito Utara, Kalteng',
    anomalyTitle: 'Selisih Draft Survey Tongkang vs SPB',
    anomalyDetail: 'Deviasi +4.120 MT (4,2%)',
    riskBand: 'Sedang',
    age: '6 hari',
    statusLabel: 'Dalam Verifikasi Berkas',
    statusColor: 'review',
    reviewerName: 'Ahmad F.',
    reviewerRole: 'Auditor ESDM',
  },
  {
    id: 'NM-2025-0487',
    company: 'PT Kaltim Prima Mineral',
    iup: 'IUP-OP: 503/412/IUP/DPMPTSP',
    commodity: 'Batu Bara',
    region: 'Berau, Kaltim',
    anomalyTitle: 'Anomali Sertifikat Kalibrasi Timbangan KAN',
    anomalyDetail: 'Sertifikat melewati masa kalibrasi',
    riskBand: 'Tinggi',
    age: '8 hari',
    statusLabel: 'Dijadwalkan Lapangan',
    statusColor: 'anomaly',
    reviewerName: 'Tim Terpadu 1',
    reviewerRole: 'Ditjen Minerba',
  },
  {
    id: 'NM-2025-0433',
    company: 'PT Kutai Batubara Resources',
    iup: 'IUP-OP: 503/159/IUP/DPMPTSP',
    commodity: 'Batu Bara',
    region: 'Kutai Kartanegara, Kaltim',
    anomalyTitle: 'Keterlambatan Pelaporan Billing e-PNBP',
    anomalyDetail: 'Selisih NTPN settlement >48 jam',
    riskBand: 'Sedang',
    age: '7 hari',
    statusLabel: 'Klarifikasi Dikirim',
    statusColor: 'review',
    reviewerName: 'Siti Rahma',
    reviewerRole: 'Verifikator PNBP',
  },
  {
    id: 'NM-2025-0391',
    company: 'PT Mahakam Jaya Mining',
    iup: 'IUP-OP: 503/088/IUP/DPMPTSP',
    commodity: 'Batu Bara',
    region: 'Samarinda, Kaltim',
    anomalyTitle: 'Variansi Tonase Tongkang TB Oceanic 16',
    anomalyDetail: 'Deviasi 6,8% dari estimasi awal',
    riskBand: 'Sedang',
    age: '4 hari',
    statusLabel: 'Sanggahan Diajukan',
    statusColor: 'tertiary',
    reviewerName: 'Bambang S.',
    reviewerRole: 'Ditjen Minerba',
  },
  {
    id: 'NM-2025-0348',
    company: 'PT Inti Tambang Mandiri',
    iup: 'IUP-OP: 503/241/IUP/DPMPTSP',
    commodity: 'Batu Bara',
    region: 'Tabalong, KalSel',
    anomalyTitle: 'Rekonsiliasi Deviasi GAR MOMS vs CEISA',
    anomalyDetail: 'Selisih 110 kcal/kg (toleransi wajar)',
    riskBand: 'Rendah',
    age: '2 hari',
    statusLabel: 'Menunggu Penugasan',
    statusColor: 'neutral',
    reviewerName: 'Belum ditugaskan',
    reviewerRole: '',
  },
  {
    id: 'NM-2025-0311',
    company: 'PT Berau Cahaya Coal',
    iup: 'IUP-OP: 503/178/IUP/DPMPTSP',
    commodity: 'Batu Bara',
    region: 'Berau, Kaltim',
    anomalyTitle: 'Perbedaan Koordinat Jetty GIS vs IUP-OP',
    anomalyDetail: 'Titik muat berjarak 340m dari batas konsesi',
    riskBand: 'Tinggi',
    age: '12 hari',
    statusLabel: 'Dijadwalkan Lapangan',
    statusColor: 'anomaly',
    reviewerName: 'Tim Terpadu 2',
    reviewerRole: 'ESDM & Surveyor',
  },
  {
    id: 'NM-2025-0276',
    company: 'PT Paser Nusantara Energy',
    iup: 'IUP-OP: 503/095/IUP/DPMPTSP',
    commodity: 'Batu Bara',
    region: 'Paser, Kaltim',
    anomalyTitle: 'Anomali Stempel Waktu SPB KSOP',
    anomalyDetail: 'Stempel keberangkatan mendahului billing',
    riskBand: 'Sedang',
    age: '5 hari',
    statusLabel: 'Dalam Verifikasi Berkas',
    statusColor: 'review',
    reviewerName: 'Hendra W.',
    reviewerRole: 'Auditor Lapangan',
  },
  {
    id: 'NM-2025-0219',
    company: 'PT Sebuku Mineral Utama',
    iup: 'IUP-OP: 503/118/IUP/DPMPTSP',
    commodity: 'Batu Bara',
    region: 'Kotabaru, KalSel',
    anomalyTitle: 'Keterlambatan Sinkronisasi Portal MV/MVP',
    anomalyDetail: 'Latency gateway sistem teratasi',
    riskBand: 'Rendah',
    age: '1 hari',
    statusLabel: 'Verifikasi Selesai',
    statusColor: 'verified',
    reviewerName: 'Bambang S.',
    reviewerRole: 'Ditjen Minerba',
  },
  {
    id: 'NM-2025-0184',
    company: 'PT Samarinda Coal Mining',
    iup: 'IUP-OP: 503/062/IUP/DPMPTSP',
    commodity: 'Batu Bara',
    region: 'Samarinda, Kaltim',
    anomalyTitle: 'Inkonsistensi Nomor Manifes PEB BC',
    anomalyDetail: 'Digit checksum tidak sinkron',
    riskBand: 'Sedang',
    age: '3 hari',
    statusLabel: 'Menunggu Penugasan',
    statusColor: 'neutral',
    reviewerName: 'Belum ditugaskan',
    reviewerRole: '',
  },
  {
    id: 'NM-2025-0102',
    company: 'PT Melak Bara Sejahtera',
    iup: 'IUP-OP: 503/305/IUP/DPMPTSP',
    commodity: 'Batu Bara',
    region: 'Kutai Barat, Kaltim',
    anomalyTitle: 'Uji Silang Telemetri Belt Conveyor',
    anomalyDetail: 'Log digital konsisten dengan SIMBARA',
    riskBand: 'Rendah',
    age: '2 hari',
    statusLabel: 'Verifikasi Selesai',
    statusColor: 'verified',
    reviewerName: 'Siti Rahma',
    reviewerRole: 'Verifikator PNBP',
  },
];

export const RingkasanPage: React.FC<Props> = ({ onNavigate, onSelectCase }) => {
  const [activeTab, setActiveTab] = useState<'operasional' | 'shadow-mode' | 'arsitektur' | 'roadmap'>('operasional');
  const [ringkasanPage, setRingkasanPage] = useState<number>(1);
  const [selectedRiskFilter, setSelectedRiskFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const itemsPerPage = 5;

  const filteredCases = TRIAGE_CASES.filter(c => {
    const matchesRisk = selectedRiskFilter === 'all' || 
      (selectedRiskFilter === 'high' && c.riskBand === 'Tinggi') ||
      (selectedRiskFilter === 'medium' && c.riskBand === 'Sedang') ||
      (selectedRiskFilter === 'low' && c.riskBand === 'Rendah');
    const matchesSearch = !searchQuery || 
      c.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.anomalyTitle.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesRisk && matchesSearch;
  });

  const totalPages = Math.max(1, Math.ceil(filteredCases.length / itemsPerPage));
  const currentPage = Math.min(ringkasanPage, totalPages);
  const displayedCases = filteredCases.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
  return (
    <div className="w-full">
      <div className="flex flex-col w-full gap-space-lg pb-space-2xl">
{/* 1. Header & Actions */}
<div className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-md">
<div className="flex flex-col gap-1">
<div className="flex items-center gap-space-sm flex-wrap"><h1 className="font-display-md text-display-md text-on-surface font-semibold tracking-tight mr-1">Ringkasan Tata Kelola</h1><span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-secondary-container/60 text-secondary font-label-xs text-label-xs font-medium"><span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>Pilot Batu Bara : Wilayah Kesiapan Data Tinggi</span><span className="px-2.5 py-1 rounded-full bg-surface-container-high text-on-surface-variant font-label-xs text-label-xs font-medium">Data demonstrasi</span></div>
<p className="font-body-md text-body-md text-on-surface-variant">
        Pantau integritas bukti, anomali data terhubung, dan alur pemeriksaan bukti secara terpadu.
      </p>
</div>
{/* Quick Action Controls */}
<div className="flex items-center gap-space-sm shrink-0">
<button className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface font-label-md text-label-md transition-all shadow-sm" type="button">
<span className="material-symbols-outlined text-[18px] text-on-surface-variant">download</span>
<span className="">Unduh Rekapitulasi Audit</span>
</button>
<button className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary-container text-on-primary hover:bg-primary font-label-md text-label-md transition-all shadow-sm" type="button">
<span className="material-symbols-outlined text-[18px]">export_notes</span>
<span className="">Ekspor Laporan Pengawasan</span>
</button>
</div>
</div>

{/* Perspective Tabs Switcher (Operasional, Shadow Mode, Arsitektur 7 Sistem, Roadmap) */}
<div className="flex flex-wrap items-center gap-2 bg-surface-container-low p-1.5 rounded-xl border border-border-warm/60">
  <button
    onClick={() => setActiveTab('operasional')}
    className={`px-3.5 py-2 rounded-lg font-label-md text-label-md font-semibold transition-all flex items-center gap-2 cursor-pointer ${
      activeTab === 'operasional'
        ? 'bg-surface text-primary shadow-sm border border-border-warm'
        : 'text-on-surface-variant hover:text-on-surface'
    }`}
    type="button"
  >
    <span className="material-symbols-outlined text-[18px]">dashboard</span>
    <span>Dashboard Operasional &amp; Triase</span>
  </button>

  <button
    onClick={() => setActiveTab('shadow-mode')}
    className={`px-3.5 py-2 rounded-lg font-label-md text-label-md font-semibold transition-all flex items-center gap-2 cursor-pointer ${
      activeTab === 'shadow-mode'
        ? 'bg-surface text-status-review shadow-sm border border-border-warm'
        : 'text-on-surface-variant hover:text-on-surface'
    }`}
    type="button"
  >
    <span className="w-2 h-2 rounded-full bg-status-review animate-ping"></span>
    <span>Mode Bayangan (Shadow Mode)</span>
    <span className="px-1.5 py-0.2 rounded bg-status-review-bg text-status-review font-mono text-[10px]">5 Metrik</span>
  </button>

  <button
    onClick={() => setActiveTab('arsitektur')}
    className={`px-3.5 py-2 rounded-lg font-label-md text-label-md font-semibold transition-all flex items-center gap-2 cursor-pointer ${
      activeTab === 'arsitektur'
        ? 'bg-surface text-primary shadow-sm border border-border-warm'
        : 'text-on-surface-variant hover:text-on-surface'
    }`}
    type="button"
  >
    <span className="material-symbols-outlined text-[18px]">account_tree</span>
    <span>Arsitektur 7 Sistem Terhubung</span>
  </button>

  <button
    onClick={() => setActiveTab('roadmap')}
    className={`px-3.5 py-2 rounded-lg font-label-md text-label-md font-semibold transition-all flex items-center gap-2 cursor-pointer ${
      activeTab === 'roadmap'
        ? 'bg-surface text-primary shadow-sm border border-border-warm'
        : 'text-on-surface-variant hover:text-on-surface'
    }`}
    type="button"
  >
    <span className="material-symbols-outlined text-[18px]">timeline</span>
    <span>Roadmap Implementasi Pilot</span>
  </button>
</div>

{/* 2. Persistent Governance Principle Banner */}
<div className="relative overflow-hidden rounded-xl bg-surface-container-lowest p-space-md shadow-sm">
<div className="absolute left-0 top-0 bottom-0 w-1.5 bg-secondary"></div>
<div className="flex items-start sm:items-center justify-between gap-space-md pl-2">
<div className="flex items-start gap-space-sm">
<span className="material-symbols-outlined text-secondary shrink-0 text-[22px] mt-0.5 sm:mt-0" style={{fontVariationSettings: "'FILL' 1"}}>gavel</span>
<div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
<span className="font-headline-sm text-headline-sm text-on-surface font-semibold">Prinsip Tata Kelola:</span>
<p className="font-body-md text-body-md text-on-surface-variant">
            Skor risiko adalah pemicu pemeriksaan manusia, bukan bukti pelanggaran hukum. Setiap anomali wajib melalui verifikasi silang dan proses sanggahan yang adil.
          </p>
</div>
</div>
<div className="hidden md:inline-flex items-center gap-1 shrink-0 px-2 py-1 rounded bg-secondary-container/40 text-secondary font-label-xs text-label-xs">
<span className="material-symbols-outlined text-[14px]">shield</span>
        Human-in-the-Loop Protocol
      </div>
</div>
</div>

{/* CONDITIONAL PERSPECTIVES */}
{activeTab === 'operasional' && (
  <div className="flex flex-col gap-space-lg">
    {/* Quick Shadow Mode Evaluation Banner */}
    <div
      onClick={() => setActiveTab('shadow-mode')}
      className="p-space-md rounded-xl bg-gradient-to-r from-status-review-bg/80 via-surface to-surface-container-low border border-status-review/30 flex flex-col md:flex-row md:items-center justify-between gap-space-md shadow-xs cursor-pointer hover:shadow-md transition-all group"
    >
      <div className="flex items-start md:items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-status-review text-surface flex items-center justify-center shrink-0 shadow-xs">
          <span className="material-symbols-outlined text-[20px]">insights</span>
        </div>
        <div className="flex flex-col gap-0.5">
          <div className="flex items-center gap-2">
            <span className="font-label-md text-label-md text-on-surface font-bold">
              Mode Bayangan (Shadow Mode) Aktif - Evaluasi Tahap 1
            </span>
            <span className="px-2 py-0.2 rounded-full bg-status-review-bg text-status-review font-mono text-[10px] font-bold">
              Pilot Kaltim &amp; Kalsel
            </span>
          </div>
          <p className="font-body-sm text-body-sm text-on-surface-variant">
            Akurasi AI dievaluasi di latar belakang terhadap audit faktual manusia. Skor tidak digunakan untuk sanksi otomatis.
          </p>
        </div>
      </div>

      <div className="flex items-center gap-space-sm shrink-0">
        <div className="hidden lg:flex items-center gap-3 pr-2 border-r border-border-subtle font-mono text-label-xs text-label-xs">
          <div>FPR: <strong className="text-status-verified">4,8%</strong></div>
          <div>FNR: <strong className="text-primary">2,1%</strong></div>
          <div>SLA: <strong className="text-on-surface">3,2 hr</strong></div>
        </div>
        <span className="font-label-xs text-label-xs text-status-review font-bold group-hover:underline flex items-center gap-1">
          Buka 5 Metrik Evaluasi →
        </span>
      </div>
    </div>

    {/* 3. KPI Metric Cards (4 Cards) */}
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-space-md">
{/* Card 1 */}
<div onClick={() => onNavigate?.('bukti-dan-audit-trail')} className="relative rounded-xl bg-surface-container-lowest p-5 flex flex-col justify-between shadow-sm hover:shadow-md transition-all cursor-pointer group">
<div className="flex items-start justify-between">
<div className="flex flex-col gap-1">
<div className="flex items-center gap-1.5">
<span className="font-body-sm text-body-sm text-on-surface-variant font-medium">Bukti Diterima &amp; Terverifikasi</span>
<span className="text-[10px] px-1.5 py-0.2 rounded bg-surface-container-high text-on-surface-variant font-label-xs">Demo</span>
</div>
<div className="flex items-baseline gap-2 mt-1">
<span className="font-tabular-kpi text-tabular-kpi text-primary font-bold">1.428</span>
<span className="font-label-md text-label-md text-on-surface-variant font-medium">berkas</span>
</div>
</div>
<div className="w-10 h-10 rounded-lg bg-status-verified-bg flex items-center justify-center text-status-verified shrink-0">
<span className="material-symbols-outlined text-[22px]">verified_user</span>
</div>
</div>
<div className="mt-4 pt-3 flex items-center justify-between font-label-xs text-label-xs text-on-surface-variant bg-surface-container-low/50 px-2.5 py-1.5 rounded-lg">
<span className="inline-flex items-center gap-1 text-status-verified font-medium">
<span className="material-symbols-outlined text-[14px]">trending_up</span>
          +8.4% bln lalu
        </span>
<span className="inline-flex items-center gap-1 font-medium text-status-verified">
<span className="w-1.5 h-1.5 rounded-full bg-status-verified"></span>
          Integritas Valid
        </span>
</div>
</div>
{/* Card 2 */}
<div onClick={() => onNavigate?.('pemeriksaan-risiko')} className="relative rounded-xl bg-surface-container-lowest p-5 flex flex-col justify-between shadow-sm hover:shadow-md transition-all cursor-pointer group">
<div className="flex items-start justify-between">
<div className="flex flex-col gap-1">
<div className="flex items-center gap-1.5">
<span className="font-body-sm text-body-sm text-on-surface-variant font-medium">Anomali Menunggu Tinjauan</span>
<span className="text-[10px] px-1.5 py-0.2 rounded bg-surface-container-high text-on-surface-variant font-label-xs">Demo</span>
</div>
<div className="flex items-baseline gap-2 mt-1">
<span className="font-tabular-kpi text-tabular-kpi text-status-review font-bold">42</span>
<span className="font-label-md text-label-md text-on-surface-variant font-medium">kasus</span>
</div>
</div>
<div className="w-10 h-10 rounded-lg bg-status-review-bg flex items-center justify-center text-status-review shrink-0">
<span className="material-symbols-outlined text-[22px]">pending_actions</span>
</div>
</div>
<div className="mt-4 pt-3 flex items-center justify-between font-label-xs text-label-xs text-on-surface-variant bg-status-review-bg/40 px-2.5 py-1.5 rounded-lg">
<span className="inline-flex items-center gap-1 text-on-surface font-medium">
<span className="material-symbols-outlined text-[14px] text-secondary">trending_down</span>
          -3 hari ini
        </span>
<span className="inline-flex items-center gap-1 font-medium text-status-review">
<span className="w-1.5 h-1.5 rounded-full bg-status-review animate-pulse"></span>
          Verifikasi Manusia
        </span>
</div>
</div>
{/* Card 3 */}
<div onClick={() => onNavigate?.('inspeksi-lapangan')} className="relative rounded-xl bg-surface-container-lowest p-5 flex flex-col justify-between shadow-sm hover:shadow-md transition-all cursor-pointer group">
<div className="flex items-start justify-between">
<div className="flex flex-col gap-1">
<div className="flex items-center gap-1.5">
<span className="font-body-sm text-body-sm text-on-surface-variant font-medium">Pemeriksaan &amp; Klarifikasi Berjalan</span>
<span className="text-[10px] px-1.5 py-0.2 rounded bg-surface-container-high text-on-surface-variant font-label-xs">Demo</span>
</div>
<div className="flex items-baseline gap-2 mt-1">
<span className="font-tabular-kpi text-tabular-kpi text-on-surface font-bold">19</span>
<span className="font-label-md text-label-md text-on-surface-variant font-medium">kasus aktif</span>
</div>
</div>
<div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-secondary shrink-0">
<span className="material-symbols-outlined text-[22px]">quick_reference</span>
</div>
</div>
<div className="mt-4 pt-3 flex items-center justify-between font-label-xs text-label-xs text-on-surface-variant bg-surface-container-low/50 px-2.5 py-1.5 rounded-lg">
<span className="text-on-surface-variant font-medium">12 klarifikasi dok.</span>
<span className="inline-flex items-center gap-1 font-medium text-secondary">
<span className="material-symbols-outlined text-[14px]">travel_explore</span>
          7 uji lapangan
        </span>
</div>
</div>
{/* Card 4 */}
<div onClick={() => onNavigate?.('workspace-sanggahan')} className="relative rounded-xl bg-surface-container-lowest p-5 flex flex-col justify-between shadow-sm hover:shadow-md transition-all cursor-pointer group">
<div className="flex items-start justify-between">
<div className="flex flex-col gap-1">
<div className="flex items-center gap-1.5">
<span className="font-body-sm text-body-sm text-on-surface-variant font-medium">Sanggahan Perlu Ditindaklanjuti</span>
<span className="text-[10px] px-1.5 py-0.2 rounded bg-surface-container-high text-on-surface-variant font-label-xs">Demo</span>
</div>
<div className="flex items-baseline gap-2 mt-1">
<span className="font-tabular-kpi text-tabular-kpi text-tertiary-container font-bold">7</span>
<span className="font-label-md text-label-md text-on-surface-variant font-medium">berkas</span>
</div>
</div>
<div className="w-10 h-10 rounded-lg bg-tertiary-fixed flex items-center justify-center text-tertiary shrink-0">
<span className="material-symbols-outlined text-[22px]">balance</span>
</div>
</div>
<div className="mt-4 pt-3 flex items-center justify-between font-label-xs text-label-xs text-on-surface-variant bg-surface-container-low/50 px-2.5 py-1.5 rounded-lg">
<span className="inline-flex items-center gap-1 text-on-surface font-medium">
<span className="material-symbols-outlined text-[14px] text-tertiary">timer</span>
          Target &lt; 14 hari kerja
        </span>
<span className="font-semibold text-tertiary">Hak Sanggah Aktif</span>
</div>
</div>
</div>
{/* 4. Analytical Grid (Trend Chart + Regional Volume Breakdown) */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-md">
{/* Chart Column (7 of 12) */}
<div className="lg:col-span-7 rounded-xl bg-surface-container-lowest p-space-md shadow-sm flex flex-col justify-between">
<div>
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm pb-space-sm">
<div className="flex flex-col gap-1">
  <div className="flex items-center gap-2 flex-wrap">
    <h2 className="font-headline-sm text-headline-sm text-on-surface font-semibold">Tren Deteksi Anomali &amp; Penyelesaian Tinjauan</h2>
    <span className="px-2 py-0.5 rounded-full bg-accent-palmoil/20 text-accent-palmoil font-label-xs text-label-xs font-bold">
      Fitur Terencana - Menunggu Evaluasi Pilot (Planned Feature - Pending Pilot Evaluation)
    </span>
  </div>
  <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Pemantauan volume temuan vs penyelesaian verifikasi 6 bulan terakhir.</p>
</div>
<div className="inline-flex items-center bg-surface-container-low p-1 rounded-lg text-label-xs font-label-xs self-start sm:self-center">
<button className="px-2.5 py-1 text-on-surface-variant hover:text-on-surface transition-colors" type="button">30 Hari</button>
<button className="px-2.5 py-1 text-on-surface-variant hover:text-on-surface transition-colors" type="button">3 Bulan</button>
<button className="px-2.5 py-1 rounded bg-surface text-on-surface font-semibold shadow-xs" type="button">6 Bulan</button>
<button className="px-2.5 py-1 text-on-surface-variant hover:text-on-surface transition-colors" type="button">YTD</button>
</div>
</div>
{/* Metric Badges Legend */}
<div className="flex items-center gap-space-md py-2 text-label-xs font-label-xs">
<div className="flex items-center gap-2">
<span className="w-3 h-3 rounded-full bg-primary-container"></span>
<span className="text-on-surface font-medium">Tinjauan Selesai Bersih</span>
</div>
<div className="flex items-center gap-2">
<span className="w-3 h-3 rounded-full bg-status-review"></span>
<span className="text-on-surface font-medium">Anomali Terdeteksi (Pemicu)</span>
</div>
</div>
{/* Inline SVG Trend Visualization */}
<div className="mt-2 w-full h-56 flex flex-col justify-end">
<svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 540 180">
{/* Gridlines */}
<line className="text-surface-container" stroke="currentColor" strokeDasharray="3 3" x1="0" x2="540" y1="30" y2="30"></line>
<line className="text-surface-container" stroke="currentColor" strokeDasharray="3 3" x1="0" x2="540" y1="80" y2="80"></line>
<line className="text-surface-container" stroke="currentColor" strokeDasharray="3 3" x1="0" x2="540" y1="130" y2="130"></line>
<line className="text-surface-container" stroke="currentColor" x1="0" x2="540" y1="170" y2="170"></line>
{/* Resolved Area Gradient Fill */}
<defs>
<linearGradient id="forestArea" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stopColor="#1e3f20" stopOpacity="0.18"></stop>
<stop offset="100%" stopColor="#1e3f20" stopOpacity="0.01"></stop>
</linearGradient>
</defs>
{/* Area Path (Resolved) */}
<path d="M 0,140 Q 60,120 108,110 T 216,95 T 324,80 T 432,60 T 540,42 L 540,170 L 0,170 Z" fill="url(#forestArea)"></path>
{/* Line Path (Anomalies Flagged - Amber) */}
<path d="M 0,125 Q 60,105 108,85 T 216,98 T 324,70 T 432,58 T 540,50" fill="none" stroke="#D97706" strokeLinecap="round" strokeWidth="2.5"></path>
{/* Line Path (Reviews Resolved - Forest Green) */}
<path d="M 0,140 Q 60,120 108,110 T 216,95 T 324,80 T 432,60 T 540,42" fill="none" stroke="#1e3f20" strokeLinecap="round" strokeWidth="2.5"></path>
{/* Plot Points (Resolved) */}
<circle cx="108" cy="110" fill="#1e3f20" r="3.5" stroke="#ffffff" strokeWidth="1.5"></circle>
<circle cx="216" cy="95" fill="#1e3f20" r="3.5" stroke="#ffffff" strokeWidth="1.5"></circle>
<circle cx="324" cy="80" fill="#1e3f20" r="3.5" stroke="#ffffff" strokeWidth="1.5"></circle>
<circle cx="432" cy="60" fill="#1e3f20" r="3.5" stroke="#ffffff" strokeWidth="1.5"></circle>
<circle cx="540" cy="42" fill="#1e3f20" r="4.5" stroke="#ffffff" strokeWidth="2"></circle>
{/* Plot Points (Anomalies) */}
<circle cx="108" cy="85" fill="#D97706" r="3"></circle>
<circle cx="216" cy="98" fill="#D97706" r="3"></circle>
<circle cx="324" cy="70" fill="#D97706" r="3"></circle>
<circle cx="432" cy="58" fill="#D97706" r="3"></circle>
<circle cx="540" cy="50" fill="#D97706" r="4"></circle>
</svg>
{/* X-Axis Labels */}
<div className="flex justify-between items-center text-label-xs font-label-xs text-on-surface-variant pt-2">
<span className="">Sep 2024</span>
<span className="">Okt 2024</span>
<span className="">Nov 2024</span>
<span className="">Des 2024</span>
<span className="">Jan 2025</span>
<span className="">Feb 2025 (Pilot)</span>
</div>
</div>
</div>
{/* Chart Summary Footer */}
<div className="mt-4 pt-3 bg-surface-container-low/60 rounded-lg px-3 py-2 flex items-center justify-between text-body-sm font-body-sm">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary text-[18px]">verified</span>
<span className="text-on-surface">Rasio penyelesaian tinjauan tepat waktu:</span>
<span className="font-tabular-data text-tabular-data text-primary font-bold">91,4%</span>
</div>
<span className="text-label-xs font-label-xs text-on-surface-variant">Rata-rata 4.8 hari kerja</span>
</div>
</div>
{/* Regional Breakdown Column (5 of 12) */}
<div className="lg:col-span-5 rounded-xl bg-surface-container-lowest p-space-md shadow-sm flex flex-col justify-between">
<div>
<div className="flex items-center justify-between pb-space-xs">
<div>
<h2 className="font-headline-sm text-headline-sm text-on-surface font-semibold">Sebaran Volume Tinjauan Wilayah</h2>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Pilot Batu Bara - Distribusi beban kerja auditor per distrik.</p>
</div>
<span className="px-2 py-0.5 rounded bg-surface-container text-secondary font-label-xs text-label-xs font-medium">3 Provinsi</span>
</div>
<div className="mt-space-md flex flex-col gap-4">
{/* Region 1: KalTim */}
<div className="flex flex-col gap-1.5 p-3 rounded-lg bg-surface-container-low/40 hover:bg-surface-container-low transition-colors">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary text-[18px]">location_on</span>
<span className="font-headline-sm text-headline-sm text-on-surface font-semibold">Kalimantan Timur</span>
</div>
<div className="flex items-center gap-2">
<span className="font-tabular-data text-tabular-data font-semibold text-primary">18 Kasus</span>
<span className="font-label-xs text-label-xs text-on-surface-variant">(42%)</span>
</div>
</div>
<p className="font-label-xs text-label-xs text-on-surface-variant pl-6">Kutai Kartanegara, Kutai Barat, Berau</p>
<div className="w-full bg-surface-container h-2 rounded-full overflow-hidden mt-1">
<div className="bg-primary-container h-full rounded-full" style={{width: "42%"}}></div>
</div>
</div>
{/* Region 2: SumSel */}
<div className="flex flex-col gap-1.5 p-3 rounded-lg bg-surface-container-low/40 hover:bg-surface-container-low transition-colors">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary text-[18px]">location_on</span>
<span className="font-headline-sm text-headline-sm text-on-surface font-semibold">Sumatera Selatan</span>
</div>
<div className="flex items-center gap-2">
<span className="font-tabular-data text-tabular-data font-semibold text-primary">14 Kasus</span>
<span className="font-label-xs text-label-xs text-on-surface-variant">(33%)</span>
</div>
</div>
<p className="font-label-xs text-label-xs text-on-surface-variant pl-6">Muara Enim, Lahat, Tanjung Enim</p>
<div className="w-full bg-surface-container h-2 rounded-full overflow-hidden mt-1">
<div className="bg-secondary h-full rounded-full" style={{width: "33%"}}></div>
</div>
</div>
{/* Region 3: KalSel */}
<div className="flex flex-col gap-1.5 p-3 rounded-lg bg-surface-container-low/40 hover:bg-surface-container-low transition-colors">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary text-[18px]">location_on</span>
<span className="font-headline-sm text-headline-sm text-on-surface font-semibold">Kalimantan Selatan</span>
</div>
<div className="flex items-center gap-2">
<span className="font-tabular-data text-tabular-data font-semibold text-primary">10 Kasus</span>
<span className="font-label-xs text-label-xs text-on-surface-variant">(25%)</span>
</div>
</div>
<p className="font-label-xs text-label-xs text-on-surface-variant pl-6">Tanah Bumbu, Tanah Laut</p>
<div className="w-full bg-surface-container h-2 rounded-full overflow-hidden mt-1">
<div className="bg-accent-butter h-full rounded-full" style={{width: "25%"}}></div>
</div>
</div>
</div>
</div>
<div className="mt-4 pt-3 flex items-start gap-2 text-label-xs font-label-xs text-on-surface-variant bg-surface-container-low/50 p-2.5 rounded-lg">
<span className="material-symbols-outlined text-[16px] text-secondary shrink-0">info</span>
<span className="">Volume mencerminkan intensitas data terhubung lintas-sistem pelabuhan, bukan vonis kepatuhan agregat pelaku usaha.</span>
</div>
</div>
</div>
{/* 5. Main Workstation Queue Table: Prioritas Tinjauan Verifikator */}
<div className="rounded-xl bg-surface-container-lowest p-space-md shadow-sm flex flex-col gap-space-md">
{/* Table Header Controls */}
<div className="flex flex-col xl:flex-row xl:items-center justify-between gap-space-sm pb-1">
<div>
<div className="flex items-center gap-2">
<h2 className="font-headline-sm text-headline-sm text-on-surface font-semibold">Prioritas Tinjauan Verifikator</h2>
<span className="px-2 py-0.5 rounded-full bg-status-review-bg text-status-review font-label-xs text-label-xs font-semibold">42 Perlu Tindakan</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Daftar kasus yang memerlukan penelaahan manusia berimbang berdasarkan stempel bukti digital.</p>
</div>
{/* Filters & Search */}
<div className="flex flex-wrap items-center gap-2">
<div className="relative">
<span className="material-symbols-outlined absolute left-2.5 top-2.5 text-[16px] text-on-surface-variant">search</span>
<input className="pl-8 pr-3 py-1.5 rounded-lg bg-surface-container-low text-on-surface font-body-sm text-body-sm focus:outline-none focus:ring-1 focus:ring-primary w-64 shadow-xs" placeholder="Cari ID Kasus, Pemegang IUP, Muat..." type="text" value={searchQuery} onChange={(e) => { setSearchQuery(e.target.value); setRingkasanPage(1); }} />
</div>
<select className="px-3 py-1.5 rounded-lg bg-surface-container-low text-on-surface font-label-xs text-label-xs focus:outline-none cursor-pointer">
<option>Semua Kategori Anomali</option>
<option>Selisih Volume SIMBARA vs Inaportnet</option>
<option>Ketidaksesuaian CoA Surveyor</option>
<option>Deviasi Titik Muat Drone vs RKAB</option>
<option>Keterlambatan Pelaporan e-PNBP</option>
</select>
<select className="px-3 py-1.5 rounded-lg bg-surface-container-low text-on-surface font-label-xs text-label-xs focus:outline-none cursor-pointer" value={selectedRiskFilter} onChange={(e) => { setSelectedRiskFilter(e.target.value); setRingkasanPage(1); }}>
<option value="all">Semua Band Risiko</option>
<option value="high">Tinggi (Pemicu Segera)</option>
<option value="medium">Sedang (Evaluasi Bukti)</option>
<option value="low">Rendah (Penyelarasan Rutin)</option>
</select>
</div>
</div>
{/* Data-Dense Table Container */}
<div className="w-full overflow-x-auto rounded-lg">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-surface-container-low text-on-surface-variant font-label-xs text-label-xs uppercase tracking-wider">
<th className="py-2.5 px-3 font-semibold">ID Kasus</th>
<th className="py-2.5 px-3 font-semibold">Entitas / Pemegang IUP</th>
<th className="py-2.5 px-3 font-semibold">Komoditas &amp; Wilayah</th>
<th className="py-2.5 px-3 font-semibold">Jenis Anomali Terdeteksi</th>
<th className="py-2.5 px-3 font-semibold">Band Risiko</th>
<th className="py-2.5 px-3 font-semibold">Usia</th>
<th className="py-2.5 px-3 font-semibold">Status Tinjauan</th>
<th className="py-2.5 px-3 font-semibold">Penelaah</th>
<th className="py-2.5 px-3 font-semibold text-right">Aksi</th>
</tr>
</thead>
<tbody className="divide-y divide-surface-container font-body-sm text-body-sm text-on-surface">
{displayedCases.map((c) => (
<tr key={c.id} onClick={() => onSelectCase?.(c.id)} className="hover:bg-surface-container-low/50 transition-colors group cursor-pointer">
<td className="py-3 px-3 font-tabular-data text-tabular-data font-semibold text-primary">
  {c.id}
</td>
<td className="py-3 px-3">
  <div className="font-medium text-on-surface">{c.company}</div>
  <div className="font-label-xs text-label-xs text-on-surface-variant">{c.iup}</div>
</td>
<td className="py-3 px-3">
  <span className="font-medium">{c.commodity}</span>
  <div className="font-label-xs text-label-xs text-on-surface-variant">{c.region}</div>
</td>
<td className="py-3 px-3 max-w-xs">
  <div className="text-on-surface font-medium truncate">{c.anomalyTitle}</div>
  <div className="font-label-xs text-label-xs text-secondary font-mono">{c.anomalyDetail}</div>
</td>
<td className="py-3 px-3">
  <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full font-label-xs text-label-xs font-semibold ${
    c.riskBand === 'Tinggi' 
      ? 'bg-status-anomaly-bg text-status-anomaly' 
      : c.riskBand === 'Sedang' 
        ? 'bg-status-review-bg text-status-review' 
        : 'bg-status-verified-bg text-status-verified'
  }`}>
    <span className="material-symbols-outlined text-[13px]">
      {c.riskBand === 'Tinggi' ? 'priority_high' : c.riskBand === 'Sedang' ? 'warning' : 'check_circle'}
    </span>
    {c.riskBand}
  </span>
</td>
<td className="py-3 px-3 font-tabular-data text-tabular-data text-on-surface-variant">
  {c.age}
</td>
<td className="py-3 px-3">
  <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full font-label-xs text-label-xs font-medium ${
    c.statusColor === 'tertiary' 
      ? 'bg-tertiary-fixed text-tertiary' 
      : c.statusColor === 'review' 
        ? 'bg-status-review-bg text-status-review' 
        : c.statusColor === 'anomaly' 
          ? 'bg-status-anomaly-bg text-status-anomaly' 
          : c.statusColor === 'verified'
            ? 'bg-status-verified-bg text-status-verified'
            : 'bg-status-neutral-bg text-status-neutral'
  }`}>
    <span className="w-1.5 h-1.5 rounded-full bg-current"></span>
    {c.statusLabel}
  </span>
</td>
<td className="py-3 px-3">
  {c.reviewerName ? (
    <>
      <div className="text-on-surface font-medium">{c.reviewerName}</div>
      {c.reviewerRole && <div className="font-label-xs text-label-xs text-on-surface-variant">{c.reviewerRole}</div>}
    </>
  ) : (
    <span className="font-label-xs text-label-xs text-on-surface-variant italic">Belum ditugaskan</span>
  )}
</td>
<td className="py-3 px-3 text-right">
  <button onClick={(e) => { e.stopPropagation(); onSelectCase?.(c.id); }} className="inline-flex items-center gap-1 px-3 py-1 rounded bg-primary-container text-on-primary hover:bg-primary font-label-xs text-label-xs font-semibold transition-colors shadow-xs cursor-pointer" type="button">
    <span className="">Buka Kasus</span>
    <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
  </button>
</td>
</tr>
))}
</tbody>
</table>
</div>
{/* Table Footer / Pagination */}
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm pt-2 text-label-xs font-label-xs text-on-surface-variant">
<span className="">Menampilkan {filteredCases.length > 0 ? (currentPage - 1) * itemsPerPage + 1 : 0}-{Math.min(currentPage * itemsPerPage, filteredCases.length)} dari {filteredCases.length} kasus prioritas penelaahan aktif</span>
<div className="flex items-center gap-1.5">
<button onClick={() => setRingkasanPage(p => Math.max(1, p - 1))} className="px-2.5 py-1 rounded bg-surface-container-low hover:bg-surface-container text-on-surface font-medium disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed transition-colors" disabled={currentPage <= 1} type="button">Sebelumnya</button>
{Array.from({ length: totalPages }, (_, i) => i + 1).map(p => (
  <button key={p} onClick={() => setRingkasanPage(p)} className={`px-2.5 py-1 rounded font-semibold cursor-pointer transition-colors ${currentPage === p ? 'bg-primary-container text-on-primary' : 'bg-surface-container-low hover:bg-surface-container text-on-surface'}`} type="button">
    {p}
  </button>
))}
<button onClick={() => setRingkasanPage(p => Math.min(totalPages, p + 1))} className="px-2.5 py-1 rounded bg-surface-container-low hover:bg-surface-container text-on-surface font-medium disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed transition-colors" disabled={currentPage >= totalPages} type="button">Berikutnya</button>
</div>
</div>
</div>
{/* 6. Bottom Row: Recent Audit Trail & Governance Activity Feed */}
<div className="rounded-xl bg-surface-container-lowest p-space-md shadow-sm flex flex-col gap-space-md">
<div className="flex items-center justify-between pb-1">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-[20px]">history_edu</span>
<h2 className="font-headline-sm text-headline-sm text-on-surface font-semibold">Aktivitas Terbaru Sistem &amp; Jejak Audit (Audit Trail)</h2>
</div>
<span className="text-label-xs font-label-xs text-on-surface-variant font-mono">SHA-256 Verifikasi Kriptografis Aktif</span>
</div>
{/* Timeline Items */}
<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-space-md">
{/* Item 1 */}
<div className="flex flex-col gap-2 p-3.5 rounded-lg bg-surface-container-low/40 relative">
<div className="flex items-center justify-between">
<span className="font-label-xs text-label-xs font-mono text-tertiary-container font-semibold">10:42 WIB</span>
<span className="px-2 py-0.5 rounded bg-tertiary-fixed text-tertiary font-label-xs text-label-xs font-semibold">Sanggahan Masuk</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface font-medium">
          Dokumen timbangan independen diunggah oleh <span className="text-primary font-semibold">PT Mahakam Bara Energi</span>.
        </p>
<div className="mt-auto flex items-center justify-between text-label-xs font-label-xs text-on-surface-variant pt-2">
<span className="font-mono">Kasus NM-2025-0891</span>
<span className="text-secondary font-medium">CoA Surveyor Terlampir</span>
</div>
</div>
{/* Item 2 */}
<div className="flex flex-col gap-2 p-3.5 rounded-lg bg-surface-container-low/40 relative"><div className="flex items-center justify-between"><span className="font-label-xs text-label-xs font-mono text-secondary font-semibold">09:15 WIB</span><span className="px-2 py-0.5 rounded bg-status-verified-bg text-status-verified font-label-xs text-label-xs font-semibold">Validasi Selesai</span></div><p className="font-body-sm text-body-sm text-on-surface font-medium leading-relaxed">Validasi silang SIMBARA - CEISA Bea Cukai selesai untuk <span className="font-semibold text-primary">140 pengapalan</span> batu bara ekspor.</p><div className="mt-auto flex items-center justify-between text-label-xs font-label-xs text-on-surface-variant pt-2"><span className="">Inaportnet Sinkron</span><span className="text-status-verified font-medium">100% Klir</span></div></div>
{/* Item 3 */}
<div className="flex flex-col gap-2 p-3.5 rounded-lg bg-surface-container-low/40 relative">
<div className="flex items-center justify-between">
<span className="font-label-xs text-label-xs font-mono text-on-surface-variant font-semibold">Kemarin 16:30 WIB</span>
<span className="px-2 py-0.5 rounded bg-status-verified-bg text-status-verified font-label-xs text-label-xs font-semibold">Kasus Ditutup</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface font-medium">
          Auditor Hendra W. menyelesaikan verifikasi klarifikasi kasus <span className="font-mono font-semibold">NM-2025-0812</span>.
        </p>
<div className="mt-auto flex items-center justify-between text-label-xs font-label-xs text-on-surface-variant pt-2">
<span className="">PT Kutai Mineral</span>
<span className="text-status-verified font-medium">Tidak Ada Deviasi</span>
</div>
</div>
{/* Item 4 */}
<div className="flex flex-col gap-2 p-3.5 rounded-lg bg-surface-container-low/40 relative">
<div className="flex items-center justify-between">
<span className="font-label-xs text-label-xs font-mono text-secondary font-semibold">Kemarin 14:10 WIB</span>
<span className="px-2 py-0.5 rounded bg-secondary-container text-secondary font-label-xs text-label-xs font-semibold">Inspeksi Lapangan</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface font-medium">
          Penugasan inspeksi bersama Tim Ditjen Minerba &amp; Surveyor di koridor Muara Enim.
        </p>
<div className="mt-auto flex items-center justify-between text-label-xs font-label-xs text-on-surface-variant pt-2">
<span className="">Surat Tugas #ST-442</span>
<span className="text-secondary font-medium">Terjadwal 26 Feb</span>
</div>
</div>
</div>
{/* Audit Log Disclaimer Banner */}
<div className="bg-surface-container-low/50 rounded-lg p-2.5 flex items-center justify-between text-label-xs font-label-xs text-on-surface-variant"><div className="flex items-center gap-2 flex-1"><span className="material-symbols-outlined text-[16px] text-secondary shrink-0">lock</span><span className="leading-normal">Seluruh tindakan penelaah, akses data, dan riwayat dokumen dicatat secara tak-dapat-diubah pada Ledger Audit Terpadu SIMBARA.</span></div><button className="text-secondary hover:text-primary font-semibold underline underline-offset-2 shrink-0 ml-4 py-1" type="button">Lihat Log Audit Lengkap →</button></div>
</div>
  </div>
)}

{activeTab === 'shadow-mode' && (
  <ShadowModePanel onNavigate={onNavigate} onSelectCase={onSelectCase} />
)}

{activeTab === 'arsitektur' && (
  <SystemArchitecturePanel onNavigate={onNavigate} onSelectCase={onSelectCase} />
)}

{activeTab === 'roadmap' && (
  <ImplementationRoadmapPanel onNavigate={onNavigate} />
)}
</div>
    </div>
  );
};

export default RingkasanPage;
