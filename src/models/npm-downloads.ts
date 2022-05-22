export interface NpmDownloads {
  start: string;
  end: string;
  package: string;
  downloads: { downloads: number; day: string }[];
}

export interface NpmDownloadsChart {
  package: string;
  downloads: { start: string; end: string; downloads: number }[];
}
