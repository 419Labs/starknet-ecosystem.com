import type { GithubRepo } from "../models/github-repo";
import type { NpmDownloads } from "../models/npm-downloads";

const fetchGithubRepo = (
  organization: string,
  name: string
): Promise<GithubRepo> =>
  fetch(`https://api.github.com/repos/${organization}/${name}`).then(
    (response: Response) => {
      if (!response.ok) {
        throw new Error(`${response.statusText}${organization}/${name}`);
      }
      return response.json();
    }
  );

const fetchNpmDownloads = (name: string): Promise<NpmDownloads> =>
  fetch(`https://api.npmjs.org/downloads/range/last-year/${name}`).then(
    (response: Response) => {
      if (!response.ok) throw new Error(response.statusText);
      return response.json();
    }
  );

export const MetricsApi = {
  fetchGithubRepo,
  fetchNpmDownloads,
};
