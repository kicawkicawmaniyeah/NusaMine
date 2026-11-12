import React, { useState } from 'react';

interface Props {
  onNavigate?: (path: string) => void;
  onSelectCase?: (caseId: string) => void;
}

interface UploadedDoc {
  id: string;
  name: string;
  size: string;
  hash: string;
  issuer: string;
}

const INITIAL_DOCS: UploadedDoc[] = [
  {
    id: 'doc-1',
    name: 'BA_Rekonsiliasi_Timbangan_MuaraJawa.pdf',
    size: '2,4 MB',
    hash: 'SHA256: 7f83b1657ff1...9a41',
    issuer: 'Ditandatangani KTT Ir. Hardiansyah',
  },
  {
    id: 'doc-2',
    name: 'Draft_Survey_Carsurin_Final_112650MT.pdf',
    size: '1,8 MB',
    hash: 'SHA256: 9e32a41280ba...11c2',
    issuer: 'Surveyor PT Carsurin (Akreditasi KAN LP-142)',
  },
];

export const PortalSanggahanPage: React.FC<Props> = ({ onNavigate, onSelectCase }) => {
  const [step, setStep] = useState<number>(2);
  const [showProceduralModal, setShowProceduralModal] = useState<boolean>(false);
  const [showWorkflowModal, setShowWorkflowModal] = useState<boolean>(false);
  const [showDiscrepancyModal, setShowDiscrepancyModal] = useState<boolean>(false);
  const [showIndependentModal, setShowIndependentModal] = useState<boolean>(false);
  const [showFinalDecisionModal, setShowFinalDecisionModal] = useState<boolean>(false);
  const [uploadedDocs, setUploadedDocs] = useState<UploadedDoc[]>(INITIAL_DOCS);
  const [localToast, setLocalToast] = useState<string | null>(null);
  const [subView, setSubView] = useState<'pelaku-usaha' | 'penelaah'>('pelaku-usaha');
  const [caseFilter, setCaseFilter] = useState<string>('all');

  const showToastMsg = (msg: string) => {
    setLocalToast(msg);
    setTimeout(() => setLocalToast(null), 3500);
  };

  const handleUploadSimulated = () => {
    const nextNum = uploadedDocs.length + 1;
    const newDoc: UploadedDoc = {
      id: `doc-${Date.now()}`,
      name: `Log_VTS_OlahGerak_KSOP_Samarinda_${nextNum}.pdf`,
      size: '2,9 MB',
      hash: `SHA256: ${Math.random().toString(16).substring(2, 10)}...${Math.random().toString(16).substring(2, 6)}`,
      issuer: 'Stasiun VTS Muara Berau (Kemenhub)',
    };
    setUploadedDocs(prev => [...prev, newDoc]);
    showToastMsg('Dokumen tandingan baru berhasil diunggah dan dibubuhi stempel SHA-256!');
  };

  const handleDeleteDoc = (id: string) => {
    setUploadedDocs(prev => prev.filter(d => d.id !== id));
    showToastMsg('Dokumen lampiran dihapus dari daftar berkas.');
  };
  return (
    <div className="w-full">
      <div className="flex flex-col w-full gap-space-lg">
{/* TOP IDENTITY & STATUTORY REASSURANCE BANNER */}
<div className="relative overflow-hidden rounded-xl bg-surface-container-low p-space-lg shadow-sm">
<div className="absolute right-0 top-0 -mr-16 -mt-16 w-80 h-80 rounded-full bg-gradient-to-br from-primary-fixed-dim/20 via-secondary-fixed/15 to-transparent blur-2xl pointer-events-none"></div>
<div className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-md relative z-10">
<div className="flex flex-col gap-1.5 max-w-3xl">
<div className="flex flex-wrap items-center gap-2">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary-container text-surface text-label-xs font-label-xs">
<span className="w-1.5 h-1.5 rounded-full bg-secondary-fixed"></span>
            Kamar Kerja Perusahaan
          </span>
<span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-surface-container-high text-on-surface-variant text-label-xs font-label-xs">
<span className="material-symbols-outlined text-[13px] text-primary">lock</span>
            Isolasi Kriptografis • IUP-OP: 540/012/IUP-OP/2021
          </span>
<span className="inline-flex items-center px-2 py-0.5 rounded bg-surface-container-high text-on-surface-variant font-label-xs text-label-xs">
            Data demonstrasi
          </span>
</div>
<h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight mt-1">
          Portal Sanggahan &amp; Hak Jawab Pelaku Usaha
        </h1>
<p className="font-body-md text-body-md text-on-surface-variant">
          Penyampaian klarifikasi berbasis fakta, dokumen tandingan surveyor, dan kronologi operasional sesuai koridor Peraturan Menteri ESDM dan integrasi SIMBARA.
        </p>
</div>
{/* Quick Action / Regulatory Guide Modal trigger */}
<div className="flex flex-wrap items-center gap-2">
<button className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-surface text-on-surface hover:bg-surface-container transition-colors shadow-sm font-label-md text-label-md cursor-pointer" onClick={() => setShowProceduralModal(true)} type="button">
<span className="material-symbols-outlined text-[18px] text-primary">verified_user</span>
          5 Jaminan Prosedural
</button>
<button className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-surface text-on-surface hover:bg-surface-container transition-colors shadow-sm font-label-md text-label-md cursor-pointer" onClick={() => setShowWorkflowModal(true)} type="button">
<span className="material-symbols-outlined text-[18px] text-secondary">alt_route</span>
          Alur 9 Tahapan Sanggahan
</button>
<button className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-surface text-on-surface hover:bg-surface-container transition-colors shadow-sm font-label-md text-label-md cursor-pointer" onClick={() => setShowIndependentModal(true)} type="button">
<span className="material-symbols-outlined text-[18px] text-tertiary">handshake</span>
          Status Peninjau Independen
</button>
<button className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-primary-container text-surface hover:bg-primary transition-colors shadow-sm font-label-md text-label-md font-semibold cursor-pointer" onClick={() => { setStep(1); showToastMsg('Membuka tahapan formulir sanggahan kasus NM-2025-0891'); }} type="button">
<span className="material-symbols-outlined text-[18px]">add_circle</span>
          Buat Sanggahan Baru
</button>
</div>
</div>
{/* Legal Affirmation & Non-accusatory reassurance note */}
<div className="mt-space-md grid grid-cols-1 md:grid-cols-2 gap-space-sm">
<div className="flex items-start gap-2.5 p-space-sm rounded-lg bg-surface/80 shadow-xs">
<span className="material-symbols-outlined text-primary text-[20px] shrink-0 mt-0.5">balance</span>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface font-semibold">Asas Keadilan &amp; Hak Jawab yang Berimbang</span>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5 leading-relaxed">
            Hak Sanggahan adalah hak resmi pelaku usaha untuk memberikan klarifikasi teknis dan bukti pendukung. Flag anomali semata-mata adalah pemicu penelaahan klarifikasi data, bukan vonis pelanggaran hukum.
          </p>
</div>
</div>
<div className="flex items-start gap-2.5 p-space-sm rounded-lg bg-surface/80 shadow-xs">
<span className="material-symbols-outlined text-secondary text-[20px] shrink-0 mt-0.5">schedule</span>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface font-semibold">Parameter Batas Waktu Uji Coba Pilot</span>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5 leading-relaxed">
            Batas waktu 14 hari kerja merupakan parameter uji coba (pilot parameter) yang diusulkan untuk evaluasi tata kelola terpadu Kalimantan Timur, bukan tenggat waktu sanksi hukum statuter.
          </p>
</div>
</div>
</div>
</div>
{/* KPI SUMMARY CARDS */}
<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-space-md">
{/* Card 1: Perlu Ditanggapi */}
<div className="flex flex-col justify-between p-space-md rounded-xl bg-status-review-bg/60 shadow-sm relative overflow-hidden transition-all hover:shadow-md cursor-pointer" onClick={() => {}}>
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md text-status-review font-semibold">Perlu Ditanggapi</span>
<span className="material-symbols-outlined text-status-review text-[20px]">notification_important</span>
</div>
<div className="my-space-sm">
<span className="font-tabular-kpi text-tabular-kpi text-on-surface">1</span>
<span className="font-body-sm text-body-sm text-on-surface-variant ml-1">Kasus</span>
</div>
<div className="inline-flex items-center gap-1 font-label-xs text-label-xs text-status-review font-medium">
<span className="material-symbols-outlined text-[14px]">timer</span>
        Tersisa 11 hari kerja pilot
      </div>
</div>
{/* Card 2: Sanggahan Diajukan */}
<div className="flex flex-col justify-between p-space-md rounded-xl bg-surface-container-low shadow-sm relative overflow-hidden transition-all hover:shadow-md cursor-pointer" onClick={() => {}}>
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md text-on-surface font-semibold">Sanggahan Diajukan</span>
<span className="material-symbols-outlined text-secondary text-[20px]">upload_file</span>
</div>
<div className="my-space-sm">
<span className="font-tabular-kpi text-tabular-kpi text-on-surface">1</span>
<span className="font-body-sm text-body-sm text-on-surface-variant ml-1">Kasus</span>
</div>
<div className="inline-flex items-center gap-1 font-label-xs text-label-xs text-on-surface-variant">
<span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
        Menunggu tinjauan awal
      </div>
</div>
{/* Card 3: Dalam Peninjauan */}
<div className="flex flex-col justify-between p-space-md rounded-xl bg-surface-container-low shadow-sm relative overflow-hidden transition-all hover:shadow-md cursor-pointer" onClick={() => {}}>
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md text-on-surface font-semibold">Dalam Peninjauan</span>
<span className="material-symbols-outlined text-primary text-[20px]">history_edu</span>
</div>
<div className="my-space-sm">
<span className="font-tabular-kpi text-tabular-kpi text-on-surface">2</span>
<span className="font-body-sm text-body-sm text-on-surface-variant ml-1">Kasus</span>
</div>
<div className="inline-flex items-center gap-1 font-label-xs text-label-xs text-on-surface-variant">
<span className="w-1.5 h-1.5 rounded-full bg-primary-fixed-dim"></span>
        Ditelaah analis teknis
      </div>
</div>
{/* Card 4: Perlu Info Tambahan */}
<div className="flex flex-col justify-between p-space-md rounded-xl bg-surface-container-high shadow-sm relative overflow-hidden transition-all hover:shadow-md cursor-pointer" onClick={() => {}}>
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md text-on-surface font-semibold">Perlu Info Tambahan</span>
<span className="material-symbols-outlined text-status-review text-[20px]">contact_support</span>
</div>
<div className="my-space-sm">
<span className="font-tabular-kpi text-tabular-kpi text-on-surface">1</span>
<span className="font-body-sm text-body-sm text-on-surface-variant ml-1">Kasus</span>
</div>
<div className="inline-flex items-center gap-1 font-label-xs text-label-xs text-status-review font-medium">
<span className="material-symbols-outlined text-[14px]">comment</span>
        Tanggapan klarifikasi diminta
      </div>
</div>
{/* Card 5: Selesai / Klir */}
<div className="flex flex-col justify-between p-space-md rounded-xl bg-status-verified-bg/70 shadow-sm relative overflow-hidden transition-all hover:shadow-md cursor-pointer" onClick={() => {}}>
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md text-status-verified font-semibold">Selesai / Klir</span>
<span className="material-symbols-outlined text-status-verified text-[20px]">verified</span>
</div>
<div className="my-space-sm">
<span className="font-tabular-kpi text-tabular-kpi text-on-surface">4</span>
<span className="font-body-sm text-body-sm text-on-surface-variant ml-1">Kasus</span>
</div>
<div className="inline-flex items-center gap-1 font-label-xs text-label-xs text-status-verified font-medium">
<span className="material-symbols-outlined text-[14px]">done_all</span>
        Klarifikasi diterima, flag ditutup
      </div>
</div>
</div>
{/* WORKBENCH LAYOUT: LEFT SIDE CASE LIST, RIGHT SIDE INTERACTIVE 5-STEP SUBMISSION FLOW */}
<div className="grid grid-cols-1 xl:grid-cols-12 gap-space-lg items-start">
{/* LEFT COLUMN: CASES QUEUE (5 Columns on XL) */}
<div className="xl:col-span-5 flex flex-col gap-space-md">
{/* Case Filters Header */}
<div className="flex flex-col gap-space-xs bg-surface-container-low p-space-md rounded-xl shadow-sm">
<div className="flex items-center justify-between">
<span className="font-headline-sm text-headline-sm text-on-surface font-semibold">Daftar Rekonsiliasi Kasus</span>
<span className="font-label-xs text-label-xs px-2 py-0.5 rounded-full bg-surface text-on-surface-variant">9 Total</span>
</div>
{/* Filter Pill Tabs */}
<div className="flex flex-wrap gap-1 mt-2">
<button onClick={() => setCaseFilter('all')} className={`tab-btn px-2.5 py-1 rounded text-label-xs font-label-xs font-semibold cursor-pointer transition-all ${caseFilter === 'all' ? 'bg-primary-container text-surface shadow-xs' : 'bg-surface text-on-surface-variant hover:text-on-surface hover:bg-surface-container'}`} type="button">Semua (9)</button>
<button onClick={() => setCaseFilter('need_response')} className={`tab-btn px-2.5 py-1 rounded text-label-xs font-label-xs font-semibold cursor-pointer transition-all ${caseFilter === 'need_response' ? 'bg-status-review-bg text-status-review shadow-xs' : 'bg-surface text-on-surface-variant hover:text-on-surface hover:bg-surface-container'}`} type="button">Perlu Ditanggapi (1)</button>
<button onClick={() => setCaseFilter('submitted')} className={`tab-btn px-2.5 py-1 rounded text-label-xs font-label-xs font-semibold cursor-pointer transition-all ${caseFilter === 'submitted' ? 'bg-secondary text-surface shadow-xs' : 'bg-surface text-on-surface-variant hover:text-on-surface hover:bg-surface-container'}`} type="button">Diajukan (1)</button>
<button onClick={() => setCaseFilter('review')} className={`tab-btn px-2.5 py-1 rounded text-label-xs font-label-xs font-semibold cursor-pointer transition-all ${caseFilter === 'review' ? 'bg-primary-container text-surface shadow-xs' : 'bg-surface text-on-surface-variant hover:text-on-surface hover:bg-surface-container'}`} type="button">Peninjauan (2)</button>
<button onClick={() => setCaseFilter('need_info')} className={`tab-btn px-2.5 py-1 rounded text-label-xs font-label-xs font-semibold cursor-pointer transition-all ${caseFilter === 'need_info' ? 'bg-status-review-bg text-status-review shadow-xs' : 'bg-surface text-on-surface-variant hover:text-on-surface hover:bg-surface-container'}`} type="button">Perlu Info (1)</button>
<button onClick={() => setCaseFilter('done')} className={`tab-btn px-2.5 py-1 rounded text-label-xs font-label-xs font-semibold cursor-pointer transition-all ${caseFilter === 'done' ? 'bg-status-verified-bg text-status-verified shadow-xs' : 'bg-surface text-on-surface-variant hover:text-on-surface hover:bg-surface-container'}`} type="button">Selesai (4)</button>
</div>
</div>
{/* Case Card 1 (Active Focus: NM-2025-0891) */}
<div className="flex flex-col p-space-md rounded-xl bg-surface shadow-md ring-2 ring-primary transition-all relative">
<div className="absolute top-3 right-3 flex items-center gap-1.5">
<span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-status-review-bg text-status-review font-label-xs text-label-xs font-semibold">
<span className="w-1.5 h-1.5 rounded-full bg-status-review animate-ping"></span>
            Perlu Ditanggapi
          </span>
</div>
<div className="flex items-center gap-2">
<span className="font-tabular-data text-tabular-data text-primary font-bold">NM-2025-0891</span>
<span className="text-outline-variant">•</span>
<span className="font-label-xs text-label-xs text-on-surface-variant">Batu Bara Termal (GAR 4200)</span>
</div>
<div className="mt-2.5 flex flex-col gap-1">
<h2 className="font-headline-sm text-headline-sm text-on-surface leading-tight font-semibold">
            Selisih Rekonsiliasi Volume Muat SIMBARA vs Inaportnet
          </h2>
<div className="flex items-center gap-2 text-on-surface-variant font-body-sm text-body-sm">
<span className="material-symbols-outlined text-[16px] text-secondary">anchor</span>
<span className="">Muara Berau Anchorage, Kutai Kartanegara</span>
</div>
</div>
{/* Metric highlights */}
<div className="mt-3 grid grid-cols-2 gap-2 p-2.5 rounded-lg bg-surface-container-low font-tabular-data text-tabular-data">
<div>
<div className="font-label-xs text-label-xs text-on-surface-variant">Rencana SIMBARA</div>
<div className="text-on-surface font-semibold">100.200 MT</div>
</div>
<div>
<div className="font-label-xs text-label-xs text-on-surface-variant">Manifes Inaportnet KSOP</div>
<div className="text-on-surface font-semibold">112.650 MT</div>
</div>
</div>
<div className="mt-2 flex items-center justify-between font-label-xs text-label-xs pt-2">
<div className="inline-flex items-center gap-1 text-status-review font-medium">
<span className="material-symbols-outlined text-[15px]">timer</span>
<span className="">Tersisa 11 hari kerja pilot (07 Mar 2025)</span>
</div>
<span className="font-tabular-data text-status-anomaly font-bold">+12.450 MT (+12,41%)</span>
</div>
</div>
{/* Case Card 2 (Clarification Pending: NM-2025-0744) */}
<div className="flex flex-col p-space-md rounded-xl bg-surface-container-low shadow-sm hover:shadow-md transition-all cursor-pointer">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="font-tabular-data text-tabular-data text-on-surface font-semibold">NM-2025-0744</span>
<span className="text-outline-variant">•</span>
<span className="font-label-xs text-label-xs text-on-surface-variant">Batu Bara Kalori Tinggi</span>
</div>
<span className="inline-flex items-center px-2 py-0.5 rounded-full bg-surface-container-high text-on-surface font-label-xs text-label-xs font-medium">
            Info Diminta
          </span>
</div>
<h2 className="font-headline-sm text-headline-sm text-on-surface mt-2 text-sm leading-snug font-medium">
          Klarifikasi Log Draft Survey Tongkang Sekunder BG. Samudera 12
        </h2>
<div className="mt-2 flex items-center justify-between font-label-xs text-label-xs text-on-surface-variant">
<span className="">Tersisa 4 hari respon</span>
<span className="text-status-review font-medium">Auditor Menunggu Respon</span>
</div>
</div>
{/* Case Card 3 (In Review: NM-2025-0612) */}
<div className="flex flex-col p-space-md rounded-xl bg-surface-container-low shadow-sm hover:shadow-md transition-all cursor-pointer">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="font-tabular-data text-tabular-data text-on-surface font-semibold">NM-2025-0612</span>
<span className="text-outline-variant">•</span>
<span className="font-label-xs text-label-xs text-on-surface-variant">Batu Bara Termal</span>
</div>
<span className="inline-flex items-center px-2 py-0.5 rounded-full bg-surface text-on-surface-variant font-label-xs text-label-xs">
            Dalam Peninjauan
          </span>
</div>
<h2 className="font-headline-sm text-headline-sm text-on-surface mt-2 text-sm leading-snug font-medium">
          Penelaahan Bukti Kalibrasi Belt Scale Terminal Muara Jawa
        </h2>
<div className="mt-2 flex items-center justify-between font-label-xs text-label-xs text-on-surface-variant">
<span className="">Diajukan 18 Feb 2025</span>
<span className="text-primary font-medium">Tahap: Ahli Metrologi</span>
</div>
</div>
{/* Historical / Closed snippet */}
<div className="p-space-sm rounded-lg bg-surface/50 flex items-center justify-between text-on-surface-variant font-body-sm text-body-sm">
<span className="inline-flex items-center gap-1.5 font-label-xs text-label-xs">
<span className="material-symbols-outlined text-[16px] text-status-verified">verified</span>
          4 Kasus telah berstatus klir &amp; flag ditutup
        </span>
<button className="font-label-xs text-label-xs text-primary font-semibold hover:underline" type="button">Lihat Arsip</button>
</div>
</div>
{/* RIGHT COLUMN: MULTI-STEP OBJECTION WORKFLOW & CLARIFICATION LOOP (7 Columns on XL) */}
<div className="xl:col-span-7 flex flex-col gap-space-lg">
{/* STEP PROGRESSION HEADER */}
<div className="p-space-md rounded-xl bg-surface shadow-sm flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<div>
<span className="font-label-xs text-label-xs text-secondary font-bold uppercase tracking-wider">Alur Sanggahan Bertahap</span>
<h2 className="font-headline-lg text-headline-lg text-on-surface font-bold tracking-tight">Kasus Ref: NM-2025-0891</h2>
</div>
<div className="text-right">
<span className="font-tabular-kpi text-tabular-kpi text-primary" id="step-indicator-text">{`Langkah ${step}`}</span>
<span className="font-label-xs text-label-xs text-on-surface-variant block">dari 5 Tahapan</span>
</div>
</div>
{/* 5-Step Progress Bar */}
<div className="grid grid-cols-5 gap-2">
{[
  { num: 1, label: '1. Alasan' },
  { num: 2, label: '2. Klarifikasi' },
  { num: 3, label: '3. Dokumen' },
  { num: 4, label: '4. Ringkasan' },
  { num: 5, label: '5. Bukti Terima' },
].map((s) => {
  const isPassed = step > s.num;
  const isCurrent = step === s.num;
  return (
    <button key={s.num} className="group flex flex-col items-start gap-1 text-left cursor-pointer transition-all" onClick={() => setStep(s.num)} type="button">
      <div className={`w-full h-1.5 rounded-full transition-all ${isPassed ? 'bg-primary' : isCurrent ? 'bg-secondary' : 'bg-surface-container-high'}`}></div>
      <span className={`font-label-xs text-label-xs transition-colors ${isPassed ? 'text-on-surface font-semibold group-hover:text-primary' : isCurrent ? 'text-secondary font-bold' : 'text-on-surface-variant font-medium'}`}>{s.label}</span>
    </button>
  );
})}
</div>
</div>
{/* STEP 1 CONTENT CONTAINER: MEMBACA ALASAN ANOMALI */}
<div className="step-panel hidden flex flex-col gap-space-md p-space-lg rounded-xl bg-surface shadow-sm" id="step-panel-1" style={{ display: step === 1 ? 'flex' : 'none' }}>
<div className="flex items-start justify-between">
<div className="flex flex-col">
<span className="font-label-xs text-label-xs text-primary font-bold uppercase">Tahap 1</span>
<h3 className="font-headline-lg text-headline-lg text-on-surface font-semibold">Tinjauan Data Pemicu Rekonsiliasi</h3>
</div>
<span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-surface-container-high text-on-surface font-label-xs text-label-xs">
            Data Sumber Resmi
          </span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
          Berikut adalah rincian data perbandingan otomatis antara pendaftaran muatan pada modul SIMBARA dan manifes pelayaran yang tercatat di Inaportnet KSOP Muara Berau. Nilai variansi melebihi ambang batas keselarasan 5%.
        </p>
{/* Side-by-side Cross Comparison Table */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-space-md mt-2">
{/* SIMBARA Card */}
<div className="p-space-md rounded-xl bg-surface-container-low flex flex-col gap-3">
<div className="flex items-center justify-between pb-2">
<span className="font-label-md text-label-md font-bold text-primary">Sumber A: SIMBARA (ESDM)</span>
<span className="font-label-xs text-label-xs text-on-surface-variant font-mono">ID: SMB-2025-0214-099</span>
</div>
<div className="flex flex-col gap-2 font-tabular-data text-tabular-data">
<div className="flex justify-between py-1">
<span className="text-on-surface-variant font-body-sm text-body-sm">Volume Deklarasi:</span>
<span className="font-bold text-on-surface">100.200 MT</span>
</div>
<div className="flex justify-between py-1">
<span className="text-on-surface-variant font-body-sm text-body-sm">Vessel / Tongkang:</span>
<span className="text-on-surface">MV Nautical Star</span>
</div>
<div className="flex justify-between py-1">
<span className="text-on-surface-variant font-body-sm text-body-sm">Tanggal Rencana:</span>
<span className="text-on-surface">14 Februari 2025</span>
</div>
<div className="flex justify-between py-1">
<span className="text-on-surface-variant font-body-sm text-body-sm">Lokasi Muat:</span>
<span className="text-on-surface">Jetty Mahakam Bara 02</span>
</div>
</div>
</div>
{/* Inaportnet Card */}
<div className="p-space-md rounded-xl bg-surface-container-low flex flex-col gap-3">
<div className="flex items-center justify-between pb-2">
<span className="font-label-md text-label-md font-bold text-secondary">Sumber B: Inaportnet (Kemenhub)</span>
<span className="font-label-xs text-label-xs text-on-surface-variant font-mono">ID: INP-KSOP-MB-4418</span>
</div>
<div className="flex flex-col gap-2 font-tabular-data text-tabular-data">
<div className="flex justify-between py-1">
<span className="text-on-surface-variant font-body-sm text-body-sm">Volume Manifes:</span>
<span className="font-bold text-on-surface">112.650 MT</span>
</div>
<div className="flex justify-between py-1">
<span className="text-on-surface-variant font-body-sm text-body-sm">Vessel / Tongkang:</span>
<span className="text-on-surface">MV Nautical Star</span>
</div>
<div className="flex justify-between py-1">
<span className="text-on-surface-variant font-body-sm text-body-sm">Waktu Keberangkatan:</span>
<span className="text-on-surface">16 Februari 2025, 14:30 WITA</span>
</div>
<div className="flex justify-between py-1">
<span className="text-on-surface-variant font-body-sm text-body-sm">Anchorage Area:</span>
<span className="text-on-surface">STS Muara Berau W-4</span>
</div>
</div>
</div>
</div>
{/* Calculated Deviation Highlight Card */}
<div className="p-space-md rounded-xl bg-surface-container flex items-center justify-between">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-secondary text-[28px]">insights</span>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface font-semibold">Deviasi Terhitung Antara Sumber Data</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Toleransi standar rekonsiliasi pengapalan: ±5,00%</span>
</div>
</div>
<div className="text-right">
<span className="font-tabular-kpi text-tabular-kpi text-status-review">+12.450 MT</span>
<span className="font-label-md text-label-md text-status-review block font-bold">(+12,41%)</span>
</div>
</div>
<div className="flex justify-end pt-2">
<button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-on-primary hover:bg-primary-container font-label-md text-label-md font-semibold transition-all" onClick={() => setStep(2)} type="button">
            Lanjut: Tulis Klarifikasi Teknis
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
</button>
</div>
</div>
{/* STEP 2 CONTENT CONTAINER: MENULIS TANGGAPAN & KLARIFIKASI TEKNIS (ACTIVE STEP) */}
<div className="step-panel flex flex-col gap-space-md p-space-lg rounded-xl bg-surface shadow-sm" id="step-panel-2" style={{ display: step === 2 ? 'flex' : 'none' }}>
<div className="flex items-start justify-between">
<div className="flex flex-col">
<span className="font-label-xs text-label-xs text-secondary font-bold uppercase">Tahap 2</span>
<h3 className="font-headline-lg text-headline-lg text-on-surface font-semibold">Tanggapan &amp; Klarifikasi Teknis Pelaku Usaha</h3>
</div>
<span className="font-label-xs text-label-xs text-on-surface-variant">Wajib diisi oleh KTT / Wakil Sah</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
          Pilihlah klasifikasi alasan operasional yang relevan dan uraikan kronologi teknis secara objektif untuk dievaluasi oleh tim penelaah verifikasi.
        </p>
{/* Structured Category Dropdown */}
<div className="flex flex-col gap-1.5">
<label className="font-label-md text-label-md text-on-surface font-semibold">Kategori Alasan Operasional</label>
<select className="w-full px-3.5 py-2.5 rounded-lg bg-surface-container-low text-on-surface font-body-md text-body-md focus:outline-none focus:ring-2 focus:ring-primary shadow-xs" id="reason-category">
<option value="topping-off">Pengalihan Muatan (Topping-off) Antar-Tongkang Terjadwal</option>
<option value="river-condition">Kondisi Alam / Air Surut Sungai Mahakam (Draft Restriction)</option>
<option value="draft-correction">Koreksi Draft Survey Final vs Skala Belt Awal</option>
<option value="transshipment">Konsolidasi Muatan Dua IUP Mitra dalam Satu Kapal Induk</option>
<option value="data-entry">Koreksi Administratif Kode Bill of Lading (B/L)</option>
<option value="other">Kondisi Operasional Khusus Lainnya</option>
</select>
</div>
{/* Reference Shipment Sub-field */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
<div className="flex flex-col gap-1.5">
<label className="font-label-md text-label-md text-on-surface font-semibold">Nomor Berita Acara Rekonsiliasi Internal</label>
<input className="w-full px-3.5 py-2.5 rounded-lg bg-surface-container-low text-on-surface font-tabular-data text-tabular-data focus:outline-none focus:ring-2 focus:ring-primary shadow-xs" placeholder="Contoh: BA/XXX/2025/..." type="text" value="BA/MBE/LOG-OP/2025/02-088" />
</div>
<div className="flex flex-col gap-1.5">
<label className="font-label-md text-label-md text-on-surface font-semibold">Surveyor Independen Pembanding</label>
<input className="w-full px-3.5 py-2.5 rounded-lg bg-surface-container-low text-on-surface font-body-md text-body-md focus:outline-none focus:ring-2 focus:ring-primary shadow-xs" type="text" value="PT Carsurin Tbk (Cabang Samarinda)" />
</div>
</div>
{/* Technical Explanation Textarea */}
<div className="flex flex-col gap-1.5">
<div className="flex justify-between items-center">
<label className="font-label-md text-label-md text-on-surface font-semibold">Uraian Kronologis &amp; Dasar Penjelasan Teknis</label>
<span className="font-label-xs text-label-xs text-on-surface-variant">Min. 50 kata untuk analisis komprehensif</span>
</div>
<textarea className="w-full p-3.5 rounded-lg bg-surface-container-low text-on-surface font-body-md text-body-md focus:outline-none focus:ring-2 focus:ring-primary shadow-xs leading-relaxed" placeholder="Uraikan faktor teknis lapangan, kapal tongkang asal, kondisi draft air sungai, dan rujukan dokumen pendukung..." rows={4}>Pada tanggal 13-14 Februari 2025 terjadi surut air ekstrem pada alur Sungai Mahakam di KM 42, sehingga tongkang awal BG. Marine Power 3008 hanya dimuati 100.200 MT di Jetty Mahakam Bara 02 demi keamanan pelayaran (draft clearance 4,2 m). Kekurangan muatan sejumlah 12.450 MT dipenuhi melalui proses topping-off legal dari tongkang BG. Tirta Samudera di titik STS Muara Berau sesuai izin resmi KSOP Samarinda No. UM.003/14/KSOP.SMD-2025. Seluruh royalti dan PNBP atas volume gabungan 112.650 MT telah dibayarkan penuh melalui kode e-PNBP SIMBARA No. 82025021500918.</textarea>
</div>
<div className="flex items-center justify-between pt-2">
<button className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-surface-container-high text-on-surface hover:bg-surface-container font-label-md text-label-md transition-all" onClick={() => setStep(1)} type="button">
<span className="material-symbols-outlined text-[18px]">arrow_back</span>
            Kembali ke Data Anomali
          </button>
<button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-on-primary hover:bg-primary-container font-label-md text-label-md font-semibold transition-all" onClick={() => setStep(3)} type="button">
            Lanjut: Unggah Dokumen Bukti
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
</button>
</div>
</div>
{/* STEP 3 CONTENT CONTAINER: UNGGAH BUKTI TANDINGAN & PANDUAN DOKUMEN */}
<div className="step-panel hidden flex flex-col gap-space-md p-space-lg rounded-xl bg-surface shadow-sm" id="step-panel-3" style={{ display: step === 3 ? 'flex' : 'none' }}>
<div className="flex items-start justify-between">
<div className="flex flex-col">
<span className="font-label-xs text-label-xs text-primary font-bold uppercase">Tahap 3</span>
<h3 className="font-headline-lg text-headline-lg text-on-surface font-semibold">Unggah Dokumen Bukti &amp; Sertifikasi Sah</h3>
</div>
<span className="font-label-xs text-label-xs px-2.5 py-1 rounded bg-secondary-container text-on-secondary-container font-semibold">
            Standar ISO 17025
          </span>
</div>
{/* Checklist of Approved Document Types */}
<div className="p-space-md rounded-xl bg-surface-container-low flex flex-col gap-2">
<span className="font-label-md text-label-md text-on-surface font-bold">Daftar Dokumen Bukti yang Memiliki Nilai Pembuktian Sah:</span>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-on-surface-variant font-body-sm text-body-sm mt-1">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>
<span className="">Berita Acara Rekonsiliasi KTT / Jetty Master</span>
</div>
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>
<span className="">Draft Survey Report (Surveyor Terakreditasi)</span>
</div>
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>
<span className="">Surat Persetujuan Berlayar (SPB) KSOP</span>
</div>
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>
<span className="">Bukti Bayar e-PNBP SIMBARA Terakhir</span>
</div>
</div>
</div>
{/* Drag & Drop Upload Zone */}
<div onClick={handleUploadSimulated} className="p-space-lg rounded-xl bg-surface-container-lowest text-center flex flex-col items-center justify-center gap-2 hover:bg-surface-container-low transition-colors cursor-pointer group border-2 border-dashed border-border-warm hover:border-primary">
<div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
<span className="material-symbols-outlined text-[26px]">cloud_upload</span>
</div>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface font-semibold">Klik untuk Memilih atau Menyeret Berkas Bukti (Simulasi Unggah)</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Format PDF maksimal 15 MB per dokumen. Otomatis dibubuhi Hash Kriptografis SHA-256.</span>
</div>
<span className="mt-1 px-3 py-1 rounded bg-primary-container text-on-primary font-label-xs text-label-xs font-semibold inline-flex items-center gap-1">
  <span className="material-symbols-outlined text-[14px]">add</span> Tambah Berkas Tandingan
</span>
</div>
{/* Uploaded Files List */}
<div className="flex flex-col gap-2">
<span className="font-label-md text-label-md text-on-surface font-semibold">
  Berkas yang Telah Dilampirkan ({uploadedDocs.length} Berkas Terdaftar):
</span>
{uploadedDocs.map((doc) => (
  <div key={doc.id} className="p-space-sm rounded-lg bg-surface-container-low flex items-center justify-between border border-border-subtle">
    <div className="flex items-center gap-3 min-w-0">
      <span className="material-symbols-outlined text-status-review text-[24px] shrink-0">picture_as_pdf</span>
      <div className="flex flex-col min-w-0">
        <span className="font-label-md text-label-md text-on-surface font-semibold truncate">{doc.name}</span>
        <span className="font-label-xs text-label-xs text-on-surface-variant font-mono truncate">
          {doc.size} • {doc.hash} • {doc.issuer}
        </span>
      </div>
    </div>
    <div className="flex items-center gap-1 shrink-0">
      <button onClick={() => showToastMsg(`Pratinjau dokumen ${doc.name} tervalidasi SHA-256.`)} className="p-1 rounded text-on-surface-variant hover:text-on-surface cursor-pointer" title="Lihat Berkas" type="button">
        <span className="material-symbols-outlined text-[18px]">visibility</span>
      </button>
      <button onClick={() => handleDeleteDoc(doc.id)} className="p-1 rounded text-on-surface-variant hover:text-status-anomaly cursor-pointer" title="Hapus Berkas" type="button">
        <span className="material-symbols-outlined text-[18px]">delete</span>
      </button>
    </div>
  </div>
))}
</div>
<div className="flex items-center justify-between pt-2">
<button className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-surface-container-high text-on-surface hover:bg-surface-container font-label-md text-label-md transition-all" onClick={() => setStep(2)} type="button">
<span className="material-symbols-outlined text-[18px]">arrow_back</span>
            Kembali ke Form Uraian
          </button>
<button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-on-primary hover:bg-primary-container font-label-md text-label-md font-semibold transition-all" onClick={() => setStep(4)} type="button">
            Lanjut: Tinjau Ringkasan Akhir
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
</button>
</div>
</div>
{/* STEP 4 CONTENT CONTAINER: MENINJAU RINGKASAN PENGAJUAN */}
<div className="step-panel hidden flex flex-col gap-space-md p-space-lg rounded-xl bg-surface shadow-sm" id="step-panel-4" style={{ display: step === 4 ? 'flex' : 'none' }}>
<div className="flex items-start justify-between">
<div className="flex flex-col">
<span className="font-label-xs text-label-xs text-primary font-bold uppercase">Tahap 4</span>
<h3 className="font-headline-lg text-headline-lg text-on-surface font-semibold">Konfirmasi &amp; Pernyataan Kepatuhan</h3>
</div>
<span className="font-label-xs text-label-xs px-2.5 py-1 rounded bg-surface-container-high text-on-surface">Pemeriksaan Pra-Kirim</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
          Mohon pastikan seluruh data dan bukti yang diajukan telah akurat dan dapat dipertanggungjawabkan di hadapan instansi pembina sektor Minerba.
        </p>
{/* Summary Recap Box */}
<div className="p-space-md rounded-xl bg-surface-container-low flex flex-col gap-3 font-body-sm text-body-sm">
<div className="flex justify-between border-b pb-2">
<span className="text-on-surface-variant">ID Kasus Rekonsiliasi:</span>
<span className="font-bold text-on-surface font-mono">NM-2025-0891</span>
</div>
<div className="flex justify-between border-b pb-2">
<span className="text-on-surface-variant">Kategori Klarifikasi:</span>
<span className="font-semibold text-on-surface">Pengalihan Muatan (Topping-off) Antar-Tongkang</span>
</div>
<div className="flex justify-between border-b pb-2">
<span className="text-on-surface-variant">Volume Pembanding Diajukan:</span>
<span className="font-bold text-primary font-tabular-data">112.650 MT (Sesuai Draft Survey Carsurin)</span>
</div>
<div className="flex justify-between pb-1">
<span className="text-on-surface-variant">Total Lampiran Bukti:</span>
<span className="font-medium text-on-surface">2 Dokumen PDF Sah (Tervalidasi SHA-256)</span>
</div>
</div>
{/* Compliance Declaration Checkbox */}
<div className="p-space-md rounded-xl bg-surface-container flex items-start gap-3">
<input defaultChecked className="mt-1 w-4 h-4 rounded text-primary focus:ring-primary cursor-pointer" id="declaration-agree" type="checkbox" />
<label className="font-body-sm text-body-sm text-on-surface leading-relaxed cursor-pointer" htmlFor="declaration-agree">
            Saya yang bertindak atas nama <strong>PT Mahakam Bara Energi</strong> menyatakan dengan sebenarnya bahwa klarifikasi dan bukti tandingan yang diunggah adalah sah, valid secara metrologi, dan bersedia dilakukan verifikasi fisik lapangan oleh inspektur tambang bila diperlukan.
          </label>
</div>
<div className="flex items-center justify-between pt-2">
<button className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-surface-container-high text-on-surface hover:bg-surface-container font-label-md text-label-md transition-all" onClick={() => setStep(3)} type="button">
<span className="material-symbols-outlined text-[18px]">arrow_back</span>
            Ubah Dokumen
          </button>
<button className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-primary text-on-primary hover:bg-primary-container font-label-md text-label-md font-bold transition-all shadow-md" onClick={() => setStep(5)} type="button">
<span className="material-symbols-outlined text-[18px]">send</span>
            Kirim Sanggahan Resmi
          </button>
</div>
</div>
{/* STEP 5 CONTENT CONTAINER: BUKTI TANDA TERIMA RESMI (RECEIPT) */}
<div className="step-panel hidden flex flex-col gap-space-md p-space-lg rounded-xl bg-surface shadow-sm" id="step-panel-5" style={{ display: step === 5 ? 'flex' : 'none' }}>
<div className="flex flex-col items-center text-center p-space-md">
<div className="w-16 h-16 rounded-full bg-status-verified-bg text-status-verified flex items-center justify-center mb-3">
<span className="material-symbols-outlined text-[36px]">verified</span>
</div>
<span className="font-label-xs text-label-xs text-status-verified font-bold uppercase tracking-wider">Pengajuan Berhasil Tercatat</span>
<h3 className="font-headline-lg text-headline-lg text-on-surface font-bold mt-1">Bukti Tanda Terima Hak Jawab Resmi</h3>
<p className="font-body-md text-body-md text-on-surface-variant max-w-lg mt-1">
            Sanggahan Anda telah masuk ke dalam antrean penelaahan terpadu. Verifikator instansi memiliki waktu kerja tindak lanjut sesuai tata kelola pilot.
          </p>
</div>
{/* Formal Receipt Card */}
<div className="p-space-lg rounded-xl bg-surface-container-low flex flex-col gap-3 font-body-sm text-body-sm shadow-inner">
<div className="flex items-center justify-between pb-3 border-b border-surface-container-highest">
<span className="text-on-surface-variant font-label-md text-label-md">Nomor Registrasi Sanggahan:</span>
<span className="font-tabular-kpi text-tabular-kpi text-primary">SGH-2025-0891-MBE</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-3 py-1">
<div>
<span className="text-on-surface-variant font-label-xs text-label-xs block">Waktu Penerimaan Sistem:</span>
<span className="font-tabular-data text-tabular-data font-semibold text-on-surface">24 Feb 2025 • 10:48:12 WITA</span>
</div>
<div>
<span className="text-on-surface-variant font-label-xs text-label-xs block">Status Penelusuran Saat Ini:</span>
<span className="inline-flex items-center gap-1 font-label-xs text-label-xs font-semibold text-secondary">
<span className="w-2 h-2 rounded-full bg-secondary"></span>
                Tahap 1: Verifikasi Kelengkapan Berkas
              </span>
</div>
<div>
<span className="text-on-surface-variant font-label-xs text-label-xs block">Pengunggah Berwenang:</span>
<span className="text-on-surface font-medium">Budi Santoso, S.T. (KTT PT Mahakam Bara Energi)</span>
</div>
<div>
<span className="text-on-surface-variant font-label-xs text-label-xs block">Stempel Kriptografis:</span>
<span className="font-mono text-[11px] text-on-surface-variant">SHA-256: d84e2a...981c</span>
</div>
</div>
</div>
{/* Receipt Action Options */}
<div className="flex flex-wrap items-center justify-between gap-3 pt-2">
<button className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-surface-container text-on-surface hover:bg-surface-container-high font-label-md text-label-md transition-all" onClick={() => window.print ? window.print() : null} type="button">
<span className="material-symbols-outlined text-[18px]">print</span>
            Cetak Tanda Terima PDF
          </button>
<div className="flex items-center gap-2">
<button className="px-4 py-2 rounded-lg bg-surface-container-high text-on-surface font-label-md text-label-md hover:bg-surface-container" onClick={() => setStep(2)} type="button">
              Perbarui Keterangan
            </button>
<button className="px-5 py-2 rounded-lg bg-primary text-on-primary font-label-md text-label-md font-semibold hover:bg-primary-container" onClick={() => setStep(1)} type="button">
              Kembali ke Ringkasan
            </button>
</div>
</div>
</div>
</div>
</div>
{/* SECTION: PELACAKAN STATUS & PERMINTAAN KLARIFIKASI LANJUTAN (CLARIFICATION LOOP) */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg mt-space-sm">
{/* Left side: Milestone Audit Timeline (7 Columns) */}
<div className="lg:col-span-7 flex flex-col gap-space-md p-space-lg rounded-xl bg-surface shadow-sm">
<div className="flex items-center justify-between">
<div>
<span className="font-label-xs text-label-xs text-primary font-bold uppercase">Transparansi Penanganan</span>
<h2 className="font-headline-sm text-headline-sm text-on-surface font-bold">Rantai Audit &amp; Pelacakan Status Sanggahan</h2>
</div>
<span className="font-label-xs text-label-xs px-2.5 py-1 rounded-full bg-status-verified-bg text-status-verified font-semibold">
          Protokol ISO 37001
        </span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">
        Setiap telaah verifikator direkam secara transparan untuk menjamin independensi dan akuntabilitas penanganan hak jawab badan usaha.
      </p>
{/* Timeline Items */}
<div className="flex flex-col gap-4 mt-2 pl-2">
{/* Timeline 1: Flag Generated */}
<div className="flex items-start gap-3 relative">
<div className="w-8 h-8 rounded-full bg-surface-container-high text-on-surface-variant flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-[18px]">flag</span>
</div>
<div className="flex flex-col">
<div className="flex items-center gap-2">
<span className="font-label-md text-label-md text-on-surface font-bold">Penerbitan Flag Rekonsiliasi Sistem</span>
<span className="font-label-xs text-label-xs text-on-surface-variant">14 Feb 2025, 18:22 WITA</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
              Sistem SIMBARA mendeteksi variansi tonase +12,41% antara deklarasi muat dan manifes keberangkatan kapal KSOP.
            </span>
</div>
</div>
{/* Timeline 2: Objection Filed */}
<div className="flex items-start gap-3 relative">
<div className="w-8 h-8 rounded-full bg-secondary text-surface flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-[18px]">assignment_turned_in</span>
</div>
<div className="flex flex-col">
<div className="flex items-center gap-2">
<span className="font-label-md text-label-md text-on-surface font-bold">Penyampaian Sanggahan &amp; Dokumen KTT</span>
<span className="font-label-xs text-label-xs text-on-surface-variant">16 Feb 2025, 09:15 WITA</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
              PT Mahakam Bara Energi mengunggah Berita Acara Topping-off dan Laporan Draft Survey Carsurin.
            </span>
</div>
</div>
{/* Timeline 3: Desk Review Complete */}
<div className="flex items-start gap-3 relative">
<div className="w-8 h-8 rounded-full bg-primary text-surface flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-[18px]">engineering</span>
</div>
<div className="flex flex-col">
<div className="flex items-center gap-2">
<span className="font-label-md text-label-md text-on-surface font-bold">Telaah Verifikator Teknis Minerba</span>
<span className="font-label-xs text-label-xs text-on-surface-variant">19 Feb 2025, 14:02 WITA</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
              Analis memverifikasi keabsahan laporan survey draft tongkang. Dokumen dinyatakan relevan dan masuk tahap evaluasi pelabuhan lanjutan.
            </span>
</div>
</div>
{/* Timeline 4: Current Stage */}
<div className="flex items-start gap-3 relative">
<div className="w-8 h-8 rounded-full bg-secondary-fixed text-primary flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-[18px] animate-pulse">hourglass_bottom</span>
</div>
<div className="flex flex-col">
<div className="flex items-center gap-2">
<span className="font-label-md text-label-md text-primary font-bold">Sinkronisasi Manifes KSOP &amp; PNBP Final</span>
<span className="font-label-xs text-label-xs px-2 py-0.2 rounded bg-secondary-container text-on-secondary-container font-semibold">Sedang Berjalan</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
              Menunggu validasi stempel elektronik pembayaran royalti PNBP tambahan sebelum rekomendasi penutupan flag disahkan.
            </span>
</div>
</div>
</div>
</div>
{/* Right side: Clarification Loop Response Panel (5 Columns) */}
<div className="lg:col-span-5 flex flex-col gap-space-md p-space-lg rounded-xl bg-surface-container-low shadow-sm">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-status-review text-[22px]">quickreply</span>
<span className="font-headline-sm text-headline-sm text-on-surface font-bold">Permintaan Klarifikasi Auditor</span>
</div>
<span className="font-label-xs text-label-xs px-2 py-0.5 rounded bg-status-review-bg text-status-review font-semibold">Kasus Terkait NM-2025-0744</span>
</div>
<div className="p-space-md rounded-xl bg-surface flex flex-col gap-2 shadow-xs">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-primary-container text-surface flex items-center justify-center font-label-xs text-label-xs font-bold">BS</div>
<span className="font-label-md text-label-md text-on-surface font-semibold">Bambang S., S.T.</span>
</div>
<span className="font-label-xs text-label-xs text-on-surface-variant">Inspektur Tambang Ditjen Minerba</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant italic mt-1 leading-relaxed bg-surface-container-low p-2.5 rounded-lg">
          “Mohon lampirkan log sounding tongkang sekunder BG. Samudera 12 pada saat proses penyandaran di STS Muara Berau untuk melengkapi audit selisih kadar air (free moisture).”
        </p>
</div>
{/* Quick Reply Form */}
<div className="flex flex-col gap-2 mt-1">
<label className="font-label-md text-label-md text-on-surface font-semibold">Tanggapan Klarifikasi Cepat</label>
<textarea className="w-full p-2.5 rounded-lg bg-surface text-on-surface font-body-sm text-body-sm focus:outline-none focus:ring-2 focus:ring-primary shadow-xs" placeholder="Tuliskan respon atau konfirmasi ketersediaan dokumen tambahan..." rows={4}></textarea>
<div className="flex items-center justify-between mt-1">
<button className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface text-on-surface-variant hover:text-on-surface font-label-xs text-label-xs shadow-xs" type="button">
<span className="material-symbols-outlined text-[16px]">attach_file</span>
            Lampirkan Log Tambahan
          </button>
<button className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-primary-container text-surface hover:bg-primary font-label-xs text-label-xs font-semibold" type="button">
<span className="material-symbols-outlined text-[16px]">send</span>
            Kirim Respon
          </button>
</div>
</div>
{/* Legal reassurance micro-footer */}
<div className="pt-2 text-center text-on-surface-variant font-label-xs text-label-xs">
        Saluran komunikasi resmi diawasi oleh Inspektorat Jenderal Kementerian ESDM.
      </div>
</div>
</div>
{/* TOAST NOTIFICATION */}
{localToast && (
  <div className="fixed bottom-6 right-6 z-50 bg-primary text-on-primary px-5 py-3 rounded-xl shadow-2xl flex items-center gap-3 border border-border-warm animate-in fade-in slide-in-from-bottom-2 duration-200">
    <span className="material-symbols-outlined text-status-verified text-[22px]">verified</span>
    <span className="font-body-sm font-semibold">{localToast}</span>
    <button onClick={() => setLocalToast(null)} className="ml-2 text-on-primary/70 hover:text-on-primary cursor-pointer" type="button">
      <span className="material-symbols-outlined text-[16px]">close</span>
    </button>
  </div>
)}

{/* MODAL 1: 5 JAMINAN PROSEDURAL (5 PROCEDURAL PROTECTIONS) */}
{showProceduralModal && (
  <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-inverse-surface/50 backdrop-blur-xs animate-in fade-in duration-150">
    <div className="w-full max-w-3xl bg-surface rounded-2xl p-space-lg shadow-2xl flex flex-col gap-space-md max-h-[90vh] overflow-y-auto border border-border-warm">
      <div className="flex items-center justify-between pb-3 border-b border-border-subtle">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-primary-container text-on-primary flex items-center justify-center">
            <span className="material-symbols-outlined text-[24px]">verified_user</span>
          </div>
          <div>
            <h3 className="font-headline-lg text-headline-lg text-on-surface font-bold">
              5 Jaminan Perlindungan Prosedural Pelaku Usaha
            </h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Prinsip kepatutan hukum tata kelola publik dalam implementasi NusaMine.
            </p>
          </div>
        </div>
        <button onClick={() => setShowProceduralModal(false)} className="p-1.5 rounded-lg text-on-surface-variant hover:text-on-surface cursor-pointer hover:bg-surface-container" type="button">
          <span className="material-symbols-outlined text-[20px]">close</span>
        </button>
      </div>

      <div className="flex flex-col gap-space-sm font-body-sm text-body-sm text-on-surface">
        <div className="p-3.5 rounded-xl bg-surface-container-low border border-border-subtle flex items-start gap-3">
          <span className="w-7 h-7 rounded-full bg-primary-container text-on-primary font-bold flex items-center justify-center text-xs shrink-0">1</span>
          <div>
            <h4 className="font-headline-sm text-headline-sm font-bold text-on-surface">Hak Menerima Penjelasan Lengkap (Clear Explanation of Flags)</h4>
            <p className="text-on-surface-variant mt-0.5 leading-relaxed">
              Pelaku usaha berhak memperoleh rincian matematis mengapa suatu pengapalan ditandai anomali, termasuk perbandingan data sumber primer, formula deviasi, dan nilai ambang batas toleransi (±3,0%).
            </p>
          </div>
        </div>

        <div className="p-3.5 rounded-xl bg-surface-container-low border border-border-subtle flex items-start gap-3">
          <span className="w-7 h-7 rounded-full bg-primary-container text-on-primary font-bold flex items-center justify-center text-xs shrink-0">2</span>
          <div>
            <h4 className="font-headline-sm text-headline-sm font-bold text-on-surface">Jangka Waktu Hak Jawab yang Wajar (14 Hari Kerja)</h4>
            <p className="text-on-surface-variant mt-0.5 leading-relaxed">
              Disediakan jendela waktu 14 hari kerja untuk mengumpulkan bukti tandingan (draft survey, log pasut, berita acara) tanpa pengenaan sanksi penangguhan operasional otomatis atau pemblokiran sistem sepihak.
            </p>
          </div>
        </div>

        <div className="p-3.5 rounded-xl bg-surface-container-low border border-border-subtle flex items-start gap-3">
          <span className="w-7 h-7 rounded-full bg-primary-container text-on-primary font-bold flex items-center justify-center text-xs shrink-0">3</span>
          <div>
            <h4 className="font-headline-sm text-headline-sm font-bold text-on-surface">Opsi Peninjauan Pihak Ketiga Independen (Neutral Third-Party Review)</h4>
            <p className="text-on-surface-variant mt-0.5 leading-relaxed">
              Pelaku usaha berhak mengajukan penelaah ahli independen (Balai Besar Pengujian Mineral dan Batubara / lab akreditasi KAN ISO 17025) guna memverifikasi sengketa kalibrasi atau kondisi kahar perairan.
            </p>
          </div>
        </div>

        <div className="p-3.5 rounded-xl bg-surface-container-low border border-border-subtle flex items-start gap-3">
          <span className="w-7 h-7 rounded-full bg-primary-container text-on-primary font-bold flex items-center justify-center text-xs shrink-0">4</span>
          <div>
            <h4 className="font-headline-sm text-headline-sm font-bold text-on-surface">Pemisahan Tegas Dugaan Awal vs Putusan Hukum Final (Separation of Suspicion and Determination)</h4>
            <p className="text-on-surface-variant mt-0.5 leading-relaxed">
              Skor risiko AI adalah pemicu telaah faktual, <strong>bukan vonis pelanggaran atau bukti korupsi</strong>. Status pelanggaran hanya sah jika telah diterbitkan Surat Keputusan resmi pejabat Ditjen Minerba.
            </p>
          </div>
        </div>

        <div className="p-3.5 rounded-xl bg-surface-container-low border border-border-subtle flex items-start gap-3">
          <span className="w-7 h-7 rounded-full bg-primary-container text-on-primary font-bold flex items-center justify-center text-xs shrink-0">5</span>
          <div>
            <h4 className="font-headline-sm text-headline-sm font-bold text-on-surface">Hak Banding Administratif Terdokumentasi (Documented Right to Appeal)</h4>
            <p className="text-on-surface-variant mt-0.5 leading-relaxed">
              Seluruh riwayat telaah, argumen KTT, dan putusan auditor dicatat secara permanen pada rantai jejak audit kriptografis tak dapat diubah (tamper-proof) yang dapat dijadikan alat bukti sah dalam forum banding lanjutan.
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-end pt-2 border-t border-border-subtle">
        <button onClick={() => setShowProceduralModal(false)} className="px-5 py-2 rounded-lg bg-primary-container text-on-primary font-label-md text-label-md font-semibold cursor-pointer" type="button">
          Tutup Panduan Jaminan
        </button>
      </div>
    </div>
  </div>
)}

{/* MODAL 2: 9 TAHAPAN ALUR KERJA SANGGAHAN (9-STAGE WORKFLOW) */}
{showWorkflowModal && (
  <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-inverse-surface/50 backdrop-blur-xs animate-in fade-in duration-150">
    <div className="w-full max-w-3xl bg-surface rounded-2xl p-space-lg shadow-2xl flex flex-col gap-space-md max-h-[90vh] overflow-y-auto border border-border-warm">
      <div className="flex items-center justify-between pb-3 border-b border-border-subtle">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-secondary-container text-on-secondary-container flex items-center justify-center">
            <span className="material-symbols-outlined text-[24px]">alt_route</span>
          </div>
          <div>
            <h3 className="font-headline-lg text-headline-lg text-on-surface font-bold">
              9 Tahapan Alur Kerja Sanggahan &amp; Hak Jawab
            </h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Prosedur berjenjang penyelesaian anomali tata kelola pertambangan NusaMine.
            </p>
          </div>
        </div>
        <button onClick={() => setShowWorkflowModal(false)} className="p-1.5 rounded-lg text-on-surface-variant hover:text-on-surface cursor-pointer hover:bg-surface-container" type="button">
          <span className="material-symbols-outlined text-[20px]">close</span>
        </button>
      </div>

      <div className="flex flex-col gap-2 font-body-sm text-body-sm">
        {[
          { num: 1, title: '1. Deteksi Anomali', desc: 'SIMBARA Engine mendeteksi selisih volume >3% atau inkonsistensi stempel waktu lintas sumber.', status: 'Selesai Sistem' },
          { num: 2, title: '2. Penilaian Risiko Awal', desc: 'Pembobotan multi-faktor menetapkan band risiko (Rendah, Sedang, Tinggi) sebagai pemicu triase.', status: 'Selesai Sistem' },
          { num: 3, title: '3. Tinjauan Petugas Verifikator', desc: 'Auditor Ditjen Minerba memeriksa kelayakan materiil anomali sebelum notifikasi diterbitkan.', status: 'Selesai Verifikator' },
          { num: 4, title: '4. Notifikasi Resmi Perusahaan', desc: 'Pemberitahuan resmi terkirim ke portal kepatuhan pelaku usaha dengan batas waktu hak jawab 14 hari.', status: 'Terkirim 15 Feb' },
          { num: 5, title: '5. Akses Alasan & Data Pembanding', desc: 'Perusahaan membuka rincian selisih komparatif SIMBARA vs Inaportnet dan parameter pemicu.', status: 'Dibuka Perusahaan' },
          { num: 6, title: '6. Pengajuan Klarifikasi & Bukti Tandingan', desc: 'KTT menyusun kronologi teknis dan mengunggah dokumen surveyor independen (Carsurin, dsb).', status: 'Tahap Aktif Saat Ini', active: true },
          { num: 7, title: '7. Pemeriksaan Pihak Ketiga Independen', desc: 'Peninjau independen terakreditasi KAN memverifikasi kondisi air surut dan draft survey.', status: 'Menunggu Pengajuan' },
          { num: 8, title: '8. Keputusan Pejabat Berwenang', desc: 'Pejabat resmi Ditjen Minerba menetapkan putusan: Diterima Penuh, Diterima Sebagian, atau Ditolak.', status: 'Menunggu Putusan' },
          { num: 9, title: '9. Pembaruan Status & Audit Trail Permanen', desc: 'Status anomali direkonsiliasi, pembebasan flag dilakukan, dan log dicatat di ledger SHA-256.', status: 'Tahap Akhir' },
        ].map((stg) => (
          <div key={stg.num} className={`p-3 rounded-lg flex items-start justify-between gap-3 border ${stg.active ? 'bg-primary-container/10 border-primary ring-1 ring-primary' : 'bg-surface-container-low border-border-subtle'}`}>
            <div className="flex items-start gap-3">
              <span className={`w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs shrink-0 ${stg.active ? 'bg-primary text-on-primary' : 'bg-surface text-on-surface-variant'}`}>{stg.num}</span>
              <div className="flex flex-col">
                <span className={`font-headline-sm text-headline-sm font-semibold ${stg.active ? 'text-primary' : 'text-on-surface'}`}>{stg.title}</span>
                <span className="text-on-surface-variant text-body-sm leading-tight mt-0.5">{stg.desc}</span>
              </div>
            </div>
            <span className={`px-2 py-0.5 rounded text-[11px] font-label-xs font-semibold shrink-0 ${stg.active ? 'bg-primary-container text-on-primary' : 'bg-surface text-on-surface-variant'}`}>{stg.status}</span>
          </div>
        ))}
      </div>

      <div className="flex justify-end pt-2 border-t border-border-subtle">
        <button onClick={() => setShowWorkflowModal(false)} className="px-5 py-2 rounded-lg bg-primary-container text-on-primary font-label-md text-label-md font-semibold cursor-pointer" type="button">
          Tutup Alur Kerja
        </button>
      </div>
    </div>
  </div>
)}

{/* MODAL 3: DISCREPANCY & ASSESSMENT DETAILS */}
{showDiscrepancyModal && (
  <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-inverse-surface/50 backdrop-blur-xs animate-in fade-in duration-150">
    <div className="w-full max-w-2xl bg-surface rounded-2xl p-space-lg shadow-2xl flex flex-col gap-space-md border border-border-warm">
      <div className="flex items-center justify-between pb-3 border-b border-border-subtle">
        <h3 className="font-headline-lg text-headline-lg text-on-surface font-bold">
          Rincian Deviasi &amp; Penjelasan Model (Discrepancy Details)
        </h3>
        <button onClick={() => setShowDiscrepancyModal(false)} className="p-1.5 rounded-lg text-on-surface-variant hover:text-on-surface cursor-pointer" type="button">
          <span className="material-symbols-outlined text-[20px]">close</span>
        </button>
      </div>
      <div className="flex flex-col gap-3 font-body-sm text-body-sm">
        <div className="p-3 rounded-lg bg-surface-container-low flex flex-col gap-2">
          <div className="flex justify-between font-label-md font-semibold">
            <span>Komparasi Sumber Primer</span>
            <span className="text-status-anomaly">Deviasi +12,41% (+12.450 MT)</span>
          </div>
          <div className="grid grid-cols-2 gap-2 text-on-surface">
            <div className="p-2 bg-surface rounded">SIMBARA / RKAB: <strong>100.200 MT</strong></div>
            <div className="p-2 bg-surface rounded">Inaportnet KSOP: <strong>112.650 MT</strong></div>
          </div>
        </div>
        <p className="text-on-surface-variant leading-relaxed">
          <strong>Rationale Model Penilaian:</strong> Algoritma menandai kasus karena deviasi muat melampaui batas toleransi metrologis (±3,0%). Diperlukan bukti tandingan dokumen pengalihan muatan (topping-off) di kolam labuh lepas pantai STS Muara Berau untuk membuktikan keabsahan penambahan volume.
        </p>
      </div>
      <div className="flex justify-end pt-2 border-t border-border-subtle">
        <button onClick={() => setShowDiscrepancyModal(false)} className="px-5 py-2 rounded-lg bg-primary-container text-on-primary font-label-md font-semibold cursor-pointer" type="button">
          Tutup Rincian
        </button>
      </div>
    </div>
  </div>
)}

{/* MODAL 4: INDEPENDENT REVIEW STATUS */}
{showIndependentModal && (
  <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-inverse-surface/50 backdrop-blur-xs animate-in fade-in duration-150">
    <div className="w-full max-w-2xl bg-surface rounded-2xl p-space-lg shadow-2xl flex flex-col gap-space-md border border-border-warm">
      <div className="flex items-center justify-between pb-3 border-b border-border-subtle">
        <h3 className="font-headline-lg text-headline-lg text-on-surface font-bold">
          Status Peninjauan Pihak Ketiga Independen
        </h3>
        <button onClick={() => setShowIndependentModal(false)} className="p-1.5 rounded-lg text-on-surface-variant hover:text-on-surface cursor-pointer" type="button">
          <span className="material-symbols-outlined text-[20px]">close</span>
        </button>
      </div>
      <div className="flex flex-col gap-3 font-body-sm text-body-sm">
        <div className="p-3.5 rounded-lg bg-status-verified-bg text-status-verified flex items-center gap-2 font-semibold">
          <span className="material-symbols-outlined text-[20px]">verified</span>
          <span>Peninjau Independen Ditugaskan: Balai Besar Pengujian Mineral &amp; Batubara (BBP-MBB) &amp; PT Carsurin</span>
        </div>
        <div className="flex flex-col gap-2 text-on-surface-variant">
          <div>• <strong>Witnessed Sampling:</strong> Penarikan sampel terbukti disaksikan bersama perwakilan KSOP dan KTT.</div>
          <div>• <strong>Integritas Segel Lab:</strong> Kode segel kontainer sampel #BBP-MBB-9812 utuh dan terverifikasi.</div>
          <div>• <strong>Rotasi Lembaga:</strong> Surveyor memenuhi prinsip rotasi berkala untuk mencegah benturan kepentingan.</div>
        </div>
      </div>
      <div className="flex justify-end pt-2 border-t border-border-subtle">
        <button onClick={() => setShowIndependentModal(false)} className="px-5 py-2 rounded-lg bg-primary-container text-on-primary font-label-md font-semibold cursor-pointer" type="button">
          Tutup Status
        </button>
      </div>
    </div>
  </div>
)}

{/* MODAL 5: FINAL ADMINISTRATIVE DECISION */}
{showFinalDecisionModal && (
  <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-inverse-surface/50 backdrop-blur-xs animate-in fade-in duration-150">
    <div className="w-full max-w-2xl bg-surface rounded-2xl p-space-lg shadow-2xl flex flex-col gap-space-md border border-border-warm">
      <div className="flex items-center justify-between pb-3 border-b border-border-subtle">
        <h3 className="font-headline-lg text-headline-lg text-on-surface font-bold">
          Keputusan Administratif Pejabat Berwenang
        </h3>
        <button onClick={() => setShowFinalDecisionModal(false)} className="p-1.5 rounded-lg text-on-surface-variant hover:text-on-surface cursor-pointer" type="button">
          <span className="material-symbols-outlined text-[20px]">close</span>
        </button>
      </div>
      <div className="flex flex-col gap-3 font-body-sm text-body-sm">
        <div className="p-3.5 rounded-lg bg-surface-container-low border border-status-verified flex flex-col gap-1">
          <span className="font-label-xs text-status-verified font-bold uppercase">Keputusan Akhir Resmi</span>
          <span className="font-headline-sm text-headline-sm text-on-surface font-bold">Sanggahan Diterima Penuh (Rekomendasi Pembebasan Flag)</span>
          <span className="text-on-surface-variant text-label-xs font-mono">Nomor SK: ESDM/MINERBA/SK-SGH/2025/0891</span>
        </div>
        <p className="text-on-surface-variant leading-relaxed">
          Kewajiban pembayaran e-PNBP royalti atas volume total 112.650 MT telah diselesaikan secara sah. Sistem SIMBARA telah merekonsiliasi kuota pengapalan tanpa catatan pelanggaran hukum.
        </p>
      </div>
      <div className="flex justify-end pt-2 border-t border-border-subtle">
        <button onClick={() => setShowFinalDecisionModal(false)} className="px-5 py-2 rounded-lg bg-primary-container text-on-primary font-label-md font-semibold cursor-pointer" type="button">
          Tutup Keputusan
        </button>
      </div>
    </div>
  </div>
)}
</div>
{/* INTERACTIVE TAB & STEP CONTROLLER SCRIPT */}

    </div>
  );
};

export default PortalSanggahanPage;
