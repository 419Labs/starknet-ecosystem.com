import { Box, Flex, Link, SimpleGrid, Text } from "@chakra-ui/layout";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { formatUnits } from "ethers/lib/utils";
import type { FC } from "react";
import { useEffect, useState } from "react";

import { useTranslate } from "../../context/TranslateProvider";
import type { BridgeMetrics } from "../../models/bridge-metrics";
import { MetricsApi } from "../../services/metrics-api.service";
import { formatCompactNumber } from "../../services/number.service";

import CountPaper from "./count-paper";

const EcosystemMetrics: FC = () => {
  const { t } = useTranslate();
  const [mainnetTxCount, setMainnetTxCount] = useState<number>();
  const [mainnetContractCount, setMainnetContractCount] = useState<number>();
  const [mainnetBlockCount, setMainnetBlockCount] = useState<number>();
  const [testnetTxCount, setTestnetTxCount] = useState<number>();
  const [testnetContractCount, setTestnetContractCount] = useState<number>();
  const [testnetBlockCount, setTestnetBlockCount] = useState<number>();
  const [bridgeMetrics, setBridgeMetrics] = useState<BridgeMetrics>();
  const [testnetBridgeMetrics, setTestnetBridgeMetrics] =
    useState<BridgeMetrics>();

  useEffect(() => {
    MetricsApi.fetchTransactionCount().then(setMainnetTxCount);
    MetricsApi.fetchContractCount().then(setMainnetContractCount);
    MetricsApi.fetchBlockCount().then(setMainnetBlockCount);
    MetricsApi.fetchTransactionCount(true).then(setTestnetTxCount);
    MetricsApi.fetchContractCount(true).then(setTestnetContractCount);
    MetricsApi.fetchBlockCount(true).then(setTestnetBlockCount);
    MetricsApi.fetchBridgeMetrics().then(setBridgeMetrics);
    MetricsApi.fetchBridgeMetrics(true).then(setTestnetBridgeMetrics);
  }, []);

  return (
    <Box mb={8} w="full">
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 2 }} spacing={4} mb={4}>
        <CountPaper
          big
          count={bridgeMetrics && formatUnits(bridgeMetrics.balance)}
          label="Ether in bride (Mainnet)"
          subtitle={
            bridgeMetrics && bridgeMetrics.ethValue
              ? `Ether value: ${formatCompactNumber(
                  parseFloat(formatUnits(bridgeMetrics.balance)) *
                    bridgeMetrics.ethValue
                )} $ ($${bridgeMetrics.ethValue}/ETH)`
              : ""
          }
        />
        <CountPaper
          big
          count={
            testnetBridgeMetrics && formatUnits(testnetBridgeMetrics.balance)
          }
          label="Ether in bride (Testnet)"
        />
      </SimpleGrid>
      <SimpleGrid columns={{ sm: 1, md: 3, lg: 6 }} spacing={4} mb={4}>
        <CountPaper
          count={mainnetTxCount}
          label={`${t.metrics.transactions || "transactions"} (Mainnet)`}
        />
        <CountPaper
          count={mainnetContractCount}
          label={`${t.metrics.contracts || "contracts"} (Mainnet)`}
        />
        <CountPaper
          count={mainnetBlockCount}
          label={`${t.metrics.blocks || "blocks"} (Mainnet)`}
        />
        <CountPaper
          count={testnetTxCount}
          label={`${t.metrics.transactions || "transactions"} (Goerli)`}
        />
        <CountPaper
          count={testnetContractCount}
          label={`${t.metrics.contracts || "contracts"} (Goerli)`}
        />
        <CountPaper
          count={testnetBlockCount}
          label={`${t.metrics.blocks || "blocks"} (Goerli)`}
        />
      </SimpleGrid>

      <Flex color="whiteAlpha.600">
        <Text mr={2}>{t.metrics.data_sources || "Data sources"}: </Text>
        <Link
          isExternal
          href="https://goerli.voyager.online"
          _hover={{ textDecoration: "none", color: "whiteAlpha.500" }}
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
          _hover={{ textDecoration: "none", color: "whiteAlpha.500" }}
          display="flex"
          mr={2}
        >
          <Text mr={1}>Etherscan</Text>
          <FontAwesomeIcon icon={solid("up-right-from-square")} />
        </Link>
      </Flex>
    </Box>
  );
};
export default EcosystemMetrics;
