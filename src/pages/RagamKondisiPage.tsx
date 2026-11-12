import React, { useState } from 'react';

interface Props {
  onNavigate?: (path: string) => void;
  onSelectCase?: (caseId: string) => void;
}

export const RagamKondisiPage: React.FC<Props> = ({ onNavigate, onSelectCase }) => {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  return (
    <div className="w-full">
      <div className="flex flex-col w-full gap-space-lg">
{/* TOP HEADER & ARCHITECTURE DIRECTIVE */}
<div className="flex flex-col gap-space-sm">
<div className="flex flex-wrap items-center justify-between gap-space-sm">
<div className="flex items-center gap-space-sm">
<span className="px-space-sm py-space-xs rounded bg-primary-container text-on-primary font-label-xs text-label-xs uppercase tracking-wider">Arsitektur UI v2.4</span>
<span className="px-space-sm py-space-xs rounded bg-surface-container-high text-on-surface-variant font-label-xs text-label-xs">Data demonstrasi</span>
<span className="px-space-sm py-space-xs rounded bg-status-verified-bg text-status-verified font-label-xs text-label-xs font-semibold">ISO 37001 &amp; BSSN Zero Trust</span>
</div>
<div className="flex items-center gap-space-xs text-on-surface-variant font-tabular-data text-tabular-data">
<span className="material-symbols-outlined text-[16px] text-primary">verified_user</span>
<span className="">Stempel Kepatuhan: 2025-03-14 10:45:12 WITA</span>
</div>
</div>
<div>
<h1 className="font-display-lg text-display-lg text-primary tracking-tight">Katalog &amp; Pengendali Ragam Kondisi Sistem</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-5xl mt-space-xs">
        Standarisasi pola interaksi UI: Loading, Empty / No-Result, Error &amp; Gateway Timeout, Partial Data, Akses Ditolak (Least Privilege), Sukses Kriptografis, dan Melewati Target Waktu (Overdue).
      </p>
</div>
{/* MANDATORY GOVERNANCE DIRECTIVE BANNER */}
<div className="p-space-md rounded-xl bg-bg-surface-subtle text-on-surface shadow-sm flex items-start gap-space-md">
<div className="p-space-xs rounded-lg bg-primary-container text-on-primary shrink-0 mt-0.5">
<span className="material-symbols-outlined text-[20px]">policy</span>
</div>
<div className="flex flex-col gap-space-xs flex-1">
<span className="font-label-md text-label-md text-primary uppercase tracking-wider">Prinsip Bahasa &amp; Tata Kelola Status Sistem</span>
<p className="font-body-sm text-body-sm text-on-surface leading-relaxed">
          Menggunakan terminologi objektif ("anomali", "indikasi", "perlu tinjauan", "sanggahan"). Sistem menjamin pemisahan tugas (*separation of duties*), skor risiko hanya bertindak sebagai pemicu pemeriksaan manusia, dan tidak pernah memvonis sepihak sebelum keputusan final yang sah.
        </p>
</div>
</div>
</div>
{/* INTERACTIVE FILTER TOOLBAR (STATE CONTROLLER) */}
<div className="bg-bg-surface p-space-sm rounded-xl shadow-sm flex flex-wrap items-center gap-space-xs">
<span className="font-label-xs text-label-xs text-on-surface-variant uppercase px-space-xs font-semibold">Filter Peragaan:</span>
<button className={`state-filter-btn px-space-sm py-1.5 rounded-lg font-label-md text-label-md transition-all cursor-pointer ${activeFilter === "all" ? "bg-primary text-on-primary font-semibold shadow-xs" : "bg-bg-canvas text-on-surface-variant hover:text-on-surface"}`} id="btn-all" onClick={() => setActiveFilter("all")} type="button">
      Semua Ragam (7)
    </button>
<button className={`state-filter-btn px-space-sm py-1.5 rounded-lg font-label-md text-label-md transition-all cursor-pointer ${activeFilter === "loading" ? "bg-primary text-on-primary font-semibold shadow-xs" : "bg-bg-canvas text-on-surface-variant hover:text-on-surface"}`} id="btn-loading" onClick={() => setActiveFilter("loading")} type="button">
      1. Loading &amp; Skeleton
    </button>
<button className={`state-filter-btn px-space-sm py-1.5 rounded-lg font-label-md text-label-md transition-all cursor-pointer ${activeFilter === "empty" ? "bg-primary text-on-primary font-semibold shadow-xs" : "bg-bg-canvas text-on-surface-variant hover:text-on-surface"}`} id="btn-empty" onClick={() => setActiveFilter("empty")} type="button">
      2. Kosong / No-Result
    </button>
<button className={`state-filter-btn px-space-sm py-1.5 rounded-lg font-label-md text-label-md transition-all cursor-pointer ${activeFilter === "error" ? "bg-primary text-on-primary font-semibold shadow-xs" : "bg-bg-canvas text-on-surface-variant hover:text-on-surface"}`} id="btn-error" onClick={() => setActiveFilter("error")} type="button">
      3. Error &amp; Timeout
    </button>
<button className={`state-filter-btn px-space-sm py-1.5 rounded-lg font-label-md text-label-md transition-all cursor-pointer ${activeFilter === "partial" ? "bg-primary text-on-primary font-semibold shadow-xs" : "bg-bg-canvas text-on-surface-variant hover:text-on-surface"}`} id="btn-partial" onClick={() => setActiveFilter("partial")} type="button">
      4. Data Parsial
    </button>
<button className={`state-filter-btn px-space-sm py-1.5 rounded-lg font-label-md text-label-md transition-all cursor-pointer ${activeFilter === "forbidden" ? "bg-primary text-on-primary font-semibold shadow-xs" : "bg-bg-canvas text-on-surface-variant hover:text-on-surface"}`} id="btn-forbidden" onClick={() => setActiveFilter("forbidden")} type="button">
      5. Akses Ditolak (403)
    </button>
<button className={`state-filter-btn px-space-sm py-1.5 rounded-lg font-label-md text-label-md transition-all cursor-pointer ${activeFilter === "success" ? "bg-primary text-on-primary font-semibold shadow-xs" : "bg-bg-canvas text-on-surface-variant hover:text-on-surface"}`} id="btn-success" onClick={() => setActiveFilter("success")} type="button">
      6. Sukses (200 OK)
    </button>
<button className={`state-filter-btn px-space-sm py-1.5 rounded-lg font-label-md text-label-md transition-all cursor-pointer ${activeFilter === "overdue" ? "bg-primary text-on-primary font-semibold shadow-xs" : "bg-bg-canvas text-on-surface-variant hover:text-on-surface"}`} id="btn-overdue" onClick={() => setActiveFilter("overdue")} type="button">
      7. Melewati Target
    </button>
</div>
{/* STATE SHOWCASE MATRIX */}
<div className="grid grid-cols-1 xl:grid-cols-2 gap-space-lg" id="matrix-container">
{/* CARD A: LOADING & SKELETON */}
<div className="state-card flex flex-col bg-bg-surface rounded-xl shadow-sm p-space-lg" data-state-card="loading" style={{ display: activeFilter === "all" || activeFilter === "loading" ? "flex" : "none" }}>
<div className="flex items-center justify-between gap-space-sm pb-space-sm">
<div className="flex items-center gap-space-xs">
<span className="w-2.5 h-2.5 rounded-full bg-status-review animate-ping"></span>
<span className="font-headline-sm text-headline-sm text-primary">Kondisi 1: Loading &amp; Skeleton</span>
</div>
<span className="px-space-sm py-space-xs rounded bg-status-review-bg text-status-review font-label-xs text-label-xs font-semibold">Sedang Memuat (Synchronizing)</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md">
        Menghindari layar beku (*frozen UI*); menampilkan progress bar deterministik dan indikator latensi gateway data pertambangan.
      </p>
{/* Mock UI: Shimmering Skeleton Container */}
<div className="bg-bg-canvas rounded-xl p-space-md flex flex-col gap-space-md flex-1">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-sm">
<span className="material-symbols-outlined text-[20px] text-primary animate-spin">sync</span>
<span className="font-label-md text-label-md text-on-surface font-semibold">Sinkronisasi pipa data SIMBARA - Inaportnet sedang berlangsung...</span>
</div>
<span className="font-tabular-data text-tabular-data text-on-surface-variant">14.850 entri kriptografis</span>
</div>
{/* Progress Bar Deterministic */}
<div className="w-full bg-bg-surface-subtle h-2.5 rounded-full overflow-hidden">
<div className="bg-primary-container h-full rounded-full transition-all duration-500" style={{width: "68%"}}></div>
</div>
{/* Shimmer Table Mock */}
<div className="flex flex-col gap-space-sm pt-space-xs">
<div className="h-10 bg-bg-surface rounded-lg animate-pulse flex items-center justify-between px-space-md">
<div className="h-3 w-28 bg-bg-surface-subtle rounded"></div>
<div className="h-3 w-40 bg-bg-surface-subtle rounded"></div>
<div className="h-3 w-20 bg-bg-surface-subtle rounded"></div>
</div>
<div className="h-10 bg-bg-surface rounded-lg animate-pulse flex items-center justify-between px-space-md">
<div className="h-3 w-32 bg-bg-surface-subtle rounded"></div>
<div className="h-3 w-36 bg-bg-surface-subtle rounded"></div>
<div className="h-3 w-24 bg-bg-surface-subtle rounded"></div>
</div>
<div className="h-10 bg-bg-surface rounded-lg animate-pulse flex items-center justify-between px-space-md">
<div className="h-3 w-24 bg-bg-surface-subtle rounded"></div>
<div className="h-3 w-44 bg-bg-surface-subtle rounded"></div>
<div className="h-3 w-16 bg-bg-surface-subtle rounded"></div>
</div>
</div>
</div>
{/* Action Footer */}
<div className="flex items-center justify-between pt-space-md mt-auto">
<span className="font-label-xs text-label-xs text-on-surface-variant">Est. Selesai: 4.2 detik • Data demonstrasi</span>
<div className="flex items-center gap-space-sm">
<button className="px-space-md py-1.5 rounded-lg bg-bg-canvas text-on-surface font-label-md text-label-md hover:bg-bg-surface-subtle transition-colors" type="button">
            Hentikan Sinkronisasi
          </button>
<button className="px-space-md py-1.5 rounded-lg bg-primary text-on-primary font-label-md text-label-md hover:bg-primary-container transition-colors" type="button">
            Muat Ulang
          </button>
</div>
</div>
</div>
{/* CARD B: EMPTY STATE / NO-RESULT */}
<div className="state-card flex flex-col bg-bg-surface rounded-xl shadow-sm p-space-lg" data-state-card="empty" style={{ display: activeFilter === "all" || activeFilter === "empty" ? "flex" : "none" }}>
<div className="flex items-center justify-between gap-space-sm pb-space-sm">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-[20px] text-secondary">manage_search</span>
<span className="font-headline-sm text-headline-sm text-primary">Kondisi 2: Kosong / Nihil Hasil Pencarian</span>
</div>
<span className="px-space-sm py-space-xs rounded bg-bg-surface-subtle text-secondary font-label-xs text-label-xs font-semibold">Filter Terlalu Spesifik</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md">
        Menghilangkan keraguan audit dengan pesan penegasan toleransi metrologi sah tanpa menyalahkan pencari data.
      </p>
{/* Mock UI: Search Empty Container */}
<div className="bg-bg-canvas rounded-xl p-space-md flex flex-col items-center justify-center text-center gap-space-sm py-space-xl flex-1">
<div className="w-14 h-14 rounded-full bg-bg-surface-subtle flex items-center justify-center text-secondary mb-space-xs">
<span className="material-symbols-outlined text-[30px]">search_off</span>
</div>
<div className="px-space-md py-space-xs rounded-full bg-bg-surface text-on-surface-variant font-tabular-data text-tabular-data">
          Pencarian: "PT Antartika Mineral Abadi - Samarinda"
        </div>
<h2 className="font-headline-sm text-headline-sm text-primary">Tidak Ditemukan Kasus yang Cocok</h2>
<p className="font-body-sm text-body-sm text-on-surface-variant max-w-md">
          Tidak ada data anomali atau kasus yang sesuai dengan kriteria filter saat ini. Seluruh entri pada koridor ini berada dalam rentang toleransi metrologi sah (&lt;=3%).
        </p>
</div>
{/* Action Footer */}
<div className="flex items-center justify-between pt-space-md mt-auto">
<span className="font-label-xs text-label-xs text-on-surface-variant">Wilayah: Kaltim • Data demonstrasi</span>
<div className="flex flex-wrap items-center gap-space-xs">
<button className="px-space-sm py-1.5 rounded-lg bg-bg-canvas text-on-surface font-label-md text-label-md hover:bg-bg-surface-subtle transition-colors" type="button">
            Reset Semua Filter
          </button>
<button className="px-space-sm py-1.5 rounded-lg bg-bg-canvas text-on-surface font-label-md text-label-md hover:bg-bg-surface-subtle transition-colors" type="button">
            Perluas Rentang
          </button>
<button className="px-space-sm py-1.5 rounded-lg bg-primary text-on-primary font-label-md text-label-md hover:bg-primary-container transition-colors" type="button">
            Ajukan Pemeriksaan Manual
          </button>
</div>
</div>
</div>
{/* CARD C: ERROR & GATEWAY TIMEOUT (504) */}
<div className="state-card flex flex-col bg-bg-surface rounded-xl shadow-sm p-space-lg" data-state-card="error" style={{ display: activeFilter === "all" || activeFilter === "error" ? "flex" : "none" }}>
<div className="flex items-center justify-between gap-space-sm pb-space-sm">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-[20px] text-status-anomaly">cloud_off</span>
<span className="font-headline-sm text-headline-sm text-primary">Kondisi 3: Error &amp; Gateway Timeout</span>
</div>
<span className="px-space-sm py-space-xs rounded bg-status-anomaly-bg text-status-anomaly font-label-xs text-label-xs font-semibold">HTTP 504 / Connection Timeout</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md">
        Menyajikan rincian teknis transparan dan memastikan petugas bahwa data lokal SIMBARA tidak korup.
      </p>
{/* Mock UI: Error Card */}
<div className="bg-surface-container-high rounded-xl p-space-md flex flex-col gap-space-md flex-1 text-on-surface">
<div className="flex items-start gap-space-md">
<div className="p-space-xs rounded-lg bg-status-anomaly-bg text-status-anomaly shrink-0">
<span className="material-symbols-outlined text-[24px]">error_outline</span>
</div>
<div>
<h2 className="font-headline-sm text-headline-sm text-on-surface">Gagal Mengambil Data Pembanding dari Gateway Inaportnet KSOP Samarinda</h2>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
              Sistem tidak dapat menyelesaikan jabat tangan SSL (*handshake*) dalam batas waktu yang ditentukan.
            </p>
</div>
</div>
<div className="p-space-md rounded-lg bg-bg-surface flex flex-col gap-space-xs font-tabular-data text-body-sm">
<div className="flex justify-between text-on-surface-variant">
<span className="">Kode Insiden:</span>
<span className="text-on-surface font-semibold">#ERR-GATEWAY-504</span>
</div>
<div className="flex justify-between text-on-surface-variant">
<span className="">Latensi Jaringan:</span>
<span className="text-status-anomaly font-semibold">&gt; 30.000 ms</span>
</div>
<div className="flex justify-between text-on-surface-variant">
<span className="">Titik Hambatan:</span>
<span className="text-on-surface truncate max-w-xs">hubla.dephub.go.id/v3/vessel-clearance</span>
</div>
<div className="mt-space-xs p-space-xs rounded bg-status-verified-bg text-status-verified font-label-xs text-label-xs flex items-center gap-space-xs">
<span className="material-symbols-outlined text-[14px]">shield</span>
<span className="">Integritas Lokal: Basis data SIMBARA tetap aman &amp; tidak terdampak.</span>
</div>
</div>
</div>
{/* Action Footer */}
<div className="flex items-center justify-between pt-space-md mt-auto">
<span className="font-label-xs text-label-xs text-on-surface-variant">Backoff: Eksponensial • Data demonstrasi</span>
<div className="flex flex-wrap items-center gap-space-xs">
<button className="px-space-sm py-1.5 rounded-lg bg-bg-canvas text-on-surface font-label-md text-label-md hover:bg-bg-surface-subtle transition-colors" type="button">
            Gunakan Cache (15 Menit Lalu)
          </button>
<button className="px-space-sm py-1.5 rounded-lg bg-primary text-on-primary font-label-md text-label-md hover:bg-primary-container transition-colors" type="button">
            Coba Sinkron Ulang
          </button>
</div>
</div>
</div>
{/* CARD D: DATA PARSIAL & TOLERANSI SEMENTARA */}
<div className="state-card flex flex-col bg-bg-surface rounded-xl shadow-sm p-space-lg" data-state-card="partial" style={{ display: activeFilter === "all" || activeFilter === "partial" ? "flex" : "none" }}>
<div className="flex items-center justify-between gap-space-sm pb-space-sm">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-[20px] text-accent-palmoil">hourglass_top</span>
<span className="font-headline-sm text-headline-sm text-primary">Kondisi 4: Data Parsial &amp; Toleransi</span>
</div>
<span className="px-space-sm py-space-xs rounded bg-status-review-bg text-status-review font-label-xs text-label-xs font-semibold">Menunggu Sumber Pembanding</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md">
        Menghormati masa toleransi sinkronisasi 3x24 jam bagi mitra kementerian sebelum menandai sebagai anomali formal.
      </p>
{/* Mock UI: Split Source Comparison View */}
<div className="bg-bg-canvas rounded-xl p-space-md flex flex-col gap-space-sm flex-1">
<div className="grid grid-cols-1 md:grid-cols-2 gap-space-sm">
{/* Source A */}
<div className="bg-bg-surface p-space-md rounded-lg flex flex-col gap-space-xs">
<div className="flex items-center justify-between">
<span className="font-label-xs text-label-xs uppercase text-on-surface-variant font-semibold">Sumber A: SIMBARA / ESDM</span>
<span className="px-space-xs py-0.5 rounded bg-status-verified-bg text-status-verified font-label-xs text-label-xs">Lengkap</span>
</div>
<span className="font-tabular-kpi text-headline-lg text-primary">100.200 MT</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Deklarasi Muat Tongkang TB-901</span>
</div>
{/* Source B */}
<div className="bg-surface-container p-space-md rounded-lg flex flex-col gap-space-xs">
<div className="flex items-center justify-between">
<span className="font-label-xs text-label-xs uppercase text-accent-palmoil font-semibold">Sumber B: SIMODIS BI &amp; CEISA</span>
<span className="px-space-xs py-0.5 rounded bg-status-review-bg text-status-review font-label-xs text-label-xs">Tertunda</span>
</div>
<span className="font-tabular-kpi text-headline-lg text-status-review">Tranche 2 Menunggu</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Rekonsiliasi Valuta L/C Devisa Hasil Ekspor</span>
</div>
</div>
<div className="p-space-sm rounded-lg bg-bg-surface flex items-start gap-space-sm">
<span className="material-symbols-outlined text-[18px] text-secondary shrink-0 mt-0.5">info</span>
<p className="font-body-sm text-body-sm text-on-surface-variant">
            Status parsial bukan indikasi pelanggaran administratif. Sistem memberikan jeda sinkronisasi 3x24 jam bagi mitra kementerian sebelum menandai sebagai anomali.
          </p>
</div>
</div>
{/* Action Footer */}
<div className="flex items-center justify-between pt-space-md mt-auto">
<span className="font-label-xs text-label-xs text-on-surface-variant">Batas Toleransi: Sisa 36 Jam • Data demonstrasi</span>
<div className="flex items-center gap-space-sm">
<button className="px-space-md py-1.5 rounded-lg bg-bg-canvas text-on-surface font-label-md text-label-md hover:bg-bg-surface-subtle transition-colors" type="button">
            Histori Gateway
          </button>
<button className="px-space-md py-1.5 rounded-lg bg-primary text-on-primary font-label-md text-label-md hover:bg-primary-container transition-colors" type="button">
            Kirim Permintaan Percepatan
          </button>
</div>
</div>
</div>
{/* CARD E: AKSES DITOLAK KARENA LEAST PRIVILEGE (403) */}
<div className="state-card flex flex-col bg-bg-surface rounded-xl shadow-sm p-space-lg" data-state-card="forbidden" style={{ display: activeFilter === "all" || activeFilter === "forbidden" ? "flex" : "none" }}>
<div className="flex items-center justify-between gap-space-sm pb-space-sm">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-[20px] text-tertiary">gavel</span>
<span className="font-headline-sm text-headline-sm text-primary">Kondisi 5: Pemisahan Tugas (Least Privilege)</span>
</div>
<span className="px-space-sm py-space-xs rounded bg-surface-container-highest text-tertiary font-label-xs text-label-xs font-semibold">Akses Dibatasi (HTTP 403)</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md">
        Menegakkan prinsip pemisahan tugas (*separation of duties*) berbasis wilayah Surat Perintah Tugas (SPT) sah.
      </p>
{/* Mock UI: Security Fence Container */}
<div className="bg-surface-dim rounded-xl p-space-md flex flex-col gap-space-md flex-1 text-on-surface">
<div className="flex items-start gap-space-md">
<div className="p-space-xs rounded-lg bg-surface-container-highest text-tertiary shrink-0">
<span className="material-symbols-outlined text-[24px]">lock</span>
</div>
<div>
<h2 className="font-headline-sm text-headline-sm text-primary">Akses Ditolak: Anda Tidak Memiliki Mandat Yuridis untuk Berkas Ini</h2>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
              Sistem perlindungan integritas mencegah penelaahan berkas di luar wilayah Surat Perintah Tugas resmi.
            </p>
</div>
</div>
<div className="p-space-md rounded-lg bg-bg-surface flex flex-col gap-space-xs font-body-sm">
<p className="text-on-surface-variant leading-relaxed">
            Berdasarkan Surat Perintah Tugas (SPT) aktif, akun Anda (<span className="font-semibold text-on-surface">Bambang S., Ditjen Minerba</span>) memiliki wewenang untuk <span className="font-semibold text-on-surface">Wilayah Kutai Kartanegara &amp; Samarinda</span>. Kasus <span className="font-tabular-data text-tabular-data text-primary font-semibold">NM-2025-0914</span> berada dalam <span className="font-semibold text-on-surface">Yurisdiksi Berau &amp; Paser</span>.
          </p>
<div className="mt-space-xs flex items-center gap-space-xs text-secondary font-label-xs text-label-xs">
<span className="material-symbols-outlined text-[14px]">shield</span>
<span className="">Kepatuhan Pedoman Penanganan Benturan Kepentingan KPK &amp; BPKP.</span>
</div>
</div>
</div>
{/* Action Footer */}
<div className="flex items-center justify-between pt-space-md mt-auto">
<span className="font-label-xs text-label-xs text-on-surface-variant">Mandat: SPT-2025-II-08 • Data demonstrasi</span>
<div className="flex flex-wrap items-center gap-space-xs">
<button className="px-space-sm py-1.5 rounded-lg bg-bg-canvas text-on-surface font-label-md text-label-md hover:bg-bg-surface-subtle transition-colors" type="button">
            Kembali ke Antrean Saya
          </button>
<button className="px-space-sm py-1.5 rounded-lg bg-primary text-on-primary font-label-md text-label-md hover:bg-primary-container transition-colors" type="button">
            Ajukan Perluasan Yurisdiksi
          </button>
</div>
</div>
</div>
{/* CARD F: AKSI SUKSES DENGAN VALIDASI KRIPTOGRAFIS */}
<div className="state-card flex flex-col bg-bg-surface rounded-xl shadow-sm p-space-lg" data-state-card="success" style={{ display: activeFilter === "all" || activeFilter === "success" ? "flex" : "none" }}>
<div className="flex items-center justify-between gap-space-sm pb-space-sm">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-[20px] text-status-verified">verified</span>
<span className="font-headline-sm text-headline-sm text-primary">Kondisi 6: Keputusan Sah Tersimpan</span>
</div>
<span className="px-space-sm py-space-xs rounded bg-status-verified-bg text-status-verified font-label-xs text-label-xs font-semibold">SHA-256 Sealed (200 OK)</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md">
        Menjamin kepastian hukum penelaah melalui stempel waktu kriptografis BSrE &amp; tanda terima digital.
      </p>
{/* Mock UI: Cryptographic Receipt */}
<div className="bg-status-verified-bg/40 rounded-xl p-space-md flex flex-col gap-space-md flex-1">
<div className="flex items-center gap-space-sm">
<div className="w-10 h-10 rounded-full bg-status-verified text-on-primary flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-[22px]">check</span>
</div>
<div>
<h2 className="font-headline-sm text-headline-sm text-primary">Keputusan Penelaahan Kasus NM-2025-0891 Berhasil Disimpan</h2>
<span className="font-body-sm text-body-sm text-secondary font-medium">Sanggahan Diterima &amp; Penyesuaian Rekonsiliasi Disetujui</span>
</div>
</div>
<div className="bg-bg-surface p-space-md rounded-lg flex flex-col gap-space-xs font-body-sm text-on-surface-variant">
<div className="flex justify-between items-center">
<span className="">Verifikator:</span>
<span className="text-on-surface font-semibold">Bambang S., S.T., M.Si. (Ditjen Minerba ESDM)</span>
</div>
<div className="flex justify-between items-center">
<span className="">Segel Hash SHA-256:</span>
<span className="font-tabular-data text-tabular-data text-primary font-bold">8f4b7a39e1...42c0 (BSrE Valid)</span>
</div>
<div className="flex justify-between items-center">
<span className="">Stempel Waktu TSA-BRIN:</span>
<span className="font-tabular-data text-tabular-data text-on-surface">14 Maret 2025, 10:45:12 WITA</span>
</div>
</div>
</div>
{/* Action Footer */}
<div className="flex items-center justify-between pt-space-md mt-auto">
<span className="font-label-xs text-label-xs text-status-verified font-medium">Integritas Tak Terbantahkan • Data demonstrasi</span>
<div className="flex items-center gap-space-sm">
<button className="px-space-md py-1.5 rounded-lg bg-bg-canvas text-on-surface font-label-md text-label-md hover:bg-bg-surface-subtle transition-colors" type="button">
            Unduh Berkas (.PDF/A)
          </button>
<button className="px-space-md py-1.5 rounded-lg bg-primary text-on-primary font-label-md text-label-md hover:bg-primary-container transition-colors" type="button">
            Buka Kasus Berikutnya
          </button>
</div>
</div>
</div>
{/* CARD G: MELEWATI TARGET WAKTU EVALUASI (OVERDUE) */}
<div className="state-card flex flex-col bg-bg-surface rounded-xl shadow-sm p-space-lg xl:col-span-2" data-state-card="overdue" style={{ display: activeFilter === "all" || activeFilter === "overdue" ? "flex" : "none" }}>
<div className="flex items-center justify-between gap-space-sm pb-space-sm">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-[20px] text-status-review">schedule</span>
<span className="font-headline-sm text-headline-sm text-primary">Kondisi 7: Melewati Target Waktu Evaluasi Pilot</span>
</div>
<span className="px-space-sm py-space-xs rounded bg-status-review-bg text-status-review font-label-xs text-label-xs font-semibold">Target SLA Terlampaui (&gt;30 Hari)</span>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-space-md items-center">
<div className="lg:col-span-2 flex flex-col gap-space-xs">
<h2 className="font-headline-sm text-headline-sm text-primary">Penelaahan Melewati Target Waktu Standar (H+6 Hari Kerja dari Target 30 Hari)</h2>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            Keterlambatan ini disebabkan oleh proses verifikasi uji petik laboratorium KAN tambahan. Keterlambatan waktu evaluasi administratif TIDAK membatalkan hak sanggah pelaku usaha dan TIDAK secara otomatis menetapkan sanksi hukum.
          </p>
<div className="flex flex-wrap items-center gap-space-sm mt-space-xs">
<span className="font-label-xs text-label-xs px-space-sm py-space-xs rounded bg-bg-canvas text-on-surface-variant">Kasus: NM-2025-0720</span>
<span className="font-label-xs text-label-xs px-space-sm py-space-xs rounded bg-bg-canvas text-on-surface-variant">Pelaku: PT Kutai Batubara Selaras</span>
<span className="font-label-xs text-label-xs px-space-sm py-space-xs rounded bg-status-review-bg text-status-review font-semibold">Tenggat Target: 08 Maret 2025</span>
</div>
</div>
<div className="bg-bg-canvas p-space-md rounded-xl flex flex-col gap-space-sm justify-between">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md text-on-surface-variant">Deviasi Waktu SLA</span>
<span className="font-tabular-kpi text-tabular-kpi text-status-review">+6 Hari</span>
</div>
<div className="flex flex-col gap-space-xs">
<button className="w-full py-2 rounded-lg bg-primary text-on-primary font-label-md text-label-md hover:bg-primary-container transition-colors text-center" type="button">
              Eskalasi ke Panel Senior
            </button>
<button className="w-full py-2 rounded-lg bg-bg-surface text-on-surface font-label-md text-label-md hover:bg-bg-surface-subtle transition-colors text-center" type="button">
              Kirim Notifikasi Status ke Badan Usaha
            </button>
</div>
</div>
</div>
</div>
</div>
{/* BOTTOM SECTION: INTERACTIVE LIVE GOVERNANCE TABLE */}
<div className="flex flex-col bg-bg-surface rounded-xl shadow-sm p-space-lg gap-space-md">
<div className="flex flex-wrap items-center justify-between gap-space-sm">
<div className="flex flex-col">
<h2 className="font-headline-lg text-headline-lg text-primary tracking-tight">Matriks Pantau Ragam Status Kasus Operasional</h2>
<span className="font-body-sm text-body-sm text-on-surface-variant">Antrean terpadu dengan penyaring status real-time untuk pembuktian perilaku UI komprehensif.</span>
</div>
<div className="flex flex-wrap items-center gap-space-sm">
{/* Search Box */}
<div className="relative">
<span className="material-symbols-outlined absolute left-3 top-2.5 text-[18px] text-on-surface-variant">search</span>
<input className="pl-9 pr-space-md py-1.5 rounded-lg bg-bg-canvas font-body-sm text-body-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary w-64 md:w-80" id="table-search" onKeyUp={() => {}} placeholder="Cari ID kasus atau badan usaha..." type="text" />
</div>
{/* Filter Dropdown */}
<select className="px-space-md py-1.5 rounded-lg bg-bg-canvas font-label-md text-label-md text-on-surface focus:outline-none focus:ring-2 focus:ring-primary cursor-pointer" id="status-select-filter" onChange={() => {}}>
<option value="ALL">Semua Ragam Status</option>
<option value="SYNC">Sedang Sinkronisasi</option>
<option value="TOLERANSI">Toleransi / Sesuai</option>
<option value="PARSIAL">Data Parsial</option>
<option value="DIBATASI">Akses Dibatasi</option>
<option value="TERVERIFIKASI">Terverifikasi Sah</option>
<option value="OVERDUE">Melewati Target</option>
</select>
</div>
</div>
{/* Data Dense Table */}
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse" id="governance-table">
<thead>
<tr className="bg-bg-canvas text-on-surface-variant font-label-xs text-label-xs uppercase tracking-wider">
<th className="py-space-sm px-space-md rounded-l-lg cursor-pointer" >ID Kasus &amp; Bukti</th>
<th className="py-space-sm px-space-md cursor-pointer" >Badan Usaha Terkait</th>
<th className="py-space-sm px-space-md cursor-pointer" >Komoditas / Muatan</th>
<th className="py-space-sm px-space-md cursor-pointer" >Deviasi Tonase</th>
<th className="py-space-sm px-space-md">Kondisi Sistem Terkini</th>
<th className="py-space-sm px-space-md rounded-r-lg text-right">Tindakan Penelaah</th>
</tr>
</thead>
<tbody className="divide-y divide-border-subtle font-body-sm text-body-sm">
{/* ROW 1: Loading State */}
<tr className="table-row-item hover:bg-bg-canvas/50 transition-colors" data-status="SYNC">
<td className="py-space-sm px-space-md font-tabular-data text-tabular-data text-primary font-semibold">
              NM-2025-0941
            </td>
<td className="py-space-sm px-space-md">
<span className="font-medium text-on-surface">PT Berau Coal Perkasa</span>
<span className="block font-label-xs text-label-xs text-on-surface-variant">IUP-OP No. 412/ESDM/2021</span>
</td>
<td className="py-space-sm px-space-md">Batu Bara Termal 5.400 GAR</td>
<td className="py-space-sm px-space-md font-tabular-data text-tabular-data text-on-surface-variant">
              Dalam Perhitungan...
            </td>
<td className="py-space-sm px-space-md">
<span className="inline-flex items-center gap-space-xs px-space-sm py-0.5 rounded bg-status-review-bg text-status-review font-label-xs text-label-xs font-semibold">
<span className="material-symbols-outlined text-[14px] animate-spin">sync</span>
                Sedang Sinkronisasi
              </span>
</td>
<td className="py-space-sm px-space-md text-right">
<button className="px-space-sm py-1 rounded bg-bg-canvas text-on-surface font-label-xs text-label-xs hover:bg-bg-surface-subtle" type="button">
                Pantau Alur
              </button>
</td>
</tr>
{/* ROW 2: Empty/In-Tolerance */}
<tr className="table-row-item hover:bg-bg-canvas/50 transition-colors" data-status="TOLERANSI">
<td className="py-space-sm px-space-md font-tabular-data text-tabular-data text-primary font-semibold">
              NM-2025-0938
            </td>
<td className="py-space-sm px-space-md">
<span className="font-medium text-on-surface">PT Mahakam Sumber Energi</span>
<span className="block font-label-xs text-label-xs text-on-surface-variant">IUP-OP No. 109/ESDM/2020</span>
</td>
<td className="py-space-sm px-space-md">Batu Bara Termal 6.100 GAR</td>
<td className="py-space-sm px-space-md font-tabular-data text-tabular-data text-status-verified font-medium">
              +0,8% (Dalam Toleransi &lt;=3%)
            </td>
<td className="py-space-sm px-space-md">
<span className="inline-flex items-center gap-space-xs px-space-sm py-0.5 rounded bg-status-verified-bg text-status-verified font-label-xs text-label-xs font-semibold">
<span className="material-symbols-outlined text-[14px]">done</span>
                Toleransi Sah
              </span>
</td>
<td className="py-space-sm px-space-md text-right">
<button className="px-space-sm py-1 rounded bg-bg-canvas text-on-surface font-label-xs text-label-xs hover:bg-bg-surface-subtle" type="button">
                Detail Berkas
              </button>
</td>
</tr>
{/* ROW 3: Partial Data */}
<tr className="table-row-item hover:bg-bg-canvas/50 transition-colors" data-status="PARSIAL">
<td className="py-space-sm px-space-md font-tabular-data text-tabular-data text-primary font-semibold">
              NM-2025-0925
            </td>
<td className="py-space-sm px-space-md">
<span className="font-medium text-on-surface">PT Borneo Paser Mandiri</span>
<span className="block font-label-xs text-label-xs text-on-surface-variant">IUP-OP No. 871/ESDM/2023</span>
</td>
<td className="py-space-sm px-space-md">Batu Bara Metalurgi</td>
<td className="py-space-sm px-space-md font-tabular-data text-tabular-data text-accent-palmoil font-medium">
              Data Bea Cukai Belum Masuk
            </td>
<td className="py-space-sm px-space-md">
<span className="inline-flex items-center gap-space-xs px-space-sm py-0.5 rounded bg-status-review-bg text-status-review font-label-xs text-label-xs font-semibold">
<span className="material-symbols-outlined text-[14px]">hourglass_empty</span>
                Data Parsial (Toleransi 3x24 Jam)
              </span>
</td>
<td className="py-space-sm px-space-md text-right">
<button className="px-space-sm py-1 rounded bg-primary text-on-primary font-label-xs text-label-xs hover:bg-primary-container" type="button">
                Kirim Permintaan
              </button>
</td>
</tr>
{/* ROW 4: Forbidden / Least Privilege */}
<tr className="table-row-item hover:bg-bg-canvas/50 transition-colors" data-status="DIBATASI">
<td className="py-space-sm px-space-md font-tabular-data text-tabular-data text-primary font-semibold">
              NM-2025-0914
            </td>
<td className="py-space-sm px-space-md">
<span className="font-medium text-on-surface">PT Kideco Jaya Paser</span>
<span className="block font-label-xs text-label-xs text-on-surface-variant">PKP2B Generasi 1</span>
</td>
<td className="py-space-sm px-space-md">Batu Bara Bituminus</td>
<td className="py-space-sm px-space-md font-tabular-data text-tabular-data text-on-surface-variant">
              [Data Dikaburkan]
            </td>
<td className="py-space-sm px-space-md">
<span className="inline-flex items-center gap-space-xs px-space-sm py-0.5 rounded bg-surface-container-highest text-tertiary font-label-xs text-label-xs font-semibold">
<span className="material-symbols-outlined text-[14px]">lock</span>
                Akses Dibatasi (Di Luar SPT)
              </span>
</td>
<td className="py-space-sm px-space-md text-right">
<button className="px-space-sm py-1 rounded bg-bg-canvas text-on-surface-variant font-label-xs text-label-xs cursor-not-allowed" type="button">
                Terkunci
              </button>
</td>
</tr>
{/* ROW 5: Cryptographic Success */}
<tr className="table-row-item hover:bg-bg-canvas/50 transition-colors" data-status="TERVERIFIKASI">
<td className="py-space-sm px-space-md font-tabular-data text-tabular-data text-primary font-semibold">
              NM-2025-0891
            </td>
<td className="py-space-sm px-space-md">
<span className="font-medium text-on-surface">PT Indo Tambangraya Kaltim</span>
<span className="block font-label-xs text-label-xs text-on-surface-variant">IUP-OP No. 201/ESDM/2019</span>
</td>
<td className="py-space-sm px-space-md">Batu Bara Termal 5.800 GAR</td>
<td className="py-space-sm px-space-md font-tabular-data text-tabular-data text-status-verified font-medium">
              Terekonsiliasi (0,0% Selisih)
            </td>
<td className="py-space-sm px-space-md">
<span className="inline-flex items-center gap-space-xs px-space-sm py-0.5 rounded bg-status-verified-bg text-status-verified font-label-xs text-label-xs font-semibold">
<span className="material-symbols-outlined text-[14px]">verified</span>
                SHA-256 Tersegel
              </span>
</td>
<td className="py-space-sm px-space-md text-right">
<button className="px-space-sm py-1 rounded bg-bg-canvas text-on-surface font-label-xs text-label-xs hover:bg-bg-surface-subtle" type="button">
                Unduh Tanda Terima
              </button>
</td>
</tr>
{/* ROW 6: Overdue */}
<tr className="table-row-item hover:bg-bg-canvas/50 transition-colors" data-status="OVERDUE">
<td className="py-space-sm px-space-md font-tabular-data text-tabular-data text-primary font-semibold">
              NM-2025-0720
            </td>
<td className="py-space-sm px-space-md">
<span className="font-medium text-on-surface">PT Kutai Batubara Selaras</span>
<span className="block font-label-xs text-label-xs text-on-surface-variant">IUP-OP No. 661/ESDM/2022</span>
</td>
<td className="py-space-sm px-space-md">Batu Bara Sub-Bituminus</td>
<td className="py-space-sm px-space-md font-tabular-data text-tabular-data text-status-review font-medium">
              +7,4% (Verifikasi Laboratorium)
            </td>
<td className="py-space-sm px-space-md">
<span className="inline-flex items-center gap-space-xs px-space-sm py-0.5 rounded bg-status-review-bg text-status-review font-label-xs text-label-xs font-semibold">
<span className="material-symbols-outlined text-[14px]">schedule</span>
                Melewati Target (+6 Hari)
              </span>
</td>
<td className="py-space-sm px-space-md text-right">
<button className="px-space-sm py-1 rounded bg-status-review-bg text-status-review font-label-xs text-label-xs font-semibold hover:bg-status-review/20" type="button">
                Eskalasi
              </button>
</td>
</tr>
</tbody>
</table>
</div>
{/* Table Footer Summary */}
<div className="flex flex-wrap items-center justify-between gap-space-sm pt-space-xs text-on-surface-variant font-label-xs text-label-xs">
<div className="flex items-center gap-space-sm">
<span className="">Menampilkan 6 entri ragam uji dari 6 total kasus pilot</span>
<span className="w-1.5 h-1.5 rounded-full bg-outline-variant"></span>
<span className="">Data demonstrasi tata kelola</span>
</div>
<div className="flex items-center gap-space-xs font-tabular-data text-tabular-data">
<span className="">Kepatuhan SLA Pilot: 83,3%</span>
</div>
</div>
</div>
</div>
{/* INTERACTION SCRIPT */}

    </div>
  );
};

export default RagamKondisiPage;
