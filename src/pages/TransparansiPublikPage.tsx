import React from 'react';

interface Props {
  onNavigate?: (path: string) => void;
  onSelectCase?: (caseId: string) => void;
}

export const TransparansiPublikPage: React.FC<Props> = ({ onNavigate, onSelectCase }) => {
  return (
    <div className="w-full">
      <div className="flex flex-col w-full gap-space-lg text-on-surface">
{/* Persistensi Pemberitahuan Privasi & Keterbukaan Publik */}
<div className="rounded-xl bg-surface-container-low p-space-md shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-space-md">
<div className="flex items-start gap-space-sm max-w-4xl">
<div className="w-10 h-10 rounded-lg bg-primary-container text-surface flex items-center justify-center shrink-0 mt-0.5">
<span className="material-symbols-outlined text-[22px]">policy</span>
</div>
<div className="flex flex-col gap-0.5">
<div className="flex items-center gap-2 flex-wrap">
<span className="font-headline-sm text-headline-sm text-on-surface font-semibold tracking-tight">Portal Transparansi Publik NusaMine</span>
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-status-verified-bg text-status-verified font-label-xs text-label-xs font-semibold">
<span className="w-1.5 h-1.5 rounded-full bg-status-verified animate-pulse"></span>
            Akses Publik Terbuka
          </span>
<span className="inline-flex items-center px-2 py-0.5 rounded bg-surface-container text-on-surface-variant font-label-xs text-label-xs">
            Data Demonstrasi
          </span>
</div>
<p className="font-body-md text-body-md text-on-surface font-medium">
          Data agregat. Indikator risiko perusahaan individual tidak dipublikasikan.
        </p>
<p className="font-body-sm text-body-sm text-on-surface-variant">
          Portal ini menyajikan statistik akuntabilitas dan efektivitas tata kelola rantai pasok minerba nasional berbasis sistem SIMBARA secara berkala dan terverifikasi untuk kepentingan publik sesuai amanat UU KIP No. 14/2008.
        </p>
</div>
</div>
<div className="flex flex-row md:flex-col items-center md:items-end gap-1 shrink-0 w-full md:w-auto pt-2 md:pt-0">
<span className="font-label-xs text-label-xs text-on-surface-variant font-medium">Pembaruan Siklus:</span>
<span className="font-tabular-data text-tabular-data text-primary font-bold">14 Mar 2025 • 00:00 WIB</span>
<span className="inline-flex items-center gap-1 font-label-xs text-[10px] text-on-surface-variant/80">
<span className="material-symbols-outlined text-[13px] text-secondary">verified_user</span>
        Tervalidasi PPID Ditjen Minerba
      </span>
</div>
</div>
{/* Kontrol Filter Interaktif Agregat */}
<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col xl:flex-row items-stretch xl:items-center justify-between gap-space-md">
<div className="flex flex-wrap items-center gap-space-sm">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-[20px]">filter_list</span>
<span className="font-label-md text-label-md text-on-surface font-semibold">Saring Data Agregat:</span>
</div>
{/* Dropdown Komoditas */}
<div className="relative min-w-[200px]">
<select className="w-full appearance-none bg-surface-container-low hover:bg-surface-container transition-colors py-2 pl-3 pr-8 rounded-lg font-body-sm text-body-sm text-on-surface font-medium focus:outline-none cursor-pointer">
<option>Batu Bara (Pilot Nasional)</option>
<option disabled>Nikel (Tahap Ekspansi 2)</option>
<option disabled>Timah (Tahap Ekspansi 2)</option>
<option disabled>Bauksit &amp; Tembaga</option>
</select>
<span className="material-symbols-outlined pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-on-surface-variant text-[18px]">expand_more</span>
</div>
{/* Dropdown Wilayah Pilot */}
<div className="relative min-w-[240px]">
<select className="w-full appearance-none bg-surface-container-low hover:bg-surface-container transition-colors py-2 pl-3 pr-8 rounded-lg font-body-sm text-body-sm text-on-surface font-medium focus:outline-none cursor-pointer">
<option>Kaltim &amp; Kalsel (Wilayah Pilot Terpadu)</option>
<option>Kalimantan Timur (Semua Koridor)</option>
<option>Kalimantan Selatan (Semua Koridor)</option>
<option disabled>Sumatera Selatan (Pilot Terjadwal)</option>
</select>
<span className="material-symbols-outlined pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-on-surface-variant text-[18px]">expand_more</span>
</div>
{/* Periode Pelaporan */}
<div className="relative min-w-[190px]">
<select className="w-full appearance-none bg-surface-container-low hover:bg-surface-container transition-colors py-2 pl-3 pr-8 rounded-lg font-body-sm text-body-sm text-on-surface font-medium focus:outline-none cursor-pointer">
<option>Kuartal I 2025 (Berjalan)</option>
<option>Semester II 2024</option>
<option>Kuartal I–IV 2024 (Tahunan)</option>
</select>
<span className="material-symbols-outlined pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-on-surface-variant text-[18px]">expand_more</span>
</div>
</div>
{/* Tombol Ekspor & Akses API */}
<div className="flex items-center gap-space-sm flex-wrap xl:justify-end">
<button className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface font-label-md text-label-md transition-all shadow-sm" type="button">
<span className="material-symbols-outlined text-[18px] text-primary">download</span>
        Unduh Laporan Ringkas (.PDF Publik)
      </button>
<button className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-primary hover:bg-primary-container text-surface font-label-md text-label-md transition-all shadow-sm" type="button">
<span className="material-symbols-outlined text-[18px] text-primary-fixed">api</span>
        Kamus Data &amp; OpenAPI
      </button>
</div>
</div>
{/* 4 Kartu KPI Ringkasan Agregat Publik */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md">
{/* KPI 1 */}
<div className="bg-surface-container-lowest rounded-xl p-5 shadow-sm flex flex-col justify-between relative overflow-hidden group hover:shadow-md transition-shadow">
<div className="flex items-start justify-between mb-3">
<span className="font-body-sm text-body-sm text-on-surface-variant font-medium">Kepatuhan Rantai Pasok</span>
<span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-label-xs bg-surface-container text-on-surface-variant">Data demonstrasi</span>
</div>
<div className="flex items-baseline gap-2 mb-2">
<span className="font-tabular-kpi text-tabular-kpi text-primary">94,8%</span>
<span className="inline-flex items-center gap-0.5 text-status-verified font-tabular-data text-tabular-data font-semibold">
<span className="material-symbols-outlined text-[16px]">arrow_upward</span>+1,4% YoY
        </span>
</div>
<div className="w-full bg-surface-container-low rounded-full h-1.5 mb-3 overflow-hidden">
<div className="bg-primary h-1.5 rounded-full transition-all duration-700" style={{width: "94.8%"}}></div>
</div>
<p className="font-label-xs text-label-xs text-on-surface-variant/90 line-clamp-2">
        Persentase transaksi logistik valid dan tervalidasi tepat waktu tanpa selisih timbangan di luar batas toleransi.
      </p>
</div>
{/* KPI 2 */}
<div className="bg-surface-container-lowest rounded-xl p-5 shadow-sm flex flex-col justify-between relative overflow-hidden group hover:shadow-md transition-shadow">
<div className="flex items-start justify-between mb-3">
<span className="font-body-sm text-body-sm text-on-surface-variant font-medium">Inspeksi Lapangan Selesai</span>
<span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-label-xs bg-surface-container text-on-surface-variant">Data demonstrasi</span>
</div>
<div className="flex items-baseline gap-2 mb-2">
<span className="font-tabular-kpi text-tabular-kpi text-primary">142</span>
<span className="font-label-xs text-label-xs text-on-surface-variant">Kegiatan Fisik</span>
</div>
<div className="w-full bg-surface-container-low rounded-full h-1.5 mb-3 overflow-hidden">
<div className="bg-secondary h-1.5 rounded-full transition-all duration-700" style={{width: "78%"}}></div>
</div>
<p className="font-label-xs text-label-xs text-on-surface-variant/90 line-clamp-2">
        Kombinasi audit terukur indikasi deviasi objektif (68%) serta uji petik berkala acak (32%) oleh inspektur tambang.
      </p>
</div>
{/* KPI 3 */}
<div className="bg-surface-container-lowest rounded-xl p-5 shadow-sm flex flex-col justify-between relative overflow-hidden group hover:shadow-md transition-shadow">
<div className="flex items-start justify-between mb-3">
<span className="font-body-sm text-body-sm text-on-surface-variant font-medium">Median Durasi Tinjauan</span>
<span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-label-xs bg-surface-container text-on-surface-variant">Data demonstrasi</span>
</div>
<div className="flex items-baseline gap-2 mb-2">
<span className="font-tabular-kpi text-tabular-kpi text-on-surface">18,5</span>
<span className="font-label-md text-label-md text-on-surface-variant font-medium">Hari Kerja</span>
</div>
<div className="w-full bg-surface-container-low rounded-full h-1.5 mb-3 overflow-hidden">
<div className="bg-status-review h-1.5 rounded-full transition-all duration-700" style={{width: "61.6%"}}></div>
</div>
<p className="font-label-xs text-label-xs text-on-surface-variant/90 line-clamp-2">
        Waktu penyelesaian sanggahan dan verifikasi silang dokumen, jauh lebih cepat dari batas toleransi pilot 30 hari.
      </p>
</div>
{/* KPI 4 */}
<div className="bg-surface-container-lowest rounded-xl p-5 shadow-sm flex flex-col justify-between relative overflow-hidden group hover:shadow-md transition-shadow">
<div className="flex items-start justify-between mb-3">
<span className="font-body-sm text-body-sm text-on-surface-variant font-medium">Ketetapan Hukum Inkracht</span>
<span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-label-xs bg-surface-container text-on-surface-variant">Data demonstrasi</span>
</div>
<div className="flex items-baseline gap-2 mb-2">
<span className="font-tabular-kpi text-tabular-kpi text-tertiary">8</span>
<span className="font-label-xs text-label-xs text-status-verified font-medium">Keputusan Final</span>
</div>
<div className="w-full bg-surface-container-low rounded-full h-1.5 mb-3 overflow-hidden">
<div className="bg-tertiary-container h-1.5 rounded-full transition-all duration-700" style={{width: "100%"}}></div>
</div>
<p className="font-label-xs text-label-xs text-on-surface-variant/90 line-clamp-2">
        Tindakan koreksi penyesuaian PNBP dan standardisasi operasional yang telah berkekuatan hukum tetap (inkracht).
      </p>
</div>
</div>
{/* Visualisasi Grafik Agregat */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-md">
{/* Grafik 1: Tren Kepatuhan & Waktu Resolusi (8 Kolom) */}
<div className="lg:col-span-8 bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col justify-between">
<div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 gap-2">
<div>
<div className="flex items-center gap-2">
<span className="font-headline-sm text-headline-sm font-semibold text-on-surface">Tren Kepatuhan Pelaporan &amp; Kecepatan Resolusi</span>
<span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-label-xs bg-surface-container text-on-surface-variant">Bulan ke Bulan (6 Bulan)</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
            Tingkat validitas deklarasi pengapalan vs durasi rata-rata verifikasi sanggahan dokumen
          </p>
</div>
<div className="flex items-center gap-3 font-label-xs text-label-xs">
<span className="flex items-center gap-1.5 text-on-surface font-medium">
<span className="w-3 h-1.5 rounded bg-primary inline-block"></span> % Kepatuhan
          </span>
<span className="flex items-center gap-1.5 text-on-surface font-medium">
<span className="w-3 h-1.5 rounded bg-status-review inline-block"></span> Durasi (Hari)
          </span>
</div>
</div>
{/* Area Visualisasi Grafik SVG Interaktif Sederhana */}
<div className="w-full pt-4 pb-2">
<div className="relative h-56 w-full flex flex-col justify-between">
{/* Background Grid lines */}
<div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-20">
<div className="w-full h-px bg-outline"></div>
<div className="w-full h-px bg-outline"></div>
<div className="w-full h-px bg-outline"></div>
<div className="w-full h-px bg-outline"></div>
</div>
{/* SVG Chart */}
<svg className="w-full h-44 overflow-visible" preserveAspectRatio="none" viewBox="0 0 700 160">
{/* Shaded Area for Compliance Trend */}
<defs>
<linearGradient id="primaryAreaGrad" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stopColor="#1e3f20" stopOpacity="0.25"></stop>
<stop offset="100%" stopColor="#1e3f20" stopOpacity="0.0"></stop>
</linearGradient>
</defs>
<path d="M 30,85 L 155,75 L 285,60 L 415,50 L 545,35 L 670,25 L 670,160 L 30,160 Z" fill="url(#primaryAreaGrad)"></path>
{/* Line: % Kepatuhan (Skala 88% -> 96%) */}
<path d="M 30,85 L 155,75 L 285,60 L 415,50 L 545,35 L 670,25" fill="none" stroke="#1e3f20" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path>
{/* Line: Durasi Hari Resolusi (Skala 26 hari -> 18,5 hari) */}
<path d="M 30,30 L 155,42 L 285,55 L 415,70 L 545,85 L 670,105" fill="none" stroke="#D97706" strokeDasharray="5 4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"></path>
{/* Points: Compliance */}
<circle cx="30" cy="85" fill="#1e3f20" r="4.5"></circle>
<circle cx="155" cy="75" fill="#1e3f20" r="4.5"></circle>
<circle cx="285" cy="60" fill="#1e3f20" r="4.5"></circle>
<circle cx="415" cy="50" fill="#1e3f20" r="4.5"></circle>
<circle cx="545" cy="35" fill="#1e3f20" r="4.5"></circle>
<circle className="filter drop-shadow-sm" cx="670" cy="25" fill="#1e3f20" r="5"></circle>
{/* Points: Duration */}
<circle cx="30" cy="30" fill="#D97706" r="3.5"></circle>
<circle cx="155" cy="42" fill="#D97706" r="3.5"></circle>
<circle cx="285" cy="55" fill="#D97706" r="3.5"></circle>
<circle cx="415" cy="70" fill="#D97706" r="3.5"></circle>
<circle cx="545" cy="85" fill="#D97706" r="3.5"></circle>
<circle cx="670" cy="105" fill="#D97706" r="4"></circle>
</svg>
{/* Label Sumbu X (Bulan) */}
<div className="flex items-center justify-between text-on-surface-variant font-tabular-data text-[12px] px-3 pt-2">
<div className="flex flex-col items-center">
<span className="">Okt 2024</span>
<span className="text-[10px] text-primary font-medium">91,2% • 25h</span>
</div>
<div className="flex flex-col items-center">
<span className="">Nov 2024</span>
<span className="text-[10px] text-primary font-medium">92,0% • 23h</span>
</div>
<div className="flex flex-col items-center">
<span className="">Des 2024</span>
<span className="text-[10px] text-primary font-medium">93,1% • 21h</span>
</div>
<div className="flex flex-col items-center">
<span className="">Jan 2025</span>
<span className="text-[10px] text-primary font-medium">93,8% • 20h</span>
</div>
<div className="flex flex-col items-center">
<span className="">Feb 2025</span>
<span className="text-[10px] text-primary font-medium">94,4% • 19h</span>
</div>
<div className="flex flex-col items-center">
<span className="font-bold text-on-surface">Mar 2025</span>
<span className="text-[10px] text-primary font-bold">94,8% • 18,5h</span>
</div>
</div>
</div>
</div>
<div className="p-3 bg-surface-container-low rounded-lg mt-2 flex items-center justify-between gap-3 text-on-surface-variant font-label-xs text-label-xs">
<span className="flex items-center gap-1.5">
<span className="material-symbols-outlined text-[16px] text-secondary">trending_up</span>
          Kepatuhan naik secara konsisten seiring adopsi otomasi timbangan pelabuhan (draft survey digital).
        </span>
<span className="text-status-neutral font-mono">Sampling: 1.840 Berkas Pengapalan</span>
</div>
</div>
{/* Grafik 2: Komposisi Hasil Tata Kelola Nasional (4 Kolom) */}
<div className="lg:col-span-4 bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col justify-between">
<div>
<div className="flex items-center justify-between pb-1">
<span className="font-headline-sm text-headline-sm font-semibold text-on-surface">Distribusi Tindak Lanjut</span>
<span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-label-xs bg-surface-container text-on-surface-variant">Kuartal Berjalan</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-4">
          Status penyelesaian audit dan verifikasi data nasional
        </p>
{/* Donut Visual SVG */}
<div className="flex items-center justify-center my-2 relative">
<svg className="w-36 h-36 -rotate-90" viewBox="0 0 100 100">
{/* Background circle */}
<circle cx="50" cy="50" fill="transparent" r="40" stroke="#EDE1D2" strokeWidth="12"></circle>
{/* Segment 1: Rekonsiliasi Klir 72% (perimeter = 251.2, 72% = 180.86) */}
<circle cx="50" cy="50" fill="transparent" r="40" stroke="#1e3f20" strokeDasharray="180.86 251.2" stroke-dashoffset="0" strokeLinecap="round" strokeWidth="12"></circle>
{/* Segment 2: Penyesuaian PNBP 18% (18% = 45.21) offset = -180.86 */}
<circle cx="50" cy="50" fill="transparent" r="40" stroke="#5c613f" strokeDasharray="45.21 251.2" stroke-dashoffset="-180.86" strokeWidth="12"></circle>
{/* Segment 3: Rekomendasi Teknis 7% (7% = 17.58) offset = -226.07 */}
<circle cx="50" cy="50" fill="transparent" r="40" stroke="#D97706" strokeDasharray="17.58 251.2" stroke-dashoffset="-226.07" strokeWidth="12"></circle>
{/* Segment 4: Sanksi Inkracht 3% (3% = 7.53) offset = -243.65 */}
<circle cx="50" cy="50" fill="transparent" r="40" stroke="#ba1a1a" strokeDasharray="7.53 251.2" stroke-dashoffset="-243.65" strokeWidth="12"></circle>
</svg>
<div className="absolute flex flex-col items-center justify-center text-center">
<span className="font-tabular-kpi text-[20px] font-bold text-on-surface">100%</span>
<span className="font-label-xs text-[10px] text-on-surface-variant font-medium">Kasus Berkas</span>
</div>
</div>
</div>
{/* Legenda Komposisi */}
<div className="flex flex-col gap-2 pt-3">
<div className="flex items-center justify-between text-body-sm font-body-sm">
<div className="flex items-center gap-2">
<span className="w-3 h-3 rounded-sm bg-primary"></span>
<span className="text-on-surface font-medium">Rekonsiliasi Klir / Sah</span>
</div>
<span className="font-tabular-data text-tabular-data font-bold text-primary">72%</span>
</div>
<div className="flex items-center justify-between text-body-sm font-body-sm">
<div className="flex items-center gap-2">
<span className="w-3 h-3 rounded-sm bg-secondary"></span>
<span className="text-on-surface font-medium">Koreksi Penyesuaian PNBP</span>
</div>
<span className="font-tabular-data text-tabular-data font-bold text-on-surface">18%</span>
</div>
<div className="flex items-center justify-between text-body-sm font-body-sm">
<div className="flex items-center gap-2">
<span className="w-3 h-3 rounded-sm bg-status-review"></span>
<span className="text-on-surface font-medium">Rekomendasi Pembenahan</span>
</div>
<span className="font-tabular-data text-tabular-data font-bold text-on-surface">7%</span>
</div>
<div className="flex items-center justify-between text-body-sm font-body-sm">
<div className="flex items-center gap-2">
<span className="w-3 h-3 rounded-sm bg-error"></span>
<span className="text-on-surface font-medium">Sanksi Inkracht Final</span>
</div>
<span className="font-tabular-data text-tabular-data font-bold text-tertiary">3%</span>
</div>
</div>
</div>
</div>
{/* Tabel Agregat Wilayah & Komoditas (Termasuk Cell Suppression) */}
<div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden flex flex-col">
<div className="p-space-md flex flex-col md:flex-row md:items-center justify-between gap-space-sm bg-surface-container-lowest">
<div>
<div className="flex items-center gap-2">
<span className="font-headline-sm text-headline-sm font-semibold text-on-surface">Indikator Agregat per Wilayah Pantauan</span>
<span className="inline-flex items-center px-2 py-0.5 rounded-full bg-surface-container text-on-surface-variant font-label-xs text-label-xs font-medium">
            K-Anonymity Threshold (n ≥ 5)
          </span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
          Tingkat pelaporan kolektif dan efektivitas resolusi berdasarkan gugus daerah pelabuhan &amp; konsesi.
        </p>
</div>
{/* Penjelasan Penekanan Data */}
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface-container-low text-on-surface-variant font-label-xs text-label-xs">
<span className="material-symbols-outlined text-[16px] text-status-review">shield_lock</span>
<span className="">Nilai pada sel dengan <strong>n &lt; 5</strong> disembunyikan guna mencegah re-identifikasi data usaha komersial.</span>
</div>
</div>
{/* Container Tabel Responsif */}
<div className="overflow-x-auto w-full">
<table className="w-full text-left text-body-sm font-body-sm">
<thead className="bg-surface-container-low font-label-xs text-label-xs text-on-surface-variant uppercase tracking-wider">
<tr>
<th className="py-3 px-4 font-semibold">Wilayah / Koridor Pantauan</th>
<th className="py-3 px-4 font-semibold">Komoditas</th>
<th className="py-3 px-4 font-semibold text-center">Entitas Terdaftar (N)</th>
<th className="py-3 px-4 font-semibold text-right">Kepatuhan (%)</th>
<th className="py-3 px-4 font-semibold text-right">Total Inspeksi</th>
<th className="py-3 px-4 font-semibold text-right">Median Resolusi</th>
<th className="py-3 px-4 font-semibold text-center">Ketetapan Final</th>
<th className="py-3 px-4 font-semibold text-center">Status Data</th>
</tr>
</thead>
<tbody className="divide-y-0 text-on-surface">
{/* Baris 1: Kutai Kartanegara */}
<tr className="hover:bg-surface-container-low/50 transition-colors">
<td className="py-3.5 px-4 font-medium flex items-center gap-2">
<span className="material-symbols-outlined text-secondary text-[18px]">location_on</span>
<span className="">Kutai Kartanegara</span>
</td>
<td className="py-3.5 px-4 text-on-surface-variant">Batu Bara Termal</td>
<td className="py-3.5 px-4 font-tabular-data text-tabular-data text-center font-semibold text-on-surface">n = 28</td>
<td className="py-3.5 px-4 font-tabular-data text-tabular-data text-right font-bold text-status-verified">96,2%</td>
<td className="py-3.5 px-4 font-tabular-data text-tabular-data text-right">34 Agenda</td>
<td className="py-3.5 px-4 font-tabular-data text-tabular-data text-right">16 Hari</td>
<td className="py-3.5 px-4 font-tabular-data text-tabular-data text-center">2 Inkracht</td>
<td className="py-3.5 px-4 text-center">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-label-xs font-label-xs bg-status-verified-bg text-status-verified font-medium">
<span className="w-1.5 h-1.5 rounded-full bg-status-verified"></span>Lengkap
              </span>
</td>
</tr>
{/* Baris 2: Berau & Pasir */}
<tr className="hover:bg-surface-container-low/50 transition-colors bg-surface-container-lowest">
<td className="py-3.5 px-4 font-medium flex items-center gap-2">
<span className="material-symbols-outlined text-secondary text-[18px]">location_on</span>
<span className="">Berau &amp; Paser</span>
</td>
<td className="py-3.5 px-4 text-on-surface-variant">Batu Bara Termal</td>
<td className="py-3.5 px-4 font-tabular-data text-tabular-data text-center font-semibold text-on-surface">n = 19</td>
<td className="py-3.5 px-4 font-tabular-data text-tabular-data text-right font-bold text-status-verified">93,5%</td>
<td className="py-3.5 px-4 font-tabular-data text-tabular-data text-right">22 Agenda</td>
<td className="py-3.5 px-4 font-tabular-data text-tabular-data text-right">19 Hari</td>
<td className="py-3.5 px-4 font-tabular-data text-tabular-data text-center">1 Inkracht</td>
<td className="py-3.5 px-4 text-center">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-label-xs font-label-xs bg-status-verified-bg text-status-verified font-medium">
<span className="w-1.5 h-1.5 rounded-full bg-status-verified"></span>Lengkap
              </span>
</td>
</tr>
{/* Baris 3: Tanah Bumbu & Kotabaru */}
<tr className="hover:bg-surface-container-low/50 transition-colors">
<td className="py-3.5 px-4 font-medium flex items-center gap-2">
<span className="material-symbols-outlined text-secondary text-[18px]">location_on</span>
<span className="">Tanah Bumbu &amp; Kotabaru</span>
</td>
<td className="py-3.5 px-4 text-on-surface-variant">Batu Bara Termal</td>
<td className="py-3.5 px-4 font-tabular-data text-tabular-data text-center font-semibold text-on-surface">n = 14</td>
<td className="py-3.5 px-4 font-tabular-data text-tabular-data text-right font-bold text-status-verified">95,0%</td>
<td className="py-3.5 px-4 font-tabular-data text-tabular-data text-right">18 Agenda</td>
<td className="py-3.5 px-4 font-tabular-data text-tabular-data text-right">17 Hari</td>
<td className="py-3.5 px-4 font-tabular-data text-tabular-data text-center">1 Inkracht</td>
<td className="py-3.5 px-4 text-center">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-label-xs font-label-xs bg-status-verified-bg text-status-verified font-medium">
<span className="w-1.5 h-1.5 rounded-full bg-status-verified"></span>Lengkap
              </span>
</td>
</tr>
{/* Baris 4: Mahakam Ulu (CELL SUPPRESSION DITERAPKAN - n < 5) */}
<tr className="bg-surface-container-low/60 hover:bg-surface-container-low transition-colors">
<td className="py-3.5 px-4 font-medium flex items-center gap-2">
<span className="material-symbols-outlined text-outline-variant text-[18px]">lock</span>
<span className="text-on-surface font-semibold">Mahakam Ulu <span className="text-label-xs font-normal text-on-surface-variant">(Uji Petik Baru)</span></span>
</td>
<td className="py-3.5 px-4 text-on-surface-variant">Batu Bara Termal</td>
<td className="py-3.5 px-4 font-tabular-data text-tabular-data text-center font-medium text-status-review">n = 3</td>
<td className="py-3.5 px-4 text-right">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-status-review-bg text-status-review font-tabular-data text-[11px] font-semibold" title="Data disembunyikan guna mencegah identifikasi langsung">
<span className="material-symbols-outlined text-[12px]">visibility_off</span> [Ditekan — n &lt; 5]
              </span>
</td>
<td className="py-3.5 px-4 text-right">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-status-review-bg text-status-review font-tabular-data text-[11px] font-semibold">
                [Ditekan — n &lt; 5]
              </span>
</td>
<td className="py-3.5 px-4 text-right">
<span className="font-tabular-data text-[12px] text-on-surface-variant italic">[Ditekan]</span>
</td>
<td className="py-3.5 px-4 font-tabular-data text-tabular-data text-center text-on-surface-variant">0 Inkracht</td>
<td className="py-3.5 px-4 text-center">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-label-xs font-label-xs bg-surface-container text-on-surface-variant font-medium">
<span className="material-symbols-outlined text-[13px] text-status-review">security</span> Dilindungi Privasi
              </span>
</td>
</tr>
{/* Baris 5: Barito Utara & Selatan */}
<tr className="hover:bg-surface-container-low/50 transition-colors">
<td className="py-3.5 px-4 font-medium flex items-center gap-2">
<span className="material-symbols-outlined text-secondary text-[18px]">location_on</span>
<span className="">Barito Utara &amp; Barito Selatan</span>
</td>
<td className="py-3.5 px-4 text-on-surface-variant">Batu Bara Termal</td>
<td className="py-3.5 px-4 font-tabular-data text-tabular-data text-center font-semibold text-on-surface">n = 11</td>
<td className="py-3.5 px-4 font-tabular-data text-tabular-data text-right font-bold text-on-surface">91,8%</td>
<td className="py-3.5 px-4 font-tabular-data text-tabular-data text-right">15 Agenda</td>
<td className="py-3.5 px-4 font-tabular-data text-tabular-data text-right">22 Hari</td>
<td className="py-3.5 px-4 font-tabular-data text-tabular-data text-center">1 Inkracht</td>
<td className="py-3.5 px-4 text-center">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-label-xs font-label-xs bg-status-verified-bg text-status-verified font-medium">
<span className="w-1.5 h-1.5 rounded-full bg-status-verified"></span>Lengkap
              </span>
</td>
</tr>
{/* Baris 6: Tana Tidung (CELL SUPPRESSION DITERAPKAN - n < 5) */}
<tr className="bg-surface-container-low/60 hover:bg-surface-container-low transition-colors">
<td className="py-3.5 px-4 font-medium flex items-center gap-2">
<span className="material-symbols-outlined text-outline-variant text-[18px]">lock</span>
<span className="text-on-surface font-semibold">Tana Tidung &amp; Bulungan Hilir</span>
</td>
<td className="py-3.5 px-4 text-on-surface-variant">Batu Bara Termal</td>
<td className="py-3.5 px-4 font-tabular-data text-tabular-data text-center font-medium text-status-review">n = 2</td>
<td className="py-3.5 px-4 text-right">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-status-review-bg text-status-review font-tabular-data text-[11px] font-semibold">
<span className="material-symbols-outlined text-[12px]">visibility_off</span> [Ditekan — n &lt; 5]
              </span>
</td>
<td className="py-3.5 px-4 text-right">
<span className="font-tabular-data text-[12px] text-on-surface-variant italic">[Ditekan]</span>
</td>
<td className="py-3.5 px-4 text-right">
<span className="font-tabular-data text-[12px] text-on-surface-variant italic">[Ditekan]</span>
</td>
<td className="py-3.5 px-4 font-tabular-data text-tabular-data text-center text-on-surface-variant">0 Inkracht</td>
<td className="py-3.5 px-4 text-center">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-label-xs font-label-xs bg-surface-container text-on-surface-variant font-medium">
<span className="material-symbols-outlined text-[13px] text-status-review">security</span> Dilindungi Privasi
              </span>
</td>
</tr>
</tbody>
</table>
</div>
{/* Kaki Tabel / Legenda Diferensial */}
<div className="p-3 bg-surface-container-low flex flex-col sm:flex-row items-center justify-between gap-2 text-label-xs font-label-xs text-on-surface-variant">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[16px] text-secondary">info</span>
<span className=""><strong>Catatan Metrik:</strong> n = Jumlah badan usaha pemegang izin IUP Operasi Produksi aktif dalam wilayah koridor pantauan.</span>
</div>
<div className="flex items-center gap-4">
<span className="">Menampilkan 6 Koridor Pantauan Pilot</span>
<button className="text-primary font-semibold hover:underline">Unduh Raw CSV Agregat</button>
</div>
</div>
</div>
{/* Dua Kolom Bawah: Rekapitulasi Hukum Final & Metodologi Tata Kelola */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-md items-start">
{/* Kolom Kiri (6 Kolom): Rekapitulasi Putusan Hukum Inkracht Sah Sesuai UU KIP */}
<div className="lg:col-span-6 bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col justify-between">
<div>
<div className="flex items-center justify-between pb-1">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-tertiary text-[22px]">gavel</span>
<span className="font-headline-sm text-headline-sm font-semibold text-on-surface">Ketetapan Hukum Final (Inkracht)</span>
</div>
<span className="inline-flex items-center px-2 py-0.5 rounded-full bg-status-verified-bg text-status-verified font-label-xs text-label-xs font-semibold">
            Sah Terbuka Publik
          </span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-4">
          Daftar ketetapan administratif dan penyesuaian kewajiban negara yang telah berkekuatan hukum tetap (tidak dalam proses sanggahan/banding peradilan).
        </p>
{/* Daftar Keputusan Hukum Terbuka */}
<div className="flex flex-col gap-3">
{/* Butir 1 */}
<div className="bg-surface-container-low rounded-lg p-3 flex flex-col gap-1.5">
<div className="flex items-start justify-between gap-2">
<span className="font-label-md text-label-md font-bold text-on-surface">
                SK Ditjen Minerba ESDM No. SK-2025/AD-04
              </span>
<span className="inline-flex items-center px-1.5 py-0.5 rounded bg-status-verified-bg text-status-verified font-tabular-data text-[11px] font-semibold shrink-0">
                Inkracht • Selesai
              </span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">
              Penyesuaian PNBP royalti atas selisih draft survey pengapalan tongkang di Muara Berau. Nilai kurang bayar telah dipulihkan secara penuh ke Kas Negara via SIMPONI Kemenkeu.
            </p>
<div className="flex items-center gap-3 text-label-xs font-label-xs text-on-surface-variant/80 pt-1">
<span className="">Tanggal Putusan: 12 Jan 2025</span>
<span className="">•</span>
<span className="">Kategori: Rekonsiliasi Kewajiban Finansial</span>
</div>
</div>
{/* Butir 2 */}
<div className="bg-surface-container-low rounded-lg p-3 flex flex-col gap-1.5">
<div className="flex items-start justify-between gap-2">
<span className="font-label-md text-label-md font-bold text-on-surface">
                Ketetapan Metrologi KAN &amp; Kemendag No. 018/MET/2025
              </span>
<span className="inline-flex items-center px-1.5 py-0.5 rounded bg-status-verified-bg text-status-verified font-tabular-data text-[11px] font-semibold shrink-0">
                Inkracht • Tera Sah
              </span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">
              Instruksi re-standardisasi dan kalibrasi ulang timbangan belt conveyor pada 2 terminal muat jetty di Sungai Mahakam akibat deviasi sensor timbang melebihi 2%.
            </p>
<div className="flex items-center gap-3 text-label-xs font-label-xs text-on-surface-variant/80 pt-1">
<span className="">Tanggal Putusan: 04 Feb 2025</span>
<span className="">•</span>
<span className="">Kategori: Kalibrasi Infrastruktur Angkut</span>
</div>
</div>
{/* Butir 3 */}
<div className="bg-surface-container-low rounded-lg p-3 flex flex-col gap-1.5">
<div className="flex items-start justify-between gap-2">
<span className="font-label-md text-label-md font-bold text-on-surface">
                Ketetapan Administratif Denda Keterlambatan No. 2024/DK-109
              </span>
<span className="inline-flex items-center px-1.5 py-0.5 rounded bg-status-verified-bg text-status-verified font-tabular-data text-[11px] font-semibold shrink-0">
                Inkracht • Lunas
              </span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">
              Penyelesaian denda administratif keterlambatan pengunggahan Surat Persetujuan Berlayar (SPB) terintegrasi pada sistem inaportnet untuk 3 kloter pengangkutan antarpulau.
            </p>
<div className="flex items-center gap-3 text-label-xs font-label-xs text-on-surface-variant/80 pt-1">
<span className="">Tanggal Putusan: 28 Des 2024</span>
<span className="">•</span>
<span className="">Kategori: Disiplin Administrasi Logistik</span>
</div>
</div>
</div>
</div>
<div className="mt-4 pt-3 flex items-center justify-between text-label-xs font-label-xs text-on-surface-variant">
<span className="">Transparansi Sesuai Pasal 17 Huruf b &amp; UU No. 14 Tahun 2008</span>
<button className="text-primary font-semibold hover:underline">Lihat Salinan Keputusan Publik</button>
</div>
</div>
{/* Kolom Kanan (6 Kolom): Metodologi, Batasan Pilot & Proteksi Privasi K-Anonymity */}
<div className="lg:col-span-6 bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col justify-between">
<div>
<div className="flex items-center gap-2 pb-1">
<span className="material-symbols-outlined text-primary text-[22px]">analytics</span>
<span className="font-headline-sm text-headline-sm font-semibold text-on-surface">Metodologi &amp; Prinsip Privasi Data</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-4">
          Landasan komputasi indikator transparansi, batasan ruang lingkup, serta mekanisme perlindungan hak berusaha.
        </p>
<div className="flex flex-col gap-3">
<div className="p-3 rounded-lg bg-surface-container-low flex items-start gap-3">
<span className="material-symbols-outlined text-primary text-[20px] shrink-0 mt-0.5">rule</span>
<div>
<span className="font-label-md text-label-md font-semibold text-on-surface block mb-0.5">Metodologi Validasi Agregat SIMBARA</span>
<p className="font-body-sm text-body-sm text-on-surface-variant">
                Skor kepatuhan dihitung melalui pencocokan silang otomatis 3 pilar: Deklarasi MOMS/SIMBARA, Laporan Surveyor Independen Pelabuhan (CoW/CoA), dan Manifest SPB Bea Cukai/Syahbandar. Transaksi sah diverifikasi tanpa melibatkan estimasi spekulatif.
              </p>
</div>
</div>
<div className="p-3 rounded-lg bg-surface-container-low flex items-start gap-3">
<span className="material-symbols-outlined text-secondary text-[20px] shrink-0 mt-0.5">privacy_tip</span>
<div>
<span className="font-label-md text-label-md font-semibold text-on-surface block mb-0.5">Ambang Batas Penekanan Data (k-Anonymity n ≥ 5)</span>
<p className="font-body-sm text-body-sm text-on-surface-variant">
                Demi melindungi kerahasiaan operasional dan menghindari persaingan usaha tidak sehat, wilayah dengan populasi entitas terdaftar kurang dari 5 wajib disamarkan secara agregat. Hal ini menjamin tidak ada profil tunggal yang dapat direkayasa balik oleh publik.
              </p>
</div>
</div>
<div className="p-3 rounded-lg bg-surface-container-low flex items-start gap-3">
<span className="material-symbols-outlined text-status-review text-[20px] shrink-0 mt-0.5">notification_important</span>
<div>
<span className="font-label-md text-label-md font-semibold text-on-surface block mb-0.5">Keterbatasan Pilot Tahap 1 (Batu Bara Kaltim &amp; Kalsel)</span>
<p className="font-body-sm text-body-sm text-on-surface-variant">
                Angka yang dipublikasikan dalam portal ini secara eksklusif bersumber dari koridor uji coba pertambangan batu bara di Kalimantan Timur dan Selatan. Data ini belum mencerminkan status rantai pasok mineral strategis lainnya (Nikel, Bauksit, Timah) yang dijadwalkan pada Fase 2.
              </p>
</div>
</div>
</div>
</div>
{/* Layanan PPID dan Pengaduan Terpadu */}
<div className="mt-4 pt-3 flex flex-col sm:flex-row items-center justify-between gap-2 text-label-xs font-label-xs text-on-surface-variant">
<div className="flex items-center gap-1.5">
<span className="material-symbols-outlined text-[16px] text-secondary">support_agent</span>
<span className="">Layanan Informasi Publik: <strong>ppid.minerba@esdm.go.id</strong></span>
</div>
<div className="flex items-center gap-1.5 text-primary font-semibold">
<span className="">Hotline Pengaduan Keterbukaan: 136 (Kontak ESDM)</span>
</div>
</div>
</div>
</div>
{/* Footer Banner Khusus Publik */}
<div className="bg-surface-container-low rounded-xl p-space-md text-center flex flex-col sm:flex-row items-center justify-between gap-3">
<div className="flex items-center gap-3 text-left">
<div className="w-8 h-8 rounded-full bg-primary-container text-surface flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-[18px]">verified</span>
</div>
<div>
<span className="font-label-md text-label-md text-on-surface font-semibold block">Portal Terverifikasi Sistem Pemerintahan Berbasis Elektronik (SPBE)</span>
<span className="font-label-xs text-label-xs text-on-surface-variant">Kementerian Energi dan Sumber Daya Mineral Republik Indonesia • Terhubung ke Satu Data Indonesia</span>
</div>
</div>
<div className="flex items-center gap-2">
<span className="font-tabular-data text-[12px] text-on-surface-variant">ID Validasi Agregat: #PUB-2025-Q1-KALTIM-KALSEL-091A</span>
</div>
</div>
</div>
    </div>
  );
};

export default TransparansiPublikPage;
