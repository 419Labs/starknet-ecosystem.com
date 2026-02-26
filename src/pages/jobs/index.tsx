import { Box, Flex, Grid, HStack, Text, VStack } from "@chakra-ui/layout";
import { Button, Icon, Link as ChakraLink } from "@chakra-ui/react";
import {
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { NextPage } from "next";
import Head from "next/head";

import { useTranslate } from "../../context/TranslateProvider";

// Job Board Card
function JobBoardCard({
  title,
  description,
  href,
  label,
  primary = false,
}: {
  title: string;
  description: string;
  href: string;
  label: string;
  primary?: boolean;
}) {
  const { t } = useTranslate();
  return (
    <ChakraLink href={href} isExternal _hover={{ textDecoration: "none" }}>
      <Box
        h="full"
        minH="200px"
        p={8}
        bg={primary ? "accent.500" : "transparent"}
        border="1px solid"
        borderColor={primary ? "accent.500" : "whiteAlpha.100"}
        position="relative"
        cursor="pointer"
        role="group"
        _hover={{
          borderColor: primary ? "accent.400" : "accent.500",
          transform: "translateY(-4px)",
        }}
        transition="all 0.2s ease"
      >
        {/* Label */}
        <Text
          fontSize="10px"
          color={primary ? "whiteAlpha.700" : "gray.500"}
          textTransform="uppercase"
          letterSpacing="0.1em"
          fontWeight="600"
          mb={4}
        >
          {label}
        </Text>

        {/* Title */}
        <Text
          fontSize="2xl"
          fontWeight="700"
          color={primary ? "white" : "white"}
          mb={3}
          letterSpacing="-0.02em"
        >
          {title}
        </Text>

        {/* Description */}
        <Text
          fontSize="14px"
          color={primary ? "whiteAlpha.800" : "gray.500"}
          lineHeight="1.6"
          mb={6}
        >
          {description}
        </Text>

        {/* CTA */}
        <HStack
          color={primary ? "white" : "accent.500"}
          fontSize="14px"
          fontWeight="500"
        >
          <Text>{t.jobs?.view_positions || "View positions"}</Text>
          <Icon as={FontAwesomeIcon} icon={faArrowRight} boxSize={3} />
        </HStack>
      </Box>
    </ChakraLink>
  );
}

const JobsPage: NextPage = () => {
  const { t, locale } = useTranslate();

  const jobBoards = [
    {
      title: t.jobs?.board_starknet_foundation_title || "Starknet Foundation",
      description: t.jobs?.board_starknet_foundation_desc || "Core positions at the Starknet Foundation. Marketing, partnerships, ecosystem development.",
      href: "https://www.starknet.io/careers#jobs",
      label: t.jobs?.official || "Official",
      primary: true,
    },
    {
      title: t.jobs?.board_starkware_title || "StarkWare",
      description: t.jobs?.board_starkware_desc || "Engineering and research roles at the team behind Starknet's core technology.",
      href: "https://starkware.co/careers/",
      label: t.jobs?.core_team || "Core Team",
    },
    {
      title: t.jobs?.board_ecosystem_title || "Ecosystem Jobs",
      description: t.jobs?.board_ecosystem_desc || "Positions at projects building on Starknet. DeFi, gaming, infrastructure, and more.",
      href: "https://www.starknet.io/jobs/",
      label: t.jobs?.community || "Community",
    },
  ];

  return (
    <>
    <Head>
      <title>{t.jobs?.seo_title || "Starknet Jobs | Build the Future of ZK"}</title>
      <meta name="description" content={t.jobs?.seo_description || "Join the teams building Starknet. Core protocol, DeFi, gaming, and infrastructure roles at the Starknet Foundation, StarkWare, and 200+ ecosystem projects."} />
      <meta property="og:title" content={t.jobs?.seo_title || "Starknet Jobs | Build the Future of ZK"} />
      <meta property="og:description" content={t.jobs?.seo_description || "Join the teams building Starknet. Core protocol, DeFi, gaming, and infrastructure roles."} />
      <meta property="og:type" content="website" />
    </Head>
    <Box w="full" bg="black" minH="100vh" pt={32} pb={24} px={{ base: 6, md: 12, lg: 24 }}>
      {/* Hero Section */}
      <VStack spacing={6} align="start" mb={20} maxW="800px">
        <Flex align="center" gap={3}>
          <Box w="40px" h="1px" bg="accent.500" />
          <Text
            fontSize="12px"
            color="accent.500"
            textTransform="uppercase"
            letterSpacing="0.2em"
            fontWeight="500"
          >
            {t.jobs?.hero_eyebrow || "Careers"}
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
          {t.jobs?.hero_title_1 || "Build the future"}
          <br />
          <Text as="span" color="accent.500">
            {t.jobs?.hero_title_2 || "with us."}
          </Text>
        </Text>
        <Text
          fontSize={{ base: "16px", md: "18px" }}
          color="gray.500"
          maxW="600px"
          lineHeight="1.7"
        >
          {t.jobs?.hero_description || "Join the teams building Starknet. From core protocol development to ecosystem projects, find your place in the ZK revolution."}
        </Text>
      </VStack>

      {/* Why Starknet Section - First */}
      <Box
        p={12}
        border="1px solid"
        borderColor="whiteAlpha.100"
        mb={16}
      >
        <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={12}>
          <VStack align="flex-start" spacing={6}>
            <Text
              fontSize="11px"
              fontWeight="600"
              color="gray.500"
              textTransform="uppercase"
              letterSpacing="0.1em"
            >
              {t.jobs?.why_starknet || "Why Starknet"}
            </Text>
            <Text
              fontSize={{ base: "24px", md: "32px" }}
              fontWeight="700"
              color="white"
              letterSpacing="-0.02em"
              lineHeight="1.2"
            >
              {t.jobs?.why_starknet_title || "Work on technology that matters."}
            </Text>
            <Text fontSize="16px" color="gray.500" lineHeight="1.7">
              {t.jobs?.why_starknet_description || "Starknet is a leading zero-knowledge ecosystem with growing Bitcoin and DeFi momentum. Build the infrastructure for hard money, privacy, and programmable finance at scale."}
            </Text>
          </VStack>

          <Grid
            templateColumns={{ base: "repeat(2, minmax(0, 1fr))", md: "repeat(2, 1fr)" }}
            gap={6}
          >
            <Stat value="625+" label={t.jobs?.active_developers || "Active Developers"} />
            <Stat value="992" label={t.jobs?.peak_tps || "Peak TPS"} />
            <Stat value="$0.001" label={t.jobs?.median_fee || "Median Fee"} />
            <Stat value="2s" label={t.jobs?.confirmation || "Confirmation"} />
          </Grid>
        </Grid>
      </Box>

      {/* Job Boards */}
      <Flex align="center" gap={4} mb={6}>
        <Box w="3px" h="24px" bg="accent.500" />
        <Text
          fontSize="lg"
          fontWeight="700"
          color="white"
          letterSpacing="-0.02em"
        >
          {t.jobs?.open_positions || "Open Positions"}
        </Text>
      </Flex>
      <Grid
        templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
        gap={0}
        mb={20}
      >
        {jobBoards.map((board) => (
          <JobBoardCard key={board.title} {...board} />
        ))}
      </Grid>

      {/* CTA */}
      <Box textAlign="center" py={12}>
        <Text fontSize="lg" color="gray.500" mb={6}>
          {t.jobs?.cta_no_role || "Don't see the right role? Projects are always hiring."}
        </Text>
        <ChakraLink href={`/${locale}#projects`} _hover={{ textDecoration: "none" }}>
          <Button
            h="56px"
            px={8}
            bg="transparent"
            color="white"
            border="1px solid"
            borderColor="whiteAlpha.300"
            borderRadius="0"
            fontWeight="500"
            fontSize="14px"
            _hover={{
              borderColor: "white",
            }}
            rightIcon={<Icon as={FontAwesomeIcon} icon={faArrowRight} />}
          >
            {t.jobs?.cta_explore || "Explore Ecosystem Projects"}
          </Button>
        </ChakraLink>
      </Box>
    </Box>
    </>
  );
};

// Stat Component
function Stat({ value, label }: { value: string; label: string }) {
  return (
    <VStack align="flex-start" spacing={1}>
      <Text
        fontSize="28px"
        fontWeight="700"
        color="accent.500"
        fontFamily="mono"
      >
        {value}
      </Text>
      <Text fontSize="13px" color="gray.500">
        {label}
      </Text>
    </VStack>
  );
}

export default JobsPage;
