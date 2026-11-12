import React, { useState } from "react";

interface Props {
  onNavigate?: (path: string) => void;
  onSelectCase?: (caseId: string) => void;
}

interface UserRecord {
  name: string;
  nip: string;
  org: string;
  dept: string;
  role: string;
  roleColor: string;
  roleBg: string;
  scope: string;
  scopeCode: string;
  authMethod: string;
  authIcon: string;
  avatar: string;
  avatarBg: string;
}

const USER_DATA: UserRecord[] = [
  // Page 1
  {
    name: "Hendra W., S.Kom.",
    nip: "NIP 19890312 201402 1 003",
    org: "Ditjen Minerba ESDM",
    dept: "Direktorat Pembinaan Pengusahaan",
    role: "Penelaah Utama (Reviewer)",
    roleColor: "text-primary",
    roleBg: "bg-primary/10",
    scope: "Kalimantan Timur (Kutai, Berau)",
    scopeCode: "W-KALTIM-01",
    authMethod: "BSSN Smartcard + HSM",
    authIcon: "verified_user",
    avatar: "HW",
    avatarBg: "bg-primary/15 text-primary",
  },
  {
    name: "Ir. Bambang Supriyanto, M.T.",
    nip: "NIP 19760814 200112 1 001",
    org: "Ditjen Minerba ESDM",
    dept: "Inspektorat Tambang Wil. II",
    role: "Auditor Ahli & Verifikator",
    roleColor: "text-primary",
    roleBg: "bg-primary/10",
    scope: "Nasional (Supervisi Lapangan)",
    scopeCode: "W-NASIONAL-ALL",
    authMethod: "FIDO2 Token + HSM",
    authIcon: "security",
    avatar: "BS",
    avatarBg: "bg-primary/15 text-primary",
  },
  {
    name: "Raden Mas Suryo",
    nip: "NIB 9120003410291",
    org: "PT Mahakam Bara Energi",
    dept: "Divisi Logistik & Ekspor Pelabuhan",
    role: "Admin Pelaku Usaha (KTT)",
    roleColor: "text-secondary",
    roleBg: "bg-secondary-container",
    scope: "Hanya Berkas IUP Milik PT MBE",
    scopeCode: "IUP-MBE-540",
    authMethod: "OTP Korporat + NIB",
    authIcon: "domain",
    avatar: "RS",
    avatarBg: "bg-secondary-container text-on-secondary-container",
  },
  {
    name: "Siti Rahma, S.T., M.Sc.",
    nip: "NIP 19840520 200801 2 004",
    org: "Ditjen Minerba ESDM",
    dept: "Subdit Pengawasan Penerimaan Negara",
    role: "Penelaah Triase Keuangan",
    roleColor: "text-primary",
    roleBg: "bg-primary/10",
    scope: "Sumatera Selatan & Kalsel",
    scopeCode: "W-SUMSEL-02",
    authMethod: "BSSN Smartcard + 2FA",
    authIcon: "verified_user",
    avatar: "SR",
    avatarBg: "bg-primary/15 text-primary",
  },
  {
    name: "Bambang S., S.T., M.Si.",
    nip: "NIP 19870415 200912 1 002",
    org: "Ditjen Bea Cukai",
    dept: "Pabean Ekspor Kalbagtim",
    role: "Verifikator Pabean",
    roleColor: "text-status-review",
    roleBg: "bg-status-review-bg",
    scope: "Manifes Muatan Ekspor Kaltim",
    scopeCode: "CEISA-KPT-092",
    authMethod: "Kemenkeu SSO + HSM",
    authIcon: "lock_clock",
    avatar: "BS",
    avatarBg: "bg-status-review/15 text-status-review",
  },
  // Page 2
  {
    name: "Dewi Kartika, S.Tr.Pel.",
    nip: "NIP 19910625 201503 2 002",
    org: "Ditjen Hubla KSOP",
    dept: "Seksi Keselamatan Berlayar & Manifes SPB",
    role: "Otoritas Pelabuhan (KSOP)",
    roleColor: "text-primary-container",
    roleBg: "bg-primary-container/10",
    scope: "Pelabuhan Samarinda & Balikpapan",
    scopeCode: "KSOP-SMD-01",
    authMethod: "Inaportnet SSO + 2FA",
    authIcon: "directions_boat",
    avatar: "DK",
    avatarBg: "bg-primary/15 text-primary",
  },
  {
    name: "Ahmad Faisol, S.Si.",
    nip: "NIP 880194812",
    org: "PT Sucofindo (Persero)",
    dept: "Laboratorium Mineral & Batubara Samarinda",
    role: "Surveyor Kualifikasi Independen",
    roleColor: "text-tertiary-container",
    roleBg: "bg-surface-container-high",
    scope: "Draft Survey & Verifikasi Kalori Kaltim",
    scopeCode: "SRV-SUCO-09",
    authMethod: "Sertifikat Digital KAN",
    authIcon: "biotech",
    avatar: "AF",
    avatarBg: "bg-surface-container-high text-on-surface",
  },
  {
    name: "Rian Pratama, S.T.",
    nip: "NIP 770291048",
    org: "PT Carsurin Tbk",
    dept: "Divisi Marine & Draft Inspection",
    role: "Surveyor Independen Muatan",
    roleColor: "text-tertiary-container",
    roleBg: "bg-surface-container-high",
    scope: "Terminal Teluk Sangkulirang & Berau",
    scopeCode: "SRV-CARS-04",
    authMethod: "BSrE Kriptografi Token",
    authIcon: "verified",
    avatar: "RP",
    avatarBg: "bg-surface-container-high text-on-surface",
  },
  {
    name: "Dian Anggraini, S.T.",
    nip: "NIP 19901103 201402 2 001",
    org: "Ditjen Minerba ESDM",
    dept: "Inspektorat Tambang Kalsel",
    role: "Inspektur Lapangan Wilayah",
    roleColor: "text-primary",
    roleBg: "bg-primary/10",
    scope: "Tanah Bumbu & Tanah Laut",
    scopeCode: "W-KALSEL-03",
    authMethod: "Mobile Smart Key + GPS",
    authIcon: "pin_drop",
    avatar: "DA",
    avatarBg: "bg-primary/15 text-primary",
  },
  {
    name: "Eko Wahyudi, S.E., Ak.",
    nip: "NIP 19830219 200701 1 002",
    org: "Kemenkeu DJA",
    dept: "Direktorat PNBP SDA Minerba",
    role: "Verifikator Royalti SIMPONI",
    roleColor: "text-status-review",
    roleBg: "bg-status-review-bg",
    scope: "Rekonsiliasi e-PNBP & e-Royalti",
    scopeCode: "PNBP-KEMENKEU-01",
    authMethod: "Kemenkeu SSO + OTP",
    authIcon: "payments",
    avatar: "EW",
    avatarBg: "bg-status-review/15 text-status-review",
  },
  // Page 3
  {
    name: "Sri Wahyuni, M.Kom.",
    nip: "NIP 19880910 201212 2 003",
    org: "Pusdatin ESDM",
    dept: "Pusat Data dan Informasi Gateway SIMBARA",
    role: "System Operator & Integrasi",
    roleColor: "text-status-neutral",
    roleBg: "bg-status-neutral-bg",
    scope: "Pipeline Kafka & Gateway SIMBARA",
    scopeCode: "SYS-PUSDATIN-01",
    authMethod: "HSM Hardware Root Key",
    authIcon: "terminal",
    avatar: "SW",
    avatarBg: "bg-status-neutral/15 text-status-neutral",
  },
  {
    name: "Gunawan Santoso",
    nip: "NIB 9120008819203",
    org: "PT Bukit Prima Coal",
    dept: "Pengapalan Domestik PLN",
    role: "Admin Pelaku Usaha (KTT)",
    roleColor: "text-secondary",
    roleBg: "bg-secondary-container",
    scope: "IUP Muara Enim PT BPC",
    scopeCode: "IUP-BPC-188",
    authMethod: "OTP Korporat + NIB",
    authIcon: "domain",
    avatar: "GS",
    avatarBg: "bg-secondary-container text-on-secondary-container",
  },
  {
    name: "Ir. Budi Santoso, M.M.",
    nip: "NIP 19690115 199503 1 002",
    org: "Ditjen Minerba ESDM",
    dept: "Direktorat Pembinaan Pengusahaan",
    role: "Super Admin Tata Kelola",
    roleColor: "text-primary",
    roleBg: "bg-primary/10",
    scope: "Otoritas Penuh Platform (BSSN-L3)",
    scopeCode: "SUPER-ADMIN-ALL",
    authMethod: "Dual HSM Key + Biometrik",
    authIcon: "shield",
    avatar: "BS",
    avatarBg: "bg-primary/15 text-primary",
  },
  {
    name: "M. Iqbal, S.Kom., CISSP",
    nip: "NIP 19920401 201602 1 005",
    org: "CSIRT ESDM",
    dept: "Tim Tanggap Insiden Keamanan Siber",
    role: "Security Officer & Audit Log",
    roleColor: "text-status-neutral",
    roleBg: "bg-status-neutral-bg",
    scope: "Audit Trail Forensik & Enkripsi",
    scopeCode: "SEC-CSIRT-01",
    authMethod: "YubiKey 5 FIPS + HSM",
    authIcon: "vpn_key",
    avatar: "MI",
    avatarBg: "bg-status-neutral/15 text-status-neutral",
  },
  {
    name: "Rina Puspitasari, S.H.",
    nip: "NIP 19860718 201012 2 001",
    org: "Ditjen Minerba ESDM",
    dept: "Biro Hukum & Tata Usaha Penelaahan",
    role: "Analis Hukum Sanggahan",
    roleColor: "text-primary",
    roleBg: "bg-primary/10",
    scope: "Sanggahan Masuk & Mediasi",
    scopeCode: "LAW-MINERBA-01",
    authMethod: "BSSN Smartcard + 2FA",
    authIcon: "gavel",
    avatar: "RP",
    avatarBg: "bg-primary/15 text-primary",
  },
];

