import React, { useState } from 'react';

interface Props {
  onNavigate?: (path: string) => void;
  onSelectCase?: (caseId: string) => void;
}

export const InspeksiLapanganPage: React.FC<Props> = ({ onNavigate, onSelectCase }) => {
  const [viewMode, setViewMode] = useState<'list' | 'map'>('list');
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedCaseId, setSelectedCaseId] = useState<string>("INS-2025-0214");
  const [selectedPin, setSelectedPin] = useState<string>("Jetty Mahakam Bara 02");
  const [queuePage, setQueuePage] = useState<number>(1);
  const [activeLayer, setActiveLayer] = useState<'all' | 'satellite' | 'radar' | 'concession'>('all');
  return (
    <div className="w-full">
      <div className="flex flex-col w-full">
{/* Guidance Banner: Prinsip Peluang Audit Non-Zero */}
<div className="mb-space-lg rounded-xl bg-surface-container-high/60 p-space-md shadow-sm">
<div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-space-md">
<div className="flex items-start gap-space-md">
<div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary-container text-surface">
<span className="material-symbols-outlined text-[20px]">policy</span>
</div>
<div className="flex flex-col gap-0.5">
<div className="flex items-center gap-2">
<span className="font-headline-sm text-headline-sm text-on-surface">Prinsip Peluang Audit Non-Zero (Non-Zero Audit Probability)</span>
<span className="rounded bg-primary-fixed text-on-primary-fixed px-1.5 py-0.5 font-label-xs text-label-xs font-semibold">Doktrin Tata Kelola</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant max-w-4xl">
            Perusahaan dengan band risiko rendah tetap memiliki probabilitas acak terpilih untuk inspeksi kepatuhan lapangan. Tidak ada status ‘bebas inspeksi’ permanen demi menjaga integritas tata kelola rantai pasok batu bara nasional dan kepatuhan objektif SIMBARA.
          </p>
</div>
</div>
<div className="flex items-center gap-space-sm shrink-0 self-end lg:self-center">
<span className="font-label-xs text-label-xs text-on-surface-variant">Siklus Kuartal I / 2025</span>
<button className="inline-flex items-center gap-1 rounded-lg bg-surface px-2.5 py-1.5 font-label-md text-label-md text-on-surface shadow-sm hover:bg-surface-container-low transition-colors" type="button">
<span className="material-symbols-outlined text-[16px] text-primary-container">info</span>
          Protokol Sampling
        </button>
</div>
</div>
</div>
{/* Page Header & Action Controls */}
<div className="mb-space-lg flex flex-col md:flex-row md:items-end justify-between gap-space-md">
<div className="flex flex-col gap-1">
<div className="flex flex-wrap items-center gap-2">
<span className="inline-flex items-center gap-1.5 rounded-full bg-surface-variant px-2.5 py-0.5 font-label-xs text-label-xs font-medium text-tertiary">
<span className="h-1.5 w-1.5 rounded-full bg-status-review"></span>
          Data Demonstrasi
        </span>
<span className="inline-flex items-center gap-1 rounded-full bg-secondary-container px-2.5 py-0.5 font-label-xs text-label-xs font-medium text-on-secondary-container">
<span className="material-symbols-outlined text-[13px]">location_on</span>
          Pilot Batu Bara: Kaltim &amp; Kalsel
        </span>
<span className="font-label-xs text-label-xs text-outline">Modul Terhubung SIMBARA • Ref: DIR-MINERBA-INS-2025</span>
</div>
<h1 className="font-display-md text-display-md text-on-surface tracking-tight mt-1">
        Manajemen &amp; Pelaksanaan Inspeksi Lapangan
      </h1>
<p className="font-body-md text-body-md text-on-surface-variant max-w-3xl">
        Koordinasi verifikasi fisik terpadu dan audit kepatuhan berbasis pembobotan risiko AI serta penarikan sampel acak bertingkat berkala di titik muat, jetty, dan alur perairan sungai.
      </p>
</div>
<div className="flex items-center gap-space-sm shrink-0">
<button className="inline-flex items-center gap-1.5 rounded-lg bg-surface px-space-md py-2 font-label-md text-label-md text-on-surface shadow-sm hover:bg-surface-container-low transition-colors" type="button">
<span className="material-symbols-outlined text-[18px] text-on-surface-variant">download</span>
        Ekspor Log Pemeriksaan
      </button>
<button className="inline-flex items-center gap-1.5 rounded-lg bg-primary-container px-space-md py-2 font-label-md text-label-md text-surface shadow-sm hover:bg-primary transition-colors" type="button">
<span className="material-symbols-outlined text-[18px]">add_task</span>
        Terbitkan Surat Tugas Baru
      </button>
</div>
</div>
{/* KPI Top Stats Summary: 4x Bento */}
<div className="mb-space-lg grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md">
{/* Stat 1: Total Agenda */}
<div className="rounded-xl bg-surface p-space-md shadow-sm flex flex-col justify-between">
<div className="flex items-start justify-between">
<div className="flex flex-col">
<span className="font-label-xs text-label-xs uppercase tracking-wider text-outline">Total Agenda Inspeksi</span>
<span className="font-tabular-kpi text-tabular-kpi text-on-surface mt-1">48</span>
</div>
<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-surface-container-low text-primary-container">
<span className="material-symbols-outlined text-[22px]">calendar_month</span>
</div>
</div>
<div className="mt-space-md pt-2 flex items-center justify-between text-on-surface-variant bg-surface-container-lowest rounded-lg p-2">
<span className="font-label-xs text-label-xs">Target Kuartalan: 60 Titik</span>
<span className="font-tabular-data text-tabular-data font-semibold text-primary-container">80.0% Terpenuhi</span>
</div>
</div>
{/* Stat 2: Breakdown Rute AI vs Acak */}
<div className="rounded-xl bg-surface p-space-md shadow-sm flex flex-col justify-between">
<div className="flex items-start justify-between">
<div className="flex flex-col">
<span className="font-label-xs text-label-xs uppercase tracking-wider text-outline">Distribusi Sumber Penugasan</span>
<div className="flex items-baseline gap-2 mt-1">
<span className="font-tabular-kpi text-tabular-kpi text-tertiary">34</span>
<span className="font-body-sm text-body-sm text-outline">/</span>
<span className="font-tabular-kpi text-tabular-kpi text-secondary">14</span>
</div>
</div>
<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-surface-variant text-accent-palmoil">
<span className="material-symbols-outlined text-[22px]">alt_route</span>
</div>
</div>
<div className="mt-space-md pt-1 flex items-center gap-2">
<div className="flex-1 h-2 rounded-full bg-surface-container-low overflow-hidden flex">
<div className="bg-status-review h-full" style={{width: "71%"}}></div>
<div className="bg-secondary-fixed-dim h-full" style={{width: "29%"}}></div>
</div>
</div>
<div className="mt-1 flex items-center justify-between font-label-xs text-label-xs text-on-surface-variant">
<span className="inline-flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-status-review"></span>Prioritas Risiko: 71%</span>
<span className="inline-flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-secondary"></span>Sampel Acak: 29%</span>
</div>
</div>
{/* Stat 3: Tim Lapangan Aktif */}
<div className="rounded-xl bg-surface p-space-md shadow-sm flex flex-col justify-between">
<div className="flex items-start justify-between">
<div className="flex flex-col">
<span className="font-label-xs text-label-xs uppercase tracking-wider text-outline">Kesiapan Tim Verifikasi</span>
<div className="flex items-baseline gap-2 mt-1">
<span className="font-tabular-kpi text-tabular-kpi text-on-surface">12</span>
<span className="font-label-xs text-label-xs text-on-surface-variant font-medium">Terjadwal</span>
<span className="font-tabular-kpi text-tabular-kpi text-status-review ml-2">8</span>
<span className="font-label-xs text-label-xs text-status-review font-medium">Di Lapangan</span>
</div>
</div>
<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-status-verified-bg text-status-verified">
<span className="material-symbols-outlined text-[22px]">group</span>
</div>
</div>
<div className="mt-space-md pt-2 flex items-center justify-between text-on-surface-variant bg-surface-container-lowest rounded-lg p-2">
<span className="font-label-xs text-label-xs">Kapasitas Auditor ESDM &amp; KAN</span>
<span className="font-label-xs text-label-xs font-semibold text-status-verified">Siaga Penuh (100%)</span>
</div>
</div>
{/* Stat 4: Laboratorium & Berita Acara */}
<div className="rounded-xl bg-surface p-space-md shadow-sm flex flex-col justify-between">
<div className="flex items-start justify-between">
<div className="flex flex-col">
<span className="font-label-xs text-label-xs uppercase tracking-wider text-outline">Progres Berita Acara &amp; Uji Lab</span>
<div className="flex items-baseline gap-2 mt-1">
<span className="font-tabular-kpi text-tabular-kpi text-primary-container">16</span>
<span className="font-label-xs text-label-xs text-on-surface-variant">Uji Lab</span>
<span className="font-tabular-kpi text-tabular-kpi text-on-surface ml-2">12</span>
<span className="font-label-xs text-label-xs text-status-verified font-medium">Selesai/BAP</span>
</div>
</div>
<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-surface-container-low text-tertiary">
<span className="material-symbols-outlined text-[22px]">science</span>
</div>
</div>
<div className="mt-space-md pt-2 flex items-center justify-between text-on-surface-variant bg-surface-container-lowest rounded-lg p-2">
<span className="font-label-xs text-label-xs">Rerata Durasi Uji Mutu</span>
<span className="font-tabular-data text-tabular-data font-semibold text-on-surface">3.8 Hari Kerja</span>
</div>
</div>
</div>

{/* 3 PILAR PROTOKOL VERIFIKASI FISIK INDEPENDEN */}
<div className="mb-space-lg rounded-xl bg-surface-container-lowest p-space-md shadow-sm border border-border-warm/60">
  <div className="flex items-center justify-between pb-2 mb-space-sm border-b border-border-subtle">
    <div className="flex items-center gap-2">
      <span className="material-symbols-outlined text-primary text-[22px]">policy</span>
      <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
        3 Pilar Protokol Verifikasi Fisik Independen (Physical Ground-Truth Verification)
      </h3>
    </div>
    <span className="font-label-xs text-label-xs px-2 py-0.5 rounded bg-surface-container text-on-surface-variant font-mono">
      ISO 17020 &amp; ISO 17025
    </span>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">
    {/* Pilar 1 */}
    <div className="p-3.5 rounded-lg bg-surface border border-border-subtle flex flex-col justify-between">
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2 text-primary font-bold">
          <span className="material-symbols-outlined text-[18px]">group_work</span>
          <span className="font-label-md text-label-md">1. Pemeriksaan Lintas Instansi</span>
        </div>
        <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 leading-snug">
          Penyelenggaraan inspeksi gabungan terpadu antara Inspektur Tambang Ditjen Minerba ESDM, Petugas Pabean Ditjen Bea &amp; Cukai, dan Syahbandar Ditjen Hubla di kolam labuh dan jetty muat.
        </p>
      </div>
      <div className="mt-2 pt-2 border-t border-border-subtle flex items-center justify-between text-label-xs font-label-xs text-on-surface-variant">
        <span>Kewenangan: Tim Terpadu</span>
        <span className="text-status-verified font-semibold">SK Bersama</span>
      </div>
    </div>

    {/* Pilar 2 */}
    <div className="p-3.5 rounded-lg bg-surface border border-border-subtle flex flex-col justify-between">
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2 text-secondary font-bold">
          <span className="material-symbols-outlined text-[18px]">biotech</span>
          <span className="font-label-md text-label-md">2. Pengujian Lab Terakreditasi &amp; Berantai Segel</span>
        </div>
        <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 leading-snug">
          Penarikan sampel tersaksi (witnessed sampling), pengemasan segel bersandi (tamper-evident seals), rotasi laboratorium berkala untuk mencegah kolusi, serta audit konsistensi antar-lab secara periodik.
        </p>
      </div>
      <div className="mt-2 pt-2 border-t border-border-subtle flex items-center justify-between text-label-xs font-label-xs text-on-surface-variant">
        <span>Akreditasi: KAN LP-142</span>
        <span className="text-status-verified font-semibold">Rantai Dingin/Segel</span>
      </div>
    </div>

    {/* Pilar 3 */}
    <div className="p-3.5 rounded-lg bg-surface border border-border-subtle flex flex-col justify-between">
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2 text-status-review font-bold">
          <span className="material-symbols-outlined text-[18px]">shuffle</span>
          <span className="font-label-md text-label-md">3. Alokasi Inspeksi: Anomali vs Acak</span>
        </div>
        <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 leading-snug">
          Kombinasi 70% inspeksi berbasis prioritas risiko AI dan 30% kuota uji petik acak independen (random sampling quota) untuk menguji akurasi AI, menghindari titik buta (blind spots), dan menjamin data kalibrasi ground-truth yang netral.
        </p>
      </div>
      <div className="mt-2 pt-2 border-t border-border-subtle flex items-center justify-between text-label-xs font-label-xs text-on-surface-variant">
        <span>Alokasi Kuota: 70% / 30%</span>
        <span className="text-status-verified font-semibold">Anti-Bias AI</span>
      </div>
    </div>
  </div>
</div>

{/* Interactive Controls: Toggle View, Search, & Filters */}
<div className="mb-space-md rounded-xl bg-surface p-space-md shadow-sm flex flex-col gap-space-md">
<div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-space-md">
{/* Search Box */}
<div className="relative flex-1">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[18px] text-outline">search</span>
<input className="w-full rounded-lg bg-surface-container-low pl-9 pr-4 py-2 font-body-sm text-body-sm text-on-surface placeholder:text-outline focus:outline-none focus:bg-surface-container-lowest shadow-inner" placeholder="Cari ID Inspeksi (mis. INS-2025-0214), Nama Perusahaan/IUP, Jetty Muara Jawa, atau Ref Kasus Triase..." type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
</div>
{/* View Switcher */}
<div className="flex items-center gap-1 rounded-lg bg-surface-container-low p-1 self-start lg:self-center shrink-0">
<button onClick={() => setViewMode('list')} className={`inline-flex items-center gap-1.5 rounded px-3 py-1.5 font-label-md text-label-md transition-all cursor-pointer ${viewMode === 'list' ? 'bg-surface text-on-surface font-semibold shadow-sm' : 'text-on-surface-variant hover:text-on-surface'}`} id="btn-view-list" type="button">
<span className="material-symbols-outlined text-[16px]">view_list</span>
          Daftar Antrean
        </button>
<button onClick={() => setViewMode('map')} className={`inline-flex items-center gap-1.5 rounded px-3 py-1.5 font-label-md text-label-md transition-all cursor-pointer ${viewMode === 'map' ? 'bg-surface text-on-surface font-semibold shadow-sm' : 'text-on-surface-variant hover:text-on-surface'}`} id="btn-view-map" type="button">
<span className="material-symbols-outlined text-[16px]">map</span>
          Peta Titik Muat / Jetty
        </button>
</div>
</div>
{/* Filter Multi-Select Dropdowns */}
<div className="flex flex-wrap items-center gap-space-sm pt-2">
{/* Wilayah */}
<div className="flex items-center gap-1 rounded-lg bg-surface-container-low px-2.5 py-1 text-on-surface font-label-xs text-label-xs">
<span className="text-outline">Wilayah:</span>
<select className="bg-transparent font-semibold text-on-surface cursor-pointer focus:outline-none py-0.5">
<option>Semua Wilayah</option>
<option>Kutai Kartanegara (Kaltim)</option>
<option>Berau (Kaltim)</option>
<option>Tanah Bumbu (Kalsel)</option>
<option>Paser (Kaltim)</option>
</select>
</div>
{/* Rute Penugasan */}
<div className="flex items-center gap-1 rounded-lg bg-surface-container-low px-2.5 py-1 text-on-surface font-label-xs text-label-xs">
<span className="text-outline">Rute Pemilihan:</span>
<select className="bg-transparent font-semibold text-on-surface cursor-pointer focus:outline-none py-0.5">
<option>Semua Rute</option>
<option>Prioritas Risiko AI (Pemicu Anomali)</option>
<option>Sampel Acak Berkala (Non-Zero)</option>
</select>
</div>
{/* Band Risiko */}
<div className="flex items-center gap-1 rounded-lg bg-surface-container-low px-2.5 py-1 text-on-surface font-label-xs text-label-xs">
<span className="text-outline">Tingkat Risiko:</span>
<select className="bg-transparent font-semibold text-on-surface cursor-pointer focus:outline-none py-0.5">
<option>Semua Tingkat</option>
<option>Tinggi (&gt;75)</option>
<option>Sedang (40-74)</option>
<option>Rendah (&lt;40 - Non-Zero Audit)</option>
</select>
</div>
{/* Status Lapangan */}
<div className="flex items-center gap-1 rounded-lg bg-surface-container-low px-2.5 py-1 text-on-surface font-label-xs text-label-xs">
<span className="text-outline">Status:</span>
<select className="bg-transparent font-semibold text-on-surface cursor-pointer focus:outline-none py-0.5">
<option>Semua Status</option>
<option>Sedang Berlangsung (8)</option>
<option>Terjadwal (12)</option>
<option>Menunggu Uji Lab (16)</option>
<option>Selesai &amp; BAP (12)</option>
</select>
</div>
<button className="ml-auto inline-flex items-center gap-1 font-label-xs text-label-xs text-outline hover:text-on-surface transition-colors" type="button">
<span className="material-symbols-outlined text-[15px]">filter_alt_off</span>
        Reset Filter
      </button>
</div>
</div>

{/* ViewMode Segmented View: Expanded GIS Map Component */}
{viewMode === 'map' && (
  <div className="mb-space-lg rounded-xl bg-surface p-space-md shadow-sm overflow-hidden flex flex-col gap-space-md border border-border-warm/60">
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm pb-2 border-b border-border-warm/40">
      <div className="flex items-center gap-2">
        <span className="material-symbols-outlined text-[22px] text-primary">map</span>
        <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface">Peta GIS Titik Muat &amp; Dermaga Pelabuhan</h3>
        <span className="px-2 py-0.5 rounded bg-secondary-container text-on-secondary-container font-label-xs text-label-xs font-semibold">5 Titik Terverifikasi</span>
      </div>
      <div className="flex items-center gap-2 flex-wrap">
        <span className="font-label-xs text-on-surface-variant font-medium">Layer GIS:</span>
        <div className="inline-flex rounded-lg bg-surface-container-low p-1 border border-border-warm/40">
          <button
            onClick={() => setActiveLayer('all')}
            className={`px-2.5 py-1 rounded text-label-xs font-semibold cursor-pointer transition-all ${activeLayer === 'all' ? 'bg-primary text-on-primary shadow-xs' : 'text-on-surface-variant hover:text-on-surface'}`}
            type="button"
          >
            Semua Layer
          </button>
          <button
            onClick={() => setActiveLayer('satellite')}
            className={`px-2.5 py-1 rounded text-label-xs font-semibold cursor-pointer transition-all ${activeLayer === 'satellite' ? 'bg-primary text-on-primary shadow-xs' : 'text-on-surface-variant hover:text-on-surface'}`}
            type="button"
          >
            Citra Sentinel
          </button>
          <button
            onClick={() => setActiveLayer('concession')}
            className={`px-2.5 py-1 rounded text-label-xs font-semibold cursor-pointer transition-all ${activeLayer === 'concession' ? 'bg-primary text-on-primary shadow-xs' : 'text-on-surface-variant hover:text-on-surface'}`}
            type="button"
          >
            Poligon IUP
          </button>
        </div>
      </div>
    </div>
    
    <div className="relative w-full h-80 rounded-xl bg-surface-container-highest overflow-hidden flex items-center justify-center border border-border-warm/60 shadow-inner">
      <div className="absolute inset-0 bg-cover bg-center opacity-90" style={{ backgroundImage: "radial-gradient(#304332 1px, transparent 1px), radial-gradient(#203322 1px, #16241a 1px)", backgroundSize: "24px 24px" }}></div>
      <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/90 via-transparent to-inverse-surface/40 pointer-events-none"></div>

      <div className="absolute inset-0 opacity-30 pointer-events-none flex flex-col justify-between p-4 font-mono text-[10px] text-surface">
        <div className="flex justify-between"><span>00°45'S / 117°05'E</span><span>Samarinda &amp; Mahakam Basin</span><span>00°45'S / 117°35'E</span></div>
        <div className="flex justify-between"><span>01°15'S / 117°05'E</span><span>Kutai Kartanegara Offshore</span><span>01°15'S / 117°35'E</span></div>
      </div>

      <div
        onClick={() => { setSelectedPin("Jetty PT MBE 02"); setSelectedCaseId("INS-2025-0214"); }}
        className={`absolute top-1/2 left-2/5 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center cursor-pointer transition-transform duration-200 z-20 ${selectedPin === "Jetty PT MBE 02" ? "scale-110" : "hover:scale-105"}`}
      >
        <div className="relative flex items-center justify-center">
          <span className="animate-ping absolute inline-flex h-8 w-8 rounded-full bg-status-review opacity-75"></span>
          <div className="relative flex h-8 w-8 items-center justify-center rounded-full bg-status-review text-surface shadow-lg border-2 border-surface">
            <span className="material-symbols-outlined text-[18px]">location_on</span>
          </div>
        </div>
        <div className="mt-1 rounded-md bg-inverse-surface/95 px-2.5 py-1 text-center shadow-md border border-border-warm/30">
          <span className="block font-label-xs text-label-xs text-surface font-bold">Jetty PT MBE 02 (Aktif)</span>
          <span className="block font-mono text-[10px] text-surface-variant">-0.612441, 117.291802</span>
        </div>
      </div>

      <div
        onClick={() => { setSelectedPin("Berau Suaran"); setSelectedCaseId("INS-2025-0215"); }}
        className={`absolute top-1/4 right-1/4 flex flex-col items-center cursor-pointer transition-transform duration-200 z-20 ${selectedPin === "Berau Suaran" ? "scale-110" : "hover:scale-105"}`}
      >
        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-secondary text-surface shadow-md border-2 border-surface">
          <span className="material-symbols-outlined text-[15px]">shuffle</span>
        </div>
        <div className="mt-1 rounded bg-inverse-surface/90 px-2 py-0.5 text-center">
          <span className="block font-label-xs text-[11px] text-surface font-semibold">Berau Suaran</span>
          <span className="block font-mono text-[9px] text-surface-variant">2.124550, 117.481900</span>
        </div>
      </div>

      <div
        onClick={() => { setSelectedPin("Tanah Bumbu"); setSelectedCaseId("INS-2025-0216"); }}
        className={`absolute bottom-6 left-1/4 flex flex-col items-center cursor-pointer transition-transform duration-200 z-20 ${selectedPin === "Tanah Bumbu" ? "scale-110" : "hover:scale-105"}`}
      >
        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-status-anomaly text-surface shadow-md border-2 border-surface">
          <span className="material-symbols-outlined text-[15px]">near_me</span>
        </div>
        <div className="mt-1 rounded bg-inverse-surface/90 px-2 py-0.5 text-center">
          <span className="block font-label-xs text-[11px] text-surface font-semibold">Tanah Bumbu Satui</span>
          <span className="block font-mono text-[9px] text-surface-variant">-3.741020, 115.351000</span>
        </div>
      </div>

      <div
        onClick={() => { setSelectedPin("Paser Teluk Adang"); setSelectedCaseId("INS-2025-0217"); }}
        className={`absolute bottom-12 right-1/3 flex flex-col items-center cursor-pointer transition-transform duration-200 z-20 ${selectedPin === "Paser Teluk Adang" ? "scale-110" : "hover:scale-105"}`}
      >
        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-status-verified text-surface shadow-md border border-surface">
          <span className="material-symbols-outlined text-[14px]">check</span>
        </div>
        <div className="mt-1 rounded bg-inverse-surface/85 px-1.5 py-0.5 text-center">
          <span className="block font-label-xs text-[10px] text-surface font-medium">Paser Adang</span>
        </div>
      </div>

      <div className="absolute bottom-3 left-3 bg-surface/95 backdrop-blur-sm p-2 rounded-lg shadow-md border border-border-warm/60 flex items-center gap-3 font-label-xs text-label-xs text-on-surface">
        <span className="flex items-center gap-1 font-semibold text-primary"><span className="material-symbols-outlined text-[16px]">pin_drop</span> Titik Terpilih: {selectedPin}</span>
        <span className="text-on-surface-variant">•</span>
        <span className="font-mono text-on-surface-variant">ID: {selectedCaseId}</span>
        <button
          onClick={() => { onSelectCase?.('NM-2025-0891'); onNavigate?.('detail-kasus'); }}
          className="text-primary hover:underline font-semibold ml-2 cursor-pointer"
          type="button"
        >
          Buka Berkas
        </button>
      </div>
    </div>
  </div>
)}

{/* Main Asymmetric Workspace Grid: Queue List (Left 5 cols) & Comprehensive Detail (Right 7 cols) */}
<div className="grid grid-cols-1 xl:grid-cols-12 gap-space-lg items-start">
{/* LEFT COLUMN: Inspection Queue List & Mini-Map (5 Columns) */}
<div className="xl:col-span-5 flex flex-col gap-space-md">
{/* Mini-Map Regional Overview */}
<div className="rounded-xl bg-surface p-space-md shadow-sm overflow-hidden flex flex-col gap-space-sm">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[18px] text-primary-container">near_me</span>
<span className="font-headline-sm text-headline-sm text-on-surface">Sebaran Spasial Titik Inspeksi</span>
</div>
<span className="font-label-xs text-label-xs text-outline">Koridor Mahakam &amp; Pesisir</span>
</div>
{/* Stylized Visual Map Container with Live Coordinates */}
<div className="relative w-full h-44 rounded-lg bg-surface-container-highest overflow-hidden flex items-center justify-center">
<div className="absolute inset-0 bg-cover bg-center opacity-85" data-location="Kutai Kartanegara, East Kalimantan, Indonesia"></div>
<div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/80 via-inverse-surface/30 to-transparent"></div>
{/* Active Marker 1: Muara Jawa PT MBE 02 (Selected) */}
<div className="absolute top-1/2 left-2/5 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center group cursor-pointer z-20">
<div className="relative flex items-center justify-center">
<span className="animate-ping absolute inline-flex h-6 w-6 rounded-full bg-status-review opacity-75"></span>
<div className="relative flex h-7 w-7 items-center justify-center rounded-full bg-status-review text-surface shadow-md">
<span className="material-symbols-outlined text-[16px]">location_on</span>
</div>
</div>
<div className="mt-1 rounded bg-inverse-surface/95 px-2 py-0.5 text-center shadow-md">
<span className="block font-label-xs text-label-xs text-surface font-semibold">Jetty PT MBE 02</span>
<span className="block font-tabular-data text-[10px] text-surface-variant font-mono">-0.612441, 117.291802</span>
</div>
</div>
{/* Pin 2: Random Sampling (Berau Coal) */}
<div className="absolute top-1/4 right-1/4 flex flex-col items-center cursor-pointer opacity-90 hover:opacity-100 transition-opacity">
<div className="flex h-5 w-5 items-center justify-center rounded-full bg-secondary-fixed text-on-secondary-fixed shadow">
<span className="material-symbols-outlined text-[13px]">shuffle</span>
</div>
<span className="mt-0.5 font-label-xs text-[10px] text-surface font-medium bg-inverse-surface/75 px-1 rounded">Berau Suaran</span>
</div>
{/* Pin 3: Prioritas Risiko (Tanah Bumbu) */}
<div className="absolute bottom-4 left-1/4 flex flex-col items-center cursor-pointer opacity-85 hover:opacity-100 transition-opacity">
<div className="flex h-5 w-5 items-center justify-center rounded-full bg-status-review text-surface shadow">
<span className="material-symbols-outlined text-[13px]">warning</span>
</div>
<span className="mt-0.5 font-label-xs text-[10px] text-surface font-medium bg-inverse-surface/75 px-1 rounded">Tanah Bumbu</span>
</div>
{/* Map Legend Bar */}
<div className="absolute bottom-2 right-2 flex items-center gap-2 rounded bg-surface/90 backdrop-blur px-2 py-1 shadow-sm font-label-xs text-[10px] text-on-surface">
<span className="inline-flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-status-review"></span>Prioritas AI</span>
<span className="inline-flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-secondary-fixed"></span>Sampel Acak</span>
</div>
</div>
</div>
{/* Queue List Card */}
<div className="rounded-xl bg-surface p-space-md shadow-sm flex flex-col gap-space-sm">
<div className="flex items-center justify-between pb-2">
<div className="flex items-center gap-2">
<span className="font-headline-sm text-headline-sm text-on-surface">Daftar Antrean Kasus</span>
<span className="rounded-full bg-surface-container-low px-2 py-0.5 font-label-xs text-label-xs text-on-surface-variant font-semibold">5 dari 48</span>
</div>
<span className="font-label-xs text-label-xs text-outline">Diurutkan: Prioritas &amp; Jadwal</span>
</div>
<div className="flex flex-col gap-space-sm">
{/* ITEM 1 (ACTIVE / SELECTED): INS-2025-0214 */}
<div className="rounded-lg bg-surface-container-low p-space-md shadow-sm transition-all cursor-pointer">
<div className="flex items-start justify-between gap-2 mb-1.5">
<div className="flex items-center gap-2">
<span className="font-tabular-data text-tabular-data font-bold text-on-surface">INS-2025-0214</span>
<span className="inline-flex items-center gap-1 rounded bg-status-review-bg px-1.5 py-0.5 font-label-xs text-label-xs font-semibold text-status-review">
<span className="material-symbols-outlined text-[13px]">target</span>
                  PRIORITAS RISIKO
                </span>
</div>
<span className="inline-flex items-center gap-1 rounded-full bg-status-review/15 px-2 py-0.5 font-label-xs text-label-xs font-semibold text-status-review">
<span className="h-1.5 w-1.5 rounded-full bg-status-review animate-pulse"></span>
                Berlangsung
              </span>
</div>
<div className="font-label-md text-label-md font-semibold text-on-surface">PT Mahakam Bara Energi</div>
<div className="font-label-xs text-label-xs text-on-surface-variant mt-0.5">IUP-OP: 540/012/IUP-OP/2021 • Jetty PT MBE 02 Muara Jawa</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-2 line-clamp-2">
              Verifikasi fisik kalibrasi timbangan belt conveyor BW-03 &amp; konfrontasi saksi pemindahan muatan tongkang (topping-off) Sungai Mahakam.
            </p>
<div className="mt-space-sm pt-2 flex items-center justify-between font-label-xs text-label-xs text-on-surface-variant">
<div className="flex items-center gap-1">
<span className="material-symbols-outlined text-[14px] text-status-anomaly">warning</span>
<span className="">Skor Risiko: <strong className="text-status-anomaly font-semibold">88/100 (Tinggi)</strong></span>
</div>
<span className="font-tabular-data text-tabular-data">27 Feb 2025 • 08:30 WITA</span>
</div>
</div>
{/* ITEM 2: INS-2025-0215 (Sampel Acak - Band Rendah) */}
<div className="rounded-lg bg-surface p-space-md shadow-sm hover:bg-surface-container-lowest transition-all cursor-pointer">
<div className="flex items-start justify-between gap-2 mb-1.5">
<div className="flex items-center gap-2">
<span className="font-tabular-data text-tabular-data font-bold text-on-surface">INS-2025-0215</span>
<span className="inline-flex items-center gap-1 rounded bg-secondary-container/60 px-1.5 py-0.5 font-label-xs text-label-xs font-semibold text-on-secondary-container">
<span className="material-symbols-outlined text-[13px]">shuffle</span>
                  SAMPEL ACAK
                </span>
</div>
<span className="inline-flex items-center rounded-full bg-surface-container-high px-2 py-0.5 font-label-xs text-label-xs font-semibold text-on-surface-variant">
                Terjadwal
              </span>
</div>
<div className="font-label-md text-label-md font-semibold text-on-surface">PT Berau Coal Nusantara</div>
<div className="font-label-xs text-label-xs text-on-surface-variant mt-0.5">IUP-OP: 503/008/IUP-OP/2019 • Terminal Khusus Suaran, Berau</div>
<div className="mt-1.5 rounded bg-surface-container-lowest p-2 font-label-xs text-label-xs text-secondary">
<span className="font-semibold">Audit Non-Zero:</span> Probabilitas acak 8,4% terpilih. Verifikasi kepatuhan rutin kalibrasi &amp; draft survey tanpa indikasi anomali.
            </div>
<div className="mt-space-sm pt-2 flex items-center justify-between font-label-xs text-label-xs text-on-surface-variant">
<div className="flex items-center gap-1">
<span className="material-symbols-outlined text-[14px] text-status-verified">verified</span>
<span className="">Skor Risiko: <strong className="text-status-verified font-semibold">22/100 (Rendah)</strong></span>
</div>
<span className="font-tabular-data text-tabular-data">28 Feb 2025 • 09:00 WITA</span>
</div>
</div>
{/* ITEM 3: INS-2025-0212 (Prioritas Risiko - Menunggu Uji Lab) */}
<div className="rounded-lg bg-surface p-space-md shadow-sm hover:bg-surface-container-lowest transition-all cursor-pointer">
<div className="flex items-start justify-between gap-2 mb-1.5">
<div className="flex items-center gap-2">
<span className="font-tabular-data text-tabular-data font-bold text-on-surface">INS-2025-0212</span>
<span className="inline-flex items-center gap-1 rounded bg-status-review-bg px-1.5 py-0.5 font-label-xs text-label-xs font-semibold text-status-review">
<span className="material-symbols-outlined text-[13px]">target</span>
                  PRIORITAS RISIKO
                </span>
</div>
<span className="inline-flex items-center rounded-full bg-surface-container px-2 py-0.5 font-label-xs text-label-xs font-semibold text-tertiary">
                Menunggu Uji Lab
              </span>
</div>
<div className="font-label-md text-label-md font-semibold text-on-surface">PT Borneo Paser Mandiri</div>
<div className="font-label-xs text-label-xs text-on-surface-variant mt-0.5">IUP-OP: 541/112/IUP-OP/2022 • Jetty Teluk Adang, Paser</div>
<div className="mt-space-sm pt-2 flex items-center justify-between font-label-xs text-label-xs text-on-surface-variant">
<div className="flex items-center gap-1">
<span className="material-symbols-outlined text-[14px] text-status-review">warning</span>
<span className="">Skor Risiko: <strong className="text-status-review font-semibold">74/100 (Sedang)</strong></span>
</div>
<span className="font-tabular-data text-tabular-data">25 Feb 2025 • Selesai Petik</span>
</div>
</div>
{/* ITEM 4: INS-2025-0209 (Prioritas Risiko - Selesai & BAP) */}
<div className="rounded-lg bg-surface p-space-md shadow-sm hover:bg-surface-container-lowest transition-all cursor-pointer">
<div className="flex items-start justify-between gap-2 mb-1.5">
<div className="flex items-center gap-2">
<span className="font-tabular-data text-tabular-data font-bold text-on-surface">INS-2025-0209</span>
<span className="inline-flex items-center gap-1 rounded bg-status-review-bg px-1.5 py-0.5 font-label-xs text-label-xs font-semibold text-status-review">
<span className="material-symbols-outlined text-[13px]">target</span>
                  PRIORITAS RISIKO
                </span>
</div>
<span className="inline-flex items-center rounded-full bg-status-verified-bg px-2 py-0.5 font-label-xs text-label-xs font-semibold text-status-verified">
                BAP Selesai
              </span>
</div>
<div className="font-label-md text-label-md font-semibold text-on-surface">PT Kalsel Prima Coalindo</div>
<div className="font-label-xs text-label-xs text-on-surface-variant mt-0.5">IUP-OP: 504/044/IUP-OP/2020 • Pelabuhan Satui, Tanah Bumbu</div>
<div className="mt-space-sm pt-2 flex items-center justify-between font-label-xs text-label-xs text-on-surface-variant">
<div className="flex items-center gap-1">
<span className="material-symbols-outlined text-[14px] text-status-review">verified</span>
<span className="">Deviasi: <strong className="text-status-verified font-semibold">+1,2% (Dalam Toleransi)</strong></span>
</div>
<span className="font-tabular-data text-tabular-data">22 Feb 2025 • Arsip Digital</span>
</div>
</div>
{/* ITEM 5: INS-2025-0218 (Sampel Acak - Terjadwal) */}
<div className="rounded-lg bg-surface p-space-md shadow-sm hover:bg-surface-container-lowest transition-all cursor-pointer">
<div className="flex items-start justify-between gap-2 mb-1.5">
<div className="flex items-center gap-2">
<span className="font-tabular-data text-tabular-data font-bold text-on-surface">INS-2025-0218</span>
<span className="inline-flex items-center gap-1 rounded bg-secondary-container/60 px-1.5 py-0.5 font-label-xs text-label-xs font-semibold text-on-secondary-container">
<span className="material-symbols-outlined text-[13px]">shuffle</span>
                  SAMPEL ACAK
                </span>
</div>
<span className="inline-flex items-center rounded-full bg-surface-container-high px-2 py-0.5 font-label-xs text-label-xs font-semibold text-on-surface-variant">
                Terjadwal
              </span>
</div>
<div className="font-label-md text-label-md font-semibold text-on-surface">PT Kutai Sejahtera Mining</div>
<div className="font-label-xs text-label-xs text-on-surface-variant mt-0.5">IUP-OP: 540/320/IUP-OP/2021 • Jetty Loa Janan, Samarinda</div>
<div className="mt-space-sm pt-2 flex items-center justify-between font-label-xs text-label-xs text-on-surface-variant">
<div className="flex items-center gap-1">
<span className="material-symbols-outlined text-[14px] text-secondary">analytics</span>
<span className="">Skor Risiko: <strong className="text-on-surface font-semibold">31/100 (Rendah)</strong></span>
</div>
<span className="font-tabular-data text-tabular-data">01 Mar 2025 • Persiapan</span>
</div>
{/* Queue List Pagination Controls */}
<div className="flex flex-col sm:flex-row items-center justify-between gap-2 pt-3 border-t border-border-warm/60 font-label-xs text-label-xs text-on-surface-variant">
  <span>Menampilkan {(queuePage - 1) * 5 + 1}-{Math.min(queuePage * 5, 48)} dari 48 kasus antrean</span>
  <div className="flex items-center gap-1">
    <button
      onClick={() => setQueuePage((p) => Math.max(1, p - 1))}
      disabled={queuePage === 1}
      className="px-2.5 py-1 rounded bg-surface-container-low hover:bg-surface-container text-on-surface disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer transition-colors"
      type="button"
    >
      Sebelumnya
    </button>
    {[1, 2, 3, 4].map((p) => (
      <button
        key={p}
        onClick={() => setQueuePage(p)}
        className={`w-6 h-6 rounded flex items-center justify-center font-semibold cursor-pointer transition-all ${
          queuePage === p
            ? 'bg-primary-container text-on-primary shadow-xs'
            : 'bg-surface-container-low text-on-surface hover:bg-surface-container'
        }`}
        type="button"
      >
        {p}
      </button>
    ))}
    <button
      onClick={() => setQueuePage((p) => Math.min(10, p + 1))}
      disabled={queuePage === 10}
      className="px-2.5 py-1 rounded bg-surface-container-low hover:bg-surface-container text-on-surface disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer transition-colors"
      type="button"
    >
      Selanjutnya
    </button>
  </div>
</div>
</div>
</div>
</div>
{/* RIGHT COLUMN: Inspection Detail Workspace for Selected Case (7 Columns) */}
<div className="xl:col-span-7 flex flex-col gap-space-md">
{/* Case Header Card */}
<div className="rounded-xl bg-surface p-space-md shadow-sm flex flex-col gap-space-md">
{/* Top Metadata & Status */}
<div className="flex flex-col sm:flex-row sm:items-start justify-between gap-space-md pb-space-sm">
<div className="flex flex-col gap-1">
<div className="flex flex-wrap items-center gap-2">
<span className="font-tabular-kpi text-display-md text-on-surface font-bold">INS-2025-0214</span>
<span className="inline-flex items-center gap-1 rounded bg-status-review-bg px-2 py-0.5 font-label-xs text-label-xs font-semibold text-status-review">
<span className="material-symbols-outlined text-[14px]">flag</span>
                Tindak Lanjut Sanggahan NM-2025-0891
              </span>
<span className="inline-flex items-center gap-1.5 rounded-full bg-status-review/15 px-2.5 py-0.5 font-label-xs text-label-xs font-semibold text-status-review">
<span className="h-2 w-2 rounded-full bg-status-review animate-ping"></span>
                Sedang Berlangsung di Lapangan
              </span>
</div>
<div className="font-headline-lg text-headline-lg text-on-surface font-semibold mt-1">
              PT Mahakam Bara Energi
            </div>
<div className="font-body-sm text-body-sm text-on-surface-variant">
              Nomor Izin IUP-OP: <span className="font-mono text-on-surface">540/012/IUP-OP/2021</span> • Jetty PT MBE 02 &amp; Kolam Labuh Muara Berau, Kutai Kartanegara
            </div>
</div>
{/* Action Buttons Top */}
<div className="flex items-center gap-2 shrink-0">
<button className="inline-flex items-center gap-1 rounded-lg bg-surface-container-low px-3 py-1.5 font-label-md text-label-md text-on-surface hover:bg-surface-container transition-colors shadow-sm" type="button">
<span className="material-symbols-outlined text-[16px]">print</span>
              Cetak Form Lapangan
            </button>
</div>
</div>
{/* Official Assignment & Audit Route Meta */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-space-sm rounded-lg bg-surface-container-low p-space-md">
<div className="flex flex-col">
<span className="font-label-xs text-label-xs text-outline uppercase tracking-wider">Surat Tugas Resmi</span>
<span className="font-tabular-data text-body-sm font-semibold text-on-surface mt-0.5">ST-412/MB.04/DJB.T/2025</span>
<span className="font-label-xs text-[11px] text-on-surface-variant">Ditandatangani Direktur Pembinaan</span>
</div>
<div className="flex flex-col">
<span className="font-label-xs text-label-xs text-outline uppercase tracking-wider">Tim Penugasan Terpadu</span>
<span className="font-body-sm text-body-sm font-semibold text-on-surface mt-0.5">Tim Gabungan 03 Ditjen Minerba</span>
<span className="font-label-xs text-[11px] text-on-surface-variant">Inspektur Tambang + Surveyor KAN LP-024</span>
</div>
<div className="flex flex-col">
<span className="font-label-xs text-label-xs text-outline uppercase tracking-wider">Jadwal &amp; Posisi GPS</span>
<span className="font-tabular-data text-body-sm font-semibold text-on-surface mt-0.5">27 Feb 2025 • 08:30 WITA</span>
<span className="font-tabular-data text-[11px] text-primary-container font-mono">-0.612441, 117.291802</span>
</div>
</div>
{/* Audit Context Trigger Note */}
<div className="rounded-lg bg-surface-variant/40 p-space-sm flex items-start gap-space-sm">
<span className="material-symbols-outlined text-[20px] text-tertiary mt-0.5">info</span>
<div className="flex flex-col font-body-sm text-body-sm text-tertiary">
<span className="font-semibold text-on-surface">Latar Belakang Verifikasi Lapangan (Cross-Check AI Discrepancy):</span>
            Hasil sanggahan kasus NM-2025-0891 menyatakan selisih tonase 12.450 Ton disebabkan pendangkalan alur sungai Mahakam KM 42 dan deviasi timbangan conveyor. Diperlukan uji petik fisik, kalibrasi beban bergerak, dan pemeriksaan alur pelayaran bersama KSOP.
          </div>
</div>
</div>
{/* Section: Interactive Field Checklist */}
<div className="rounded-xl bg-surface p-space-md shadow-sm flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[20px] text-primary-container">checklist_rtl</span>
<span className="font-headline-sm text-headline-sm text-on-surface">Daftar Periksa Lapangan Terpadu (Field Checklist)</span>
</div>
<span className="font-label-xs text-label-xs font-semibold text-primary-container bg-surface-container-low px-2 py-0.5 rounded">4 dari 5 Butir Terpenuhi</span>
</div>
<div className="flex flex-col gap-2">
{/* Check Item 1 */}
<div className="rounded-lg bg-surface-container-lowest p-space-sm flex items-start justify-between gap-space-md shadow-sm">
<div className="flex items-start gap-space-sm">
<div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-status-verified-bg text-status-verified">
<span className="material-symbols-outlined text-[16px]">check</span>
</div>
<div className="flex flex-col">
<span className="font-label-md text-label-md font-semibold text-on-surface">1. Pemeriksaan Kalibrasi Belt Weigher BW-03 Jetty</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Pengujian beban roller sensor dan verifikasi sertifikat tera metrologi KAN.</span>
<div className="mt-1 flex items-center gap-2 font-label-xs text-[11px] text-status-verified">
<span className="material-symbols-outlined text-[14px]">verified</span>
<span className="">Sertifikat Tera KAN Valid s/d Des 2025 (Deviasi toleransi 0,18%)</span>
</div>
</div>
</div>
<span className="shrink-0 rounded bg-status-verified-bg text-status-verified font-label-xs text-label-xs px-2 py-0.5 font-semibold">Diverifikasi</span>
</div>
{/* Check Item 2 */}
<div className="rounded-lg bg-surface-container-lowest p-space-sm flex items-start justify-between gap-space-md shadow-sm">
<div className="flex items-start gap-space-sm">
<div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-status-verified-bg text-status-verified">
<span className="material-symbols-outlined text-[16px]">check</span>
</div>
<div className="flex flex-col">
<span className="font-label-md text-label-md font-semibold text-on-surface">2. Pemeriksaan Log Alur Sungai Mahakam &amp; Titik Sandar Tongkang</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Pencocokan manifest tambat dan buku harian kapal (Logbook TB. Trans Power 201).</span>
<div className="mt-1 flex items-center gap-2 font-label-xs text-[11px] text-status-verified">
<span className="material-symbols-outlined text-[14px]">verified</span>
<span className="">Sesuai BA KSOP Samarinda No. KSOP-SMD/II/2025-018</span>
</div>
</div>
</div>
<span className="shrink-0 rounded bg-status-verified-bg text-status-verified font-label-xs text-label-xs px-2 py-0.5 font-semibold">Diverifikasi</span>
</div>
{/* Check Item 3 */}
<div className="rounded-lg bg-surface-container-lowest p-space-sm flex items-start justify-between gap-space-md shadow-sm">
<div className="flex items-start gap-space-sm">
<div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-status-verified-bg text-status-verified">
<span className="material-symbols-outlined text-[16px]">check</span>
</div>
<div className="flex flex-col">
<span className="font-label-md text-label-md font-semibold text-on-surface">3. Pengambilan Sampel Batubara Komparasi di Stockpile &amp; Palka Tongkang</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Penyortiran fisik increment pada tongkang BG. Financia 301 untuk analisis lab komparatif.</span>
<div className="mt-1 flex items-center gap-2 font-label-xs text-[11px] text-status-verified">
<span className="material-symbols-outlined text-[14px]">lock</span>
<span className="">2 Kantong Sampel Bersegel Kriptografis Minerba Diterbitkan</span>
</div>
</div>
</div>
<span className="shrink-0 rounded bg-status-verified-bg text-status-verified font-label-xs text-label-xs px-2 py-0.5 font-semibold">Selesai &amp; Disegel</span>
</div>
{/* Check Item 4 */}
<div className="rounded-lg bg-surface-container-lowest p-space-sm flex items-start justify-between gap-space-md shadow-sm">
<div className="flex items-start gap-space-sm">
<div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-status-verified-bg text-status-verified">
<span className="material-symbols-outlined text-[16px]">check</span>
</div>
<div className="flex flex-col">
<span className="font-label-md text-label-md font-semibold text-on-surface">4. Uji Petik Batimetri &amp; Draft Clearance Alur Mahakam KM 42</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Pengukuran kedalaman air surut bersama tim navigasi KSOP perairan Muara Pegah.</span>
<div className="mt-1 flex items-center gap-2 font-label-xs text-[11px] text-status-verified">
<span className="material-symbols-outlined text-[14px]">water</span>
<span className="">Terkonfirmasi sedimentasi pasang surut: Draft efektif 4,2 meter (Fakta Valid)</span>
</div>
</div>
</div>
<span className="shrink-0 rounded bg-status-verified-bg text-status-verified font-label-xs text-label-xs px-2 py-0.5 font-semibold">Terkonfirmasi</span>
</div>
{/* Check Item 5: Pending Sign */}
<div className="rounded-lg bg-surface-variant/30 p-space-sm flex items-start justify-between gap-space-md shadow-sm">
<div className="flex items-start gap-space-sm">
<div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-status-review-bg text-status-review">
<span className="material-symbols-outlined text-[16px]">pending</span>
</div>
<div className="flex flex-col">
<span className="font-label-md text-label-md font-semibold text-on-surface">5. Konfrontasi Fakta dengan Nahkoda &amp; Petugas Pandu STS Muara Berau</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Klarifikasi prosedur pemecahan muatan 2 tongkang di kolam labuh transfer muat kapal induk MV. Ocean Treasure.</span>
<div className="mt-1 flex items-center gap-2 font-label-xs text-[11px] text-status-review">
<span className="material-symbols-outlined text-[14px]">hourglass_top</span>
<span className="">Sedang berlangsung perumusan naskah Berita Acara Lapangan (BAP)</span>
</div>
</div>
</div>
<span className="shrink-0 rounded bg-status-review-bg text-status-review font-label-xs text-label-xs px-2 py-0.5 font-semibold">Menunggu Tanda Tangan BA</span>
</div>
</div>
</div>
{/* Section: Sealed Sample & Chain of Custody + Witnesses (2 Columns) */}
<div className="grid grid-cols-1 lg:grid-cols-2 gap-space-md">
{/* Sealed Sample Metadata Card */}
<div className="rounded-xl bg-surface p-space-md shadow-sm flex flex-col justify-between gap-space-sm">
<div className="flex items-center justify-between pb-1">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[20px] text-tertiary">inventory_2</span>
<span className="font-headline-sm text-headline-sm text-on-surface">Sampel Pembanding Tersegel</span>
</div>
<span className="rounded bg-primary-fixed text-on-primary-fixed font-label-xs text-label-xs px-1.5 py-0.5 font-semibold">Chain of Custody</span>
</div>
<div className="flex flex-col gap-2 rounded-lg bg-surface-container-low p-space-sm">
<div className="flex justify-between items-center text-body-sm font-body-sm">
<span className="text-outline">ID Sampel Utama:</span>
<span className="font-tabular-data font-bold text-on-surface">SMP-2025-0891-SPL-A</span>
</div>
<div className="flex justify-between items-center text-body-sm font-body-sm">
<span className="text-outline">ID Sampel Pembanding:</span>
<span className="font-tabular-data font-bold text-on-surface">SMP-2025-0891-SPL-B</span>
</div>
<div className="flex justify-between items-center text-body-sm font-body-sm">
<span className="text-outline">Segel Kriptografis:</span>
<span className="font-tabular-data font-semibold text-status-verified font-mono">#SEAL-ID-99214-MINERBA</span>
</div>
<div className="flex justify-between items-center text-body-sm font-body-sm">
<span className="text-outline">Berat Sampel Kotor:</span>
<span className="font-tabular-data text-on-surface">25,4 kg (Split 4 ASTM D2013)</span>
</div>
<div className="flex justify-between items-center text-body-sm font-body-sm">
<span className="text-outline">Penyimpanan Sementara:</span>
<span className="text-on-surface text-right font-medium">Coolbox Bersegel Stasiun Samarinda</span>
</div>
</div>
<div className="flex items-center gap-2 text-on-surface-variant font-label-xs text-[11px] pt-1">
<span className="material-symbols-outlined text-[15px] text-status-verified">qr_code_2</span>
<span className="">Label Tamper-Evident dilengkapi stempel digital SHA-256 terenkripsi.</span>
</div>
</div>
{/* Witnesses List Card */}
<div className="rounded-xl bg-surface p-space-md shadow-sm flex flex-col justify-between gap-space-sm">
<div className="flex items-center justify-between pb-1">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[20px] text-primary-container">how_to_reg</span>
<span className="font-headline-sm text-headline-sm text-on-surface">Saksi Resmi Pemeriksaan</span>
</div>
<span className="rounded bg-status-verified-bg text-status-verified font-label-xs text-label-xs px-1.5 py-0.5 font-semibold">4 Terverifikasi</span>
</div>
<div className="flex flex-col gap-2">
{/* Saksi 1 */}
<div className="flex items-center justify-between rounded-lg bg-surface-container-low p-2">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-surface text-on-surface flex items-center justify-center font-label-xs text-[10px] font-bold">1</div>
<div className="flex flex-col">
<span className="font-label-md text-label-md font-semibold text-on-surface">Ir. Hardiansyah, S.T.</span>
<span className="font-label-xs text-[11px] text-outline">KTT PT Mahakam Bara Energi</span>
</div>
</div>
<span className="font-label-xs text-label-xs font-semibold text-status-verified flex items-center gap-0.5">
<span className="material-symbols-outlined text-[14px]">done_all</span> Hadir &amp; TTD
              </span>
</div>
{/* Saksi 2 */}
<div className="flex items-center justify-between rounded-lg bg-surface-container-low p-2">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-surface text-on-surface flex items-center justify-center font-label-xs text-[10px] font-bold">2</div>
<div className="flex flex-col">
<span className="font-label-md text-label-md font-semibold text-on-surface">Capt. Suryanto</span>
<span className="font-label-xs text-[11px] text-outline">Petugas Pandu KSOP Samarinda</span>
</div>
</div>
<span className="font-label-xs text-label-xs font-semibold text-status-verified flex items-center gap-0.5">
<span className="material-symbols-outlined text-[14px]">done_all</span> Hadir &amp; TTD
              </span>
</div>
{/* Saksi 3 */}
<div className="flex items-center justify-between rounded-lg bg-surface-container-low p-2">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-surface text-on-surface flex items-center justify-center font-label-xs text-[10px] font-bold">3</div>
<div className="flex flex-col">
<span className="font-label-md text-label-md font-semibold text-on-surface">Hendrawan A., S.T.</span>
<span className="font-label-xs text-[11px] text-outline">Lead Surveyor PT Carsurin Tbk</span>
</div>
</div>
<span className="font-label-xs text-label-xs font-semibold text-status-verified flex items-center gap-0.5">
<span className="material-symbols-outlined text-[14px]">done_all</span> Hadir &amp; TTD
              </span>
</div>
{/* Auditor ESDM */}
<div className="flex items-center justify-between rounded-lg bg-primary-container text-surface p-2">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-surface/20 text-surface flex items-center justify-center font-label-xs text-[10px] font-bold">4</div>
<div className="flex flex-col">
<span className="font-label-md text-label-md font-semibold text-surface">Bambang S., S.T., M.Si.</span>
<span className="font-label-xs text-[11px] text-primary-fixed-dim">Auditor Ditjen Minerba ESDM</span>
</div>
</div>
<span className="font-label-xs text-label-xs font-semibold text-secondary-fixed flex items-center gap-0.5">
<span className="material-symbols-outlined text-[14px]">edit_note</span> Penelaah
              </span>
</div>
</div>
</div>
</div>
{/* Section: Laboratory Testing Assignment & Parameters */}
<div className="rounded-xl bg-surface p-space-md shadow-sm flex flex-col gap-space-md">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-1">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[20px] text-primary-container">biotech</span>
<span className="font-headline-sm text-headline-sm text-on-surface">Penugasan Pengujian Laboratorium Independen</span>
</div>
<span className="font-label-xs text-label-xs text-on-surface-variant font-medium">Batas Uji Maks: 04 Maret 2025 (5 Hari Kerja)</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
<div className="flex flex-col gap-2 rounded-lg bg-surface-container-low p-space-sm">
<span className="font-label-xs text-label-xs text-outline uppercase tracking-wider font-semibold">Laboratorium Rujukan Ditunjuk</span>
<div className="flex items-start gap-2">
<span className="material-symbols-outlined text-[18px] text-primary-container mt-0.5">domain</span>
<div className="flex flex-col">
<span className="font-label-md text-label-md font-semibold text-on-surface">Balai Besar Pengujian Mineral dan Batubara (bbp-mbb) Bandung</span>
<span className="font-label-xs text-label-xs text-on-surface-variant">Laboratorium Penguji Utama Pemerintah • Akreditasi KAN LP-001-IDN</span>
</div>
</div>
<div className="flex items-start gap-2 pt-1">
<span className="material-symbols-outlined text-[18px] text-outline mt-0.5">apartment</span>
<div className="flex flex-col">
<span className="font-label-md text-label-md font-semibold text-on-surface">Lab Pendamping: Surveyor Samarinda LP-024-IDN</span>
<span className="font-label-xs text-label-xs text-on-surface-variant">Pengujian Proksimat Cepat (Split Sampel B)</span>
</div>
</div>
</div>
<div className="flex flex-col gap-2 rounded-lg bg-surface-container-low p-space-sm">
<span className="font-label-xs text-label-xs text-outline uppercase tracking-wider font-semibold">Parameter Analisis Wajib (ASTM)</span>
<div className="grid grid-cols-2 gap-1.5 font-label-xs text-label-xs">
<span className="rounded bg-surface px-2 py-1 text-on-surface shadow-xs">Total Moisture (TM)</span>
<span className="rounded bg-surface px-2 py-1 text-on-surface shadow-xs">Inherent Moisture (IM)</span>
<span className="rounded bg-surface px-2 py-1 text-on-surface shadow-xs">Ash Content (Abu)</span>
<span className="rounded bg-surface px-2 py-1 text-on-surface shadow-xs">Volatile Matter (VM)</span>
<span className="rounded bg-surface px-2 py-1 text-on-surface shadow-xs">Total Sulfur (TS)</span>
<span className="rounded bg-surface px-2 py-1 font-semibold text-primary-container shadow-xs">Gross Calorific Value (CV GAR)</span>
</div>
</div>
</div>
</div>
{/* Section: Visual Geotagged Evidence Uploads */}
<div className="rounded-xl bg-surface p-space-md shadow-sm flex flex-col gap-space-md">
<div className="flex items-center justify-between pb-1">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[20px] text-primary-container">photo_library</span>
<span className="font-headline-sm text-headline-sm text-on-surface">Bukti Dokumentasi Fisik Ber-Geotag &amp; Stempel Waktu</span>
</div>
<span className="font-label-xs text-label-xs text-outline">EXIF GPS Valid • Integritas Tak Terputus</span>
</div>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-space-md">
{/* Evidence 1: Calibration Test */}
<div className="group flex flex-col rounded-lg bg-surface-container-low overflow-hidden shadow-sm">
<div className="relative h-32 w-full overflow-hidden bg-surface-container">
<img className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300" data-alt="Close up photography of an industrial belt conveyor scale load cell at coal jetty terminal in East Kalimantan with certified calibration weights, bright morning equatorial sunlight, realistic governance inspection record." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDhs67S6q6utavT4MyT1ptawOxd1Pgv8OF0ZaElG3SYSqO1hSjB4NpKfVToMlxSNaMsxn79wchmU6tVajv0s17YPkFuWxiW5t_5BcJRVTNanqAJDecK61b-YOSVChHBAZDDXpr9BxwkjL3C9_tck-MVX3OxPtvflLjYvsAq9-7_CDS2pArqQpBvHEmPm9x2-fVmPjrX_Hb5kaWKKfhNB0lWoCFmqeMI_UcbeZ2yE7ds" />
<div className="absolute bottom-1 left-1 rounded bg-inverse-surface/85 px-1.5 py-0.5 font-tabular-data text-[9px] text-surface font-mono">
                LAT -0.612441 • LNG 117.291802
              </div>
</div>
<div className="p-space-sm flex flex-col gap-0.5">
<span className="font-label-md text-label-md font-semibold text-on-surface">Tera Beban Belt Conveyor</span>
<span className="font-label-xs text-[11px] text-on-surface-variant">27 Feb 2025 • 09:14 WITA</span>
<span className="mt-1 font-label-xs text-[10px] text-status-verified font-medium">Validasi Metrologi Sesuai</span>
</div>
</div>
{/* Evidence 2: Tamper Evident Seal */}
<div className="group flex flex-col rounded-lg bg-surface-container-low overflow-hidden shadow-sm">
<div className="relative h-32 w-full overflow-hidden bg-surface-container">
<img className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300" data-alt="Official inspector hands affixing a tamper-evident high security tamper seal and barcode label to a heavy-duty coal sampling bag at port facility, East Kalimantan mining pilot." src="https://lh3.googleusercontent.com/aida-public/AB6AXuA8j8vzUebmOGCxgtxrdFk3-GC9pkCAWNlJhqTznw-CTItS6O3BZA9Y9ZHVKSAoSQxiUMNWJoyDX5pXqeYZT9T8utQeqC7yR1OZmMKFvHnpbRw6wCY8A0dkW1ciptwUkrQ5yDYwF7DZxcMtM2S3cXHqJbTWtADjqSaLygjMGbbd7yWfUpG4PbMzQbBHJ3_lgyex4qMUZYOqzek3b4ZEN_nS4bm7A2TFeupzY-t0y2_r" />
<div className="absolute bottom-1 left-1 rounded bg-inverse-surface/85 px-1.5 py-0.5 font-tabular-data text-[9px] text-surface font-mono">
                #SEAL-ID-99214-MINERBA
              </div>
</div>
<div className="p-space-sm flex flex-col gap-0.5">
<span className="font-label-md text-label-md font-semibold text-on-surface">Pemasangan Segel Sampel</span>
<span className="font-label-xs text-[11px] text-on-surface-variant">27 Feb 2025 • 10:42 WITA</span>
<span className="mt-1 font-label-xs text-[10px] text-status-verified font-medium">Barcode &amp; QR Terkunci</span>
</div>
</div>
{/* Evidence 3: Joint Inspection Draft */}
<div className="group flex flex-col rounded-lg bg-surface-container-low overflow-hidden shadow-sm">
<div className="relative h-32 w-full overflow-hidden bg-surface-container">
<img className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300" data-alt="Top down photo of official Indonesian government inspection protocol documents and coal barge manifest signed by mining inspectors and harbor masters on wooden field desk." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBdCiY9Dxf8RT39aITNC4xFNDkVYnIHiCoBl1vdBJy4BrPcI_3teIrLN_CyP16Xnh9vmHlMkohQGnl4Se2fg8ZOsyMN4irOTuVoQK4upMs-Bclnhorf2lDhzk3KhsOIqrklorIFZfsN41mQeYotbWruGYlK-CxEIi4n2x-RiyZ-4HVhWvr1bZ99NhupwIRudSdtYeb1kAFDP3UZiGE80nIq9u-uxsgICIPRvSyPE5St" />
<div className="absolute top-2 right-2 rounded bg-surface/90 backdrop-blur px-1.5 py-0.5 font-label-xs text-[10px] font-semibold text-primary-container">
                PDF Draf
              </div>
<div className="absolute bottom-1 left-1 rounded bg-inverse-surface/85 px-1.5 py-0.5 font-tabular-data text-[9px] text-surface font-mono">
                BAP-INS-2025-0214-DRAFT
              </div>
</div>
<div className="p-space-sm flex flex-col gap-0.5">
<span className="font-label-md text-label-md font-semibold text-on-surface">Naskah Berita Acara (BAP)</span>
<span className="font-label-xs text-[11px] text-on-surface-variant">27 Feb 2025 • 11:20 WITA</span>
<span className="mt-1 font-label-xs text-[10px] text-status-review font-medium">Menunggu Tandatangan Akhir</span>
</div>
</div>
</div>
</div>
{/* Action & Finalization Controls Footer Bar */}
<div className="rounded-xl bg-surface p-space-md shadow-sm flex flex-col md:flex-row items-stretch md:items-center justify-between gap-space-md">
<div className="flex items-center gap-space-sm">
<span className="material-symbols-outlined text-[20px] text-status-verified">verified_user</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">
            Seluruh temuan lapangan dan rantai kustodi sampel diikat dengan stempel waktu dan tanda tangan elektronik resmi Ditjen Minerba.
          </span>
</div>
<div className="flex flex-wrap items-center gap-2 shrink-0">
<button className="inline-flex items-center gap-1.5 rounded-lg bg-surface-container-low px-3 py-2 font-label-md text-label-md text-on-surface hover:bg-surface-container transition-colors shadow-sm" type="button">
<span className="material-symbols-outlined text-[16px]">local_shipping</span>
            Kirim Sampel ke Lab Bandung
          </button>
<button className="inline-flex items-center gap-1.5 rounded-lg bg-primary-container px-4 py-2 font-label-md text-label-md text-surface hover:bg-primary transition-colors shadow-sm font-semibold" type="button">
<span className="material-symbols-outlined text-[16px]">draw</span>
            Finalisasi Berita Acara (BAP)
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

export default InspeksiLapanganPage;
