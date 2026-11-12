import React, { useState } from 'react';

interface Props {
  onNavigate?: (path: string) => void;
  onSelectCase?: (caseId: string) => void;
}

interface DataSourceInfo {
  id: string;
  name: string;
  agency: string;
  role: string;
  status: 'Live Gateway' | 'Staging Terjadwal' | 'Protokol Pilot' | 'Sinkronisasi Batch';
  statusColor: 'verified' | 'review' | 'neutral';
  dataExchanged: string[];
  latency: string;
  disclaimer: string;
  icon: string;
}

const DATA_SOURCES: DataSourceInfo[] = [
  {
    id: 'simbara',
    name: 'SIMBARA',
    agency: 'Kemenko Marves, ESDM, Kemenkeu, Kemenhub, Kemendag, BI',
    role: 'Sistem Informasi Mineral dan Batubara Terpadu (Ekosistem Utama)',
    status: 'Live Gateway',
    statusColor: 'verified',
    dataExchanged: ['ID Transaksi Pengapalan', 'Billing Settlement Terpadu', 'Status Kepatuhan Hilir', 'Profil Konsesi IUP'],
    latency: '< 1,2 detik',
    disclaimer: 'NusaMine beroperasi DI ATAS SIMBARA untuk memperkuat integritas data dan deteksi anomali. NusaMine tidak menggantikan wewenang SIMBARA.',
    icon: 'hub',
  },
  {
    id: 'moms',
    name: 'MOMS (Minerals Online Monitoring System)',
    agency: 'Direktorat Jenderal Mineral dan Batubara (Kementerian ESDM)',
    role: 'Pengawasan Rencana Kerja dan Anggaran Biaya (RKAB) Produksi',
    status: 'Live Gateway',
    statusColor: 'verified',
    dataExchanged: ['Target Kuota RKAB Tahunan', 'Realisasi Bulanan Tambang', 'Lokasi Titik Konsesi', 'Spesifikasi Kalori Rencana'],
    latency: '3,4 detik',
    disclaimer: 'Koneksi API melalui Pusdatin ESDM. Verifikasi fisik kapasitas penambangan tetap berada di bawah Inspektur Tambang.',
    icon: 'monitoring',
  },
  {
    id: 'mvp',
    name: 'MVP (Modul Verifikasi Penjualan)',
    agency: 'Direktorat Jenderal Mineral dan Batubara (Kementerian ESDM)',
    role: 'Verifikasi Laporan Hasil Verifikasi (LHV) Penjualan Komoditas',
    status: 'Live Gateway',
    statusColor: 'verified',
    dataExchanged: ['Penerbitan Nomor LHV', 'Data Surveyor Terverifikasi', 'Formula Royalti Progresif', 'Sertifikat Mutu CoA'],
    latency: '2,8 detik',
    disclaimer: 'Data LHV disinkronkan langsung saat surveyor independen mengunggah berkas pengesahan.',
    icon: 'assignment_turned_in',
  },
  {
    id: 'epnbp',
    name: 'e-PNBP Minerba',
    agency: 'Kementerian Keuangan RI & Kementerian ESDM',
    role: 'Penerbitan Billing & Pembayaran Royalti serta Iuran Tetap',
    status: 'Live Gateway',
    statusColor: 'verified',
    dataExchanged: ['Billing ID Pajak/Royalti', 'Nomor Transaksi Penerimaan Negara (NTPN)', 'Status Settlement Bank', 'Tarif Royalti HPB'],
    latency: '< 2 detik',
    disclaimer: 'Terintegrasi dengan sistem Kas Negara (SPAN) Kemenkeu untuk memastikan pelunasan royalti sebelum persetujuan berlayar.',
    icon: 'payments',
  },
  {
    id: 'ceisa',
    name: 'CEISA 4.0 Bea Cukai',
    agency: 'Direktorat Jenderal Bea dan Cukai (Kementerian Keuangan)',
    role: 'Pemberitahuan Ekspor Barang (PEB) & Pemeriksaan Pabean',
    status: 'Sinkronisasi Batch',
    statusColor: 'verified',
    dataExchanged: ['Dokumen PEB & Nota Pelayanan Ekspor (NPE)', 'Manifes Peti Kemas/Curah', 'HS Code Batu Bara', 'Pelabuhan Tujuan Ekspor'],
    latency: 'Interval 15 menit',
    disclaimer: 'Sinkronisasi berkala via Gateway INSW (Indonesia National Single Window).',
    icon: 'local_police',
  },
  {
    id: 'inaportnet',
    name: 'Inaportnet',
    agency: 'Direktorat Jenderal Perhubungan Laut (Kementerian Perhubungan)',
    role: 'Penerbitan Surat Persetujuan Berlayar (SPB) & Pengawasan Pelabuhan',
    status: 'Live Gateway',
    statusColor: 'verified',
    dataExchanged: ['Surat Persetujuan Berlayar (SPB)', 'Manifes Tongkang & Tugboat', 'Izin Olah Gerak STS Kolam Labuh', 'Log Stasiun VTS Navigasi'],
    latency: '4,5 detik',
    disclaimer: 'Data pelabuhan KSOP Samarinda dan Muara Berau terhubung dalam koridor pilot percontohan.',
    icon: 'directions_boat',
  },
  {
    id: 'simodis',
    name: 'SIMODIS',
    agency: 'Bank Indonesia (Departemen Statistik & Kebijakan Sektor Riil)',
    role: 'Pemantauan Devisa Hasil Ekspor (DHE) Sumber Daya Alam',
    status: 'Protokol Pilot',
    statusColor: 'review',
    dataExchanged: ['Rekening Khusus DHE SDA', 'Nilai Invoice Finansial (USD)', 'Kepatuhan Penempatan 30% 3 Bulan', 'Settlement Devisa Ekspor'],
    latency: 'Staging Harian (T+1)',
    disclaimer: 'Format staging terenkripsi BI. Dalam fase pilot, data rekonsiliasi finansial dievaluasi secara berkala.',
    icon: 'account_balance',
  },
];

