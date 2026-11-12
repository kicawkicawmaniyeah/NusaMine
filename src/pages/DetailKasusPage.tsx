import React, { useState } from 'react';

interface Props {
  onNavigate?: (path: string) => void;
  onSelectCase?: (caseId: string) => void;
}

export const DetailKasusPage: React.FC<Props> = ({ onNavigate, onSelectCase }) => {
  const [selectedAction, setSelectedAction] = useState<string>("klarifikasi");
  const [rationale, setRationale] = useState<string>("Berdasarkan verifikasi silang awal, dokumen Berita Acara Pelabuhan dan Draft Survey Carsurin menunjukkan indikasi topping-off di kolam labuh STS Muara Berau. Diperlukan konfirmasi tertulis KSOP Samarinda untuk melengkapi audit formal.");
  const [complianceChecked, setComplianceChecked] = useState<boolean>(true);
  const [decisionSuccess, setDecisionSuccess] = useState<string | null>(null);
  const [formError, setFormError] = useState<string | null>(null);

  const handleSubmitDecision = () => {
    setFormError(null);
    if (!rationale.trim() || rationale.trim().length < 20) {
      setFormError("Mohon lengkapi Catatan Pertimbangan Hukum & Rationale Auditor (minimal 20 karakter).");
      return;
    }
    if (!complianceChecked) {
      setFormError("Anda wajib menyetujui pernyataan integritas dan kepatuhan bebas benturan kepentingan.");
      return;
    }
    const actionLabels: Record<string, string> = {
      rekomposisi: "Rekomposisi Tim Penelaah",
      klarifikasi: "Minta Klarifikasi Tambahan ke KSOP & Carsurin",
      inspeksi: "Jadwalkan Inspeksi Fisik Lapangan",
      terima: "Selesaikan Flag (Terima Sanggahan Pelaku Usaha)",
      eskalasi: "Eskalasi ke Panel Gabungan Antar-Lembaga"
    };
    setDecisionSuccess(`Putusan berhasil dicatat secara resmi: ${actionLabels[selectedAction] || selectedAction}. Status Ledger SHA-256 blok #412.982 diterbitkan. Log audit diperbarui.`);
  };
  return (
    <div className="w-full">
      <div className="flex flex-col w-full">
{/* BREADCRUMB & METADATA LEDGER */}
<section className="flex flex-col md:flex-row md:items-center justify-between gap-space-sm pb-space-md mb-space-md">
<div className="flex items-center flex-wrap gap-2 font-label-md text-label-md text-on-surface-variant">
<button onClick={() => onNavigate && onNavigate("pemeriksaan-risiko")} className="inline-flex items-center gap-1.5 px-2 py-1 rounded hover:bg-surface-container-low text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer" type="button">
<span className="material-symbols-outlined text-[16px]">arrow_back</span>
<span className="">Kembali ke Antrean Triase</span>
</button>
<span className="text-outline-variant">/</span>
<span className="text-on-surface-variant">Pemeriksaan Risiko</span>
<span className="text-outline-variant">/</span>
<span className="text-on-surface-variant">Antrean Triase</span>
<span className="text-outline-variant">/</span>
<span className="font-tabular-data text-tabular-data text-on-surface font-semibold bg-surface-container-low px-2 py-0.5 rounded">NM-2025-0891</span>
</div>
<div className="flex items-center gap-space-xs font-label-xs text-label-xs bg-status-verified-bg text-status-verified px-3 py-1.5 rounded-full shadow-sm">
<span className="material-symbols-outlined text-[15px]">verified_user</span>
<span className="font-semibold tracking-wide">Ledger SHA-256 Terverifikasi</span>
<span className="text-status-verified/60 font-mono">#b7e4...98a2</span>
<span className="w-1.5 h-1.5 rounded-full bg-status-verified"></span>
<span className="text-status-neutral font-medium">Blok #412.981</span>
</div>
</section>
{/* KARTU INFORMASI UTAMA & STATUS KASUS */}
<section className="bg-surface rounded-xl shadow-md p-space-lg mb-space-lg relative overflow-hidden">
<div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-accent-butter/20 via-surface-container-low/10 to-transparent pointer-events-none rounded-bl-full"></div>
<div className="flex flex-col lg:flex-row lg:items-start justify-between gap-space-lg relative z-10">
<div className="flex flex-col gap-space-xs max-w-3xl">
<div className="flex flex-wrap items-center gap-space-xs">
<span className="px-2.5 py-1 rounded bg-secondary-container text-on-secondary-container font-label-xs text-label-xs font-semibold">
            Batu Bara (Thermal Coal)
          </span>
<span className="px-2.5 py-1 rounded bg-surface-container text-on-surface-variant font-label-xs text-label-xs">
            IUP-OP: 540/109/IUP-OP/2019
          </span>
<span className="px-2.5 py-1 rounded bg-status-review-bg text-status-review font-label-xs text-label-xs font-bold flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-status-review animate-ping"></span>
            Data demonstrasi
          </span>
</div>
<h1 className="font-display-md text-display-md text-on-surface font-bold tracking-tight mt-1">Kasus NM-2025-0891 - PT Mahakam Bara Energi</h1>
<div className="flex flex-wrap items-center gap-y-1 gap-x-4 font-body-sm text-body-sm text-on-surface-variant">
<div className="flex items-center gap-1.5">
<span className="material-symbols-outlined text-[16px] text-secondary">location_on</span>
<span className="">Kutai Kartanegara, Kalimantan Timur (Pelabuhan Samarinda - Muara Berau)</span>
</div>
<div className="text-outline-variant">•</div>
<div className="flex items-center gap-1.5">
<span className="material-symbols-outlined text-[16px] text-secondary">badge</span>
<span className="">Reviewer Penugasan: <strong className="text-on-surface font-semibold">Bambang S., S.T., M.Si.</strong> (Ditjen Minerba)</span>
</div>
</div>
</div>
{/* STATUS & RESIKO BADGES */}
<div className="flex flex-row lg:flex-col items-end justify-between lg:justify-start gap-space-sm shrink-0">
<div className="bg-status-review-bg p-space-sm rounded-lg flex items-center gap-space-sm shadow-sm">
<span className="material-symbols-outlined text-status-review text-[28px]">pending_actions</span>
<div className="flex flex-col text-right">
<span className="font-label-xs text-label-xs text-on-surface-variant uppercase tracking-wider font-semibold">Status Tahapan</span>
<span className="font-label-md text-label-md text-status-review font-bold">Sanggahan Masuk (Menunggu Verifikasi)</span>
<span className="font-label-xs text-label-xs text-on-surface-variant">Batas Telaah: 11 Hari Kerja Tersisa</span>
</div>
</div>
<div className="bg-status-anomaly-bg/70 px-3 py-2 rounded-lg flex items-center gap-space-sm">
<span className="material-symbols-outlined text-status-anomaly text-[24px]">flag</span>
<div className="flex flex-col text-right">
<div className="flex items-center gap-1 justify-end">
<span className="font-label-xs text-label-xs font-semibold text-status-anomaly uppercase">Risiko Tinggi</span>
<span className="font-tabular-kpi text-tabular-kpi text-status-anomaly leading-none">88<span className="text-body-sm font-normal text-on-surface-variant">/100</span></span>
</div>
<span className="font-label-xs text-label-xs text-on-surface-variant">Pemicu Verifikasi Manusia (Bukan Vonis Hukum)</span>
</div>
</div>
</div>
</div>
{/* PERSISTENT NOTICE BANNER: ASAS PRADUGA & HUMAN IN THE LOOP */}
<div className="mt-space-md bg-bg-surface-subtle/70 rounded-lg p-space-md flex items-start gap-space-sm text-on-surface">
<span className="material-symbols-outlined text-secondary text-[22px] mt-0.5 shrink-0">info</span>
<div className="flex flex-col gap-0.5">
<span className="font-label-md text-label-md font-bold tracking-tight">Prinsip Objektivitas Verifikasi Tata Kelola Publik</span>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
          Skor risiko adalah pemicu pemeriksaan manusia, bukan bukti pelanggaran atau vonis hukum. Penilaian administratif harus berlandaskan asas praduga tak bersalah, pembuktian materiil silang sistem, dan hak sanggahan pelaku usaha.
        </p>
</div>
</div>
</section>
{/* MENGAPA DITANDAI? (ANALISIS INKONSISTENSI DATA & SIDE-BY-SIDE) */}
<section className="mb-space-lg flex flex-col gap-space-md">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-space-xs">
<div>
<div className="flex items-center gap-2 font-label-xs text-label-xs text-secondary uppercase tracking-widest font-bold">
<span className="w-2 h-2 rounded-full bg-secondary"></span>
<span className="">Analisis Otomatis SIMBARA Engine</span>
</div>
<h2 className="font-headline-lg text-headline-lg text-on-surface font-bold mt-1">
          Mengapa Kasus Ini Ditandai? (Inkonsistensi Lintas Sumber)
        </h2>
</div>
<span className="font-label-xs text-label-xs text-on-surface-variant bg-surface-container-low px-2.5 py-1 rounded">
        Algoritma Rekonsiliasi Deviasi Metrologis v3.2
      </span>
</div>
{/* KETERANGAN MODEL BAHASA SEDERHANA */}
<div className="bg-surface rounded-xl p-space-md shadow-sm">
<p className="font-body-md text-body-md text-on-surface leading-relaxed">
        Algoritma deteksi deviasi mendeteksi selisih volume pengapalan antara <strong>deklarasi rencana pengapalan di SIMBARA/MOMS</strong> dengan <strong>laporan muat manifes keberangkatan di Inaportnet KSOP Samarinda</strong> sebesar <strong className="text-status-anomaly font-semibold">+12.450 MT (+12,41%)</strong>, melampaui ambang batas toleransi metrologi teknis (maksimum ±3,0%). Diperlukan tinjauan verifikator manusia terhadap kesesuaian draft survey, log pemindahan, dan dokumen timbangan jetty.
      </p>
</div>
{/* PANEL KOMPARASI BERDAMPINGAN (SIDE-BY-SIDE) */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-md items-stretch">
{/* SUMBER A: SIMBARA & MOMS */}
<div className="lg:col-span-5 bg-surface rounded-xl shadow-sm p-space-md flex flex-col justify-between relative overflow-hidden">
<div className="flex items-center justify-between pb-space-sm mb-space-sm bg-surface-container-low -mx-space-md -mt-space-md p-space-md">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[20px] text-secondary">database</span>
<div>
<span className="font-label-md text-label-md font-bold text-on-surface block">Sumber Data A: SIMBARA &amp; MOMS ESDM</span>
<span className="font-label-xs text-label-xs text-on-surface-variant">Deklarasi Rencana Muat RKAB / RKAP</span>
</div>
</div>
<span className="bg-status-verified-bg text-status-verified px-2 py-0.5 rounded font-label-xs text-label-xs font-semibold">
            Tanda Tangan Valid
          </span>
</div>
<div className="flex flex-col gap-space-sm py-space-xs font-body-sm text-body-sm">
<div className="flex justify-between items-center py-1">
<span className="text-on-surface-variant">Nomor Referensi Transaksi:</span>
<span className="font-tabular-data text-tabular-data font-semibold text-on-surface">#SB-SIMBARA-8921-25</span>
</div>
<div className="flex justify-between items-center py-1 bg-surface-container-low/50 px-2 rounded">
<span className="text-on-surface-variant font-medium">Volume Deklarasi Terdaftar:</span>
<span className="font-tabular-kpi text-tabular-kpi text-primary font-bold">100.200 <span className="font-body-sm text-body-sm font-normal text-on-surface-variant">MT</span></span>
</div>
<div className="flex justify-between items-center py-1">
<span className="text-on-surface-variant">Stempel Waktu SIMBARA:</span>
<span className="font-tabular-data text-tabular-data text-on-surface">19 Feb 2025, 08:30 WITA</span>
</div>
<div className="flex justify-between items-center py-1">
<span className="text-on-surface-variant">Surveyor Lapangan Terdaftar:</span>
<span className="font-semibold text-on-surface">PT Sucofindo Samarinda</span>
</div>
<div className="flex justify-between items-center py-1">
<span className="text-on-surface-variant">Armada Tongkang Terjadwal:</span>
<span className="text-on-surface font-medium">BG. Financia 301 / TB. Samudera Perkasa</span>
</div>
<div className="flex justify-between items-center py-1">
<span className="text-on-surface-variant">Integritas Sandi:</span>
<span className="font-mono text-label-xs text-status-verified bg-status-verified-bg px-2 py-0.5 rounded">SHA256: 9b2d...f41a</span>
</div>
</div>
<div className="mt-space-md pt-space-xs bg-bg-canvas p-space-sm rounded font-label-xs text-label-xs text-on-surface-variant">
          Divalidasi melalui integrasi API Pusdatin ESDM pada 19 Feb 2025 08:30:14 WITA.
        </div>
</div>
{/* SUMBER TENGAH: DEVIASI / DISCREPANCY CALLOUT */}
<div className="lg:col-span-2 bg-bg-surface-subtle rounded-xl shadow-sm p-space-md flex flex-col justify-center items-center text-center relative">
<div className="w-10 h-10 rounded-full bg-status-review-bg text-status-review flex items-center justify-center mb-space-xs shadow-sm">
<span className="material-symbols-outlined text-[24px]">compare_arrows</span>
</div>
<span className="font-label-xs text-label-xs font-semibold text-on-surface uppercase tracking-wider">Deviasi Terhitung</span>
<div className="my-space-sm">
<span className="font-tabular-kpi text-tabular-kpi text-status-anomaly font-bold block">
            +12.450 MT
          </span>
<span className="inline-block bg-status-anomaly-bg text-status-anomaly font-tabular-data text-tabular-data font-bold px-2 py-0.5 rounded-full mt-1">
            +12,41% Deviasi
          </span>
</div>
<div className="flex flex-col gap-1 w-full text-left font-label-xs text-label-xs text-on-surface-variant pt-space-sm bg-surface/70 p-2 rounded">
<div className="flex justify-between">
<span className="">Batas Toleransi:</span>
<span className="font-tabular-data font-semibold text-on-surface">±3,0% (3.000 MT)</span>
</div>
<div className="flex justify-between text-status-anomaly font-medium">
<span className="">Deviasi Ekstra:</span>
<span className="font-tabular-data font-semibold">+9.450 MT</span>
</div>
</div>
<span className="mt-space-sm font-label-xs text-label-xs text-status-review font-semibold bg-status-review-bg px-2 py-1 rounded">
          Perlu Klarifikasi Metrologi
        </span>
</div>
{/* SUMBER B: INAPORTNET & CEISA */}
<div className="lg:col-span-5 bg-surface rounded-xl shadow-sm p-space-md flex flex-col justify-between relative overflow-hidden">
<div className="flex items-center justify-between pb-space-sm mb-space-sm bg-surface-container-low -mx-space-md -mt-space-md p-space-md">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[20px] text-accent-palmoil">directions_boat</span>
<div>
<span className="font-label-md text-label-md font-bold text-on-surface block">Sumber Data B: Inaportnet &amp; CEISA</span>
<span className="font-label-xs text-label-xs text-on-surface-variant">Laporan Manifes Realisasi Muat Keberangkatan</span>
</div>
</div>
<span className="bg-status-verified-bg text-status-verified px-2 py-0.5 rounded font-label-xs text-label-xs font-semibold">
            KSOP Terverifikasi
          </span>
</div>
<div className="flex flex-col gap-space-sm py-space-xs font-body-sm text-body-sm">
<div className="flex justify-between items-center py-1">
<span className="text-on-surface-variant">Nomor Referensi KSOP / Bea Cukai:</span>
<span className="font-tabular-data text-tabular-data font-semibold text-on-surface">#IN-4402-SMD / CEISA-EXP-2025-091</span>
</div>
<div className="flex justify-between items-center py-1 bg-surface-container-low/50 px-2 rounded">
<span className="text-on-surface-variant font-medium">Volume Manifes Realisasi:</span>
<span className="font-tabular-kpi text-tabular-kpi text-status-anomaly font-bold">112.650 <span className="font-body-sm text-body-sm font-normal text-on-surface-variant">MT</span></span>
</div>
<div className="flex justify-between items-center py-1">
<span className="text-on-surface-variant">Stempel Waktu Pelabuhan:</span>
<span className="font-tabular-data text-tabular-data text-on-surface">20 Feb 2025, 14:15 WITA</span>
</div>
<div className="flex justify-between items-center py-1">
<span className="text-on-surface-variant">Otoritas Pelabuhan Penerbit:</span>
<span className="font-semibold text-on-surface">KSOP Kelas II Samarinda</span>
</div>
<div className="flex justify-between items-center py-1">
<span className="text-on-surface-variant">Draft Survey Report:</span>
<span className="text-on-surface font-medium">PT Surveyor Indonesia (Mitra Inaportnet)</span>
</div>
<div className="flex justify-between items-center py-1">
<span className="text-on-surface-variant">Armada Tambahan Tercatat:</span>
<span className="font-medium text-status-review">+ BG. Samudera 12 (Tongkang Pengalih)</span>
</div>
</div>
<div className="mt-space-md pt-space-xs bg-bg-canvas p-space-sm rounded font-label-xs text-label-xs text-on-surface-variant">
          Sinkronisasi gateway KSOP Samarinda via Pusat Integrasi Logistik Nasional (20 Feb 14:20 WITA).
        </div>
</div>
</div>
{/* PARAMETER KONTRIBUTOR SKOR (5 INDIKATOR AI RISK ENGINE & FRAUD DETECTION) */}
<div className="bg-surface rounded-xl shadow-sm p-space-md">
<div className="flex items-center justify-between mb-space-sm">
  <div>
    <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
      5 Indikator AI Risk Engine &amp; Fraud Detection (Total Skor: 88/100)
    </h3>
    <p className="font-body-sm text-body-sm text-on-surface-variant">
      Penilaian risiko multi-faktor komprehensif sebagai pemicu klarifikasi berimbang (Human-in-the-Loop).
    </p>
  </div>
  <span className="font-label-xs text-label-xs bg-status-review-bg text-status-review font-semibold px-2.5 py-1 rounded">
    Perlu Tinjauan Faktual
  </span>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-space-sm">
  {/* Indikator 1 */}
  <div className="bg-surface-container-low p-space-sm rounded-lg flex flex-col justify-between border-l-2 border-status-anomaly">
    <div>
      <div className="flex items-center justify-between mb-1">
        <span className="font-label-xs font-bold text-on-surface">1. Selisih Volume Antar-Instansi</span>
        <span className="font-tabular-data text-label-xs font-bold text-status-anomaly">Tinggi</span>
      </div>
      <div className="w-full bg-surface rounded-full h-1.5 my-1 overflow-hidden">
        <div className="bg-status-anomaly h-1.5 rounded-full" style={{width: "95%"}}></div>
      </div>
      <span className="font-label-xs text-label-xs text-on-surface-variant">Deviasi +12,4% antara SIMBARA vs Inaportnet (ambang batas normal ±3%).</span>
    </div>
    <span className="mt-2 text-[10px] text-status-anomaly font-semibold">Pemicu Utama</span>
  </div>

  {/* Indikator 2 */}
  <div className="bg-surface-container-low p-space-sm rounded-lg flex flex-col justify-between border-l-2 border-status-verified">
    <div>
      <div className="flex items-center justify-between mb-1">
        <span className="font-label-xs font-bold text-on-surface">2. Modifikasi Pasca-Pengajuan</span>
        <span className="font-tabular-data text-label-xs font-bold text-status-verified">Nol (0)</span>
      </div>
      <div className="w-full bg-surface rounded-full h-1.5 my-1 overflow-hidden">
        <div className="bg-status-verified h-1.5 rounded-full" style={{width: "15%"}}></div>
      </div>
      <span className="font-label-xs text-label-xs text-on-surface-variant">Tidak ada berkas yang diubah pasca-stempel waktu pengajuan awal.</span>
    </div>
    <span className="mt-2 text-[10px] text-status-verified font-semibold">Keutuhan Berkas Terjaga</span>
  </div>

  {/* Indikator 3 */}
  <div className="bg-surface-container-low p-space-sm rounded-lg flex flex-col justify-between border-l-2 border-status-review">
    <div>
      <div className="flex items-center justify-between mb-1">
        <span className="font-label-xs font-bold text-on-surface">3. Sinkronisasi Waktu Sampling</span>
        <span className="font-tabular-data text-label-xs font-bold text-status-review">Sedang</span>
      </div>
      <div className="w-full bg-surface rounded-full h-1.5 my-1 overflow-hidden">
        <div className="bg-status-review h-1.5 rounded-full" style={{width: "75%"}}></div>
      </div>
      <span className="font-label-xs text-label-xs text-on-surface-variant">Selisih waktu 29 jam 45 menit antara izin tolak dan draft survey akhir.</span>
    </div>
    <span className="mt-2 text-[10px] text-status-review font-semibold">Perlu Konfirmasi KSOP</span>
  </div>

  {/* Indikator 4 */}
  <div className="bg-surface-container-low p-space-sm rounded-lg flex flex-col justify-between border-l-2 border-status-review">
    <div>
      <div className="flex items-center justify-between mb-1">
        <span className="font-label-xs font-bold text-on-surface">4. Hasil Lab Dekat Ambang Batas</span>
        <span className="font-tabular-data text-label-xs font-bold text-status-review">Waspada</span>
      </div>
      <div className="w-full bg-surface rounded-full h-1.5 my-1 overflow-hidden">
        <div className="bg-status-review h-1.5 rounded-full" style={{width: "82%"}}></div>
      </div>
      <span className="font-label-xs text-label-xs text-on-surface-variant">GAR 4.214 kcal/kg tepat 0,3% di atas batas spesifikasi minimum ekspor.</span>
    </div>
    <span className="mt-2 text-[10px] text-status-review font-semibold">Uji Petik Independen Disarankan</span>
  </div>

  {/* Indikator 5 */}
  <div className="bg-surface-container-low p-space-sm rounded-lg flex flex-col justify-between border-l-2 border-status-review">
    <div>
      <div className="flex items-center justify-between mb-1">
        <span className="font-label-xs font-bold text-on-surface">5. Pola Data Historis Tidak Wajar</span>
        <span className="font-tabular-data text-label-xs font-bold text-status-review">Deviasi Pola</span>
      </div>
      <div className="w-full bg-surface rounded-full h-1.5 my-1 overflow-hidden">
        <div className="bg-status-review h-1.5 rounded-full" style={{width: "68%"}}></div>
      </div>
      <span className="font-label-xs text-label-xs text-on-surface-variant">Lonjakan volume +12% tidak lazim dibanding 12 pengapalan musim lalu.</span>
    </div>
    <span className="mt-2 text-[10px] text-status-review font-semibold">Tinjau Rekam Jejak KTT</span>
  </div>
</div>
</div>
</section>
{/* BUKTI PENDUKUNG & AUDIT TRAIL IMMUTABLE (PROVENANCE) */}
<section className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg mb-space-lg">
{/* DOKUMEN BUKTI & SANGGAHAN PELAKU USAHA (7 Kolom) */}
<div className="lg:col-span-7 flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<h2 className="font-headline-lg text-headline-lg text-on-surface font-bold">
          Daftar Berkas Bukti &amp; Sanggahan
        </h2>
<span className="font-label-xs text-label-xs text-secondary-fixed-dim bg-primary-container px-2.5 py-1 rounded font-medium">
          3 Berkas Terenkripsi
        </span>
</div>
<div className="flex flex-col gap-space-sm">
{/* BUKTI A */}
<div className="bg-surface rounded-xl p-space-md shadow-sm hover:shadow-md transition-shadow flex items-start gap-space-md">
<div className="p-space-sm bg-status-verified-bg text-status-verified rounded-lg shrink-0">
<span className="material-symbols-outlined text-[28px]">description</span>
</div>
<div className="flex flex-col gap-1 w-full">
<div className="flex items-start justify-between">
<div>
<span className="font-label-xs text-label-xs font-semibold text-status-verified uppercase">Bukti A: Dokumen Resmi Pelabuhan</span>
<h4 className="font-headline-sm text-headline-sm font-bold text-on-surface">Surat Persetujuan Berlayar (SPB) &amp; Manifes KSOP</h4>
</div>
<span className="font-label-xs text-label-xs bg-surface-container-low px-2 py-0.5 rounded text-on-surface font-mono">PDF • 4.2 MB</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">
              Dokumen verifikasi resmi keberangkatan kapal KSOP Samarinda No: SPB.SMD/2025/II/1029. Memuat pengesahan tonase 112.650 MT.
            </p>
<div className="flex items-center justify-between pt-space-xs font-label-xs text-label-xs text-on-surface-variant">
<span className="font-mono text-outline">SHA256: 8a4c0...f291e</span>
<a className="text-secondary font-semibold hover:underline inline-flex items-center gap-1" href="#">
<span className="material-symbols-outlined text-[14px]">visibility</span>
                Pratinjau Berkas
              </a>
</div>
</div>
</div>
{/* BUKTI B */}
<div className="bg-surface rounded-xl p-space-md shadow-sm hover:shadow-md transition-shadow flex items-start gap-space-md">
<div className="p-space-sm bg-surface-container-low text-secondary rounded-lg shrink-0">
<span className="material-symbols-outlined text-[28px]">scale</span>
</div>
<div className="flex flex-col gap-1 w-full">
<div className="flex items-start justify-between">
<div>
<span className="font-label-xs text-label-xs font-semibold text-secondary uppercase">Bukti B: Telemetri Timbangan</span>
<h4 className="font-headline-sm text-headline-sm font-bold text-on-surface">Certificate of Weight (CoW) Sensor Jetty</h4>
</div>
<span className="font-label-xs text-label-xs bg-surface-container-low px-2 py-0.5 rounded text-on-surface font-mono">RAW CSV/JSON • 18 MB</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">
              Log sensor continuous belt conveyor weigher di Jetty Mahakam Barat. Timbangan mencatat total akumulasi 100.180 MT saat pemuatan awal.
            </p>
<div className="flex items-center justify-between pt-space-xs font-label-xs text-label-xs text-on-surface-variant">
<span className="font-mono text-outline">SHA256: 3c27e...bc884</span>
<a className="text-secondary font-semibold hover:underline inline-flex items-center gap-1" href="#">
<span className="material-symbols-outlined text-[14px]">analytics</span>
                Inspeksi Telemetri
              </a>
</div>
</div>
</div>
{/* BUKTI C: SANGGAHAN PELAKU USAHA */}
<div className="bg-surface rounded-xl p-space-md shadow-sm hover:shadow-md transition-shadow flex items-start gap-space-md relative overflow-hidden">
<div className="p-space-sm bg-status-review-bg text-status-review rounded-lg shrink-0">
<span className="material-symbols-outlined text-[28px]">gavel</span>
</div>
<div className="flex flex-col gap-1 w-full">
<div className="flex items-start justify-between">
<div>
<span className="font-label-xs text-label-xs font-semibold text-status-review uppercase">Bukti C: Berkas Sanggahan Perusahaan</span>
<h4 className="font-headline-sm text-headline-sm font-bold text-on-surface">B.A. Rekonsiliasi Pengalihan Muatan (Air Surut)</h4>
</div>
<span className="font-label-xs text-label-xs bg-status-review-bg text-status-review px-2 py-0.5 rounded font-bold font-mono">DILAMPIRKAN</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">
              Perusahaan menyatakan terjadi kondisi dangkal/air surut di alur Sungai Mahakam yang memaksa penggabungan sisa muatan 12.450 MT dari tongkang sekunder (BG. Samudera 12) ke BG. Financia 301 di titik Muara Berau Anchorage. Disertai sertifikat surveyor Carsurin No. CS-SMD-8812.
            </p>
<div className="flex items-center justify-between pt-space-xs font-label-xs text-label-xs text-on-surface-variant">
<span className="font-mono text-outline">SHA256: e871a...9923d</span>
<a className="text-secondary font-semibold hover:underline inline-flex items-center gap-1" href="#">
<span className="material-symbols-outlined text-[14px]">file_download</span>
                Unduh Dokumen Sanggahan
              </a>
</div>
</div>
</div>
</div>
</div>
{/* PROVENANCE LOG / JEJAK AUDIT PERMANEN (5 Kolom) */}
<div className="lg:col-span-5 bg-surface rounded-xl p-space-md shadow-sm flex flex-col justify-between">
<div>
<div className="flex items-center justify-between pb-space-sm mb-space-sm bg-surface-container-low -mx-space-md -mt-space-md p-space-md">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[20px] text-primary">history_edu</span>
<span className="font-label-md text-label-md font-bold text-on-surface">Jejak Audit Provenance (Immutable Log)</span>
</div>
<span className="font-label-xs text-label-xs text-on-surface-variant">WITA (UTC+8)</span>
</div>
{/* TIMELINE VERTICAL */}
<div className="relative pl-6 flex flex-col gap-space-md my-space-sm">
<div className="absolute left-2.5 top-2 bottom-2 w-0.5 bg-border-warm"></div>
{/* EVENT 1 */}
<div className="relative flex flex-col gap-0.5">
<span className="absolute -left-6 top-1 w-3 h-3 rounded-full bg-status-verified shadow-sm"></span>
<span className="font-label-xs text-label-xs font-mono text-on-surface-variant">19 Feb 2025 • 08:30 WITA</span>
<span className="font-label-md text-label-md font-semibold text-on-surface">Pengajuan RKAB SIMBARA Diterbitkan</span>
<p className="font-body-sm text-body-sm text-on-surface-variant">Diterbitkan oleh PT Mahakam Bara Energi (Akun Terverifikasi Direksi).</p>
</div>
{/* EVENT 2 */}
<div className="relative flex flex-col gap-0.5">
<span className="absolute -left-6 top-1 w-3 h-3 rounded-full bg-status-neutral shadow-sm"></span>
<span className="font-label-xs text-label-xs font-mono text-on-surface-variant">20 Feb 2025 • 14:15 WITA</span>
<span className="font-label-md text-label-md font-semibold text-on-surface">Manifes Pelabuhan Diunggah</span>
<p className="font-body-sm text-body-sm text-on-surface-variant">KSOP Kelas II Samarinda memasukkan data SPB ke sistem Inaportnet.</p>
</div>
{/* EVENT 3 */}
<div className="relative flex flex-col gap-0.5">
<span className="absolute -left-6 top-1 w-3 h-3 rounded-full bg-status-anomaly shadow-sm"></span>
<span className="font-label-xs text-label-xs font-mono text-on-surface-variant">20 Feb 2025 • 16:00 WITA</span>
<span className="font-label-md text-label-md font-semibold text-on-surface">AI Engine Menetapkan Flag Triase</span>
<p className="font-body-sm text-body-sm text-on-surface-variant">Terdeteksi anomali volume selisih +12,4%. Status: Antrean Triase Verifikasi.</p>
</div>
{/* EVENT 4 */}
<div className="relative flex flex-col gap-0.5">
<span className="absolute -left-6 top-1 w-3 h-3 rounded-full bg-secondary shadow-sm"></span>
<span className="font-label-xs text-label-xs font-mono text-on-surface-variant">21 Feb 2025 • 09:00 WITA</span>
<span className="font-label-md text-label-md font-semibold text-on-surface">Notifikasi Hak Jawab Terkirim</span>
<p className="font-body-sm text-body-sm text-on-surface-variant">Portal kepatuhan PT Mahakam Bara Energi menerima panggilan klarifikasi 14 hari.</p>
</div>
{/* EVENT 5 */}
<div className="relative flex flex-col gap-0.5">
<span className="absolute -left-6 top-1 w-3 h-3 rounded-full bg-status-review shadow-sm"></span>
<span className="font-label-xs text-label-xs font-mono text-on-surface-variant">22 Feb 2025 • 11:30 WITA</span>
<span className="font-label-md text-label-md font-semibold text-on-surface">Perusahaan Mengunggah Dokumen Sanggahan</span>
<p className="font-body-sm text-body-sm text-on-surface-variant">Unggahan Berita Acara Rekonsiliasi &amp; CoA Carsurin bertanda tangan elektronik.</p>
</div>
{/* EVENT 6 (CURRENT) */}
<div className="relative flex flex-col gap-0.5">
<span className="absolute -left-6 top-1 w-3 h-3 rounded-full bg-primary-container shadow-sm ring-4 ring-primary-container/20"></span>
<span className="font-label-xs text-label-xs font-mono text-on-surface-variant">23 Feb 2025 • 08:00 WITA</span>
<span className="font-label-md text-label-md font-semibold text-on-surface">Dialokasikan ke Auditor Penelaah</span>
<p className="font-body-sm text-body-sm text-on-surface-variant">Kasus aktif ditangani oleh Bambang S., S.T., M.Si. (Ditjen Minerba).</p>
</div>
</div>
</div>
<div className="bg-bg-canvas p-space-sm rounded-lg mt-space-sm flex items-center justify-between text-on-surface-variant font-label-xs text-label-xs">
<span className="flex items-center gap-1.5">
<span className="material-symbols-outlined text-[16px] text-status-verified">lock</span>
<span className="">Ledger Bersandi: Merkle Tree Valid</span>
</span>
<span className="font-mono">Sync: 23 Feb 2025 08:01:12</span>
</div>
</div>
</section>
{/* PANEL AKSI AUDITOR / HUMAN IN THE LOOP WORKSTATION */}
<section className="bg-surface rounded-xl shadow-lg p-space-lg mb-space-lg">
<div className="flex flex-col md:flex-row md:items-center justify-between pb-space-md mb-space-md bg-surface-container-low -mx-space-lg -mt-space-lg p-space-lg">
<div className="flex items-center gap-space-sm">
<div className="w-10 h-10 rounded-lg bg-primary-container text-on-primary flex items-center justify-center">
<span className="material-symbols-outlined text-[24px]">assignment_turned_in</span>
</div>
<div>
<h2 className="font-headline-lg text-headline-lg text-on-surface font-bold">
            Panel Keputusan Verifikator Manusia (Human Decision Station)
          </h2>
<p className="font-body-sm text-body-sm text-on-surface-variant">
            Pilih tindakan pemeriksaan materiil berdasarkan analisis bukti dan regulasi Ditjen Minerba.
          </p>
</div>
</div>
<div className="text-right">
<span className="font-label-xs text-label-xs text-on-surface-variant uppercase">Otoritas Penilai</span>
<span className="font-label-md text-label-md font-semibold text-on-surface block">Auditor Madya Minerba (Kemen ESDM)</span>
</div>
</div>
{/* OPSI TINDAKAN RESMI */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-md mb-space-lg" id="action-options">
{/* Opsi 1 */}
<label className="cursor-pointer p-space-md rounded-xl bg-surface-container-low hover:bg-surface-container transition-colors flex items-start gap-space-sm relative">
<input className="mt-1 text-primary focus:ring-0" name="audit_action" type="radio" value="rekomposisi" checked={selectedAction === "rekomposisi"} onChange={() => setSelectedAction("rekomposisi")} />
<div className="flex flex-col gap-0.5">
<span className="font-headline-sm text-headline-sm font-bold text-on-surface">Rekomposisi Tim Penelaah</span>
<p className="font-body-sm text-body-sm text-on-surface-variant">
            Delegasikan telaah metrologi draft survey ke surveyor terakreditasi atau ahli pelabuhan.
          </p>
</div>
</label>
{/* Opsi 2 */}
<label className="cursor-pointer p-space-md rounded-xl bg-surface-container-low hover:bg-surface-container transition-colors flex items-start gap-space-sm relative">
<input defaultChecked className="mt-1 text-primary focus:ring-0" name="audit_action" type="radio" value="klarifikasi" checked={selectedAction === "klarifikasi"} onChange={() => setSelectedAction("klarifikasi")} />
<div className="flex flex-col gap-0.5">
<span className="font-headline-sm text-headline-sm font-bold text-on-surface">Minta Klarifikasi Tambahan</span>
<p className="font-body-sm text-body-sm text-on-surface-variant">
            Kirim surat klarifikasi resmi ke KSOP Samarinda &amp; Carsurin untuk validasi tongkang sekunder (Batas: 7 hari kerja).
          </p>
</div>
</label>
{/* Opsi 3 */}
<label className="cursor-pointer p-space-md rounded-xl bg-surface-container-low hover:bg-surface-container transition-colors flex items-start gap-space-sm relative">
<input className="mt-1 text-primary focus:ring-0" name="audit_action" type="radio" value="inspeksi" checked={selectedAction === "inspeksi"} onChange={() => setSelectedAction("inspeksi")} />
<div className="flex flex-col gap-0.5">
<span className="font-headline-sm text-headline-sm font-bold text-on-surface">Jadwalkan Inspeksi Lapangan</span>
<p className="font-body-sm text-body-sm text-on-surface-variant">
            Terbitkan Surat Tugas inspeksi fisik ke Jetty Muatan Samarinda dan titik timbang kalibrasi conveyor.
          </p>
</div>
</label>
{/* Opsi 4 */}
<label className="cursor-pointer p-space-md rounded-xl bg-surface-container-low hover:bg-surface-container transition-colors flex items-start gap-space-sm relative">
<input className="mt-1 text-primary focus:ring-0" name="audit_action" type="radio" value="terima" checked={selectedAction === "terima"} onChange={() => setSelectedAction("terima")} />
<div className="flex flex-col gap-0.5">
<span className="font-headline-sm text-headline-sm font-bold text-on-surface">Selesaikan Flag (Terima Sanggahan)</span>
<p className="font-body-sm text-body-sm text-on-surface-variant">
            Sanggahan pengalihan muatan air surut dinilai wajar dan absah. Tutup flag tanpa catatan pelanggaran.
          </p>
</div>
</label>
{/* Opsi 5 */}
<label className="cursor-pointer p-space-md rounded-xl bg-surface-container-low hover:bg-surface-container transition-colors flex items-start gap-space-sm relative md:col-span-2 lg:col-span-2">
<input className="mt-1 text-primary focus:ring-0" name="audit_action" type="radio" value="eskalasi" checked={selectedAction === "eskalasi"} onChange={() => setSelectedAction("eskalasi")} />
<div className="flex flex-col gap-0.5">
<span className="font-headline-sm text-headline-sm font-bold text-on-surface">Eskalasi ke Panel Gabungan Antar-Lembaga</span>
<p className="font-body-sm text-body-sm text-on-surface-variant">
            Rujuk kasus ke forum evaluasi gabungan Ditjen Minerba, Ditjen Bea &amp; Cukai, dan Ditjen Hubla untuk investigasi metrologis terpadu.
          </p>
</div>
</label>
</div>
{/* FORM RATIONALE WAJIB & PERNYATAAN KEPATUHAN */}
<div className="flex flex-col gap-space-md bg-bg-canvas p-space-md rounded-xl">
<div className="flex flex-col gap-1">
<label className="font-label-md text-label-md font-bold text-on-surface flex items-center justify-between" htmlFor="auditor-rationale">
<span className="">Catatan Pertimbangan Hukum &amp; Rationale Auditor <span className="text-status-anomaly">*Wajib Diisi</span></span>
<span className="font-label-xs text-label-xs text-on-surface-variant font-normal">Minimal 50 karakter</span>
</label>
<textarea className="w-full bg-surface rounded-lg p-space-sm font-body-md text-body-md text-on-surface shadow-sm focus:outline-none focus:ring-2 focus:ring-primary placeholder:text-outline-variant" id="auditor-rationale" value={rationale} onChange={(e) => setRationale(e.target.value)} placeholder="Tuliskan pertimbangan teknis, rujukan regulasi (misal Kepmen ESDM / Permenhub), dan analisis atas keabsahan Berita Acara Rekonsiliasi sebelum mengambil keputusan..." rows={4}></textarea>
</div>
<div className="flex items-start gap-space-sm">
<input className="mt-1 text-primary rounded focus:ring-0 cursor-pointer" id="compliance-check" type="checkbox" checked={complianceChecked} onChange={(e) => setComplianceChecked(e.target.checked)} />
<label className="font-body-sm text-body-sm text-on-surface cursor-pointer leading-relaxed" htmlFor="compliance-check">
          Saya menyatakan dengan sesungguhnya bahwa keputusan ini diambil berdasarkan verifikasi pembuktian materiil secara objektif, bebas dari benturan kepentingan, serta akan dicatat secara permanen dan tidak dapat diubah di dalam Ledger Audit NusaMine.
        </label>
</div>
{/* PERINGATAN REGULASI & TATA KELOLA PUBLIK */}
<div className="bg-status-review-bg/60 p-space-sm rounded-lg flex items-center gap-space-sm text-on-surface">
<span className="material-symbols-outlined text-status-review text-[20px] shrink-0">gavel</span>
<span className="font-label-xs text-label-xs text-on-surface-variant leading-tight">
<strong>Peringatan Regulasi:</strong> NusaMine tidak menyediakan tombol sanksi otomatis, penangguhan izin sepihak, atau pemblokiran ekspor instan. Seluruh tindak lanjut administratif mengacu pada UU Minerba dan prosedur adjudikasi resmi Ditjen Minerba.
        </span>
</div>

        {formError && (
          <div className="p-space-md rounded-lg bg-status-anomaly-bg border border-status-anomaly text-status-anomaly font-body-sm font-semibold flex items-center gap-2">
            <span className="material-symbols-outlined text-[20px]">error</span>
            <span>{formError}</span>
          </div>
        )}

        {decisionSuccess && (
          <div className="p-space-md rounded-lg bg-status-verified-bg border border-status-verified text-status-verified font-body-sm font-semibold flex items-center gap-2">
            <span className="material-symbols-outlined text-[20px]">verified</span>
            <span>{decisionSuccess}</span>
          </div>
        )}
        {/* ACTION BUTTONS */}
<div className="flex flex-wrap items-center justify-between gap-space-md pt-space-xs">
<div className="flex items-center gap-2 font-label-xs text-label-xs text-on-surface-variant">
<span className="material-symbols-outlined text-[16px] text-status-verified">enhanced_encryption</span>
<span className="">Kriptografi Digital Signature Ditjen Minerba siap disematkan</span>
</div>
<div className="flex items-center gap-space-sm">
<button className="px-space-md py-2 rounded-lg bg-surface text-on-surface-variant hover:text-on-surface font-label-md text-label-md font-semibold transition-colors" type="button">
            Simpan Konsep (Draft)
          </button>
<button className="px-space-lg py-2.5 rounded-lg bg-primary-container text-on-primary hover:bg-primary font-label-md text-label-md font-bold shadow-md transition-all flex items-center gap-2 cursor-pointer" id="btn-submit-action" type="button" onClick={handleSubmitDecision}>
<span className="material-symbols-outlined text-[18px]">verified</span>
<span className="">Konfirmasi &amp; Catat Putusan Auditor</span>
</button>
</div>
</div>
</div>
</section>
{/* FOOTER METADATA SISTEM & REKONSILIASI SIMBARA */}
<footer className="flex flex-col md:flex-row items-center justify-between gap-space-sm py-space-md text-on-surface-variant font-label-xs text-label-xs">
<div className="flex items-center gap-space-xs">
<span className="">NusaMine Governance Layer</span>
<span className="text-outline-variant">•</span>
<span className="">Engine Versi 2.4.1 (Produksi Pilot Kaltim-Kalsel)</span>
<span className="text-outline-variant">•</span>
<span className="">Protokol Keamanan SHA-256</span>
</div>
<div className="flex items-center gap-space-sm">
<span className="text-status-verified font-medium flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-status-verified"></span>
        SIMBARA API Connected
      </span>
<span className="text-outline-variant">•</span>
<span className="">Ditjen Minerba • Kemendag • Kemenkeu</span>
</div>
</footer>
</div>

    </div>
  );
};

export default DetailKasusPage;
