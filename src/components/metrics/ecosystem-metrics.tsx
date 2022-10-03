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

interface Props {
  isMainnet?: boolean;
}
const EcosystemMetrics: FC<Props> = ({ isMainnet = true }: Props) => {
  const { t } = useTranslate();
  const [mainnetTxCount, setMainnetTxCount] = useState<number | undefined>(
    undefined
  );
  const [mainnetContractCount, setMainnetContractCount] = useState<
    number | undefined
  >(undefined);
  const [mainnetBlockCount, setMainnetBlockCount] = useState<
    number | undefined
  >(undefined);
  const [testnetTxCount, setTestnetTxCount] = useState<number | undefined>(
    undefined
  );
  const [testnetContractCount, setTestnetContractCount] = useState<
    number | undefined
  >(undefined);
  const [testnetBlockCount, setTestnetBlockCount] = useState<
    number | undefined
  >(undefined);
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
    <Box w="full">
      <SimpleGrid columns={{ base: 1, xl: 2 }} spacing={4} mb={4}>
        {isMainnet ? (
          <CountPaper
            big
            count={bridgeMetrics && formatUnits(bridgeMetrics.balance)}
            label="Ether in bridge"
            subtitle={
              bridgeMetrics && bridgeMetrics.ethValue
                ? `Ether value: ${formatCompactNumber(
                    parseFloat(formatUnits(bridgeMetrics.balance)) *
                      bridgeMetrics.ethValue
                  )} $ ($${bridgeMetrics.ethValue}/ETH)`
                : undefined
            }
          />
        ) : (
          <CountPaper
            big
            count={
              testnetBridgeMetrics && formatUnits(testnetBridgeMetrics.balance)
            }
            label="Ether in bridge"
          />
        )}
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={4}>
          {isMainnet ? (
            <>
              <CountPaper
                count={mainnetTxCount}
                label={`${t.metrics.transactions || "transactions"}`}
              />
              <CountPaper
                count={mainnetContractCount}
                label={`${t.metrics.contracts || "contracts"}`}
              />
              <CountPaper
                count={mainnetBlockCount}
                label={`${t.metrics.blocks || "blocks"}`}
              />
            </>
          ) : (
            <>
              <CountPaper
                count={testnetTxCount}
                label={`${t.metrics.transactions || "transactions"}`}
              />
              <CountPaper
                count={testnetContractCount}
                label={`${t.metrics.contracts || "contracts"}`}
              />
              <CountPaper
                count={testnetBlockCount}
                label={`${t.metrics.blocks || "blocks"}`}
              />
            </>
          )}
        </SimpleGrid>
      </SimpleGrid>
      <Flex color="whiteAlpha.600" fontSize="sm" mt={2}>
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
    </Box>
  );
};
export default EcosystemMetrics;
