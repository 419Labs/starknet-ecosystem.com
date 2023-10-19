import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/layout";
import { Switch } from "@chakra-ui/react";
import type { FC } from "react";
import { useState } from "react";

import HighlightedText from "../../components/layout/HighlightedText";
import EcosystemMetrics from "../../components/metrics/ecosystem-metrics";
import GithubReposPaper from "../../components/metrics/github-repos-paper";
import NpmDownloadsPaper from "../../components/metrics/npm-downloads-paper";
import { useTranslate } from "../../context/TranslateProvider";

const MetricsPage: FC = () => {
  const { t } = useTranslate();
  const [isMainnet, setIsMainnet] = useState<boolean>(true);

  return (
    <Flex
      w="full"
      direction="column"
      justify="flex-start"
      align="flex-start"
      transform="translateZ(0)"
    >
      <HighlightedText highlighted={t.metrics.title || "Ecosystem metrics"} />
      <Flex w="full" direction="column" mt={12}>
        <Box mb={8} w="full">
          <Flex direction={{ base: "column", md: "row" }} mb={4}>
            <Text as="h2" mr={8} fontSize="2xl" fontWeight="bold">
              {t.metrics.network_activity || "Network activity"}
            </Text>
            <Flex
              justify="flex-start"
              align="center"
              mb={{ base: 4, md: 0 }}
              mt={{ base: 2, md: 0 }}
            >
              <Switch
                isChecked={isMainnet}
                onChange={(event) => setIsMainnet(event.target.checked)}
              />
              <Text ml={2} fontSize="sm" fontWeight="bold">
                {isMainnet ? "Mainnet" : "Testnet - Goerli"}
              </Text>
            </Flex>
          </Flex>
          <EcosystemMetrics isMainnet={isMainnet} />
        </Box>
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
      </Flex>
    </Flex>
  );
};

export default MetricsPage;
