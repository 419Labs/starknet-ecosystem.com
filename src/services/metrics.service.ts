import type { NpmDownloads, NpmDownloadsChart } from "../models/npm-downloads";

export const toNpmDownloadsChart = (
  npmDownloads: NpmDownloads
): NpmDownloadsChart => {
  npmDownloads.downloads.splice(0, npmDownloads.downloads.length % 7);
  const weeks: { downloads: number; day: string }[][] = [];
  npmDownloads.downloads.forEach((download) => {
    const lastIndex = weeks.length - 1;
    if (lastIndex === -1) {
      weeks[0] = [download];
    } else if (weeks[lastIndex].length < 7) {
      weeks[lastIndex] = [...weeks[lastIndex], download];
    } else {
      weeks[lastIndex + 1] = [download];
    }
  });
  return {
    package: npmDownloads.package,
    label: npmDownloads.label,
    downloads: weeks.map((week) => ({
      start: week[0].day,
      end: week[week.length - 1].day,
      downloads: week
        .map((day) => day.downloads)
        .reduce((previousValue, currentValue) => previousValue + currentValue),
    })),
  };
};
