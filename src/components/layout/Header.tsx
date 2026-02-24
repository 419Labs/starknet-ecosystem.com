import { Box, Flex, HStack, Text } from "@chakra-ui/layout";
import { Button, Hide, Icon, IconButton, Show, Menu, MenuButton, MenuList, MenuItem, Link as ChakraLink } from "@chakra-ui/react";
import { faBars, faArrowRight, faChevronDown, faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";
import { useState, useEffect, useRef } from "react";

import { useTranslate } from "../../context/TranslateProvider";

import Drawer from "./Drawer";
import Link from "./Link";

const addProjectUrl =
  "https://github.com/419Labs/starknet-ecosystem.com/blob/main/docs/add-project.md";

// STRK Price Ticker Component
function StrkPriceTicker() {
  const { t } = useTranslate();
  const [price, setPrice] = useState<number | null>(null);
  const [change24h, setChange24h] = useState<number | null>(null);
  const [isFlashing, setIsFlashing] = useState(false);
  const [flashDirection, setFlashDirection] = useState<"up" | "down" | null>(null);
  const prevPriceRef = useRef<number | null>(null);

  useEffect(() => {
    const fetchPrice = async () => {
      if (typeof document !== "undefined" && document.visibilityState === "hidden") {
        return;
      }
      try {
        const res = await fetch("https://starknet.impulse.avnu.fi/v3/tokens");
        const data = await res.json();
        const strk = data.find((t: any) => t.symbol === "STRK");
        if (strk) {
          const newPrice = strk.starknet?.usd || strk.global?.usd;
          const newChange = strk.starknet?.usdPriceChangePercentage24h || strk.global?.usdMarketCapChangePercentage24h;

          // Check if price changed for animation
          if (prevPriceRef.current !== null && newPrice !== prevPriceRef.current) {
            setFlashDirection(newPrice > prevPriceRef.current ? "up" : "down");
            setIsFlashing(true);
            setTimeout(() => setIsFlashing(false), 500);
          }

          prevPriceRef.current = newPrice;
          setPrice(newPrice);
          setChange24h(newChange);
        }
      } catch {
        console.error("Failed to fetch STRK price");
      }
    };

    fetchPrice();
    const interval = setInterval(fetchPrice, 30000); // Update every 30 seconds
    return () => clearInterval(interval);
  }, []);

  const isPositive = change24h !== null && change24h >= 0;

  return (
    <ChakraLink
      href="https://app.avnu.fi/en?sellToken=usdc&buyToken=strk"
      isExternal
      _hover={{ textDecoration: "none" }}
    >
      <Box
        position="relative"
        role="group"
        cursor="pointer"
      >
        {/* Default: Price display */}
        <HStack
          spacing={2}
          px={3}
          py={1.5}
          bg="whiteAlpha.050"
          border="1px solid"
          borderColor="whiteAlpha.100"
          _groupHover={{ opacity: 0 }}
          transition="opacity 0.15s ease"
        >
          {/* Live pulse indicator */}
          <Box position="relative">
            <Box
              w="6px"
              h="6px"
              borderRadius="full"
              bg={isPositive ? "#22C55E" : "#FF4444"}
              boxShadow={`0 0 8px ${isPositive ? "#22C55E" : "#FF4444"}`}
            />
            <Box
              position="absolute"
              top={0}
              left={0}
              w="6px"
              h="6px"
              borderRadius="full"
              bg={isPositive ? "#22C55E" : "#FF4444"}
              animation="ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite"
              opacity={0.75}
              sx={{
                "@keyframes ping": {
                  "0%": { transform: "scale(1)", opacity: 0.75 },
                  "75%, 100%": { transform: "scale(2)", opacity: 0 },
                },
              }}
            />
          </Box>

          <Text fontSize="11px" color="gray.500" fontWeight="600">
            STRK
          </Text>

          <Text
            fontSize="13px"
            fontWeight="500"
            fontFamily="var(--font-geist-pixel-square)"
            color="white"
            transition="all 0.2s ease"
            transform={isFlashing ? "scale(1.05)" : "scale(1)"}
            textShadow={
              isFlashing
                ? flashDirection === "up"
                  ? "0 0 10px #22C55E"
                  : "0 0 10px #FF4444"
                : "none"
            }
          >
            ${price?.toFixed(4) || "---"}
          </Text>

          {change24h !== null && (
            <Text
              fontSize="11px"
              fontWeight="500"
              fontFamily="var(--font-geist-pixel-square)"
              color={isPositive ? "#22C55E" : "#FF4444"}
            >
              {isPositive ? "+" : ""}{change24h.toFixed(2)}%
            </Text>
          )}
        </HStack>

        {/* Hover: Trade button */}
        <HStack
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          spacing={2}
          px={3}
          py={1.5}
          bg="accent.500"
          justify="center"
          opacity={0}
          _groupHover={{ opacity: 1 }}
          transition="opacity 0.15s ease"
        >
          <Text fontSize="12px" fontWeight="700" color="white">
            {t.header?.trade_strk || "Trade $STRK"}
          </Text>
          <Icon as={FontAwesomeIcon} icon={faArrowRight} color="white" boxSize={3} />
        </HStack>
      </Box>
    </ChakraLink>
  );
}

const LOCALE_LABELS: Record<string, string> = {
  en: "EN",
  es: "ES",
  zh_CN: "中文",
  ko: "한국어",
  ja: "日本語",
  fr: "FR",
  de: "DE",
  tr: "TR",
  pt: "PT",
  it: "IT",
  pl: "PL",
  zh_TW: "繁體",
};

function Header() {
  const { t, locale } = useTranslate();
  const router = useRouter();
  const { pathname } = router;
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const switchLocale = (newLocale: string) => {
    router.push(router.pathname, router.asPath, { locale: newLocale });
  };

  const navLinks = [
    { href: `/${locale}`, label: t.header?.explore || "Explore", path: "/" },
    { href: `/${locale}/academy`, label: t.header?.build || "Build", path: "/academy" },
    { href: `/${locale}/grants`, label: t.header?.grants || "Grants", path: "/grants" },
    { href: `/${locale}/metrics`, label: t.header?.metrics || "Metrics", path: "/metrics" },
  ];

  const moreLinks = [
    { href: `/${locale}/tokens`, label: t.header?.tokens || "Tokens", path: "/tokens" },
    { href: `/${locale}/jobs`, label: t.header?.jobs || "Jobs", path: "/jobs" },
  ];

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      zIndex={1000}
      transition="all 0.3s ease"
    >
      <Flex
        w="full"
        py={3}
        px={{ base: 4, md: 8, lg: 16 }}
        direction="row"
        justify="space-between"
        align="center"
        bg={scrolled ? "rgba(0, 0, 0, 0.95)" : "transparent"}
        backdropFilter={scrolled ? "blur(20px)" : "none"}
        borderBottom="1px solid"
        borderColor={scrolled ? "whiteAlpha.100" : "transparent"}
        transition="all 0.3s ease"
      >
        {/* Logo */}
        <Link href={`/${locale}`}>
          <HStack spacing={3} cursor="pointer">
            <Box
              as="img"
              src="/favicon-32x32.png"
              alt="Starknet"
              w="32px"
              h="32px"
            />
            <Text
              fontSize="14px"
              fontWeight="600"
              color="white"
              letterSpacing="-0.02em"
              display={{ base: "none", lg: "block" }}
            >
              STARKNET
            </Text>
          </HStack>
        </Link>

        {/* Center nav */}
        <Hide below="lg">
          <HStack spacing={0}>
            {navLinks.map((link) => {
              const isActive = pathname === link.path;
              return (
                <Link key={link.path} href={link.href}>
                  <Box
                    px={4}
                    py={2}
                    position="relative"
                    cursor="pointer"
                    role="group"
                  >
                    <Text
                      fontSize="12px"
                      fontWeight="500"
                      color={isActive ? "white" : "gray.500"}
                      transition="color 0.2s ease"
                      _groupHover={{ color: "white" }}
                      textTransform="uppercase"
                      letterSpacing="0.05em"
                    >
                      {link.label}
                    </Text>
                    {/* Active indicator */}
                    <Box
                      position="absolute"
                      bottom={0}
                      left={4}
                      right={4}
                      h="1px"
                      bg="accent.500"
                      opacity={isActive ? 1 : 0}
                      transform={isActive ? "scaleX(1)" : "scaleX(0)"}
                      transition="all 0.2s ease"
                      _groupHover={{
                        opacity: 1,
                        transform: "scaleX(1)",
                      }}
                    />
                  </Box>
                </Link>
              );
            })}

            {/* More dropdown */}
            <Menu>
              <MenuButton
                px={4}
                py={2}
                cursor="pointer"
                _hover={{ "& > div": { color: "white" } }}
              >
                <HStack spacing={1}>
                  <Text
                    fontSize="12px"
                    fontWeight="500"
                    color={moreLinks.some(l => pathname === l.path) ? "white" : "gray.500"}
                    textTransform="uppercase"
                    letterSpacing="0.05em"
                    transition="color 0.2s ease"
                  >
                    {t.header?.more || "More"}
                  </Text>
                  <Icon
                    as={FontAwesomeIcon}
                    icon={faChevronDown}
                    boxSize={2}
                    color={moreLinks.some(l => pathname === l.path) ? "white" : "gray.500"}
                  />
                </HStack>
              </MenuButton>
              <MenuList
                bg="black"
                border="1px solid"
                borderColor="whiteAlpha.200"
                borderRadius="0"
                py={2}
                minW="160px"
              >
                {moreLinks.map((link) => (
                  <Link key={link.path} href={link.href}>
                    <MenuItem
                      bg="transparent"
                      color={pathname === link.path ? "white" : "gray.400"}
                      fontSize="13px"
                      px={4}
                      py={2}
                      _hover={{ bg: "whiteAlpha.100", color: "white" }}
                    >
                      {link.label}
                    </MenuItem>
                  </Link>
                ))}
              </MenuList>
            </Menu>
          </HStack>
        </Hide>

        {/* Right section */}
        <HStack spacing={3}>
          {/* STRK Price Ticker */}
          <Hide below="md">
            <StrkPriceTicker />
          </Hide>

          {/* Language Switcher */}
          <Hide below="md">
            <Menu>
              <MenuButton
                px={2}
                py={1}
                cursor="pointer"
                _hover={{ "& > div": { color: "white" } }}
              >
                <HStack spacing={1}>
                  <Icon as={FontAwesomeIcon} icon={faGlobe} boxSize={3} color="gray.500" />
                  <Text
                    fontSize="11px"
                    fontWeight="600"
                    color="gray.500"
                    textTransform="uppercase"
                    letterSpacing="0.05em"
                  >
                    {LOCALE_LABELS[locale || "en"] || "EN"}
                  </Text>
                  <Icon as={FontAwesomeIcon} icon={faChevronDown} boxSize={2} color="gray.500" />
                </HStack>
              </MenuButton>
              <MenuList
                bg="black"
                border="1px solid"
                borderColor="whiteAlpha.200"
                borderRadius="0"
                py={2}
                minW="100px"
              >
                {Object.entries(LOCALE_LABELS).map(([code, label]) => (
                  <MenuItem
                    key={code}
                    bg="transparent"
                    color={locale === code ? "white" : "gray.400"}
                    fontSize="13px"
                    px={4}
                    py={2}
                    _hover={{ bg: "whiteAlpha.100", color: "white" }}
                    onClick={() => switchLocale(code)}
                    fontWeight={locale === code ? "600" : "400"}
                  >
                    {label}
                  </MenuItem>
                ))}
              </MenuList>
            </Menu>
          </Hide>

          <Hide below="lg">
            <Link isExternal href={addProjectUrl}>
              <Button
                h="36px"
                px={4}
                bg="white"
                color="black"
                borderRadius="0"
                fontWeight="600"
                fontSize="11px"
                textTransform="uppercase"
                letterSpacing="0.05em"
                _hover={{
                  bg: "accent.500",
                  color: "white",
                }}
                rightIcon={<Icon as={FontAwesomeIcon} icon={faArrowRight} boxSize={3} />}
              >
                {t.header?.submit || "Submit"}
              </Button>
            </Link>
          </Hide>

          <Show below="lg">
            <IconButton
              aria-label="Open menu"
              icon={<FontAwesomeIcon icon={faBars} />}
              variant="ghost"
              color="white"
              fontSize="xl"
              onClick={() => setDrawerOpen(true)}
              _hover={{ bg: "whiteAlpha.100" }}
            />
            <Drawer
              links={[
                { href: `/${locale}`, label: t.header?.explore || "Explore" },
                { href: `/${locale}/academy`, label: t.header?.build || "Build" },
                { href: `/${locale}/grants`, label: t.header?.grants || "Grants" },
                { href: `/${locale}/metrics`, label: t.header?.metrics || "Metrics" },
                { href: `/${locale}/tokens`, label: t.header?.tokens || "Tokens" },
                { href: `/${locale}/jobs`, label: t.header?.jobs || "Jobs" },
                { isExternal: true, href: addProjectUrl, label: t.header?.submit_project || "Submit Project" },
              ]}
              isOpen={isDrawerOpen}
              onClose={() => setDrawerOpen(false)}
              localeLabels={LOCALE_LABELS}
              currentLocale={locale}
              onLocaleChange={switchLocale}
            />
          </Show>
        </HStack>
      </Flex>
    </Box>
  );
}

export default Header;