const SUPPORTING_SOURCES = [
  {
    name: 'Laboratorium Pengujian Terakreditasi KAN',
    agency: 'Komite Akreditasi Nasional (ISO/IEC 17025)',
    desc: 'Hasil uji proksimat dan kalori GAR batubara dari lab surveyor terdaftar.',
    status: 'Validasi Berkas Kriptografis',
  },
  {
    name: 'Laporan Surveyor Independen',
    agency: 'Asosiasi Surveyor Independen (Carsurin, Sucofindo, Surveyor Indonesia, dll)',
    desc: 'Draft survey awal dan akhir, pembacaan hydrostatic table, dan berita acara muatan.',
    status: 'Stempel BSrE X.509',
  },
  {
    name: 'Telemetri Timbangan Conveyor (Belt Weigher) & Jembatan Timbang',
    agency: 'Direktorat Metrologi Kemendag & Pengelola Jetty TUKS',
    desc: 'Log sensor continuous weighing timbangan tambang dan pelabuhan muat.',
    status: 'Sertifikasi Tera Sah Metrologi',
  },
];

export const SystemArchitecturePanel: React.FC<Props> = ({ onNavigate, onSelectCase }) => {
  const [selectedSourceId, setSelectedSourceId] = useState<string>('simbara');

  const activeSource = DATA_SOURCES.find((s) => s.id === selectedSourceId) || DATA_SOURCES[0];

  return (
    <div className="flex flex-col gap-space-lg animate-in fade-in duration-200">
      {/* Header & Positioning Notice */}
      <div className="rounded-xl bg-surface-container-lowest p-space-lg shadow-sm border border-border-warm/60">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-md">
          <div className="flex flex-col gap-2 max-w-3xl">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-container text-on-primary font-label-xs text-label-xs font-bold">
                <span className="material-symbols-outlined text-[14px]">account_tree</span>
                Lapisan Tata Kelola Terpadu
              </span>
              <span className="px-2.5 py-0.5 rounded bg-surface-container text-on-surface-variant font-label-xs text-label-xs font-semibold">
                Arsitektur 7 Sumber Data Antar-Instansi
              </span>
              <span className="px-2 py-0.5 rounded bg-surface-container text-on-surface-variant font-label-xs text-label-xs">
                Data Demonstrasi
              </span>
            </div>
            <h2 className="font-display-md text-display-md text-on-surface font-bold tracking-tight">
              Kedudukan &amp; Arsitektur Sistem NusaMine
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              NusaMine adalah <strong>AI-Powered Governance Layer</strong> yang beroperasi <strong>DI ATAS</strong> sistem-sistem informasi pemerintah yang sudah ada. NusaMine <strong>TIDAK menggantikan SIMBARA</strong> maupun wewenang resmi kementerian/lembaga terkait, melainkan memperkuat integritas bukti, validasi silang data multi-sumber, dan penilaian risiko yang akuntabel.
            </p>
          </div>

          <div className="p-space-md rounded-xl bg-surface-container-low border border-border-subtle flex flex-col gap-1 shrink-0">
            <span className="font-label-xs text-label-xs text-on-surface-variant uppercase font-semibold">
              Kewenangan Pengambilan Keputusan
            </span>
            <span className="font-label-md text-label-md text-primary font-bold">
              100% Kewenangan Instansi Resmi
            </span>
            <span className="font-body-sm text-body-sm text-on-surface-variant max-w-xs">
              Seluruh penetapan administratif tetap berada di tangan pejabat berwenang (Ditjen Minerba, Bea Cukai, Kemenhub).
            </span>
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="mt-space-lg grid grid-cols-1 md:grid-cols-4 gap-space-sm pt-space-md border-t border-border-subtle">
          <div className="p-3 rounded-lg bg-surface flex flex-col gap-1 border-l-2 border-primary">
            <span className="font-label-xs text-label-xs font-bold text-primary uppercase">Komponen 1</span>
            <span className="font-headline-sm text-headline-sm text-on-surface font-semibold">Manajemen Bukti &amp; Audit Trail</span>
            <p className="font-body-sm text-body-sm text-on-surface-variant leading-tight">
              Menjaga keaslian metadata, stempel waktu, identitas pejabat penimbang, dan jejak rantai bukti tak terputus.
            </p>
          </div>

          <div className="p-3 rounded-lg bg-surface flex flex-col gap-1 border-l-2 border-status-review">
            <span className="font-label-xs text-label-xs font-bold text-status-review uppercase">Komponen 2</span>
            <span className="font-headline-sm text-headline-sm text-on-surface font-semibold">AI Risk Engine &amp; Triase</span>
            <p className="font-body-sm text-body-sm text-on-surface-variant leading-tight">
              Mendeteksi inkonsistensi volume, revisi pasca-pengajuan, dan pola anomali sebagai pemicu klarifikasi berimbang.
            </p>
          </div>

          <div className="p-3 rounded-lg bg-surface flex flex-col gap-1 border-l-2 border-secondary">
            <span className="font-label-xs text-label-xs font-bold text-secondary uppercase">Komponen 3</span>
            <span className="font-headline-sm text-headline-sm text-on-surface font-semibold">Cross Data Validation (CDV)</span>
            <p className="font-body-sm text-body-sm text-on-surface-variant leading-tight">
              Rekonsiliasi digital otomatis antar-sumber. Verifikasi fisik kualitas mineral tetap wajib lewat uji laboratorium.
            </p>
          </div>

          <div className="p-3 rounded-lg bg-surface flex flex-col gap-1 border-l-2 border-accent-palmoil">
            <span className="font-label-xs text-label-xs font-bold text-accent-palmoil uppercase">Komponen 4</span>
            <span className="font-headline-sm text-headline-sm text-on-surface font-semibold">Infrastruktur NusaWatch</span>
            <p className="font-body-sm text-body-sm text-on-surface-variant leading-tight">
              Monitoring keandalan server, latency gateway, dan integritas node (terpisah penuh dari skor risiko perusahaan).
            </p>
          </div>
        </div>
      </div>

      {/* 7 INTERCONNECTED DATA SOURCES INTERACTIVE EXPLORER */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-md">
        {/* Left Column: List of 7 Government Data Sources (5 cols) */}
        <div className="lg:col-span-5 rounded-xl bg-surface-container-lowest p-space-md shadow-sm flex flex-col gap-2">
          <div className="flex items-center justify-between pb-2 border-b border-border-subtle">
            <span className="font-headline-sm text-headline-sm text-on-surface font-bold">
              7 Sumber Data Resmi Terhubung
            </span>
            <span className="font-label-xs text-label-xs text-on-surface-variant font-mono">
              Pusat Integrasi Nasional
            </span>
          </div>

          <div className="flex flex-col gap-2 mt-1">
            {DATA_SOURCES.map((source, idx) => {
              const isSelected = selectedSourceId === source.id;
              return (
                <div
                  key={source.id}
                  onClick={() => setSelectedSourceId(source.id)}
                  className={`p-3 rounded-lg transition-all cursor-pointer border flex items-center justify-between gap-3 ${
                    isSelected
                      ? 'bg-surface shadow-sm border-primary ring-1 ring-primary'
                      : 'bg-surface-container-low/40 hover:bg-surface border-transparent'
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div
                      className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${
                        isSelected
                          ? 'bg-primary-container text-on-primary'
                          : 'bg-surface-container text-secondary'
                      }`}
                    >
                      <span className="material-symbols-outlined text-[20px]">{source.icon}</span>
                    </div>
                    <div className="flex flex-col min-w-0">
                      <div className="flex items-center gap-1.5">
                        <span className="font-label-xs text-label-xs text-on-surface-variant font-mono">
                          #{idx + 1}
                        </span>
                        <span className="font-headline-sm text-headline-sm text-on-surface font-bold truncate">
                          {source.name}
                        </span>
                      </div>
                      <span className="font-label-xs text-label-xs text-on-surface-variant truncate">
                        {source.agency}
                      </span>
                    </div>
                  </div>

                  <span
                    className={`px-2 py-0.5 rounded text-[10px] font-label-xs font-semibold shrink-0 ${
                      source.status === 'Live Gateway'
                        ? 'bg-status-verified-bg text-status-verified'
                        : source.status === 'Protokol Pilot'
                        ? 'bg-status-review-bg text-status-review'
                        : 'bg-surface-container text-on-surface-variant'
                    }`}
                  >
                    {source.status}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: Detailed Inspector for Selected Source (7 cols) */}
        <div className="lg:col-span-7 rounded-xl bg-surface-container-lowest p-space-lg shadow-sm flex flex-col justify-between border border-border-warm/40">
          <div className="flex flex-col gap-space-md">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 pb-space-sm border-b border-border-subtle">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-primary-container text-on-primary flex items-center justify-center">
                  <span className="material-symbols-outlined text-[26px]">{activeSource.icon}</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-label-xs text-label-xs text-secondary font-bold uppercase tracking-wider">
                    Profil Integrasi Sistem
                  </span>
                  <h3 className="font-display-md text-display-md text-on-surface font-bold">
                    {activeSource.name}
                  </h3>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">
                    {activeSource.agency}
                  </span>
                </div>
              </div>

              <div className="flex flex-col items-start sm:items-end gap-1">
                <span className="px-2.5 py-1 rounded bg-status-verified-bg text-status-verified font-label-xs text-label-xs font-bold">
                  {activeSource.status}
                </span>
                <span className="font-label-xs text-label-xs text-on-surface-variant font-mono">
                  Latency: {activeSource.latency}
                </span>
              </div>
            </div>

            {/* Role & Objective */}
            <div className="flex flex-col gap-1 bg-surface-container-low p-space-sm rounded-lg">
              <span className="font-label-xs text-label-xs text-on-surface-variant uppercase font-semibold">
                Peran Utama dalam Ekosistem
              </span>
              <p className="font-body-md text-body-md text-on-surface font-medium leading-snug">
                {activeSource.role}
              </p>
            </div>

            {/* Data Exchanged List */}
            <div className="flex flex-col gap-2">
              <span className="font-label-md text-label-md text-on-surface font-bold">
                Parameter &amp; Entitas Data yang Direkonsiliasi:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {activeSource.dataExchanged.map((item, i) => (
                  <div
                    key={i}
                    className="p-2.5 rounded-lg bg-surface flex items-center gap-2 border border-border-subtle"
                  >
                    <span className="material-symbols-outlined text-primary text-[18px]">verified</span>
                    <span className="font-body-sm text-body-sm text-on-surface font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Disclaimer & Integrity Context */}
            <div className="p-space-sm rounded-lg bg-surface-container-low text-on-surface flex items-start gap-2.5 border-l-4 border-l-primary">
              <span className="material-symbols-outlined text-primary text-[20px] shrink-0 mt-0.5">info</span>
              <div className="flex flex-col gap-0.5">
                <span className="font-label-xs text-label-xs font-bold text-primary uppercase">
                  Ketentuan Integritas Gateway
                </span>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  {activeSource.disclaimer}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-space-lg pt-space-sm border-t border-border-subtle flex flex-wrap items-center justify-between gap-2">
            <span className="font-label-xs text-label-xs text-on-surface-variant font-mono">
              Protokol Sandbox Pilot v2.4 • Otentikasi mTLS SHA-256
            </span>
            <button
              onClick={() => onNavigate?.('validasi-data')}
              className="px-4 py-2 rounded-lg bg-primary-container text-on-primary font-label-md text-label-md font-semibold hover:bg-primary transition-colors cursor-pointer flex items-center gap-1.5"
              type="button"
            >
              <span>Uji Validasi Silang Data Ini</span>
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </button>
          </div>
        </div>
      </div>

      {/* SUPPORTING EVIDENCE SOURCES (LABS, SURVEYORS, WEIGHING) */}
      <div className="rounded-xl bg-surface-container-lowest p-space-md shadow-sm border border-border-warm/40">
        <div className="flex items-center justify-between pb-2 mb-space-sm border-b border-border-subtle">
          <div>
            <h4 className="font-headline-sm text-headline-sm text-on-surface font-bold">
              Data Pendukung &amp; Verifikasi Metrologi Independen
            </h4>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Dokumen pengujian laboratorium, surveyor independen, dan telemetri timbangan fisik.
            </p>
          </div>
          <span className="font-label-xs text-label-xs text-secondary font-mono bg-surface-container-low px-2 py-1 rounded">
            Fondasi Verifikasi Faktual
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">
          {SUPPORTING_SOURCES.map((sup, idx) => (
            <div key={idx} className="p-space-sm rounded-lg bg-surface border border-border-subtle flex flex-col justify-between gap-2">
              <div className="flex flex-col gap-1">
                <span className="font-label-xs text-label-xs text-secondary font-semibold uppercase">
                  {sup.agency}
                </span>
                <span className="font-headline-sm text-headline-sm text-on-surface font-bold">
                  {sup.name}
                </span>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 leading-snug">
                  {sup.desc}
                </p>
              </div>
              <div className="pt-2 border-t border-border-subtle flex items-center justify-between text-label-xs font-label-xs">
                <span className="text-status-verified font-medium flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">lock</span>
                  {sup.status}
                </span>
                <span className="text-on-surface-variant font-mono">Tervalidasi</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
