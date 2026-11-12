import React from 'react';

interface Props {
  onNavigate?: (path: string) => void;
}

export const ImplementationRoadmapPanel: React.FC<Props> = ({ onNavigate }) => {
  return (
    <div className="flex flex-col gap-space-lg animate-in fade-in duration-200">
      {/* Header */}
      <div className="rounded-xl bg-surface-container-lowest p-space-lg shadow-sm border border-border-warm/60">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-md">
          <div className="flex flex-col gap-2 max-w-3xl">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container font-label-xs text-label-xs font-bold">
                <span className="material-symbols-outlined text-[14px]">timeline</span>
                Rencana Strategis Penerapan
              </span>
              <span className="px-2.5 py-0.5 rounded bg-surface-container text-on-surface-variant font-label-xs text-label-xs font-semibold">
                Roadmap Nasional SIMBARA x NusaMine
              </span>
            </div>
            <h2 className="font-display-md text-display-md text-on-surface font-bold tracking-tight">
              Peta Jalan Implementasi Bertahap (Phased Roadmap)
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Penerapan NusaMine dirancang secara berjenjang guna memastikan keandalan bukti, kalibrasi empiris algoritma deteksi, serta kesiapan tata regulasi hak sanggahan sebelum ekspansi ke komoditas mineral strategis lainnya.
            </p>
          </div>

          <div className="p-space-md rounded-xl bg-surface-container-low border border-border-subtle flex flex-col gap-1 shrink-0">
            <span className="font-label-xs text-label-xs text-on-surface-variant uppercase font-semibold">
              Status Fase Saat Ini
            </span>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-status-verified animate-ping"></span>
              <span className="font-headline-sm text-headline-sm text-status-verified font-bold">
                Fase 1: Pilot Kaltim-Kalsel
              </span>
            </div>
            <span className="font-label-xs text-label-xs text-on-surface-variant">
              Fokus: Batu Bara Termal &amp; Mode Bayangan
            </span>
          </div>
        </div>
      </div>

      {/* 3 PHASES CARDS */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-space-lg">
        {/* PHASE 1: PILOT (ACTIVE) */}
        <div className="rounded-xl bg-surface-container-lowest p-space-lg shadow-md border-2 border-primary flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-primary text-on-primary font-label-xs text-label-xs px-3 py-1 rounded-bl-lg font-bold">
            Fase Aktif Saat Ini
          </div>

          <div className="flex flex-col gap-space-md">
            <div className="flex flex-col gap-1">
              <span className="font-label-xs text-label-xs text-primary font-bold uppercase tracking-wider">
                Tahap 1 (2024 - 2025)
              </span>
              <h3 className="font-headline-lg text-headline-lg text-on-surface font-bold">
                Pilot Wilayah Kesiapan Data Tinggi (Kaltim &amp; Kalsel)
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Pengujian ekosistem terpadu batu bara termal di wilayah dengan kesiapan telemetri dan integrasi pelabuhan terlengkap.
              </p>
            </div>

            <div className="flex flex-col gap-2 pt-2 border-t border-border-subtle font-body-sm text-body-sm">
              <div className="flex items-start gap-2">
                <span className="material-symbols-outlined text-primary text-[18px] shrink-0 mt-0.5">check_circle</span>
                <span><strong>Fokus Komoditas:</strong> Batu Bara (Thermal Coal) koridor Samarinda, Balikpapan, dan Tanah Bumbu.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="material-symbols-outlined text-primary text-[18px] shrink-0 mt-0.5">check_circle</span>
                <span><strong>Evaluasi Mode Bayangan:</strong> Pengujian 5 indikator kinerja AI (FPR 4.8%, FNR 2.1%) tanpa beban sanksi otomatis.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="material-symbols-outlined text-primary text-[18px] shrink-0 mt-0.5">check_circle</span>
                <span><strong>Kalibrasi Ambang Batas:</strong> Penentuan toleransi metrologis draft survey (±3%) dan jeda waktu stempel.</span>
              </div>
            </div>
          </div>

          <div className="mt-space-lg pt-space-sm border-t border-border-subtle flex items-center justify-between text-label-xs font-label-xs">
            <span className="font-semibold text-primary">Progres: 78% Berjalan</span>
            <span className="text-on-surface-variant">Target Evaluasi: Q2 2025</span>
          </div>
        </div>

        {/* PHASE 2: HAK SANGGAHAN & VERIFIKASI INDEPENDEN */}
        <div className="rounded-xl bg-surface-container-lowest p-space-lg shadow-sm border border-border-subtle flex flex-col justify-between">
          <div className="flex flex-col gap-space-md">
            <div className="flex flex-col gap-1">
              <span className="font-label-xs text-label-xs text-secondary font-bold uppercase tracking-wider">
                Tahap 2 (2025 - 2026)
              </span>
              <h3 className="font-headline-lg text-headline-lg text-on-surface font-bold">
                Hak Sanggahan Statuter &amp; Verifikasi Fisik Penuh
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Operasionalisasi penuh kerangka pembuktian berimbang, penelaah independen, dan perlindungan hukum badan usaha.
              </p>
            </div>

            <div className="flex flex-col gap-2 pt-2 border-t border-border-subtle font-body-sm text-body-sm">
              <div className="flex items-start gap-2">
                <span className="material-symbols-outlined text-secondary text-[18px] shrink-0 mt-0.5">verified</span>
                <span><strong>9 Tahapan Alur Sanggahan:</strong> Penerapan formal hak jawab 14 hari kerja dengan bukti tandingan terakreditasi.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="material-symbols-outlined text-secondary text-[18px] shrink-0 mt-0.5">verified</span>
                <span><strong>Protokol Uji Petik Tersegel:</strong> Witnessed sampling, segel bersandi, dan rotasi laboratorium terakreditasi KAN.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="material-symbols-outlined text-secondary text-[18px] shrink-0 mt-0.5">verified</span>
                <span><strong>Panel Adjudikasi Bersama:</strong> Forum penelaah lintas instansi (Ditjen Minerba, Bea Cukai, Ditjen Hubla).</span>
              </div>
            </div>
          </div>

          <div className="mt-space-lg pt-space-sm border-t border-border-subtle flex items-center justify-between text-label-xs font-label-xs">
            <span className="font-semibold text-secondary">Status: Dalam Penyusunan Regulasi</span>
            <span className="text-on-surface-variant">Target Peluncuran: Q4 2025</span>
          </div>
        </div>

        {/* PHASE 3: EXPANSION TO NICKEL & TIN */}
        <div className="rounded-xl bg-surface-container-lowest p-space-lg shadow-sm border border-border-subtle flex flex-col justify-between">
          <div className="flex flex-col gap-space-md">
            <div className="flex flex-col gap-1">
              <span className="font-label-xs text-label-xs text-tertiary font-bold uppercase tracking-wider">
                Tahap 3 (2026+)
              </span>
              <h3 className="font-headline-lg text-headline-lg text-on-surface font-bold">
                Ekspansi Komoditas Strategis (Nikel &amp; Timah)
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Perluasan cakupan sistem ke rantai pasok hilirisasi mineral kritis nasional di Sulawesi, Maluku Utara, dan Bangka Belitung.
              </p>
            </div>

            <div className="flex flex-col gap-2 pt-2 border-t border-border-subtle font-body-sm text-body-sm">
              <div className="flex items-start gap-2">
                <span className="material-symbols-outlined text-tertiary text-[18px] shrink-0 mt-0.5">diamond</span>
                <span><strong>Komoditas Nikel (Ni):</strong> Integrasi alur smelter Morowali, Konawe, dan Halmahera (kadar Ni &amp; Fe).</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="material-symbols-outlined text-tertiary text-[18px] shrink-0 mt-0.5">diamond</span>
                <span><strong>Komoditas Timah (Sn):</strong> Pelacakan balok timah terdaftar ICDX / JFX dan verifikasi asal bijih Bangka Belitung.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="material-symbols-outlined text-tertiary text-[18px] shrink-0 mt-0.5">diamond</span>
                <span><strong>Integrasi Rantai Pasok Hijau:</strong> Sertifikasi jejak karbon dan sertifikat asal mineral rendah emisi.</span>
              </div>
            </div>
          </div>

          <div className="mt-space-lg pt-space-sm border-t border-border-subtle flex items-center justify-between text-label-xs font-label-xs">
            <span className="font-semibold text-tertiary">Status: Tahap Riset &amp; Pemetaan</span>
            <span className="text-on-surface-variant">Target: 2026</span>
          </div>
        </div>
      </div>

      {/* DEFERRED FEATURES CALLOUT NOTICE */}
      <div className="rounded-xl bg-surface-container-low p-space-md shadow-sm border-l-4 border-l-accent-palmoil flex flex-col md:flex-row items-start md:items-center justify-between gap-space-md">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-lg bg-surface flex items-center justify-center text-accent-palmoil shrink-0 mt-0.5 shadow-xs">
            <span className="material-symbols-outlined text-[22px]">pending_actions</span>
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="font-headline-sm text-headline-sm text-on-surface font-bold">
                Pemberitahuan Status Fitur Tertunda (Deferred Features Notice)
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-accent-palmoil/20 text-accent-palmoil font-label-xs text-label-xs font-bold">
                Fitur Terencana - Menunggu Evaluasi Pilot (Planned Feature - Pending Pilot Evaluation)
              </span>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant max-w-4xl leading-relaxed">
              Modul <em>Predictive Analytics</em> (Prediksi Pelanggaran Masa Depan) dan <em>Automated Early Warning</em> ditangguhkan pengoperasiannya sampai evaluasi empiris Phase 1 selesai tuntas. NusaMine mengutamakan pembuktian materiil, praduga tak bersalah, dan data historis terverifikasi di atas spekulasi probabilitas algoritmik.
            </p>
          </div>
        </div>

        <button
          onClick={() => onNavigate?.('ringkasan')}
          className="px-3 py-1.5 rounded-lg bg-surface text-on-surface font-label-xs text-label-xs font-semibold hover:bg-surface-container transition-colors shrink-0 whitespace-nowrap"
          type="button"
        >
          Kembali ke Operasional
        </button>
      </div>
    </div>
  );
};
