import { Box, Flex, Grid, HStack, Text, VStack } from "@chakra-ui/layout";
import { Button, Icon, Link as ChakraLink } from "@chakra-ui/react";
import Head from "next/head";
import { useTranslate } from "../context/TranslateProvider";
import {
  faSeedling,
  faRocket,
  faGasPump,
  faArrowRight,
  faCheck,
  faUsers,
  faCode,
  faHandshake,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { FC } from "react";

interface GrantProgram {
  name: string;
  provider: string;
  amount: string;
  description: string;
  icon: any;
  color: string;
  requirements: string[];
  bestFor: string;
  applyUrl: string;
  learnMoreUrl?: string;
}

// Grant Card
function GrantCard({ grant }: { grant: GrantProgram }) {
  const { t } = useTranslate();
  return (
    <Flex
      direction="column"
      p={8}
      h="full"
      border="1px solid"
      borderColor="whiteAlpha.100"
      bg="transparent"
      position="relative"
      _hover={{ borderColor: grant.color }}
      transition="border-color 0.2s ease"
    >
      {/* Icon */}
      <Box
        w="48px"
        h="48px"
        border="1px solid"
        borderColor="whiteAlpha.200"
        display="flex"
        alignItems="center"
        justifyContent="center"
        mb={6}
      >
        <Icon as={FontAwesomeIcon} icon={grant.icon} color={grant.color} boxSize={5} />
      </Box>

      {/* Header */}
      <Text
        fontSize="11px"
        color="gray.500"
        textTransform="uppercase"
        letterSpacing="0.1em"
        mb={2}
      >
        {grant.provider}
      </Text>
      <Text fontSize="2xl" fontWeight="700" color="white" mb={2}>
        {grant.name}
      </Text>
      <Text
        fontSize="32px"
        fontWeight="700"
        color={grant.color}
        fontFamily="mono"
        mb={4}
      >
        {grant.amount}
      </Text>

      {/* Description */}
      <Text fontSize="14px" color="gray.400" lineHeight="1.7" mb={6}>
        {grant.description}
      </Text>

      {/* Best For */}
      <Box mb={6} p={4} bg="whiteAlpha.025" border="1px solid" borderColor="whiteAlpha.100">
        <Text fontSize="11px" color="gray.500" textTransform="uppercase" letterSpacing="0.1em" mb={2}>
          {t.grants?.best_for || "Best For"}
        </Text>
        <Text fontSize="14px" color="white">
          {grant.bestFor}
        </Text>
      </Box>

      {/* Requirements */}
      <Text
        fontSize="11px"
        color="gray.500"
        textTransform="uppercase"
        letterSpacing="0.1em"
        mb={3}
      >
        {t.grants?.requirements || "Requirements"}
      </Text>
      <VStack align="flex-start" spacing={2} flex="1">
        {grant.requirements.map((req) => (
          <HStack key={`${grant.name}-${req}`} spacing={3} align="flex-start">
            <Icon as={FontAwesomeIcon} icon={faCheck} color={grant.color} boxSize={3} mt={1} />
            <Text fontSize="13px" color="gray.400">
              {req}
            </Text>
          </HStack>
        ))}
      </VStack>

      {/* CTA */}
      <HStack spacing={4} mt={8}>
        <ChakraLink href={grant.applyUrl} isExternal _hover={{ textDecoration: "none" }}>
          <Button
            bg={grant.color}
            color="black"
            borderRadius="0"
            fontWeight="600"
            fontSize="13px"
            _hover={{ opacity: 0.9 }}
            rightIcon={<Icon as={FontAwesomeIcon} icon={faArrowRight} boxSize={3} />}
          >
            {t.grants?.apply_now || "Apply Now"}
          </Button>
        </ChakraLink>
        {grant.learnMoreUrl && (
          <ChakraLink href={grant.learnMoreUrl} isExternal>
            <Text fontSize="13px" color="gray.500" _hover={{ color: "white" }}>
              {t.grants?.learn_more || "Learn more"}
            </Text>
          </ChakraLink>
        )}
      </HStack>
    </Flex>
  );
}

// Quick Stat
function QuickStat({ value, label, icon }: { value: string; label: string; icon: any }) {
  return (
    <HStack spacing={4} p={6} border="1px solid" borderColor="whiteAlpha.100">
      <Icon as={FontAwesomeIcon} icon={icon} color="accent.500" boxSize={5} />
      <VStack align="flex-start" spacing={0}>
        <Text fontSize="24px" fontWeight="700" color="white" fontFamily="mono">
          {value}
        </Text>
        <Text fontSize="12px" color="gray.500">
          {label}
        </Text>
      </VStack>
    </HStack>
  );
}

const GrantsPage: FC = () => {
  const { t } = useTranslate();

  const grants: GrantProgram[] = [
    {
      name: t.grants?.seed_name || "Seed Grants",
      provider: t.grants?.seed_provider || "Starknet Foundation",
      amount: t.grants?.seed_amount || "Up to $25K",
      description:
        t.grants?.seed_description || "Non-dilutive funding for early-stage teams with an MVP or proof of concept. Perfect for solo devs or small teams coming out of hackathons.",
      icon: faSeedling,
      color: "#22C55E",
      requirements: [
        t.grants?.seed_req_1 || "MVP or proof of concept built",
        t.grants?.seed_req_2 || "Active in Starknet community",
        t.grants?.seed_req_3 || "Clear 3-month roadmap",
        t.grants?.seed_req_4 || "Building on Starknet tools",
      ],
      bestFor: t.grants?.seed_best_for || "Solo devs or small teams post-hackathon with a working prototype",
      applyUrl: "https://www.starknet.io/grants/seed-grants/",
      learnMoreUrl: "https://www.starknet.io/grants/",
    },
    {
      name: t.grants?.growth_name || "Growth Grants",
      provider: t.grants?.growth_provider || "Starknet Foundation",
      amount: t.grants?.growth_amount || "Up to $1M",
      description:
        t.grants?.growth_description || "Significant non-dilutive funding for mature projects with live products and real traction. For teams ready to scale.",
      icon: faRocket,
      color: "#FF6B35",
      requirements: [
        t.grants?.growth_req_1 || "Live product in production",
        t.grants?.growth_req_2 || "Significant on-chain usage",
        t.grants?.growth_req_3 || "Strong ecosystem integration",
        t.grants?.growth_req_4 || "Clear growth milestones",
      ],
      bestFor: t.grants?.growth_best_for || "Teams with a live product and 1K+ monthly active users ready to scale",
      applyUrl: "https://www.starknet.io/grants/growth-grants/",
      learnMoreUrl: "https://www.starknet.io/grants/",
    },
    {
      name: t.grants?.propulsion_name || "Propulsion Program",
      provider: t.grants?.propulsion_provider || "avnu + Starknet Foundation",
      amount: t.grants?.propulsion_amount || "Up to $1M",
      description:
        t.grants?.propulsion_description || "Get your users' gas fees covered, reimbursed in USD. Let users transact for free on your dApp using avnu Paymaster infrastructure.",
      icon: faGasPump,
      color: "#00BFFF",
      requirements: [
        t.grants?.propulsion_req_1 || "Building on Starknet",
        t.grants?.propulsion_req_2 || "Valid gas sponsorship use case",
        t.grants?.propulsion_req_3 || "Integrate avnu Paymaster",
        t.grants?.propulsion_req_4 || "Track via Paymaster Dashboard",
      ],
      bestFor: t.grants?.propulsion_best_for || "dApps wanting to remove gas friction for users without upfront capital",
      applyUrl: "https://propulsion.starknet.org",
      learnMoreUrl: "https://docs.avnu.fi/docs/paymaster/propulsion-program",
    },
  ];

  return (
    <>
      <Head>
        <title>{t.grants?.seo_title || "Grants & Funding | Starknet Ecosystem"}</title>
        <meta
          name="description"
          content={t.grants?.seo_description || "Non-dilutive funding to build on Starknet. Seed grants up to $25K, growth grants up to $1M, gas sponsorship, and accelerator programs. No equity required."}
        />
        <meta property="og:title" content={t.grants?.seo_title || "Grants & Funding | Starknet Ecosystem"} />
        <meta
          property="og:description"
          content={t.grants?.seo_description || "Non-dilutive funding to build on Starknet. Seed grants, growth grants, gas sponsorship, and accelerator programs."}
        />
        <meta property="og:type" content="website" />
      </Head>
    <Box w="full" bg="black" minH="100vh" pt={32} pb={24}>
      {/* Hero */}
      <Box px={{ base: 6, md: 12, lg: 24 }} mb={16}>
        <VStack spacing={6} align="start" maxW="800px">
          <Flex align="center" gap={3}>
            <Box w="40px" h="1px" bg="accent.500" />
            <Text
              fontSize="12px"
              color="accent.500"
              textTransform="uppercase"
              letterSpacing="0.2em"
              fontWeight="500"
            >
              {t.grants?.hero_eyebrow || "Funding"}
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
            {t.grants?.hero_title_1 || "Grants &"}
            <br />
            <Text as="span" color="accent.500">
              {t.grants?.hero_title_2 || "Funding."}
            </Text>
          </Text>
          <Text
            fontSize={{ base: "16px", md: "18px" }}
            color="gray.500"
            maxW="600px"
            lineHeight="1.7"
          >
            {t.grants?.hero_description || "Non-dilutive funding to build on Starknet. From early-stage grants to growth capital to gas sponsorship. No equity required."}
          </Text>
        </VStack>
      </Box>

      {/* Quick Stats */}
      <Box px={{ base: 6, md: 12, lg: 24 }} mb={16}>
        <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={0}>
          <QuickStat value="Rolling" icon={faUsers} label={t.grants?.applications || "Applications"} />
          <QuickStat value="~4 weeks" icon={faHandshake} label={t.grants?.decision_time || "Decision Time"} />
          <QuickStat value="0%" icon={faCode} label={t.grants?.equity_required || "Equity Required"} />
        </Grid>
      </Box>

      {/* Grant Programs */}
      <Box px={{ base: 6, md: 12, lg: 24 }} mb={16}>
        <Flex align="center" gap={4} mb={6}>
          <Box w="3px" h="24px" bg="accent.500" />
          <Text
            fontSize="lg"
            fontWeight="700"
            color="white"
            letterSpacing="-0.02em"
          >
            {t.grants?.grant_programs || "Grant Programs"}
          </Text>
        </Flex>
        <Grid templateColumns={{ base: "1fr", lg: "repeat(3, 1fr)" }} gap={0}>
          {grants.map((grant) => (
            <GrantCard key={grant.name} grant={grant} />
          ))}
        </Grid>
      </Box>

      {/* XFounders Accelerator - Featured */}
      <Box px={{ base: 6, md: 12, lg: 24 }} mb={16}>
        <ChakraLink href="https://x-founders.com/" isExternal _hover={{ textDecoration: "none" }}>
          <Box
            p={8}
            border="1px solid"
            borderColor="whiteAlpha.100"
            cursor="pointer"
            _hover={{ borderColor: "#A855F7" }}
            transition="border-color 0.2s ease"
          >
            <Flex
              direction={{ base: "column", md: "row" }}
              justify="space-between"
              align={{ base: "flex-start", md: "center" }}
              gap={6}
            >
              <Box>
                <Text
                  fontSize="11px"
                  color="gray.500"
                  textTransform="uppercase"
                  letterSpacing="0.1em"
                  mb={2}
                >
                  {t.grants?.accelerator_label || "Cohort-Based Accelerator"}
                </Text>
                <Text fontSize="2xl" fontWeight="700" color="white" mb={2}>
                  {t.grants?.xfounders_title || "XFounders Accelerator"}
                </Text>
                <Text fontSize="14px" color="gray.400" lineHeight="1.7" maxW="600px">
                  {t.grants?.xfounders_description || "Starknet-focused accelerator program. Join a cohort of web3 founders with hands-on mentorship, ecosystem intros, and go-to-market support."}
                </Text>
              </Box>
              <Button
                bg="#A855F7"
                color="black"
                borderRadius="0"
                fontWeight="600"
                fontSize="13px"
                flexShrink={0}
                _hover={{ opacity: 0.9 }}
                rightIcon={<Icon as={FontAwesomeIcon} icon={faArrowRight} boxSize={3} />}
              >
                {t.grants?.xfounders_apply || "Apply"}
              </Button>
            </Flex>
          </Box>
        </ChakraLink>
      </Box>

      {/* Other Funding */}
      <Box px={{ base: 6, md: 12, lg: 24 }} mb={16}>
        <Text
          fontSize="lg"
          fontWeight="700"
          color="white"
          letterSpacing="-0.02em"
          mb={6}
        >
          {t.grants?.other_funding || "Other Funding Sources"}
        </Text>
        <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={0}>
          <ChakraLink href="https://www.thewp1.xyz/" isExternal _hover={{ textDecoration: "none" }}>
            <Box
              p={6}
              h="full"
              border="1px solid"
              borderColor="whiteAlpha.100"
              cursor="pointer"
              _hover={{ borderColor: "accent.500" }}
              transition="border-color 0.2s ease"
            >
              <HStack justify="space-between" mb={3}>
                <Text fontSize="lg" fontWeight="600" color="white">
                  {t.grants?.wp1_title || "The WP1"}
                </Text>
                <Icon as={FontAwesomeIcon} icon={faArrowRight} color="gray.500" boxSize={3} />
              </HStack>
              <Text fontSize="14px" color="gray.500">
                {t.grants?.wp1_description || "Starknet ecosystem accelerator and builder support program. Mentorship, resources, and funding for promising projects."}
              </Text>
            </Box>
          </ChakraLink>
          <ChakraLink href="https://www.starknet.io/community/" isExternal _hover={{ textDecoration: "none" }}>
            <Box
              p={6}
              h="full"
              border="1px solid"
              borderColor="whiteAlpha.100"
              cursor="pointer"
              _hover={{ borderColor: "accent.500" }}
              transition="border-color 0.2s ease"
            >
              <HStack justify="space-between" mb={3}>
                <Text fontSize="lg" fontWeight="600" color="white">
                  {t.grants?.starknet_community_title || "Starknet Community"}
                </Text>
                <Icon as={FontAwesomeIcon} icon={faArrowRight} color="gray.500" boxSize={3} />
              </HStack>
              <Text fontSize="14px" color="gray.500">
                {t.grants?.starknet_community_description || "Connect with builders, find co-founders, and discover opportunities through the official Starknet community channels."}
              </Text>
            </Box>
          </ChakraLink>
        </Grid>
      </Box>

    </Box>
    </>
  );
};

export default GrantsPage;
