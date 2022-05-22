export interface GithubRepo {
  id: string;
  name: string;
  full_name: string;
  description: string;
  html_url: string;
  homepage: string | undefined;
  open_issues_count: number;
  forks_count: number;
  stargazers_count: number;
  subscribers_count: number;
}
