import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/layout";
import type { FC } from "react";

import HighlightedText from "../../components/layout/HighlightedText";
import EcosystemMetrics from "../../components/metrics/ecosystem-metrics";
import GithubReposPaper from "../../components/metrics/github-repos-paper";
import NpmDownloadsPaper from "../../components/metrics/npm-downloads-paper";
import TwitterMetrics from "../../components/metrics/twitter-metrics";
import { useTranslate } from "../../context/TranslateProvider";

const MetricsPage: FC = () => {
  const { t } = useTranslate();

  return (
    <Flex
      w="full"
      direction="column"
      justify="flex-start"
      align="flex-start"
      transform="translateZ(0)"
    >
      <Box mb={8} w="full">
        <HighlightedText highlighted={t.metrics.title || "Ecosystem metrics"} />
      </Box>
      <EcosystemMetrics />
      <Box mb={8} w="full">
        <Text as="h2" mb={4} fontSize="2xl" fontWeight="bold" w="full">
          {t.metrics.developer_tools || "Developer tools"}
        </Text>
        <SimpleGrid columns={{ sm: 1, md: 2, lg: 2, xl: 3 }} spacing={4}>
          <GithubReposPaper />
          <NpmDownloadsPaper name="starknet" label="starknet.js" />
          <NpmDownloadsPaper name="get-starknet" label="get-starknet" />
        </SimpleGrid>
      </Box>
      <Box mb={8} w="full">
        <Text as="h2" mb={4} fontSize="2xl" fontWeight="bold" w="full">
          Twitter
        </Text>
        <TwitterMetrics />
      </Box>
    </Flex>
  );
};

export default MetricsPage;
