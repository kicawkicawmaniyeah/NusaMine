import React, { useState } from 'react';

interface Props {
  onNavigate?: (path: string) => void;
  onSelectCase?: (caseId: string) => void;
}

interface DiscrepancyRecord {
  id: string;
  caseId: string;
  sourcePair: string;
  sourceDesc: string;
  docId: string;
  company: string;
  iup: string;
  testParameter: string;
  sourceAValue: string;
  sourceADetail: string;
  sourceBValue: string;
  sourceBDetail: string;
  varianceValue: string;
  varianceBadge: string;
  statusType: 'mismatch' | 'unavailable' | 'partial' | 'pending';
  statusLabel: string;
  statusIcon: string;
  statusColor: 'review' | 'anomaly' | 'neutral' | 'verified';
}

const DISCREPANCY_RECORDS: DiscrepancyRecord[] = [
  {
    id: 'REC-2025-VLD-0891',
    caseId: 'NM-2025-0891',
    sourcePair: 'SIMBARA ↔ Inaportnet',
    sourceDesc: 'Ditjen Minerba vs Kemenhub',
    docId: '#SB-2025-8921',
    company: 'PT Mahakam Bara Energi',
    iup: 'IUP: 540/012/IUP-OP/2021',
    testParameter: 'Volume Muat (MT)',
    sourceAValue: '100.200 MT',
    sourceADetail: 'SIMBARA (19 Feb, 08:30)',
    sourceBValue: '112.650 MT',
    sourceBDetail: 'Inaportnet (20 Feb, 14:15)',
    varianceValue: '+12.450 MT',
    varianceBadge: '+12,41% (Batas >3%)',
    statusType: 'mismatch',
    statusLabel: 'Selisih Materiil',
    statusIcon: 'difference',
    statusColor: 'review',
  },
  {
    id: 'REC-2025-VLD-0894',
    caseId: 'NM-2025-0894',
    sourcePair: 'MOMS ↔ CEISA Bea Cukai',
    sourceDesc: 'Produksi vs Ekspor PEB',
    docId: '#MS-2025-4102',
    company: 'PT Bukit Prima Coal',
    iup: 'IUP: 540/098/IUP-OP/2019',
    testParameter: 'Kalori GAR (kcal/kg)',
    sourceAValue: '4.850 kcal/kg',
    sourceADetail: 'MOMS RKAB (18 Feb, 10:00)',
    sourceBValue: '5.320 kcal/kg',
    sourceBDetail: 'Surveyor CEISA (19 Feb, 16:30)',
    varianceValue: '+470 kcal/kg',
    varianceBadge: '+9,69% (Spesifikasi)',
    statusType: 'mismatch',
    statusLabel: 'Deviasi Kalori',
    statusIcon: 'warning',
    statusColor: 'review',
  },
  {
    id: 'REC-2025-VLD-0897',
    caseId: 'NM-2025-0897',
    sourcePair: 'e-PNBP ↔ MVP ESDM',
    sourceDesc: 'Kemenkeu vs Ditjen Minerba',
    docId: '#BL-2025-0193',
    company: 'PT Borneo Nusantara Mineral',
    iup: 'Billing: 8202502194819',
    testParameter: 'Setoran Royalti (IDR)',
    sourceAValue: 'Rp 3.840.500.000',
    sourceADetail: 'MVP Hitungan (20 Feb, 09:10)',
    sourceBValue: 'DATA TIDAK TERSEDIA (NULL)',
    sourceBDetail: 'Menunggu NTPN Persepsi',
    varianceValue: 'Belum Settled',
    varianceBadge: 'Gateway Timeout',
    statusType: 'unavailable',
    statusLabel: 'Data Tidak Tersedia',
    statusIcon: 'cloud_off',
    statusColor: 'anomaly',
  },
  {
    id: 'REC-2025-VLD-0899',
    caseId: 'NM-2025-0899',
    sourcePair: 'SIMBARA ↔ SIMODIS BI',
    sourceDesc: 'Faktur Ekspor vs Rekening DHE',
    docId: '#SB-2025-9014',
    company: 'PT Kutai Energi Persada',
    iup: 'PEB: 004910-KPU-BC-2025',
    testParameter: 'Nilai Devisa Ekspor (USD)',
    sourceAValue: '$ 4.250.000 USD',
    sourceADetail: 'Faktur SIMBARA (17 Feb)',
    sourceBValue: '$ 3.980.000 USD (Parsial)',
    sourceBDetail: 'SIMODIS BI (Tranche 1 Masuk)',
    varianceValue: '-$ 270.000 USD',
    varianceBadge: 'Sisa Termin Berjalan',
    statusType: 'partial',
    statusLabel: 'Data Parsial (Partial)',
    statusIcon: 'hourglass_top',
    statusColor: 'neutral',
  },
  {
    id: 'REC-2025-VLD-0902',
    caseId: 'NM-2025-0902',
    sourcePair: 'SIMBARA ↔ Inaportnet',
    sourceDesc: 'SPB KSOP Pelabuhan',
    docId: '#SB-2025-9140',
    company: 'PT Batubara Selaras Banjar',
    iup: 'Vessel: TB Oceanic 28',
    testParameter: 'Waktu Tolak Berlayar',
    sourceAValue: '20 Feb, 11:20 WITA',
    sourceADetail: 'Lapor Mandiri TUKS',
    sourceBValue: 'Menunggu Log AIS VTS',
    sourceBDetail: 'Batch Polling 15 Menitan',
    varianceValue: 'Selisih Antrean',
    varianceBadge: 'Queue Latency ~8m',
    statusType: 'pending',
    statusLabel: 'Menunggu Sinkronisasi',
    statusIcon: 'sync',
    statusColor: 'neutral',
  },
  {
    id: 'REC-2025-VLD-0842',
    caseId: 'NM-2025-0842',
    sourcePair: 'MOMS ↔ SIMBARA',
    sourceDesc: 'Stockpile vs Pelabuhan',
    docId: '#MS-2025-3918',
    company: 'PT Barito Coal Logistics',
    iup: 'IUP: 540/044/IUP-OP/2020',
    testParameter: 'Tonase Stockpile (MT)',
    sourceAValue: '75.000 MT',
    sourceADetail: 'MOMS Laporan Produksi',
    sourceBValue: '82.300 MT',
    sourceBDetail: 'SIMBARA Draft Muat',
    varianceValue: '+7.300 MT',
    varianceBadge: '+9,73% (Di Luar Toleransi)',
    statusType: 'mismatch',
    statusLabel: 'Selisih Materiil',
    statusIcon: 'difference',
    statusColor: 'review',
  },
  {
    id: 'REC-2025-VLD-0839',
    caseId: 'NM-2025-0839',
    sourcePair: 'MODI ↔ OSS Perizinan',
    sourceDesc: 'Legalitas Konsesi Tambang',
    docId: '#MD-2025-1108',
    company: 'PT Kaltim Prima Mineral',
    iup: 'IUP: 540/118/IUP-OP/2018',
    testParameter: 'Status Perizinan Operasi',
    sourceAValue: 'Aktif Beroperasi',
    sourceADetail: 'MODI ESDM (Sinkron 19 Feb)',
    sourceBValue: 'Menunggu Dokumen AMDAL',
    sourceBDetail: 'Portal BKPM / OSS',
    varianceValue: 'Discrepancy Legal',
    varianceBadge: 'Status Berbeda',
    statusType: 'unavailable',
    statusLabel: 'Data Tidak Tersedia',
    statusIcon: 'cloud_off',
    statusColor: 'anomaly',
  },
  {
    id: 'REC-2025-VLD-0833',
    caseId: 'NM-2025-0833',
    sourcePair: 'e-PNBP ↔ Bank Persepsi',
    sourceDesc: 'Settlement Kas Negara',
    docId: '#BL-2025-0455',
    company: 'PT Kutai Batubara Resources',
    iup: 'Billing: 8202502189912',
    testParameter: 'Status Setoran PNBP',
    sourceAValue: 'Rp 1.450.000.000',
    sourceADetail: 'SIMPONI ESDM Terbit',
    sourceBValue: 'Sedang Proses Kliring',
    sourceBDetail: 'Bank Persepsi Mandiri',
    varianceValue: 'Menunggu NTPN',
    varianceBadge: 'Batch Settlement 24 Jam',
    statusType: 'pending',
    statusLabel: 'Menunggu Sinkronisasi',
    statusIcon: 'sync',
    statusColor: 'neutral',
  },
  {
    id: 'REC-2025-VLD-0828',
    caseId: 'NM-2025-0828',
    sourcePair: 'CEISA ↔ Inaportnet',
    sourceDesc: 'Bea Cukai vs KSOP',
    docId: '#BC-2025-7721',
    company: 'PT Mahakam Jaya Mining',
    iup: 'Vessel: MV Oriental Jade',
    testParameter: 'Manifes Muatan Ekspor',
    sourceAValue: '55.000 MT',
    sourceADetail: 'PEB Bea Cukai #08912',
    sourceBValue: '51.800 MT (Parsial)',
    sourceBDetail: 'SPB KSOP Muara Berau',
    varianceValue: '-3.200 MT',
    varianceBadge: 'Draft Survey Bertahap',
    statusType: 'partial',
    statusLabel: 'Data Parsial (Partial)',
    statusIcon: 'hourglass_top',
    statusColor: 'neutral',
  },
  {
    id: 'REC-2025-VLD-0821',
    caseId: 'NM-2025-0821',
    sourcePair: 'MVP ↔ SIMBARA',
    sourceDesc: 'Verifikasi Royalti Progresif',
    docId: '#MV-2025-3312',
    company: 'PT Sebuku Mineral Utama',
    iup: 'IUP: 540/201/IUP-OP/2019',
    testParameter: 'Perhitungan Royalti (IDR)',
    sourceAValue: 'Rp 2.120.000.000',
    sourceADetail: 'MVP Formula ESDM',
    sourceBValue: 'Rp 1.940.000.000',
    sourceBDetail: 'SIMBARA Billing Awal',
    varianceValue: '+Rp 180.000.000',
    varianceBadge: '+9,27% (Koreksi Tarif)',
    statusType: 'mismatch',
    statusLabel: 'Selisih Materiil',
    statusIcon: 'difference',
    statusColor: 'review',
  },
  {
    id: 'REC-2025-VLD-0815',
    caseId: 'NM-2025-0815',
    sourcePair: 'SIMBARA ↔ Inaportnet',
    sourceDesc: 'Ditjen Minerba vs Kemenhub',
    docId: '#SB-2025-7940',
    company: 'PT Berau Cahaya Coal',
    iup: 'Vessel: TB Megah 08',
    testParameter: 'Volume Muat (MT)',
    sourceAValue: '92.000 MT',
    sourceADetail: 'SIMBARA Deklarasi',
    sourceBValue: '98.400 MT',
    sourceBDetail: 'Inaportnet Final Draft',
    varianceValue: '+6.400 MT',
    varianceBadge: '+6,95% (Batas >3%)',
    statusType: 'mismatch',
    statusLabel: 'Selisih Materiil',
    statusIcon: 'difference',
    statusColor: 'review',
  },
  {
    id: 'REC-2025-VLD-0809',
    caseId: 'NM-2025-0809',
    sourcePair: 'MOMS ↔ CEISA Bea Cukai',
    sourceDesc: 'Produksi vs Surveyor Ekspor',
    docId: '#MS-2025-2810',
    company: 'PT Paser Nusantara Energy',
    iup: 'IUP: 540/314/IUP-OP/2021',
    testParameter: 'Kalori GAR (kcal/kg)',
    sourceAValue: '4.100 kcal/kg',
    sourceADetail: 'MOMS RKAB',
    sourceBValue: '4.450 kcal/kg',
    sourceBDetail: 'CoA Surveyor Pabean',
    varianceValue: '+350 kcal/kg',
    varianceBadge: '+8,53% (Deviasi GAR)',
    statusType: 'mismatch',
    statusLabel: 'Deviasi Kalori',
    statusIcon: 'warning',
    statusColor: 'review',
  },
  {
    id: 'REC-2025-VLD-0798',
    caseId: 'NM-2025-0798',
    sourcePair: 'e-PNBP ↔ MVP ESDM',
    sourceDesc: 'Kemenkeu vs Ditjen Minerba',
    docId: '#BL-2025-0677',
    company: 'PT Samarinda Coal Mining',
    iup: 'Billing: 8202502174311',
    testParameter: 'Setoran Triwulan IV',
    sourceAValue: 'Rp 5.100.000.000',
    sourceADetail: 'MVP Hitungan ESDM',
    sourceBValue: 'Menunggu Verifikasi Bank',
    sourceBDetail: 'Polling Bank Persepsi BNI',
    varianceValue: 'Belum Terbit NTPN',
    varianceBadge: 'Sinkronisasi Berjalan',
    statusType: 'pending',
    statusLabel: 'Menunggu Sinkronisasi',
    statusIcon: 'sync',
    statusColor: 'neutral',
  },
  {
    id: 'REC-2025-VLD-0792',
    caseId: 'NM-2025-0792',
    sourcePair: 'SIMBARA ↔ SIMODIS BI',
    sourceDesc: 'Faktur Ekspor vs DHE',
    docId: '#SB-2025-6819',
    company: 'PT Melak Bara Sejahtera',
    iup: 'PEB: 003882-KPU-BC-2025',
    testParameter: 'Nilai Devisa Ekspor (USD)',
    sourceAValue: '$ 3.100.000 USD',
    sourceADetail: 'Faktur SIMBARA',
    sourceBValue: '$ 2.850.000 USD (Parsial)',
    sourceBDetail: 'SIMODIS Rekening Escrow',
    varianceValue: '-$ 250.000 USD',
    varianceBadge: 'Tranche 2 DHE Menunggu',
    statusType: 'partial',
    statusLabel: 'Data Parsial (Partial)',
    statusIcon: 'hourglass_top',
    statusColor: 'neutral',
  },
  {
    id: 'REC-2025-VLD-0785',
    caseId: 'NM-2025-0785',
    sourcePair: 'MODI ↔ Ditjen Minerba',
    sourceDesc: 'Data Kepengurusan & Pemegang Saham',
    docId: '#MD-2025-0982',
    company: 'PT Nusantara Coal Mandiri',
    iup: 'IUP: 540/411/IUP-OP/2017',
    testParameter: 'Beneficial Ownership',
    sourceAValue: 'Terdaftar AHU Kemenkumham',
    sourceADetail: 'Database Ditjen AHU',
    sourceBValue: 'DATA TIDAK TERSEDIA (NULL)',
    sourceBDetail: 'API Endpoint Tidak Merespons',
    varianceValue: 'Data Hilang',
    varianceBadge: 'Gateway Timeout 504',
    statusType: 'unavailable',
    statusLabel: 'Data Tidak Tersedia',
    statusIcon: 'cloud_off',
    statusColor: 'anomaly',
  },
];

