import { Box, Flex, Grid, HStack, Text, VStack } from "@chakra-ui/layout";
import {
  Button,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Spinner,
  Image,
  Tooltip,
  Link as ChakraLink,
  Code,
} from "@chakra-ui/react";
import {
  faShieldAlt,
  faArrowRight,
  faCheck,
  faCode,
  faWallet,
  faExchangeAlt,
  faGamepad,
  faCopy,
  faExternalLinkAlt,
  faSearch,
  faArrowUp,
  faArrowDown,
  faFilter,
  faCoins,
  faLayerGroup,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Head from "next/head";
import type { FC } from "react";
import { useEffect, useState, useMemo } from "react";
import { useTranslate } from "../context/TranslateProvider";

interface Token {
  name: string;
  symbol: string;
  address: string;
  decimals: number;
  logoUri?: string;
  coingeckoId?: string;
  verified?: boolean;
  tags?: string[];
  starknet?: {
    usd?: number;
    usdTvl?: number;
    usdPriceChangePercentage24h?: number;
    usdPriceChangePercentage7d?: number;
    usdVolume24h?: number;
    usdTradingVolume24h?: number;
  };
  global?: {
    usd?: number;
    usdMarketCap?: number;
    usdFdv?: number;
  };
  linePriceFeedInUsd?: { date: string; value: number }[];
}

// Format numbers
function formatNumber(num: number | null | undefined, prefix = "$"): string {
  if (num === null || num === undefined || isNaN(num)) return "---";
  if (num >= 1e9) return `${prefix}${(num / 1e9).toFixed(2)}B`;
  if (num >= 1e6) return `${prefix}${(num / 1e6).toFixed(2)}M`;
  if (num >= 1e3) return `${prefix}${(num / 1e3).toFixed(1)}K`;
  return `${prefix}${num.toFixed(2)}`;
}

// Format price
function formatPrice(num: number | null | undefined): string {
  if (num === null || num === undefined || isNaN(num)) return "$---";
  if (num >= 1000) return `$${num.toFixed(2)}`;
  if (num >= 1) return `$${num.toFixed(4)}`;
  if (num >= 0.0001) return `$${num.toFixed(6)}`;
  return `$${num.toFixed(8)}`;
}

// Truncate address
function truncateAddress(address: string): string {
  if (!address) return "";
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
}

// Mini Sparkline Chart
function MiniChart({ data, color = "#FF6B35", width = 100, height = 32 }: { data: { value: number }[]; color?: string; width?: number; height?: number }) {
  if (!data || data.length === 0) return null;
  const values = data.map((d) => d.value);
  const min = Math.min(...values);
  const max = Math.max(...values);
  const range = max - min || 1;
  const points = values.map((v, i) => {
    const x = (i / (values.length - 1)) * width;
    const y = height - ((v - min) / range) * height;
    return `${x},${y}`;
  }).join(" ");

  return (
    <svg width={width} height={height} style={{ overflow: "visible" }}>
      <polyline points={points} fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// Tag Badge (for info section)
function InfoTagBadge({ tag, color }: { tag: string; color: string }) {
  return (
    <Box px={3} py={1} bg={`${color}15`} border="1px solid" borderColor={color}>
      <Text fontSize="11px" color={color} fontWeight="600" textTransform="uppercase" letterSpacing="0.05em">
        {tag}
      </Text>
    </Box>
  );
}

// Tag badge for explorer
function TagBadge({ tag }: { tag: string }) {
  const colors: Record<string, string> = {
    Verified: "#22C55E",
    AVNU: "#FF6B35",
    Community: "#00BFFF",
    Unruggable: "#9B59B6",
  };
  const color = colors[tag] || "#666";
  return (
    <Box px={2} py={0.5} bg={`${color}15`} border="1px solid" borderColor={color}>
      <Text fontSize="9px" color={color} fontWeight="600" textTransform="uppercase" letterSpacing="0.05em">
        {tag}
      </Text>
    </Box>
  );
}

// Integrator Card
function IntegratorCard({ name, type, icon }: { name: string; type: string; icon: any }) {
  return (
    <HStack p={4} border="1px solid" borderColor="whiteAlpha.100" spacing={4} _hover={{ borderColor: "whiteAlpha.300" }} transition="border-color 0.2s ease">
      <Icon as={FontAwesomeIcon} icon={icon} color="gray.500" boxSize={4} />
      <VStack align="flex-start" spacing={0}>
        <Text fontSize="14px" fontWeight="500" color="white">{name}</Text>
        <Text fontSize="11px" color="gray.600">{type}</Text>
      </VStack>
    </HStack>
  );
}

// Token list item
function TokenListItem({ token, isSelected, onClick }: { token: Token; isSelected: boolean; onClick: () => void }) {
  const price = token.starknet?.usd || token.global?.usd;
  const change24h = token.starknet?.usdPriceChangePercentage24h;
  const isPositive = change24h !== undefined && change24h >= 0;

  return (
    <Flex
      py={3} px={4} cursor="pointer"
      bg={isSelected ? "whiteAlpha.100" : "transparent"}
      borderLeft="2px solid" borderColor={isSelected ? "accent.500" : "transparent"}
      _hover={{ bg: "whiteAlpha.050" }}
      onClick={onClick} align="center" justify="space-between" transition="all 0.15s ease"
    >
      <HStack spacing={3}>
        {token.logoUri ? (
          <Image src={token.logoUri} alt={token.symbol} w="32px" h="32px" borderRadius="full" fallback={<Box w="32px" h="32px" bg="whiteAlpha.200" borderRadius="full" />} />
        ) : (
          <Box w="32px" h="32px" bg="whiteAlpha.200" borderRadius="full" display="flex" alignItems="center" justifyContent="center">
            <Text fontSize="xs" color="gray.500">{token.symbol?.charAt(0)}</Text>
          </Box>
        )}
        <VStack spacing={0} align="flex-start">
          <Text fontSize="14px" fontWeight="600" color="white" noOfLines={1}>{token.symbol}</Text>
          <Text fontSize="11px" color="gray.500" noOfLines={1}>{token.name}</Text>
        </VStack>
      </HStack>
      <VStack spacing={0} align="flex-end">
        <Text fontSize="13px" fontWeight="600" color="white" fontFamily="mono">{formatPrice(price)}</Text>
        {change24h !== undefined && (
          <HStack spacing={1}>
            <Icon as={FontAwesomeIcon} icon={isPositive ? faArrowUp : faArrowDown} color={isPositive ? "#22C55E" : "#FF4444"} boxSize={2} />
            <Text fontSize="11px" color={isPositive ? "#22C55E" : "#FF4444"}>{Math.abs(change24h).toFixed(2)}%</Text>
          </HStack>
        )}
      </VStack>
    </Flex>
  );
}

// Stat row for detail panel
function StatRow({ label, value, subValue, icon }: { label: string; value: string; subValue?: string; icon?: any }) {
  return (
    <Flex justify="space-between" align="center" py={3} borderBottom="1px solid" borderColor="whiteAlpha.050">
      <HStack spacing={2}>
        {icon && <Icon as={FontAwesomeIcon} icon={icon} color="gray.500" boxSize={3} />}
        <Text fontSize="13px" color="gray.400">{label}</Text>
      </HStack>
      <VStack spacing={0} align="flex-end">
        <Text fontSize="14px" fontWeight="600" color="white" fontFamily="mono">{value}</Text>
        {subValue && <Text fontSize="11px" color="gray.500">{subValue}</Text>}
      </VStack>
    </Flex>
  );
}

const TokensPage: FC = () => {
  const { t } = useTranslate();
  const [tokens, setTokens] = useState<Token[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [selectedToken, setSelectedToken] = useState<Token | null>(null);
  const [copied, setCopied] = useState(false);
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const tags = [
    { name: "Verified", color: "#22C55E", description: t.tokens?.tag_verified_desc || "Manually verified by the avnu team" },
    { name: "Community", color: "#00BFFF", description: t.tokens?.tag_community_desc || "Community-submitted and reviewed" },
    { name: "Unruggable", color: "#9B59B6", description: t.tokens?.tag_unruggable_desc || "Deployed via Unruggable Meme framework" },
    { name: "avnu", color: "#FF6B35", description: t.tokens?.tag_avnu_desc || "Featured tokens with high liquidity" },
  ];

  const integrators = [
    { name: "Ready", type: "Wallet", icon: faWallet },
    { name: "Braavos", type: "Wallet", icon: faWallet },
    { name: "Ekubo", type: "DEX", icon: faExchangeAlt },
    { name: "JediSwap", type: "DEX", icon: faExchangeAlt },
    { name: "Nostra", type: "DeFi", icon: faExchangeAlt },
    { name: "Realms", type: "Gaming", icon: faGamepad },
  ];

  const apiEndpoint = "https://starknet.api.avnu.fi/v1/starknet/tokens";

  useEffect(() => {
    async function fetchTokens() {
      try {
        const res = await fetch("https://starknet.impulse.avnu.fi/v3/tokens");
        const data = await res.json();
        const tokenList: Token[] = data || [];
        setTokens(tokenList);
        const strk = tokenList.find((t: Token) => t.symbol?.toUpperCase() === "STRK");
        setSelectedToken(strk || tokenList[0] || null);
      } catch (err) {
        console.error("Failed to fetch tokens:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchTokens();
  }, []);

  const filteredTokens = useMemo(() => {
    let result = [...tokens];
    if (search) {
      const searchLower = search.toLowerCase();
      result = result.filter((t) =>
        t.name?.toLowerCase().includes(searchLower) ||
        t.symbol?.toLowerCase().includes(searchLower) ||
        t.address?.toLowerCase().includes(searchLower)
      );
    }
    // "all" shows everything, specific filter shows only that tag
    if (activeFilter !== "all") {
      result = result.filter((t) => t.tags?.includes(activeFilter));
    }
    // Pinned blue chips first, then market cap, volume, verification tier
    const pinnedOrder: Record<string, number> = {
      STRK: 1, ETH: 2, WBTC: 3, "BTC.B": 4, SBTC: 5, XSTRK: 6, USDC: 7, USDT: 8,
    };
    result.sort((a, b) => {
      const symA = a.symbol?.toUpperCase() || "";
      const symB = b.symbol?.toUpperCase() || "";
      const pinA = pinnedOrder[symA] || 999;
      const pinB = pinnedOrder[symB] || 999;
      if (pinA !== pinB) return pinA - pinB;

      const mcapDiff = (b.global?.usdMarketCap || 0) - (a.global?.usdMarketCap || 0);
      if (mcapDiff !== 0) return mcapDiff;

      const volDiff = (b.starknet?.usdVolume24h || 0) - (a.starknet?.usdVolume24h || 0);
      if (volDiff !== 0) return volDiff;

      const getPriority = (token: Token) => {
        if (token.tags?.includes("Verified")) return 3;
        if (token.tags?.includes("AVNU")) return 2;
        if (token.tags?.includes("Community")) return 1;
        return 0;
      };
      return getPriority(b) - getPriority(a);
    });
    return result;
  }, [tokens, search, activeFilter]);

  const copyAddress = (address: string) => {
    navigator.clipboard.writeText(address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const filterButtons = [
    { key: "all", label: t.tokens?.filter_all || "All", description: t.tokens?.filter_all_desc || "All tokens from API" },
    { key: "Verified", label: t.tokens?.filter_verified || "Verified", description: t.tokens?.filter_verified_desc || "Manually verified" },
    { key: "AVNU", label: t.tokens?.filter_avnu || "avnu", description: t.tokens?.filter_avnu_desc || "High liquidity" },
    { key: "Community", label: t.tokens?.filter_community || "Community", description: t.tokens?.filter_community_desc || "Community-reviewed" },
  ];

  return (
    <>
    <Head>
      <title>{t.tokens?.seo_title || "Starknet Token Directory | Trusted Token Data"}</title>
      <meta
        name="description"
        content={t.tokens?.seo_description || "A trusted Starknet token directory with community-curated metadata, verification tags, and API access for wallets, DEXs, and dApps."}
      />
      <meta property="og:title" content={t.tokens?.seo_title || "Starknet Token Directory | Trusted Token Data"} />
      <meta
        property="og:description"
        content={t.tokens?.seo_description || "Explore Starknet token data with verification tags, market stats, and integration-ready API access."}
      />
      <meta property="og:type" content="website" />
    </Head>
    <Box w="full" bg="black" minH="100vh" pt={32} pb={24}>
      {/* Hero */}
      <Box px={{ base: 6, md: 12, lg: 24 }} mb={16}>
        <VStack spacing={6} align="start" maxW="800px">
          <Flex align="center" gap={3}>
            <Box w="40px" h="1px" bg="accent.500" />
            <Text fontSize="12px" color="accent.500" textTransform="uppercase" letterSpacing="0.2em" fontWeight="500">
              {t.tokens?.hero_eyebrow || "Infrastructure"}
            </Text>
          </Flex>
          <Text as="h1" fontSize={{ base: "36px", md: "56px", lg: "72px" }} fontWeight="700" color="white" lineHeight="0.95" letterSpacing="-0.04em">
            {t.tokens?.hero_title_1 || "Token"}<br /><Text as="span" color="accent.500">{t.tokens?.hero_title_2 || "Directory."}</Text>
          </Text>
          <Text fontSize={{ base: "16px", md: "18px" }} color="gray.500" maxW="600px" lineHeight="1.7">
            {t.tokens?.hero_description || "A trusted token directory for Starknet. Community-curated and ecosystem-reviewed for wallets, DEXs, and dApps."}
          </Text>
        </VStack>
      </Box>

      {/* Main CTA - Compact */}
      <Box px={{ base: 6, md: 12, lg: 24 }} mb={10}>
        <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={0}>
          <ChakraLink href="https://community.avnu.fi" isExternal _hover={{ textDecoration: "none" }}>
            <Flex p={5} bg="accent.500" align="center" justify="space-between" cursor="pointer" _hover={{ bg: "accent.400" }} transition="background 0.2s ease" h="full">
              <HStack spacing={4}>
                <Icon as={FontAwesomeIcon} icon={faArrowRight} color="white" boxSize={4} />
                <VStack spacing={0} align="flex-start">
                  <Text fontSize="15px" fontWeight="700" color="white">{t.tokens?.list_your_token || "List Your Token"}</Text>
                  <Text fontSize="12px" color="whiteAlpha.800">{t.tokens?.submit_for_review || "Submit for community review"}</Text>
                </VStack>
              </HStack>
              <Text fontSize="11px" color="whiteAlpha.700" textTransform="uppercase">{t.tokens?.projects || "Projects"}</Text>
            </Flex>
          </ChakraLink>
          <ChakraLink href="https://docs.avnu.fi/api/tokens/get-tokens" isExternal _hover={{ textDecoration: "none" }}>
            <Flex p={5} border="1px solid" borderColor="whiteAlpha.100" align="center" justify="space-between" cursor="pointer" _hover={{ borderColor: "whiteAlpha.300" }} transition="border-color 0.2s ease" h="full">
              <HStack spacing={4}>
                <Icon as={FontAwesomeIcon} icon={faCode} color="gray.400" boxSize={4} />
                <VStack spacing={0} align="flex-start">
                  <Text fontSize="15px" fontWeight="700" color="white">{t.tokens?.token_api || "Token API"}</Text>
                  <Text fontSize="12px" color="gray.500">{t.tokens?.programmatic_access || "Programmatic access to token data"}</Text>
                </VStack>
              </HStack>
              <Text fontSize="11px" color="gray.600" textTransform="uppercase">{t.tokens?.developers || "Developers"}</Text>
            </Flex>
          </ChakraLink>
        </Grid>
      </Box>

      {/* TOKEN EXPLORER */}
      <Box px={{ base: 6, md: 12, lg: 24 }} mb={16}>
        <Flex align="center" gap={4} mb={6}>
          <Box w="3px" h="24px" bg="accent.500" />
          <Text fontSize="lg" fontWeight="700" color="white">{t.tokens?.token_explorer || "Token Explorer"}</Text>
        </Flex>

        {/* Search and Filters */}
        <Flex gap={4} direction={{ base: "column", md: "row" }} mb={4}>
          <InputGroup maxW={{ md: "320px" }}>
            <InputLeftElement pointerEvents="none">
              <Icon as={FontAwesomeIcon} icon={faSearch} color="gray.500" boxSize={3} />
            </InputLeftElement>
            <Input
              placeholder={t.tokens?.search_placeholder || "Search by name, symbol, or address..."}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              bg="whiteAlpha.050" border="1px solid" borderColor="whiteAlpha.100" borderRadius="0"
              color="white" fontSize="13px" _placeholder={{ color: "gray.500" }} _focus={{ borderColor: "accent.500", boxShadow: "none" }}
            />
          </InputGroup>
          <Box
            overflowX={{ base: "auto", md: "visible" }}
            w="full"
            sx={{
              "&::-webkit-scrollbar": { display: "none" },
              scrollbarWidth: "none",
            }}
          >
            <HStack spacing={2} minW={{ base: "max-content", md: "auto" }} pr={1}>
              <Icon as={FontAwesomeIcon} icon={faFilter} color="gray.500" boxSize={3} />
              {filterButtons.map((btn) => (
                <Tooltip key={btn.key} label={btn.description} placement="top" hasArrow>
                  <Button
                    size="sm" h="40px" px={4}
                    bg={activeFilter === btn.key ? "whiteAlpha.200" : "transparent"}
                    color={activeFilter === btn.key ? "white" : "gray.500"}
                    border="1px solid" borderColor={activeFilter === btn.key ? "whiteAlpha.300" : "whiteAlpha.100"}
                    borderRadius="0" fontSize="12px" fontWeight="500" _hover={{ bg: "whiteAlpha.100", color: "white" }}
                    onClick={() => setActiveFilter(btn.key)}
                  >
                    {btn.label}
                  </Button>
                </Tooltip>
              ))}
            </HStack>
          </Box>
        </Flex>

        {/* Explorer Grid */}
        {loading ? (
          <Flex justify="center" py={20}><Spinner size="lg" color="accent.500" /></Flex>
        ) : (
          <Grid templateColumns={{ base: "1fr", lg: "380px 1fr" }} gap={0} border="1px solid" borderColor="whiteAlpha.100">
            {/* Token List */}
            <Box borderRight={{ lg: "1px solid" }} borderColor="whiteAlpha.100" maxH="500px" overflowY="auto"
              sx={{ "&::-webkit-scrollbar": { width: "4px" }, "&::-webkit-scrollbar-track": { bg: "transparent" }, "&::-webkit-scrollbar-thumb": { bg: "whiteAlpha.200", borderRadius: "2px" } }}
            >
              <Box py={2} px={4} bg="black" borderBottom="1px solid" borderColor="whiteAlpha.100" position="sticky" top={0} zIndex={1}>
                <HStack justify="space-between">
                  <Text fontSize="11px" color="gray.500" fontWeight="600">{filteredTokens.length} / {tokens.length} {t.tokens?.tokens_count || "TOKENS"}</Text>
                  {activeFilter !== "all" && <Text fontSize="10px" color="accent.500" textTransform="uppercase">{activeFilter}</Text>}
                </HStack>
              </Box>
              {filteredTokens.map((token) => (
                <TokenListItem key={token.address} token={token} isSelected={selectedToken?.address === token.address} onClick={() => setSelectedToken(token)} />
              ))}
              {filteredTokens.length === 0 && (
                <Box py={10} textAlign="center"><Text color="gray.500" fontSize="14px">{t.tokens?.no_tokens || "No tokens found"}</Text></Box>
              )}
            </Box>

            {/* Token Detail */}
            <Box p={6} bg="whiteAlpha.025" minH="500px">
              {selectedToken ? (
                <VStack spacing={5} align="stretch">
                  <Flex
                    justify="space-between"
                    align={{ base: "flex-start", md: "center" }}
                    direction={{ base: "column", md: "row" }}
                    gap={3}
                  >
                    <HStack spacing={4}>
                      {selectedToken.logoUri ? (
                        <Image src={selectedToken.logoUri} alt={selectedToken.symbol} w="48px" h="48px" borderRadius="full" fallback={<Box w="48px" h="48px" bg="whiteAlpha.200" borderRadius="full" />} />
                      ) : (
                        <Box w="48px" h="48px" bg="whiteAlpha.200" borderRadius="full" display="flex" alignItems="center" justifyContent="center">
                          <Text fontSize="lg" color="gray.500">{selectedToken.symbol?.charAt(0)}</Text>
                        </Box>
                      )}
                      <VStack spacing={0} align="flex-start">
                        <Text fontSize="20px" fontWeight="700" color="white">{selectedToken.symbol}</Text>
                        <Text fontSize="13px" color="gray.400">{selectedToken.name}</Text>
                        <HStack spacing={2} mt={1} flexWrap="wrap">{selectedToken.tags?.map((tag) => <TagBadge key={tag} tag={tag} />)}</HStack>
                      </VStack>
                    </HStack>
                    {selectedToken.linePriceFeedInUsd && selectedToken.linePriceFeedInUsd.length > 0 && (
                      <Box alignSelf={{ base: "flex-start", md: "auto" }}>
                        <MiniChart data={selectedToken.linePriceFeedInUsd.slice(-48)} color={(selectedToken.starknet?.usdPriceChangePercentage24h || 0) >= 0 ? "#22C55E" : "#FF4444"} width={100} height={36} />
                      </Box>
                    )}
                  </Flex>

                  <HStack align="baseline" spacing={3} flexWrap="wrap">
                    <Text fontSize="28px" fontWeight="700" color="white" fontFamily="mono">{formatPrice(selectedToken.starknet?.usd || selectedToken.global?.usd)}</Text>
                    {selectedToken.starknet?.usdPriceChangePercentage24h !== undefined && (
                      <HStack spacing={1}>
                        <Icon as={FontAwesomeIcon} icon={selectedToken.starknet.usdPriceChangePercentage24h >= 0 ? faArrowUp : faArrowDown} color={selectedToken.starknet.usdPriceChangePercentage24h >= 0 ? "#22C55E" : "#FF4444"} boxSize={3} />
                        <Text fontSize="14px" fontWeight="600" color={selectedToken.starknet.usdPriceChangePercentage24h >= 0 ? "#22C55E" : "#FF4444"}>
                          {Math.abs(selectedToken.starknet.usdPriceChangePercentage24h).toFixed(2)}%
                        </Text>
                      </HStack>
                    )}
                  </HStack>

                  <Box p={3} bg="whiteAlpha.050" border="1px solid" borderColor="whiteAlpha.100">
                    <Flex justify="space-between" align="center">
                      <Text fontSize="12px" color="accent.500" fontFamily="mono">{truncateAddress(selectedToken.address)}</Text>
                      <HStack spacing={2}>
                        <Tooltip label={copied ? "Copied!" : "Copy"} placement="top">
                          <Button size="xs" variant="ghost" color="gray.400" _hover={{ color: "white" }} onClick={() => copyAddress(selectedToken.address)}>
                            <Icon as={FontAwesomeIcon} icon={copied ? faCheck : faCopy} boxSize={3} />
                          </Button>
                        </Tooltip>
                        <ChakraLink href={`https://voyager.online/contract/${selectedToken.address}`} isExternal>
                          <Button size="xs" variant="ghost" color="gray.400" _hover={{ color: "white" }}>
                            <Icon as={FontAwesomeIcon} icon={faExternalLinkAlt} boxSize={3} />
                          </Button>
                        </ChakraLink>
                      </HStack>
                    </Flex>
                  </Box>

                  <Box>
                    <StatRow label={t.tokens?.market_cap || "Market Cap"} value={formatNumber(selectedToken.global?.usdMarketCap)} subValue={t.tokens?.global || "Global"} icon={faCoins} />
                    <StatRow label={t.tokens?.tvl || "TVL"} value={formatNumber(selectedToken.starknet?.usdTvl)} subValue={t.tokens?.starknet || "Starknet"} icon={faLayerGroup} />
                    <StatRow label={t.tokens?.volume_24h || "Volume 24h"} value={formatNumber(selectedToken.starknet?.usdVolume24h)} subValue={t.tokens?.starknet || "Starknet"} icon={faExchangeAlt} />
                  </Box>

                  <HStack spacing={3} flexWrap="wrap">
                    <ChakraLink href={`https://app.avnu.fi/en?buyToken=${selectedToken.address}&sellToken=usdc`} isExternal _hover={{ textDecoration: "none" }} flex={1}>
                      <Button w="full" h="40px" bg="accent.500" color="white" borderRadius="0" fontWeight="600" fontSize="12px" _hover={{ bg: "accent.400" }}>
                        {t.tokens?.trade_on_avnu || "Trade on avnu"}
                      </Button>
                    </ChakraLink>
                    {selectedToken.coingeckoId && (
                      <ChakraLink href={`https://www.coingecko.com/en/coins/${selectedToken.coingeckoId}`} isExternal>
                        <Button h="40px" px={3} bg="transparent" color="gray.400" border="1px solid" borderColor="whiteAlpha.200" borderRadius="0" fontSize="12px" _hover={{ borderColor: "whiteAlpha.400", color: "white" }}>
                          <Icon as={FontAwesomeIcon} icon={faExternalLinkAlt} boxSize={3} />
                        </Button>
                      </ChakraLink>
                    )}
                  </HStack>
                </VStack>
              ) : (
                <Flex justify="center" align="center" h="full"><Text color="gray.500">{t.tokens?.select_token || "Select a token"}</Text></Flex>
              )}
            </Box>
          </Grid>
        )}
      </Box>

      {/* API Endpoint */}
      <Box px={{ base: 6, md: 12, lg: 24 }} mb={16}>
        <Text fontSize="11px" fontWeight="600" color="gray.500" textTransform="uppercase" letterSpacing="0.1em" mb={4}>{t.tokens?.api_endpoint || "API Endpoint"}</Text>
        <Box p={6} bg="whiteAlpha.025" border="1px solid" borderColor="whiteAlpha.100">
          <HStack justify="space-between" flexWrap="wrap" gap={4}>
            <Code bg="transparent" color="accent.500" fontSize={{ base: "12px", md: "14px" }} fontFamily="mono" p={0}>
              GET {apiEndpoint}
            </Code>
            <ChakraLink href={apiEndpoint} isExternal>
              <HStack spacing={2} color="gray.500" _hover={{ color: "white" }}>
                <Icon as={FontAwesomeIcon} icon={faExternalLinkAlt} boxSize={3} />
                <Text fontSize="13px">{t.tokens?.try_it || "Try it"}</Text>
              </HStack>
            </ChakraLink>
          </HStack>
          <Text fontSize="13px" color="gray.500" mt={4}>
            {t.tokens?.api_description || "Returns paginated token list with optional filtering by name, symbol, address, or tag."}
          </Text>
        </Box>
      </Box>

      {/* Token Tags */}
      <Box px={{ base: 6, md: 12, lg: 24 }} mb={16}>
        <Flex align="center" gap={4} mb={6}>
          <Box w="3px" h="24px" bg="accent.500" />
          <Text fontSize="lg" fontWeight="700" color="white" letterSpacing="-0.02em">{t.tokens?.verification_tags || "Verification Tags"}</Text>
        </Flex>
        <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" }} gap={0}>
          {tags.map((tag) => (
            <Box key={tag.name} p={6} border="1px solid" borderColor="whiteAlpha.100" _hover={{ borderColor: tag.color }} transition="border-color 0.2s ease">
              <InfoTagBadge tag={tag.name} color={tag.color} />
              <Text fontSize="14px" color="gray.400" mt={4} lineHeight="1.6">{tag.description}</Text>
            </Box>
          ))}
        </Grid>
      </Box>

      {/* Who Uses This */}
      <Box px={{ base: 6, md: 12, lg: 24 }} mb={16}>
        <Text fontSize="lg" fontWeight="700" color="white" letterSpacing="-0.02em" mb={6}>{t.tokens?.trusted_by || "Trusted By"}</Text>
        <Grid templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(3, 1fr)", lg: "repeat(6, 1fr)" }} gap={0}>
          {integrators.map((integrator) => <IntegratorCard key={integrator.name} {...integrator} />)}
        </Grid>
        <Text fontSize="13px" color="gray.600" mt={4}>{t.tokens?.trusted_by_more || "And many other wallets, DEXs, and dApps across the Starknet ecosystem."}</Text>
      </Box>

      {/* How It Works */}
      <Box px={{ base: 6, md: 12, lg: 24 }} mb={16}>
        <Flex align="center" gap={4} mb={6}>
          <Box w="3px" h="24px" bg="accent.500" />
          <Text fontSize="lg" fontWeight="700" color="white" letterSpacing="-0.02em">{t.tokens?.how_it_works || "How It Works"}</Text>
        </Flex>
        <Box border="1px solid" borderColor="whiteAlpha.100">
          <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={0}>
            <Box p={8} borderRight={{ base: "none", md: "1px solid" }} borderColor="whiteAlpha.100">
              <Text fontSize="48px" fontWeight="700" color="whiteAlpha.100" fontFamily="mono" mb={4}>01</Text>
              <Text fontSize="lg" fontWeight="600" color="white" mb={2}>{t.tokens?.step_1_title || "Submit"}</Text>
              <Text fontSize="14px" color="gray.500" lineHeight="1.6">{t.tokens?.step_1_desc || "Projects submit token details via community.avnu.fi with contract address, metadata, and logo."}</Text>
            </Box>
            <Box p={8} borderRight={{ base: "none", md: "1px solid" }} borderColor="whiteAlpha.100">
              <Text fontSize="48px" fontWeight="700" color="whiteAlpha.100" fontFamily="mono" mb={4}>02</Text>
              <Text fontSize="lg" fontWeight="600" color="white" mb={2}>{t.tokens?.step_2_title || "Review"}</Text>
              <Text fontSize="14px" color="gray.500" lineHeight="1.6">{t.tokens?.step_2_desc || "Community and avnu team review submissions. Verified tokens get the green checkmark."}</Text>
            </Box>
            <Box p={8}>
              <Text fontSize="48px" fontWeight="700" color="whiteAlpha.100" fontFamily="mono" mb={4}>03</Text>
              <Text fontSize="lg" fontWeight="600" color="white" mb={2}>{t.tokens?.step_3_title || "Propagate"}</Text>
              <Text fontSize="14px" color="gray.500" lineHeight="1.6">{t.tokens?.step_3_desc || "Verified tokens automatically appear across wallets and dApps using the avnu Token API."}</Text>
            </Box>
          </Grid>
        </Box>
      </Box>

      {/* Why This Matters */}
      <Box px={{ base: 6, md: 12, lg: 24 }}>
        <Box p={8} border="1px solid" borderColor="whiteAlpha.100" bg="whiteAlpha.025">
          <HStack spacing={3} mb={4}>
            <Icon as={FontAwesomeIcon} icon={faShieldAlt} color="accent.500" boxSize={5} />
            <Text fontSize="lg" fontWeight="600" color="white">{t.tokens?.why_matters_title || "Why This Matters"}</Text>
          </HStack>
          <Text fontSize="14px" color="gray.400" lineHeight="1.7" mb={6}>
            {t.tokens?.why_matters_description || "Fake tokens are a real problem. Scammers deploy tokens with the same name and symbol as legitimate projects to trick users. A canonical, verified token list protects the ecosystem. When you see a token in Ready, Braavos, or any major dApp on Starknet, it\u0027s been vetted through this system."}
          </Text>
          <HStack spacing={6} flexWrap="wrap">
            <ChakraLink href="https://community.avnu.fi" isExternal>
              <HStack spacing={2} color="accent.500" _hover={{ color: "accent.400" }}>
                <Text fontSize="14px" fontWeight="500">{t.tokens?.submit_token || "Submit a token"}</Text>
                <Icon as={FontAwesomeIcon} icon={faArrowRight} boxSize={3} />
              </HStack>
            </ChakraLink>
            <ChakraLink href="https://github.com/avnu-labs/tokens" isExternal>
              <HStack spacing={2} color="gray.500" _hover={{ color: "white" }}>
                <Icon as={FontAwesomeIcon} icon={faGithub} boxSize={4} />
                <Text fontSize="14px">{t.tokens?.view_on_github || "View on GitHub"}</Text>
              </HStack>
            </ChakraLink>
          </HStack>
        </Box>
      </Box>
    </Box>
    </>
  );
};

export default TokensPage;
