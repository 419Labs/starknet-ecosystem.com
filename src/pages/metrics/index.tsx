import { Box, Flex, HStack, Link, SimpleGrid, Text } from "@chakra-ui/layout";
import { Switch } from "@chakra-ui/react";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { FC } from "react";
import { useState } from "react";

import HighlightedText from "../../components/layout/HighlightedText";
import EcosystemMetrics from "../../components/metrics/ecosystem-metrics";
import GithubReposPaper from "../../components/metrics/github-repos-paper";
import NpmDownloadsPaper from "../../components/metrics/npm-downloads-paper";
import TwitterMetrics from "../../components/metrics/twitter-metrics";
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
      {/* Sub intro text */}
      <Text
        zIndex={1}
        mt={8}
        textAlign="start"
        color="whiteAlpha.600"
        fontSize="20px"
        maxWidth="600px"
      >
        {t.common.subtitle_main}
      </Text>
      <Flex
        color="whiteAlpha.600"
        fontSize="20px"
        mb={4}
        mt={2}
      >
        <Text mr={2}>{t.metrics.data_coming_from || "Data coming from"} </Text>
        <Link
          isExternal
          href="https://goerli.voyager.online"
          _hover={{ textDecoration: "none", color: "whiteAlpha.900" }}
          display="flex"
          mr={2}
        >
          <Text mr={1}>Voyager</Text>
          <FontAwesomeIcon icon={solid("up-right-from-square")} />
        </Link>
        <Text mr={2}>and</Text>
        <Link
          isExternal
          href="https://etherscan.io/address/0xae0ee0a63a2ce6baeeffe56e7714fb4efe48d419"
          _hover={{ textDecoration: "none", color: "whiteAlpha.900" }}
          display="flex"
          mr={2}
        >
          <Text mr={1}>Etherscan</Text>
          <FontAwesomeIcon icon={solid("up-right-from-square")} />
        </Link>
      </Flex>
      <Flex w="full" direction="column" mt={24}>
        <Box mb={8} w="full">
          <Flex direction="row" justify="flex-start" align="center" mb={4}>
            <Text as="h2" mr={8} fontSize="2xl" fontWeight="bold">
              {t.metrics.developer_tools || "Developer tools"}
            </Text>
            <Switch
              isChecked={isMainnet}
              onChange={(event) => setIsMainnet(event.target.checked)}
            />
            <Text ml={2} fontSize="sm" fontWeight="bold">
              {isMainnet ? "Mainnet" : "Testnet - Goerli"}
            </Text>
          </Flex>
          <EcosystemMetrics isMainnet={isMainnet} />
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
    </Flex>
  );
};

export default MetricsPage;
