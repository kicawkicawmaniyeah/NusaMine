import React, { useState, useEffect } from 'react';

interface Props {
  onNavigate?: (path: string) => void;
  onSelectCase?: (caseId: string) => void;
}

export const NusaWatchPage: React.FC<Props> = ({ onNavigate, onSelectCase }) => {
  const [countdown, setCountdown] = useState<number>(30);
  const [activeTime, setActiveTime] = useState<string>('24h');
  const [jobFilter, setJobFilter] = useState<string>('all');
  const [toast, setToast] = useState<string | null>(null);
  const [isRefreshing, setIsRefreshing] = useState<boolean>(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => (prev <= 1 ? 30 : prev - 1));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleManualRefresh = () => {
    setIsRefreshing(true);
    setToast("Menyinkronkan status 24 simpul infrastruktur...");
    setTimeout(() => {
      setCountdown(30);
      setIsRefreshing(false);
      setToast("Penyegaran data NusaWatch selesai: Semua simpul beroperasi normal.");
      setTimeout(() => setToast(null), 3000);
    }, 800);
  };

  const handleTriggerRetry = (jobId: string) => {
    setToast(`Memulai ulang antrean ${jobId}: Gateway disiapkan ulang...`);
    setTimeout(() => {
      setToast(`Antrean ${jobId} berhasil dipicu kembali.`);
      setTimeout(() => setToast(null), 3000);
    }, 1200);
  };
  return (
    <div className="w-full">
      <div className="flex flex-col w-full gap-space-lg">
{/* 1. Page Header & Scope Banner */}
<section className="flex flex-col gap-space-md">
{/* Header Title Bar & Controls */}
<div className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-md">
<div className="flex flex-col gap-1">
<div className="flex items-center gap-space-sm flex-wrap">
<h1 className="font-display-md text-display-md text-on-surface font-semibold tracking-tight">NusaWatch - Pemantauan Keandalan &amp; Integritas Platform</h1>
<span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-status-verified-bg text-status-verified font-label-xs text-label-xs font-semibold">
<span className="w-1.5 h-1.5 rounded-full bg-status-verified animate-pulse"></span>Telemetri Aktif
          </span>
<span className="px-2 py-0.5 rounded bg-surface-container-high text-on-surface-variant font-label-xs text-label-xs font-medium">Data demonstrasi</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant max-w-4xl">
          Observabilitas real-time ketersediaan sistem, pipeline integrasi data, dan keamanan jejak kriptografis NusaMine.
        </p>
</div>
{/* Action & Filter Controls */}
<div className="flex items-center gap-space-sm flex-wrap self-start lg:self-center">
{/* Time Range Selector */}
<div className="inline-flex p-1 rounded-lg bg-surface-container-low text-on-surface-variant font-label-xs text-label-xs" id="timeRangeContainer">
<button className="px-2.5 py-1 rounded hover:text-on-surface transition-colors"  type="button">1 Jam Terakhir</button>
<button className="px-2.5 py-1 rounded bg-bg-surface text-on-surface font-semibold shadow-sm transition-colors"  type="button">24 Jam Terakhir</button>
<button className="px-2.5 py-1 rounded hover:text-on-surface transition-colors"  type="button">7 Hari Terakhir</button>
<button className="px-2.5 py-1 rounded hover:text-on-surface transition-colors"  type="button">30 Hari Terakhir</button>
</div>
{/* Manual Refresh Button */}
<button className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-bg-surface hover:bg-surface-container text-on-surface font-label-xs text-label-xs font-semibold shadow-sm transition-all" id="btnManualRefresh" onClick={handleManualRefresh} type="button">
<span className="material-symbols-outlined text-[16px] text-on-surface-variant" id="refreshIcon">sync</span>
<span className="">Segarkan Sekarang</span>
</button>
{/* Export Health Report */}
<button className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary-container hover:bg-primary text-surface font-label-xs text-label-xs font-semibold shadow-sm transition-all" type="button">
<span className="material-symbols-outlined text-[16px]">file_download</span>
<span className="">Unduh Laporan SLA</span>
</button>
</div>
</div>
{/* Strict Scope Notice: Separation of Duties (PRD Compliance) */}
<div className="rounded-xl bg-surface-container-low p-space-md shadow-sm flex items-start gap-space-md">
<div className="w-9 h-9 rounded-lg bg-surface-container-highest text-accent-palmoil flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-[22px]">policy</span>
</div>
<div className="flex flex-col gap-1 text-on-surface">
<div className="flex items-center gap-2">
<span className="font-headline-sm text-headline-sm font-semibold text-accent-palmoil">Prinsip Pemisahan Tugas (Separation of Duties)</span>
<span className="px-2 py-0.2 rounded bg-bg-surface-subtle text-on-surface-variant font-label-xs text-[10px] uppercase font-semibold">Protokol Keamanan ISO 27001</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
          NusaWatch khusus memantau keandalan infrastruktur dan pipa pertukaran data SIMBARA. Portal ini <strong className="text-on-surface font-medium">tidak menampilkan</strong> peringkat risiko korporasi, detail deklarasi komersial, maupun berkas perkara rahasia pelaku usaha kepada operator sistem dan administrator teknis.
        </p>
</div>
</div>
{/* Quick Status Bar */}
<div className="rounded-xl bg-bg-surface p-space-md shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-space-md">
<div className="flex items-center gap-space-md flex-wrap">
<div className="flex items-center gap-2">
<div className="w-3 h-3 rounded-full bg-status-review animate-pulse"></div>
<span className="font-label-md text-label-md text-on-surface-variant">Status Platform Global:</span>
<span className="font-headline-sm text-headline-sm font-bold text-on-surface font-tabular-data">99,82% Uptime</span>
<span className="text-on-surface-variant font-body-sm text-body-sm">(30 Hari)</span>
</div>
<span className="hidden md:inline text-outline-variant">•</span>
<div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-status-review-bg text-status-review font-label-xs text-label-xs font-semibold">
<span className="material-symbols-outlined text-[15px]">warning</span>
<span className="">Sistem Keseluruhan: Perlu Perhatian (1 Layanan Mengalami Antrean Retry)</span>
</div>
</div>
<div className="flex items-center gap-space-sm text-on-surface-variant font-label-xs text-label-xs">
<span className="material-symbols-outlined text-[15px] text-status-verified">autorenew</span>
<span className="">Refresh Otomatis: <strong className="text-on-surface">Setiap 30 Detik (Aktif)</strong></span>
<span className="text-outline-variant">•</span>
<span className="font-mono text-on-surface" id="countdownLabel">29d</span>
</div>
</div>
</section>
{/* 2. Core Services Status Grid (4 Layanan Utama) */}
<section className="flex flex-col gap-space-sm">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<h2 className="font-headline-lg text-headline-lg text-on-surface font-semibold">Layanan Inti NusaMine</h2>
<span className="px-2 py-0.5 rounded bg-surface-container-high text-on-surface-variant font-label-xs text-label-xs font-medium">Data demonstrasi</span>
</div>
<span className="font-label-xs text-label-xs text-on-surface-variant font-mono">Cluster: id-jkt-minerba-prod-01</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-space-md">{/* Card 1: Data Ingestion Pipeline */}
<div className="rounded-xl bg-bg-surface p-space-md shadow-sm flex flex-col justify-between gap-space-md transition-all hover:shadow-md border-subtle">
  <div className="flex flex-col gap-space-sm">
    <div className="flex items-center justify-between">
      <span className="font-label-xs text-label-xs font-bold uppercase tracking-wider text-on-surface-variant">Pipeline Integrasi</span>
      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-status-review-bg text-status-review font-label-xs text-label-xs font-semibold">
        <span className="material-symbols-outlined text-[14px]">warning</span>
        Perlu perhatian
      </span>
    </div>
    <div>
      <h3 className="font-headline-sm text-headline-sm font-semibold text-on-surface">Data Ingestion Pipeline</h3>
      <p className="font-label-xs text-label-xs text-on-surface-variant mt-0.5">Broker Kafka, Gateway Inaportnet, SIMBARA Stream</p>
    </div>
    {/* Metrics Trio */}
    <div className="grid grid-cols-3 gap-2 p-2.5 rounded-lg bg-surface-container-low font-tabular-data text-left">
      <div className="flex flex-col gap-1">
        <span className="text-[10px] text-on-surface-variant font-label-xs uppercase tracking-wider">SLA Uptime</span>
        <span className="font-bold text-[15px] text-on-surface font-mono leading-normal">98,65%</span>
      </div>
      <div className="flex flex-col gap-1">
        <span className="text-[10px] text-on-surface-variant font-label-xs uppercase tracking-wider">P95 Latensi</span>
        <span className="font-bold text-[15px] text-status-review font-mono leading-normal">412 ms</span>
      </div>
      <div className="flex flex-col gap-1">
        <span className="text-[10px] text-on-surface-variant font-label-xs uppercase tracking-wider">Throughput</span>
        <span className="font-bold text-[15px] text-on-surface font-mono leading-normal">1.420 /m</span>
      </div>
    </div>
  </div>
  <div className="pt-2 text-on-surface-variant font-body-sm text-body-sm bg-surface-container-lowest p-2.5 rounded-lg">
    <p className="text-[12px] text-on-surface-variant leading-relaxed">
      <strong className="text-status-review font-medium">Catatan Ops:</strong> Antrean penumpukan pada broker Kafka kluster SIMBARA-Inaportnet akibat pembatasan laju dari gateway KSOP Samarinda.
    </p>
  </div>
</div>

{/* Card 2: Validation Service */}
<div className="rounded-xl bg-bg-surface p-space-md shadow-sm flex flex-col justify-between gap-space-md transition-all hover:shadow-md border-subtle">
  <div className="flex flex-col gap-space-sm">
    <div className="flex items-center justify-between">
      <span className="font-label-xs text-label-xs font-bold uppercase tracking-wider text-on-surface-variant">Mesin Rekonsiliasi</span>
      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-status-verified-bg text-status-verified font-label-xs text-label-xs font-semibold">
        <span className="material-symbols-outlined text-[14px]">check_circle</span>
        Sehat
      </span>
    </div>
    <div>
      <h3 className="font-headline-sm text-headline-sm font-semibold text-on-surface">Validation Service</h3>
      <p className="font-label-xs text-label-xs text-on-surface-variant mt-0.5">Cross-Engine 5 Sumber Data Resmi</p>
    </div>
    {/* Metrics Trio */}
    <div className="grid grid-cols-3 gap-2 p-2.5 rounded-lg bg-surface-container-low font-tabular-data text-left">
      <div className="flex flex-col gap-1">
        <span className="text-[10px] text-on-surface-variant font-label-xs uppercase tracking-wider">SLA Uptime</span>
        <span className="font-bold text-[15px] text-on-surface font-mono leading-normal">99,94%</span>
      </div>
      <div className="flex flex-col gap-1">
        <span className="text-[10px] text-on-surface-variant font-label-xs uppercase tracking-wider">P95 Latensi</span>
        <span className="font-bold text-[15px] text-status-verified font-mono leading-normal">185 ms</span>
      </div>
      <div className="flex flex-col gap-1">
        <span className="text-[10px] text-on-surface-variant font-label-xs uppercase tracking-wider">Laju Validasi</span>
        <span className="font-bold text-[15px] text-on-surface font-mono leading-normal">38 tx/s</span>
      </div>
    </div>
  </div>
  <div className="pt-2 text-on-surface-variant font-body-sm text-body-sm bg-surface-container-lowest p-2.5 rounded-lg">
    <p className="text-[12px] text-on-surface-variant leading-relaxed">
      <strong className="text-status-verified font-medium">Catatan Ops:</strong> Algoritma rekonsiliasi lintas 5 sumber berjalan optimal. Tidak ada kebuntuan pemrosesan pada antrean transaksi tonase.
    </p>
  </div>
</div>

{/* Card 3: Evidence Storage */}
<div className="rounded-xl bg-bg-surface p-space-md shadow-sm flex flex-col justify-between gap-space-md transition-all hover:shadow-md border-subtle">
  <div className="flex flex-col gap-space-sm">
    <div className="flex items-center justify-between">
      <span className="font-label-xs text-label-xs font-bold uppercase tracking-wider text-on-surface-variant">Immutability Layer</span>
      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-status-verified-bg text-status-verified font-label-xs text-label-xs font-semibold">
        <span className="material-symbols-outlined text-[14px]">verified_user</span>
        Sehat
      </span>
    </div>
    <div>
      <h3 className="font-headline-sm text-headline-sm font-semibold text-on-surface">Evidence Storage</h3>
      <p className="font-label-xs text-label-xs text-on-surface-variant mt-0.5">Lumbung Bukti PDF/A, TSA-BRIN &amp; HSM</p>
    </div>
    {/* Metrics Trio */}
    <div className="grid grid-cols-3 gap-2 p-2.5 rounded-lg bg-surface-container-low font-tabular-data text-left">
      <div className="flex flex-col gap-1">
        <span className="text-[10px] text-on-surface-variant font-label-xs uppercase tracking-wider">SLA Uptime</span>
        <span className="font-bold text-[15px] text-on-surface font-mono leading-normal">99,99%</span>
      </div>
      <div className="flex flex-col gap-1">
        <span className="text-[10px] text-on-surface-variant font-label-xs uppercase tracking-wider">P95 Latensi</span>
        <span className="font-bold text-[15px] text-status-verified font-mono leading-normal">64 ms</span>
      </div>
      <div className="flex flex-col gap-1">
        <span className="text-[10px] text-on-surface-variant font-label-xs uppercase tracking-wider">SHA-256</span>
        <span className="font-bold text-[15px] text-on-surface font-mono leading-normal">100%</span>
      </div>
    </div>
  </div>
  <div className="pt-2 text-on-surface-variant font-body-sm text-body-sm bg-surface-container-lowest p-2.5 rounded-lg">
    <p className="text-[12px] text-on-surface-variant leading-relaxed">
      <strong className="text-status-verified font-medium">Catatan Ops:</strong> Berkas PDF/A dengan stempel TSA-BRIN terhubung normal. Seluruh 3 replika data center tersinkronisasi.
    </p>
  </div>
</div>

{/* Card 4: Portal Sanggahan */}
<div className="rounded-xl bg-bg-surface p-space-md shadow-sm flex flex-col justify-between gap-space-md transition-all hover:shadow-md border-subtle">
  <div className="flex flex-col gap-space-sm">
    <div className="flex items-center justify-between">
      <span className="font-label-xs text-label-xs font-bold uppercase tracking-wider text-on-surface-variant">Gerbang Pelaku Usaha</span>
      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-status-verified-bg text-status-verified font-label-xs text-label-xs font-semibold">
        <span className="material-symbols-outlined text-[14px]">check_circle</span>
        Sehat
      </span>
    </div>
    <div>
      <h3 className="font-headline-sm text-headline-sm font-semibold text-on-surface">Portal Sanggahan</h3>
      <p className="font-label-xs text-label-xs text-on-surface-variant mt-0.5">SSO BSrE, Upload Bukti Banding Mitra</p>
    </div>
    {/* Metrics Trio */}
    <div className="grid grid-cols-3 gap-2 p-2.5 rounded-lg bg-surface-container-low font-tabular-data text-left">
      <div className="flex flex-col gap-1">
        <span className="text-[10px] text-on-surface-variant font-label-xs uppercase tracking-wider">SLA Uptime</span>
        <span className="font-bold text-[15px] text-on-surface font-mono leading-normal">99,91%</span>
      </div>
      <div className="flex flex-col gap-1">
        <span className="text-[10px] text-on-surface-variant font-label-xs uppercase tracking-wider">P95 Latensi</span>
        <span className="font-bold text-[15px] text-status-verified font-mono leading-normal">142 ms</span>
      </div>
      <div className="flex flex-col gap-1">
        <span className="text-[10px] text-on-surface-variant font-label-xs uppercase tracking-wider">Sesi Aktif</span>
        <span className="font-bold text-[15px] text-on-surface font-mono leading-normal">28 Sesi</span>
      </div>
    </div>
  </div>
  <div className="pt-2 text-on-surface-variant font-body-sm text-body-sm bg-surface-container-lowest p-2.5 rounded-lg">
    <p className="text-[12px] text-on-surface-variant leading-relaxed">
      <strong className="text-status-verified font-medium">Catatan Ops:</strong> Portal sanggahan dan SSO BSrE berfungsi lancar tanpa laporan kendala berkas sanggahan pelaku usaha.
    </p>
  </div>
</div></div>
</section>
{/* 3. Sinkronisasi Sistem Sumber Terhubung & Integrity Highlights */}
<section className="grid grid-cols-1 xl:grid-cols-3 gap-space-lg">
{/* Matrix Table: Sumber Data Terhubung (2 Kolom Lebar) */}
<div className="xl:col-span-2 rounded-xl bg-bg-surface p-space-md shadow-sm flex flex-col gap-space-md">
<div className="flex items-center justify-between flex-wrap gap-2">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary-container text-[20px]">sync_alt</span>
<h2 className="font-headline-lg text-headline-lg font-semibold text-on-surface">Sinkronisasi Sistem Sumber Terhubung</h2>
<span className="px-2 py-0.5 rounded bg-surface-container-high text-on-surface-variant font-label-xs text-label-xs font-medium">Data demonstrasi</span>
</div>
<span className="font-label-xs text-label-xs text-on-surface-variant">Protokol Validasi Terpusat v2.4</span>
</div>
{/* Data Density Matrix Table */}
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-bg-canvas text-on-surface-variant font-label-xs text-label-xs uppercase tracking-wider">
<th className="py-2.5 px-3 rounded-l-lg font-semibold">Sistem Sumber Terhubung</th>
<th className="py-2.5 px-3 font-semibold">Sinkronisasi Terakhir</th>
<th className="py-2.5 px-3 font-semibold">Interval &amp; Protokol</th>
<th className="py-2.5 px-3 font-semibold">Metrik Lag / Respon</th>
<th className="py-2.5 px-3 rounded-r-lg font-semibold text-right">Status Keterhubungan</th>
</tr>
</thead>
<tbody className="font-body-sm text-body-sm divide-y-0 text-on-surface">
{/* Row 1: SIMBARA Core */}
<tr className="hover:bg-surface-container-low transition-colors">
<td className="py-3 px-3">
<div className="font-headline-sm text-[13px] font-semibold text-on-surface">SIMBARA Core</div>
<div className="font-label-xs text-label-xs text-on-surface-variant">Ditjen Minerba ESDM</div>
</td>
<td className="py-3 px-3 font-tabular-data">
<div className="text-[13px] text-on-surface font-medium">42 detik lalu</div>
<div className="font-label-xs text-label-xs text-on-surface-variant">14 Mar 2025, 09:14:18 WIB</div>
</td>
<td className="py-3 px-3">
<span className="font-mono text-xs px-2 py-0.5 rounded bg-surface-container-low text-on-surface">Real-time Webhook</span>
</td>
<td className="py-3 px-3 font-tabular-data">
<span className="text-status-verified font-medium">0 ms lag</span>
</td>
<td className="py-3 px-3 text-right">
<span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-status-verified-bg text-status-verified font-label-xs text-label-xs font-semibold">
<span className="material-symbols-outlined text-[14px]">check_circle</span>
                  Sehat
                </span>
</td>
</tr>
{/* Row 2: MOMS & e-PNBP */}
<tr className="hover:bg-surface-container-low transition-colors bg-surface-container-lowest">
<td className="py-3 px-3">
<div className="font-headline-sm text-[13px] font-semibold text-on-surface">MOMS &amp; e-PNBP</div>
<div className="font-label-xs text-label-xs text-on-surface-variant">Kementerian ESDM</div>
</td>
<td className="py-3 px-3 font-tabular-data">
<div className="text-[13px] text-on-surface font-medium">2 menit lalu</div>
<div className="font-label-xs text-label-xs text-on-surface-variant">14 Mar 2025, 09:13:00 WIB</div>
</td>
<td className="py-3 px-3">
<span className="font-mono text-xs px-2 py-0.5 rounded bg-surface-container-low text-on-surface">Interval 5 Menit (REST)</span>
</td>
<td className="py-3 px-3 font-tabular-data">
<span className="text-status-verified font-medium">Payload valid</span>
</td>
<td className="py-3 px-3 text-right">
<span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-status-verified-bg text-status-verified font-label-xs text-label-xs font-semibold">
<span className="material-symbols-outlined text-[14px]">check_circle</span>
                  Sehat
                </span>
</td>
</tr>
{/* Row 3: CEISA Ekspor */}
<tr className="hover:bg-surface-container-low transition-colors">
<td className="py-3 px-3">
<div className="font-headline-sm text-[13px] font-semibold text-on-surface">CEISA Ekspor</div>
<div className="font-label-xs text-label-xs text-on-surface-variant">Ditjen Bea dan Cukai (Kemenkeu)</div>
</td>
<td className="py-3 px-3 font-tabular-data">
<div className="text-[13px] text-on-surface font-medium">1 menit lalu</div>
<div className="font-label-xs text-label-xs text-on-surface-variant">14 Mar 2025, 09:13:45 WIB</div>
</td>
<td className="py-3 px-3">
<span className="font-mono text-xs px-2 py-0.5 rounded bg-surface-container-low text-on-surface">Real-time API (mTLS)</span>
</td>
<td className="py-3 px-3 font-tabular-data">
<span className="text-status-verified font-medium">Latency 78 ms</span>
</td>
<td className="py-3 px-3 text-right">
<span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-status-verified-bg text-status-verified font-label-xs text-label-xs font-semibold">
<span className="material-symbols-outlined text-[14px]">check_circle</span>
                  Sehat
                </span>
</td>
</tr>
{/* Row 4: Inaportnet (Perlu Perhatian) */}
<tr className="hover:bg-surface-container-low transition-colors bg-status-review-bg/20">
<td className="py-3 px-3">
<div className="font-headline-sm text-[13px] font-semibold text-on-surface">Inaportnet</div>
<div className="font-label-xs text-label-xs text-on-surface-variant">Ditjen Hubla (Kemenhub)</div>
</td>
<td className="py-3 px-3 font-tabular-data">
<div className="text-[13px] text-status-review font-bold">18 menit lalu</div>
<div className="font-label-xs text-label-xs text-on-surface-variant">14 Mar 2025, 08:56:30 WIB</div>
</td>
<td className="py-3 px-3">
<span className="font-mono text-xs px-2 py-0.5 rounded bg-status-review-bg text-status-review font-semibold">Interval 10 Menit</span>
</td>
<td className="py-3 px-3 font-tabular-data">
<span className="text-status-review font-bold">Keterlambatan 8m (142 backlog)</span>
</td>
<td className="py-3 px-3 text-right">
<span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-status-review-bg text-status-review font-label-xs text-label-xs font-semibold">
<span className="material-symbols-outlined text-[14px]">warning</span>
                  Perlu perhatian
                </span>
</td>
</tr>
{/* Row 5: SIMODIS */}
<tr className="hover:bg-surface-container-low transition-colors">
<td className="py-3 px-3">
<div className="font-headline-sm text-[13px] font-semibold text-on-surface">SIMODIS</div>
<div className="font-label-xs text-label-xs text-on-surface-variant">Bank Indonesia (Devisa Hasil Ekspor)</div>
</td>
<td className="py-3 px-3 font-tabular-data">
<div className="text-[13px] text-on-surface font-medium">35 menit lalu</div>
<div className="font-label-xs text-label-xs text-on-surface-variant">14 Mar 2025, 08:39:12 WIB</div>
</td>
<td className="py-3 px-3">
<span className="font-mono text-xs px-2 py-0.5 rounded bg-surface-container-low text-on-surface">Batch 30 Menit (SFTP-mTLS)</span>
</td>
<td className="py-3 px-3 font-tabular-data">
<span className="text-on-surface-variant">Next batch: 09:39 WIB</span>
</td>
<td className="py-3 px-3 text-right">
<span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-status-verified-bg text-status-verified font-label-xs text-label-xs font-semibold">
<span className="material-symbols-outlined text-[14px]">check_circle</span>
                  Sehat
                </span>
</td>
</tr>
{/* Row 6: KAN & Ditjen Metrologi */}
<tr className="hover:bg-surface-container-low transition-colors bg-surface-container-lowest">
<td className="py-3 px-3">
<div className="font-headline-sm text-[13px] font-semibold text-on-surface">KAN &amp; Ditjen Metrologi</div>
<div className="font-label-xs text-label-xs text-on-surface-variant">Kemendag (Kalibrasi Timbangan Jembatan)</div>
</td>
<td className="py-3 px-3 font-tabular-data">
<div className="text-[13px] text-on-surface font-medium">1 jam lalu</div>
<div className="font-label-xs text-label-xs text-on-surface-variant">14 Mar 2025, 08:14:00 WIB</div>
</td>
<td className="py-3 px-3">
<span className="font-mono text-xs px-2 py-0.5 rounded bg-surface-container-low text-on-surface">Interval 1 Jam (API Sync)</span>
</td>
<td className="py-3 px-3 font-tabular-data">
<span className="text-status-verified font-medium">Sertifikat timbangan sinkron</span>
</td>
<td className="py-3 px-3 text-right">
<span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-status-verified-bg text-status-verified font-label-xs text-label-xs font-semibold">
<span className="material-symbols-outlined text-[14px]">check_circle</span>
                  Sehat
                </span>
</td>
</tr>
</tbody>
</table>
</div>
</div>
{/* Panel Kanan: Alert Keamanan & Integritas Kriptografis (7. PRD Item) */}
<div className="rounded-xl bg-bg-surface p-space-md shadow-sm flex flex-col justify-between gap-space-md"><div className="flex flex-col gap-space-sm">
  <div className="flex items-center justify-between">
    <div className="flex items-center gap-2">
      <span className="material-symbols-outlined text-primary-container text-[20px]">encrypted</span>
      <h2 className="font-headline-lg text-headline-lg font-semibold text-on-surface">Integritas Kriptografis</h2>
    </div>
    <span className="px-2 py-0.5 rounded bg-surface-container-high text-on-surface-variant font-label-xs text-label-xs font-medium">Data demonstrasi</span>
  </div>
  <p className="font-label-xs text-label-xs text-on-surface-variant leading-relaxed">
    Pemeriksaan ledger hash harian, status HSM fisik, dan validitas sertifikat tanda tangan digital.
  </p>

  {/* Integrity Item 1: Hash Check */}
  <div className="rounded-lg bg-surface-container-low p-space-sm flex flex-col gap-1.5">
    <div className="flex items-center justify-between">
      <span className="font-headline-sm font-semibold text-on-surface text-[13px]">Uji Integritas SHA-256 Ledger</span>
      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-status-verified-bg text-status-verified font-label-xs text-[11px] font-semibold">
        <span className="material-symbols-outlined text-[13px]">verified</span>
        VALID (100%)
      </span>
    </div>
    <p className="font-label-xs text-label-xs text-on-surface-variant leading-normal">
      Seluruh berkas bukti PDF/A tidak terindikasi manipulasi. Stempel TSA-BRIN utuh.
    </p>
    <div className="mt-1 font-mono text-[10px] text-on-surface-variant truncate bg-bg-surface px-2.5 py-1.5 rounded-lg border-subtle" title="e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855">
      <span className="text-on-surface-variant font-semibold">Blok Terakhir:</span> e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855
    </div>
  </div>

  {/* Integrity Item 2: HSM Physical Hardware */}
  <div className="rounded-lg bg-surface-container-low p-space-sm flex flex-col gap-1.5">
    <div className="flex items-center justify-between">
      <span className="font-headline-sm font-semibold text-on-surface text-[13px]">Hardware Security Module (HSM)</span>
      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-status-verified-bg text-status-verified font-label-xs text-[11px] font-semibold">
        <span className="w-1.5 h-1.5 rounded-full bg-status-verified"></span>
        ONLINE
      </span>
    </div>
    <p className="font-label-xs text-label-xs text-on-surface-variant leading-normal">
      Thales Luna HSM Ditjen Minerba JKT-01 - FIPS 140-2 Level 3
    </p>
    <div className="flex items-center gap-2.5 font-mono text-[11px] text-on-surface-variant mt-0.5 flex-wrap">
      <span className="bg-bg-surface px-2 py-0.5 rounded">Suhu: <strong className="text-on-surface">34°C</strong></span>
      <span className="bg-bg-surface px-2 py-0.5 rounded">Beban: <strong className="text-on-surface">22%</strong></span>
      <span className="bg-bg-surface px-2 py-0.5 rounded">Slot: <strong className="text-status-verified">Terkunci</strong></span>
    </div>
  </div>

  {/* Integrity Item 3: TLS/mTLS Compliance */}
  <div className="rounded-lg bg-surface-container-low p-space-sm flex flex-col gap-1.5">
    <div className="flex items-center justify-between">
      <span className="font-headline-sm font-semibold text-on-surface text-[13px]">Kepatuhan TLS &amp; Sandi Forward Secrecy</span>
      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-status-verified-bg text-status-verified font-label-xs text-[11px] font-semibold">
        <span className="material-symbols-outlined text-[13px]">lock</span>
        100% Sesuai
      </span>
    </div>
    <p className="font-label-xs text-label-xs text-on-surface-variant leading-normal">
      100% gateway API antar-kementerian menggunakan TLS 1.3 dengan cipher suite PFS mandatori.
    </p>
  </div>

  {/* Integrity Item 4: Anomali Pola Akses */}
  <div className="rounded-lg bg-surface-container-low p-space-sm flex flex-col gap-1.5">
    <div className="flex items-center justify-between">
      <span className="font-headline-sm font-semibold text-on-surface text-[13px]">Anomali Pola Akses &amp; Brute Force</span>
      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-status-verified-bg text-status-verified font-label-xs text-[11px] font-semibold">
        0 Insiden
      </span>
    </div>
    <p className="font-label-xs text-label-xs text-on-surface-variant leading-normal">
      Tidak ada serangan terkoordinasi aktif dalam 6 jam terakhir. Firewall WAF normal.
    </p>
  </div>
</div>
<div className="pt-2 text-center font-label-xs text-label-xs text-on-surface-variant border-t border-subtle mt-2">
  Audit integritas terjadwal: <span className="font-mono text-on-surface font-semibold">14 Mar 2025, 12:00:00 WIB</span>
</div></div>
</section>
{/* 4. Job Gagal & Antrean Retry (Failed Jobs & Dead-Letter Queue Inspector) */}
<section className="rounded-xl bg-bg-surface p-space-md shadow-sm flex flex-col gap-space-md">
<div className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-md">
<div className="flex flex-col gap-1">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-status-review text-[22px]">queue</span>
<h2 className="font-headline-lg text-headline-lg font-semibold text-on-surface">Inspektur Antrean Retry &amp; Dead-Letter Queue (DLQ)</h2>
<span className="px-2 py-0.5 rounded bg-surface-container-high text-on-surface-variant font-label-xs text-label-xs font-medium">Data demonstrasi</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">
          Investigasi kegagalan transmisi mikro-service, eksekusi backoff adaptif, dan trigger pemrosesan ulang manual oleh SysOps.
        </p>
</div>
{/* Filter Controls */}
<div className="flex items-center gap-space-sm flex-wrap">
{/* Filter Status Job */}
<div className="inline-flex p-1 rounded-lg bg-surface-container-low text-on-surface-variant font-label-xs text-label-xs" id="jobFilterContainer">
<button className="px-2.5 py-1 rounded bg-bg-surface text-on-surface font-semibold shadow-sm transition-colors" onClick={() => setJobFilter('all')} type="button">Semua (4)</button>
<button className="px-2.5 py-1 rounded hover:text-on-surface transition-colors" onClick={() => setJobFilter('retry')} type="button">Menunggu Retry (1)</button>
<button className="px-2.5 py-1 rounded hover:text-on-surface transition-colors" onClick={() => setJobFilter('processing')} type="button">Sedang Diproses (1)</button>
<button className="px-2.5 py-1 rounded hover:text-on-surface transition-colors" onClick={() => setJobFilter('dlq')} type="button">Gagal Permanen / DLQ (1)</button>
</div>
<button className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-container hover:bg-surface-container-highest text-on-surface font-label-xs text-label-xs font-semibold transition-all" type="button">
<span className="material-symbols-outlined text-[16px]">restart_alt</span>
<span className="">Retry Batch Tertunda (1)</span>
</button>
</div>
</div>
{/* Interactive Table for Jobs */}
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-bg-canvas text-on-surface-variant font-label-xs text-label-xs uppercase tracking-wider">
<th className="py-2.5 px-3 rounded-l-lg font-semibold">Job ID &amp; Nama Worker</th>
<th className="py-2.5 px-3 font-semibold">Deskripsi Kesalahan Teknis</th>
<th className="py-2.5 px-3 font-semibold">Percobaan</th>
<th className="py-2.5 px-3 font-semibold">Waktu Mulai</th>
<th className="py-2.5 px-3 font-semibold">Status Antrean</th>
<th className="py-2.5 px-3 rounded-r-lg font-semibold text-right">Aksi Tindakan SysOps</th>
</tr>
</thead>
<tbody className="font-body-sm text-body-sm divide-y-0 text-on-surface" id="jobsTableBody">{/* Job 1 */}
<tr className="hover:bg-surface-container-low transition-colors job-row" data-status="retry">
  <td className="py-3.5 px-3">
    <div className="flex items-center gap-1.5">
      <span className="font-mono text-xs font-bold text-accent-palmoil bg-surface-container px-2 py-0.5 rounded">#JOB-88421</span>
    </div>
    <div className="font-mono text-[11px] text-on-surface-variant mt-1">Ingestion-Inaportnet-VesselManifest</div>
  </td>
  <td className="py-3.5 px-3 max-w-xs">
    <div className="font-mono text-[12px] text-status-anomaly font-semibold">HTTP 429 Too Many Requests</div>
    <div className="font-body-sm text-[11px] text-on-surface-variant mt-0.5 leading-normal">Rate limit tercapai dari gateway KSOP Samarinda</div>
  </td>
  <td className="py-3.5 px-3 font-tabular-data whitespace-nowrap">
    <div className="inline-flex items-center gap-1 font-bold text-status-review">
      <span className="">2</span><span className="text-on-surface-variant font-normal">dari 5</span>
    </div>
  </td>
  <td className="py-3.5 px-3 font-tabular-data text-on-surface-variant text-[12px] whitespace-nowrap">
    08:58:12 WIB
  </td>
  <td className="py-3.5 px-3">
    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-status-review-bg text-status-review font-label-xs text-label-xs font-semibold whitespace-nowrap">
      <span className="material-symbols-outlined text-[13px] animate-spin">schedule</span>
      <span className="">Menunggu Retry (Backoff dlm 01:45)</span>
    </div>
  </td>
  <td className="py-3.5 px-3 text-right whitespace-nowrap">
    <div className="inline-flex items-center gap-2 justify-end">
      <button className="px-2.5 py-1 rounded bg-primary-container hover:bg-primary text-surface font-label-xs text-label-xs font-semibold transition-colors" onClick={() => handleTriggerRetry('JOB-88421')} type="button">
        Retry Manual
      </button>
      <button className="p-1 rounded text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors" title="Lihat Stack Trace" type="button">
        <span className="material-symbols-outlined text-[18px]">terminal</span>
      </button>
    </div>
  </td>
</tr>

{/* Job 2 */}
<tr className="hover:bg-surface-container-low transition-colors bg-surface-container-lowest job-row" data-status="processing">
  <td className="py-3.5 px-3">
    <div className="flex items-center gap-1.5">
      <span className="font-mono text-xs font-bold text-on-surface bg-surface-container-low px-2 py-0.5 rounded">#JOB-88419</span>
    </div>
    <div className="font-mono text-[11px] text-on-surface-variant mt-1">Ingestion-Inaportnet-DraftSurvey</div>
  </td>
  <td className="py-3.5 px-3 max-w-xs">
    <div className="font-mono text-[12px] text-status-review font-semibold">Timeout 30000ms gateway pelabuhan</div>
    <div className="font-body-sm text-[11px] text-on-surface-variant mt-0.5 leading-normal">Koneksi TCP terputus saat streaming muatan tongkang</div>
  </td>
  <td className="py-3.5 px-3 font-tabular-data whitespace-nowrap">
    <div className="inline-flex items-center gap-1 font-bold text-on-surface">
      <span className="">3</span><span className="text-on-surface-variant font-normal">dari 5</span>
    </div>
  </td>
  <td className="py-3.5 px-3 font-tabular-data text-on-surface-variant text-[12px] whitespace-nowrap">
    08:52:40 WIB
  </td>
  <td className="py-3.5 px-3">
    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-surface-container text-on-surface font-label-xs text-label-xs font-semibold whitespace-nowrap">
      <span className="w-2 h-2 rounded-full bg-status-review animate-ping"></span>
      <span className="">Sedang Diproses Ulang</span>
    </div>
  </td>
  <td className="py-3.5 px-3 text-right whitespace-nowrap">
    <div className="inline-flex items-center gap-2 justify-end">
      <button className="px-2.5 py-1 rounded bg-surface-container-low hover:bg-surface-container text-on-surface font-label-xs text-label-xs font-medium transition-colors" type="button">
        Lihat Log Real-time
      </button>
    </div>
  </td>
</tr>

{/* Job 3 */}
<tr className="hover:bg-surface-container-low transition-colors job-row" data-status="all">
  <td className="py-3.5 px-3">
    <div className="flex items-center gap-1.5">
      <span className="font-mono text-xs font-bold text-status-verified bg-status-verified-bg px-2 py-0.5 rounded">#JOB-88390</span>
    </div>
    <div className="font-mono text-[11px] text-on-surface-variant mt-1">Integrity-DigestVerification-Payload</div>
  </td>
  <td className="py-3.5 px-3 max-w-xs">
    <div className="font-mono text-[12px] text-status-verified font-semibold">Checksum mismatch sementara (teratasi)</div>
    <div className="font-body-sm text-[11px] text-on-surface-variant mt-0.5 leading-normal">Jaringan putus saat transmisi; retry berhasil</div>
  </td>
  <td className="py-3.5 px-3 font-tabular-data whitespace-nowrap">
    <div className="inline-flex items-center gap-1 font-bold text-status-verified">
      <span className="">1</span><span className="text-on-surface-variant font-normal">dari 3</span>
    </div>
  </td>
  <td className="py-3.5 px-3 font-tabular-data text-on-surface-variant text-[12px] whitespace-nowrap">
    07:15:10 WIB
  </td>
  <td className="py-3.5 px-3">
    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-status-verified-bg text-status-verified font-label-xs text-label-xs font-semibold whitespace-nowrap">
      <span className="material-symbols-outlined text-[13px]">done_all</span>
      <span className="">Selesai (Retry Sukses 07:16)</span>
    </div>
  </td>
  <td className="py-3.5 px-3 text-right whitespace-nowrap">
    <div className="inline-flex items-center gap-2 justify-end">
      <button className="px-2.5 py-1 rounded bg-surface-container-low hover:bg-surface-container text-on-surface-variant font-label-xs text-label-xs font-medium transition-colors" type="button">
        Arsip Log
      </button>
    </div>
  </td>
</tr>

{/* Job 4: Dead-Letter Queue */}
<tr className="hover:bg-surface-container-low transition-colors bg-status-anomaly-bg/15 job-row" data-status="dlq">
  <td className="py-3.5 px-3">
    <div className="flex items-center gap-1.5">
      <span className="font-mono text-xs font-bold text-status-anomaly bg-status-anomaly-bg px-2 py-0.5 rounded">#JOB-88204</span>
    </div>
    <div className="font-mono text-[11px] text-on-surface-variant mt-1">Notification-SMS-Gateway</div>
  </td>
  <td className="py-3.5 px-3 max-w-xs">
    <div className="font-mono text-[12px] text-status-anomaly font-semibold">Kuota SMS Telemetri Eksternal Habis (402)</div>
    <div className="font-body-sm text-[11px] text-on-surface-variant mt-0.5 leading-normal">Vendor SMS gateway mengembalikan status insufficient credits</div>
  </td>
  <td className="py-3.5 px-3 font-tabular-data whitespace-nowrap">
    <div className="inline-flex items-center gap-1 font-bold text-status-anomaly">
      <span className="">5</span><span className="text-on-surface-variant font-normal">dari 5 (Maks)</span>
    </div>
  </td>
  <td className="py-3.5 px-3 font-tabular-data text-on-surface-variant text-[12px] whitespace-nowrap">
    Kemarin, 22:40 WIB
  </td>
  <td className="py-3.5 px-3">
    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-status-anomaly-bg text-status-anomaly font-label-xs text-label-xs font-semibold whitespace-nowrap">
      <span className="material-symbols-outlined text-[13px]">cancel</span>
      <span className="">Gagal Permanen (DLQ)</span>
    </div>
  </td>
  <td className="py-3.5 px-3 text-right whitespace-nowrap">
    <div className="inline-flex items-center gap-2 justify-end">
      <button className="px-2.5 py-1 rounded bg-status-anomaly text-surface hover:opacity-90 font-label-xs text-label-xs font-semibold transition-opacity" type="button">
        Eskalasi Vendor
      </button>
      <button className="px-2.5 py-1 rounded bg-surface-container-low hover:bg-surface-container text-on-surface font-label-xs text-label-xs font-medium transition-colors" type="button">
        Pulihkan Antrean
      </button>
    </div>
  </td>
</tr></tbody>
</table>
</div>
</section>
{/* 5 & 6. Incident Timeline & SysOps Access Audit Trail (Bento Split Layout) */}
<div className="grid grid-cols-1 xl:grid-cols-12 gap-space-lg">
{/* 5. Timeline Insiden Platform (7 Kolom) */}
<section className="xl:col-span-7 rounded-xl bg-bg-surface p-space-md shadow-sm flex flex-col gap-space-md">
<div className="flex items-center justify-between flex-wrap gap-2">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary-container text-[20px]">history</span>
<h2 className="font-headline-lg text-headline-lg font-semibold text-on-surface">Timeline Insiden Platform &amp; Investigasi</h2>
<span className="px-2 py-0.5 rounded bg-surface-container-high text-on-surface-variant font-label-xs text-label-xs font-medium">Data demonstrasi</span>
</div>
<span className="font-label-xs text-label-xs text-on-surface-variant">SLA Target 99.9%</span>
</div>
{/* Chronological Incident Feed */}
<div className="flex flex-col gap-space-md relative pl-2">
{/* Vertical Timeline Track */}
<div className="absolute left-[17px] top-3 bottom-3 w-0.5 bg-border-warm"></div>
{/* Incident 1: Active Incident */}
<div className="flex items-start gap-3 relative">
<div className="w-8 h-8 rounded-full bg-status-review-bg text-status-review flex items-center justify-center shrink-0 z-10 shadow-sm ring-4 ring-bg-surface">
<span className="material-symbols-outlined text-[18px]">warning</span>
</div>
<div className="flex-1 rounded-xl bg-surface-container-low p-space-md flex flex-col gap-2">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
<div className="flex items-center gap-2 flex-wrap">
<span className="font-mono text-xs font-bold text-accent-palmoil bg-surface-container px-2 py-0.5 rounded">INC-2025-004</span>
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-status-review-bg text-status-review font-label-xs text-label-xs font-semibold">
<span className="material-symbols-outlined text-[12px]">pending</span>
                  Tingkat: Perlu Perhatian • Sedang Ditangani
                </span>
</div>
<span className="font-tabular-data text-[12px] text-on-surface-variant font-medium">14 Mar 2025, 08:50 WIB (Berlangsung 25 menit)</span>
</div>
<h3 className="font-headline-sm text-headline-sm font-semibold text-on-surface">Peningkatan Latensi Ingestion Gateway KSOP Samarinda</h3>
<div className="font-body-sm text-body-sm text-on-surface-variant flex flex-col gap-1.5">
<p className=""><strong className="text-on-surface">Dampak:</strong> Penundaan ingest manifes keberangkatan kapal tongkang sekitar 8–15 menit. Tidak ada data yang hilang; antrean ditahan aman di broker Kafka lokal.</p>
<div className="rounded-lg bg-bg-surface p-2.5 font-label-xs text-label-xs text-on-surface flex items-start gap-2">
<span className="material-symbols-outlined text-[16px] text-status-verified shrink-0">build_circle</span>
<span className=""><strong className="font-semibold text-on-surface">Tindakan Mitigasi:</strong> Tim SysOps Ditjen Minerba telah mengaktifkan backoff adaptif dan berkoordinasi dengan Pusdatin Kemenhub untuk penyesuaian kuota rate-limit API pelabuhan.</span>
</div>
</div>
</div>
</div>
{/* Incident 2: Resolved Incident */}
<div className="flex items-start gap-3 relative">
<div className="w-8 h-8 rounded-full bg-status-verified-bg text-status-verified flex items-center justify-center shrink-0 z-10 shadow-sm ring-4 ring-bg-surface">
<span className="material-symbols-outlined text-[18px]">check_circle</span>
</div>
<div className="flex-1 rounded-xl bg-bg-surface p-space-md shadow-sm flex flex-col gap-2">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
<div className="flex items-center gap-2 flex-wrap">
<span className="font-mono text-xs font-bold text-on-surface-variant bg-surface-container-low px-2 py-0.5 rounded">INC-2025-003</span>
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-status-verified-bg text-status-verified font-label-xs text-label-xs font-semibold">
                  Gangguan Parsial • Terselesaikan
                </span>
</div>
<span className="font-tabular-data text-[12px] text-on-surface-variant">11 Mar 2025, 02:10 - 02:45 WIB (Durasi 35 menit)</span>
</div>
<h3 className="font-headline-sm text-headline-sm font-semibold text-on-surface">Degradasi Layanan Tanda Tangan BSrE Akibat Rotasi Kunci HSM</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">
<strong className="text-on-surface">Resolusi:</strong> Jendela pemeliharaan berkala menyebabkan penundaan stempel waktu pada 18 berkas bukti baru. Pemulihan sertifikat root CA selesai dan seluruh 18 berkas telah diantrekan ulang otomatis hingga status valid.
            </p>
</div>
</div>
{/* Incident 3: Resolved Incident */}
<div className="flex items-start gap-3 relative">
<div className="w-8 h-8 rounded-full bg-status-verified-bg text-status-verified flex items-center justify-center shrink-0 z-10 shadow-sm ring-4 ring-bg-surface">
<span className="material-symbols-outlined text-[18px]">check_circle</span>
</div>
<div className="flex-1 rounded-xl bg-bg-surface p-space-md shadow-sm flex flex-col gap-2">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
<div className="flex items-center gap-2 flex-wrap">
<span className="font-mono text-xs font-bold text-on-surface-variant bg-surface-container-low px-2 py-0.5 rounded">INC-2025-002</span>
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-status-verified-bg text-status-verified font-label-xs text-label-xs font-semibold">
                  Perlu Perhatian • Terselesaikan
                </span>
</div>
<span className="font-tabular-data text-[12px] text-on-surface-variant">04 Mar 2025, 23:15 - 23:50 WIB</span>
</div>
<h3 className="font-headline-sm text-headline-sm font-semibold text-on-surface">Kegagalan Replikasi Cold-Storage Dokumen Bukti ke Data Center Cadangan</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">
<strong className="text-on-surface">Resolusi:</strong> Terjadi penurunan throughput jalur serat optik peering antar-DC. Jalur otomatis berpindah ke sirkuit sekunder redundan; audit integritas checksum memastikan 100% konsisten tanpa korupsi berkas.
            </p>
</div>
</div>
</div>
</section>
{/* 6. Log Akses & Aktivitas Administrator (SysOps Security Audit Trail - 5 Kolom) */}
<section className="xl:col-span-5 rounded-xl bg-bg-surface p-space-md shadow-sm flex flex-col justify-between gap-space-md">
<div className="flex flex-col gap-space-sm">
<div className="flex items-center justify-between flex-wrap gap-2">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary-container text-[20px]">admin_panel_settings</span>
<h2 className="font-headline-lg text-headline-lg font-semibold text-on-surface">Aktivitas SysOps &amp; Audit Trail</h2>
</div>
<span className="px-2 py-0.5 rounded bg-surface-container-high text-on-surface-variant font-label-xs text-label-xs font-medium">Data demonstrasi</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">
          Pencatatan jejak tidak dapat diubah (immutable event feed) dari seluruh kendali hak istimewa administrator.
        </p>
{/* Access Log List */}
<div className="flex flex-col gap-2.5">
{/* Log 1: Manual Retry Trigger */}
<div className="p-2.5 rounded-lg bg-surface-container-low hover:bg-surface-container transition-colors flex flex-col gap-1">
<div className="flex items-center justify-between text-[11px]">
<span className="font-bold text-on-surface">Fajar H., S.Kom. (Admin SysOps)</span>
<span className="font-mono text-on-surface-variant">09:05 WIB</span>
</div>
<div className="font-body-sm text-[12px] text-on-surface">
              Trigger retry manual untuk batch job Inaportnet <code className="font-mono text-accent-palmoil">#JOB-88415</code>
</div>
<div className="flex items-center justify-between text-[10px] text-on-surface-variant pt-1">
<span className="font-mono">IP: 10.24.12.84 (Internal Minerba)</span>
<span className="inline-flex items-center gap-1 font-semibold text-status-verified">
<span className="material-symbols-outlined text-[12px]">verified</span> Sah (BSrE M-Token)
              </span>
</div>
</div>
{/* Log 2: Autoscaler */}
<div className="p-2.5 rounded-lg bg-surface-container-low hover:bg-surface-container transition-colors flex flex-col gap-1">
<div className="flex items-center justify-between text-[11px]">
<span className="font-bold text-on-surface">Sistem Otomatis (Autoscaler)</span>
<span className="font-mono text-on-surface-variant">08:42 WIB</span>
</div>
<div className="font-body-sm text-[12px] text-on-surface">
              Scale-out pod Ingestion Service dari 4 replika menjadi 8 replika
            </div>
<div className="flex items-center justify-between text-[10px] text-on-surface-variant pt-1">
<span className="font-mono">IP: Internal Kubernetes Cluster</span>
<span className="font-semibold text-status-verified">Berhasil</span>
</div>
</div>
{/* Log 3: Daily Hash Ledger Audit */}
<div className="p-2.5 rounded-lg bg-surface-container-low hover:bg-surface-container transition-colors flex flex-col gap-1">
<div className="flex items-center justify-between text-[11px]">
<span className="font-bold text-on-surface">Rian P., M.T. (Lead SecOps)</span>
<span className="font-mono text-on-surface-variant">07:30 WIB</span>
</div>
<div className="font-body-sm text-[12px] text-on-surface">
              Pemeriksaan integritas hash ledger harian (SHA-256 block #489.102 s/d #489.280)
            </div>
<div className="flex items-center justify-between text-[10px] text-on-surface-variant pt-1">
<span className="font-mono">IP: 10.24.12.19</span>
<span className="font-semibold text-status-verified">Valid (0 tampered block)</span>
</div>
</div>
{/* Log 4: mTLS Update */}
<div className="p-2.5 rounded-lg bg-surface-container-low hover:bg-surface-container transition-colors flex flex-col gap-1">
<div className="flex items-center justify-between text-[11px]">
<span className="font-bold text-on-surface">Otentikasi Gateway API Kemenhub</span>
<span className="font-mono text-on-surface-variant">06:12 WIB</span>
</div>
<div className="font-body-sm text-[12px] text-on-surface">
              Pembaruan sertifikat SSL/TLS mTLS simbara-hub.dephub.go.id
            </div>
<div className="flex items-center justify-between text-[10px] text-on-surface-variant pt-1">
<span className="font-mono">IP: 103.14.88.2</span>
<span className="font-semibold text-status-verified">Berhasil</span>
</div>
</div>
{/* Log 5: Suspicious Attempt Blocked */}
<div className="p-2.5 rounded-lg bg-status-anomaly-bg/30 flex flex-col gap-1">
<div className="flex items-center justify-between text-[11px]">
<span className="font-bold text-status-anomaly">Akun: admin_cadangan (Mencurigakan)</span>
<span className="font-mono text-status-anomaly">Kemarin, 21:04 WIB</span>
</div>
<div className="font-body-sm text-[12px] text-on-surface">
              Upaya login gagal 3x berturut-turut (Percobaan ditolak oleh Firewall WAF)
            </div>
<div className="flex items-center justify-between text-[10px] text-status-anomaly pt-1">
<span className="font-mono">IP: 182.253.14.99 (Eksternal)</span>
<span className="font-bold">Diblokir &amp; Dilaporkan CSIRT ESDM</span>
</div>
</div>
</div>
</div>
<div className="pt-2 flex items-center justify-between">
<span className="font-label-xs text-label-xs text-on-surface-variant">Menampilkan 5 aktivitas terbaru dari 1.840 log</span>
<button className="inline-flex items-center gap-1 text-primary-container font-label-xs text-label-xs font-semibold hover:underline" type="button">
<span className="">Buka Audit Viewer Lengkap</span>
<span className="material-symbols-outlined text-[14px]">arrow_forward</span>
</button>
</div>
</section>
</div>
{/* Toast Notification Modal for Simulated Actions */}
<div className="fixed bottom-6 right-6 z-50 transform transition-all duration-300 pointer-events-none translate-y-20 opacity-0" id="actionToast">
<div className="bg-primary text-surface px-4 py-3 rounded-xl shadow-xl flex items-center gap-3">
<span className="material-symbols-outlined text-secondary-fixed text-[20px]" id="toastIcon">check_circle</span>
<div className="flex flex-col">
<span className="font-headline-sm text-[13px] font-semibold" id="toastTitle">Sinkronisasi Berhasil</span>
<span className="font-body-sm text-[11px] text-primary-fixed-dim" id="toastMessage">Data metrik kesehatan platform diperbarui ke snapshot terbaru.</span>
</div>
</div>
</div>
</div>
{/* Inline JavaScript for Observability Dashboard Micro-Interactions */}


      {toast && (
        <div className="fixed bottom-6 right-6 z-50 bg-primary text-on-primary px-4 py-3 rounded-xl shadow-2xl flex items-center gap-3 animate-in fade-in slide-in-from-bottom-2 duration-200">
          <span className="material-symbols-outlined text-status-verified text-[22px]">info</span>
          <span className="font-body-sm font-medium">{toast}</span>
        </div>
      )}
    </div>
  );
};

export default NusaWatchPage;