export const PengaturanAksesPage: React.FC<Props> = ({ onNavigate, onSelectCase }) => {
  const [activeTab, setActiveTab] = useState<string>("users");
  const [userSearch, setUserSearch] = useState<string>("");
  const [filterOrg, setFilterOrg] = useState<string>("");
  const [filterRole, setFilterRole] = useState<string>("");
  const [showInviteModal, setShowInviteModal] = useState<boolean>(false);
  const [toast, setToast] = useState<string | null>(null);
  const [userPage, setUserPage] = useState<number>(1);
  const itemsPerPage = 5;

  const handleActionToast = (msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(null), 3000);
  };

  const filteredUsers = USER_DATA.filter((u) => {
    const matchSearch =
      userSearch === "" ||
      u.name.toLowerCase().includes(userSearch.toLowerCase()) ||
      u.nip.toLowerCase().includes(userSearch.toLowerCase()) ||
      u.org.toLowerCase().includes(userSearch.toLowerCase());

    const matchOrg = filterOrg === "" || u.org.toLowerCase().includes(filterOrg.toLowerCase());
    const matchRole = filterRole === "" || u.role.toLowerCase().includes(filterRole.toLowerCase());

    return matchSearch && matchOrg && matchRole;
  });

  const totalPages = Math.ceil(filteredUsers.length / itemsPerPage) || 1;
  const displayedUsers = filteredUsers.slice((userPage - 1) * itemsPerPage, userPage * itemsPerPage);

  return (
    <div className="w-full">
      <div className="flex flex-col w-full gap-space-lg">
        {/* Header & Doktrin Keamanan */}
        <section className="flex flex-col gap-space-md">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md pb-1">
            <div className="flex flex-col max-w-3xl">
              <div className="flex items-center gap-space-xs mb-1.5 flex-wrap">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-primary/10 text-primary font-label-xs text-label-xs font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                  Super Admin Tata Kelola &amp; Pengawas Akses ESDM
                </span>
                <span className="text-status-neutral font-label-xs text-label-xs">•</span>
                <span className="text-status-neutral font-label-xs text-label-xs font-medium">
                  Kunci HSM Aktif • 2FA Terverifikasi
                </span>
              </div>
              <h1 className="font-display-lg text-display-lg text-primary tracking-tight font-bold">
                Pengaturan &amp; Tata Kelola Akses
              </h1>
              <p className="font-body-md text-body-md text-on-surface-variant mt-1 leading-relaxed">
                Konfigurasi pengguna, organisasi kementerian/mitra, matriks peran, serta pemantauan tata kelola prinsip Least Privilege dan pemisahan tugas resmi.
              </p>
            </div>
            <div className="flex items-center gap-space-sm self-start md:self-auto shrink-0">
              <button
                className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-lg bg-surface text-primary shadow-sm hover:bg-surface-container-low transition-colors font-headline-sm text-body-sm font-semibold border border-border-warm/60 cursor-pointer"
                type="button"
                onClick={() => handleActionToast("Sesi Kriptografi HSM Terverifikasi aktif via BSSN.")}
              >
                <span className="material-symbols-outlined text-[18px]">verified_user</span>
                Sesi Kriptografi HSM
              </button>
              <button
                type="button"
                onClick={() => setShowInviteModal(true)}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-primary text-on-primary shadow-md hover:bg-primary-container transition-colors font-headline-sm text-body-sm font-semibold cursor-pointer"
              >
                <span className="material-symbols-outlined text-[18px]">person_add</span>
                + Undang Pengguna
              </button>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-xl bg-primary text-on-primary p-space-md shadow-md">
            <div className="absolute -right-10 -bottom-10 w-64 h-64 rounded-full bg-surface-tint/15 blur-2xl pointer-events-none"></div>
            <div className="relative z-10 flex flex-col md:flex-row items-start gap-space-md">
              <div className="p-2.5 rounded-lg bg-surface/10 text-primary-fixed shrink-0">
                <span className="material-symbols-outlined text-[28px]">shield</span>
              </div>
              <div className="flex flex-col gap-1.5">
                <div className="flex items-center gap-2.5 flex-wrap">
                  <span className="font-headline-sm text-headline-sm text-surface font-semibold">
                    Prinsip Pembatasan Hak Akses (Least Privilege &amp; Separation of Duties)
                  </span>
                  <span className="px-2.5 py-0.5 rounded bg-surface/15 text-primary-fixed font-label-xs text-label-xs font-semibold">
                    BSSN Level-3
                  </span>
                </div>
                <p className="font-body-sm text-body-sm text-surface/90 leading-relaxed max-w-5xl">
                  Setiap hak akses dibatasi secara ketat berdasarkan kewenangan yuridis: Penelaah Pemerintah hanya mengakses data kasus dalam mandat wilayahnya; Pelaku Usaha hanya mengakses berkas miliknya; Publik hanya mengakses agregat tanpa re-identifikasi; Administrator Platform tidak otomatis memiliki hak intip terhadap substansi bukti perkara rahasia. Setiap perubahan hak akses memerlukan alasan resmi dan tercatat secara permanen di audit log.
                </p>
              </div>
            </div>
          </div>

          {/* Segmented Control Navigation Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 bg-surface-container-low p-1.5 rounded-xl shadow-sm border border-border-warm/40">
            <button
              onClick={() => { setActiveTab("users"); setUserPage(1); }}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg font-headline-sm text-body-sm font-semibold transition-all whitespace-nowrap cursor-pointer ${
                activeTab === "users"
                  ? "bg-primary text-on-primary shadow-sm"
                  : "text-on-surface-variant hover:text-on-surface hover:bg-surface/50 font-body-md"
              }`}
              type="button"
            >
              <span className="material-symbols-outlined text-[18px]">manage_accounts</span>
              Manajemen Pengguna &amp; Akses
            </button>
            <button
              onClick={() => setActiveTab("rbac")}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg font-headline-sm text-body-sm font-semibold transition-all whitespace-nowrap cursor-pointer ${
                activeTab === "rbac"
                  ? "bg-primary text-on-primary shadow-sm"
                  : "text-on-surface-variant hover:text-on-surface hover:bg-surface/50 font-body-md"
              }`}
              type="button"
            >
              <span className="material-symbols-outlined text-[18px]">badge</span>
              Matriks Peran (RBAC)
            </button>
            <button
              onClick={() => setActiveTab("orgs")}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg font-headline-sm text-body-sm font-semibold transition-all whitespace-nowrap cursor-pointer ${
                activeTab === "orgs"
                  ? "bg-primary text-on-primary shadow-sm"
                  : "text-on-surface-variant hover:text-on-surface hover:bg-surface/50 font-body-md"
              }`}
              type="button"
            >
              <span className="material-symbols-outlined text-[18px]">corporate_fare</span>
              Konfigurasi Organisasi
            </button>
            <button
              onClick={() => setActiveTab("notifs")}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg font-headline-sm text-body-sm font-semibold transition-all whitespace-nowrap cursor-pointer ${
                activeTab === "notifs"
                  ? "bg-primary text-on-primary shadow-sm"
                  : "text-on-surface-variant hover:text-on-surface hover:bg-surface/50 font-body-md"
              }`}
              type="button"
            >
              <span className="material-symbols-outlined text-[18px]">notifications_active</span>
              Notifikasi &amp; Ambang Peringatan
            </button>
            <button
              onClick={() => setActiveTab("audit")}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg font-headline-sm text-body-sm font-semibold transition-all whitespace-nowrap cursor-pointer ${
                activeTab === "audit"
                  ? "bg-primary text-on-primary shadow-sm"
                  : "text-on-surface-variant hover:text-on-surface hover:bg-surface/50 font-body-md"
              }`}
              type="button"
            >
              <span className="material-symbols-outlined text-[18px]">history_edu</span>
              Audit Log
            </button>
          </div>
        </section>

        {/* TAB 1: MANAJEMEN PENGGUNA & AKSES */}
        {activeTab === "users" && (
          <div className="flex flex-col gap-space-lg">
            {/* 4 Kartu Ringkasan Metrik (KPIs) */}
            <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-space-md">
              <div className="flex flex-col justify-between p-space-md bg-surface rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between gap-2">
                  <span className="font-body-sm text-body-sm text-on-surface-variant font-medium">Pengguna Aktif Terdaftar</span>
                  <span className="px-2 py-0.5 rounded-full bg-surface-container text-tertiary font-label-xs text-label-xs">Data demonstrasi</span>
                </div>
                <div className="my-space-sm flex items-baseline gap-2">
                  <span className="font-tabular-kpi text-tabular-kpi text-primary">184</span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">Akun Terverifikasi</span>
                </div>
                <div className="flex flex-col gap-1">
                  <div className="w-full bg-surface-container-low h-1.5 rounded-full overflow-hidden flex">
                    <div className="bg-primary h-full" style={{ width: "23%" }}></div>
                    <div className="bg-secondary h-full" style={{ width: "70%" }}></div>
                    <div className="bg-status-review h-full" style={{ width: "7%" }}></div>
                  </div>
                  <div className="flex items-center justify-between text-[11px] text-on-surface-variant mt-1 font-body-sm">
                    <span>Minerba: 42</span>
                    <span>•</span>
                    <span>Pelaku Usaha: 128</span>
                    <span>•</span>
                    <span>Independen: 14</span>
                  </div>
                  <span className="font-label-xs text-label-xs text-status-verified font-medium mt-1 inline-flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px]">check_circle</span>
                    Semua akun telah dipetakan NIP / NIB
                  </span>
                </div>
              </div>

              <div className="flex flex-col justify-between p-space-md bg-surface rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between gap-2">
                  <span className="font-body-sm text-body-sm text-on-surface-variant font-medium">Permintaan Perubahan Peran</span>
                  <span className="px-2 py-0.5 rounded-full bg-surface-container text-tertiary font-label-xs text-label-xs">Data demonstrasi</span>
                </div>
                <div className="my-space-sm flex items-baseline gap-2">
                  <span className="font-tabular-kpi text-tabular-kpi text-status-review">3</span>
                  <span className="font-body-sm text-body-sm text-status-review font-semibold">Menunggu Review</span>
                </div>
                <div className="flex flex-col gap-1.5">
                  <span className="font-body-sm text-body-sm text-on-surface">2 Promosi Penelaah • 1 Pembaruan KTT</span>
                  <span className="font-label-xs text-label-xs text-status-review font-medium inline-flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px]">schedule</span>
                    Batas SLA persetujuan 48 Jam
                  </span>
                </div>
              </div>

              <div className="flex flex-col justify-between p-space-md bg-surface rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between gap-2">
                  <span className="font-body-sm text-body-sm text-on-surface-variant font-medium">Kepatuhan Least Privilege</span>
                  <span className="px-2 py-0.5 rounded-full bg-surface-container text-tertiary font-label-xs text-label-xs">Data demonstrasi</span>
                </div>
                <div className="my-space-sm flex items-baseline gap-2">
                  <span className="font-tabular-kpi text-tabular-kpi text-status-verified">100%</span>
                  <span className="font-body-sm text-body-sm text-status-verified font-semibold">Terkunci Yuridis</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-body-sm text-body-sm text-on-surface">0 Pelanggaran Cross-Jurisdiction</span>
                  <span className="font-label-xs text-label-xs text-status-verified font-medium inline-flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px]">verified</span>
                    Audited by BSSN Level-3 Standards
                  </span>
                </div>
              </div>

              <div className="flex flex-col justify-between p-space-md bg-surface rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between gap-2">
                  <span className="font-body-sm text-body-sm text-on-surface-variant font-medium">Akses Super Admin Aktif</span>
                  <span className="px-2 py-0.5 rounded-full bg-status-review/10 text-status-review font-label-xs text-label-xs font-semibold">Maksimal 2 Orang</span>
                </div>
                <div className="my-space-sm flex items-baseline gap-2">
                  <span className="font-tabular-kpi text-tabular-kpi text-primary">2 / 2</span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">Sesi Aktif</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-body-sm text-body-sm text-on-surface">Direktur Pembinaan &amp; Kepala Pusdatin</span>
                  <span className="font-label-xs text-label-xs text-on-surface-variant font-medium inline-flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px] text-primary">key</span>
                    Dual-Key Approval Diperlukan
                  </span>
                </div>
              </div>
            </section>

            {/* 4 Arketipe Hak Akses */}
            <section className="flex flex-col gap-space-sm">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="font-display-md text-headline-lg text-primary font-semibold">
                    4 Arketipe Hak Akses &amp; Pemisahan Tugas (Role Archetypes)
                  </h2>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Pembagian mandat hukum menjamin tidak ada konflik kepentingan antara penelaah, pelaku usaha, pengawas independen, dan operator teknis.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-space-md">
                {/* Arketipe A */}
                <div className="flex flex-col justify-between rounded-xl bg-surface p-space-md shadow-sm hover:shadow-md transition-all border-t-4 border-primary">
                  <div className="flex flex-col gap-space-sm">
                    <div className="flex items-start justify-between">
                      <div className="p-2 rounded-lg bg-surface-container-low text-primary">
                        <span className="material-symbols-outlined text-[24px]">account_balance</span>
                      </div>
                      <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary font-label-xs text-label-xs font-semibold">Pemerintah &amp; Penelaah</span>
                    </div>
                    <div>
                      <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">Penelaah Kementerian ESDM</h3>
                      <span className="font-label-xs text-label-xs text-on-surface-variant uppercase tracking-wider">Ditjen Minerba &amp; Auditor</span>
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="p-2.5 rounded-lg bg-surface-container-low/60 flex flex-col gap-1">
                        <span className="font-label-xs text-label-xs text-primary font-semibold flex items-center gap-1">
                          <span className="material-symbols-outlined text-[14px]">visibility</span> Cakupan Akses:
                        </span>
                        <p className="font-body-sm text-[12px] text-on-surface-variant">
                          Melihat anomali dalam yurisdiksi penugasan resmi (SPT), menelaah bukti sanggahan, meminta klarifikasi dokumen, dan menerbitkan rekomendasi BAP.
                        </p>
                      </div>
                      <div className="p-2.5 rounded-lg bg-status-review-bg/40 flex flex-col gap-1">
                        <span className="font-label-xs text-label-xs text-status-review font-semibold flex items-center gap-1">
                          <span className="material-symbols-outlined text-[14px]">lock</span> Batasan Yuridis:
                        </span>
                        <p className="font-body-sm text-[12px] text-on-surface">
                          DILARANG mengakses berkas perkara di luar wilayah SPT atau memblokir kuota secara sepihak tanpa putusan resmi.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-space-md pt-space-xs flex items-center justify-between text-on-surface-variant font-label-xs text-label-xs">
                    <span>Audit ID: GOV-AUD-01</span>
                    <span className="text-primary font-semibold">Aktif (42 Akun)</span>
                  </div>
                </div>

                {/* Arketipe B */}
                <div className="flex flex-col justify-between rounded-xl bg-surface p-space-md shadow-sm hover:shadow-md transition-all border-t-4 border-secondary">
                  <div className="flex flex-col gap-space-sm">
                    <div className="flex items-start justify-between">
                      <div className="p-2 rounded-lg bg-surface-container-low text-secondary">
                        <span className="material-symbols-outlined text-[24px]">corporate_fare</span>
                      </div>
                      <span className="px-2 py-0.5 rounded-full bg-secondary/10 text-secondary font-label-xs text-label-xs font-semibold">Pelaku Usaha</span>
                    </div>
                    <div>
                      <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">Badan Usaha &amp; KTT</h3>
                      <span className="font-label-xs text-label-xs text-on-surface-variant uppercase tracking-wider">Pemegang IUP / IUPK Operasi</span>
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="p-2.5 rounded-lg bg-surface-container-low/60 flex flex-col gap-1">
                        <span className="font-label-xs text-label-xs text-primary font-semibold flex items-center gap-1">
                          <span className="material-symbols-outlined text-[14px]">visibility</span> Hak Akses:
                        </span>
                        <p className="font-body-sm text-[12px] text-on-surface-variant">
                          Melihat detail kasus anomali milik perusahaannya sendiri, mengajukan formulir sanggahan resmi, mengunggah bukti rekonsiliasi, dan memantau SLA telaah.
                        </p>
                      </div>
                      <div className="p-2.5 rounded-lg bg-status-anomaly-bg/40 flex flex-col gap-1">
                        <span className="font-label-xs text-label-xs text-status-anomaly font-semibold flex items-center gap-1">
                          <span className="material-symbols-outlined text-[14px]">block</span> Isolasi Rahasia Dagang:
                        </span>
                        <p className="font-body-sm text-[12px] text-on-surface">
                          TERISOLASI TOTAL dari data operasional, produksi, volume, maupun kasus badan usaha pesaing lainnya.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-space-md pt-space-xs flex items-center justify-between text-on-surface-variant font-label-xs text-label-xs">
                    <span>Audit ID: ENT-IUP-02</span>
                    <span className="text-secondary font-semibold">Aktif (128 Badan Usaha)</span>
                  </div>
                </div>

                {/* Arketipe C */}
                <div className="flex flex-col justify-between rounded-xl bg-surface p-space-md shadow-sm hover:shadow-md transition-all border-t-4 border-tertiary">
                  <div className="flex flex-col gap-space-sm">
                    <div className="flex items-start justify-between">
                      <div className="p-2 rounded-lg bg-surface-container-low text-tertiary">
                        <span className="material-symbols-outlined text-[24px]">public</span>
                      </div>
                      <span className="px-2 py-0.5 rounded-full bg-tertiary/10 text-tertiary font-label-xs text-label-xs font-semibold">Akses Publik</span>
                    </div>
                    <div>
                      <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">Publik &amp; Peneliti</h3>
                      <span className="font-label-xs text-label-xs text-on-surface-variant uppercase tracking-wider">Keterbukaan Informasi (UU KIP)</span>
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="p-2.5 rounded-lg bg-surface-container-low/60 flex flex-col gap-1">
                        <span className="font-label-xs text-label-xs text-primary font-semibold flex items-center gap-1">
                          <span className="material-symbols-outlined text-[14px]">analytics</span> Akses Agregat:
                        </span>
                        <p className="font-body-sm text-[12px] text-on-surface-variant">
                          Melihat statistik agregat kepatuhan wilayah, rasio sanggahan diterima/ditolak, tren deviasi per koridor pantauan, dan putusan inkracht final.
                        </p>
                      </div>
                      <div className="p-2.5 rounded-lg bg-surface-container-low flex flex-col gap-1">
                        <span className="font-label-xs text-label-xs text-on-surface-variant font-semibold flex items-center gap-1">
                          <span className="material-symbols-outlined text-[14px]">shield</span> Anonimitas Penuh:
                        </span>
                        <p className="font-body-sm text-[12px] text-on-surface">
                          Seluruh data koridor disamarkan secara statistik (*differential privacy*) tanpa nomor tongkang atau identitas rahasia dagang.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-space-md pt-space-xs flex items-center justify-between text-on-surface-variant font-label-xs text-label-xs">
                    <span>Audit ID: PUB-OPEN-03</span>
                    <span className="text-tertiary font-semibold">Tanpa Batas Sesi</span>
                  </div>
                </div>

                {/* Arketipe D */}
                <div className="flex flex-col justify-between rounded-xl bg-surface p-space-md shadow-sm hover:shadow-md transition-all border-t-4 border-status-neutral">
                  <div className="flex flex-col gap-space-sm">
                    <div className="flex items-start justify-between">
                      <div className="p-2 rounded-lg bg-surface-container-low text-primary">
                        <span className="material-symbols-outlined text-[24px]">terminal</span>
                      </div>
                      <span className="px-2 py-0.5 rounded-full bg-status-neutral-bg text-status-neutral font-label-xs text-label-xs font-semibold">Operasional Server</span>
                    </div>
                    <div>
                      <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">SysOps &amp; Operator</h3>
                      <span className="font-label-xs text-label-xs text-on-surface-variant uppercase tracking-wider">NusaWatch Telemetry</span>
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="p-2.5 rounded-lg bg-surface-container-low/60 flex flex-col gap-1">
                        <span className="font-label-xs text-label-xs text-primary font-semibold flex items-center gap-1">
                          <span className="material-symbols-outlined text-[14px]">speed</span> Hak Operasional:
                        </span>
                        <p className="font-body-sm text-[12px] text-on-surface-variant">
                          Pemantauan uptime server, pipeline antrean Kafka, sinkronisasi gateway SIMBARA, metrik latency, dan antrean retry data.
                        </p>
                      </div>
                      <div className="p-2.5 rounded-lg bg-status-anomaly-bg/40 flex flex-col gap-1">
                        <span className="font-label-xs text-label-xs text-status-anomaly font-semibold flex items-center gap-1">
                          <span className="material-symbols-outlined text-[14px]">do_not_disturb_on</span> Isolasi Total:
                        </span>
                        <p className="font-body-sm text-[12px] text-on-surface">
                          DILARANG melihat substansi bukti, dokumen komersial, data kapal, atau penetapan sanksi perkara.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-space-md pt-space-xs flex items-center justify-between text-on-surface-variant font-label-xs text-label-xs">
                    <span>Audit ID: OPS-SYS-04</span>
                    <span className="text-status-neutral font-semibold">Aktif (14 Akun)</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Tabel Manajemen Pengguna & Cakupan Akses dengan Pagination Interaktif */}
            <section className="flex flex-col gap-space-sm bg-surface rounded-xl p-space-md shadow-sm border border-border-warm/60">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-sm">
                <div className="flex flex-col">
                  <h2 className="font-display-md text-headline-lg text-primary font-semibold">
                    Daftar Pengguna &amp; Cakupan Yuridis Aktif
                  </h2>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">
                    Pemisahan hak akses berbasis NIP/NIB terverifikasi dengan stempel waktu BSrE
                  </span>
                </div>
                {/* Toolbar Search & Filter */}
                <div className="flex flex-wrap items-center gap-space-xs">
                  <div className="relative min-w-[240px]">
                    <span className="material-symbols-outlined absolute left-3 top-2.5 text-outline text-[18px]">search</span>
                    <input
                      className="w-full pl-9 pr-3 py-1.5 rounded-lg bg-surface-container-low text-on-surface placeholder:text-outline font-body-sm text-body-sm focus:outline-none focus:ring-1 focus:ring-primary shadow-inner"
                      placeholder="Cari Nama, NIP, atau NIB..."
                      type="text"
                      value={userSearch}
                      onChange={(e) => {
                        setUserSearch(e.target.value);
                        setUserPage(1);
                      }}
                    />
                  </div>
                  <select
                    className="px-3 py-1.5 rounded-lg bg-surface-container-low text-on-surface font-body-sm text-body-sm focus:outline-none cursor-pointer"
                    value={filterOrg}
                    onChange={(e) => {
                      setFilterOrg(e.target.value);
                      setUserPage(1);
                    }}
                  >
                    <option value="">Semua Instansi</option>
                    <option value="minerba">Ditjen Minerba ESDM</option>
                    <option value="bea cukai">Ditjen Bea Cukai</option>
                    <option value="hubla">Ditjen Hubla KSOP</option>
                    <option value="sucofindo">PT Sucofindo</option>
                    <option value="carsurin">PT Carsurin</option>
                    <option value="mahakam">PT Mahakam Bara Energi</option>
                    <option value="pusdatin">Pusdatin ESDM</option>
                  </select>
                  <select
                    className="px-3 py-1.5 rounded-lg bg-surface-container-low text-on-surface font-body-sm text-body-sm focus:outline-none cursor-pointer"
                    value={filterRole}
                    onChange={(e) => {
                      setFilterRole(e.target.value);
                      setUserPage(1);
                    }}
                  >
                    <option value="">Semua Peran</option>
                    <option value="penelaah">Penelaah Utama</option>
                    <option value="auditor">Auditor Ahli</option>
                    <option value="pelaku usaha">Admin Pelaku Usaha</option>
                    <option value="surveyor">Surveyor Independen</option>
                    <option value="sysops">Platform SysOps</option>
                  </select>
                  <button
                    className="p-2 rounded-lg bg-surface-container-low text-on-surface-variant hover:text-on-surface cursor-pointer"
                    title="Reset Filter"
                    type="button"
                    onClick={() => {
                      setUserSearch("");
                      setFilterOrg("");
                      setFilterRole("");
                      setUserPage(1);
                    }}
                  >
                    <span className="material-symbols-outlined text-[18px]">restart_alt</span>
                  </button>
                </div>
              </div>

              {/* Data-Dense Table Container */}
              <div className="overflow-x-auto mt-space-xs rounded-lg border border-border-warm/40">
                <table className="w-full text-left border-collapse text-body-sm">
                  <thead>
                    <tr className="bg-surface-container-low/70 text-on-surface-variant font-label-xs text-label-xs uppercase tracking-wider border-b border-border-warm">
                      <th className="py-3 px-3 font-semibold">Nama &amp; Identitas Resmi</th>
                      <th className="py-3 px-3 font-semibold">Instansi &amp; Unit Kerja</th>
                      <th className="py-3 px-3 font-semibold">Peran Matriks</th>
                      <th className="py-3 px-3 font-semibold">Mandat Wilayah / Yurisdiksi</th>
                      <th className="py-3 px-3 font-semibold">Metode Otentikasi</th>
                      <th className="py-3 px-3 font-semibold text-right">Aksi</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border-warm/50">
                    {displayedUsers.map((u, idx) => (
                      <tr key={idx} className="hover:bg-surface-container-low/50 transition-colors">
                        <td className="py-3 px-3">
                          <div className="flex items-center gap-2.5">
                            <div className={`w-8 h-8 rounded-full ${u.avatarBg} flex items-center justify-center font-bold text-xs shrink-0`}>
                              {u.avatar}
                            </div>
                            <div className="flex flex-col">
                              <span className="font-headline-sm text-body-sm font-semibold text-on-surface">{u.name}</span>
                              <span className="font-mono text-[11px] text-on-surface-variant">{u.nip}</span>
                            </div>
                          </div>
                        </td>
                        <td className="py-3 px-3">
                          <div className="flex flex-col">
                            <span className="font-medium text-on-surface">{u.org}</span>
                            <span className="text-[11px] text-on-surface-variant">{u.dept}</span>
                          </div>
                        </td>
                        <td className="py-3 px-3">
                          <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded ${u.roleBg} ${u.roleColor} font-label-xs text-label-xs font-semibold`}>
                            {u.role}
                          </span>
                        </td>
                        <td className="py-3 px-3">
                          <div className="flex flex-col">
                            <span className="font-medium text-on-surface">{u.scope}</span>
                            <span className="font-mono text-[11px] text-on-surface-variant">{u.scopeCode}</span>
                          </div>
                        </td>
                        <td className="py-3 px-3">
                          <span className="inline-flex items-center gap-1 text-[12px] text-on-surface-variant">
                            <span className="material-symbols-outlined text-[15px] text-primary">{u.authIcon}</span>
                            {u.authMethod}
                          </span>
                        </td>
                        <td className="py-3 px-3 text-right">
                          <button
                            onClick={() => handleActionToast(`Buka formulir hak akses untuk: ${u.name}`)}
                            className="px-2.5 py-1 rounded bg-surface-container-low hover:bg-surface-container text-primary font-headline-sm text-[12px] font-semibold transition-colors cursor-pointer"
                            type="button"
                          >
                            Ubah Hak Akses
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Functional User Table Pagination */}
              <div className="px-space-md py-3 bg-surface-container-low/40 flex flex-col sm:flex-row items-center justify-between gap-3 text-label-xs font-label-xs text-on-surface-variant border-t border-border-warm/40">
                <span>
                  Menampilkan <strong className="text-on-surface font-semibold">{filteredUsers.length === 0 ? 0 : (userPage - 1) * itemsPerPage + 1}-{Math.min(userPage * itemsPerPage, filteredUsers.length)}</strong> dari <strong className="text-on-surface font-semibold">{filteredUsers.length} pengguna terdaftar</strong>
                </span>
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => setUserPage((p) => Math.max(1, p - 1))}
                    disabled={userPage === 1}
                    className="px-2.5 py-1 rounded bg-surface text-on-surface hover:bg-surface-container disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer transition-colors shadow-xs"
                    type="button"
                  >
                    Sebelumnya
                  </button>
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                    <button
                      key={p}
                      onClick={() => setUserPage(p)}
                      className={`w-7 h-7 rounded font-semibold cursor-pointer transition-all flex items-center justify-center ${
                        userPage === p
                          ? "bg-primary text-on-primary shadow-xs"
                          : "bg-surface text-on-surface hover:bg-surface-container"
                      }`}
                      type="button"
                    >
                      {p}
                    </button>
                  ))}
                  <button
                    onClick={() => setUserPage((p) => Math.min(totalPages, p + 1))}
                    disabled={userPage === totalPages || totalPages === 0}
                    className="px-2.5 py-1 rounded bg-surface text-on-surface hover:bg-surface-container disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer transition-colors shadow-xs"
                    type="button"
                  >
                    Selanjutnya
                  </button>
                </div>
              </div>
            </section>

            {/* Form Permohonan Modifikasi Cakupan Hak Akses Pengguna */}
            <section className="bg-surface rounded-xl p-space-md shadow-sm border border-border-warm/60">
              <div className="flex items-center gap-2 pb-space-xs border-b border-border-warm/40 mb-space-md">
                <span className="p-1.5 rounded-lg bg-surface-container-low text-primary material-symbols-outlined text-[20px]">edit_note</span>
                <div className="flex flex-col">
                  <h3 className="font-headline-sm text-headline-sm text-primary font-semibold">
                    Permohonan Modifikasi Cakupan Hak Akses Pengguna
                  </h3>
                  <span className="font-label-xs text-label-xs text-on-surface-variant">
                    Human-in-the-Loop Multi-Signatory Verification (Memerlukan Otorisasi Pejabat Eselon II)
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
                <div className="flex flex-col gap-1.5">
                  <label className="font-label-xs text-label-xs font-semibold text-on-surface">Pilih Akun Terdaftar</label>
                  <select className="p-2 rounded-lg bg-surface-container-low text-body-sm text-on-surface focus:outline-none border border-border-warm/40">
                    <option>Hendra W., S.Kom. (Ditjen Minerba - Penelaah)</option>
                    <option>Siti Rahma, S.T. (Ditjen Minerba - Keuangan)</option>
                    <option>Raden Mas Suryo (PT Mahakam Bara Energi - KTT)</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="font-label-xs text-label-xs font-semibold text-on-surface">Peran Baru yang Dimohonkan</label>
                  <select className="p-2 rounded-lg bg-surface-container-low text-body-sm text-on-surface focus:outline-none border border-border-warm/40">
                    <option>Auditor Ahli Wilayah II (Kaltim, Kalsel, Sumsel)</option>
                    <option>Inspektur Lapangan Fisik (SPT Tambang)</option>
                    <option>Koordinator Mediasi Sanggahan</option>
                  </select>
                </div>

                <div className="md:col-span-2 flex flex-col gap-1.5">
                  <label className="font-label-xs text-label-xs font-semibold text-on-surface">Dasar Surat Perintah Tugas (SPT) / Alasan Resmi</label>
                  <input
                    className="p-2 rounded-lg bg-surface-container-low text-body-sm text-on-surface focus:outline-none border border-border-warm/40"
                    placeholder="misal: Surat Tugas No. 042/ST-MINERBA/II/2025 tentang Perluasan Penugasan Koridor Mahakam"
                    defaultValue="Surat Tugas No. 042/ST-MINERBA/II/2025 tentang Perluasan Penugasan Koridor Mahakam"
                  />
                </div>
              </div>

              <div className="mt-space-md pt-space-xs flex items-center justify-between">
                <span className="font-label-xs text-label-xs text-on-surface-variant">
                  Setiap perubahan terekam permanen pada log audit BSSN Level-3
                </span>
                <button
                  type="button"
                  onClick={() => handleActionToast("Permohonan modifikasi hak akses berhasil diajukan untuk otorisasi Eselon II.")}
                  className="px-4 py-2 rounded-lg bg-primary text-on-primary font-headline-sm text-body-sm font-semibold hover:bg-primary-container transition-colors cursor-pointer"
                >
                  Kirim Permohonan Otorisasi
                </button>
              </div>
            </section>
          </div>
        )}

        {/* TAB 2: MATRIKS PERAN (RBAC) */}
        {activeTab === "rbac" && (
          <section className="flex flex-col gap-space-md bg-surface rounded-xl p-space-md shadow-sm border border-border-warm/60">
            <div className="flex flex-col gap-1 border-b border-border-warm/40 pb-space-xs">
              <h2 className="font-display-md text-headline-lg text-primary font-semibold">
                Matriks Kewenangan Peran (RBAC) &amp; Separation of Duties
              </h2>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Peta wewenang yuridis antar entitas tata kelola pertambangan nasional sesuai standar keamanan BSSN Level-3.
              </p>
            </div>

            <div className="overflow-x-auto rounded-lg border border-border-warm/40">
              <table className="w-full text-left border-collapse text-body-sm">
                <thead>
                  <tr className="bg-surface-container-low/70 text-on-surface-variant font-label-xs text-label-xs uppercase tracking-wider border-b border-border-warm">
                    <th className="py-3 px-3 font-semibold">Modul Tata Kelola</th>
                    <th className="py-3 px-3 font-semibold text-center">Penelaah Minerba</th>
                    <th className="py-3 px-3 font-semibold text-center">Pelaku Usaha (KTT)</th>
                    <th className="py-3 px-3 font-semibold text-center">Otoritas Pelabuhan</th>
                    <th className="py-3 px-3 font-semibold text-center">Publik &amp; Peneliti</th>
                    <th className="py-3 px-3 font-semibold text-center">SysOps NusaWatch</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border-warm/50">
                  <tr className="hover:bg-surface-container-low/40">
                    <td className="py-3 px-3 font-medium">1. Triase &amp; Deteksi Anomali SIMBARA</td>
                    <td className="py-3 px-3 text-center"><span className="text-status-verified font-bold">Akses Penuh (SPT)</span></td>
                    <td className="py-3 px-3 text-center"><span className="text-secondary font-bold">Kasus Milik Sendiri</span></td>
                    <td className="py-3 px-3 text-center"><span className="text-on-surface-variant font-medium">Data SPB Terkait</span></td>
                    <td className="py-3 px-3 text-center"><span className="text-on-surface-variant">Statistik Agregat</span></td>
                    <td className="py-3 px-3 text-center"><span className="text-status-anomaly font-bold">Ditolak (Isolasi)</span></td>
                  </tr>
                  <tr className="hover:bg-surface-container-low/40">
                    <td className="py-3 px-3 font-medium">2. Pengajuan Sanggahan &amp; Hak Jawab</td>
                    <td className="py-3 px-3 text-center"><span className="text-on-surface-variant font-medium">Telaah &amp; Verifikasi</span></td>
                    <td className="py-3 px-3 text-center"><span className="text-status-verified font-bold">Buat &amp; Unggah Bukti</span></td>
                    <td className="py-3 px-3 text-center"><span className="text-on-surface-variant">Konfirmasi Stempel</span></td>
                    <td className="py-3 px-3 text-center"><span className="text-status-anomaly">Tidak Ada Akses</span></td>
                    <td className="py-3 px-3 text-center"><span className="text-status-anomaly font-bold">Ditolak (Isolasi)</span></td>
                  </tr>
                  <tr className="hover:bg-surface-container-low/40">
                    <td className="py-3 px-3 font-medium">3. Pemeriksaan Lapangan &amp; Uji Lab</td>
                    <td className="py-3 px-3 text-center"><span className="text-status-verified font-bold">Tugaskan Inspektur</span></td>
                    <td className="py-3 px-3 text-center"><span className="text-on-surface-variant font-medium">Dampingi di Jetty</span></td>
                    <td className="py-3 px-3 text-center"><span className="text-status-verified font-bold">Akses Dermaga</span></td>
                    <td className="py-3 px-3 text-center"><span className="text-status-anomaly">Tidak Ada Akses</span></td>
                    <td className="py-3 px-3 text-center"><span className="text-status-anomaly font-bold">Ditolak (Isolasi)</span></td>
                  </tr>
                  <tr className="hover:bg-surface-container-low/40">
                    <td className="py-3 px-3 font-medium">4. Audit Forensik &amp; Kunci Kriptografi</td>
                    <td className="py-3 px-3 text-center"><span className="text-status-verified font-bold">Baca Log Kasus</span></td>
                    <td className="py-3 px-3 text-center"><span className="text-on-surface-variant">Tanda Tangan Elektronik</span></td>
                    <td className="py-3 px-3 text-center"><span className="text-on-surface-variant">Validasi SPB</span></td>
                    <td className="py-3 px-3 text-center"><span className="text-on-surface-variant">Verifikasi SHA Hash</span></td>
                    <td className="py-3 px-3 text-center"><span className="text-status-verified font-bold">Audit Enkripsi &amp; Token</span></td>
                  </tr>
                  <tr className="hover:bg-surface-container-low/40">
                    <td className="py-3 px-3 font-medium">5. Penyesuaian Kuota &amp; Rekomendasi Sanksi</td>
                    <td className="py-3 px-3 text-center"><span className="text-status-verified font-bold">Rekomendasi BAP Resmi</span></td>
                    <td className="py-3 px-3 text-center"><span className="text-on-surface-variant font-medium">Hak Banding Hukum</span></td>
                    <td className="py-3 px-3 text-center"><span className="text-on-surface-variant">Patuhi Surat Dirjen</span></td>
                    <td className="py-3 px-3 text-center"><span className="text-on-surface-variant">Keterbukaan Putusan Final</span></td>
                    <td className="py-3 px-3 text-center"><span className="text-status-anomaly font-bold">Ditolak (Zero Power)</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        )}

        {/* TAB 3: KONFIGURASI ORGANISASI */}
        {activeTab === "orgs" && (
          <section className="flex flex-col gap-space-md bg-surface rounded-xl p-space-md shadow-sm border border-border-warm/60">
            <div className="flex flex-col gap-1 border-b border-border-warm/40 pb-space-xs">
              <h2 className="font-display-md text-headline-lg text-primary font-semibold">
                Konfigurasi Lembaga Kementerian &amp; Mitra Terintegrasi
              </h2>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Status gateway antarmuka data antar-kementerian yang terhubung ke NusaMine Governance Engine.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-md">
              <div className="p-space-md rounded-xl bg-surface-container-low border border-border-warm/60 flex flex-col justify-between gap-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[24px] text-primary">account_balance</span>
                    <span className="font-headline-sm text-headline-sm font-bold text-on-surface">Ditjen Minerba ESDM</span>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-status-verified-bg text-status-verified font-label-xs text-label-xs font-semibold">Online</span>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Integrasi modul RKAB, MOMS, e-PNBP, dan basis data perizinan IUP Operasi Produksi.
                </p>
                <div className="flex items-center justify-between text-label-xs font-mono text-on-surface-variant pt-2 border-t border-border-warm/40">
                  <span>Latency: 18ms</span>
                  <span>Protokol: mTLS v1.3</span>
                </div>
              </div>

              <div className="p-space-md rounded-xl bg-surface-container-low border border-border-warm/60 flex flex-col justify-between gap-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[24px] text-primary">local_police</span>
                    <span className="font-headline-sm text-headline-sm font-bold text-on-surface">Ditjen Bea Cukai</span>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-status-verified-bg text-status-verified font-label-xs text-label-xs font-semibold">Online</span>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Sistem CEISA untuk validasi Surat Pemberitahuan Ekspor Barang (PEB) &amp; Laporan Surveyor Pabean.
                </p>
                <div className="flex items-center justify-between text-label-xs font-mono text-on-surface-variant pt-2 border-t border-border-warm/40">
                  <span>Latency: 32ms</span>
                  <span>Protokol: REST/HMAC</span>
                </div>
              </div>

              <div className="p-space-md rounded-xl bg-surface-container-low border border-border-warm/60 flex flex-col justify-between gap-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[24px] text-primary">directions_boat</span>
                    <span className="font-headline-sm text-headline-sm font-bold text-on-surface">Ditjen Hubla (KSOP)</span>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-status-verified-bg text-status-verified font-label-xs text-label-xs font-semibold">Online</span>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Gateway Inaportnet Kemenhub untuk sinkronisasi Surat Persetujuan Berlayar (SPB) tongkang.
                </p>
                <div className="flex items-center justify-between text-label-xs font-mono text-on-surface-variant pt-2 border-t border-border-warm/40">
                  <span>Latency: 24ms</span>
                  <span>Protokol: Webhook SIMBARA</span>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* TAB 4: NOTIFIKASI & AMBANG PERINGATAN */}
        {activeTab === "notifs" && (
          <section className="bg-surface rounded-xl p-space-md shadow-sm border border-border-warm/60">
            <div className="flex items-center gap-2 pb-space-xs border-b border-border-warm/40 mb-space-md">
              <span className="p-1.5 rounded-lg bg-surface-container-low text-primary material-symbols-outlined text-[20px]">tune</span>
              <div className="flex flex-col">
                <h3 className="font-headline-sm text-headline-sm text-primary font-semibold">Saluran Notifikasi &amp; Ambang Peringatan</h3>
                <span className="font-label-xs text-label-xs text-on-surface-variant">Konfigurasi Pengiriman Alert Sistem Otomatis</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
              <div className="p-3 rounded-lg bg-surface-container-low flex items-center justify-between">
                <div className="flex flex-col max-w-[80%]">
                  <span className="font-headline-sm text-[13px] font-semibold text-on-surface">Notifikasi Sanggahan Baru (14 Hari)</span>
                  <span className="font-body-sm text-[11px] text-on-surface-variant">Pemberitahuan via Email Dinas &amp; SMS Gateway Terenkripsi</span>
                </div>
                <input defaultChecked className="w-5 h-5 accent-primary cursor-pointer" type="checkbox" />
              </div>

              <div className="p-3 rounded-lg bg-surface-container-low flex items-center justify-between">
                <div className="flex flex-col max-w-[80%]">
                  <span className="font-headline-sm text-[13px] font-semibold text-on-surface">Peringatan Anomali Rekonsiliasi &gt;5% Deviasi</span>
                  <span className="font-body-sm text-[11px] text-on-surface-variant">In-App Banner Prioritas Tinggi &amp; Pesan Siaga Pusdatin</span>
                </div>
                <input defaultChecked className="w-5 h-5 accent-primary cursor-pointer" type="checkbox" />
              </div>

              <div className="p-3 rounded-lg bg-surface-container-low flex items-center justify-between">
                <div className="flex flex-col max-w-[80%]">
                  <span className="font-headline-sm text-[13px] font-semibold text-on-surface">Alert Batas Waktu Hak Jawab Menjelang Berakhir (T-3 Hari)</span>
                  <span className="font-body-sm text-[11px] text-on-surface-variant">Eskalasi otomatis ke Direktur Pembinaan Pengusahaan</span>
                </div>
                <input defaultChecked className="w-5 h-5 accent-primary cursor-pointer" type="checkbox" />
              </div>

              <div className="p-3 rounded-lg bg-surface-container-low flex items-center justify-between">
                <div className="flex flex-col max-w-[80%]">
                  <span className="font-headline-sm text-[13px] font-semibold text-on-surface">Sinkronisasi Audit Trail ke BSSN SIEM</span>
                  <span className="font-body-sm text-[11px] text-on-surface-variant">Mirroring event kriptografis realtime setiap 60 detik</span>
                </div>
                <input defaultChecked className="w-5 h-5 accent-primary cursor-pointer" type="checkbox" />
              </div>
            </div>

            <div className="mt-space-md pt-space-xs flex items-center justify-between">
              <span className="inline-flex items-center gap-1 font-label-xs text-label-xs text-status-verified">
                <span className="w-2 h-2 rounded-full bg-status-verified"></span>
                Semua Saluran Peringatan Siaga
              </span>
              <button
                type="button"
                onClick={() => handleActionToast("Konfigurasi ambang peringatan dan saluran notifikasi berhasil disimpan.")}
                className="px-4 py-2 rounded-lg bg-primary text-on-primary font-headline-sm text-body-sm font-semibold hover:bg-primary-container transition-colors cursor-pointer"
              >
                Simpan Ambang &amp; Saluran
              </button>
            </div>
          </section>
        )}

        {/* TAB 5: AUDIT LOG */}
        {activeTab === "audit" && (
          <section className="flex flex-col gap-space-sm bg-surface rounded-xl p-space-md shadow-sm border border-border-warm/60">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm border-b border-border-warm/40 pb-space-xs">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-[22px]">history_toggle_off</span>
                <div className="flex flex-col">
                  <h2 className="font-display-md text-headline-lg text-primary font-semibold">Audit Log Perubahan Akses Terbaru</h2>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">Immutable Access Ledger dengan pengesahan stempel waktu terdesentralisasi</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-status-verified-bg text-status-verified font-mono text-[11px] font-semibold">
                  <span className="material-symbols-outlined text-[14px]">lock</span>
                  SHA-256 Tersegel
                </span>
                <button
                  onClick={() => handleActionToast("Ekspor bukti forensik log akses (.CSV) siap diunduh.")}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-container-low hover:bg-surface-container text-primary font-headline-sm text-body-sm font-semibold transition-colors shadow-sm cursor-pointer"
                  type="button"
                >
                  <span className="material-symbols-outlined text-[16px]">file_download</span>
                  Ekspor Bukti Forensik (.CSV)
                </button>
              </div>
            </div>

            <div className="flex flex-col gap-2 mt-space-xs">
              <div className="p-3 rounded-lg bg-surface-container-low/70 flex flex-col md:flex-row md:items-center justify-between gap-2 hover:bg-surface-container-low transition-colors">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary shrink-0 mt-0.5">
                    <span className="material-symbols-outlined text-[18px]">verified_user</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-headline-sm text-body-sm font-semibold text-on-surface">Penerbitan Sesi HSM Verifikator Bambang S.</span>
                    <span className="font-body-sm text-[12px] text-on-surface-variant">Otorisasi token kriptografi untuk telaah kasus prioritas NM-2025-0891</span>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-label-xs font-mono text-on-surface-variant shrink-0">
                  <span>23 Feb 2025 • 09:30 WIB</span>
                  <span className="text-status-verified font-semibold">SUKSES</span>
                </div>
              </div>

              <div className="p-3 rounded-lg bg-surface-container-low/70 flex flex-col md:flex-row md:items-center justify-between gap-2 hover:bg-surface-container-low transition-colors">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-secondary/10 text-secondary shrink-0 mt-0.5">
                    <span className="material-symbols-outlined text-[18px]">key</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-headline-sm text-body-sm font-semibold text-on-surface">Rotasi Kunci API Gateway Inaportnet</span>
                    <span className="font-body-sm text-[12px] text-on-surface-variant">Pembaruan sertifikat mTLS berkala 90 hari sesuai standar BSSN</span>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-label-xs font-mono text-on-surface-variant shrink-0">
                  <span>23 Feb 2025 • 02:00 WIB</span>
                  <span className="text-status-verified font-semibold">ROTATED</span>
                </div>
              </div>

              <div className="p-3 rounded-lg bg-surface-container-low/70 flex flex-col md:flex-row md:items-center justify-between gap-2 hover:bg-surface-container-low transition-colors">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-status-anomaly/10 text-status-anomaly shrink-0 mt-0.5">
                    <span className="material-symbols-outlined text-[18px]">block</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-headline-sm text-body-sm font-semibold text-on-surface">Percobaan Akses Cross-Jurisdiction Ditolak</span>
                    <span className="font-body-sm text-[12px] text-on-surface-variant">Akun Penelaah Sumsel mencoba membuka berkas rahasia Kaltim (Least Privilege blocked)</span>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-label-xs font-mono text-on-surface-variant shrink-0">
                  <span>22 Feb 2025 • 17:15 WIB</span>
                  <span className="text-status-anomaly font-semibold">BLOCKED (403)</span>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Modal Undang Pengguna Baru */}
        {showInviteModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-xs p-4 animate-in fade-in duration-150">
            <div className="bg-surface rounded-2xl max-w-lg w-full p-space-lg shadow-2xl border border-border-warm flex flex-col gap-space-md">
              <div className="flex items-center justify-between pb-space-xs border-b border-border-warm/60">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-[24px]">person_add</span>
                  <h3 className="font-headline-md text-headline-md font-bold text-primary">Undang Pengguna Baru</h3>
                </div>
                <button
                  onClick={() => setShowInviteModal(false)}
                  className="p-1 rounded-md text-on-surface-variant hover:text-on-surface cursor-pointer"
                  type="button"
                >
                  <span className="material-symbols-outlined text-[20px]">close</span>
                </button>
              </div>

              <div className="flex flex-col gap-3 font-body-sm text-body-sm">
                <div className="flex flex-col gap-1">
                  <label className="font-label-xs text-label-xs font-semibold text-on-surface">Nama Lengkap &amp; Gelar</label>
                  <input className="p-2 rounded-lg bg-surface-container-low text-on-surface border border-border-warm/40 focus:outline-none" placeholder="mis. Dr. Ir. Ahmad Hidayat, M.Sc." />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="font-label-xs text-label-xs font-semibold text-on-surface">Nomor Induk Pegawai (NIP) / NIB Badan Usaha</label>
                  <input className="p-2 rounded-lg bg-surface-container-low text-on-surface border border-border-warm/40 focus:outline-none font-mono" placeholder="mis. 19850912 201101 1 004" />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex flex-col gap-1">
                    <label className="font-label-xs text-label-xs font-semibold text-on-surface">Instansi</label>
                    <select className="p-2 rounded-lg bg-surface-container-low text-on-surface border border-border-warm/40 focus:outline-none">
                      <option>Ditjen Minerba ESDM</option>
                      <option>Ditjen Bea Cukai Kemenkeu</option>
                      <option>Ditjen Hubla KSOP</option>
                      <option>Pelaku Usaha (IUP)</option>
                      <option>Surveyor Independen</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="font-label-xs text-label-xs font-semibold text-on-surface">Peran Akses</label>
                    <select className="p-2 rounded-lg bg-surface-container-low text-on-surface border border-border-warm/40 focus:outline-none">
                      <option>Penelaah Utama (Reviewer)</option>
                      <option>Auditor Ahli Wilayah</option>
                      <option>Admin Pelaku Usaha (KTT)</option>
                      <option>Otoritas Pelabuhan</option>
                      <option>Peninjau Independen</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex items-center justify-end gap-2 border-t border-border-warm/60">
                <button
                  type="button"
                  onClick={() => setShowInviteModal(false)}
                  className="px-4 py-2 rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface font-label-md text-label-md cursor-pointer"
                >
                  Batal
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setShowInviteModal(false);
                    handleActionToast("Undangan pengguna baru berhasil dikirim via email kedinasan terenkripsi.");
                  }}
                  className="px-4 py-2 rounded-lg bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md font-semibold cursor-pointer shadow-sm"
                >
                  Kirim Undangan Akses
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Global Toast Notification */}
        {toast && (
          <div className="fixed bottom-6 right-6 z-50 bg-primary text-on-primary px-4 py-3 rounded-xl shadow-2xl flex items-center gap-3 animate-in fade-in slide-in-from-bottom-2 duration-200">
            <span className="material-symbols-outlined text-status-verified text-[20px]">verified</span>
            <span className="font-body-sm font-semibold">{toast}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default PengaturanAksesPage;
