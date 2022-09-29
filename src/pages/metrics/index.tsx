import { Box, HStack, Link, SimpleGrid, Text } from "@chakra-ui/layout";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { FC } from "react";
import { useEffect, useState } from "react";

import CountPaper from "../../components/metrics/count-paper";
import GithubReposPaper from "../../components/metrics/github-repos-paper";
import NpmDownloadsPaper from "../../components/metrics/npm-downloads-paper";
import { useTranslate } from "../../context/TranslateProvider";
import type { NpmDownloads } from "../../models/npm-downloads";
import { MetricsApi } from "../../services/metrics-api.service";

const npmRepoToFollow = { name: "starknet", label: "starknet.js" };

const MetricsPage: FC = () => {
  const [npmDownloads, setNpmDownloads] = useState<NpmDownloads>();
  const [mainnetTransactionCount, setMainnetTransactionCount] =
    useState<number>();
  const [mainnetContractCount, setMainnetContractCount] = useState<number>();
  const [testnetTransactionCount, setTestnetTransactionCount] =
    useState<number>();
  const [testnetContractCount, setTestnetContractCount] = useState<number>();

  useEffect(() => {
    MetricsApi.fetchNpmDownloads(npmRepoToFollow.name).then((result) =>
      setNpmDownloads({ ...result, label: npmRepoToFollow.label })
    );
    MetricsApi.fetchTransactionCount().then((count) =>
      setMainnetTransactionCount(count)
    );
    MetricsApi.fetchContractCount().then((count) =>
      setMainnetContractCount(count)
    );
    MetricsApi.fetchTransactionCount(true).then((count) =>
      setTestnetTransactionCount(count)
    );
    MetricsApi.fetchContractCount(true).then((count) =>
      setTestnetContractCount(count)
    );
  }, []);

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
        <GithubReposPaper />
        <NpmDownloadsPaper npmDownloads={npmDownloads} />
      </SimpleGrid>
    </Box>
  );
};

export default MetricsPage;
