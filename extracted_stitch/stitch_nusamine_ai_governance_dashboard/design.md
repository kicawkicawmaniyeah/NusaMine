NusaMine Dashboard PRD & Design Brief
Google Stitch-ready specification
> Product: NusaMine  > Product type: AI-assisted mining governance and evidence review dashboard  > Primary language: Bahasa Indonesia  > Target platform: Desktop-first web application, responsive tablet  > Status: Concept / pilot design  > Source basis: Essay “NusaMine: AI-Powered Governance Layer untuk Memperkuat SIMBARA…”

1. Product overview
NusaMine is a governance layer that operates on top of SIMBARA. It does not replace SIMBARA or make final enforcement decisions. It helps authorized users assess the integrity of submitted evidence, detect inconsistencies across connected systems, prioritize human review, and provide companies with a fair objection process.
The dashboard must communicate three core principles:
1. Evidence integrity: every evidence item is traceable to its source, timestamp, submitter, digital signature, and change history.
2. Anomaly detection: AI Risk Engine and Cross Data Validation flag inconsistencies for review. A risk score is a review trigger, not proof of wrongdoing.
3. Contestability: companies can see the reasons for their own flags, submit counter-evidence, and follow the review status.
NusaWatch monitors the reliability and security of the NusaMine platform itself, not mining companies.
2. Goals and non-goals
Goals
● Give authorized government reviewers a unified operational view of evidence, anomalies, inspections, and objections.
● Make evidence provenance and audit history easy to inspect.
● Explain why a record was flagged using company-specific data and source discrepancies.
● Support human-led review and documented decisions.
● Show public, aggregated transparency indicators without exposing confidential company data.
● Support a controlled pilot beginning with coal in one or two data-ready regions.
Non-goals
● Replacing SIMBARA or source systems.
● Automatically declaring fraud, guilt, or regulatory violations.
● Automatically suspending permits, blocking exports, or imposing sanctions based only on a model score.
● Publishing company-level risk labels or confidential commercial data.
● Deploying predictive analytics, early-warning forecasting, or audit recommendations in the initial pilot.
3. Users and access roles
Design role-aware navigation and data visibility.
A. Authorized government reviewer
Can view transaction-level evidence, cross-system discrepancies, risk flags, review queues, inspection status, and authorized audit history. Access is scoped to the user’s legal authority and every access is logged.
B. Company user
Can view only the company’s own records, risk explanations, disputed source comparisons, review status, deadlines, and objection submissions. Exact model weights and thresholds are not shown.
C. Public viewer
Can view aggregate indicators by commodity and region, reporting compliance, inspection counts, review durations, and legally publishable final enforcement outcomes. Never show company-level risk labels, transaction details, production volumes, transaction values, or tax details. Suppress aggregate cells with too few companies to prevent re-identification.
D. Platform administrator / NusaWatch operator
Can monitor platform availability, data pipeline health, access events, integrity controls, and security alerts. Do not grant automatic access to confidential case details unless separately authorized.
4. Information architecture
Primary navigation
● Ringkasan
● Pemeriksaan Risiko
● Validasi Data
● Bukti & Audit Trail
● Sanggahan
● Inspeksi Lapangan
● Transparansi Publik
● NusaWatch
● Pengaturan (role-gated)
Show current role, organization, notification center, and profile in the sidebar footer or top bar.
5. Core screens
Screen 1: Ringkasan dashboard (government reviewer)
Purpose: At-a-glance status of the pilot and a clear path to the highest-priority human review work.
Layout
● Left sidebar: NusaMine logo, navigation, pilot label “Pilot Batu Bara”.
● Top bar: breadcrumb, date range filter, commodity filter, region filter, notification icon, user profile.
● Main content:
● Page title: “Ringkasan Tata Kelola”
● Subtitle: “Pantau integritas bukti, anomali, dan proses pemeriksaan.”
● KPI cards:
● Bukti diterima
● Anomali menunggu tinjauan
● Pemeriksaan berlangsung
● Sanggahan perlu ditindaklanjuti
● Trend chart: anomaly flags and resolved reviews over time.
● Regional map or region ranking: review volume by region. Avoid implying guilt.
● “Prioritas Tinjauan” table with case ID, commodity, region, flag reason, severity, age, and status.
● “Aktivitas Terbaru” timeline: evidence submitted, validation completed, reviewer assigned, objection received.
● Use realistic sample data clearly marked “Data demonstrasi”.
Interactions
● KPI card click filters the corresponding queue.
● Selecting a region filters charts and tables.
● Selecting a row opens the case detail.
● Date range and commodity filters apply consistently across the page.
Screen 2: Pemeriksaan Risiko (risk review queue)
Purpose: Help reviewers triage flags without treating scores as findings.
Components
● Search by case ID, company, shipment, or evidence reference (government role only).
● Filters: commodity, region, risk band, flag type, review status, date range.
● Table columns:
● ID kasus
● Perusahaan (authorized roles only)
● Komoditas
● Wilayah
● Jenis anomali
● Skor risiko / band
● Selisih terdeteksi
● Tanggal ditandai
● Status tinjauan
● Assigned reviewer
● Risk bands: Rendah, Sedang, Tinggi. Use restrained colors and text labels, not color alone.
● Persistent notice: “Skor risiko adalah pemicu pemeriksaan, bukan bukti pelanggaran.”
Case detail drawer/page
● Case header with ID, status, assigned reviewer, and risk band.
● “Mengapa ditandai?” section with:
● affected company-owned fields
● source A vs source B
● difference amount / percentage
● timestamp and evidence references
● model explanation in plain language
● Evidence comparison panel with side-by-side values.
● Evidence provenance and change history.
● Reviewer actions: Assign, Request clarification, Start inspection, Resolve flag, Escalate for independent review.
● All decisions require a reason and are recorded in the audit trail.
● Do not offer direct sanction or permit suspension actions from the risk score.
Screen 3: Validasi Data (Cross Data Validation)
Purpose: Inspect discrepancies across connected source systems.
Data sources represented
● SIMBARA and connected systems
● MODI, MOMS, MVP, e-PNBP (ESDM)
● CEISA (Customs)
● Inaportnet (Transportation)
● SIMODIS (Bank Indonesia), where authorized
Components
● Validation overview cards: records checked, matched, discrepant, pending.
● Filterable discrepancy table with source pair, reference ID, field, value A, value B, variance, and validation status.
● Detail view with source records, timestamps, provenance, and linked evidence.
● Clear empty, loading, error, and partial-data states.
● Distinguish “data unavailable” from “data mismatch”.
Screen 4: Bukti & Audit Trail (Evidence Integrity Layer)
Purpose: Trace every claim to its source and show whether evidence was changed.
Evidence list fields
● Evidence ID
● Evidence type (lab result, surveyor report, weighbridge record, customs document, vessel schedule, etc.)
● Source / issuing organization
● Collection and submission timestamps
● Submitter / measured-by identity
● Digital signature status
● Linked case / shipment
● Integrity status
Evidence detail
● Metadata: source, timestamp, identity, signature, file hash if available, linked records.
● Immutable-looking chronological event history (visual representation only; do not claim a blockchain).
● Version comparison and change log.
● Warnings for impossible chronology, missing metadata, or post-submission edits.
● Explain limitation: digital provenance does not prove physical measurement accuracy.
Screen 5: Sanggahan (company objection portal)
Purpose: Give companies a fair, understandable way to challenge a flag.
Company dashboard
● Cases for the signed-in company only.
● Statuses: Perlu ditanggapi, Diajukan, Dalam peninjauan, Perlu informasi tambahan, Selesai.
● Deadline display: 14 business days proposed for submission; clearly mark as pilot parameter subject to validation.
● Show the reason for the flag, disputed values, comparison source, and required evidence.
Objection flow
1. Open case and read explanation.
2. Submit written response.
3. Attach counter-evidence and add evidence descriptions.
4. Review submission summary.
5. Submit and receive receipt / reference number.
6. Track review status and reviewer requests.
Reviewer objection workspace
● Side-by-side original evidence and counter-evidence.
● Independent review assignment.
● Decision field, rationale, and date.
● Proposed review target: 30 business days; display as pilot target, not statutory guarantee.
● If unresolved past target, show “Melewati target tinjauan”; do not imply this alone determines legal outcome.
Screen 6: Inspeksi Lapangan
Purpose: Coordinate risk-prioritized inspections while retaining a nonzero random audit chance.
Components
● Inspection queue with region, case reference, risk band, reason, assigned team, planned date, and status.
● Map/list toggle.
● Inspection detail: checklist, sampling details, sealed comparison sample ID, witnesses, lab assignment, result, and uploaded field evidence.
● Show random selection and risk-prioritized selection as distinct routes.
● Do not show a “zero inspection risk” state for low-risk companies.
Screen 7: Transparansi Publik
Purpose: Present safe, aggregate public indicators.
Components
● Public overview with commodity and region filters.
● Aggregated metrics: reporting compliance, number of inspections, median review time, and legally publishable final outcomes.
● Charts and tables only at sufficiently aggregated levels.
● Suppress cells below minimum company-count threshold.
● Include a visible note: “Data agregat. Indikator risiko perusahaan individual tidak dipublikasikan.”
● No company-level labels, transaction values, production volumes, tax details, or non-final allegations.
Screen 8: NusaWatch
Purpose: Monitor NusaMine platform reliability and integrity.
Components
● Service status cards: data ingestion, validation service, evidence storage, objection portal.
● Last successful sync per connected system.
● Failed jobs and retry status.
● Access and administrator activity log.
● Security/integrity alerts.
● Platform incident timeline.
● Do not display mining-company risk rankings here.
6. Key user flows
Government reviewer: flag to resolution
Dashboard → Risk queue → Case detail → inspect source discrepancy → request clarification or inspection → review evidence → record human decision → close or escalate → audit log updated.
Company: flag to objection
Company dashboard → case explanation → submit counter-evidence within proposed 14 business days → receive reference number → track review → view reasoned outcome.
Public: aggregate transparency
Public dashboard → select commodity/region/time period → view safe aggregate indicators → open methodology and data limitations.
7. Data and content rules
● Use Indonesian UI labels and plain, non-accusatory language.
● Refer to a record as “anomali”, “indikasi”, or “perlu tinjauan”, never “fraud” unless a final, legally publishable outcome supports that wording.
● Display source system and last synchronization time wherever data freshness matters.
● Distinguish verified, pending, unavailable, and discrepant data.
● Show units explicitly (ton, %, IDR) and format numbers consistently.
● All dashboard values in the Stitch prototype are illustrative, not real operational data.
● Add “Data demonstrasi” badges to sample metrics and records.
● No public exposure of company-specific risk or confidential transaction details.
● Model scores never directly trigger sanctions or permit restrictions.
8. Visual design direction
Overall style: modern public-sector intelligence platform; credible, calm, data-dense but readable. Avoid a militaristic, punitive, or “fraud hunter” aesthetic.
Palette
● Deep forest green: primary navigation and key actions.
● Warm off-white / very light gray: page background.
● White: cards and tables.
● Muted sage: secondary accents.
● Amber: review needed / caution.
● Red: critical system or data issue only, not a verdict.
● Slate: secondary text and neutral statuses.
Typography
● Use a clean sans-serif such as Inter.
● Strong hierarchy: page title, section headings, compact table labels.
● Favor readable 14–16 px body text and clear data labels.
Components
● 12-column desktop grid.
● Sidebar approximately 240 px.
● Cards with subtle borders, modest radius, minimal shadow.
● Tables with sticky headers, compact rows, sorting, filtering, and clear empty states.
● Charts with accessible legends and direct labels.
● Risk shown with text + icon + color.
● Consistent spacing system and restrained iconography.
Responsive behavior
● Desktop is primary for reviewers.
● On tablet, sidebar collapses and tables become horizontally scrollable or card-based.
● Public dashboard and company objection portal should be comfortable on mobile.
9. Accessibility and usability
● Meet WCAG AA contrast targets.
● Never encode status by color alone.
● Keyboard-accessible navigation, dialogs, filters, and tables.
● Provide labels for charts and non-color explanations for risk bands.
● Use plain language and explain technical terms inline.
● Confirm destructive or finalizing actions; require rationale for case decisions.
10. Prototype acceptance criteria
The Google Stitch prototype should include:
● Government reviewer overview dashboard.
● Risk review queue and a detailed case view.
● Cross-data validation screen.
● Evidence detail with audit trail.
● Company objection portal and submission flow.
● Public aggregate dashboard.
● NusaWatch system health screen.
● Role-aware navigation and visibility states.
● Interactive filters, table row navigation, and clear case status transitions.
● Illustrative sample data labeled as such.
● Consistent visual system across all screens.