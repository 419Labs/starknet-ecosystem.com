import { Box, Flex, Grid, HStack, Text, VStack } from "@chakra-ui/layout";
import { Button, Icon, Link as ChakraLink } from "@chakra-ui/react";
import Head from "next/head";
import { useTranslate } from "../../context/TranslateProvider";
import {
  faArrowRight,
  faBook,
  faCode,
  faGraduationCap,
  faRocket,
  faTerminal,
  faWrench,
  faRobot,
  faPlay,
  faExternalLinkAlt,
  faCube,
  faShieldAlt,
  faBrain,
  faGasPump,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faDiscord, faTelegram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { FC } from "react";

// Resource Card Component
function ResourceCard({
  title,
  description,
  href,
  icon,
  tag,
  featured = false,
}: {
  title: string;
  description: string;
  href: string;
  icon: any;
  tag?: string;
  featured?: boolean;
}) {
  return (
    <ChakraLink href={href} isExternal _hover={{ textDecoration: "none" }}>
      <Box
        h="full"
        minH={featured ? "280px" : "200px"}
        p={6}
        bg="transparent"
        border="1px solid"
        borderColor="whiteAlpha.100"
        position="relative"
        cursor="pointer"
        role="group"
        _hover={{
          borderColor: "accent.500",
          "& .card-arrow": { opacity: 1, transform: "translateX(0)" },
        }}
        transition="border-color 0.2s ease"
      >
        {/* Tag */}
        {tag && (
          <Text
            position="absolute"
            top={6}
            right={6}
            fontSize="10px"
            color="accent.500"
            textTransform="uppercase"
            letterSpacing="0.1em"
            fontWeight="600"
          >
            {tag}
          </Text>
        )}

        {/* Icon */}
        <Box
          w="48px"
          h="48px"
          mb={5}
          display="flex"
          alignItems="center"
          justifyContent="center"
          border="1px solid"
          borderColor="whiteAlpha.200"
          color="gray.400"
          _groupHover={{ borderColor: "accent.500", color: "accent.500" }}
          transition="all 0.2s ease"
        >
          <Icon as={FontAwesomeIcon} icon={icon} boxSize={5} />
        </Box>

        {/* Content */}
        <Text
          fontSize={featured ? "xl" : "lg"}
          fontWeight="600"
          color="white"
          mb={2}
          letterSpacing="-0.02em"
        >
          {title}
        </Text>
        <Text
          fontSize="14px"
          color="gray.500"
          lineHeight="1.6"
          noOfLines={3}
        >
          {description}
        </Text>

        {/* Arrow */}
        <Box
          className="card-arrow"
          position="absolute"
          bottom={6}
          right={6}
          opacity={0}
          transform="translateX(-10px)"
          transition="all 0.2s ease"
        >
          <Icon as={FontAwesomeIcon} icon={faArrowRight} color="accent.500" />
        </Box>
      </Box>
    </ChakraLink>
  );
}

// Section Header Component
function SectionHeader({ title, description, highlight = false }: { title: string; description?: string; highlight?: boolean }) {
  return (
    <Flex align="flex-start" gap={4} mb={8}>
      {highlight && (
        <Box w="3px" bg="accent.500" alignSelf="stretch" minH="40px" />
      )}
      <VStack align="flex-start" spacing={1}>
        <Text
          fontSize="lg"
          fontWeight="700"
          color="white"
          letterSpacing="-0.02em"
        >
          {title}
        </Text>
        {description && (
          <Text fontSize="14px" color="gray.400">
            {description}
          </Text>
        )}
      </VStack>
    </Flex>
  );
}

// Quick Link Component
function QuickLink({ href, label, icon }: { href: string; label: string; icon: any }) {
  return (
    <ChakraLink
      href={href}
      isExternal
      display="flex"
      alignItems="center"
      gap={3}
      py={3}
      color="gray.400"
      _hover={{ color: "white" }}
      transition="color 0.15s ease"
    >
      <Icon as={FontAwesomeIcon} icon={icon} boxSize={4} />
      <Text fontSize="14px">{label}</Text>
      <Icon as={FontAwesomeIcon} icon={faExternalLinkAlt} boxSize={3} ml="auto" opacity={0.5} />
    </ChakraLink>
  );
}

const AcademyPage: FC = () => {
  const { t } = useTranslate();

  const interactiveTools = [
    {
      title: t.academy?.cairo_playground_title || "Cairo Playground",
      description: t.academy?.cairo_playground_desc || "Write, compile, and debug Cairo code directly in your browser. No setup required.",
      href: "https://www.cairo-lang.org/cairovm/",
      icon: faPlay,
      tag: t.academy?.cairo_playground_tag || "Interactive",
      featured: true,
    },
    {
      title: t.academy?.starknet_agent_title || "Starknet Agent",
      description: t.academy?.starknet_agent_desc || "AI-powered assistant that answers questions about Starknet and Cairo with source citations.",
      href: "https://ask.starknet.io/",
      icon: faRobot,
      tag: t.academy?.starknet_agent_tag || "AI",
      featured: true,
    },
    {
      title: t.academy?.starklings_title || "Starklings",
      description: t.academy?.starklings_desc || "Learn Cairo through interactive exercises. Fix broken code, build understanding step by step.",
      href: "https://starklings.app/",
      icon: faGraduationCap,
      tag: t.academy?.starklings_tag || "Exercises",
      featured: true,
    },
  ];

  const documentation = [
    {
      title: t.academy?.cairo_book_title || "Cairo Book",
      description: t.academy?.cairo_book_desc || "The complete guide to Cairo. 29 chapters from basics to Cairo VM internals.",
      href: "https://www.starknet.io/cairo-book/",
      icon: faBook,
    },
    {
      title: t.academy?.starknet_docs_title || "Starknet Docs",
      description: t.academy?.starknet_docs_desc || "Official documentation. Build smart contracts, run nodes, understand the protocol.",
      href: "https://docs.starknet.io/",
      icon: faCode,
    },
    {
      title: t.academy?.tutorials_title || "Tutorials",
      description: t.academy?.tutorials_desc || "Video basecamps, hands-on workshops, and guided projects in multiple languages.",
      href: "https://www.starknet.io/tutorials/",
      icon: faRocket,
    },
  ];

  const developerTools = [
    {
      title: t.academy?.scarb_title || "Scarb",
      description: t.academy?.scarb_desc || "Cairo package manager and build toolchain.",
      href: "https://docs.swmansion.com/scarb/",
      icon: faWrench,
    },
    {
      title: t.academy?.starknet_foundry_title || "Starknet Foundry",
      description: t.academy?.starknet_foundry_desc || "Testing framework and development toolkit.",
      href: "https://foundry-rs.github.io/starknet-foundry/",
      icon: faTerminal,
    },
    {
      title: t.academy?.starknet_devnet_title || "Starknet Devnet",
      description: t.academy?.starknet_devnet_desc || "Local testnet for rapid development.",
      href: "https://0xspaceshard.github.io/starknet-devnet/",
      icon: faCube,
    },
    {
      title: t.academy?.paymaster_title || "Paymaster",
      description: t.academy?.paymaster_desc || "Gasfree transactions. Let users pay fees in any token or sponsor gas entirely.",
      href: "https://docs.avnu.fi/docs/paymaster/overview",
      icon: faGasPump,
    },
  ];

  const programs = [
    {
      title: t.academy?.founder_basecamp_title || "Founder Basecamp",
      description: t.academy?.founder_basecamp_desc || "Free 5-week program for non-technical founders. Pitching, validation, fundraising — ending with Demo Day and co-founder matching.",
      href: "https://lu.ma/FounderBasecamp",
      icon: faUsers,
      tag: t.academy?.founder_basecamp_tag || "Founders",
      featured: true,
    },
  ];

  const advanced = [
    {
      title: t.academy?.sn_stack_title || "SN Stack",
      description: t.academy?.sn_stack_desc || "Build custom appchains with Dojo, Madara, or StarkWare Sequencer.",
      href: "https://www.starknet.io/sn-stack/",
      icon: faCube,
      tag: t.academy?.sn_stack_tag || "Appchains",
    },
    {
      title: t.academy?.verifiable_ai_title || "Verifiable AI Agents",
      description: t.academy?.verifiable_ai_desc || "Build AI agents with onchain verification. Up to $1M in grants available.",
      href: "https://www.starknet.io/verifiable-ai-agents/",
      icon: faBrain,
      tag: t.academy?.verifiable_ai_tag || "AI + Crypto",
    },
    {
      title: t.academy?.modular_stack_title || "Modular Stack",
      description: t.academy?.modular_stack_desc || "Explore the modular infrastructure: consensus, DA, execution, proving.",
      href: "https://www.starknet.io/modular/",
      icon: faShieldAlt,
      tag: t.academy?.modular_stack_tag || "Infrastructure",
    },
  ];

  const sdks = [
    { name: "starknet.js", href: "https://www.starknetjs.com/" },
    { name: "starknet.py", href: "https://starknetpy.readthedocs.io/" },
    { name: "starknet-rs", href: "https://github.com/xJonathanLEI/starknet-rs" },
    { name: "starknet.go", href: "https://github.com/NethermindEth/starknet.go" },
    { name: "avnu SDK", href: "https://docs.avnu.fi/docs/swap-sdk/overview" },
  ];

  return (
    <>
    <Head>
      <title>{t.academy?.seo_title || "Learn to Build on Starknet | Developer Hub"}</title>
      <meta name="description" content={t.academy?.seo_description || "From zero to production on Starknet. Interactive tools, Cairo tutorials, official docs, and a clear path to shipping your first smart contract."} />
      <meta property="og:title" content={t.academy?.seo_title || "Learn to Build on Starknet | Developer Hub"} />
      <meta property="og:description" content={t.academy?.seo_description || "From zero to production on Starknet. Interactive tools, Cairo tutorials, and a clear path to shipping your first smart contract."} />
      <meta property="og:type" content="website" />
    </Head>
    <Box w="full" bg="black" minH="100vh" pt={32} pb={24}>
      {/* Hero Section */}
      <Box px={{ base: 6, md: 12, lg: 24 }} mb={20}>
        <VStack spacing={6} align="start" maxW="900px">
          <Flex align="center" gap={3}>
            <Box w="40px" h="1px" bg="accent.500" />
            <Text
              fontSize="12px"
              color="accent.500"
              textTransform="uppercase"
              letterSpacing="0.2em"
              fontWeight="500"
            >
              {t.academy?.hero_eyebrow || "Developer Hub"}
            </Text>
          </Flex>
          <Text
            as="h1"
            fontSize={{ base: "36px", md: "56px", lg: "72px" }}
            fontWeight="700"
            color="white"
            lineHeight="0.95"
            letterSpacing="-0.04em"
          >
            {t.academy?.hero_title_1 || "Learn to build"}
            <br />
            <Text as="span" color="accent.500">
              {t.academy?.hero_title_2 || "the unimaginable."}
            </Text>
          </Text>
          <Text
            fontSize={{ base: "16px", md: "18px" }}
            color="gray.500"
            maxW="600px"
            lineHeight="1.7"
          >
            {t.academy?.hero_description || "Everything you need to start building on Starknet. Interactive tools, official docs, and a path from zero to production."}
          </Text>
        </VStack>
      </Box>

      {/* Starknet Academy - Featured Launch */}
      <Box px={{ base: 6, md: 12, lg: 24 }} mb={20}>
        <ChakraLink href="https://academy.starknet.org/" isExternal _hover={{ textDecoration: "none" }}>
          <Flex
            direction={{ base: "column", lg: "row" }}
            align={{ base: "flex-start", lg: "center" }}
            justify="space-between"
            p={{ base: 8, lg: 12 }}
            border="1px solid"
            borderColor="accent.500"
            bg="rgba(232,121,42,0.04)"
            position="relative"
            overflow="hidden"
            role="group"
            _hover={{ bg: "rgba(232,121,42,0.08)" }}
            transition="background 0.2s ease"
          >
            {/* Background accent glow */}
            <Box
              position="absolute"
              top="-50%"
              right="-10%"
              w="400px"
              h="400px"
              borderRadius="full"
              bg="accent.500"
              filter="blur(160px)"
              opacity={0.06}
              pointerEvents="none"
            />

            <VStack align="flex-start" spacing={3} maxW="600px" position="relative">
              <HStack spacing={3}>
                <Text
                  fontSize="10px"
                  color="black"
                  bg="accent.500"
                  px={2}
                  py={0.5}
                  fontWeight="700"
                  textTransform="uppercase"
                  letterSpacing="0.1em"
                >
                  {t.academy?.academy_badge || "New"}
                </Text>
                <Text
                  fontSize="11px"
                  color="accent.500"
                  textTransform="uppercase"
                  letterSpacing="0.1em"
                  fontWeight="600"
                >
                  {t.academy?.academy_provider || "Starknet Foundation"}
                </Text>
              </HStack>
              <Text
                fontSize={{ base: "24px", lg: "32px" }}
                fontWeight="700"
                color="white"
                letterSpacing="-0.03em"
              >
                {t.academy?.academy_title || "Starknet Academy"}
              </Text>
              <Text fontSize="15px" color="gray.400" lineHeight="1.6">
                {t.academy?.academy_description || "The official learning platform by the Starknet Foundation. Structured courses, hands-on projects, and certifications. From Cairo basics to production-ready smart contracts."}
              </Text>
            </VStack>

            <Button
              mt={{ base: 6, lg: 0 }}
              h="48px"
              px={8}
              bg="accent.500"
              color="white"
              borderRadius="0"
              fontWeight="600"
              fontSize="14px"
              _hover={{ bg: "accent.600" }}
              _groupHover={{ bg: "accent.600" }}
              rightIcon={<Icon as={FontAwesomeIcon} icon={faArrowRight} />}
              flexShrink={0}
            >
              {t.academy?.academy_cta || "Start Learning"}
            </Button>
          </Flex>
        </ChakraLink>
      </Box>

      {/* Interactive Tools - Featured Section */}
      <Box px={{ base: 6, md: 12, lg: 24 }} mb={20}>
        <SectionHeader
          title={t.academy?.start_here || "Start Here"}
          description={t.academy?.start_here_desc || "Interactive tools to learn by doing"}
          highlight
        />
        <Grid
          templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
          gap={0}
        >
          {interactiveTools.map((tool) => (
            <ResourceCard
              key={tool.title}
              {...tool}
              featured
            />
          ))}
        </Grid>
      </Box>

      {/* Programs */}
      <Box px={{ base: 6, md: 12, lg: 24 }} mb={20}>
        <SectionHeader
          title={t.academy?.programs || "Programs"}
          description={t.academy?.programs_desc || "Structured programs for builders and founders"}
          highlight
        />
        <Grid
          templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
          gap={0}
        >
          {programs.map((program) => (
            <ResourceCard
              key={program.title}
              {...program}
              featured
            />
          ))}
        </Grid>
      </Box>

      {/* Documentation */}
      <Box px={{ base: 6, md: 12, lg: 24 }} mb={20}>
        <SectionHeader
          title={t.academy?.documentation || "Documentation"}
          description={t.academy?.documentation_desc || "Official guides and references"}
        />
        <Grid
          templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
          gap={0}
        >
          {documentation.map((doc) => (
            <ResourceCard key={doc.title} {...doc} />
          ))}
        </Grid>
      </Box>

      {/* Two Column Layout: Tools + SDKs */}
      <Box px={{ base: 6, md: 12, lg: 24 }} mb={20}>
        <Grid templateColumns={{ base: "1fr", lg: "2fr 1fr" }} gap={0}>
          {/* Developer Tools */}
          <Box borderRight={{ lg: "1px solid" }} borderColor="whiteAlpha.100" pr={{ lg: 12 }}>
            <SectionHeader title={t.academy?.developer_tools || "Developer Tools"} />
            <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={0}>
              {developerTools.map((tool) => (
                <ResourceCard key={tool.title} {...tool} />
              ))}
            </Grid>
          </Box>

          {/* SDKs */}
          <Box pl={{ lg: 12 }} pt={{ base: 12, lg: 0 }}>
            <SectionHeader title={t.academy?.sdks || "SDKs"} />
            <VStack align="stretch" spacing={0} border="1px solid" borderColor="whiteAlpha.100" divider={<Box h="1px" bg="whiteAlpha.100" />}>
              {sdks.map((sdk) => (
                <QuickLink key={sdk.name} href={sdk.href} label={sdk.name} icon={faCode} />
              ))}
              <ChakraLink
                href="https://docs.starknet.io/learn/cheatsheets/tools"
                isExternal
                display="flex"
                alignItems="center"
                gap={3}
                py={3}
                px={4}
                bg="whiteAlpha.050"
                color="accent.500"
                _hover={{ bg: "whiteAlpha.100" }}
                transition="background 0.15s ease"
              >
                <Text fontSize="13px" fontWeight="500">{t.academy?.view_all_tools || "View all tools →"}</Text>
              </ChakraLink>
            </VStack>
          </Box>
        </Grid>
      </Box>

      {/* Advanced Topics */}
      <Box px={{ base: 6, md: 12, lg: 24 }} mb={20}>
        <SectionHeader
          title={t.academy?.advanced || "Advanced"}
          description={t.academy?.advanced_desc || "Go deeper into Starknet's capabilities"}
          highlight
        />
        <Grid
          templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
          gap={0}
        >
          {advanced.map((item) => (
            <ResourceCard key={item.title} {...item} />
          ))}
        </Grid>
      </Box>

      {/* Version Releases + Community */}
      <Box px={{ base: 6, md: 12, lg: 24 }}>
        <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={0}>
          {/* What's New */}
          <Box
            p={8}
            border="1px solid"
            borderColor="whiteAlpha.100"
            borderRight={{ lg: "none" }}
          >
            <SectionHeader title={t.academy?.whats_new || "What's New"} />
            <VStack align="stretch" spacing={4}>
              <ChakraLink
                href="https://www.starknet.io/developers/version-releases/"
                isExternal
                _hover={{ textDecoration: "none" }}
              >
                <Box
                  p={5}
                  border="1px solid"
                  borderColor="whiteAlpha.100"
                  _hover={{ borderColor: "accent.500" }}
                  transition="border-color 0.2s ease"
                >
                  <Text fontSize="xs" color="accent.500" mb={2}>{t.academy?.roadmap || "ROADMAP"}</Text>
                  <Text fontSize="lg" fontWeight="600" color="white" mb={1}>
                    {t.academy?.version_releases || "Version Releases"}
                  </Text>
                  <Text fontSize="14px" color="gray.500">
                    {t.academy?.version_releases_desc || "Track upcoming features through 2026. Breaking changes, new capabilities."}
                  </Text>
                </Box>
              </ChakraLink>
              <ChakraLink
                href="https://www.starknet.io/blog/"
                isExternal
                _hover={{ textDecoration: "none" }}
              >
                <Box
                  p={5}
                  border="1px solid"
                  borderColor="whiteAlpha.100"
                  _hover={{ borderColor: "accent.500" }}
                  transition="border-color 0.2s ease"
                >
                  <Text fontSize="xs" color="gray.500" mb={2}>{t.academy?.blog || "BLOG"}</Text>
                  <Text fontSize="lg" fontWeight="600" color="white" mb={1}>
                    {t.academy?.latest_updates || "Latest Updates"}
                  </Text>
                  <Text fontSize="14px" color="gray.500">
                    {t.academy?.latest_updates_desc || "Protocol updates, ecosystem news, deep dives."}
                  </Text>
                </Box>
              </ChakraLink>
            </VStack>
          </Box>

          {/* Community */}
          <Box p={8} border="1px solid" borderColor="whiteAlpha.100">
            <SectionHeader title={t.academy?.community || "Community"} />
            <VStack align="stretch" spacing={0} divider={<Box h="1px" bg="whiteAlpha.100" />}>
              <QuickLink
                href="https://discord.gg/starknet"
                label="Discord"
                icon={faDiscord}
              />
              <QuickLink
                href="https://t.me/starknet_ecosystem"
                label="Telegram"
                icon={faTelegram}
              />
              <QuickLink
                href="https://github.com/starkware-libs"
                label="GitHub"
                icon={faGithub}
              />
              <QuickLink
                href="https://community.starknet.io/"
                label="Forum"
                icon={faBook}
              />
            </VStack>
            <Box mt={6} pt={6} borderTop="1px solid" borderColor="whiteAlpha.100">
              <Text fontSize="13px" color="gray.600" mb={4}>
                {t.academy?.need_help || "Need help? Ask the AI assistant."}
              </Text>
              <ChakraLink href="https://ask.starknet.io/" isExternal>
                <Button
                  w="full"
                  h="48px"
                  bg="white"
                  color="black"
                  borderRadius="0"
                  fontWeight="600"
                  fontSize="13px"
                  _hover={{ bg: "accent.500", color: "white" }}
                  rightIcon={<Icon as={FontAwesomeIcon} icon={faRobot} />}
                >
                  {t.academy?.open_starknet_agent || "Open Starknet Agent"}
                </Button>
              </ChakraLink>
            </Box>
          </Box>
        </Grid>
      </Box>
    </Box>
    </>
  );
};

export default AcademyPage;
