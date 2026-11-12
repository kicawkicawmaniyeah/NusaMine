import React, { useState } from 'react';

interface Props {
  onNavigate?: (path: string) => void;
  onSelectCase?: (caseId: string) => void;
}

export const WorkspaceSanggahanPage: React.FC<Props> = ({ onNavigate, onSelectCase }) => {
  const [selectedDecision, setSelectedDecision] = useState<string>("accept_full");
  const [regulatoryRationale, setRegulatoryRationale] = useState<string>("Berdasarkan Permen ESDM No. 16/2021 Pasal 34 ayat (2) mengenai penyesuaian titik muat darurat dalam kondisi kahar alur pelayaran sungai, serta Kepmen ESDM No. 258.K/MB.01/MEM.B/2023 tentang Tata Cara Rekonsiliasi e-PNBP. Pemenuhan kewajiban royalti terbukti lunas.");
  const [declarationChecked, setDeclarationChecked] = useState<boolean>(true);
  const [submissionStatus, setSubmissionStatus] = useState<string | null>(null);
  const [formError, setFormError] = useState<string | null>(null);

  const handleSubmit = () => {
    setFormError(null);
    if (!declarationChecked) {
      setFormError("Anda wajib menyetujui pernyataan integritas penelaahan sanggahan.");
      return;
    }
    const decMap: Record<string, string> = {
      accept_full: "Sanggahan Diterima Penuh (Rekomendasi Pembebasan Flag)",
      accept_partial: "Sanggahan Diterima Sebagian (Penyesuaian e-PNBP)",
      field_inspection: "Perlu Verifikasi Fisik / Inspeksi Lapangan",
      reject: "Sanggahan Ditolak (Lanjut Investigasi Khusus)"
    };
    setSubmissionStatus(`Keputusan "${decMap[selectedDecision] || selectedDecision}" telah resmi ditetapkan dan dicatat dalam Rantai Jejak Audit Blok #489.103.`);
  };
  return (
    <div className="w-full">
      <div className="flex flex-col w-full gap-space-lg pb-space-2xl">
{/* ==================== HEADER KASUS SANGGAHAN & METADATA ==================== */}
<div className="relative overflow-hidden rounded-xl bg-surface p-space-lg shadow-sm">
<div className="flex flex-col gap-space-md">
{/* Title & Context Strip */}
<div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-space-md">
<div className="flex flex-col gap-space-xs max-w-3xl">
<div className="flex flex-wrap items-center gap-space-sm mb-1">
<span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-status-verified text-on-primary font-label-xs text-label-xs font-semibold">
<span className="material-symbols-outlined text-[14px]">shield_person</span>
              Penelaah Ditjen Minerba
            </span>
<span className="font-tabular-data text-tabular-data text-on-surface-variant font-medium">Kasus: NM-2025-0891</span>
<span className="text-outline-variant font-normal">•</span>
<span className="font-tabular-data text-tabular-data text-on-surface-variant">Sanggahan: SGH-2025-0891-MBE</span>
<span className="inline-flex items-center px-2 py-0.5 rounded bg-surface-container-low text-on-surface-variant font-label-xs text-label-xs">
              Pilot Data Demonstrasi
            </span>
</div>
<h1 className="font-display-md text-display-md text-primary font-bold tracking-tight">
            Telaah Sanggahan &amp; Bukti Tandingan (Reviewer Workspace)
          </h1>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            Pemeriksaan berimbang atas klarifikasi teknis dan bukti tandingan pelaku usaha terhadap anomali rekonsiliasi data produksi dan manifes pelayaran.
          </p>
</div>
{/* Action / Role Badge */}
<div className="flex flex-col sm:flex-row lg:flex-col items-start sm:items-center lg:items-end gap-2 shrink-0">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-status-review-bg text-status-review font-label-md text-label-md font-bold shadow-sm">
<span className="material-symbols-outlined text-[18px]">hourglass_top</span>
            Dalam Penelaahan Materiil
          </div>
<span className="font-label-xs text-label-xs text-on-surface-variant font-mono">
            Sandi Hash ID: 8f9b2c...a04e
          </span>
</div>
</div>
{/* Entity & Technical Parameter Bar */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-sm p-space-md rounded-lg bg-surface-container-low">
<div className="flex flex-col gap-0.5">
<span className="font-label-xs text-label-xs text-on-surface-variant uppercase tracking-wider">Pelaku Usaha</span>
<span className="font-headline-sm text-headline-sm text-on-surface font-semibold truncate">PT Mahakam Bara Energi</span>
<span className="font-label-xs text-label-xs text-outline font-mono">IUP-OP: 540/012/IUP-OP/2021</span>
</div>
<div className="flex flex-col gap-0.5">
<span className="font-label-xs text-label-xs text-on-surface-variant uppercase tracking-wider">Komoditas &amp; Spesifikasi</span>
<span className="font-headline-sm text-headline-sm text-on-surface font-semibold">Batu Bara Termal (GAR 4.200)</span>
<span className="font-label-xs text-label-xs text-outline">Kalori Kontrak • Abu Maks 8%</span>
</div>
<div className="flex flex-col gap-0.5">
<span className="font-label-xs text-label-xs text-on-surface-variant uppercase tracking-wider">Lokasi Muat &amp; Titik Alih</span>
<span className="font-headline-sm text-headline-sm text-on-surface font-semibold">STS Muara Berau / Samarinda</span>
<span className="font-label-xs text-label-xs text-outline">Jetty Bara 02 &gt; Kolam Labuh Muara Berau</span>
</div>
<div className="flex flex-col gap-0.5">
<span className="font-label-xs text-label-xs text-on-surface-variant uppercase tracking-wider">Selisih Terdeteksi Awal</span>
<div className="flex items-center gap-1.5">
<span className="font-tabular-kpi text-tabular-kpi text-status-review">+12.450 MT</span>
<span className="font-label-xs text-label-xs font-bold text-status-review">(+12,41%)</span>
</div>
<span className="font-label-xs text-label-xs text-outline">Toleransi Normal Standar SIMBARA: 5,00%</span>
</div>
</div>
{/* SLA & Pilot Governance Parameter Box */}
<div className="flex flex-col gap-space-sm p-space-md rounded-lg bg-bg-surface-subtle/50">
<div className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-sm">
<div className="flex items-center gap-space-sm">
<div className="w-8 h-8 rounded-full bg-primary-container text-surface flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-[18px]">calendar_clock</span>
</div>
<div>
<div className="flex items-center gap-2">
<span className="font-headline-sm text-headline-sm text-primary font-bold">Hari ke-12 dari Target 30 Hari Kerja</span>
<span className="font-label-xs text-label-xs px-2 py-0.5 rounded-full bg-status-verified-bg text-status-verified font-medium">Dalam Jadwal Pilot</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">
                Target Penyelesaian: 30 Hari Kerja (Parameter Pilot). Ditargetkan selesai dalam 30 hari kerja pilot untuk evaluasi efektivitas tata kelola; jika terlewati, berstatus <span className="font-semibold text-on-surface">'Melewati target tinjauan'</span> tanpa menyiratkan konsekuensi atau sanksi hukum otomatis.
              </p>
</div>
</div>
{/* Educational Pilot Badge Preview */}
<div className="flex items-center gap-2 self-start lg:self-center shrink-0 bg-surface px-3 py-1.5 rounded-lg shadow-sm">
<span className="font-label-xs text-label-xs text-on-surface-variant">Preview Status Lewat Target:</span>
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-surface-container text-accent-palmoil font-label-xs text-label-xs font-semibold">
<span className="material-symbols-outlined text-[14px]">warning</span> Melewati Target Tinjauan
            </span>
</div>
</div>
{/* Progress Bar */}
<div className="w-full bg-surface-container rounded-full h-2.5 overflow-hidden">
<div className="bg-primary-container h-2.5 rounded-full transition-all duration-500" style={{width: "40%"}}></div>
</div>
<div className="flex justify-between items-center font-label-xs text-label-xs text-on-surface-variant font-mono">
<span className="">Pengajuan Diterima: 16 Feb 2025</span>
<span className="">Sisa 18 Hari Kerja Menuju Target Evaluasi</span>
<span className="">Batas Waktu Rekomendasi: 28 Mar 2025</span>
</div>
</div>
</div>
</div>
{/* ==================== RINGKASAN ARGUMEN & KLARIFIKASI KTT ==================== */}
<div className="grid grid-cols-1 lg:grid-cols-3 gap-space-lg">
<div className="lg:col-span-2 flex flex-col gap-space-md rounded-xl bg-surface p-space-lg shadow-sm">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-sm">
<span className="material-symbols-outlined text-primary text-[24px]">assignment_turned_in</span>
<div>
<h2 className="font-headline-lg text-headline-lg text-primary font-bold">Ringkasan Klarifikasi &amp; Argumen KTT</h2>
<span className="font-label-xs text-label-xs text-on-surface-variant">Pernyataan Resmi Kepala Teknik Tambang (KTT) Berita Acara No. SGH-2025-0891-MBE</span>
</div>
</div>
<span className="px-2.5 py-1 rounded bg-secondary-container text-on-secondary-container font-label-xs text-label-xs font-semibold">
          Kategori: Alur Pelayaran &amp; Topping-Off
        </span>
</div>
<div className="rounded-lg p-space-md bg-surface-container-low text-on-surface flex flex-col gap-space-sm">
<div className="flex items-start gap-space-sm">
<span className="material-symbols-outlined text-accent-palmoil text-[22px] shrink-0 mt-0.5">format_quote</span>
<p className="font-body-md text-body-md leading-relaxed text-on-surface italic">
            “Draft clearance Sungai Mahakam mengalami sedimentasi musiman dan air surut drastis hingga ketinggian aman 4,2 meter pada tanggal 13–14 Februari 2025. Tongkang utama BG. Marine Power 3008 hanya dapat dimuati maksimal 100.200 MT di Jetty Bara 02 guna menghindari risiko kandas di titik ambang sungai. Sisa kuota pemenuhan kontrak sebesar 12.450 MT dipenuhi melalui prosedur topping-off resmi menggunakan tongkang pengumpan sekunder BG. Tirta Samudera di kolam labuh lepas pantai STS Muara Berau, berdasar izin KSOP No. UM 003/14/KSOP.SMD-2025. Seluruh royalti dan PNBP telah diperhitungkan dalam deklarasi final.”
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-space-sm pt-space-xs font-body-sm text-body-sm">
<div className="flex flex-col p-space-xs rounded bg-surface">
<span className="font-label-xs text-label-xs text-on-surface-variant">Penandatangan Sanggahan</span>
<span className="font-headline-sm text-headline-sm text-primary font-semibold">Ir. Hardiansyah, S.T.</span>
<span className="font-label-xs text-label-xs text-outline">Kepala Teknik Tambang (Sertifikat KTT: 1042/KTT/ESDM/2019)</span>
</div>
<div className="flex flex-col p-space-xs rounded bg-surface">
<span className="font-label-xs text-label-xs text-on-surface-variant">Verifikator Metrologi Pihak Ketiga</span>
<span className="font-headline-sm text-headline-sm text-primary font-semibold">PT Carsurin Tbk (Cabang Samarinda)</span>
<span className="font-label-xs text-label-xs text-outline">Surveyor Independen Terakreditasi • Sertifikat #CS-SMD-8812</span>
</div>
</div>
</div>
</div>
{/* Quick Assessment Metric Box */}
<div className="flex flex-col justify-between gap-space-md rounded-xl bg-surface p-space-lg shadow-sm">
<div>
<h3 className="font-headline-sm text-headline-sm text-primary font-bold mb-space-sm flex items-center gap-1.5">
<span className="material-symbols-outlined text-[18px]">balance</span>
          Indikator Bobot Argumen
        </h3>
<div className="flex flex-col gap-space-sm">
<div className="flex items-center justify-between p-space-xs rounded bg-surface-container-low">
<span className="font-body-sm text-body-sm text-on-surface">Kesesuaian Izin KSOP</span>
<span className="font-label-md text-label-md font-bold text-status-verified flex items-center gap-1">
<span className="material-symbols-outlined text-[16px]">check_circle</span> Valid Terbit
            </span>
</div>
<div className="flex items-center justify-between p-space-xs rounded bg-surface-container-low">
<span className="font-body-sm text-body-sm text-on-surface">Validitas Data Pasut Sungai</span>
<span className="font-label-md text-label-md font-bold text-status-verified flex items-center gap-1">
<span className="material-symbols-outlined text-[16px]">check_circle</span> Sinkron BMKG
            </span>
</div>
<div className="flex items-center justify-between p-space-xs rounded bg-surface-container-low">
<span className="font-body-sm text-body-sm text-on-surface">Jejak Digital Timbangan STS</span>
<span className="font-label-md text-label-md font-bold text-status-review flex items-center gap-1">
<span className="material-symbols-outlined text-[16px]">pending</span> Perlu Cek Draft Survey
            </span>
</div>
</div>
</div>
<div className="p-space-sm rounded-lg bg-surface-container text-on-surface flex flex-col gap-1">
<span className="font-label-xs text-label-xs font-bold text-tertiary uppercase tracking-wider">Kesimpulan Awal AI Reviewer</span>
<p className="font-body-sm text-body-sm leading-snug">
          Indikasi penambahan tonase di STS berdasar logistik operasional air surut memiliki preseden serupa (89% kasus terverifikasi valid di DAS Mahakam).
        </p>
</div>
</div>
</div>
{/* ==================== SIDE-BY-SIDE DOKUMEN & BUKTI TANDINGAN ==================== */}
<div className="flex flex-col gap-space-md">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm">
<div className="flex items-center gap-space-sm">
<span className="material-symbols-outlined text-primary text-[24px]">compare_arrows</span>
<h2 className="font-headline-lg text-headline-lg text-primary font-bold">Komparasi Bukti Otoritas vs. Bukti Tandingan Pelaku Usaha</h2>
</div>
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-surface hover:bg-surface-container-low text-on-surface text-label-md font-label-md shadow-sm transition-colors" type="button">
<span className="material-symbols-outlined text-[16px]">sync_alt</span>
          Sinkronisasi Metrologi Ulang
        </button>
<button className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-primary text-on-primary text-label-md font-label-md hover:bg-primary-container transition-colors shadow-sm" type="button">
<span className="material-symbols-outlined text-[16px]">verified</span>
          Uji Kriptografi SHA-256
        </button>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-space-lg">
{/* KOLOM KIRI: DOKUMEN AWAL (SISTEM / REGULATOR) */}
<div className="flex flex-col gap-space-md rounded-xl bg-surface p-space-lg shadow-sm">
<div className="flex items-center justify-between pb-space-sm bg-surface">
<div className="flex items-center gap-2">
<span className="w-2.5 h-2.5 rounded-full bg-status-review"></span>
<span className="font-headline-sm text-headline-sm text-primary font-bold">Sumber Otoritas &amp; Pemicu Anomali</span>
</div>
<span className="font-label-xs text-label-xs px-2 py-0.5 rounded bg-surface-container-low text-on-surface-variant font-mono">
            Basis: SIMBARA &amp; Inaportnet
          </span>
</div>
{/* Berkas 1: Rencana Muat RKAB */}
<div className="rounded-lg p-space-md bg-surface-container-low flex flex-col gap-space-xs">
<div className="flex items-start justify-between">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-on-surface-variant text-[20px]">description</span>
<span className="font-headline-sm text-headline-sm text-on-surface font-semibold">RKAB &amp; LHV SIMBARA Jetty 02</span>
</div>
<span className="font-label-xs text-label-xs px-2 py-0.5 rounded bg-status-verified-bg text-status-verified font-medium">Sah Terdaftar</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">
            Data deklarasi timbangan conveyor belt di Jetty Bara 02 saat pemuatan tongkang primer BG. Marine Power 3008.
          </p>
<div className="grid grid-cols-2 gap-2 mt-1 p-2 rounded bg-surface font-label-xs text-label-xs">
<div>
<span className="text-outline">No. Tiket SIMBARA:</span>
<p className="font-mono font-bold text-on-surface text-tabular-data">#SB-2025-02-8921-MBE</p>
</div>
<div>
<span className="text-outline">Volume Timbangan:</span>
<p className="font-mono font-bold text-on-surface text-tabular-data">100.200,00 MT</p>
</div>
</div>
<div className="flex items-center justify-between text-[11px] text-outline pt-1 font-mono">
<span className="">Payload: a73f...b891</span>
<span className="">13 Feb 2025 18:22 WITA</span>
</div>
</div>
{/* Berkas 2: Manifes Inaportnet KSOP */}
<div className="rounded-lg p-space-md bg-surface-container-low flex flex-col gap-space-xs">
<div className="flex items-start justify-between">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-on-surface-variant text-[20px]">directions_boat</span>
<span className="font-headline-sm text-headline-sm text-on-surface font-semibold">Manifes Keberangkatan KSOP Samarinda</span>
</div>
<span className="font-label-xs text-label-xs px-2 py-0.5 rounded bg-surface-container text-accent-palmoil font-medium">Pemicu Deviasi</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">
            Surat Persetujuan Berlayar (SPB) akhir diterbitkan di Samarinda menuju PLTU Suralaya dengan bobot tercatat 112.650 MT.
          </p>
<div className="grid grid-cols-2 gap-2 mt-1 p-2 rounded bg-surface font-label-xs text-label-xs">
<div>
<span className="text-outline">No. SPB Inaportnet:</span>
<p className="font-mono font-bold text-on-surface text-tabular-data">#IN-SMD-2025-02-4402</p>
</div>
<div>
<span className="text-outline">Tonase Final Manifes:</span>
<p className="font-mono font-bold text-status-review text-tabular-data">112.650,00 MT</p>
</div>
</div>
<div className="flex items-center justify-between text-[11px] text-outline pt-1 font-mono">
<span className="">Otoritas: KSOP Kls II Samarinda</span>
<span className="">20 Feb 2025 14:15 WITA</span>
</div>
</div>
{/* Anomaly Summary Highlight */}
<div className="rounded-lg p-space-md bg-status-review-bg text-on-surface flex flex-col gap-2">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md font-bold text-status-review uppercase tracking-wide">Analisis Deviasi Data Awal</span>
<span className="font-tabular-kpi text-tabular-kpi text-status-review">+12.450 MT (+12,41%)</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface">
            Sistem mendeteksi selisih antara pengisian dermaga awal (100.200 MT) dengan dokumen keberangkatan pelabuhan (112.650 MT). Tanpa dokumen topping-off, deviasi ini terindikasi sebagai potensi ketidaksesuaian deklarasi royalti mineral.
          </p>
</div>
<div className="flex items-center justify-between pt-space-xs font-label-xs text-label-xs text-on-surface-variant">
<span className="">Verifikasi Basis Data Otoritas: SHA-256 Valid</span>
<button className="text-primary hover:underline font-semibold flex items-center gap-1" type="button">
<span className="material-symbols-outlined text-[14px]">open_in_new</span> Detail Log API SIMBARA
          </button>
</div>
</div>
{/* KOLOM KANAN: BUKTI TANDINGAN PELAKU USAHA (COUNTER-EVIDENCE) */}
<div className="flex flex-col gap-space-md rounded-xl bg-surface p-space-lg shadow-sm">
<div className="flex items-center justify-between pb-space-sm bg-surface">
<div className="flex items-center gap-2">
<span className="w-2.5 h-2.5 rounded-full bg-status-verified"></span>
<span className="font-headline-sm text-headline-sm text-primary font-bold">Bukti Tandingan Pelaku Usaha (Counter-Evidence)</span>
</div>
<span className="font-label-xs text-label-xs px-2 py-0.5 rounded bg-status-verified-bg text-status-verified font-mono">
            3 Berkas Lengkap Diserahkan
          </span>
</div>
{/* Berkas Tandingan 1 */}
<div className="rounded-lg p-space-md bg-surface-container-low flex flex-col gap-space-xs">
<div className="flex items-start justify-between">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-status-verified text-[20px]">assignment</span>
<span className="font-headline-sm text-headline-sm text-on-surface font-semibold">BA Rekonsiliasi Internal Topping-off</span>
</div>
<span className="font-label-xs text-label-xs px-2 py-0.5 rounded bg-status-verified-bg text-status-verified font-medium">BSrE Terverifikasi</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">
            Berita acara perpindahan muatan 12.450 MT dari tongkang BG. Tirta Samudera ke BG. Marine Power 3008 di kolam labuh STS Muara Berau.
          </p>
<div className="grid grid-cols-2 gap-2 mt-1 p-2 rounded bg-surface font-label-xs text-label-xs">
<div>
<span className="text-outline">Nomor Berita Acara:</span>
<p className="font-mono font-bold text-on-surface text-tabular-data">#BA/MBE/LOG-OP/2025/02-088</p>
</div>
<div>
<span className="text-outline">Volume Alih Muat:</span>
<p className="font-mono font-bold text-status-verified text-tabular-data">12.450,00 MT</p>
</div>
</div>
<div className="flex items-center justify-between text-[11px] text-outline pt-1 font-mono">
<span className="">Stempel Waktu: 15 Feb 2025 09:30 WITA</span>
<button className="text-primary hover:underline font-semibold" type="button">Lihat Berkas PDF</button>
</div>
</div>
{/* Berkas Tandingan 2 */}
<div className="rounded-lg p-space-md bg-surface-container-low flex flex-col gap-space-xs">
<div className="flex items-start justify-between">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-status-verified text-[20px]">fact_check</span>
<span className="font-headline-sm text-headline-sm text-on-surface font-semibold">Laporan Draft Survey Sekunder Carsurin</span>
</div>
<span className="font-label-xs text-label-xs px-2 py-0.5 rounded bg-status-verified-bg text-status-verified font-medium">Sertifikat Resmi</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">
            Draft survey independen sebelum dan sesudah alih muat tongkang oleh surveyor terakreditasi ESDM.
          </p>
<div className="grid grid-cols-2 gap-2 mt-1 p-2 rounded bg-surface font-label-xs text-label-xs">
<div>
<span className="text-outline">Sertifikat Carsurin:</span>
<p className="font-mono font-bold text-on-surface text-tabular-data">#CS-2025-DSR-0914</p>
</div>
<div>
<span className="text-outline">Spesifikasi GAR / Ash:</span>
<p className="font-mono font-bold text-on-surface text-tabular-data">4.214 kcal/kg | 7,6%</p>
</div>
</div>
<div className="flex items-center justify-between text-[11px] text-outline pt-1 font-mono">
<span className="">Metode: Hydrostatic Table Draft Reading</span>
<button className="text-primary hover:underline font-semibold" type="button">Validasi CoA</button>
</div>
</div>
{/* Berkas Tandingan 3 */}
<div className="rounded-lg p-space-md bg-surface-container-low flex flex-col gap-space-xs">
<div className="flex items-start justify-between">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-status-verified text-[20px]">anchor</span>
<span className="font-headline-sm text-headline-sm text-on-surface font-semibold">Log Pemanduan &amp; Izin Olah Gerak STS</span>
</div>
<span className="font-label-xs text-label-xs px-2 py-0.5 rounded bg-status-verified-bg text-status-verified font-medium">VTS Samarinda Sah</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">
            Konfirmasi pergerakan tongkang dan izin olah gerak bongkar muat alih tongkang dari stasiun Vessel Traffic Services (VTS).
          </p>
<div className="grid grid-cols-2 gap-2 mt-1 p-2 rounded bg-surface font-label-xs text-label-xs">
<div>
<span className="text-outline">Izin Olah Gerak KSOP:</span>
<p className="font-mono font-bold text-on-surface text-tabular-data">#UM.003/14/KSOP.SMD-2025</p>
</div>
<div>
<span className="text-outline">Koordinat Labuh:</span>
<p className="font-mono font-bold text-on-surface text-tabular-data">00°32'40" S / 117°18'12" E</p>
</div>
</div>
<div className="flex items-center justify-between text-[11px] text-outline pt-1 font-mono">
<span className="">Status Pandu: Stasiun VTS Muara Berau</span>
<button className="text-primary hover:underline font-semibold" type="button">Buka Radar Log</button>
</div>
</div>
{/* Tindakan Cepat Berkas */}
<div className="flex flex-wrap items-center justify-between gap-2 pt-space-xs">
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface text-label-xs font-label-xs font-semibold transition-colors" type="button">
<span className="material-symbols-outlined text-[16px]">visibility</span> Buka Dokumen Penuh (Bundle PDF)
            </button>
<button className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface text-label-xs font-label-xs font-semibold transition-colors" type="button">
<span className="material-symbols-outlined text-[16px]">fingerprint</span> Periksa Integritas Hash
            </button>
</div>
<span className="text-[11px] text-status-verified font-medium flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">lock</span> Tanda Tangan BSrE Sah
          </span>
</div>
</div>
</div>
</div>
{/* ==================== PENUGASAN PENINJAU INDEPENDEN ==================== */}
<div className="rounded-xl bg-surface p-space-lg shadow-sm flex flex-col gap-space-md">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm pb-space-sm bg-surface">
<div className="flex items-center gap-space-sm">
<span className="material-symbols-outlined text-primary text-[24px]">group_add</span>
<div>
<h2 className="font-headline-lg text-headline-lg text-primary font-bold">Penugasan Peninjau Independen (Independent Reviewer)</h2>
<span className="font-body-sm text-body-sm text-on-surface-variant">Memastikan penelaahan objektif berstandar ISO 17020 dan bebas benturan kepentingan.</span>
</div>
</div>
<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-status-verified-bg text-status-verified font-label-xs text-label-xs font-bold">
<span className="material-symbols-outlined text-[16px]">check_circle</span> Pakta Integritas Aktif
      </span>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">
{/* Verifikator Internal Minerba */}
<div className="p-space-md rounded-lg bg-surface-container-low flex flex-col gap-space-xs">
<span className="font-label-xs text-label-xs text-on-surface-variant uppercase tracking-wider">Penelaah Utama (ESDM)</span>
<div className="flex items-center gap-3 my-1">
<div className="w-10 h-10 rounded-full bg-primary-container text-surface flex items-center justify-center font-bold">BS</div>
<div>
<p className="font-headline-sm text-headline-sm text-on-surface font-bold leading-tight">Bambang S., S.T., M.Si.</p>
<p className="font-label-xs text-label-xs text-outline font-mono">NIP: <a href="tel:19820415 200801 1" className="">19820415 200801 1</a> 004</p>
</div>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant">Auditor Madya Inspektorat Tambang Wilayah Kaltim</span>
<div className="mt-2 pt-2 bg-surface p-2 rounded text-[11px] text-status-verified font-semibold flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">verified_user</span> Disposisi Mandat: DIR-MINERBA/SP-0891
        </div>
</div>
{/* Pemilihan Peninjau Independen Terakreditasi */}
<div className="p-space-md rounded-lg bg-surface-container-low flex flex-col gap-space-xs">
<span className="font-label-xs text-label-xs text-on-surface-variant uppercase tracking-wider">Lembaga / Tim Ahli Independen</span>
<div className="mt-1 flex flex-col gap-1.5">
<select className="w-full bg-surface text-on-surface p-2 rounded text-body-sm font-body-sm focus:outline-none focus:ring-1 focus:ring-primary" id="select-independent-reviewer">
<option>Balai Besar Pengujian Mineral &amp; Batubara (bbp-mbb)</option>
<option>Pusat Penelitian Metrologi LIPI / BRIN</option>
<option>Tim Ahli Navigasi &amp; Alur Pelayaran Ditjen Hubla</option>
<option>Ikatan Auditor Ahli Tambang Indonesia (IAATI)</option>
</select>
<p className="font-label-xs text-label-xs text-on-surface-variant">
            Ditugaskan untuk verifikasi teknis pasang-surut alur Mahakam &amp; kalibrasi draft survey tongkang.
          </p>
</div>
<div className="mt-auto pt-2 bg-surface p-2 rounded text-[11px] text-status-verified font-semibold flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">handshake</span> Status: Bersedia &amp; Terlampir Surat Tugas
        </div>
</div>
{/* Pernyataan Bebas Benturan Kepentingan */}
<div className="p-space-md rounded-lg bg-surface-container-low flex flex-col justify-between gap-space-xs">
<div>
<span className="font-label-xs text-label-xs text-on-surface-variant uppercase tracking-wider">Verifikasi Integritas</span>
<div className="flex items-center gap-2 mt-1">
<span className="material-symbols-outlined text-status-verified text-[22px]">policy</span>
<p className="font-headline-sm text-headline-sm text-on-surface font-semibold">Bebas Benturan Kepentingan</p>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
            Kedua penelaah tidak memiliki hubungan kepemilikan saham, keluarga, atau penugasan konsultan pada PT Mahakam Bara Energi dalam 3 tahun terakhir.
          </p>
</div>
<div className="flex items-center justify-between text-[11px] text-outline pt-2 font-mono">
<span className="">Pakta #PI-2025-0891</span>
<button className="text-primary hover:underline font-semibold" type="button">Unduh Dokumen</button>
</div>
</div>
</div>
</div>
{/* ==================== STASIUN PENILAIAN, TEMUAN & KEPUTUSAN AKHIR ==================== */}
<div className="rounded-xl bg-surface p-space-lg shadow-sm flex flex-col gap-space-md">
<div className="flex items-center justify-between pb-space-sm bg-surface">
<div className="flex items-center gap-space-sm">
<span className="material-symbols-outlined text-primary text-[24px]">gavel</span>
<div>
<h2 className="font-headline-lg text-headline-lg text-primary font-bold">Stasiun Keputusan &amp; Temuan Auditor (Human Decision)</h2>
<span className="font-body-sm text-body-sm text-on-surface-variant">Prinsip Human-in-the-loop: Sistem AI hanya menyajikan komparasi, penetapan status final sepenuhnya kewenangan penelaah.</span>
</div>
</div>
<span className="px-2.5 py-1 rounded bg-surface-container-low font-tabular-data text-tabular-data text-on-surface-variant">
        Mode: Keputusan Kolektif Berjenjang
      </span>
</div>
{/* Kolom Temuan Audit Evaluasi */}
<div className="flex flex-col gap-space-xs">
<label className="font-headline-sm text-headline-sm text-on-surface font-semibold flex items-center justify-between" htmlFor="audit-findings">
<span className="">Catatan Temuan Evaluasi Materiil (Audit Findings):</span>
<span className="font-label-xs text-label-xs text-outline font-normal">Wajib diisi dengan rujukan bukti fisik</span>
</label>
<textarea className="w-full p-space-md rounded-lg bg-surface-container-low text-on-surface font-body-md text-body-md focus:outline-none focus:ring-1 focus:ring-primary leading-relaxed" id="audit-findings" placeholder="Tuliskan temuan hasil verifikasi silang dokumen manifest, koordinat stasiun VTS, dan keabsahan draft survey..." rows={4}>Telah dilakukan verifikasi silang terhadap 3 berkas tandingan. 
1. Log VTS Samarinda No. UM 003/14/KSOP.SMD-2025 mengonfirmasi aktivitas olah gerak alih muat BG. Tirta Samudera menuju BG. Marine Power 3008 pada tanggal 14-15 Februari 2025 di koordinat STS Muara Berau.
2. Selisih tonase 12.450 MT identik dengan pembacaan draft survey akhir Carsurin (Sertifikat CS-2025-DSR-0914) dengan deviasi metrologi di bawah 0,2%.
3. Kondisi hidromorfologi Sungai Mahakam pada tanggal tersebut terbukti mengalami air surut (draft 4.2m) yang memvalidasi alasan operasional KTT untuk menghindari kapal kandas.
4. Nilai e-PNBP dan royalti final atas total 112.650 MT telah disetorkan secara penuh melalui SIMBARA Billing ID #992819028.</textarea>
</div>
{/* Pilihan Keputusan Sanggahan (Cards Grid) */}
<div className="flex flex-col gap-space-xs">
<span className="font-headline-sm text-headline-sm text-on-surface font-semibold">Penetapan Keputusan Akhir Sanggahan:</span>
<div className="grid grid-cols-1 md:grid-cols-2 gap-space-sm mt-1" id="decision-options">
{/* Opsi 1: Diterima Penuh (Default Selected) */}
<label className="cursor-pointer relative p-space-md rounded-lg bg-status-verified-bg/40 hover:bg-status-verified-bg/70 transition-all flex items-start gap-space-sm shadow-sm ring-2 ring-primary">
<input defaultChecked className="mt-1 text-primary focus:ring-primary" name="decision" type="radio" value="accept_full" checked={selectedDecision === "accept_full"} onChange={() => setSelectedDecision("accept_full")} />
<div className="flex flex-col gap-0.5">
<span className="font-headline-sm text-headline-sm text-primary font-bold flex items-center gap-1.5">
<span className="material-symbols-outlined text-[18px]">verified</span>
              Sanggahan Diterima Penuh (Rekomendasi Tutup Anomali)
            </span>
<p className="font-body-sm text-body-sm text-on-surface-variant">
              Anomali dinyatakan klir dan berdasar operasional legal. Sistem akan merekonsiliasi kuota RKAB dan membuka kembali validasi ekspor/pengapalan normal.
            </p>
</div>
</label>
{/* Opsi 2: Diterima Sebagian */}
<label className="cursor-pointer relative p-space-md rounded-lg bg-surface-container-low hover:bg-surface-container transition-all flex items-start gap-space-sm">
<input className="mt-1 text-primary focus:ring-primary" name="decision" type="radio" value="accept_partial" checked={selectedDecision === "accept_partial"} onChange={() => setSelectedDecision("accept_partial")} />
<div className="flex flex-col gap-0.5">
<span className="font-headline-sm text-headline-sm text-on-surface font-bold flex items-center gap-1.5">
<span className="material-symbols-outlined text-[18px]">tune</span>
              Sanggahan Diterima Sebagian (Penyesuaian e-PNBP)
            </span>
<p className="font-body-sm text-body-sm text-on-surface-variant">
              Topping-off diakui namun terdapat selisih kalori/royalti yang memerlukan penerbitan Surat Tagihan Royalti Kurang Bayar (STB).
            </p>
</div>
</label>
{/* Opsi 3: Butuh Info Lapangan */}
<label className="cursor-pointer relative p-space-md rounded-lg bg-surface-container-low hover:bg-surface-container transition-all flex items-start gap-space-sm">
<input className="mt-1 text-primary focus:ring-primary" name="decision" type="radio" value="field_inspection" checked={selectedDecision === "field_inspection"} onChange={() => setSelectedDecision("field_inspection")} />
<div className="flex flex-col gap-0.5">
<span className="font-headline-sm text-headline-sm text-on-surface font-bold flex items-center gap-1.5">
<span className="material-symbols-outlined text-[18px]">travel_explore</span>
              Perlu Verifikasi Fisik / Inspeksi Lapangan
            </span>
<p className="font-body-sm text-body-sm text-on-surface-variant">
              Membutuhkan kalibrasi fisik sensor belt weigher Jetty Bara 02 atau konfrontasi saksi awak kapal pandu STS Muara Berau.
            </p>
</div>
</label>
{/* Opsi 4: Ditolak */}
<label className="cursor-pointer relative p-space-md rounded-lg bg-surface-container-low hover:bg-surface-container transition-all flex items-start gap-space-sm">
<input className="mt-1 text-primary focus:ring-primary" name="decision" type="radio" value="reject" checked={selectedDecision === "reject"} onChange={() => setSelectedDecision("reject")} />
<div className="flex flex-col gap-0.5">
<span className="font-headline-sm text-headline-sm text-status-anomaly font-bold flex items-center gap-1.5">
<span className="material-symbols-outlined text-[18px]">cancel</span>
              Sanggahan Ditolak (Lanjut Investigasi Khusus)
            </span>
<p className="font-body-sm text-body-sm text-on-surface-variant">
              Bukti tandingan tidak membuktikan asal-usul 12.450 MT. Direkomendasikan pembekuan izin angkut dan pelimpahan ke Ditjen Gakkum ESDM.
            </p>
</div>
</label>
</div>
</div>
{/* Kolom Dasar Regulasi Tertulis & Tanggal Keputusan */}
<div className="grid grid-cols-1 lg:grid-cols-3 gap-space-md">
<div className="lg:col-span-2 flex flex-col gap-space-xs">
<label className="font-headline-sm text-headline-sm text-on-surface font-semibold" htmlFor="regulatory-rationale">
          Dasar Hukum &amp; Pertimbangan Regulasi (Mandatory Rationale):
        </label>
<textarea className="w-full p-space-md rounded-lg bg-surface-container-low text-on-surface font-body-md text-body-md focus:outline-none focus:ring-1 focus:ring-primary" id="regulatory-rationale" value={regulatoryRationale} onChange={(e) => setRegulatoryRationale(e.target.value)} placeholder="Tuliskan rujukan pasal Permen ESDM, Kepmen, atau petunjuk teknis SIMBARA..." rows={4}>Berdasarkan Permen ESDM No. 16/2021 Pasal 34 ayat (2) mengenai penyesuaian titik muat darurat dalam kondisi kahar alur pelayaran sungai, serta Kepmen ESDM No. 258.K/MB.01/MEM.B/2023 tentang Tata Cara Rekonsiliasi e-PNBP. Pemenuhan kewajiban royalti terbukti lunas.</textarea>
</div>
<div className="flex flex-col justify-between gap-space-sm p-space-md rounded-lg bg-surface-container-low">
<div className="flex flex-col gap-1">
<span className="font-label-xs text-label-xs text-on-surface-variant uppercase tracking-wider">Tanggal &amp; Waktu Penetapan</span>
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-[20px]">calendar_today</span>
<span className="font-headline-sm text-headline-sm text-on-surface font-bold">24 Februari 2025</span>
</div>
<span className="font-tabular-data text-tabular-data text-outline font-mono">10:30 WITA (UTC+8)</span>
</div>
<div className="flex flex-col gap-1 pt-2 bg-surface p-2 rounded">
<span className="font-label-xs text-label-xs text-on-surface-variant">Tingkat Keyakinan Bukti</span>
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md font-bold text-status-verified">99,4% Terverifikasi Faktual</span>
<span className="material-symbols-outlined text-status-verified text-[16px]">verified</span>
</div>
</div>
</div>
</div>

        {formError && (
          <div className="p-space-md rounded-lg bg-status-anomaly-bg border border-status-anomaly text-status-anomaly font-body-sm font-semibold flex items-center gap-2">
            <span className="material-symbols-outlined text-[20px]">error</span>
            <span>{formError}</span>
          </div>
        )}

        {submissionStatus && (
          <div className="p-space-md rounded-lg bg-status-verified-bg border border-status-verified text-status-verified font-body-sm font-semibold flex items-center gap-2">
            <span className="material-symbols-outlined text-[20px]">verified</span>
            <span>{submissionStatus}</span>
          </div>
        )}
        {/* Checklist & Submission Bar */}
<div className="flex flex-col gap-space-md pt-space-xs">
<label className="flex items-center gap-3 cursor-pointer p-space-sm rounded-lg bg-bg-surface-subtle/50 hover:bg-bg-surface-subtle transition-colors">
<input defaultChecked className="w-4 h-4 rounded text-primary focus:ring-primary" id="declaration-check" type="checkbox" checked={declarationChecked} onChange={(e) => setDeclarationChecked(e.target.checked)} />
<span className="font-body-sm text-body-sm text-on-surface">
          Saya menyatakan dengan sesungguhnya bahwa keputusan penelaahan sanggahan ini diambil secara berimbang, bebas benturan kepentingan, serta didasarkan pada integritas bukti metrologi dan peraturan perundangan yang berlaku.
        </span>
</label>
<div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-space-sm">
<div className="flex items-center gap-2 text-on-surface-variant font-label-xs text-label-xs font-mono">
<span className="material-symbols-outlined text-[16px]">lock_clock</span>
          Kunci Kriptografi Terhubung: HSM Ditjen Minerba Server 04
        </div>
<div className="flex items-center gap-space-sm">
<button className="px-space-md py-2.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md font-semibold transition-colors" type="button">
            Simpan Draf Pertimbangan
          </button>
<button className="inline-flex items-center justify-center gap-2 px-space-lg py-2.5 rounded-lg bg-primary hover:bg-primary-container text-on-primary font-headline-sm text-headline-sm font-bold shadow-md transition-all" id="submit-decision-btn" type="button" onClick={handleSubmit}>
<span className="material-symbols-outlined text-[20px]">assignment_turned_in</span>
            Tetapkan Keputusan &amp; Catat di Audit Trail
          </button>
</div>
</div>
</div>
</div>
{/* ==================== AUDIT TRAIL KRONOLOGIS TERPADU ==================== */}
<div className="rounded-xl bg-surface p-space-lg shadow-sm flex flex-col gap-space-md">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm pb-space-sm bg-surface">
<div className="flex items-center gap-space-sm">
<span className="material-symbols-outlined text-primary text-[24px]">history_edu</span>
<div>
<h2 className="font-headline-lg text-headline-lg text-primary font-bold">Rantai Jejak Audit Terpadu (Immutable Audit Trail)</h2>
<span className="font-body-sm text-body-sm text-on-surface-variant">Catatan kronologis peristiwa tidak dapat diubah (tamper-proof log) yang tersinkronisasi di jaringan NusaMine.</span>
</div>
</div>
<div className="flex items-center gap-2">
<span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-surface-container-low text-on-surface-variant font-mono text-[11px]">
          Blok Tinggi: #489.102
        </span>
<button className="text-primary hover:underline font-label-xs text-label-xs font-semibold flex items-center gap-0.5" type="button">
<span className="material-symbols-outlined text-[14px]">download</span> Ekspor Log
        </button>
</div>
</div>
{/* Timeline Steps */}
<div className="relative pl-6 flex flex-col gap-space-lg before:content-[''] before:absolute before:left-2.5 before:top-2 before:bottom-2 before:w-0.5 before:bg-border-subtle">
{/* Step 1: Deteksi Awal */}
<div className="relative flex flex-col gap-1">
<div className="absolute -left-6 top-1 w-3.5 h-3.5 rounded-full bg-status-review ring-4 ring-surface"></div>
<div className="flex flex-wrap items-center justify-between gap-1">
<div className="flex items-center gap-2">
<span className="font-headline-sm text-headline-sm text-on-surface font-bold">Deteksi Anomali Rekonsiliasi Otomatis</span>
<span className="font-label-xs text-label-xs px-2 py-0.5 rounded bg-status-review-bg text-status-review font-semibold">Sistem SIMBARA</span>
</div>
<span className="font-tabular-data text-tabular-data text-outline font-mono">14 Feb 2025 • 22:40 WITA</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">
          Mesin anomali NusaMine menandai selisih deviasi muatan 12.450 MT (+12,41%) antara LHV Jetty 02 dan manifes Inaportnet KSOP Samarinda. Status awal: Pemicu Peninjauan (Review Trigger).
        </p>
</div>
{/* Step 2: Notifikasi Hak Sanggah */}
<div className="relative flex flex-col gap-1">
<div className="absolute -left-6 top-1 w-3.5 h-3.5 rounded-full bg-primary-container ring-4 ring-surface"></div>
<div className="flex flex-wrap items-center justify-between gap-1">
<div className="flex items-center gap-2">
<span className="font-headline-sm text-headline-sm text-on-surface font-bold">Penerbitan Notifikasi Hak Sanggah Resmi</span>
<span className="font-label-xs text-label-xs px-2 py-0.5 rounded bg-surface-container text-on-surface font-semibold">Gateway ESDM</span>
</div>
<span className="font-tabular-data text-tabular-data text-outline font-mono">15 Feb 2025 • 08:15 WITA</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">
          Notifikasi hak sanggah 14 hari diterbitkan otomatis ke portal kepatuhan PT Mahakam Bara Energi (Surat Edaran Elektronik #NOTIF-SGH/2025/0891).
        </p>
</div>
{/* Step 3: Pengajuan Sanggahan & Bukti */}
<div className="relative flex flex-col gap-1">
<div className="absolute -left-6 top-1 w-3.5 h-3.5 rounded-full bg-status-verified ring-4 ring-surface"></div>
<div className="flex flex-wrap items-center justify-between gap-1">
<div className="flex items-center gap-2">
<span className="font-headline-sm text-headline-sm text-on-surface font-bold">Penyampaian Sanggahan &amp; 3 Berkas Tandingan</span>
<span className="font-label-xs text-label-xs px-2 py-0.5 rounded bg-status-verified-bg text-status-verified font-semibold">Pelaku Usaha (KTT)</span>
</div>
<span className="font-tabular-data text-tabular-data text-outline font-mono">16 Feb 2025 • 11:20 WITA</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">
          Ir. Hardiansyah (KTT) mengunggah bundel berkas klarifikasi: BA Topping-off internal, Draft survey Carsurin, dan Surat Izin Gerak KSOP Samarinda (#SGH-2025-0891-MBE).
        </p>
</div>
{/* Step 4: Validasi Integritas Kriptografi */}
<div className="relative flex flex-col gap-1">
<div className="absolute -left-6 top-1 w-3.5 h-3.5 rounded-full bg-primary-container ring-4 ring-surface"></div>
<div className="flex flex-wrap items-center justify-between gap-1">
<div className="flex items-center gap-2">
<span className="font-headline-sm text-headline-sm text-on-surface font-bold">Verifikasi Digital Signature BSrE &amp; Hash Lolos Uji</span>
<span className="font-label-xs text-label-xs px-2 py-0.5 rounded bg-surface-container text-on-surface font-semibold">NusaMine Crypto Node</span>
</div>
<span className="font-tabular-data text-tabular-data text-outline font-mono">17 Feb 2025 • 09:05 WITA</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">
          Pemeriksaan stempel waktu Otoritas BSSN/BSrE pada tanda tangan elektronik KTT dan surveyor Carsurin dinyatakan otentik dan tidak mengalami modifikasi berkas.
        </p>
</div>
{/* Step 5: Penugasan Independen */}
<div className="relative flex flex-col gap-1">
<div className="absolute -left-6 top-1 w-3.5 h-3.5 rounded-full bg-primary-container ring-4 ring-surface"></div>
<div className="flex flex-wrap items-center justify-between gap-1">
<div className="flex items-center gap-2">
<span className="font-headline-sm text-headline-sm text-on-surface font-bold">Penetapan Tim Peninjau Independen Disetujui</span>
<span className="font-label-xs text-label-xs px-2 py-0.5 rounded bg-secondary-container text-on-secondary-container font-semibold">Inspektorat Minerba</span>
</div>
<span className="font-tabular-data text-tabular-data text-outline font-mono">19 Feb 2025 • 14:00 WITA</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">
          Persetujuan kolaborasi bersama Balai Besar Pengujian Mineral dan Batubara (bbp-mbb) untuk kajian metrologi draft survey.
        </p>
</div>
{/* Step 6: Telaah Awal Selesai */}
<div className="relative flex flex-col gap-1">
<div className="absolute -left-6 top-1 w-3.5 h-3.5 rounded-full bg-status-verified ring-4 ring-surface"></div>
<div className="flex flex-wrap items-center justify-between gap-1">
<div className="flex items-center gap-2">
<span className="font-headline-sm text-headline-sm text-on-surface font-bold">Pemeriksaan Materiil Dokumen Awal Selesai</span>
<span className="font-label-xs text-label-xs px-2 py-0.5 rounded bg-status-verified-bg text-status-verified font-semibold">Bambang S., S.T.</span>
</div>
<span className="font-tabular-data text-tabular-data text-outline font-mono">23 Feb 2025 • 16:45 WITA</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">
          Catatan telaah awal dimasukkan ke stasiun evaluasi: Temuan fisik dokumen konsisten, menunggu finalisasi penetapan keputusan akhir hari ini.
        </p>
</div>
</div>
{/* Immutable Engine Guarantee Strip */}
<div className="mt-space-sm p-space-md rounded-lg bg-surface-container-low flex flex-col sm:flex-row items-center justify-between gap-space-sm text-on-surface-variant">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-[20px]">security</span>
<span className="font-body-sm text-body-sm">
          Semua tindakan, draf catatan, dan keputusan tersimpan secara permanen pada jejak audit terdistribusi <strong>NusaMine Governance Engine</strong>.
        </span>
</div>
<span className="font-label-xs text-label-xs font-mono shrink-0">
        Konsensus: Multi-Signature ESDM-Kemendag
      </span>
</div>
</div>
</div>
{/* Interactive Client-side Script for Micro-interactions */}

    </div>
  );
};

export default WorkspaceSanggahanPage;
