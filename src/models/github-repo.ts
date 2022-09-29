export interface GithubRepo {
  id: string;
  name: string;
  fullName: string;
  description: string | undefined;
  url: string;
  homepage: string | undefined;
  openIssuesCount: number;
  forksCount: number;
  stargazersCount: number;
  subscribersCount: number;
}
