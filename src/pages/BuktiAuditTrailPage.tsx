import React, { useState } from 'react';

interface Props {
  onNavigate?: (path: string) => void;
  onSelectCase?: (caseId: string) => void;
}

interface EvidenceItem {
  id: string;
  type: string;
  category: 'coa' | 'spb' | 'telemetry' | 'peb';
  title: string;
  samplingTime?: string;
  uploadTime?: string;
  issueTime?: string;
  statusLabel: string;
  statusType: 'review' | 'verified' | 'neutral' | 'accent';
  subInfo: string;
  caseId: string;
}

const EVIDENCE_ITEMS: EvidenceItem[] = [
  {
    id: 'EV-2025-0891-COA',
    type: 'CoA & Draft Survey',
    category: 'coa',
    title: 'PT Carsurin Tbk • Tongkang BG. Financia 301',
    samplingTime: '18 Feb 2025 09:00 WITA',
    uploadTime: '20 Feb 2025 15:30 WITA',
    statusLabel: 'Anomali Kronologis',
    statusType: 'review',
    subInfo: 'BSrE X.509 Terverifikasi',
    caseId: 'NM-2025-0891',
  },
  {
    id: 'EV-2025-0891-SPB',
    type: 'Surat Izin Berlayar',
    category: 'spb',
    title: 'KSOP Samarinda • SPB No. 4402/WLS-SMR/II/2025',
    issueTime: '20 Feb 2025 14:15 WITA',
    statusLabel: 'Utuh & Valid',
    statusType: 'verified',
    subInfo: 'Inaportnet Sync',
    caseId: 'NM-2025-0891',
  },
  {
    id: 'EV-2025-0888-TLM',
    type: 'Telemetri Timbangan',
    category: 'telemetry',
    title: 'PT Mahakam Bara • Belt Weigher BW-02 (Jetty Muara Jawa)',
    issueTime: '19 Feb 2025 21:00 WITA',
    statusLabel: 'Tercatat IoT',
    statusType: 'verified',
    subInfo: 'Kalibrasi KAN Aktif',
    caseId: 'NM-2025-0888',
  },
  {
    id: 'EV-2025-0872-PEB',
    type: 'Dokumen Kepabeanan',
    category: 'peb',
    title: 'KPPBC TMP B Balikpapan • PEB #091283',
    issueTime: '19 Feb 2025 11:20 WITA',
    statusLabel: 'Revisi v2',
    statusType: 'accent',
    subInfo: 'NPE Terbit',
    caseId: 'NM-2025-0872',
  },
  {
    id: 'EV-2025-0865-ROA',
    type: 'Report of Analysis',
    category: 'coa',
    title: 'PT Sucofindo • MV Bulk Borneo Voyage 42',
    issueTime: '17 Feb 2025 16:45 WITA',
    statusLabel: 'Utuh & Valid',
    statusType: 'verified',
    subInfo: 'Validasi Kemenkeu LHP',
    caseId: 'NM-2025-0865',
  },
  {
    id: 'EV-2025-0854-SUR',
    type: 'Sertifikat Survey Pelabuhan',
    category: 'coa',
    title: 'PT Geoservices • Jetty Muara Berau Berth 3',
    issueTime: '17 Feb 2025 10:15 WITA',
    statusLabel: 'Utuh & Valid',
    statusType: 'verified',
    subInfo: 'Stempel Digital BSrE',
    caseId: 'NM-2025-0854',
  },
  {
    id: 'EV-2025-0841-COA',
    type: 'CoA Kalori GAR',
    category: 'coa',
    title: 'PT Surveyor Indonesia • Tongkang TB Megah 04',
    samplingTime: '16 Feb 2025 14:00 WITA',
    uploadTime: '17 Feb 2025 08:30 WITA',
    statusLabel: 'Utuh & Valid',
    statusType: 'verified',
    subInfo: 'Akreditasi KAN LP-022',
    caseId: 'NM-2025-0841',
  },
  {
    id: 'EV-2025-0833-BLG',
    type: 'Bukti Bayar e-PNBP',
    category: 'peb',
    title: 'Bank Persepsi Mandiri • NTPN #9910283011',
    issueTime: '16 Feb 2025 09:12 WITA',
    statusLabel: 'Utuh & Valid',
    statusType: 'verified',
    subInfo: 'Kas Negara Settled',
    caseId: 'NM-2025-0833',
  },
  {
    id: 'EV-2025-0820-TLM',
    type: 'Telemetri Draft Sensor',
    category: 'telemetry',
    title: 'Marine IoT Sensor • TB Oceanic 18 Samarinda',
    issueTime: '15 Feb 2025 19:40 WITA',
    statusLabel: 'Tercatat IoT',
    statusType: 'verified',
    subInfo: 'Gateway Inaportnet AIS',
    caseId: 'NM-2025-0820',
  },
  {
    id: 'EV-2025-0812-SPB',
    type: 'Surat Persetujuan Berlayar',
    category: 'spb',
    title: 'KSOP Banjarmasin • SPB No. 2911/BJM/2025',
    issueTime: '15 Feb 2025 13:20 WITA',
    statusLabel: 'Utuh & Valid',
    statusType: 'verified',
    subInfo: 'Tanda Tangan Elektronik',
    caseId: 'NM-2025-0812',
  },
  {
    id: 'EV-2025-0799-PEB',
    type: 'Pemberitahuan Ekspor Barang',
    category: 'peb',
    title: 'KPU Bea Cukai Tanjung Priok • PEB #077192',
    issueTime: '14 Feb 2025 16:50 WITA',
    statusLabel: 'Utuh & Valid',
    statusType: 'verified',
    subInfo: 'CEISA 4.0 Terhubung',
    caseId: 'NM-2025-0799',
  },
  {
    id: 'EV-2025-0784-ROA',
    type: 'Report of Analysis Lab',
    category: 'coa',
    title: 'PT Carsurin Tbk • Tongkang BG Samudera 12',
    samplingTime: '14 Feb 2025 11:00 WITA',
    uploadTime: '14 Feb 2025 18:20 WITA',
    statusLabel: 'Utuh & Valid',
    statusType: 'verified',
    subInfo: 'Uji Proksimat Lengkap',
    caseId: 'NM-2025-0784',
  },
  {
    id: 'EV-2025-0771-TLM',
    type: 'Log Conveyor Scale',
    category: 'telemetry',
    title: 'Jetty Terminal Palaran • Weigher Sensor #1',
    issueTime: '13 Feb 2025 22:15 WITA',
    statusLabel: 'Tercatat IoT',
    statusType: 'verified',
    subInfo: 'Laju Alir 1.200 MT/jam',
    caseId: 'NM-2025-0771',
  },
  {
    id: 'EV-2025-0760-NOT',
    type: 'Notula Koreksi Pabean',
    category: 'peb',
    title: 'Ditjen Bea dan Cukai • Audit Lapangan Pos Muara',
    issueTime: '13 Feb 2025 14:10 WITA',
    statusLabel: 'Revisi Resmi',
    statusType: 'accent',
    subInfo: 'Penetapan Nilai Pabean',
    caseId: 'NM-2025-0760',
  },
];

