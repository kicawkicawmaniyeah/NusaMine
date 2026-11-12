export type UserRole = 'pemerintah' | 'perusahaan' | 'publik' | 'nusawatch';

export type PageId =
  | 'ringkasan'
  | 'pemeriksaan-risiko'
  | 'detail-kasus'
  | 'validasi-data'
  | 'bukti-dan-audit-trail'
  | 'sanggahan'
  | 'workspace-sanggahan'
  | 'portal-sanggahan'
  | 'inspeksi-lapangan'
  | 'transparansi-publik'
  | 'nusawatch'
  | 'pengaturan'
  | 'ragam-kondisi';

export interface FilterState {
  region: string;
  commodity: string;
  dateRange: string;
}
