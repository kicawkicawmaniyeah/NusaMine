import React, { useState, useMemo } from 'react';

interface Props {
  onNavigate?: (path: string) => void;
  onSelectCase?: (caseId: string) => void;
}

interface CaseItem {
  id: string;
  date: string;
  workDays: string;
  company: string;
  iup: string;
  location: string;
  anomalyTitle: string;
  anomalyDetail: string;
  anomalyIcon: string;
  anomalyNote: string;
  riskBand: 'Tinggi' | 'Sedang' | 'Rendah';
  riskScore: number;
  aiConf: number;
  reviewStatus: string;
  statusIcon: string;
  auditorName: string;
  auditorPhoto?: string;
  hasPulse?: boolean;
  statusBg: string;
  statusColor: string;
}

const ALL_CASES: CaseItem[] = [
  // Page 1
  {
    id: "NM-2025-0891",
    date: "20 Feb 2025",
    workDays: "3 hari kerja",
    company: "PT Mahakam Bara Energi",
    iup: "IUP: 540/109/IUP-OP/2019",
    location: "Kutai Kartanegara, Kaltim",
    anomalyTitle: "Selisih Volume SIMBARA vs Inaportnet",
    anomalyDetail: "+12.450 MT (+12,4%)",
    anomalyIcon: "difference",
    anomalyNote: "Tongkang BG. Financia 301",
    riskBand: "Tinggi",
    riskScore: 88,
    aiConf: 94,
    reviewStatus: "Sanggahan Diajukan",
    statusIcon: "mark_email_read",
    auditorName: "Bambang S.",
    auditorPhoto: "https://lh3.googleusercontent.com/aida-public/AB6AXuDDwQvG_O3qLe1JG2NL6iDvyA6cPzMOGHAGsX6cgn6PZ1HoeNvrxzsUOOgbCtS2k1cyf_iCAwnjb-N8EsOd8x249C_ZXvM2XvQPhg4xxtbYx85dl2Dhsa7oawpK4QC2ZHFdxTetqXtgpA08016XtsHOk4X-0uJ06hOYwyf0JlV7gtER2SjT7qtrQewcMW5j6hHBDy4IbOZSh1VuwWaYZuzBMDIMLm20zSBQYrhZODJH",
    hasPulse: true,
    statusBg: "bg-secondary-container",
    statusColor: "text-on-secondary-container",
  },
  {
    id: "NM-2025-0842",
    date: "18 Feb 2025",
    workDays: "5 hari kerja",
    company: "PT Bukit Prima Coal",
    iup: "IUP: 188.4/320/DESDM/2018",
    location: "Muara Enim, Sumsel",
    anomalyTitle: "Deviasi Kalori CoA vs Surveyor",
    anomalyDetail: "-480 kcal/kg (GAR)",
    anomalyIcon: "thermostat",
    anomalyNote: "Pengapalan Domestik PLN",
    riskBand: "Sedang",
    riskScore: 64,
    aiConf: 89,
    reviewStatus: "Klarifikasi Dikirim",
    statusIcon: "mail",
    auditorName: "Hendra W.",
    auditorPhoto: "https://lh3.googleusercontent.com/aida-public/AB6AXuAf1_euO_51PLaHuXrVnixrOLbR36xq-kL8sDHLRflVmTU1cJVZ_VJ7uT4USpijSSzsOKkWvSpH24XvrQJOAd3Tt0RR5lec7-kPpeh6wuzlgs_4jSo6jaCs0LZxHIM1jF7gl-26oOOZmmYG1aqyAZGMSGG7CAfS9CaISGRia2lKFJ_rRS6RLZWx26iF0m29aJ1RTICnhzsIaNhW77l5vW8Y56f2TY8tNhMxfq28T99N",
    statusBg: "bg-status-review-bg",
    statusColor: "text-status-review",
  },
  {
    id: "NM-2025-0774",
    date: "12 Feb 2025",
    workDays: "11 hari kerja",
    company: "PT Borneo Mineral Persada",
    iup: "IUP: 545/09/IUP-OP/2016",
    location: "Tanah Bumbu, Kalsel",
    anomalyTitle: "Inkonsistensi Spasial Jetty Muat",
    anomalyDetail: "Deviasi 3,2 KM dari Titik Izin",
    anomalyIcon: "near_me",
    anomalyNote: "Citra Radar Sentinel-1",
    riskBand: "Tinggi",
    riskScore: 82,
    aiConf: 91,
    reviewStatus: "Jadwal Lapangan",
    statusIcon: "location_on",
    auditorName: "Tim Wil. 2",
    statusBg: "bg-surface-container-high",
    statusColor: "text-on-surface",
  },
  {
    id: "NM-2025-0621",
    date: "19 Feb 2025",
    workDays: "4 hari kerja",
    company: "PT Nusantara Coal Mandiri",
    iup: "IUP: 541.2/11/DPE/2021",
    location: "Berau, Kaltim",
    anomalyTitle: "Time Gap Log Jembatan Timbang",
    anomalyDetail: "Gap 36 Jam Pelaporan",
    anomalyIcon: "schedule",
    anomalyNote: "Stempel Batch Timbangan",
    riskBand: "Sedang",
    riskScore: 55,
    aiConf: 86,
    reviewStatus: "Verifikasi Berkas",
    statusIcon: "search_check",
    auditorName: "Siti Rahma",
    auditorPhoto: "https://lh3.googleusercontent.com/aida-public/AB6AXuCmsqXgPpmn9EvmKt4t91bFHXek_-vNHmNU1DCf0AWirudh2jQ5v1u2rtkfqag5udqU5-eY0pplEqoGn49sB9c2Van9f1Sh28tloRoa5ID8zFFfsvwVSy6tFCWglLgXnIvY8dYCNoDgfp4Y6Jpy0HGoUCDufM_egMTU7p3Dwu6BJHW6ZmtYkcNOgevs56QVDzav8zJTXZbvHfkqhnV4MG-S3cgmU3rdWdqHp9APfCxd",
    statusBg: "bg-status-neutral-bg",
    statusColor: "text-status-neutral",
  },
  {
    id: "NM-2025-0589",
    date: "22 Feb 2025",
    workDays: "1 hari kerja",
    company: "PT Sumber Sejahtera Tambang",
    iup: "IUP: 503/481/KPPT/2017",
    location: "Lahat, Sumsel",
    anomalyTitle: "Selisih Pelaporan Tongkang e-PNBP",
    anomalyDetail: "2,8% Variansi (Wajar)",
    anomalyIcon: "check_circle",
    anomalyNote: "Ambang batas toleransi <3%",
    riskBand: "Rendah",
    riskScore: 32,
    aiConf: 82,
    reviewStatus: "Menunggu Penugasan",
    statusIcon: "person_add",
    auditorName: "- Belum Ada -",
    statusBg: "bg-surface-container-high",
    statusColor: "text-on-surface-variant",
  },
  {
    id: "NM-2025-0510",
    date: "17 Feb 2025",
    workDays: "6 hari kerja",
    company: "PT Kencana Coal Pasir",
    iup: "IUP: 540/77/MB-PB/2020",
    location: "Paser, Kaltim",
    anomalyTitle: "Mismatch Sertifikat Surveyor CEISA",
    anomalyDetail: "Perbedaan Nomor Registrasi",
    anomalyIcon: "find_in_page",
    anomalyNote: "Bea Cukai Balikpapan",
    riskBand: "Sedang",
    riskScore: 61,
    aiConf: 88,
    reviewStatus: "Verifikasi Berkas",
    statusIcon: "inventory_2",
    auditorName: "Bambang S.",
    auditorPhoto: "https://lh3.googleusercontent.com/aida-public/AB6AXuDDHtMX3R3Gdp4TVVXGrXVT2IHtaNjJLHPr-7dgtKAUIV9RmUEy05SNg5B7OoTgm4ai5of7rJXJxOOxwmHpxpuiLlyMs7NpuxLDb1I5Au7iGpou8iZ3Larayb1vX9Uc7_TbCDAKTrsYY3xE6JuAViB826JDigEsP4wrsiJHAJAfkG9f9z25mYnb2gHof9-RBZTPEqQjEOkvbDY3XlxQomrS6ec5NB1fY50JQxktH9mR",
    statusBg: "bg-status-neutral-bg",
    statusColor: "text-status-neutral",
  },
  // Page 2
  {
    id: "NM-2025-0498",
    date: "15 Feb 2025",
    workDays: "8 hari kerja",
    company: "PT Berau Jaya Minerals",
    iup: "IUP: 541/12/IUP-OP/2018",
    location: "Berau, Kaltim",
    anomalyTitle: "Deviasi Kalori Pengapalan Ekspor",
    anomalyDetail: "-320 kcal/kg (GAR)",
    anomalyIcon: "thermostat",
    anomalyNote: "Surveyor Carsurin Suaran",
    riskBand: "Sedang",
    riskScore: 58,
    aiConf: 87,
    reviewStatus: "Klarifikasi Dikirim",
    statusIcon: "mail",
    auditorName: "Hendra W.",
    statusBg: "bg-status-review-bg",
    statusColor: "text-status-review",
  },
  {
    id: "NM-2025-0472",
    date: "14 Feb 2025",
    workDays: "9 hari kerja",
    company: "PT Kaltim Prima Sejahtera",
    iup: "IUP: 540/88/DESDM/2020",
    location: "Sangatta, Kaltim",
    anomalyTitle: "Selisih Draft Survey Pelabuhan",
    anomalyDetail: "+4.200 MT (+6,8%)",
    anomalyIcon: "difference",
    anomalyNote: "Tongkang BG. Surya 208",
    riskBand: "Tinggi",
    riskScore: 79,
    aiConf: 93,
    reviewStatus: "Sanggahan Diajukan",
    statusIcon: "mark_email_read",
    auditorName: "Bambang S.",
    statusBg: "bg-secondary-container",
    statusColor: "text-on-secondary-container",
  },
  {
    id: "NM-2025-0450",
    date: "11 Feb 2025",
    workDays: "12 hari kerja",
    company: "PT Barito Coal Mining",
    iup: "IUP: 545/14/DPE/2017",
    location: "Barito Utara, Kalteng",
    anomalyTitle: "Keterlambatan Laporan SPB Inaportnet",
    anomalyDetail: "Gap >48 Jam Keberangkatan",
    anomalyIcon: "schedule",
    anomalyNote: "KSOP Banjarmasin",
    riskBand: "Sedang",
    riskScore: 62,
    aiConf: 85,
    reviewStatus: "Verifikasi Berkas",
    statusIcon: "search_check",
    auditorName: "Siti Rahma",
    statusBg: "bg-status-neutral-bg",
    statusColor: "text-status-neutral",
  },
  {
    id: "NM-2025-0421",
    date: "10 Feb 2025",
    workDays: "13 hari kerja",
    company: "PT Kutai Energi Mandiri",
    iup: "IUP: 540/32/IUP-OP/2019",
    location: "Samboja, Kaltim",
    anomalyTitle: "Selisih Timbangan Belt Conveyor",
    anomalyDetail: "+8.100 MT (+9,2%)",
    anomalyIcon: "difference",
    anomalyNote: "Jetty Muara Jawa",
    riskBand: "Tinggi",
    riskScore: 84,
    aiConf: 92,
    reviewStatus: "Jadwal Lapangan",
    statusIcon: "location_on",
    auditorName: "Tim Wil. 2",
    statusBg: "bg-surface-container-high",
    statusColor: "text-on-surface",
  },
  {
    id: "NM-2025-0399",
    date: "09 Feb 2025",
    workDays: "14 hari kerja",
    company: "PT South Kalimantan Resources",
    iup: "IUP: 503/102/KPPT/2018",
    location: "Satui, Kalsel",
    anomalyTitle: "Variansi Muatan Tongkang Wajar",
    anomalyDetail: "2,1% Variansi (Toleransi)",
    anomalyIcon: "check_circle",
    anomalyNote: "Batas metrologi <3%",
    riskBand: "Rendah",
    riskScore: 29,
    aiConf: 80,
    reviewStatus: "Selesai & Sah",
    statusIcon: "verified",
    auditorName: "Bambang S.",
    statusBg: "bg-status-verified-bg",
    statusColor: "text-status-verified",
  },
  {
    id: "NM-2025-0375",
    date: "08 Feb 2025",
    workDays: "15 hari kerja",
    company: "PT Sumatera Coal Energy",
    iup: "IUP: 188/44/ESDM/2016",
    location: "Lahat, Sumsel",
    anomalyTitle: "Perbedaan Surveyor Certificate ID",
    anomalyDetail: "Mismatch Kode LHP",
    anomalyIcon: "find_in_page",
    anomalyNote: "SIMPONI Kemenkeu",
    riskBand: "Sedang",
    riskScore: 54,
    aiConf: 84,
    reviewStatus: "Klarifikasi Dikirim",
    statusIcon: "mail",
    auditorName: "Hendra W.",
    statusBg: "bg-status-review-bg",
    statusColor: "text-status-review",
  },
  // Page 3
  {
    id: "NM-2025-0340",
    date: "05 Feb 2025",
    workDays: "17 hari kerja",
    company: "PT Banjar Bara Utama",
    iup: "IUP: 545/21/IUP-OP/2015",
    location: "Banjar, Kalsel",
    anomalyTitle: "Keterlambatan Pembayaran e-PNBP",
    anomalyDetail: "Selisih Stempel Waktu 7 Hari",
    anomalyIcon: "schedule",
    anomalyNote: "Bank Persepsi Kemenkeu",
    riskBand: "Sedang",
    riskScore: 57,
    aiConf: 86,
    reviewStatus: "Verifikasi Berkas",
    statusIcon: "search_check",
    auditorName: "Siti Rahma",
    statusBg: "bg-status-neutral-bg",
    statusColor: "text-status-neutral",
  },
  {
    id: "NM-2025-0312",
    date: "03 Feb 2025",
    workDays: "19 hari kerja",
    company: "PT Mahakam Sumber Abadi",
    iup: "IUP: 540/90/IUP-OP/2021",
    location: "Tenggarong, Kaltim",
    anomalyTitle: "Inkonsistensi Koordinat Titik Jetty",
    anomalyDetail: "Deviasi 2,8 KM Titik Muat",
    anomalyIcon: "near_me",
    anomalyNote: "Citra Sentinel-2",
    riskBand: "Tinggi",
    riskScore: 81,
    aiConf: 90,
    reviewStatus: "Jadwal Lapangan",
    statusIcon: "location_on",
    auditorName: "Tim Wil. 2",
    statusBg: "bg-surface-container-high",
    statusColor: "text-on-surface",
  },
  {
    id: "NM-2025-0288",
    date: "01 Feb 2025",
    workDays: "21 hari kerja",
    company: "PT Pasir Prima Coal",
    iup: "IUP: 540/15/MB-PB/2019",
    location: "Paser, Kaltim",
    anomalyTitle: "Deviasi Kalori Hasil Blending",
    anomalyDetail: "-510 kcal/kg (GAR)",
    anomalyIcon: "thermostat",
    anomalyNote: "Terminal Muat Teluk Adang",
    riskBand: "Sedang",
    riskScore: 66,
    aiConf: 88,
    reviewStatus: "Klarifikasi Dikirim",
    statusIcon: "mail",
    auditorName: "Hendra W.",
    statusBg: "bg-status-review-bg",
    statusColor: "text-status-review",
  },
  {
    id: "NM-2025-0255",
    date: "29 Jan 2025",
    workDays: "23 hari kerja",
    company: "PT Enim Mineral Mandiri",
    iup: "IUP: 188.4/110/DESDM/2017",
    location: "Muara Enim, Sumsel",
    anomalyTitle: "Selisih Volume Pengiriman Kereta Api",
    anomalyDetail: "+3.100 MT (+4,2%)",
    anomalyIcon: "difference",
    anomalyNote: "Stasiun Muat Sukacinta",
    riskBand: "Tinggi",
    riskScore: 78,
    aiConf: 91,
    reviewStatus: "Sanggahan Diajukan",
    statusIcon: "mark_email_read",
    auditorName: "Bambang S.",
    statusBg: "bg-secondary-container",
    statusColor: "text-on-secondary-container",
  },
  {
    id: "NM-2025-0220",
    date: "27 Jan 2025",
    workDays: "25 hari kerja",
    company: "PT Kalsel Coal Terminal",
    iup: "IUP: 503/89/KPPT/2016",
    location: "Tanah Laut, Kalsel",
    anomalyTitle: "Variansi Pelaporan Tongkang Domestik",
    anomalyDetail: "1,9% Variansi (Wajar)",
    anomalyIcon: "check_circle",
    anomalyNote: "Toleransi Metrologi <3%",
    riskBand: "Rendah",
    riskScore: 27,
    aiConf: 81,
    reviewStatus: "Selesai & Sah",
    statusIcon: "verified",
    auditorName: "Bambang S.",
    statusBg: "bg-status-verified-bg",
    statusColor: "text-status-verified",
  },
  {
    id: "NM-2025-0190",
    date: "24 Jan 2025",
    workDays: "28 hari kerja",
    company: "PT Berau Bara Energi",
    iup: "IUP: 541/08/IUP-OP/2018",
    location: "Berau, Kaltim",
    anomalyTitle: "Keterlambatan Input Surat Kelayakan",
    anomalyDetail: "Gap 40 Jam Pasca Muat",
    anomalyIcon: "schedule",
    anomalyNote: "Pelabuhan Tanjung Redeb",
    riskBand: "Sedang",
    riskScore: 59,
    aiConf: 85,
    reviewStatus: "Verifikasi Berkas",
    statusIcon: "search_check",
    auditorName: "Siti Rahma",
    statusBg: "bg-status-neutral-bg",
    statusColor: "text-status-neutral",
  },
];

