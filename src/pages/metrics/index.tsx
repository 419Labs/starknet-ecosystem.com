import { Box, HStack, Link, SimpleGrid, Text } from "@chakra-ui/layout";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { GetServerSideProps } from "next";
import type { FC } from "react";

import CountPaper from "../../components/metrics/count-paper";
import GithubReposPaper from "../../components/metrics/github-repos-paper";
import NpmDownloadsPaper from "../../components/metrics/npm-downloads-paper";
import { useTranslate } from "../../context/TranslateProvider";
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
}) => {
  const { t } = useTranslate();
  return (
    <Box w="full">
      <Box mb={4}>
        <Text as="h2" mt={8} fontSize="2xl" fontWeight="bold" w="full">
          {t.metrics.title || "Ecosystem metrics"}
        </Text>
        <Link
          isExternal
          color="whiteAlpha.600"
          href="https://goerli.voyager.online"
          _hover={{ textDecoration: "none", color: "whiteAlpha.500" }}
        >
          <HStack alignItems="center">
            <Text>{t.metrics.data_sources || "Data sources"}: Voyager</Text>
            <FontAwesomeIcon icon={solid("up-right-from-square")} />
          </HStack>
        </Link>
      </Box>
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 4 }} spacing={4} mb={8}>
        <CountPaper
          count={mainnetTransactionCount}
          label={`${t.metrics.transactions || "transactions"} (ETH Mainnet)`}
        />
        <CountPaper
          count={mainnetContractCount}
          label={`${t.metrics.contracts || "contracts"} (ETH Mainnet)`}
        />
        <CountPaper
          count={testnetTransactionCount}
          label={`${t.metrics.transactions || "transactions"} (Goerli Testnet)`}
        />
        <CountPaper
          count={testnetContractCount}
          label={`${t.metrics.contracts || "contracts"} (Goerli Testnet)`}
        />
      </SimpleGrid>
      <Text as="h2" mb={4} fontSize="2xl" fontWeight="bold" w="full">
        {t.metrics.developer_tools || "Developer tools"}
      </Text>
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 2, xl: 3 }} spacing={4}>
        <GithubReposPaper githubRepos={githubRepos} />
        <NpmDownloadsPaper npmDownloads={npmDownloads} />
      </SimpleGrid>
    </Box>
  );
};

export default MetricsPage;

const githubReposToFollow = [
  { organization: "starkware-libs", name: "cairo-lang" },
  { organization: "starknet-community-libs", name: "get-starknet" },
  { organization: "0xs34n", name: "starknet.js" },
  { organization: "software-mansion", name: "starknet.py" },
  { organization: "OpenZeppelin", name: "nile" },
  { organization: "Shard-Labs", name: "starknet-devnet" },
];
const npmRepoToFollow = { name: "starknet", label: "starknet.js" };

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=3600, stale-while-revalidate=7200"
  ); // Cache this for an hour
  const githubRepos = await Promise.all(
    githubReposToFollow.map((repo) =>
      MetricsApi.fetchGithubRepo(repo.organization, repo.name)
    )
  ).catch(() => null);
  const npmDownloads = await MetricsApi.fetchNpmDownloads(
    npmRepoToFollow.name
  ).then((result) => ({ ...result, label: npmRepoToFollow.label }));
  const counts = await Promise.all([
    MetricsApi.fetchTransactionCount(),
    MetricsApi.fetchContractCount(),
    MetricsApi.fetchTransactionCount(true),
    MetricsApi.fetchContractCount(true),
  ]);
  return {
    props: {
      githubRepos,
      npmDownloads,
      mainnetTransactionCount: counts[0],
      mainnetContractCount: counts[1],
      testnetTransactionCount: counts[2],
      testnetContractCount: counts[3],
    } as Props,
  };
};