export const BuktiAuditTrailPage: React.FC<Props> = ({ onNavigate, onSelectCase }) => {
  const [selectedEvidenceId, setSelectedEvidenceId] = useState<string>('EV-2025-0891-COA');
  const [evidencePage, setEvidencePage] = useState<number>(1);
  const [evidenceTypeFilter, setEvidenceTypeFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const itemsPerPage = 5;

  const filteredEvidences = EVIDENCE_ITEMS.filter(item => {
    const matchesType = evidenceTypeFilter === 'all' || item.category === evidenceTypeFilter;
    const matchesSearch = !searchQuery || 
      item.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.type.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesType && matchesSearch;
  });

  const totalPages = Math.max(1, Math.ceil(filteredEvidences.length / itemsPerPage));
  const currentPage = Math.min(evidencePage, totalPages);
  const displayedEvidences = filteredEvidences.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
  return (
    <div className="w-full">
      <div className="flex flex-col w-full gap-space-lg">
{/* TOP HEADER & PROVENANCE BANNER */}
<div className="flex flex-col gap-space-md">
{/* Breadcrumb & Title Row */}
<div className="flex flex-col xl:flex-row xl:items-center justify-between gap-space-md">
<div className="flex flex-col gap-1">
<div className="flex items-center gap-2 font-label-xs text-label-xs text-on-surface-variant">
<span className="inline-flex items-center gap-1 font-semibold text-primary">
<span className="material-symbols-outlined text-[14px]">lock</span>
            Sistem Keterlacakan SIMBARA
          </span>
<span className="">/</span>
<span className="">Protokol Audit v2.4</span>
<span className="">/</span>
<span className="text-on-surface font-mono">LEDGER-TX-2025</span>
</div>
<div className="flex items-baseline gap-3 flex-wrap">
<h1 className="font-display-lg text-display-lg text-primary tracking-tight">
            Bukti &amp; Rantai Audit
          </h1>
<span className="font-label-md text-label-md text-secondary px-2.5 py-0.5 rounded-full bg-secondary-container/40">
            Evidence Integrity Layer (EIL)
          </span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant max-w-4xl">
          Penelusuran asal bukti (<em className="italic text-on-surface font-medium">provenance</em>), integritas kriptografis, verifikasi tanda tangan digital resmi, dan riwayat mutasi berkas ekosistem pertambangan batu bara tanpa perubahan sepihak.
        </p>
</div>
{/* Action Buttons */}
<div className="flex items-center gap-space-sm shrink-0">
<button className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-surface-container-lowest text-on-surface hover:bg-surface-container shadow-sm transition-all text-label-md font-label-md" type="button">
<span className="material-symbols-outlined text-[18px] text-secondary">terminal</span>
<span className="">Verifikasi Hash Mandiri (.CLI)</span>
</button>
<button className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-on-primary hover:bg-primary-container shadow-sm transition-all text-label-md font-label-md" type="button">
<span className="material-symbols-outlined text-[18px]">download_for_offline</span>
<span className="">Ekspor Log Audit (.JSON-LD)</span>
</button>
</div>
</div>
{/* Legal & Metrology Boundary Notice */}
<div className="rounded-xl bg-surface-container-low p-space-md shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-space-md">
<div className="flex items-start gap-3">
<div className="w-8 h-8 rounded-lg bg-status-review-bg text-status-review flex items-center justify-center shrink-0 mt-0.5">
<span className="material-symbols-outlined text-[20px]">verified_user</span>
</div>
<div className="flex flex-col gap-0.5">
<div className="flex items-center gap-2">
<span className="font-headline-sm text-headline-sm text-on-surface font-semibold">Pemberitahuan Batasan Bukti Digital &amp; Metrologi Legal</span>
<span className="px-2 py-0.2 rounded text-[10px] uppercase tracking-wider font-label-xs bg-bg-surface-subtle text-accent-palmoil font-bold">Ketentuan Regulasi</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant max-w-5xl leading-relaxed">
            <strong>Prinsip Verifikasi Materiil:</strong> Keabsahan tanda tangan digital (BSrE X.509) membuktikan keutuhan berkas elektronik, asal-usul dokumen, dan ketiadaan manipulasi pasca-penyerahan, <em>namun tidak otomatis menjamin bahwa muatan fisik mineral di lapangan benar</em>. Bukti materiil memerlukan kalibrasi alat metrologi terakreditasi KAN, penarikan sampel tersaksi (witnessed sampling), dan inspeksi lapangan resmi.
          </p>
</div>
</div>
{/* Cryptographic Ledger Status Badges */}
<div className="flex items-center gap-2 shrink-0 bg-surface-container-lowest px-3 py-2 rounded-lg shadow-sm">
<div className="flex items-center gap-1.5">
<span className="w-2 h-2 rounded-full bg-status-verified animate-ping"></span>
<span className="w-2 h-2 rounded-full bg-status-verified"></span>
<span className="font-label-xs text-label-xs text-status-verified font-bold uppercase">Node Minerba-JKT-04</span>
</div>
<span className="text-outline-variant text-[12px]">•</span>
<span className="font-label-xs text-label-xs text-on-surface-variant font-mono">BSrE / SHA-256 Valid</span>
</div>
</div>
</div>
{/* KPI SUMMARY CARDS */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md">
{/* Card 1 */}
<div className="rounded-xl bg-surface-container-lowest p-space-md shadow-sm flex flex-col justify-between gap-space-sm relative overflow-hidden">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md text-on-surface-variant">Total Bukti Terarsip</span>
<span className="px-2 py-0.5 rounded text-[10px] font-label-xs bg-surface-container text-on-surface-variant font-mono">SIMBARA + CEISA</span>
</div>
<div className="flex flex-col">
<span className="font-tabular-kpi text-tabular-kpi text-primary">18.420</span>
<div className="flex items-center gap-1.5 mt-1 font-body-sm text-body-sm text-status-verified">
<span className="material-symbols-outlined text-[16px]">check_circle</span>
<span className="font-medium">99,4% Integritas Terverifikasi</span>
</div>
</div>
<div className="w-full bg-surface-container-low h-1 rounded-full overflow-hidden mt-1">
<div className="bg-status-verified h-full rounded-full" style={{width: "99.4%"}}></div>
</div>
</div>
{/* Card 2 */}
<div className="rounded-xl bg-surface-container-lowest p-space-md shadow-sm flex flex-col justify-between gap-space-sm relative overflow-hidden">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md text-on-surface-variant">Tanda Tangan Digital Sah</span>
<span className="px-2 py-0.5 rounded text-[10px] font-label-xs bg-status-verified-bg text-status-verified font-medium">BSrE / Peruri</span>
</div>
<div className="flex flex-col">
<span className="font-tabular-kpi text-tabular-kpi text-primary">17.915</span>
<div className="flex items-center gap-1.5 mt-1 font-body-sm text-body-sm text-on-surface-variant">
<span className="material-symbols-outlined text-[16px] text-primary">draw</span>
<span className="">97,2% dokumen bertanda tangan resmi</span>
</div>
</div>
<div className="w-full bg-surface-container-low h-1 rounded-full overflow-hidden mt-1">
<div className="bg-primary h-full rounded-full" style={{width: "97.2%"}}></div>
</div>
</div>
{/* Card 3 */}
<div className="rounded-xl bg-surface-container-lowest p-space-md shadow-sm flex flex-col justify-between gap-space-sm relative overflow-hidden">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md text-on-surface-variant">Anomali Kronologis / Metadata</span>
<span className="px-2 py-0.5 rounded text-[10px] font-label-xs bg-status-review-bg text-status-review font-bold">Perlu Review</span>
</div>
<div className="flex flex-col">
<span className="font-tabular-kpi text-tabular-kpi text-status-review">14</span>
<div className="flex items-center gap-1.5 mt-1 font-body-sm text-body-sm text-status-review">
<span className="material-symbols-outlined text-[16px]">schedule</span>
<span className="">Stempel waktu tidak berurutan logis</span>
</div>
</div>
<div className="w-full bg-surface-container-low h-1 rounded-full overflow-hidden mt-1">
<div className="bg-status-review h-full rounded-full" style={{width: "28%"}}></div>
</div>
</div>
{/* Card 4 */}
<div className="rounded-xl bg-surface-container-lowest p-space-md shadow-sm flex flex-col justify-between gap-space-sm relative overflow-hidden">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md text-on-surface-variant">Perubahan Pasca-Submit</span>
<span className="px-2 py-0.5 rounded text-[10px] font-label-xs bg-bg-surface-subtle text-accent-palmoil font-mono">Diff Audited</span>
</div>
<div className="flex flex-col">
<span className="font-tabular-kpi text-tabular-kpi text-accent-palmoil">6</span>
<div className="flex items-center gap-1.5 mt-1 font-body-sm text-body-sm text-on-surface-variant">
<span className="material-symbols-outlined text-[16px]">history</span>
<span className="">Revisi versi divalidasi resmi surveyor</span>
</div>
</div>
<div className="w-full bg-surface-container-low h-1 rounded-full overflow-hidden mt-1">
<div className="bg-accent-palmoil h-full rounded-full" style={{width: "14%"}}></div>
</div>
</div>
</div>
{/* SEARCH & MULTI-FILTER BAR */}
<div className="rounded-xl bg-surface-container-lowest p-space-md shadow-sm flex flex-col gap-space-sm">
<div className="flex flex-col lg:flex-row gap-space-sm items-stretch lg:items-center justify-between">
{/* Search Bar */}
<div className="relative flex-1">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px]">search</span>
<input className="w-full pl-10 pr-4 py-2 rounded-lg bg-surface-container-low text-on-surface placeholder:text-outline text-body-md font-body-md focus:outline-none focus:bg-surface-container transition-all" placeholder="Cari Evidence ID (EV-xxxx), Nomor Sertifikat, Nama Kapal, atau Hash SHA-256..." type="text" value={searchQuery} onChange={(e) => { setSearchQuery(e.target.value); setEvidencePage(1); }} />
</div>
{/* Quick Filter Pills / Selects */}
<div className="flex items-center gap-2 flex-wrap">
{/* Tipe Bukti */}
<select className="px-3 py-2 rounded-lg bg-surface-container-low text-on-surface text-label-md font-label-md focus:outline-none cursor-pointer" value={evidenceTypeFilter} onChange={(e) => { setEvidenceTypeFilter(e.target.value); setEvidencePage(1); }}>
<option value="all">Tipe Bukti: Semua Tipe</option>
<option value="coa">Hasil Lab (CoA / RoA)</option>
<option value="telemetry">Catatan Timbangan Belt Conveyor</option>
<option value="peb">Dokumen Pabean (PEB / NPE)</option>
<option value="spb">Persetujuan Berlayar (SPB / KSOP)</option>
</select>
{/* Sumber / Penerbit */}
<select className="px-3 py-2 rounded-lg bg-surface-container-low text-on-surface text-label-md font-label-md focus:outline-none cursor-pointer">
<option>Penerbit: Semua Surveyor &amp; Instansi</option>
<option>PT Carsurin Tbk</option>
<option>PT Sucofindo</option>
<option>PT Geoservices</option>
<option>KSOP Wilayah Samarinda</option>
<option>KPPBC Balikpapan</option>
</select>
{/* Status Integritas */}
<select className="px-3 py-2 rounded-lg bg-surface-container-low text-on-surface text-label-md font-label-md focus:outline-none cursor-pointer">
<option>Integritas: Semua Status</option>
<option>Utuh &amp; Terverifikasi</option>
<option>Anomali Kronologis (14)</option>
<option>Revisi Resmi Terdaftar (6)</option>
<option>Metadata Belum Lengkap</option>
</select>
{/* Reset / Filter More */}
<button onClick={() => { setSearchQuery(''); setEvidenceTypeFilter('all'); setEvidencePage(1); }} className="p-2 rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface-variant transition-colors cursor-pointer" title="Reset Filter" type="button">
<span className="material-symbols-outlined text-[20px]">restart_alt</span>
</button>
</div>
</div>
{/* Segmented Filter Pills */}
<div className="flex items-center gap-1.5 pt-1 border-none text-label-xs font-label-xs text-on-surface-variant flex-wrap">
<span className="font-medium text-on-surface">Kategori Cepat:</span>
<button onClick={() => { setEvidenceTypeFilter('all'); setEvidencePage(1); }} className={`px-2.5 py-1 rounded-full cursor-pointer transition-all ${evidenceTypeFilter === 'all' ? 'bg-primary text-on-primary font-semibold shadow-xs' : 'bg-surface-container text-on-surface hover:bg-surface-container-high'}`} type="button">
  Semua ({EVIDENCE_ITEMS.length})
</button>
<button onClick={() => { setEvidenceTypeFilter('coa'); setEvidencePage(1); }} className={`px-2.5 py-1 rounded-full cursor-pointer transition-all ${evidenceTypeFilter === 'coa' ? 'bg-primary text-on-primary font-semibold shadow-xs' : 'bg-surface-container text-on-surface hover:bg-surface-container-high'}`} type="button">
  Hasil Lab CoA/RoA ({EVIDENCE_ITEMS.filter(i => i.category === 'coa').length})
</button>
<button onClick={() => { setEvidenceTypeFilter('telemetry'); setEvidencePage(1); }} className={`px-2.5 py-1 rounded-full cursor-pointer transition-all ${evidenceTypeFilter === 'telemetry' ? 'bg-primary text-on-primary font-semibold shadow-xs' : 'bg-surface-container text-on-surface hover:bg-surface-container-high'}`} type="button">
  Telemetri IoT ({EVIDENCE_ITEMS.filter(i => i.category === 'telemetry').length})
</button>
<button onClick={() => { setEvidenceTypeFilter('spb'); setEvidencePage(1); }} className={`px-2.5 py-1 rounded-full cursor-pointer transition-all ${evidenceTypeFilter === 'spb' ? 'bg-primary text-on-primary font-semibold shadow-xs' : 'bg-surface-container text-on-surface hover:bg-surface-container-high'}`} type="button">
  Surat SPB KSOP ({EVIDENCE_ITEMS.filter(i => i.category === 'spb').length})
</button>
<button onClick={() => { setEvidenceTypeFilter('peb'); setEvidencePage(1); }} className={`px-2.5 py-1 rounded-full cursor-pointer transition-all ${evidenceTypeFilter === 'peb' ? 'bg-primary text-on-primary font-semibold shadow-xs' : 'bg-surface-container text-on-surface hover:bg-surface-container-high'}`} type="button">
  Dokumen Pabean ({EVIDENCE_ITEMS.filter(i => i.category === 'peb').length})
</button>
</div>
</div>
{/* MAIN DUAL-PANE WORKBENCH (EVIDENCE LIST & INSPECTION DRAWER/PANEL) */}
<div className="grid grid-cols-1 xl:grid-cols-12 gap-space-lg">
{/* LEFT 5-COL: EVIDENCE LIST TABLE */}
<div className="xl:col-span-5 flex flex-col gap-space-md">
<div className="rounded-xl bg-surface-container-lowest p-space-md shadow-sm flex flex-col gap-space-sm">
<div className="flex items-center justify-between pb-1">
<div className="flex items-center gap-2">
<h2 className="font-headline-sm text-headline-sm text-on-surface">Daftar Bukti Masuk</h2>
<span className="px-2 py-0.5 rounded-full bg-surface-container text-on-surface-variant font-label-xs text-label-xs font-semibold">{filteredEvidences.length} Berkas Ditemukan</span>
</div>
<span className="font-label-xs text-label-xs text-on-surface-variant">Halaman {currentPage} dari {totalPages}</span>
</div>
{/* Evidence List Cards / Dense Table Rows */}
<div className="flex flex-col gap-2">
{displayedEvidences.map((item) => (
<div key={item.id} onClick={() => setSelectedEvidenceId(item.id)} className={`rounded-xl p-3.5 shadow-sm flex flex-col gap-2 cursor-pointer transition-all ${selectedEvidenceId === item.id ? 'bg-status-review-bg/50 ring-2 ring-primary' : 'bg-surface-container-low hover:bg-surface-container'}`}>
<div className="flex items-start justify-between gap-2">
<div className="flex items-center gap-2 flex-wrap">
<span className={`font-tabular-data text-tabular-data font-bold ${selectedEvidenceId === item.id ? 'text-primary' : 'text-on-surface'}`}>{item.id}</span>
<span className="px-2 py-0.5 rounded text-[11px] font-label-xs bg-bg-surface-subtle text-accent-palmoil font-semibold">{item.type}</span>
</div>
<span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full font-label-xs text-label-xs font-bold shrink-0 ${item.statusType === 'review' ? 'bg-status-review-bg text-status-review' : item.statusType === 'verified' ? 'bg-status-verified-bg text-status-verified' : 'bg-bg-surface-subtle text-accent-palmoil'}`}>
<span className="material-symbols-outlined text-[14px]">{item.statusType === 'review' ? 'warning' : item.statusType === 'verified' ? 'check_circle' : 'update'}</span>
  {item.statusLabel}
</span>
</div>
<div className="font-body-sm text-body-sm text-on-surface font-semibold line-clamp-1">
  {item.title}
</div>
{item.samplingTime && item.uploadTime ? (
<div className="grid grid-cols-2 gap-2 font-label-xs text-label-xs text-on-surface-variant bg-surface-container-lowest/80 p-2 rounded-lg">
<div>
<span className="text-outline">Waktu Sampling:</span>
<div className="font-mono text-on-surface">{item.samplingTime}</div>
</div>
<div>
<span className="text-outline">Waktu Unggah:</span>
<div className="font-mono text-on-surface">{item.uploadTime}</div>
</div>
</div>
) : (
<div className="flex items-center justify-between text-label-xs font-label-xs text-on-surface-variant bg-surface-container-lowest/80 p-2 rounded-lg">
<span className="">Stempel Resmi: <strong className="font-mono text-on-surface">{item.issueTime}</strong></span>
<span className="text-status-verified font-medium">{item.subInfo}</span>
</div>
)}
<div className="flex items-center justify-between pt-1 font-label-xs text-label-xs">
<span className="inline-flex items-center gap-1 text-status-verified font-medium">
<span className="material-symbols-outlined text-[14px]">verified</span>
  {item.subInfo}
</span>
<span className="font-mono text-outline">Kasus: {item.caseId}</span>
</div>
</div>
))}
</div>
{/* Table Pagination Info */}
<div className="flex items-center justify-between pt-2 text-label-xs font-label-xs text-on-surface-variant">
<span className="">Menampilkan {filteredEvidences.length > 0 ? (currentPage - 1) * itemsPerPage + 1 : 0}-{Math.min(currentPage * itemsPerPage, filteredEvidences.length)} dari {filteredEvidences.length} berkas terpilih</span>
<div className="flex items-center gap-1">
<button onClick={() => setEvidencePage(p => Math.max(1, p - 1))} className="p-1 rounded bg-surface-container text-on-surface disabled:opacity-40 cursor-pointer disabled:cursor-not-allowed hover:bg-surface-container-high transition-colors" disabled={currentPage <= 1} type="button">
<span className="material-symbols-outlined text-[16px]">chevron_left</span>
</button>
<span className="px-2 font-mono">{currentPage} / {totalPages}</span>
<button onClick={() => setEvidencePage(p => Math.min(totalPages, p + 1))} className="p-1 rounded bg-surface-container text-on-surface disabled:opacity-40 cursor-pointer disabled:cursor-not-allowed hover:bg-surface-container-high transition-colors" disabled={currentPage >= totalPages} type="button">
<span className="material-symbols-outlined text-[16px]">chevron_right</span>
</button>
</div>
</div>
</div>
{/* Quick Hash Verifier Box */}
<div className="rounded-xl bg-surface-container-low p-space-md shadow-sm flex flex-col gap-2">
<div className="flex items-center gap-2 text-primary font-headline-sm text-headline-sm font-semibold">
<span className="material-symbols-outlined text-[20px]">fingerprint</span>
<span className="">Kalkulator Cek Cepat SHA-256</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">
          Seret berkas digital (.PDF / .XML) untuk mencocokkan digest kriptografis lokal dengan payload yang dicatat di SIMBARA Gateway.
        </p>
<div className="p-4 rounded-lg bg-surface-container-lowest flex flex-col items-center justify-center gap-1.5 cursor-pointer hover:bg-surface transition-colors text-center">
<span className="material-symbols-outlined text-[28px] text-primary">upload_file</span>
<span className="font-label-md text-label-md text-on-surface font-semibold">Klik atau seret berkas bukti ke sini</span>
<span className="font-label-xs text-label-xs text-outline">Mendukung format PDF/A, XML PEB, CSV Telemetri (Maks 25 MB)</span>
</div>
</div>
</div>
{/* RIGHT 7-COL: DETAILED INSPECTION DRAWER & CHRONOLOGY TIMELINE */}
<div className="xl:col-span-7 flex flex-col gap-space-md">
{/* Primary Detail Container */}
<div className="rounded-xl bg-surface-container-lowest p-space-lg shadow-sm flex flex-col gap-space-md">
{/* Header Detail Bukti */}
<div className="flex flex-col gap-space-sm pb-space-sm">
<div className="flex flex-wrap items-center justify-between gap-2">
<div className="flex items-center gap-2">
<span className="px-2.5 py-1 rounded-md bg-primary-container text-on-primary font-mono text-label-md font-bold">
                EV-2025-0891-COA
              </span>
<span className="px-2 py-0.5 rounded text-[11px] font-label-xs bg-bg-surface-subtle text-accent-palmoil font-semibold">
                Sertifikat Surveyor Resmi
              </span>
</div>
<a className="inline-flex items-center gap-1 font-label-md text-label-md text-primary hover:underline font-semibold" href="#">
<span className="">Buka Kasus NM-2025-0891</span>
<span className="material-symbols-outlined text-[16px]">open_in_new</span>
</a>
</div>
<div className="flex flex-col gap-1">
<h2 className="font-headline-lg text-headline-lg text-on-surface font-bold">
              Certificate of Sampling and Analysis (CoA) &amp; Final Draft Survey Report
            </h2>
<div className="flex items-center gap-3 text-body-sm font-body-sm text-on-surface-variant flex-wrap">
<span className="">Badan Usaha: <strong className="text-on-surface">PT Mahakam Bara Energi</strong></span>
<span className="">•</span>
<span className="">Kapal / Sarana: <strong className="text-on-surface">Tongkang BG. Financia 301 / TB. Mega Star</strong></span>
<span className="">•</span>
<span className="">Muatan: <strong className="text-on-surface">Batu Bara Kalori 4.200 GAR</strong></span>
</div>
</div>
{/* Hash Display & Copy Action */}
<div className="p-3 rounded-lg bg-surface-container-low flex flex-col sm:flex-row sm:items-center justify-between gap-2 font-mono">
<div className="flex items-center gap-2 min-w-0">
<span className="font-label-xs text-label-xs text-on-surface-variant uppercase font-bold shrink-0">SHA-256 Digest:</span>
<span className="text-body-sm text-on-surface font-medium truncate select-all">
                8a4c0f1e7829a43d9b1c7e2b1049581af8903c7e42d991bce094a32e1858a712
              </span>
</div>
<div className="flex items-center gap-1 shrink-0">
<button className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-surface text-on-surface hover:bg-surface-container text-label-xs font-label-xs transition-colors" title="Salin Digest Hash" type="button">
<span className="material-symbols-outlined text-[14px]">content_copy</span>
<span className="">Salin</span>
</button>
<button className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-primary text-on-primary hover:bg-primary-container text-label-xs font-label-xs transition-colors" type="button">
<span className="material-symbols-outlined text-[14px]">verified</span>
<span className="">Cek Ledger</span>
</button>
</div>
</div>
</div>
{/* SPECIAL ANOMALY DETEKTOR BANNER (TIMELINE REVERSAL) */}
<div className="rounded-xl bg-status-review-bg p-space-md flex flex-col gap-2">
<div className="flex items-center gap-2 text-status-review font-headline-sm text-headline-sm font-bold">
<span className="material-symbols-outlined text-[24px]">history_toggle_off</span>
<span className="">Peringatan Urutan Kronologi: Post-Dated Submission Terdeteksi</span>
</div>
<p className="font-body-md text-body-md text-on-surface leading-relaxed">
            Stempel waktu penerbitan dokumen CoA final (<strong className="font-mono font-bold">20 Feb 2025, 15:30 WITA</strong>) tercatat <strong>1 jam 15 menit SETELAH</strong> Surat Persetujuan Berlayar (SPB) kapal diterbitkan oleh otoritas KSOP Samarinda (<strong className="font-mono font-bold">20 Feb 2025, 14:15 WITA</strong>).
          </p>
<div className="p-3 rounded-lg bg-surface-container-lowest/80 text-body-sm font-body-sm text-on-surface-variant flex items-start gap-2">
<span className="material-symbols-outlined text-[18px] text-accent-palmoil shrink-0 mt-0.5">info</span>
<span className=""><strong>Catatan Prosedural Pelabuhan:</strong> Secara tata kelola pelayaran batubara, SPB mensyaratkan draft survey final dan perhitungan stabilitas muatan telah tuntas sebelum izin tolak kapal diterbitkan. Verifikator perlu meminta dokumen pendukung <em>interim report</em> yang mendasari terbitnya SPB awal.</span>
</div>
</div>
{/* METADATA & CRYPTOGRAPHIC SPLIT PANELS (6-6 SYMMETRIC) */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
{/* LEFT SUB-PANE: Provenance & Technical Metadata */}
<div className="rounded-xl bg-surface-container-low p-space-md flex flex-col gap-space-sm">
<div className="flex items-center justify-between pb-1">
<span className="font-headline-sm text-headline-sm text-primary font-bold">Metadata Berkas &amp; Lembaga</span>
<span className="material-symbols-outlined text-[20px] text-primary">domain_verification</span>
</div>
<div className="flex flex-col gap-2.5 font-body-sm text-body-sm">
<div className="flex flex-col">
<span className="text-outline text-label-xs font-label-xs">Lembaga Surveyor Penerbit:</span>
<span className="text-on-surface font-semibold">PT Carsurin Tbk (Cabang Samarinda)</span>
<span className="text-[11px] text-on-surface-variant font-mono">Kepmen ESDM No. 1827 K/30/MEM/2018</span>
</div>
<div className="flex flex-col">
<span className="text-outline text-label-xs font-label-xs">Surveyor Penanggung Jawab Teknis:</span>
<span className="text-on-surface font-medium">Ir. Hendrawan Ardiansyah, S.T.</span>
<span className="text-[11px] text-primary font-mono font-semibold">Reg. Surveyor Minerba #SRV-10928</span>
</div>
<div className="flex flex-col">
<span className="text-outline text-label-xs font-label-xs">Titik Pengambilan Sampel &amp; Koordinat:</span>
<span className="text-on-surface font-medium">Jetty Muara Jawa, Belt Conveyor #02</span>
<span className="text-[11px] text-on-surface-variant font-mono">GPS: -0.612441, 117.291802 (Akurasi ±1.2m)</span>
</div>
<div className="flex flex-col">
<span className="text-outline text-label-xs font-label-xs">Instrumen Pengukur Terhubung:</span>
<span className="text-on-surface font-medium">Auto Mechanical Sampler + Dual Belt Weigher BW-03</span>
<span className="text-[11px] text-status-verified font-medium">Kalibrasi Metrologi: Valid s/d Des 2025</span>
</div>
<div className="flex flex-col">
<span className="text-outline text-label-xs font-label-xs">Format Berkas &amp; Enkapsulasi:</span>
<span className="text-on-surface font-mono">PDF/A-1b Digital Signature (4,2 MB)</span>
</div>
</div>
</div>
{/* RIGHT SUB-PANE: Cryptographic Chain & BSrE Verification */}
<div className="rounded-xl bg-surface-container-low p-space-md flex flex-col gap-space-sm">
<div className="flex items-center justify-between pb-1">
<span className="font-headline-sm text-headline-sm text-status-verified font-bold">Rantai Validitas Kriptografis</span>
<span className="material-symbols-outlined text-[20px] text-status-verified">verified</span>
</div>
<div className="flex flex-col gap-2.5 font-body-sm text-body-sm">
<div className="flex flex-col">
<span className="text-outline text-label-xs font-label-xs">Otoritas Sertifikasi Digital (CA):</span>
<div className="flex items-center gap-1.5 text-on-surface font-semibold">
<span className="w-2 h-2 rounded-full bg-status-verified"></span>
<span className="">Balai Sertifikasi Elektronik (BSrE - BSSN)</span>
</div>
<span className="text-[11px] text-on-surface-variant">Sertifikat Root: ID-Government-CA-G2</span>
</div>
<div className="flex flex-col">
<span className="text-outline text-label-xs font-label-xs">Status Sertifikat Penandatangan:</span>
<span className="text-status-verified font-semibold">Aktif &amp; Valid Saat Penandatanganan</span>
<span className="text-[11px] text-on-surface-variant font-mono">X.509 v3 • Revocation List Checked (OCSP Good)</span>
</div>
<div className="flex flex-col">
<span className="text-outline text-label-xs font-label-xs">Algoritma &amp; Skema Enkripsi:</span>
<span className="text-on-surface font-mono">SHA-256 with RSA 2048-bit Key</span>
<span className="text-[11px] text-on-surface-variant">PKCS#7 Detached Signature Encapsulated</span>
</div>
<div className="flex flex-col">
<span className="text-outline text-label-xs font-label-xs">Konsistensi SIMBARA Gateway:</span>
<span className="text-status-verified font-semibold">Sesuai 100% (Bit-to-Bit Hash Matched)</span>
<span className="text-[11px] text-on-surface-variant">Tidak ada mutasi biner pasca-unggah</span>
</div>
<div className="flex flex-col">
<span className="text-outline text-label-xs font-label-xs">Stempel Waktu Terpercaya (TSA):</span>
<span className="text-on-surface font-mono">Otoritas Waktu Resmi BIG / BRIN NTP-Stratum-1</span>
</div>
</div>
</div>
</div>
{/* VERSION HISTORY & DIFF LOG (VERSIONS DIFF) */}
<div className="rounded-xl bg-surface-container-low p-space-md flex flex-col gap-space-sm">
<div className="flex items-center justify-between pb-1">
<div className="flex items-center gap-2">
<span className="font-headline-sm text-headline-sm text-on-surface font-bold">Riwayat Versi Dokumen (Version History &amp; Diff)</span>
<span className="px-2 py-0.5 rounded text-[11px] font-label-xs bg-bg-surface-subtle text-accent-palmoil font-mono">2 Versi Terdaftar</span>
</div>
<span className="font-label-xs text-label-xs text-outline">Penyimpanan Append-Only</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-space-sm">
{/* Version 1 */}
<div className="p-3.5 rounded-lg bg-surface-container-lowest flex flex-col gap-2">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md text-on-surface-variant font-bold">Versi 1.0 (Draft Survey Awal)</span>
<span className="px-2 py-0.5 rounded text-[10px] font-label-xs bg-surface-container text-on-surface-variant font-mono">Superseeded</span>
</div>
<div className="text-label-xs font-label-xs text-outline">
                Diunggah: <span className="font-mono text-on-surface">19 Feb 2025 18:00 WITA</span> oleh Operator Surveyor
              </div>
<div className="space-y-1 font-tabular-data text-tabular-data text-on-surface bg-surface-container-low p-2 rounded">
<div className="flex justify-between">
<span className="text-outline">Estimasi Volume:</span>
<span className="font-bold">100.200 MT</span>
</div>
<div className="flex justify-between">
<span className="text-outline">Kadar Abu (Ash):</span>
<span className="">7,4% adb</span>
</div>
<div className="flex justify-between">
<span className="text-outline">Total Moisture:</span>
<span className="">28,2% arb</span>
</div>
</div>
</div>
{/* Version 2 */}
<div className="p-3.5 rounded-lg bg-surface-container-lowest shadow-sm flex flex-col gap-2">
<div className="flex items-center justify-between">
<div className="flex items-center gap-1.5">
<span className="font-label-md text-label-md text-primary font-bold">Versi 2.0 (Final - Terkunci)</span>
<span className="material-symbols-outlined text-[14px] text-status-verified">lock</span>
</div>
<span className="px-2 py-0.5 rounded text-[10px] font-label-xs bg-status-verified-bg text-status-verified font-bold font-mono">Current Live</span>
</div>
<div className="text-label-xs font-label-xs text-outline">
                Diunggah: <span className="font-mono text-on-surface">20 Feb 2025 15:30 WITA</span> oleh KTT &amp; Lead Surveyor
              </div>
<div className="space-y-1 font-tabular-data text-tabular-data text-on-surface bg-status-review-bg/30 p-2 rounded">
<div className="flex justify-between">
<span className="text-outline">Volume Final:</span>
<span className="font-bold text-accent-palmoil">112.650 MT <span className="text-[11px] text-status-review">(+12.450 MT)</span></span>
</div>
<div className="flex justify-between">
<span className="text-outline">Kadar Abu (Ash):</span>
<span className="">8,2% adb <span className="text-[11px] text-status-review">(+0,8%)</span></span>
</div>
<div className="flex justify-between">
<span className="text-outline">Total Moisture:</span>
<span className="">28,4% arb (+0,2%)</span>
</div>
</div>
</div>
</div>
{/* Audit Log Justification Box */}
<div className="p-3 rounded-lg bg-surface-container-lowest text-body-sm font-body-sm text-on-surface flex items-start gap-2">
<span className="material-symbols-outlined text-[18px] text-secondary shrink-0 mt-0.5">rate_review</span>
<div>
<span className="font-semibold text-on-surface">Justifikasi Perubahan Resmi (Audit Rationale):</span>
<p className="text-on-surface-variant text-[13px] mt-0.5 leading-relaxed">
                "Penyesuaian volume (+12.450 MT) dan kadar abu (+0,8%) diakibatkan penggabungan muatan tongkang sekunder (BG. Financia 301B) pada anchorage Muara Berau sesuai Berita Acara Konsolidasi Pengapalan No. BA-042/MBA/II/2025."
              </p>
</div>
</div>
</div>
{/* TIMELINE AUDIT TRAIL / IMMUTABLE VISUAL LEDGER */}
<div className="flex flex-col gap-space-sm pt-2">
<div className="flex items-center justify-between pb-1">
<div className="flex items-center gap-2">
<span className="font-headline-sm text-headline-sm text-on-surface font-bold">Rantai Riwayat Peristiwa Kronologis (Visual Ledger)</span>
<span className="material-symbols-outlined text-[18px] text-primary">timeline</span>
</div>
<span className="font-label-xs text-label-xs text-on-surface-variant">Stempel Terenkripsi Waktu Nyata</span>
</div>
{/* Vertical Timeline Steps */}
<div className="relative pl-6 space-y-5 before:absolute before:left-2.5 before:top-2 before:bottom-2 before:w-0.5 before:bg-surface-container-high">
{/* Step 1 */}
<div className="relative flex flex-col gap-0.5">
<div className="absolute -left-6 top-1 w-3.5 h-3.5 rounded-full bg-status-verified flex items-center justify-center">
<span className="w-1.5 h-1.5 rounded-full bg-surface"></span>
</div>
<div className="flex items-baseline gap-2 flex-wrap">
<span className="font-mono text-label-xs font-label-xs text-on-surface font-bold">18 Feb 2025 • 09:00 WITA</span>
<span className="px-2 py-0.2 rounded text-[10px] font-label-xs bg-surface-container text-on-surface-variant">Sampling Fisik</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface font-medium">Pengambilan sampel batu bara selesai di Jetty Muara Jawa</p>
<p className="text-[12px] text-on-surface-variant font-mono">Disaksikan petugas KTT &amp; Tim Sampling Carsurin (Sub-lot #01 s/d #08).</p>
</div>
{/* Step 2 */}
<div className="relative flex flex-col gap-0.5">
<div className="absolute -left-6 top-1 w-3.5 h-3.5 rounded-full bg-status-verified flex items-center justify-center">
<span className="w-1.5 h-1.5 rounded-full bg-surface"></span>
</div>
<div className="flex items-baseline gap-2 flex-wrap">
<span className="font-mono text-label-xs font-label-xs text-on-surface font-bold">19 Feb 2025 • 14:00 WITA</span>
<span className="px-2 py-0.2 rounded text-[10px] font-label-xs bg-surface-container text-on-surface-variant">Uji Laboratorium</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface font-medium">Pengujian proksimat dan kalori selesai di Laboratorium Carsurin Samarinda</p>
<p className="text-[12px] text-on-surface-variant font-mono">Hasil analisa parameter CV, TM, Ash, TS tercetak dalam lembar kerja sistem LIMS.</p>
</div>
{/* Step 3 */}
<div className="relative flex flex-col gap-0.5">
<div className="absolute -left-6 top-1 w-3.5 h-3.5 rounded-full bg-secondary flex items-center justify-center">
<span className="w-1.5 h-1.5 rounded-full bg-surface"></span>
</div>
<div className="flex items-baseline gap-2 flex-wrap">
<span className="font-mono text-label-xs font-label-xs text-on-surface font-bold">19 Feb 2025 • 18:00 WITA</span>
<span className="px-2 py-0.2 rounded text-[10px] font-label-xs bg-surface-container text-on-surface-variant">Draft Sync</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface font-medium">Unggah versi draf hasil analisis (v1.0) ke SIMBARA Gateway</p>
<p className="text-[12px] text-on-surface-variant font-mono">Payload hash awal: 3c8e9... (Volume tentatif 100.200 MT).</p>
</div>
{/* Step 4 (The Critical Discrepancy Point) */}
<div className="relative flex flex-col gap-0.5 p-3 rounded-lg bg-status-review-bg/40">
<div className="absolute -left-6 top-4 w-3.5 h-3.5 rounded-full bg-status-review flex items-center justify-center">
<span className="w-1.5 h-1.5 rounded-full bg-surface"></span>
</div>
<div className="flex items-baseline gap-2 flex-wrap">
<span className="font-mono text-label-xs font-label-xs text-status-review font-bold">20 Feb 2025 • 14:15 WITA</span>
<span className="px-2 py-0.2 rounded text-[10px] font-label-xs bg-status-review-bg text-status-review font-bold">Izin KSOP Terbit</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface font-bold">KSOP Samarinda menerbitkan Surat Persetujuan Berlayar (SPB No. 4402)</p>
<p className="text-[12px] text-status-review font-medium">Perhatian: SPB terbit sebelum berkas final CoA diunggah secara resmi ke SIMBARA.</p>
</div>
{/* Step 5 */}
<div className="relative flex flex-col gap-0.5 p-3 rounded-lg bg-surface-container-low">
<div className="absolute -left-6 top-4 w-3.5 h-3.5 rounded-full bg-accent-palmoil flex items-center justify-center">
<span className="w-1.5 h-1.5 rounded-full bg-surface"></span>
</div>
<div className="flex items-baseline gap-2 flex-wrap">
<span className="font-mono text-label-xs font-label-xs text-accent-palmoil font-bold">20 Feb 2025 • 15:30 WITA</span>
<span className="px-2 py-0.2 rounded text-[10px] font-label-xs bg-bg-surface-subtle text-accent-palmoil font-semibold">Tanda Tangan Final</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface font-bold">Sertifikat CoA Final (v2.0) ditandatangani BSrE dan diunggah</p>
<p className="text-[12px] text-on-surface-variant font-mono">Volume final disesuaikan menjadi 112.650 MT. Terdeteksi selisih urutan 75 menit pasca-SPB.</p>
</div>
{/* Step 6 */}
<div className="relative flex flex-col gap-0.5">
<div className="absolute -left-6 top-1 w-3.5 h-3.5 rounded-full bg-primary flex items-center justify-center">
<span className="w-1.5 h-1.5 rounded-full bg-surface"></span>
</div>
<div className="flex items-baseline gap-2 flex-wrap">
<span className="font-mono text-label-xs font-label-xs text-primary font-bold">21 Feb 2025 • 09:30 WITA</span>
<span className="px-2 py-0.2 rounded text-[10px] font-label-xs bg-secondary-container/40 text-secondary font-bold">Automated Audit Trigger</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface font-medium">Engine NusaMine memicu status "Anomali Kronologis" ke Meja Triase Kasus</p>
<p className="text-[12px] text-on-surface-variant font-mono">Kasus NM-2025-0891 ditandai untuk validasi manusia (Human-in-the-loop).</p>
</div>
</div>
</div>
{/* AUDITOR ACTION TOOLBAR */}
<div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-space-sm pt-space-md">
<div className="flex items-center gap-2 flex-wrap">
<button className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-status-review-bg text-status-review hover:bg-status-review-bg/80 transition-all font-label-md text-label-md font-bold" type="button">
<span className="material-symbols-outlined text-[18px]">forward_to_inbox</span>
<span className="">Minta Penjelasan ke KSOP &amp; Surveyor</span>
</button>
<button className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-surface-container-low text-on-surface hover:bg-surface-container transition-all font-label-md text-label-md" type="button">
<span className="material-symbols-outlined text-[18px] text-primary">download</span>
<span className="">Unduh Berkas Stempel Audit</span>
</button>
</div>
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-on-primary hover:bg-primary-container shadow-sm transition-all font-label-md text-label-md font-semibold" type="button">
<span className="material-symbols-outlined text-[18px]">edit_note</span>
<span className="">Beri Catatan Integritas</span>
</button>
</div>
</div>
</div>
</div>
</div>
</div>
    </div>
  );
};

export default BuktiAuditTrailPage;
