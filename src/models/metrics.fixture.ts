import type { GithubRepo } from "./github-repo";
import type { NpmDownloads, NpmDownloadsChart } from "./npm-downloads";

export const aGitHubRepo = (): GithubRepo => ({
  id: "418545583",
  name: "starknet.js",
  fullName: "0xs34n/starknet.js",
  url: "https://github.com/0xs34n/starknet.js",
  description: "JavaScript library for StarkNet",
  homepage: "https://www.starknetjs.com",
  openIssuesCount: 16,
  forksCount: 39,
  stargazersCount: 152,
  subscribersCount: 11,
});

export const aNpmDownloads = (): NpmDownloads => ({
  start: "2022-04-06",
  end: "2022-04-20",
  package: "starknet",
  label: "starknet.js",
  downloads: [
    {
      downloads: 342,
      day: "2022-04-06",
    },
    {
      downloads: 200,
      day: "2022-04-07",
    },
    {
      downloads: 247,
      day: "2022-04-08",
    },
    {
      downloads: 220,
      day: "2022-04-09",
    },
    {
      downloads: 105,
      day: "2022-04-10",
    },
    {
      downloads: 334,
      day: "2022-04-11",
    },
    {
      downloads: 273,
      day: "2022-04-12",
    },
    {
      downloads: 277,
      day: "2022-04-13",
    },
    {
      downloads: 235,
      day: "2022-04-14",
    },
    {
      downloads: 150,
      day: "2022-04-15",
    },
    {
      downloads: 54,
      day: "2022-04-16",
    },
    {
      downloads: 185,
      day: "2022-04-17",
    },
    {
      downloads: 161,
      day: "2022-04-18",
    },
    {
      downloads: 226,
      day: "2022-04-19",
    },
    {
      downloads: 449,
      day: "2022-04-20",
    },
  ],
});

export const aNpmDownloadsChart = (): NpmDownloadsChart => ({
  package: "starknet",
  label: "starknet.js",
  downloads: [
    {
      start: "2022-04-07",
      end: "2022-04-13",
      downloads: 1656,
    },
    {
      start: "2022-04-14",
      end: "2022-04-20",
      downloads: 1460,
    },
  ],
});

export const aCumulativeNpmDownloadsChart = (): NpmDownloadsChart => ({
  package: "starknet",
  label: "starknet.js",
  downloads: [
    {
      start: "2022-04-07",
      end: "2022-04-13",
      downloads: 1656,
    },
    {
      start: "2022-04-14",
      end: "2022-04-20",
      downloads: 3116,
    },
  ],
});
