import { BigNumber } from "ethers";

import type { BridgeMetrics } from "../models/bridge-metrics";
import type { GithubRepo } from "../models/github-repo";
import type { NpmDownloadsDto } from "../models/npm-downloads";
import type { TweetCount } from "../models/tweet-metric";

const STARKNET_DB_BASE_URL = "https://api.starknet-db.com";

const fetchGithubRepo = (
  organization: string,
  name: string
): Promise<GithubRepo> =>
  fetch(`${STARKNET_DB_BASE_URL}/github-metrics/${organization}/${name}`).then(
    (response: Response) => {
      if (!response.ok) {
        throw new Error(`${response.statusText}${organization}/${name}`);
      }
      return response.json();
    }
  );

const fetchNpmDownloads = (name: string): Promise<NpmDownloadsDto> =>
  fetch(`${STARKNET_DB_BASE_URL}/npm-downloads/${name}`)
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

const fetchBlockCount = (testnet?: boolean): Promise<number> =>
  fetch(
    `https://${testnet ? "goerli." : ""}voyager.online/api/blocks?ps=10&p=1`
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

const fetchBridgeMetrics = (testnet?: boolean): Promise<BridgeMetrics> =>
  fetch(
    `${STARKNET_DB_BASE_URL}/bridge-metrics?network=${
      testnet ? "GOERLI" : "MAINNET"
    }`
  )
    .then((response: Response) => {
      if (!response.ok) throw new Error(response.statusText);
      return response.json();
    })
    .then((result) => ({
      balance: BigNumber.from(result.balance),
      ethValue: result.ethValue,
    }));

const fetchTweetCounts = (keyword: string): Promise<TweetCount[]> =>
  fetch(`${STARKNET_DB_BASE_URL}/tweet-counts?keyword=${keyword}`).then(
    (response: Response) => {
      if (!response.ok) throw new Error(response.statusText);
      return response.json();
    }
  );

export const MetricsApi = {
  fetchGithubRepo,
  fetchNpmDownloads,
  fetchTransactionCount,
  fetchBlockCount,
  fetchContractCount,
  fetchBridgeMetrics,
  fetchTweetCounts,
};
