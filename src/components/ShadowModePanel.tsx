import React from 'react';

interface Props {
  onNavigate?: (path: string) => void;
  onSelectCase?: (caseId: string) => void;
}

export const ShadowModePanel: React.FC<Props> = ({ onNavigate }) => {
  return (
    <div className="flex flex-col gap-space-lg animate-in fade-in duration-200">
      {/* Overview Banner */}
      <div className="rounded-xl bg-surface-container-lowest p-space-lg shadow-sm border border-border-warm/60 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-status-review-bg/40 via-surface-container-low/20 to-transparent pointer-events-none rounded-bl-full"></div>
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-md relative z-10">
          <div className="flex flex-col gap-2 max-w-3xl">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-status-review-bg text-status-review font-label-xs text-label-xs font-bold shadow-xs">
                <span className="w-2 h-2 rounded-full bg-status-review animate-ping"></span>
                Mode Bayangan (Shadow Mode) Aktif
              </span>
              <span className="px-2.5 py-0.5 rounded bg-surface-container text-on-surface-variant font-label-xs text-label-xs font-medium">
                Pilot Evaluasi Tahap 1: Kaltim &amp; Kalsel
              </span>
              <span className="px-2 py-0.5 rounded bg-surface-container text-on-surface-variant font-label-xs text-label-xs">
                Data Demonstrasi
              </span>
            </div>
            <h2 className="font-display-md text-display-md text-on-surface font-bold tracking-tight">
              Evaluasi Kinerja Model AI (Shadow Mode Benchmark)
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Dalam Mode Bayangan, mesin analitik NusaMine beroperasi di latar belakang (background evaluation) untuk membandingkan luaran skor risiko dan deteksi anomali AI terhadap hasil audit faktual verifikator manusia. Sistem <strong>tidak digunakan untuk keputusan sanksi otomatis</strong> sebelum model terkalibrasi secara empiris.
            </p>
          </div>

          <div className="flex flex-col items-start lg:items-end gap-2 shrink-0 bg-surface p-space-md rounded-xl shadow-xs border border-border-subtle">
            <span className="font-label-xs text-label-xs text-on-surface-variant uppercase font-semibold">
              Status Kalibrasi Model
            </span>
            <div className="flex items-center gap-2">
              <span className="font-tabular-kpi text-tabular-kpi text-status-verified font-bold">96,8%</span>
              <span className="font-label-md text-label-md text-on-surface font-semibold">Taraf Kepercayaan</span>
            </div>
            <span className="font-label-xs text-label-xs text-on-surface-variant font-mono">
              Sampel Kalibrasi: 1.428 Pengapalan
            </span>
          </div>
        </div>

        {/* Governance Principle Notice */}
        <div className="mt-space-md p-space-sm rounded-lg bg-surface flex items-start gap-3 border-l-4 border-l-status-review">
          <span className="material-symbols-outlined text-status-review text-[22px] shrink-0 mt-0.5">verified_user</span>
          <div className="flex flex-col gap-0.5">
            <span className="font-label-md text-label-md font-bold text-on-surface">
              Asas Netralitas &amp; Pengujian Ground-Truth:
            </span>
            <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              Skor risiko AI adalah pemicu telaah manusia, bukan vonis hukum. Penilaian ground truth disusun melalui kombinasi <strong>inspeksi berbasis anomali</strong> dan <strong>kuota uji petik acak independen</strong> (random inspection quota) untuk menghindari bias konfirmasi algoritma.
            </p>
          </div>
        </div>
      </div>

      {/* 5 REQUIRED EVALUATION INDICATORS */}
      <div>
        <div className="flex items-center justify-between mb-space-sm">
          <div>
            <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
              5 Indikator Evaluasi Utama Mode Bayangan
            </h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Parameter akurasi, efisiensi waktu, dan keadilan performa model terhadap verifikasi manusia.
            </p>
          </div>
          <span className="font-label-xs text-label-xs text-secondary font-mono bg-surface-container-low px-2 py-1 rounded">
            Target SLA Evaluasi Pilot 2025
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-space-md">
          {/* 1. False Positive Rate */}
          <div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between border-t-4 border-t-status-verified">
            <div className="flex flex-col gap-1">
              <div className="flex items-center justify-between">
                <span className="font-label-xs text-label-xs text-on-surface-variant font-semibold uppercase">
                  1. False Positive Rate
                </span>
                <span className="material-symbols-outlined text-status-verified text-[18px]">check_circle</span>
              </div>
              <div className="flex items-baseline gap-1.5 my-1">
                <span className="font-tabular-kpi text-tabular-kpi text-status-verified font-bold">4,8%</span>
                <span className="font-label-xs text-label-xs text-on-surface-variant">kasus</span>
              </div>
              <div className="flex items-center justify-between text-[11px] text-on-surface-variant font-mono">
                <span>Ambang Batas: &lt; 5,0%</span>
                <span className="text-status-verified font-semibold">Tercapai</span>
              </div>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant mt-3 pt-2 border-t border-border-subtle leading-tight">
              Persentase kasus yang ditandai anomali oleh AI namun pemeriksaan manusia membuktikan kepatuhan wajar (misal: faktor cuaca air surut).
            </p>
          </div>

          {/* 2. False Negative Rate */}
          <div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between border-t-4 border-t-primary">
            <div className="flex flex-col gap-1">
              <div className="flex items-center justify-between">
                <span className="font-label-xs text-label-xs text-on-surface-variant font-semibold uppercase">
                  2. False Negative Rate
                </span>
                <span className="material-symbols-outlined text-primary text-[18px]">shield</span>
              </div>
              <div className="flex items-baseline gap-1.5 my-1">
                <span className="font-tabular-kpi text-tabular-kpi text-primary font-bold">2,1%</span>
                <span className="font-label-xs text-label-xs text-on-surface-variant">kasus</span>
              </div>
              <div className="flex items-center justify-between text-[11px] text-on-surface-variant font-mono">
                <span>Ambang Batas: &lt; 3,0%</span>
                <span className="text-primary font-semibold">Sangat Baik</span>
              </div>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant mt-3 pt-2 border-t border-border-subtle leading-tight">
              Ketidaksesuaian yang lolos dari saringan awal AI namun berhasil diidentifikasi melalui audit acak manusia berkala (random inspection).
            </p>
          </div>

          {/* 3. Inspection Processing Time */}
          <div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between border-t-4 border-t-secondary">
            <div className="flex flex-col gap-1">
              <div className="flex items-center justify-between">
                <span className="font-label-xs text-label-xs text-on-surface-variant font-semibold uppercase">
                  3. Waktu Proses Pemeriksaan
                </span>
                <span className="material-symbols-outlined text-secondary text-[18px]">timer</span>
              </div>
              <div className="flex items-baseline gap-1.5 my-1">
                <span className="font-tabular-kpi text-tabular-kpi text-on-surface font-bold">3,2</span>
                <span className="font-label-xs text-label-xs text-on-surface-variant">hari kerja</span>
              </div>
              <div className="flex items-center justify-between text-[11px] text-on-surface-variant font-mono">
                <span>Target SLA: &lt; 5,0 hari</span>
                <span className="text-status-verified font-semibold">-36% Lebih Cepat</span>
              </div>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant mt-3 pt-2 border-t border-border-subtle leading-tight">
              Rata-rata durasi penyelesaian kasus dari triase otomatis, notifikasi perusahaan, telaah dokumen, hingga keputusan verifikator.
            </p>
          </div>

          {/* 4. Data Consistency Rate */}
          <div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between border-t-4 border-t-accent-palmoil">
            <div className="flex flex-col gap-1">
              <div className="flex items-center justify-between">
                <span className="font-label-xs text-label-xs text-on-surface-variant font-semibold uppercase">
                  4. Konsistensi Data Lintas-Sistem
                </span>
                <span className="material-symbols-outlined text-accent-palmoil text-[18px]">sync_saved_locally</span>
              </div>
              <div className="flex items-baseline gap-1.5 my-1">
                <span className="font-tabular-kpi text-tabular-kpi text-accent-palmoil font-bold">98,4%</span>
                <span className="font-label-xs text-label-xs text-on-surface-variant">selaras</span>
              </div>
              <div className="flex items-center justify-between text-[11px] text-on-surface-variant font-mono">
                <span>Standar: &gt; 95,0%</span>
                <span className="text-status-verified font-semibold">Tinggi</span>
              </div>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant mt-3 pt-2 border-t border-border-subtle leading-tight">
              Tingkat kesesuaian format data, stempel waktu, dan integritas sandi hash SHA-256 lintas 7 portal sistem pemerintah.
            </p>
          </div>

          {/* 5. Model Performance Across Subgroups */}
          <div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between border-t-4 border-t-tertiary">
            <div className="flex flex-col gap-1">
              <div className="flex items-center justify-between">
                <span className="font-label-xs text-label-xs text-on-surface-variant font-semibold uppercase">
                  5. Keadilan Antar-Subkelompok
                </span>
                <span className="material-symbols-outlined text-tertiary text-[18px]">balance</span>
              </div>
              <div className="flex items-baseline gap-1.5 my-1">
                <span className="font-tabular-kpi text-tabular-kpi text-tertiary font-bold">99,1%</span>
                <span className="font-label-xs text-label-xs text-on-surface-variant">paritas</span>
              </div>
              <div className="flex items-center justify-between text-[11px] text-on-surface-variant font-mono">
                <span>Disparitas: &lt; 1,5%</span>
                <span className="text-status-verified font-semibold">Bebas Bias</span>
              </div>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant mt-3 pt-2 border-t border-border-subtle leading-tight">
              Memastikan tidak ada disparitas perlakuan risiko antara PKP2B besar, IUP OP daerah swasta, maupun pelabuhan sungai vs laut lepas.
            </p>
          </div>
        </div>
      </div>

      {/* DETAILED METHODOLOGY & COMPARISON TABLE */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-md">
        {/* Subgroup Analysis Breakdown (7 cols) */}
        <div className="lg:col-span-7 rounded-xl bg-surface-container-lowest p-space-md shadow-sm flex flex-col gap-3">
          <div className="flex items-center justify-between pb-2 border-b border-border-subtle">
            <div>
              <h4 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                Paritas Performa Model Lintas Subkelompok Usaha
              </h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Evaluasi komparatif akurasi model untuk mendeteksi potensi bias struktural.
              </p>
            </div>
            <span className="font-label-xs text-label-xs text-secondary bg-surface-container-low px-2 py-1 rounded font-mono">
              Audit Algoritmik ISO 24029
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left font-body-sm text-body-sm border-collapse">
              <thead>
                <tr className="bg-surface-container-low text-on-surface-variant font-label-xs text-label-xs uppercase">
                  <th className="py-2 px-3 font-semibold">Kelompok Usaha / Skala</th>
                  <th className="py-2 px-3 font-semibold text-center">False Positive</th>
                  <th className="py-2 px-3 font-semibold text-center">False Negative</th>
                  <th className="py-2 px-3 font-semibold text-center">Waktu Verifikasi</th>
                  <th className="py-2 px-3 font-semibold text-right">Status Keadilan</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border-subtle">
                <tr>
                  <td className="py-2.5 px-3 font-medium text-on-surface">PKP2B Generasi I / II (Skala Besar)</td>
                  <td className="py-2.5 px-3 text-center font-tabular-data">4,6%</td>
                  <td className="py-2.5 px-3 text-center font-tabular-data">1,9%</td>
                  <td className="py-2.5 px-3 text-center font-tabular-data">2,9 hari</td>
                  <td className="py-2.5 px-3 text-right">
                    <span className="px-2 py-0.5 rounded-full bg-status-verified-bg text-status-verified font-label-xs font-semibold">Paritas Valid</span>
                  </td>
                </tr>
                <tr>
                  <td className="py-2.5 px-3 font-medium text-on-surface">IUP-OP Swasta Nasional (Menengah)</td>
                  <td className="py-2.5 px-3 text-center font-tabular-data">4,9%</td>
                  <td className="py-2.5 px-3 text-center font-tabular-data">2,2%</td>
                  <td className="py-2.5 px-3 text-center font-tabular-data">3,3 hari</td>
                  <td className="py-2.5 px-3 text-right">
                    <span className="px-2 py-0.5 rounded-full bg-status-verified-bg text-status-verified font-label-xs font-semibold">Paritas Valid</span>
                  </td>
                </tr>
                <tr>
                  <td className="py-2.5 px-3 font-medium text-on-surface">IUP-OP Daerah &amp; Koperasi Tambang</td>
                  <td className="py-2.5 px-3 text-center font-tabular-data">5,1%</td>
                  <td className="py-2.5 px-3 text-center font-tabular-data">2,3%</td>
                  <td className="py-2.5 px-3 text-center font-tabular-data">3,6 hari</td>
                  <td className="py-2.5 px-3 text-right">
                    <span className="px-2 py-0.5 rounded-full bg-status-verified-bg text-status-verified font-label-xs font-semibold">Toleransi Normal</span>
                  </td>
                </tr>
                <tr>
                  <td className="py-2.5 px-3 font-medium text-on-surface">Jalur Pelabuhan Sungai Mahakam (Kaltim)</td>
                  <td className="py-2.5 px-3 text-center font-tabular-data">4,7%</td>
                  <td className="py-2.5 px-3 text-center font-tabular-data">2,0%</td>
                  <td className="py-2.5 px-3 text-center font-tabular-data">3,1 hari</td>
                  <td className="py-2.5 px-3 text-right">
                    <span className="px-2 py-0.5 rounded-full bg-status-verified-bg text-status-verified font-label-xs font-semibold">Paritas Valid</span>
                  </td>
                </tr>
                <tr>
                  <td className="py-2.5 px-3 font-medium text-on-surface">Jalur Pesisir Tanah Bumbu (Kalsel)</td>
                  <td className="py-2.5 px-3 text-center font-tabular-data">4,9%</td>
                  <td className="py-2.5 px-3 text-center font-tabular-data">2,1%</td>
                  <td className="py-2.5 px-3 text-center font-tabular-data">3,2 hari</td>
                  <td className="py-2.5 px-3 text-right">
                    <span className="px-2 py-0.5 rounded-full bg-status-verified-bg text-status-verified font-label-xs font-semibold">Paritas Valid</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Shadow Mode Protocol Architecture (5 cols) */}
        <div className="lg:col-span-5 rounded-xl bg-surface-container-lowest p-space-md shadow-sm flex flex-col justify-between">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 text-primary font-bold">
              <span className="material-symbols-outlined text-[22px]">cycle</span>
              <h4 className="font-headline-sm text-headline-sm text-on-surface">
                Siklus Umpan Balik Kalibrasi Faktual
              </h4>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              Hasil audit manusia setiap minggu diinputkan kembali (human feedback loop) untuk merekalibrasi bobot pembobotan risiko tanpa mengorbankan praduga tak bersalah.
            </p>

            <div className="mt-2 flex flex-col gap-2">
              <div className="p-2.5 rounded-lg bg-surface-container-low flex items-center justify-between">
                <span className="font-body-sm text-on-surface">Kasus Dianalisis AI (Bulan Ini)</span>
                <span className="font-tabular-kpi text-tabular-kpi text-primary font-bold">1.428</span>
              </div>
              <div className="p-2.5 rounded-lg bg-surface-container-low flex items-center justify-between">
                <span className="font-body-sm text-on-surface">Verifikasi Manusia Lengkap</span>
                <span className="font-tabular-kpi text-tabular-kpi text-status-verified font-bold">1.386</span>
              </div>
              <div className="p-2.5 rounded-lg bg-surface-container-low flex items-center justify-between">
                <span className="font-body-sm text-on-surface">Uji Petik Acak Independen</span>
                <span className="font-tabular-kpi text-tabular-kpi text-secondary font-bold">142 Titik</span>
              </div>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-border-subtle flex items-center justify-between">
            <span className="font-label-xs text-label-xs text-on-surface-variant">
              Rekomendasi Dewan Pengarah: Lanjut Uji Coba Lapangan
            </span>
            <button
              onClick={() => onNavigate?.('pemeriksaan-risiko')}
              className="px-3 py-1.5 rounded-lg bg-primary-container text-on-primary font-label-xs text-label-xs font-semibold hover:bg-primary transition-colors cursor-pointer"
              type="button"
            >
              Lihat Antrean Triase →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