export const ValidasiDataPage: React.FC<Props> = ({ onNavigate, onSelectCase }) => {
  const [selectedRecord, setSelectedRecord] = useState<string>("REC-2025-VLD-0891");
  const [valPage, setValPage] = useState<number>(1);
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [sourceFilter, setSourceFilter] = useState<string>("all");
  const [toast, setToast] = useState<string | null>(null);

  const itemsPerPage = 5;

  const handleInspect = (recId: string, company: string) => {
    setSelectedRecord(recId);
    setToast(`Memuat data rekonsiliasi ${recId} (${company}). Validasi stempel digital terverifikasi.`);
    setTimeout(() => setToast(null), 3000);
    const drawerEl = document.getElementById('inspection-drawer');
    if (drawerEl) {
      drawerEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExportJson = () => {
    setToast("Mengunduh payload log rekonsiliasi JSON (Format ISO/IEC 19770)...");
    setTimeout(() => setToast(null), 3000);
  };

  const filteredRecords = DISCREPANCY_RECORDS.filter(r => {
    const matchesStatus = statusFilter === 'all' || r.statusType === statusFilter;
    const matchesSource = sourceFilter === 'all' || 
      (sourceFilter === 'simbara-inaportnet' && r.sourcePair.includes('Inaportnet')) ||
      (sourceFilter === 'moms-ceisa' && r.sourcePair.includes('CEISA')) ||
      (sourceFilter === 'epnbp-mvp' && r.sourcePair.includes('MVP')) ||
      (sourceFilter === 'simbara-simodis' && r.sourcePair.includes('SIMODIS')) ||
      (sourceFilter === 'modi-oss' && r.sourcePair.includes('MODI'));
    const matchesSearch = !searchQuery || 
      r.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.docId.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.testParameter.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesStatus && matchesSource && matchesSearch;
  });

  const totalPages = Math.max(1, Math.ceil(filteredRecords.length / itemsPerPage));
  const currentPage = Math.min(valPage, totalPages);
  const displayedRecords = filteredRecords.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const activeRecordObj = DISCREPANCY_RECORDS.find(r => r.id === selectedRecord) || DISCREPANCY_RECORDS[0];
  return (
    <div className="w-full">
      <div className="flex flex-col w-full gap-space-lg">
{/* 1. Header & Context Banner */}
<section className="flex flex-col gap-space-md">
<div className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-md">
<div className="flex flex-col gap-1">
<div className="flex flex-wrap items-center gap-space-xs">
<span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-secondary-container/50 text-secondary font-label-xs text-label-xs font-semibold">
<span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse"></span>
            Protokol Rekonsiliasi Otomatis v3.4
          </span>
<span className="inline-flex items-center px-2 py-0.5 rounded bg-surface-container-high text-on-surface-variant font-label-xs text-label-xs">
            Data Demonstrasi Terpilih
          </span>
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-status-verified-bg text-status-verified font-label-xs text-label-xs">
<span className="material-symbols-outlined text-[14px]">hub</span>
            7 Jalur Gateway Terhubung
          </span>
</div>
<h1 className="font-display-lg text-display-lg text-on-surface tracking-tight mt-1">
          Validasi Silang Data (Cross Data Validation)
        </h1>
<p className="font-body-md text-body-md text-on-surface-variant max-w-4xl">
          Rekonsiliasi integritas data multi-sumber secara otomatis antara SIMBARA, MODI, MOMS, MVP, e-PNBP, CEISA 4.0 Bea Cukai, Inaportnet Kemenhub, dan SIMODIS Bank Indonesia.
        </p>
</div>
<div className="flex items-center gap-2 self-start lg:self-center">
<button className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-surface text-on-surface font-label-md text-label-md shadow-sm hover:bg-surface-container-low transition-colors" id="btn-force-refresh" type="button">
<span className="material-symbols-outlined text-[18px] text-secondary">sync</span>
          Sinkronisasi Paksa Seluruh Gateway
        </button>
<button className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary-container text-on-primary font-label-md text-label-md shadow hover:bg-primary transition-colors" type="button">
<span className="material-symbols-outlined text-[18px]">file_download</span>
          Ekspor Log Rekonsiliasi (.XLSX)
        </button>
</div>
</div>
{/* Peringatan Kebijakan & Prinsip Metrologis */}
<div className="bg-surface rounded-xl p-space-md shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-space-md border-l-4 border-l-secondary">
<div className="flex items-start gap-3">
<span className="material-symbols-outlined text-secondary text-[22px] mt-0.5">info</span>
<div className="flex flex-col gap-0.5">
<span className="font-headline-sm text-headline-sm text-on-surface font-semibold">Pedoman Interpretasi Varians &amp; Toleransi Hukum</span>
<p className="font-body-sm text-body-sm text-on-surface-variant">
            Inkonsistensi data tidak serta-merta mengindikasikan pelanggaran tata kelola. Varians dapat diakibatkan oleh selisih waktu sinkronisasi sistem (latency), toleransi metrologi timbangan pelabuhan (±3,0%), pemotongan draft survei kapal, atau perbedaan stempel waktu buku kas (settlement bank persepsi e-PNBP).
          </p>
</div>
</div>
<div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-container-low text-on-surface font-label-xs text-label-xs whitespace-nowrap self-start md:self-center">
<span className="material-symbols-outlined text-[16px] text-secondary">verified_user</span>
        Standar SNI 13-5014-1998
      </div>
</div>

{/* DISCLAIMER PROTOKOL RESMI: CDV & PEMBUKTIAN FISIK */}
<div className="bg-status-review-bg/50 border border-status-review/40 rounded-xl p-space-md flex items-start gap-3">
  <span className="material-symbols-outlined text-status-review text-[24px] shrink-0 mt-0.5">fact_check</span>
  <div className="flex flex-col gap-1">
    <span className="font-label-md text-label-md font-bold text-on-surface">
      Batasan Pembuktian Digital (Digital Consistency vs Physical Reality):
    </span>
    <p className="font-body-sm text-body-sm text-on-surface leading-relaxed">
      <strong>Cross Data Validation only verifies digital evidence consistency. It cannot independently establish actual physical mineral quality.</strong> Validasi silang data hanya memverifikasi keselarasan administratif antar basis data otoritas. Kualitas, kalori, dan kadar mineral yang sebenarnya memerlukan verifikasi fisik melalui penarikan sampel independen (independent witnessed sampling), pengujian ulang laboratorium berakreditasi KAN, dan inspeksi langsung tim terpadu di lapangan.
    </p>
  </div>
</div>
</section>
{/* 2. Ringkasan Metrik Rekonsiliasi Data (Overview Cards) */}
<section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-space-md">
{/* Card 1 */}
<div className="bg-surface rounded-xl p-space-md shadow-sm flex flex-col justify-between gap-3">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md text-on-surface-variant font-medium">Total Record Diperiksa</span>
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-surface-container-high text-on-surface font-label-xs text-label-xs">
          24 Jam Terakhir
        </span>
</div>
<div className="flex items-baseline gap-2">
<span className="font-tabular-kpi text-tabular-kpi text-on-surface font-bold">14.850</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">berkas</span>
</div>
<div className="flex items-center justify-between pt-2 bg-surface-container-low/40 px-2.5 py-1.5 rounded-lg">
<span className="font-label-xs text-label-xs text-on-surface-variant">Jalur Pengapalan Aktif</span>
<span className="font-tabular-data text-tabular-data text-primary-container font-semibold">124 Jetty / TUKS</span>
</div>
</div>
{/* Card 2: Match 100% */}
<div className="bg-surface rounded-xl p-space-md shadow-sm flex flex-col justify-between gap-3">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md text-on-surface-variant font-medium">Data Cocok (Match 100%)</span>
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-status-verified-bg text-status-verified font-label-xs text-label-xs font-semibold">
<span className="material-symbols-outlined text-[13px]">check_circle</span>
          93,8%
        </span>
</div>
<div className="flex items-baseline gap-2">
<span className="font-tabular-kpi text-tabular-kpi text-status-verified font-bold">13.924</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">sesuai penuh</span>
</div>
<div className="w-full bg-surface-container-high rounded-full h-1.5 overflow-hidden">
<div className="bg-status-verified h-full rounded-full" style={{width: "93.8%"}}></div>
</div>
</div>
{/* Card 3: Selisih / Discrepant */}
<div className="bg-surface rounded-xl p-space-md shadow-sm flex flex-col justify-between gap-3">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md text-on-surface-variant font-medium">Data Selisih (Discrepant)</span>
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-status-review-bg text-status-review font-label-xs text-label-xs font-semibold">
<span className="material-symbols-outlined text-[13px]">warning</span>
          4,3%
        </span>
</div>
<div className="flex items-baseline gap-2">
<span className="font-tabular-kpi text-tabular-kpi text-status-review font-bold">642</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">butuh tinjauan materiil</span>
</div>
<div className="flex items-center justify-between font-label-xs text-label-xs text-on-surface-variant">
<span className="">Toleransi &gt; 3%: <strong className="font-tabular-data text-status-anomaly">189</strong></span>
<span className="">Toleransi ≤ 3%: <strong className="font-tabular-data text-on-surface">453</strong></span>
</div>
</div>
{/* Card 4: Status Gateway & Menunggu */}
<div className="bg-surface rounded-xl p-space-md shadow-sm flex flex-col justify-between gap-3">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md text-on-surface-variant font-medium">Status Gateway &amp; Menunggu</span>
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-status-neutral-bg text-status-neutral font-label-xs text-label-xs">
          284 Antrean
        </span>
</div>
<div className="grid grid-cols-2 gap-2 text-[11px] font-label-xs">
<div className="flex flex-col bg-surface-container-low px-2 py-1 rounded">
<span className="text-on-surface-variant">SIMBARA / MODI</span>
<span className="font-semibold text-status-verified flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-status-verified"></span> 99,8% Hijau
          </span>
</div>
<div className="flex flex-col bg-surface-container-low px-2 py-1 rounded">
<span className="text-on-surface-variant">CEISA Bea Cukai</span>
<span className="font-semibold text-on-surface flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> 12 mnt lalu
          </span>
</div>
<div className="flex flex-col bg-surface-container-low px-2 py-1 rounded">
<span className="text-on-surface-variant">Inaportnet</span>
<span className="font-semibold text-on-surface flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> 5 mnt lalu
          </span>
</div>
<div className="flex flex-col bg-surface-container-low px-2 py-1 rounded">
<span className="text-on-surface-variant">SIMODIS BI</span>
<span className="font-semibold text-status-neutral flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-status-neutral"></span> Devisa Aktif
          </span>
</div>
</div>
<div className="text-[11px] text-on-surface-variant font-label-xs flex items-center justify-between">
<span className="">Rerata Latency Gateway:</span>
<span className="font-tabular-data text-on-surface font-semibold">140 ms</span>
</div>
</div>
</section>
{/* Notice: SIMODIS Bank Indonesia Access State */}
<div className="bg-surface-container-low/70 rounded-xl px-space-md py-3 flex items-center justify-between gap-space-md shadow-sm">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-secondary text-[20px]">account_balance</span>
<p className="font-body-sm text-body-sm text-on-surface">
<strong className="font-semibold text-primary-container">Integrasi SIMODIS Bank Indonesia:</strong> Mode sinkronisasi valuta devisa ekspor aktif dalam protokol aman terbatas. Hanya dokumen pengapalan ekspor lintas batas yang memuat nomor referensi L/C dan PEB yang direkonsiliasi.
      </p>
</div>
<span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-surface text-secondary font-label-xs text-label-xs shadow-xs">
<span className="material-symbols-outlined text-[14px]">lock</span>
      Otoritas Devisa Ditjen Minerba
    </span>
</div>
{/* 3. Kontrol Pencarian & Filter Multi-Kriteria */}
<section className="bg-surface rounded-xl p-space-md shadow-sm flex flex-col gap-space-md">
{/* Bilah Pencarian Utama */}
<div className="flex flex-col lg:flex-row gap-space-sm items-stretch lg:items-center">
<div className="relative flex-1">
<span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px]">search</span>
<input className="w-full bg-surface-container-low pl-11 pr-4 py-2.5 rounded-lg text-on-surface font-body-sm text-body-sm placeholder:text-on-surface-variant/70 focus:outline-none focus:bg-surface-container-lowest focus:ring-1 focus:ring-primary-container transition-all" id="table-search-input" placeholder="Cari ID Referensi (#SB-), Nomor Manifes, Pemegang IUP, atau Kode Billing e-PNBP..." type="text" value={searchQuery} onChange={(e) => { setSearchQuery(e.target.value); setValPage(1); }} />
</div>
<div className="flex flex-wrap items-center gap-2">
<button className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-primary-container text-on-primary font-label-md text-label-md hover:bg-primary transition-colors shadow-sm cursor-pointer" id="btn-apply-filters" type="button" onClick={() => setValPage(1)}>
<span className="material-symbols-outlined text-[18px]">filter_alt</span>
          Terapkan Filter
        </button>
<button className="inline-flex items-center gap-1.5 px-3 py-2.5 rounded-lg bg-surface-container-low text-on-surface-variant hover:text-on-surface font-label-md text-label-md transition-colors cursor-pointer" id="btn-reset-filters" type="button" onClick={() => { setSearchQuery(''); setStatusFilter('all'); setSourceFilter('all'); setValPage(1); }}>
<span className="material-symbols-outlined text-[18px]">restart_alt</span>
          Reset
        </button>
</div>
</div>
{/* Deretan Dropdown Kriteria */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 pt-1">
{/* Pasangan Sumber */}
<div className="flex flex-col gap-1">
<label className="font-label-xs text-label-xs text-on-surface-variant font-medium">Pasangan Sumber</label>
<select className="bg-surface-container-low text-on-surface font-body-sm text-body-sm px-3 py-2 rounded-lg focus:outline-none cursor-pointer" id="filter-source" value={sourceFilter} onChange={(e) => { setSourceFilter(e.target.value); setValPage(1); }}>
<option value="all">Semua Pasangan Sumber</option>
<option value="simbara-inaportnet">SIMBARA ↔ Inaportnet</option>
<option value="moms-ceisa">MOMS ↔ CEISA Bea Cukai</option>
<option value="epnbp-mvp">e-PNBP ↔ MVP ESDM</option>
<option value="simbara-simodis">SIMBARA ↔ SIMODIS BI</option>
<option value="modi-oss">MODI ↔ Sistem Perizinan</option>
</select>
</div>
{/* Komoditas */}
<div className="flex flex-col gap-1">
<label className="font-label-xs text-label-xs text-on-surface-variant font-medium">Komoditas</label>
<select className="bg-surface-container-low text-on-surface font-body-sm text-body-sm px-3 py-2 rounded-lg focus:outline-none cursor-pointer">
<option>Batu Bara (Pilot Aktif)</option>
<option>Nikel (Fase 2 Persiapan)</option>
<option>Bauksit</option>
<option>Tembaga</option>
</select>
</div>
{/* Wilayah */}
<div className="flex flex-col gap-1">
<label className="font-label-xs text-label-xs text-on-surface-variant font-medium">Wilayah Pantauan</label>
<select className="bg-surface-container-low text-on-surface font-body-sm text-body-sm px-3 py-2 rounded-lg focus:outline-none cursor-pointer">
<option>Semua Wilayah</option>
<option>Kalimantan Timur (Kutai / Samarinda)</option>
<option>Kalimantan Selatan (Tanah Bumbu / Banjarmasin)</option>
<option>Sumatera Selatan (Muara Enim)</option>
</select>
</div>
{/* Kategori Field */}
<div className="flex flex-col gap-1">
<label className="font-label-xs text-label-xs text-on-surface-variant font-medium">Kategori Parameter</label>
<select className="bg-surface-container-low text-on-surface font-body-sm text-body-sm px-3 py-2 rounded-lg focus:outline-none cursor-pointer">
<option>Semua Kategori Parameter</option>
<option>Volume / Tonase Muat (MT)</option>
<option>Nilai Royalti &amp; PNBP (IDR)</option>
<option>Kalori &amp; Mutu Tambang (GAR)</option>
<option>Waktu Tolak / Keberangkatan Kapal</option>
<option>Identitas Sarana Angkut / Tugboat</option>
</select>
</div>
{/* Status Validasi */}
<div className="flex flex-col gap-1">
<label className="font-label-xs text-label-xs text-on-surface-variant font-medium">Status Validasi</label>
<select className="bg-surface-container-low text-on-surface font-body-sm text-body-sm px-3 py-2 rounded-lg focus:outline-none cursor-pointer" id="filter-status" value={statusFilter} onChange={(e) => { setStatusFilter(e.target.value); setValPage(1); }}>
<option value="all">Semua Status</option>
<option value="mismatch">Selisih (Mismatch)</option>
<option value="unavailable">Data Tidak Tersedia (Unavailable)</option>
<option value="pending">Menunggu Sinkronisasi (Pending)</option>
<option value="partial">Data Parsial (Partial)</option>
</select>
</div>
</div>
</section>
{/* Segmented Quick Filter Bar */}
<div className="flex flex-wrap items-center gap-1.5 p-2 rounded-xl bg-surface-container-lowest shadow-xs">
<span className="font-label-xs text-label-xs text-on-surface-variant uppercase px-2 font-semibold">Status Cepat:</span>
<button onClick={() => { setStatusFilter('all'); setValPage(1); }} className={`px-3 py-1 rounded-lg font-label-xs text-label-xs font-semibold cursor-pointer transition-all ${statusFilter === 'all' ? 'bg-primary-container text-on-primary shadow-xs' : 'bg-surface text-on-surface-variant hover:text-on-surface'}`} type="button">
  Semua Status ({DISCREPANCY_RECORDS.length})
</button>
<button onClick={() => { setStatusFilter('mismatch'); setValPage(1); }} className={`px-3 py-1 rounded-lg font-label-xs text-label-xs font-semibold cursor-pointer transition-all ${statusFilter === 'mismatch' ? 'bg-status-review-bg text-status-review shadow-xs' : 'bg-surface text-on-surface-variant hover:text-on-surface'}`} type="button">
  Selisih Materiil ({DISCREPANCY_RECORDS.filter(r => r.statusType === 'mismatch').length})
</button>
<button onClick={() => { setStatusFilter('unavailable'); setValPage(1); }} className={`px-3 py-1 rounded-lg font-label-xs text-label-xs font-semibold cursor-pointer transition-all ${statusFilter === 'unavailable' ? 'bg-status-anomaly-bg text-status-anomaly shadow-xs' : 'bg-surface text-on-surface-variant hover:text-on-surface'}`} type="button">
  Data Tidak Tersedia ({DISCREPANCY_RECORDS.filter(r => r.statusType === 'unavailable').length})
</button>
<button onClick={() => { setStatusFilter('partial'); setValPage(1); }} className={`px-3 py-1 rounded-lg font-label-xs text-label-xs font-semibold cursor-pointer transition-all ${statusFilter === 'partial' ? 'bg-surface-container-high text-on-surface shadow-xs' : 'bg-surface text-on-surface-variant hover:text-on-surface'}`} type="button">
  Data Parsial ({DISCREPANCY_RECORDS.filter(r => r.statusType === 'partial').length})
</button>
<button onClick={() => { setStatusFilter('pending'); setValPage(1); }} className={`px-3 py-1 rounded-lg font-label-xs text-label-xs font-semibold cursor-pointer transition-all ${statusFilter === 'pending' ? 'bg-surface-container-high text-on-surface shadow-xs' : 'bg-surface text-on-surface-variant hover:text-on-surface'}`} type="button">
  Menunggu Sinkronisasi ({DISCREPANCY_RECORDS.filter(r => r.statusType === 'pending').length})
</button>
</div>
{/* 4. Tabel Selisih Lintas Sistem (Discrepancy Data Table) */}
<section className="bg-surface rounded-xl shadow-sm overflow-hidden flex flex-col">
<div className="px-space-md py-3.5 bg-surface-container-low/60 flex flex-wrap items-center justify-between gap-3">
<div className="flex items-center gap-2">
<span className="font-headline-sm text-headline-sm text-on-surface font-semibold">Daftar Rekonsiliasi Multi-Sistem</span>
<span className="inline-flex items-center px-2 py-0.5 rounded-full bg-surface text-on-surface font-label-xs text-label-xs shadow-xs">
          Menampilkan {filteredRecords.length} Hasil
        </span>
</div>
<div className="flex items-center gap-3 text-label-xs font-label-xs text-on-surface-variant">
<span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-status-review"></span> Selisih Melebihi Toleransi</span>
<span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-status-anomaly"></span> Data Tidak Tersedia</span>
<span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-status-neutral"></span> Menunggu Sinkronisasi</span>
</div>
</div>
{/* Responsive Table Container */}
<div className="w-full overflow-x-auto">
<table className="w-full text-left border-collapse min-w-[1100px]">
<thead>
<tr className="bg-surface-container-low text-on-surface-variant font-label-xs text-label-xs uppercase tracking-wider">
<th className="py-3 px-4 font-semibold">Pasangan Sumber</th>
<th className="py-3 px-3 font-semibold">ID Dokumen / IUP</th>
<th className="py-3 px-3 font-semibold">Parameter Uji</th>
<th className="py-3 px-4 font-semibold">Nilai Sumber A</th>
<th className="py-3 px-4 font-semibold">Nilai Sumber B</th>
<th className="py-3 px-4 font-semibold text-right">Varians / Selisih</th>
<th className="py-3 px-3 font-semibold">Status Validasi</th>
<th className="py-3 px-4 font-semibold text-center">Aksi</th>
</tr>
</thead>
<tbody className="font-body-sm text-body-sm text-on-surface" id="discrepancy-table-body">
{displayedRecords.map((r) => (
<tr key={r.id} onClick={() => handleInspect(r.id, r.company)} className={`hover:bg-surface-container transition-colors cursor-pointer ${selectedRecord === r.id ? 'bg-surface-container/70 border-l-4 border-l-status-review' : 'hover:bg-surface-container-low/40'}`} data-case-id={r.caseId}>
<td className="py-3.5 px-4 align-top">
<div className="flex flex-col gap-0.5">
<span className="font-semibold text-on-surface flex items-center gap-1">
  {r.sourcePair}
</span>
<span className="font-label-xs text-label-xs text-on-surface-variant">{r.sourceDesc}</span>
</div>
</td>
<td className="py-3.5 px-3 align-top">
<div className="flex flex-col gap-0.5">
<span className="font-tabular-data text-tabular-data font-semibold text-primary-container">{r.docId}</span>
<span className="font-body-sm text-body-sm text-on-surface font-medium truncate max-w-[180px]">{r.company}</span>
<span className="font-label-xs text-label-xs text-on-surface-variant font-mono">{r.iup}</span>
</div>
</td>
<td className="py-3.5 px-3 align-top">
<span className="inline-flex items-center px-2 py-0.5 rounded bg-surface-container-high text-on-surface font-label-xs text-label-xs font-medium">
  {r.testParameter}
</span>
</td>
<td className="py-3.5 px-4 align-top">
<div className="flex flex-col gap-0.5">
<span className="font-tabular-data text-tabular-data font-bold text-on-surface">{r.sourceAValue}</span>
<span className="font-label-xs text-label-xs text-on-surface-variant">{r.sourceADetail}</span>
</div>
</td>
<td className="py-3.5 px-4 align-top">
<div className="flex flex-col gap-0.5">
<span className="font-tabular-data text-tabular-data font-bold text-on-surface">{r.sourceBValue}</span>
<span className="font-label-xs text-label-xs text-on-surface-variant">{r.sourceBDetail}</span>
</div>
</td>
<td className="py-3.5 px-4 align-top text-right">
<div className="flex flex-col items-end gap-0.5">
<span className={`font-tabular-data text-tabular-data font-bold ${r.statusColor === 'review' ? 'text-status-review' : r.statusColor === 'anomaly' ? 'text-status-anomaly' : 'text-on-surface'}`}>{r.varianceValue}</span>
<span className={`inline-flex items-center px-1.5 py-0.2 rounded font-label-xs text-label-xs font-bold ${r.statusColor === 'review' ? 'bg-status-review-bg text-status-review' : r.statusColor === 'anomaly' ? 'bg-status-anomaly-bg text-status-anomaly' : 'bg-surface-container-high text-on-surface-variant'}`}>
  {r.varianceBadge}
</span>
</div>
</td>
<td className="py-3.5 px-3 align-top">
<span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full font-label-xs text-label-xs font-semibold ${r.statusColor === 'review' ? 'bg-status-review-bg text-status-review' : r.statusColor === 'anomaly' ? 'bg-status-anomaly-bg text-status-anomaly' : 'bg-surface-container-high text-on-surface'}`}>
<span className="material-symbols-outlined text-[14px]">{r.statusIcon}</span>
  {r.statusLabel}
</span>
</td>
<td className="py-3.5 px-4 align-top text-center">
<button onClick={(e) => { e.stopPropagation(); handleInspect(r.id, r.company); }} className={`btn-inspect inline-flex items-center gap-1 px-3 py-1.5 rounded font-label-xs text-label-xs transition-colors cursor-pointer ${selectedRecord === r.id ? 'bg-primary-container text-on-primary shadow-xs' : 'bg-surface-container-low text-on-surface hover:bg-surface-container'}`} type="button">
<span className="material-symbols-outlined text-[14px]">visibility</span>
  {selectedRecord === r.id ? 'Aktif' : 'Periksa'}
</button>
</td>
</tr>
))}
</tbody>
</table>
</div>
{/* Table Footer / Pagination */}
<div className="px-space-md py-3 bg-surface-container-low/40 flex flex-col sm:flex-row items-center justify-between gap-3 font-label-xs text-label-xs text-on-surface-variant">
<span className="">Menampilkan {filteredRecords.length > 0 ? (currentPage - 1) * itemsPerPage + 1 : 0} - {Math.min(currentPage * itemsPerPage, filteredRecords.length)} dari {filteredRecords.length} rekonsiliasi yang memerlukan peninjauan</span>
<div className="flex items-center gap-1">
<button onClick={() => setValPage(p => Math.max(1, p - 1))} className="px-2.5 py-1 rounded bg-surface hover:bg-surface-container-high transition-colors text-on-surface disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed" disabled={currentPage <= 1} type="button">Sebelumnya</button>
{Array.from({ length: totalPages }, (_, i) => i + 1).map(p => (
  <button key={p} onClick={() => setValPage(p)} className={`px-2.5 py-1 rounded font-semibold cursor-pointer transition-colors ${currentPage === p ? 'bg-primary-container text-on-primary' : 'bg-surface hover:bg-surface-container-high text-on-surface'}`} type="button">
    {p}
  </button>
))}
<button onClick={() => setValPage(p => Math.min(totalPages, p + 1))} className="px-2.5 py-1 rounded bg-surface hover:bg-surface-container-high transition-colors text-on-surface disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed" disabled={currentPage >= totalPages} type="button">Selanjutnya</button>
</div>
</div>
</section>
{/* 5. Panel Inspeksi Detail Rekonsiliasi & Asal Bukti (Detail Drawer / Workstation) */}
<section className="bg-surface rounded-xl shadow-md p-space-lg flex flex-col gap-space-lg border-2 border-primary-container/20 transition-all" id="inspection-drawer">
{/* Header Drawer */}
<div className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-md pb-space-md border-b-0">
<div className="flex flex-col gap-1">
<div className="flex flex-wrap items-center gap-2">
<span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded bg-primary-container text-on-primary font-label-xs text-label-xs font-semibold">
            ID Rekonsiliasi: {activeRecordObj.id}
          </span>
<span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded bg-surface-container-high text-on-surface font-label-xs text-label-xs">
            Terkait Kasus Triase: <strong className="font-tabular-data ml-1">{activeRecordObj.caseId}</strong>
</span>
<span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded font-label-xs text-label-xs font-bold ${activeRecordObj.statusColor === 'review' ? 'bg-status-review-bg text-status-review' : activeRecordObj.statusColor === 'anomaly' ? 'bg-status-anomaly-bg text-status-anomaly' : 'bg-surface-container-high text-on-surface'}`}>
            Varians: {activeRecordObj.varianceBadge}
          </span>
</div>
<h2 className="font-headline-lg text-headline-lg text-on-surface font-bold mt-1">
          Inspeksi Rekonsiliasi: {activeRecordObj.company}
        </h2>
<span className="font-body-sm text-body-sm text-on-surface-variant">
          Nomor Izin Usaha Pertambangan: <strong>{activeRecordObj.iup}</strong> • Parameter: <strong>{activeRecordObj.testParameter}</strong>
        </span>
</div>
<div className="flex flex-wrap items-center gap-2">
<button onClick={() => { onSelectCase?.(activeRecordObj.caseId); onNavigate?.('detail-kasus'); }} className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-surface-container-low text-primary-container font-label-md text-label-md hover:bg-surface-container font-semibold transition-colors cursor-pointer" type="button">
<span className="">Buka Detail Kasus Triase</span>
<span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</button>
<button className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-surface text-on-surface font-label-md text-label-md hover:bg-surface-container-low transition-colors shadow-xs" id="btn-download-json" type="button" onClick={handleExportJson}>
<span className="material-symbols-outlined text-[16px]">data_object</span>
          Ekspor Log JSON
        </button>
</div>
</div>
{/* Klasifikasi Diagnostik & Analisis Otomatis AI/Engine */}
<div className="bg-surface-container-low rounded-xl p-space-md flex flex-col md:flex-row gap-space-md items-start justify-between">
<div className="flex items-start gap-3">
<div className="p-2 rounded-lg bg-status-review-bg text-status-review">
<span className="material-symbols-outlined text-[24px]">balance</span>
</div>
<div className="flex flex-col gap-1 max-w-3xl">
<div className="flex items-center gap-2">
<span className="font-headline-sm text-headline-sm text-on-surface font-bold">Klasifikasi Diagnostik: Deviasi Fisik Nyata (Materiil)</span>
<span className="font-label-xs text-label-xs px-2 py-0.5 rounded bg-status-review-bg text-status-review font-semibold">Toleransi Metrologis &gt; 3,0%</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
            Data kedua pihak memiliki tanda tangan kriptografis sah dan tidak mengalami kegagalan gateway. Selisih tonase bersih sebesar <strong className="text-on-surface font-tabular-data">12.450 Metrik Ton (12,41%)</strong> terjadi antara laporan timbangan belt-weighter tambang SIMBARA dengan draft survei final nakhoda kapal di Inaportnet KSOP Samarinda.
          </p>
</div>
</div>
<div className="bg-surface rounded-lg p-3 flex flex-col gap-1 min-w-[220px] shadow-xs">
<span className="font-label-xs text-label-xs text-on-surface-variant">Nilai Potensi Selisih PNBP</span>
<span className="font-tabular-kpi text-[20px] leading-tight text-status-review font-bold">Rp 1.182.750.000</span>
<span className="font-label-xs text-label-xs text-on-surface-variant/80">Est. tarif royalti 13,5% HBA Feb 2025</span>
</div>
</div>
{/* Side-by-Side In-Depth Cards (Perbandingan Berdampingan) */}
<div className="grid grid-cols-1 lg:grid-cols-2 gap-space-md">
{/* SISI KIRI: Sumber A (SIMBARA / MOMS ESDM) */}
<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col justify-between gap-space-md">
<div className="flex flex-col gap-space-sm">
<div className="flex items-center justify-between pb-3 bg-surface-container-low/40 px-3 py-2 rounded-lg">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary-container text-[20px]">dataset</span>
<span className="font-headline-sm text-headline-sm text-on-surface font-bold">Sumber A: SIMBARA &amp; MOMS</span>
</div>
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-status-verified-bg text-status-verified font-label-xs text-label-xs font-semibold">
<span className="material-symbols-outlined text-[13px]">verified</span>
              Terverifikasi Mandiri KTT
            </span>
</div>
{/* Parameter Nilai Utama */}
<div className="bg-surface-container-low/50 rounded-lg p-3.5 flex items-baseline justify-between">
<span className="font-label-md text-label-md text-on-surface-variant">Volume Terdaftar</span>
<div className="flex items-baseline gap-1.5">
<span className="font-tabular-kpi text-tabular-kpi text-on-surface font-bold">100.200</span>
<span className="font-body-md text-body-md text-on-surface-variant font-medium">MT (Metrik Ton)</span>
</div>
</div>
{/* Rincian Payload Metadata */}
<div className="flex flex-col gap-2 font-label-xs text-label-xs">
<div className="flex justify-between py-1 bg-surface-container-low/20 px-2 rounded">
<span className="text-on-surface-variant">Nomor Dokumen SIMBARA</span>
<span className="font-mono font-semibold text-on-surface">#SB-2025-02-8921-MBE</span>
</div>
<div className="flex justify-between py-1 bg-surface-container-low/20 px-2 rounded">
<span className="text-on-surface-variant">Stempel Waktu Submit</span>
<span className="font-tabular-data text-on-surface">19 Feb 2025, 08:30:14 WITA</span>
</div>
<div className="flex justify-between py-1 bg-surface-container-low/20 px-2 rounded">
<span className="text-on-surface-variant">Penandatangan Digital</span>
<span className="text-on-surface font-medium">Ir. Hardiansyah (KTT PT MBE - Reg: KTT/2018/004)</span>
</div>
<div className="flex justify-between py-1 bg-surface-container-low/20 px-2 rounded">
<span className="text-on-surface-variant">Alat Ukur / Metrologi</span>
<span className="text-on-surface">Conveyor Belt Weigher #BW-03 (Kalibrasi Okt 2024)</span>
</div>
<div className="flex flex-col gap-1 pt-1 bg-surface-container-low/20 p-2 rounded">
<span className="text-on-surface-variant">SHA-256 Payload Hash</span>
<span className="font-mono text-[10px] text-on-surface-variant/90 break-all select-all">e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855</span>
</div>
<div className="flex justify-between py-1 bg-surface-container-low/20 px-2 rounded">
<span className="text-on-surface-variant">API Gateway Endpoint</span>
<span className="font-mono text-primary-container">api.esdm.go.id/v2/simbara/pengapalan/8921</span>
</div>
</div>
</div>
<div className="pt-2 flex items-center justify-between font-label-xs text-label-xs text-on-surface-variant bg-surface-container-low/30 px-3 py-2 rounded-lg">
<span className="">Status Gateway: <strong className="text-status-verified font-semibold">200 OK (Signed)</strong></span>
<span className="font-tabular-data">Latensi 88ms</span>
</div>
</div>
{/* SISI KANAN: Sumber B (Inaportnet & CEISA) */}
<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col justify-between gap-space-md">
<div className="flex flex-col gap-space-sm">
<div className="flex items-center justify-between pb-3 bg-surface-container-low/40 px-3 py-2 rounded-lg">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary text-[20px]">directions_boat</span>
<span className="font-headline-sm text-headline-sm text-on-surface font-bold">Sumber B: Inaportnet (Kemenhub)</span>
</div>
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-status-verified-bg text-status-verified font-label-xs text-label-xs font-semibold">
<span className="material-symbols-outlined text-[13px]">task_alt</span>
              SPB Diterbitkan KSOP
            </span>
</div>
{/* Parameter Nilai Utama */}
<div className="bg-surface-container-low/50 rounded-lg p-3.5 flex items-baseline justify-between">
<span className="font-label-md text-label-md text-on-surface-variant">Volume Manifes Kapal</span>
<div className="flex items-baseline gap-1.5">
<span className="font-tabular-kpi text-tabular-kpi text-status-review font-bold">112.650</span>
<span className="font-body-md text-body-md text-on-surface-variant font-medium">MT (Metrik Ton)</span>
</div>
</div>
{/* Rincian Payload Metadata */}
<div className="flex flex-col gap-2 font-label-xs text-label-xs">
<div className="flex justify-between py-1 bg-surface-container-low/20 px-2 rounded">
<span className="text-on-surface-variant">Nomor Surat Persetujuan Berlayar (SPB)</span>
<span className="font-mono font-semibold text-on-surface">#IN-SMD-2025-02-4402</span>
</div>
<div className="flex justify-between py-1 bg-surface-container-low/20 px-2 rounded">
<span className="text-on-surface-variant">Stempel Waktu KSOP</span>
<span className="font-tabular-data text-on-surface">20 Feb 2025, 14:15:32 WITA</span>
</div>
<div className="flex justify-between py-1 bg-surface-container-low/20 px-2 rounded">
<span className="text-on-surface-variant">Otoritas Penerbit</span>
<span className="text-on-surface font-medium">KSOP Kelas II Samarinda (Syahbandar)</span>
</div>
<div className="flex justify-between py-1 bg-surface-container-low/20 px-2 rounded">
<span className="text-on-surface-variant">Metode Penghitungan</span>
<span className="text-on-surface">Initial &amp; Final Draft Survey (Surveyor PT Carsurin)</span>
</div>
<div className="flex flex-col gap-1 pt-1 bg-surface-container-low/20 p-2 rounded">
<span className="text-on-surface-variant">Cross-ref CEISA Bea Cukai PEB</span>
<span className="font-mono text-[11px] text-on-surface font-semibold">PEB-024881/KPU.01/2025 (Status: Muat Selesai)</span>
</div>
<div className="flex justify-between py-1 bg-surface-container-low/20 px-2 rounded">
<span className="text-on-surface-variant">API Gateway Endpoint</span>
<span className="font-mono text-secondary">hubla.dephub.go.id/inaportnet/v3/vessel-clearance</span>
</div>
</div>
</div>
<div className="pt-2 flex items-center justify-between font-label-xs text-label-xs text-on-surface-variant bg-surface-container-low/30 px-3 py-2 rounded-lg">
<span className="">Status Gateway: <strong className="text-status-verified font-semibold">200 OK (Syncd)</strong></span>
<span className="font-tabular-data">Latensi 142ms</span>
</div>
</div>
</div>
{/* Tindakan Verifikator & Workflow Sanggahan */}
<div className="flex flex-col gap-space-sm pt-space-xs">
<span className="font-headline-sm text-headline-sm text-on-surface font-bold">Tindakan Rekonsiliasi &amp; Penugasan Peninjau</span>
<div className="flex flex-wrap items-center gap-3">
<button className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface font-label-md text-label-md transition-colors shadow-xs" id="btn-re-sync" type="button">
<span className="material-symbols-outlined text-[18px] text-secondary">cloud_sync</span>
          Kirim Permintaan Sinkronisasi Ulang (Re-sync API)
        </button>
<button className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-primary-container text-on-primary font-label-md text-label-md hover:bg-primary transition-colors shadow-sm" id="btn-flag-triage" type="button">
<span className="material-symbols-outlined text-[18px]">gavel</span>
          Kirim ke Meja Triase Kasus (Eskalasi)
        </button>
<button className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-surface text-on-surface font-label-md text-label-md hover:bg-surface-container-low transition-colors shadow-xs" id="btn-manual-note" type="button">
<span className="material-symbols-outlined text-[18px] text-on-surface-variant">edit_note</span>
          Catat Justifikasi Rekonsiliasi Manual
        </button>
<button className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-surface text-on-surface font-label-md text-label-md hover:bg-surface-container-low transition-colors shadow-xs" id="btn-request-coa" type="button">
<span className="material-symbols-outlined text-[18px] text-on-surface-variant">request_quote</span>
          Minta Dokumen Pembanding (CoA / Draft Survey)
        </button>
</div>
{/* Log Interaksi Terakhir */}
<div className="mt-2 p-3 rounded-lg bg-surface-container-low/40 text-on-surface-variant font-label-xs text-label-xs flex flex-wrap items-center justify-between gap-2">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[16px] text-primary-container">history</span>
<span className="">Log Audit: Rekonsiliasi otomatis dijalankan oleh <strong>Engine v3.4 [Job #RECON-20250220-4]</strong> pada 20 Feb 2025 pukul 15:00:03 WITA. Tidak ada modifikasi manual.</span>
</div>
<span className="font-mono text-[10px] text-on-surface-variant/70">Signature: 7c9a...32fe</span>
</div>
</div>
</section>
{/* Notification Toast Container (Dynamic Micro-interactions) */}
<div className="fixed bottom-6 right-6 z-50 transform translate-y-20 opacity-0 pointer-events-none transition-all duration-300 bg-primary-container text-on-primary px-4 py-3 rounded-xl shadow-xl flex items-center gap-3" id="toast-notification">
<span className="material-symbols-outlined text-secondary-fixed text-[22px]">check_circle</span>
<span className="font-body-sm text-body-sm font-medium" id="toast-message">Permintaan re-sinkronisasi berhasil dikirim ke gateway.</span>
</div>
</div>


      {toast && (
        <div className="fixed bottom-6 right-6 z-50 bg-primary text-on-primary px-4 py-3 rounded-xl shadow-2xl flex items-center gap-3 animate-in fade-in slide-in-from-bottom-2 duration-200">
          <span className="material-symbols-outlined text-status-verified text-[22px]">info</span>
          <span className="font-body-sm font-medium">{toast}</span>
        </div>
      )}
    </div>
  );
};

export default ValidasiDataPage;
