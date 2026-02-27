import { Box, Flex, Grid, HStack, Text, VStack } from "@chakra-ui/layout";
import { Icon, Link as ChakraLink } from "@chakra-ui/react";
import Head from "next/head";
import {
  faChartLine,
  faCoins,
  faExchangeAlt,
  faFire,
  faUsers,
  faShieldAlt,
  faArrowUp,
  faArrowDown,
  faExternalLinkAlt,
  faPercent,
  faLayerGroup,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { FC } from "react";
import { useEffect, useState } from "react";
import useSWR from "swr";

import { useTranslate } from "../../context/TranslateProvider";

// Format large numbers
function formatNumber(num: number | null | undefined, prefix = "$"): string {
  if (num === null || num === undefined) return "---";
  if (num >= 1e9) return `${prefix}${(num / 1e9).toFixed(2)}B`;
  if (num >= 1e6) return `${prefix}${(num / 1e6).toFixed(2)}M`;
  if (num >= 1e3) return `${prefix}${(num / 1e3).toFixed(1)}K`;
  return `${prefix}${num.toFixed(2)}`;
}

// Mini Sparkline Chart
function MiniChart({ data, color = "#FF6B35" }: { data: { value: number }[]; color?: string }) {
  if (!data || data.length === 0) return null;

  const values = data.map((d) => d.value);
  const min = Math.min(...values);
  const max = Math.max(...values);
  const range = max - min || 1;

  const width = 120;
  const height = 40;
  const points = values
    .map((v, i) => {
      const x = (i / (values.length - 1)) * width;
      const y = height - ((v - min) / range) * height;
      return `${x},${y}`;
    })
    .join(" ");

  return (
    <svg width={width} height={height} style={{ overflow: "visible" }}>
      <polyline
        points={points}
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Metric Card with source
function MetricCard({
  label,
  value,
  subValue,
  change,
  source,
  sourceUrl,
  icon,
  loading,
}: {
  label: string;
  value: string;
  subValue?: string;
  change?: number | null;
  source: string;
  sourceUrl: string;
  icon: any;
  loading?: boolean;
}) {
  const isPositive = change !== null && change !== undefined && change >= 0;

  return (
    <Box p={5} border="1px solid" borderColor="whiteAlpha.100" bg="whiteAlpha.025">
      <Flex justify="space-between" align="flex-start" mb={3}>
        <Icon as={FontAwesomeIcon} icon={icon} color="accent.500" boxSize={4} />
        <ChakraLink href={sourceUrl} isExternal>
          <Text fontSize="9px" color="gray.600" _hover={{ color: "gray.400" }} textTransform="uppercase">
            {source}
          </Text>
        </ChakraLink>
      </Flex>

      <Text fontSize="10px" color="gray.500" textTransform="uppercase" letterSpacing="0.1em" mb={1}>
        {label}
      </Text>

      {loading ? (
        <VStack align="flex-start" spacing={2} mt={1} sx={{
          "@keyframes skeletonPulse": { "0%, 100%": { opacity: 0.4 }, "50%": { opacity: 1 } },
        }}>
          <Box w="80%" h="24px" bg="whiteAlpha.100" borderRadius="2px" sx={{
            animation: "skeletonPulse 1.5s ease-in-out infinite",
          }} />
          <Box w="50%" h="14px" bg="whiteAlpha.050" borderRadius="2px" sx={{
            animation: "skeletonPulse 1.5s ease-in-out 0.2s infinite",
          }} />
        </VStack>
      ) : (
        <>
          <Text fontSize="24px" fontWeight="700" color="white" fontFamily="mono" lineHeight="1.2">
            {value}
          </Text>
          {subValue && (
            <Text fontSize="12px" color="gray.500" mt={1}>
              {subValue}
            </Text>
          )}
          {change !== null && change !== undefined && (
            <HStack spacing={1} mt={2}>
              <Icon
                as={FontAwesomeIcon}
                icon={isPositive ? faArrowUp : faArrowDown}
                color={isPositive ? "#22C55E" : "#FF4444"}
                boxSize={2}
              />
              <Text fontSize="12px" color={isPositive ? "#22C55E" : "#FF4444"} fontWeight="500">
                {isPositive ? "+" : ""}{change.toFixed(2)}%
              </Text>
              <Text fontSize="11px" color="gray.600">24h</Text>
            </HStack>
          )}
        </>
      )}
    </Box>
  );
}

// Dashboard Link
function DashboardLink({ title, href, tag }: { title: string; href: string; tag?: string }) {
  return (
    <ChakraLink href={href} isExternal _hover={{ textDecoration: "none" }}>
      <Flex
        justify="space-between"
        align="center"
        py={3}
        px={4}
        border="1px solid"
        borderColor="whiteAlpha.100"
        _hover={{ borderColor: "accent.500" }}
        transition="border-color 0.2s ease"
      >
        <Text fontSize="14px" fontWeight="500" color="white">{title}</Text>
        <HStack spacing={2}>
          {tag && (
            <Text fontSize="10px" color="accent.500" textTransform="uppercase">{tag}</Text>
          )}
          <Icon as={FontAwesomeIcon} icon={faExternalLinkAlt} boxSize={3} color="gray.600" />
        </HStack>
      </Flex>
    </ChakraLink>
  );
}

async function fetchMetrics() {
  const [strkRes, validatorsRes, tvlRes, dexRes, feesRes] = await Promise.all([
    fetch("https://starknet.impulse.avnu.fi/v3/tokens"),
    fetch("https://api.dashboard.endur.fi/api/query/validators?page=1&per_page=400&sort_by=total_stake&sort_order=desc"),
    fetch("https://api.llama.fi/v2/chains"),
    fetch("https://api.llama.fi/overview/dexs/starknet?excludeTotalDataChart=true&excludeTotalDataChartBreakdown=true"),
    fetch("https://api.llama.fi/overview/fees/starknet?excludeTotalDataChart=true&excludeTotalDataChartBreakdown=true"),
  ]);

  const [strkTokens, validatorsData, tvlData, dexData, feesData] = await Promise.all([
    strkRes.json(),
    validatorsRes.json(),
    tvlRes.json(),
    dexRes.json(),
    feesRes.json(),
  ]);

  const strk = strkTokens.find((t: any) => t.symbol === "STRK");
  const btcToken = strkTokens.find((t: any) => t.symbol === "WBTC" || t.symbol === "BTC");

  const allValidators = validatorsData.validators || [];
  const activeVals = allValidators.filter((v: any) => v.is_active);
  const totalStrkStaked = allValidators.reduce((acc: number, v: any) => acc + parseFloat(v.total_stake || 0), 0) / 1e18;
  const totalBtcStaked = allValidators.reduce((acc: number, v: any) => acc + parseFloat(v.total_stake_btc || 0), 0) / 1e8;
  const totalDelegators = allValidators.reduce((acc: number, v: any) => acc + (v.delegators_count || 0), 0);
  const totalBtcDelegators = allValidators.reduce((acc: number, v: any) => acc + (v.delegators_count_btc || 0), 0);
  const avgApy = activeVals.length > 0 ? activeVals.reduce((acc: number, v: any) => acc + (v.apy || 0), 0) / activeVals.length : 0;

  const starknetTvl = tvlData.find((c: any) => c.name === "Starknet");

  return {
    strkData: strk || null,
    stakingStats: {
      totalStrkStaked,
      totalBtcStaked,
      totalDelegators,
      totalBtcDelegators,
      activeValidators: activeVals.length,
      totalValidators: allValidators.length,
      avgApy,
    },
    btcPrice: btcToken?.global?.usd ?? btcToken?.starknet?.usd ?? null,
    defiData: {
      tvl: starknetTvl?.tvl ?? null,
      dexVolume24h: dexData?.total24h ?? null,
      dexVolume7d: dexData?.total7d ?? null,
      fees24h: feesData?.total24h ?? null,
      fees30d: feesData?.total30d ?? null,
    },
    fetchedAt: new Date(),
  };
}

const MetricsPage: FC = () => {
  const { t } = useTranslate();
  const { data: metricsData, isLoading: loading } = useSWR("starknet-metrics", fetchMetrics, {
    revalidateOnFocus: false,
  });
  const [timeAgo, setTimeAgo] = useState("");

  const strkData = metricsData?.strkData ?? null;
  const stakingStats = metricsData?.stakingStats ?? null;
  const btcPrice = metricsData?.btcPrice ?? null;
  const defiData = metricsData?.defiData ?? null;
  const lastUpdated = metricsData?.fetchedAt ?? null;

  // Update "time ago" every 30s
  useEffect(() => {
    if (!lastUpdated) return;
    const update = () => {
      const seconds = Math.floor((Date.now() - lastUpdated.getTime()) / 1000);
      if (seconds < 60) setTimeAgo("just now");
      else if (seconds < 3600) setTimeAgo(`${Math.floor(seconds / 60)}m ago`);
      else setTimeAgo(`${Math.floor(seconds / 3600)}h ago`);
    };
    update();
    const interval = setInterval(update, 30000);
    return () => clearInterval(interval);
  }, [lastUpdated]);

  // Calculate staking TVL in USD using STRK price
  const strkPrice = strkData?.starknet?.usd || 0;
  const stakingTvlUsd = stakingStats ? stakingStats.totalStrkStaked * strkPrice : null;

  return (
    <>
    <Head>
      <title>{t.metrics?.seo_title || "Starknet Pulse | Live Ecosystem Metrics"}</title>
      <meta name="description" content={t.metrics?.seo_description || "Real-time Starknet metrics: STRK price, TVL, DEX volume, staking stats, and network health. Data from avnu, DefiLlama, and Endur.fi."} />
      <meta property="og:title" content={t.metrics?.seo_title || "Starknet Pulse | Live Ecosystem Metrics"} />
      <meta property="og:description" content={t.metrics?.seo_description || "Real-time Starknet metrics: STRK price, TVL, DEX volume, staking stats, and network health."} />
      <meta property="og:type" content="website" />
    </Head>
    <Box w="full" bg="black" minH="100vh" pt={32} pb={24}>
      {/* Hero */}
      <Box px={{ base: 6, md: 12, lg: 24 }} mb={12}>
        <VStack spacing={4} align="start" maxW="800px">
          <Flex align="center" gap={3}>
            <Box w="40px" h="1px" bg="accent.500" />
            <Text fontSize="12px" color="accent.500" textTransform="uppercase" letterSpacing="0.2em" fontWeight="500">
              {t.metrics?.hero_eyebrow || "Live Dashboard"}
            </Text>
            <Box w="8px" h="8px" borderRadius="full" bg="#22C55E" boxShadow="0 0 10px #22C55E" />
            {timeAgo && (
              <Text fontSize="11px" color="gray.600">
                Updated {timeAgo}
              </Text>
            )}
          </Flex>
          <Text
            as="h1"
            fontSize={{ base: "36px", md: "56px", lg: "64px" }}
            fontWeight="700"
            color="white"
            lineHeight="0.95"
            letterSpacing="-0.04em"
          >
            {t.metrics?.hero_title || "Starknet"}
            <Text as="span" color="accent.500">{t.metrics?.hero_title_accent || " Pulse."}</Text>
          </Text>
          <Text fontSize="16px" color="gray.500" maxW="500px" lineHeight="1.6">
            {t.metrics?.hero_description || "Live ecosystem snapshots sourced across the network. Data updates on each page load."}
          </Text>
        </VStack>
      </Box>

      {/* STRK Token Section */}
      <Box px={{ base: 6, md: 12, lg: 24 }} mb={12}>
        <Flex align="center" gap={4} mb={6}>
          <Box w="3px" h="24px" bg="accent.500" />
          <Text fontSize="lg" fontWeight="700" color="white">{t.metrics?.strk_token || "$STRK Token"}</Text>
          <ChakraLink href="https://www.coingecko.com/en/coins/starknet" isExternal>
            <Text fontSize="11px" color="gray.600" _hover={{ color: "gray.400" }}>CoinGecko</Text>
          </ChakraLink>
        </Flex>

        <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "300px 1fr" }} gap={0}>
          {/* Price Card */}
          <Box p={6} border="1px solid" borderColor="whiteAlpha.100" bg="whiteAlpha.050">
            <Text fontSize="11px" color="gray.500" textTransform="uppercase" letterSpacing="0.1em" mb={2}>
              {t.metrics?.current_price || "Current Price"}
            </Text>
            <HStack align="baseline" spacing={3} mb={3}>
              <Text fontSize="40px" fontWeight="700" color="white" fontFamily="mono">
                ${strkData?.starknet?.usd?.toFixed(4) || "---"}
              </Text>
              {strkData?.starknet?.usdPriceChangePercentage24h && (
                <HStack spacing={1}>
                  <Icon
                    as={FontAwesomeIcon}
                    icon={strkData.starknet.usdPriceChangePercentage24h >= 0 ? faArrowUp : faArrowDown}
                    color={strkData.starknet.usdPriceChangePercentage24h >= 0 ? "#22C55E" : "#FF4444"}
                    boxSize={3}
                  />
                  <Text
                    fontSize="16px"
                    fontWeight="600"
                    color={strkData.starknet.usdPriceChangePercentage24h >= 0 ? "#22C55E" : "#FF4444"}
                  >
                    {strkData.starknet.usdPriceChangePercentage24h.toFixed(2)}%
                  </Text>
                </HStack>
              )}
            </HStack>
            {strkData?.linePriceFeedInUsd && (
              <Box mt={4}>
                <MiniChart
                  data={strkData.linePriceFeedInUsd.slice(-48)}
                  color={strkData?.starknet?.usdPriceChangePercentage24h >= 0 ? "#22C55E" : "#FF4444"}
                />
                <Text fontSize="10px" color="gray.600" mt={2}>{t.metrics?.price_chart_7d || "7-day price chart"}</Text>
              </Box>
            )}
          </Box>

          {/* Token Metrics Grid */}
          <Grid templateColumns={{ base: "1fr", sm: "repeat(2, 1fr)", md: "repeat(4, 1fr)" }} gap={0}>
            <MetricCard
              label={t.metrics?.market_cap || "Market Cap"}
              value={formatNumber(strkData?.global?.usdMarketCap)}
              change={strkData?.global?.usdMarketCapChangePercentage24h}
              source="avnu"
              sourceUrl="https://starknet.impulse.avnu.fi/v3/tokens"
              icon={faCoins}
              loading={loading}
            />
            <MetricCard
              label={t.metrics?.fdv || "FDV"}
              value={formatNumber(strkData?.global?.usdFdv)}
              source="avnu"
              sourceUrl="https://starknet.impulse.avnu.fi/v3/tokens"
              icon={faChartLine}
              loading={loading}
            />
            <MetricCard
              label={t.metrics?.volume_24h || "Volume 24h"}
              value={formatNumber(strkData?.starknet?.usdVolume24h)}
              subValue={t.metrics?.on_starknet || "On Starknet"}
              source="avnu"
              sourceUrl="https://starknet.impulse.avnu.fi/v3/tokens"
              icon={faExchangeAlt}
              loading={loading}
            />
            <MetricCard
              label={t.metrics?.tvl || "TVL"}
              value={formatNumber(strkData?.starknet?.usdTvl)}
              subValue={t.metrics?.liquidity_on_starknet || "Liquidity on Starknet"}
              source="avnu"
              sourceUrl="https://starknet.impulse.avnu.fi/v3/tokens"
              icon={faLayerGroup}
              loading={loading}
            />
          </Grid>
        </Grid>
      </Box>

      {/* Network & DeFi Stats */}
      <Box px={{ base: 6, md: 12, lg: 24 }} mb={12}>
        <Flex align="center" gap={4} mb={6}>
          <Box w="3px" h="24px" bg="accent.500" />
          <Text fontSize="lg" fontWeight="700" color="white">{t.metrics?.network_defi || "Network & DeFi"}</Text>
          <ChakraLink href="https://defillama.com/chain/Starknet" isExternal>
            <Text fontSize="11px" color="gray.600" _hover={{ color: "gray.400" }}>DefiLlama</Text>
          </ChakraLink>
        </Flex>

        <Grid templateColumns={{ base: "1fr", sm: "repeat(2, 1fr)", md: "repeat(3, 1fr)", lg: "repeat(6, 1fr)" }} gap={0}>
          <MetricCard
            label={t.metrics?.total_tvl || "Total TVL"}
            value={formatNumber(defiData?.tvl)}
            source="DefiLlama"
            sourceUrl="https://defillama.com/chain/Starknet"
            icon={faCoins}
            loading={loading}
          />
          <MetricCard
            label={t.metrics?.dex_vol_24h || "DEX Vol 24h"}
            value={formatNumber(defiData?.dexVolume24h)}
            source="DefiLlama"
            sourceUrl="https://defillama.com/dexs/starknet"
            icon={faExchangeAlt}
            loading={loading}
          />
          <MetricCard
            label={t.metrics?.dex_vol_7d || "DEX Vol 7d"}
            value={formatNumber(defiData?.dexVolume7d)}
            source="DefiLlama"
            sourceUrl="https://defillama.com/dexs/starknet"
            icon={faChartLine}
            loading={loading}
          />
          <MetricCard
            label={t.metrics?.fees_24h || "Fees 24h"}
            value={formatNumber(defiData?.fees24h)}
            source="DefiLlama"
            sourceUrl="https://defillama.com/fees/starknet"
            icon={faFire}
            loading={loading}
          />
          <MetricCard
            label={t.metrics?.fees_30d || "Fees 30d"}
            value={formatNumber(defiData?.fees30d)}
            source="DefiLlama"
            sourceUrl="https://defillama.com/fees/starknet"
            icon={faFire}
            loading={loading}
          />
          <MetricCard
            label={t.metrics?.staking_tvl || "Staking TVL"}
            value={formatNumber(stakingTvlUsd)}
            subValue={stakingStats ? `${(stakingStats.totalStrkStaked / 1e6).toFixed(0)}M STRK` : undefined}
            source="Endur.fi"
            sourceUrl="https://dashboard.endur.fi"
            icon={faPercent}
            loading={loading}
          />
        </Grid>
      </Box>

      {/* Staking Section */}
      <Box px={{ base: 6, md: 12, lg: 24 }} mb={12}>
        <Flex align="center" gap={4} mb={6}>
          <Box w="3px" h="24px" bg="accent.500" />
          <Text fontSize="lg" fontWeight="700" color="white">{t.metrics?.staking || "Staking"}</Text>
          <ChakraLink href="https://dashboard.endur.fi" isExternal>
            <Text fontSize="11px" color="gray.600" _hover={{ color: "gray.400" }}>Endur.fi</Text>
          </ChakraLink>
        </Flex>

        <Grid templateColumns={{ base: "1fr", sm: "repeat(2, 1fr)", md: "repeat(3, 1fr)", lg: "repeat(6, 1fr)" }} gap={0}>
          <MetricCard
            label={t.metrics?.strk_staked || "STRK Staked"}
            value={stakingStats ? `${(stakingStats.totalStrkStaked / 1e6).toFixed(1)}M` : "---"}
            subValue={stakingStats ? formatNumber(stakingStats.totalStrkStaked * strkPrice) : undefined}
            source="Endur.fi"
            sourceUrl="https://dashboard.endur.fi"
            icon={faCoins}
            loading={loading}
          />
          <MetricCard
            label={t.metrics?.btc_staked || "BTC Staked"}
            value={stakingStats ? `${stakingStats.totalBtcStaked.toFixed(2)} BTC` : "---"}
            subValue={stakingStats && btcPrice ? formatNumber(stakingStats.totalBtcStaked * btcPrice) : undefined}
            source="Endur.fi"
            sourceUrl="https://dashboard.endur.fi"
            icon={faCoins}
            loading={loading}
          />
          <MetricCard
            label={t.metrics?.avg_apy || "Avg APY"}
            value={stakingStats ? `${stakingStats.avgApy.toFixed(2)}%` : "---"}
            subValue={t.metrics?.validator_average || "Validator average"}
            source="Endur.fi"
            sourceUrl="https://dashboard.endur.fi"
            icon={faPercent}
            loading={loading}
          />
          <MetricCard
            label={t.metrics?.validators || "Validators"}
            value={stakingStats ? `${stakingStats.activeValidators}/${stakingStats.totalValidators}` : "---"}
            subValue={t.metrics?.active_total || "Active / Total"}
            source="Endur.fi"
            sourceUrl="https://dashboard.endur.fi/validators"
            icon={faShieldAlt}
            loading={loading}
          />
          <MetricCard
            label={t.metrics?.delegators || "Delegators"}
            value={stakingStats ? formatNumber(stakingStats.totalDelegators, "") : "---"}
            subValue={t.metrics?.total_delegators || "Total delegators"}
            source="Endur.fi"
            sourceUrl="https://dashboard.endur.fi/validators"
            icon={faUsers}
            loading={loading}
          />
          <MetricCard
            label={t.metrics?.btc_delegators || "BTC Delegators"}
            value={stakingStats ? formatNumber(stakingStats.totalBtcDelegators, "") : "---"}
            subValue={t.metrics?.btc_stakers || "BTC stakers"}
            source="Endur.fi"
            sourceUrl="https://dashboard.endur.fi"
            icon={faUsers}
            loading={loading}
          />
        </Grid>

        {/* Quick link to full dashboard */}
        <ChakraLink href="https://dashboard.endur.fi" isExternal _hover={{ textDecoration: "none" }}>
          <Flex
            justify="space-between"
            align="center"
            mt={0}
            p={4}
            border="1px solid"
            borderColor="whiteAlpha.100"
            borderTop="none"
            _hover={{ borderColor: "accent.500", bg: "whiteAlpha.025" }}
            transition="all 0.2s ease"
          >
            <Text fontSize="13px" color="gray.400">
              {t.metrics?.view_staking_dashboard || "View full staking dashboard with validators, APY breakdown, and delegation tools"}
            </Text>
            <Icon as={FontAwesomeIcon} icon={faExternalLinkAlt} color="accent.500" boxSize={3} />
          </Flex>
        </ChakraLink>
      </Box>

      {/* External Dashboards */}
      <Box px={{ base: 6, md: 12, lg: 24 }} mb={12}>
        <Text fontSize="lg" fontWeight="700" color="white" mb={4}>{t.metrics?.more_dashboards || "More Dashboards"}</Text>
        <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" }} gap={0}>
          <DashboardLink title="avnu Markets" href="https://app.avnu.fi/market" tag="Trading" />
          <DashboardLink title="L2Beat" href="https://l2beat.com/scaling/projects/starknet" tag="Security" />
          <DashboardLink title="GrowThePie" href="https://www.growthepie.xyz/chains/starknet" tag="Analytics" />
          <DashboardLink title="Voyager Explorer" href="https://voyager.online/" tag="Explorer" />
        </Grid>
      </Box>

      {/* Data Sources */}
      <Box px={{ base: 6, md: 12, lg: 24 }}>
        <Box p={5} border="1px solid" borderColor="whiteAlpha.100" bg="whiteAlpha.025">
          <HStack spacing={3} mb={3}>
            <Icon as={FontAwesomeIcon} icon={faShieldAlt} color="gray.500" boxSize={4} />
            <Text fontSize="13px" fontWeight="600" color="white">{t.metrics?.data_sources_info || "Data Sources"}</Text>
          </HStack>
          <Text fontSize="12px" color="gray.500" lineHeight="1.7">
            Token data from{" "}
            <ChakraLink href="https://avnu.fi" isExternal color="accent.500">avnu</ChakraLink>
            {" "}• DeFi metrics from{" "}
            <ChakraLink href="https://defillama.com" isExternal color="accent.500">DefiLlama</ChakraLink>
            {" "}• Staking data from{" "}
            <ChakraLink href="https://endur.fi" isExternal color="accent.500">Endur.fi</ChakraLink>
            {" "}• Refreshed automatically on page load.
          </Text>
        </Box>
      </Box>
    </Box>
    </>
  );
};

export default MetricsPage;
