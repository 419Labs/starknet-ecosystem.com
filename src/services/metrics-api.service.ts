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

const fetchTransactionCount = (testnet?: boolean): Promise<number> =>
  fetch(`https://${testnet ? "goerli." : ""}voyager.online/api/txns?ps=10&p=1`)
    .then((response: Response) => {
      if (!response.ok) throw new Error(response.statusText);
      return response.json();
    })
    .then((response) => response.lastPage * 10);

const fetchContractCount = (testnet?: boolean): Promise<number> =>
  fetch(
    `https://${testnet ? "goerli." : ""}voyager.online/api/contracts?ps=10&p=1`
  )
    .then((response: Response) => {
      if (!response.ok) throw new Error(response.statusText);
      return response.json();
    })
    .then((response) => response.lastPage * 10);

export const MetricsApi = {
  fetchGithubRepo,
  fetchNpmDownloads,
  fetchTransactionCount,
  fetchContractCount,
};
