import { Box, SimpleGrid, Text } from "@chakra-ui/layout";
import type { GetServerSideProps } from "next";
import type { FC } from "react";

import CountPaper from "../../components/metrics/count-paper";
import GithubReposPaper from "../../components/metrics/github-repos-paper";
import NpmDownloadsPaper from "../../components/metrics/npm-downloads-paper";
import type { GithubRepo } from "../../models/github-repo";
import type { NpmDownloads } from "../../models/npm-downloads";
import { MetricsApi } from "../../services/metrics-api.service";

interface Props {
  npmDownloads: NpmDownloads;
  githubRepos: GithubRepo[];
  mainnetTransactionCount: number;
  mainnetContractCount: number;
  testnetTransactionCount: number;
  testnetContractCount: number;
}

const MetricsPage: FC<Props> = ({
  githubRepos,
  npmDownloads,
  mainnetTransactionCount,
  mainnetContractCount,
  testnetTransactionCount,
  testnetContractCount,
}) => (
  <Box w="full">
    <Text as="h2" mb={4} mt={8} fontSize="2xl" fontWeight="bold" w="full">
      Ecosystem metrics
    </Text>
    <SimpleGrid columns={{ sm: 1, md: 2, lg: 4 }} spacing={4} mb={8}>
      <CountPaper
        count={mainnetTransactionCount}
        label="transactions (ETH Mainnet)"
      />
      <CountPaper
        count={mainnetContractCount}
        label="contracts (ETH Mainnet)"
      />
      <CountPaper
        count={testnetTransactionCount}
        label="transactions (Goerli Testnet)"
      />
      <CountPaper
        count={testnetContractCount}
        label="contracts (Goerli Testnet)"
      />
    </SimpleGrid>
    <Text as="h2" mb={4} fontSize="2xl" fontWeight="bold" w="full">
      Developer tools
    </Text>
    <SimpleGrid columns={{ sm: 1, md: 1, lg: 3 }} spacing={4}>
      <GithubReposPaper githubRepos={githubRepos} />
      <NpmDownloadsPaper npmDownloads={npmDownloads} />
    </SimpleGrid>
  </Box>
);

export default MetricsPage;

const githubReposToFollow = [
  { organization: "starkware-libs", name: "cairo-lang" },
  { organization: "argentlabs", name: "argent-x" },
  { organization: "0xs34n", name: "starknet.js" },
  { organization: "software-mansion", name: "starknet.py" },
  { organization: "OpenZeppelin", name: "nile" },
  { organization: "Shard-Labs", name: "starknet-devnet" },
];
const npmRepoToFollow = "starknet";

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  res.setHeader("Cache-Control", "public, s-maxage=3600"); // Cache this for an hour
  const githubRepos = await Promise.all(
    githubReposToFollow.map((repo) =>
      MetricsApi.fetchGithubRepo(repo.organization, repo.name)
    )
  );
  const npmDownloads = await MetricsApi.fetchNpmDownloads(npmRepoToFollow);
  const mainnetTransactionCount = await MetricsApi.fetchTransactionCount();
  const mainnetContractCount = await MetricsApi.fetchContractCount();
  const testnetTransactionCount = await MetricsApi.fetchTransactionCount(true);
  const testnetContractCount = await MetricsApi.fetchContractCount(true);
  return {
    props: {
      githubRepos,
      npmDownloads,
      mainnetTransactionCount,
      mainnetContractCount,
      testnetTransactionCount,
      testnetContractCount,
    },
  };
};
