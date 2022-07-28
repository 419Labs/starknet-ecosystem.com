import type { GithubRepo } from "../models/github-repo";
import type { NpmDownloadsDto } from "../models/npm-downloads";

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

const fetchNpmDownloads = (name: string): Promise<NpmDownloadsDto> =>
  fetch(`https://api.npmjs.org/downloads/range/last-year/${name}`)
    .then((response: Response) => {
      if (!response.ok) throw new Error(response.statusText);
      return response.json();
    })
    .catch((error) => {
      console.log(error);
      return 0;
    });

const fetchTransactionCount = (testnet?: boolean): Promise<number> =>
  fetch(`https://${testnet ? "goerli." : ""}voyager.online/api/txns?ps=10&p=1`)
    .then((response: Response) => {
      if (!response.ok) throw new Error(response.statusText);
      return response.json();
    })
    .then((response) => response.lastPage * 10)
    .catch((error) => {
      console.log(error);
      return 0;
    });

const fetchContractCount = (testnet?: boolean): Promise<number> =>
  fetch(
    `https://${testnet ? "goerli." : ""}voyager.online/api/contracts?ps=10&p=1`
  )
    .then((response: Response) => {
      if (!response.ok) throw new Error(response.statusText);
      return response.json();
    })
    .then((response) => response.lastPage * 10)
    .catch((error) => {
      console.log(error);
      return 0;
    });

const fetchCountEvents = (
  testnet?: boolean,
  fromBlock?: number,
  fromTimestamp?: Date,
  contracts?: string[],
  names?: string[]
): Promise<number> => {
  const params = {
    chain_id: testnet ? "testnet" : "mainnet",
    ...(fromBlock ? { from_block: fromBlock.toString() } : {}),
    ...(fromTimestamp
      ? { from_timestamp: fromTimestamp.toISOString().split("T")[0] }
      : {}),
  };
  const urlParams = new URLSearchParams(params);
  contracts?.map((c) => urlParams.append("contract", c));
  names?.map((n) => urlParams.append("name", n));

  const fetchUrl = `http://starknet.events/api/v1/get_events?${urlParams}`;
  // console.log(fetchUrl);

  return fetch(fetchUrl)
    .then((response: Response) => {
      if (!response.ok) throw new Error(response.statusText);
      return response.json();
    })
    .then((response) => response.total)
    .catch((error) => {
      console.log(error);
      return 0;
    });
};

export const MetricsApi = {
  fetchGithubRepo,
  fetchNpmDownloads,
  fetchTransactionCount,
  fetchContractCount,
  fetchCountEvents,
};
