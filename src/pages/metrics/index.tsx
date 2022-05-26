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
  testnetSwapsCount: number;
}

const MetricsPage: FC<Props> = ({
  githubRepos,
  npmDownloads,
  mainnetTransactionCount,
  mainnetContractCount,
  testnetTransactionCount,
  testnetContractCount,
  testnetSwapsCount,
}) => {
  const { t } = useTranslate();
  return (
    <Box w="full">
      <Box mb={4}>
        <Text as="h2" mt={8} fontSize="2xl" fontWeight="bold" w="full">
          {t.metrics.title || "Ecosystem metrics"}
        </Text>
        <HStack alignItems="center">
          <Text>{t.metrics.data_sources || "Data sources"}:</Text>
          <Link
            isExternal
            color="whiteAlpha.600"
            href="https://goerli.voyager.online"
            _hover={{ textDecoration: "none", color: "whiteAlpha.500" }}
          >
            <HStack alignItems="center">
              <Text>Voyager</Text>
              <FontAwesomeIcon icon={solid("up-right-from-square")} />
            </HStack>
          </Link>
          <Link
            isExternal
            color="whiteAlpha.600"
            href="http://starknet.events/redoc"
            _hover={{ textDecoration: "none", color: "whiteAlpha.500" }}
          >
            <HStack alignItems="center">
              <Text>starknet.events</Text>
              <FontAwesomeIcon icon={solid("up-right-from-square")} />
            </HStack>
          </Link>
        </HStack>
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
        <CountPaper
          count={testnetSwapsCount}
          label={`${t.metrics.swaps || "swaps"} (Goerli Testnet)`}
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

// AlphaRoad, JediSwap, MySwap
const swapContracts = [
  "0x4aec73f0611a9be0524e7ef21ab1679bdf9c97dc7d72614f15373d431226b6a",
  "0x682bde101e0fa17bb61d867a14db62ddd192d35cc4ad2109e91429e2e4fca17",
  "0x71faa7d6c3ddb081395574c5a6904f4458ff648b66e2123b877555d9ae0260e",
];

const eventNames = ["Swap"];

// const fetchDate = new Date();
// fetchDate.setDate(fetchDate.getDate() - 7);

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
    MetricsApi.fetchCountEvents(true, 1, undefined, swapContracts, eventNames),
  ]);
  return {
    props: {
      githubRepos,
      npmDownloads,
      mainnetTransactionCount: counts[0],
      mainnetContractCount: counts[1],
      testnetTransactionCount: counts[2],
      testnetContractCount: counts[3],
      testnetSwapsCount: counts[4],
    } as Props,
  };
};