export const PemeriksaanRisikoPage: React.FC<Props> = ({ onNavigate, onSelectCase }) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedCase, setSelectedCase] = useState<string>("NM-2025-0891");
  const [triaseAction, setTriaseAction] = useState<string>("dokumen");
  const [auditorNote, setAuditorNote] = useState<string>(
    "Dokumen Berita Acara Pelabuhan telah dicek kesesuaian stempelnya. Namun diperlukan konfirmasi ulang terhadap log draft survey Carsurin terkait volume 12.450 MT."
  );
  const [actionFeedback, setActionFeedback] = useState<string | null>(null);

  // Pagination & Segmented Filter State
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [bandFilter, setBandFilter] = useState<'all' | 'Tinggi' | 'Sedang' | 'Rendah'>('all');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const itemsPerPage = 6;

  // Filtered cases
  const filteredCases = useMemo(() => {
    return ALL_CASES.filter((c) => {
      const matchSearch =
        searchTerm === "" ||
        c.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
        c.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
        c.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
        c.anomalyTitle.toLowerCase().includes(searchTerm.toLowerCase());

      const matchBand = bandFilter === 'all' || c.riskBand === bandFilter;
      const matchStatus = statusFilter === 'all' || c.reviewStatus.toLowerCase().includes(statusFilter.toLowerCase());

      return matchSearch && matchBand && matchStatus;
    });
  }, [searchTerm, bandFilter, statusFilter]);

  // Total pages
  const totalPages = Math.ceil(filteredCases.length / itemsPerPage) || 1;

  // Active page cases
  const displayedCases = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredCases.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredCases, currentPage]);

  const handleActionClick = (actionName: string) => {
    setTriaseAction(actionName);
    setActionFeedback(`Tindakan triase "${actionName}" dipilih untuk kasus ${selectedCase}. Catatan verifikator siap dicatat ke audit ledger.`);
    setTimeout(() => setActionFeedback(null), 4000);
  };

  const activeCaseDetail = useMemo(() => {
    return ALL_CASES.find((c) => c.id === selectedCase) || ALL_CASES[0];
  }, [selectedCase]);

  return (
    <div className="w-full">
      <div className="flex flex-col w-full">
        {/* Governance Affirmation & Ethical Banner */}
        <section className="relative overflow-hidden rounded-xl bg-surface-container p-space-lg shadow-sm mb-space-lg">
          <div className="absolute -right-12 -top-12 w-64 h-64 rounded-full bg-secondary-container/40 blur-3xl pointer-events-none"></div>
          <div className="relative z-10 flex flex-col xl:flex-row xl:items-center justify-between gap-space-md">
            <div className="flex items-start gap-space-md max-w-4xl">
              <div className="p-2.5 rounded-lg bg-primary-container text-surface flex items-center justify-center shadow-sm shrink-0">
                <span className="material-symbols-outlined text-[24px]">gavel</span>
              </div>
              <div className="flex flex-col gap-1">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-status-verified-bg text-status-verified font-label-xs text-label-xs font-semibold flex items-center gap-1.5 shadow-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-container"></span>
                    Human-in-the-Loop Protocol
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-bg-surface text-on-surface-variant font-label-xs text-label-xs font-medium">
                    Data demonstrasi teruji
                  </span>
                  <span className="font-label-xs text-label-xs text-on-surface-variant/80 font-mono">
                    Ref: SK Dirjen Minerba No. 182.K/30/DJB/2024
                  </span>
                </div>
                <p className="font-headline-sm text-headline-sm text-primary font-bold tracking-tight">
                  Prinsip Verifikasi Berimbang &amp; Triase Objektif
                </p>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Algoritma kecerdasan buatan hanya mengklasifikasikan anomali data berdasarkan tingkat deviasi metrologi dan inkonsistensi dokumen lintas kementerian. Penilaian akhir serta penetapan langkah klarifikasi sepenuhnya berada di bawah kewenangan verifikator manusia.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-space-sm self-start xl:self-auto shrink-0">
              <div className="flex flex-col items-end text-right">
                <span className="font-label-xs text-label-xs text-on-surface-variant font-mono">Waktu Server SIMBARA</span>
                <span className="font-tabular-data text-tabular-data font-bold text-primary">23 Feb 2025 • 09:41 WIB</span>
              </div>
              <div className="w-3 h-3 rounded-full bg-status-verified animate-ping" title="Koneksi Gateway SIMBARA Aktif"></div>
            </div>
          </div>
        </section>

        {/* 4 Summary Stat Cards */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md mb-space-lg">
          <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between hover:shadow-md transition-all">
            <div className="flex items-center justify-between">
              <span className="font-label-md text-label-md text-primary font-semibold">Total Antrean Triase</span>
              <span className="p-1.5 rounded-lg bg-surface-container text-primary">
                <span className="material-symbols-outlined text-[18px]">inbox</span>
              </span>
            </div>
            <div className="my-space-sm flex items-baseline gap-2">
              <span className="font-tabular-kpi text-tabular-kpi text-primary font-bold">42</span>
              <span className="font-label-xs text-label-xs text-on-surface-variant font-medium">kasus aktif</span>
            </div>
            <div className="flex items-center justify-between font-label-xs text-label-xs text-on-surface-variant">
              <span className="text-status-anomaly font-medium flex items-center gap-1">
                <span className="material-symbols-outlined text-[13px]">arrow_upward</span> +6 kasus baru
              </span>
              <span className="text-on-surface-variant/70">per 24 jam terakhir</span>
            </div>
          </div>

          <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between hover:shadow-md transition-all">
            <div className="flex items-center justify-between">
              <span className="font-label-md text-label-md text-status-anomaly font-semibold">Prioritas Tinggi (Skor &gt;75)</span>
              <span className="p-1.5 rounded-lg bg-status-anomaly-bg text-status-anomaly">
                <span className="material-symbols-outlined text-[18px]">priority_high</span>
              </span>
            </div>
            <div className="my-space-sm flex items-baseline gap-2">
              <span className="font-tabular-kpi text-tabular-kpi text-status-anomaly font-bold">14</span>
              <span className="font-label-xs text-label-xs text-on-surface-variant font-medium">perlu telaah cepat</span>
            </div>
            <div className="flex items-center justify-between font-label-xs text-label-xs text-on-surface-variant">
              <span className="">Deviasi volume &gt;10%</span>
              <span className="font-mono text-status-anomaly">SLA &lt;48 Jam</span>
            </div>
          </div>

          <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between hover:shadow-md transition-all">
            <div className="flex items-center justify-between">
              <span className="font-label-md text-label-md text-status-review font-semibold">Menunggu Klarifikasi</span>
              <span className="p-1.5 rounded-lg bg-status-review-bg text-status-review">
                <span className="material-symbols-outlined text-[18px]">forward_to_inbox</span>
              </span>
            </div>
            <div className="my-space-sm flex items-baseline gap-2">
              <span className="font-tabular-kpi text-tabular-kpi text-tertiary-container font-bold">7</span>
              <span className="font-label-xs text-label-xs text-on-surface-variant font-medium">surat tugas terkirim</span>
            </div>
            <div className="flex items-center justify-between font-label-xs text-label-xs text-on-surface-variant">
              <span className="">Rerata respons: 4,2 hari</span>
              <span className="text-status-review font-medium">Batas 7 hari</span>
            </div>
          </div>

          <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between hover:shadow-md transition-all">
            <div className="flex items-center justify-between">
              <span className="font-label-md text-label-md text-secondary font-semibold">Sanggahan Baru Masuk</span>
              <span className="p-1.5 rounded-lg bg-secondary-container text-on-secondary-container">
                <span className="material-symbols-outlined text-[18px]">fact_check</span>
              </span>
            </div>
            <div className="my-space-sm flex items-baseline gap-2">
              <span className="font-tabular-kpi text-tabular-kpi text-primary font-bold">8</span>
              <span className="font-label-xs text-label-xs text-on-surface-variant font-medium">dokumen siap ditelaah</span>
            </div>
            <div className="flex items-center justify-between font-label-xs text-label-xs text-on-surface-variant">
              <span className="text-primary-container font-semibold">Batas respons &lt;14 hari</span>
              <span className="font-mono text-[10px] text-primary bg-primary-fixed px-1.5 py-0.5 rounded">Hak Sanggah</span>
            </div>
          </div>
        </section>

        {/* Comprehensive Filter Bar & Segmented Controls */}
        <section className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm mb-space-lg flex flex-col gap-space-md">
          {/* Primary Search & Action Row */}
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center gap-space-md justify-between">
            <div className="relative flex-1">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px]">search</span>
              <input
                className="w-full pl-10 pr-12 py-2.5 bg-surface-container-low rounded-lg font-body-sm text-body-sm text-on-surface placeholder:text-on-surface-variant/70 focus:outline-none focus:ring-2 focus:ring-primary-container shadow-inner"
                placeholder="Cari berdasarkan ID Kasus (NM-2025-xxxx), Nama Perusahaan/IUP, No. Tongkang, atau Dokumen Surveyor..."
                type="text"
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setCurrentPage(1);
                }}
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant hover:text-on-surface text-label-xs font-label-xs bg-surface px-1.5 py-0.5 rounded shadow-xs cursor-pointer"
                  type="button"
                >
                  ESC
                </button>
              )}
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <button
                className="px-3.5 py-2.5 rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface font-label-md text-label-md flex items-center gap-1.5 transition-colors cursor-pointer"
                type="button"
                onClick={() => {
                  setSearchTerm("");
                  setBandFilter("all");
                  setStatusFilter("all");
                  setCurrentPage(1);
                }}
              >
                <span className="material-symbols-outlined text-[16px]">restart_alt</span>
                Reset Filter
              </button>
              <button
                className="px-4 py-2.5 rounded-lg bg-primary-container hover:bg-primary text-on-primary font-label-md text-label-md flex items-center gap-1.5 transition-colors shadow-sm cursor-pointer font-semibold"
                type="button"
              >
                <span className="material-symbols-outlined text-[16px]">tune</span>
                Terapkan Filter
              </button>
              <span className="h-6 w-px bg-surface-container mx-1"></span>
              <button
                className="p-2.5 rounded-lg bg-surface-container-low text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer"
                title="Ekspor Rekap Kasus (XLSX/PDF)"
                type="button"
              >
                <span className="material-symbols-outlined text-[18px]">download</span>
              </button>
            </div>
          </div>

          {/* Segmented Control Bar: Band Risiko */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2 border-t border-border-warm/40">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="font-label-xs text-label-xs text-on-surface-variant uppercase tracking-wider font-semibold">
                Segmentasi Band Risiko:
              </span>
              <div className="inline-flex rounded-lg bg-surface-container-low p-1 shadow-inner border border-border-warm/60">
                <button
                  type="button"
                  onClick={() => {
                    setBandFilter("all");
                    setCurrentPage(1);
                  }}
                  className={`px-3 py-1.5 rounded-md font-label-xs text-label-xs transition-all cursor-pointer font-medium ${
                    bandFilter === "all"
                      ? "bg-primary text-on-primary font-semibold shadow-xs"
                      : "text-on-surface-variant hover:text-on-surface hover:bg-surface/60"
                  }`}
                >
                  Semua Band ({ALL_CASES.length})
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setBandFilter("Tinggi");
                    setCurrentPage(1);
                  }}
                  className={`px-3 py-1.5 rounded-md font-label-xs text-label-xs transition-all cursor-pointer font-medium flex items-center gap-1 ${
                    bandFilter === "Tinggi"
                      ? "bg-status-anomaly text-on-primary font-semibold shadow-xs"
                      : "text-on-surface-variant hover:text-on-surface hover:bg-surface/60"
                  }`}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-status-anomaly"></span>
                  Tinggi (&gt;75)
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setBandFilter("Sedang");
                    setCurrentPage(1);
                  }}
                  className={`px-3 py-1.5 rounded-md font-label-xs text-label-xs transition-all cursor-pointer font-medium flex items-center gap-1 ${
                    bandFilter === "Sedang"
                      ? "bg-status-review text-on-primary font-semibold shadow-xs"
                      : "text-on-surface-variant hover:text-on-surface hover:bg-surface/60"
                  }`}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-status-review"></span>
                  Sedang (50-75)
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setBandFilter("Rendah");
                    setCurrentPage(1);
                  }}
                  className={`px-3 py-1.5 rounded-md font-label-xs text-label-xs transition-all cursor-pointer font-medium flex items-center gap-1 ${
                    bandFilter === "Rendah"
                      ? "bg-status-verified text-on-primary font-semibold shadow-xs"
                      : "text-on-surface-variant hover:text-on-surface hover:bg-surface/60"
                  }`}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-status-verified"></span>
                  Rendah (&lt;50)
                </button>
              </div>
            </div>

            <div className="font-body-sm text-body-sm text-on-surface-variant">
              Menampilkan <strong className="text-on-surface font-semibold">{filteredCases.length}</strong> kasus aktif yang memenuhi kriteria
            </div>
          </div>
        </section>

        {/* Main Workstation Layout: 12-Column Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-space-lg mb-space-lg items-start">
          {/* Table Section (7 Columns on XL) */}
          <section className="xl:col-span-7 flex flex-col gap-space-md">
            <div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden flex flex-col">
              {/* Table Top Subheader */}
              <div className="px-space-md py-3 bg-surface-container-low flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[20px] text-primary">view_list</span>
                  <span className="font-headline-sm text-headline-sm text-on-surface font-bold">Daftar Antrean Kasus Triase</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-label-xs font-label-xs text-on-surface-variant">Urutkan:</span>
                  <select className="bg-surface-container-lowest text-on-surface font-label-xs text-label-xs px-2 py-1 rounded shadow-xs focus:outline-none">
                    <option>Skor Risiko Tertinggi</option>
                    <option>Usia Berkas Terlama</option>
                    <option>Sanggahan Paling Baru</option>
                    <option>Batas Waktu Terdekat</option>
                  </select>
                </div>
              </div>

              {/* Dense Responsive Table Container */}
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-surface-container-low/60 text-on-surface-variant font-label-xs text-label-xs tracking-wider uppercase border-b border-warm">
                      <th className="py-3.5 px-space-md font-semibold whitespace-nowrap">ID &amp; Kasus</th>
                      <th className="py-3.5 px-space-md font-semibold">Badan Usaha / Lokasi</th>
                      <th className="py-3.5 px-space-md font-semibold">Indikasi Anomali &amp; Deviasi</th>
                      <th className="py-3.5 px-space-md font-semibold whitespace-nowrap">Band Risiko</th>
                      <th className="py-3.5 px-space-md font-semibold whitespace-nowrap">Status Peninjauan</th>
                      <th className="py-3.5 px-space-md font-semibold text-right whitespace-nowrap">Aksi</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-warm/50 text-body-sm font-body-sm text-on-surface">
                    {displayedCases.map((c) => {
                      const isSelected = selectedCase === c.id;
                      return (
                        <tr
                          key={c.id}
                          onClick={() => setSelectedCase(c.id)}
                          className={`transition-colors cursor-pointer group ${
                            isSelected
                              ? 'bg-surface-container/90 ring-1 ring-primary/40 shadow-xs'
                              : 'bg-surface-container-lowest hover:bg-surface-container-low'
                          }`}
                        >
                          <td className="py-3.5 px-space-md align-top whitespace-nowrap">
                            <div className="flex flex-col gap-1">
                              <span className="font-tabular-data text-tabular-data text-primary font-bold inline-flex items-center gap-1.5">
                                {c.id}
                                {c.hasPulse && <span className="w-2 h-2 rounded-full bg-status-anomaly animate-pulse"></span>}
                              </span>
                              <span className="text-label-xs font-label-xs text-on-surface-variant">{c.date}</span>
                              <span className="text-[10px] text-on-surface-variant/80 font-mono">{c.workDays}</span>
                            </div>
                          </td>
                          <td className="py-3.5 px-space-md align-top">
                            <div className="flex flex-col gap-0.5 min-w-[150px]">
                              <span className="font-headline-sm text-headline-sm text-on-surface font-semibold group-hover:text-primary transition-colors leading-snug">
                                {c.company}
                              </span>
                              <span className="text-label-xs font-label-xs text-on-surface-variant">{c.iup}</span>
                              <span className="text-label-xs font-label-xs text-secondary font-medium">{c.location}</span>
                            </div>
                          </td>
                          <td className="py-3.5 px-space-md align-top max-w-[240px]">
                            <div className="flex flex-col gap-1.5">
                              <span className="font-label-md text-label-md text-on-surface font-medium leading-snug">
                                {c.anomalyTitle}
                              </span>
                              <div className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded font-tabular-data text-tabular-data font-bold w-fit whitespace-nowrap ${
                                c.riskBand === 'Tinggi' ? 'bg-status-anomaly-bg text-status-anomaly' :
                                c.riskBand === 'Sedang' ? 'bg-status-review-bg text-status-review' :
                                'bg-status-verified-bg text-status-verified'
                              }`}>
                                <span className="material-symbols-outlined text-[14px]">{c.anomalyIcon}</span>
                                {c.anomalyDetail}
                              </div>
                              <span className="text-[10px] text-on-surface-variant font-mono">{c.anomalyNote}</span>
                            </div>
                          </td>
                          <td className="py-3.5 px-space-md align-top whitespace-nowrap">
                            <div className="flex flex-col items-start gap-1">
                              <span className={`px-2 py-0.5 rounded-full font-label-xs text-label-xs font-bold flex items-center gap-1 ${
                                c.riskBand === 'Tinggi' ? 'bg-status-anomaly-bg text-status-anomaly' :
                                c.riskBand === 'Sedang' ? 'bg-status-review-bg text-status-review' :
                                'bg-status-verified-bg text-status-verified'
                              }`}>
                                <span className="material-symbols-outlined text-[14px]">
                                  {c.riskBand === 'Tinggi' ? 'warning' : c.riskBand === 'Sedang' ? 'warning_amber' : 'info'}
                                </span>
                                {c.riskBand} ({c.riskScore}/100)
                              </span>
                              <span className="text-[10px] text-on-surface-variant font-mono">AI Conf. {c.aiConf}%</span>
                            </div>
                          </td>
                          <td className="py-3.5 px-space-md align-top">
                            <div className="flex flex-col gap-1.5 min-w-[130px]">
                              <span className={`px-2 py-0.5 rounded font-label-xs text-label-xs font-semibold flex items-center gap-1 w-fit whitespace-nowrap ${c.statusBg} ${c.statusColor}`}>
                                <span className="material-symbols-outlined text-[14px]">{c.statusIcon}</span>
                                {c.reviewStatus}
                              </span>
                              <div className="flex items-center gap-1.5">
                                {c.auditorPhoto ? (
                                  <img className="w-5 h-5 rounded-full object-cover shadow-xs shrink-0" alt="Auditor" src={c.auditorPhoto} />
                                ) : (
                                  <div className="w-5 h-5 rounded-full bg-surface-container flex items-center justify-center font-bold text-[10px] text-on-surface-variant shrink-0">
                                    {c.auditorName.slice(0, 2)}
                                  </div>
                                )}
                                <span className="text-[11px] text-on-surface-variant font-medium whitespace-nowrap">{c.auditorName}</span>
                              </div>
                            </div>
                          </td>
                          <td className="py-3.5 px-space-md align-top text-right whitespace-nowrap">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                setSelectedCase(c.id);
                                onSelectCase?.(c.id);
                                onNavigate?.('detail-kasus');
                              }}
                              className="px-3 py-1.5 rounded-lg bg-primary-container text-on-primary font-label-xs text-label-xs font-semibold hover:bg-primary shadow-sm flex items-center gap-1 ml-auto cursor-pointer"
                              type="button"
                            >
                              <span>Telaah</span>
                              <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

              {/* Table Footer / Fully Functional Pagination */}
              <div className="px-space-md py-3 bg-surface-container-low flex flex-col sm:flex-row items-center justify-between gap-space-sm border-t border-border-warm/60">
                <div className="font-label-xs text-label-xs text-on-surface-variant">
                  Menampilkan <strong className="text-on-surface font-semibold">{filteredCases.length === 0 ? 0 : (currentPage - 1) * itemsPerPage + 1}-{Math.min(currentPage * itemsPerPage, filteredCases.length)}</strong> dari <strong className="text-on-surface font-semibold">{filteredCases.length} kasus aktif</strong> antrean Ditjen Minerba
                </div>

                <div className="flex items-center gap-1">
                  <button
                    onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                    disabled={currentPage === 1}
                    className="px-2.5 py-1 rounded bg-surface-container-lowest text-on-surface-variant hover:text-on-surface font-label-xs text-label-xs shadow-xs disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer transition-colors"
                    type="button"
                  >
                    Sebelumnya
                  </button>

                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                    <button
                      key={pageNum}
                      onClick={() => setCurrentPage(pageNum)}
                      className={`w-7 h-7 rounded font-label-xs text-label-xs font-bold flex items-center justify-center transition-all cursor-pointer ${
                        currentPage === pageNum
                          ? 'bg-primary-container text-on-primary shadow-xs'
                          : 'bg-surface-container-lowest text-on-surface hover:bg-surface-container'
                      }`}
                      type="button"
                    >
                      {pageNum}
                    </button>
                  ))}

                  <button
                    onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
                    disabled={currentPage === totalPages || totalPages === 0}
                    className="px-2.5 py-1 rounded bg-surface-container-lowest text-on-surface hover:bg-surface-container font-label-xs text-label-xs shadow-xs disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer transition-colors"
                    type="button"
                  >
                    Selanjutnya
                  </button>
                </div>
              </div>
            </div>

            {/* Quick Methodology Guidance Card */}
            <div className="bg-surface-container-low/70 rounded-xl p-space-md flex items-start gap-space-md">
              <span className="material-symbols-outlined text-[24px] text-secondary shrink-0">rule</span>
              <div className="flex flex-col gap-1">
                <span className="font-headline-sm text-headline-sm text-on-surface font-semibold">Protokol Penilaian Triase 3 Jalur (Tri-Track Triaging)</span>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  1. <strong>Toleransi Metrologi:</strong> Selisih volume muatan &lt;3% dikategorikan variansi teknis dan dapat ditutup tanpa sanksi jika CoA terverifikasi.<br />
                  2. <strong>Hak Sanggah 14 Hari:</strong> Setiap badan usaha memiliki hak memberikan bukti pembantah bersertifikat sebelum pemeriksaan fisik dicanangkan.<br />
                  3. <strong>Audit Trail Otomatis:</strong> Keputusan apa pun yang Anda klik di panel sebelah kanan tercatat permanen dengan alasan profesional verifikator.
                </p>
              </div>
            </div>
          </section>

          {/* Interactive Active Case Detail Drawer / Slide-Over Review Workstation (5 Columns on XL) */}
          <section className="xl:col-span-5 bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-md">
            <div className="flex justify-end pb-2">
              <button
                onClick={() => {
                  onSelectCase?.(activeCaseDetail.id);
                  onNavigate?.('detail-kasus');
                }}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary-container text-on-primary font-label-xs text-label-xs font-semibold hover:bg-primary shadow-sm cursor-pointer transition-all"
                type="button"
              >
                <span>Buka Halaman Detail Kasus Penuh</span>
                <span className="material-symbols-outlined text-[15px]">open_in_new</span>
              </button>
            </div>

            <div className="flex items-start justify-between border-b pb-space-sm gap-2" style={{ borderColor: "rgb(221, 211, 196)" }}>
              <div className="flex flex-col">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-tabular-kpi text-[20px] font-bold text-primary">{activeCaseDetail.id}</span>
                  <span className="px-2 py-0.5 rounded bg-secondary-container text-on-secondary-container font-label-xs text-label-xs font-semibold whitespace-nowrap">
                    {activeCaseDetail.reviewStatus}
                  </span>
                </div>
                <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface mt-1.5 leading-snug">
                  {activeCaseDetail.company}
                </h3>
                <div className="flex items-center gap-1.5 text-label-xs text-secondary mt-1">
                  <span className="material-symbols-outlined text-[15px] shrink-0">location_on</span>
                  <span className="leading-tight">{activeCaseDetail.location}</span>
                </div>
              </div>
              <div className="flex flex-col items-end shrink-0">
                <span className={`px-2.5 py-1 rounded-full font-label-xs text-label-xs font-bold flex items-center gap-1 whitespace-nowrap ${
                  activeCaseDetail.riskBand === 'Tinggi' ? 'bg-status-anomaly-bg text-status-anomaly' :
                  activeCaseDetail.riskBand === 'Sedang' ? 'bg-status-review-bg text-status-review' :
                  'bg-status-verified-bg text-status-verified'
                }`}>
                  <span className="material-symbols-outlined text-[14px]">warning</span> Skor {activeCaseDetail.riskScore}/100
                </span>
                <span className="text-[11px] text-on-surface-variant mt-1 font-medium whitespace-nowrap">Prioritas Verifikasi</span>
              </div>
            </div>

            <div className="p-space-sm rounded-lg bg-surface-container-low flex flex-col gap-1.5">
              <div className="flex items-center justify-between font-label-xs">
                <span className="font-semibold text-primary flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[16px]">analytics</span> Mengapa Ditandai? (Analisis Inkonsistensi)
                </span>
                <span className="font-mono text-on-surface-variant text-[10px]">Algoritma Triase Cross-Check v2.4</span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                Terdeteksi deviasi muatan volume sebesar <strong className="text-status-anomaly font-semibold">{activeCaseDetail.anomalyDetail}</strong>. Perbedaan terjadi antara Laporan Rencana Pengapalan SIMBARA dengan Data Manifes Surat Persetujuan Berlayar (SPB) Inaportnet di Pelabuhan Muat.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm">
              <div className="p-space-sm rounded-lg bg-surface-container flex flex-col gap-1">
                <span className="text-label-xs text-on-surface-variant font-medium">Sumber A: SIMBARA / MOMS</span>
                <span className="text-[10px] font-mono text-on-surface-variant">#SB-8921-25</span>
                <div className="my-1 flex items-baseline gap-1.5">
                  <span className="font-tabular-kpi text-[22px] font-bold text-primary">100.200</span>
                  <span className="text-label-xs text-on-surface-variant font-mono">MT</span>
                </div>
                <div className="flex flex-col text-[11px] text-on-surface-variant leading-normal gap-0.5 mt-0.5">
                  <span className="font-medium text-on-surface">Deklarasi RKAB Asli</span>
                  <span>Waktu: 19 Feb 2025, 08:30 WITA</span>
                  <span>Surveyor: PT Sucofindo Samarinda</span>
                </div>
              </div>

              <div className="p-space-sm rounded-lg bg-surface-container flex flex-col gap-1">
                <span className="text-label-xs text-on-surface-variant font-medium">Sumber B: CEISA / Inaportnet</span>
                <span className="text-[10px] font-mono text-on-surface-variant">#IN-4402-SMD</span>
                <div className="my-1 flex items-baseline gap-1.5">
                  <span className="font-tabular-kpi text-[22px] font-bold text-primary">112.650</span>
                  <span className="text-label-xs text-on-surface-variant font-mono">MT</span>
                </div>
                <div className="flex flex-col text-[11px] text-on-surface-variant leading-normal gap-0.5 mt-0.5">
                  <span className="font-medium text-on-surface">Manifes SPB KSOP</span>
                  <span>Waktu: 20 Feb 2025, 14:15 WITA</span>
                  <span>Tongkang: BG. Financia 301</span>
                </div>
              </div>
            </div>

            <div className="p-space-sm rounded-lg bg-status-anomaly-bg flex items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-status-anomaly text-[20px] shrink-0">trending_up</span>
                <span className="font-label-md font-semibold text-status-anomaly">Selisih Deviasi Terhitung:</span>
              </div>
              <div className="text-right">
                <span className="font-tabular-kpi text-[20px] font-bold text-status-anomaly">+12.450 MT</span>
                <span className="font-label-xs text-status-anomaly block leading-tight font-medium">(+12,42%)</span>
              </div>
            </div>

            <div className="p-space-sm rounded-lg border border-[#DDD3C4] flex flex-col gap-2.5">
              <div className="flex flex-wrap items-center justify-between gap-1.5">
                <span className="font-label-md font-semibold text-primary flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[16px]">drafts</span> Sanggahan Masuk dari Pelaku Usaha
                </span>
                <span className="px-2 py-0.5 rounded bg-status-review-bg text-status-review font-label-xs font-semibold whitespace-nowrap">
                  Tersisa 11 Hari Kerja
                </span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                Badan Usaha mengajukan klarifikasi tertulis bahwa terjadi pengalihan sisa muatan (topping-off) dari tongkang sekunder akibat draft air sungai surut, didukung dokumen rekonsiliasi bersama:
              </p>
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between p-2.5 rounded bg-surface-container-low text-label-xs gap-2">
                  <div className="flex items-center gap-2 min-w-0">
                    <span className="material-symbols-outlined text-[20px] text-secondary shrink-0">description</span>
                    <div className="flex flex-col min-w-0">
                      <span className="font-semibold text-on-surface truncate">BA_Rekonsiliasi_Timbangan_Pelabuhan.pdf</span>
                      <span className="text-on-surface-variant text-[11px]">Ditandatangani KSOP &amp; Surveyor - 2,4 MB</span>
                    </div>
                  </div>
                  <a className="text-secondary font-semibold hover:underline shrink-0 px-1" href="#download">Unduh</a>
                </div>
                <div className="flex items-center justify-between p-2.5 rounded bg-surface-container-low text-label-xs gap-2">
                  <div className="flex items-center gap-2 min-w-0">
                    <span className="material-symbols-outlined text-[20px] text-secondary shrink-0">description</span>
                    <div className="flex flex-col min-w-0">
                      <span className="font-semibold text-on-surface truncate">Draft_Survey_Report_BG_Financia_301.pdf</span>
                      <span className="text-on-surface-variant text-[11px]">Surveyor Independen Carsurin - 1,8 MB</span>
                    </div>
                  </div>
                  <a className="text-secondary font-semibold hover:underline shrink-0 px-1" href="#download">Unduh</a>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2.5 pt-2 border-t border-[#DDD3C4]">
              <div className="flex items-center justify-between">
                <span className="font-label-md font-bold text-on-surface flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[18px] text-primary">assignment_ind</span> Keputusan Manusia (Reviewer Actions)
                </span>
                <span className="text-[11px] text-on-surface-variant font-medium">Hak Wewenang Auditor</span>
              </div>
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="font-label-xs text-on-surface font-semibold">
                    Catatan Pertimbangan / Rationale Auditor <span className="text-status-anomaly">*Wajib Diisi</span>
                  </label>
                  <span className="text-[10px] text-on-surface-variant font-mono">Kriptografi log Ditjen Minerba</span>
                </div>
                <textarea
                  className="w-full p-2.5 rounded-lg bg-surface-container-low border border-[#DDD3C4] text-body-sm text-on-surface leading-relaxed focus:outline-none focus:ring-2 focus:ring-primary-container"
                  rows={4}
                  value={auditorNote}
                  onChange={(e) => setAuditorNote(e.target.value)}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => handleActionClick('Minta Dokumen Tambahan')}
                  className="px-3 py-2 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[16px]">edit_note</span> Minta Dokumen Tambahan
                </button>
                <button
                  type="button"
                  onClick={() => handleActionClick('Jadwalkan Cek Lapangan')}
                  className="px-3 py-2 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[16px]">schedule_send</span> Jadwalkan Cek Lapangan
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => handleActionClick('Terima Sanggahan & Selesai')}
                  className="px-3 py-2 rounded-lg bg-primary-container hover:bg-primary text-on-primary font-label-md text-label-md font-bold flex items-center justify-center gap-1.5 transition-colors shadow-sm cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[16px]">check_circle</span> Terima Sanggahan &amp; Selesai
                </button>
                <button
                  type="button"
                  onClick={() => handleActionClick('Eskalasi ke Panel Ahli')}
                  className="px-3 py-2 rounded-lg bg-status-anomaly text-on-primary font-label-md text-label-md font-bold flex items-center justify-center gap-1.5 transition-colors shadow-sm hover:opacity-90 cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[16px]">warning</span> Eskalasi ke Panel Ahli
                </button>
              </div>

              {actionFeedback && (
                <div className="p-space-sm rounded-lg bg-status-verified-bg border border-status-verified text-status-verified font-body-sm font-semibold flex items-center gap-2">
                  <span className="material-symbols-outlined text-[18px]">verified</span>
                  <span>{actionFeedback}</span>
                </div>
              )}

              <div className="flex items-start gap-2 p-2.5 rounded bg-surface-container-low text-on-surface-variant text-[11px] leading-relaxed">
                <span className="material-symbols-outlined text-[16px] text-secondary shrink-0 mt-0.5">info</span>
                <span>
                  <strong>Peringatan Etika Tata Kelola:</strong> Sistem tidak menyediakan tombol penalti atau pemblokiran kuota otomatis. Seluruh proses penegakan regulasi mengacu pada UU Minerba melalui rekomendasi hasil pemeriksaan verifikator resmi.
                </span>
              </div>
            </div>
          </section>
        </div>

        {/* Audit Trail Mini-Ledger Footer Notice */}
        <footer className="mt-space-md p-space-md rounded-xl bg-surface-container-low flex flex-col sm:flex-row items-center justify-between gap-space-sm text-on-surface-variant font-label-xs text-label-xs">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-status-verified"></span>
            <span>Setiap akses catatan kasus dicatat dalam log keamanan kriptografis <strong>NusaMine Governance Network</strong>.</span>
          </div>
          <div className="flex items-center gap-space-md font-mono text-[11px]">
            <span>Node: ESDM-JKT-04</span>
            <span>Protokol Triase: Simbara.Minerba.v2</span>
            <span>Sinkronisasi Terakhir: 23 Feb 2025 09:41 WIB</span>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default PemeriksaanRisikoPage;
