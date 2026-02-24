import {
  Box,
  Flex,
  Grid,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/layout";
import {
  Avatar,
  Button,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Link as ChakraLink,
} from "@chakra-ui/react";
import {
  faSearch,
  faArrowRight,
  faUpRightFromSquare,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import {
  faXTwitter,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import Head from "next/head";
import type { ChangeEvent } from "react";
import { useEffect, useState } from "react";
import useSWR from "swr";

import type { Project, ProjectItf } from "../../data/ecosystem";
import type { Tag } from "../../data/tag";
import { allEcosystemTags } from "../../data/tag";
import { useTranslate } from "../context/TranslateProvider";
import { EcosystemApi } from "../services/ecosystem-api.service";
import {
  getProjectRelevanceScore,
  projectIncludesKeyword,
  ProjectSorting,
  sortBy,
} from "../services/project.service";

const MotionBox = motion.create(Box);
const MotionText = motion.create(Text);
const MotionFlex = motion.create(Flex);

// Pill component for categories
function Pill({
  label,
  isActive,
  onClick,
  count
}: {
  label: string;
  isActive: boolean;
  onClick: () => void;
  count?: number;
}) {
  return (
    <Button
      onClick={onClick}
      size="sm"
      h="36px"
      px={4}
      bg={isActive ? "white" : "transparent"}
      color={isActive ? "black" : "gray.400"}
      border="1px solid"
      borderColor={isActive ? "white" : "whiteAlpha.200"}
      borderRadius="full"
      fontWeight="500"
      fontSize="13px"
      _hover={{
        bg: isActive ? "white" : "whiteAlpha.100",
        borderColor: isActive ? "white" : "whiteAlpha.400",
      }}
      transition="all 0.2s ease"
    >
      {label}
      {count !== undefined && (
        <Text as="span" ml={2} opacity={0.5} fontSize="12px">
          {count}
        </Text>
      )}
    </Button>
  );
}

// Project Card - Bold, minimal
function ProjectCard({
  project,
  index,
  locale,
}: {
  project: ProjectItf;
  index: number;
  locale: string;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const { t } = useTranslate();

  return (
    <ChakraLink
      href={`/${locale}/projects/${project.id}`}
      _hover={{ textDecoration: "none" }}
    >
      <MotionBox
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: index * 0.02 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        h="280px"
        bg="transparent"
        border="1px solid"
        borderColor={isHovered ? "accent.500" : "whiteAlpha.100"}
        borderRadius="0"
        p={6}
        position="relative"
        cursor="pointer"
        overflow="hidden"
        role="group"
        _before={{
          content: '""',
          position: "absolute",
          inset: 0,
          bg: "linear-gradient(180deg, transparent 0%, rgba(255, 107, 53, 0.03) 100%)",
          opacity: isHovered ? 1 : 0,
          transition: "opacity 0.3s ease",
        }}
      >
        {/* Top section */}
        <Flex justify="space-between" align="flex-start" mb={6}>
          <Avatar
            size="lg"
            name={project.name}
            src={project.network?.twitterImage || `/logos/${project.image}`}
            borderRadius="0"
            border="1px solid"
            borderColor="whiteAlpha.200"
          />

          {project.isLive && (
            <Flex align="center" gap={2}>
              <Box
                w="6px"
                h="6px"
                borderRadius="full"
                bg="#22C55E"
                boxShadow="0 0 10px #22C55E"
              />
              <Text fontSize="10px" color="gray.500" textTransform="uppercase" letterSpacing="0.1em">
                {t.common?.mainnet || "Mainnet"}
              </Text>
            </Flex>
          )}
          {!project.isLive && project.isTestnetLive && (
            <Flex align="center" gap={2}>
              <Box
                w="6px"
                h="6px"
                borderRadius="full"
                bg="#F59E0B"
                boxShadow="0 0 10px #F59E0B"
              />
              <Text fontSize="10px" color="gray.500" textTransform="uppercase" letterSpacing="0.1em">
                {t.common?.testnet || "Testnet"}
              </Text>
            </Flex>
          )}
        </Flex>

        {/* Title */}
        <Text
          fontSize="xl"
          fontWeight="600"
          color="white"
          mb={2}
          letterSpacing="-0.02em"
        >
          {project.name}
        </Text>

        {/* Tags */}
        <HStack spacing={2} flexWrap="wrap" mb={4}>
          {project.tagsRef?.slice(0, 2).map((tag) => (
            <Text
              key={tag.value}
              fontSize="11px"
              color="gray.500"
              textTransform="uppercase"
              letterSpacing="0.05em"
            >
              {tag.label}
            </Text>
          ))}
        </HStack>

        {/* Bottom section - appears on hover */}
        <Flex
          position="absolute"
          bottom={6}
          left={6}
          right={6}
          justify="space-between"
          align="center"
          opacity={isHovered ? 1 : 0}
          transform={isHovered ? "translateY(0)" : "translateY(10px)"}
          transition="all 0.3s ease"
        >
          <HStack spacing={4}>
            {project.network?.twitter && (
              <ChakraLink
                href={project.network.twitter}
                isExternal
                onClick={(e) => e.stopPropagation()}
                color="gray.500"
                _hover={{ color: "white" }}
              >
                <Icon as={FontAwesomeIcon} icon={faXTwitter} boxSize={4} />
              </ChakraLink>
            )}
            {project.network?.github && (
              <ChakraLink
                href={project.network.github}
                isExternal
                onClick={(e) => e.stopPropagation()}
                color="gray.500"
                _hover={{ color: "white" }}
              >
                <Icon as={FontAwesomeIcon} icon={faGithub} boxSize={4} />
              </ChakraLink>
            )}
          </HStack>

          <Icon
            as={FontAwesomeIcon}
            icon={faUpRightFromSquare}
            color="accent.500"
            boxSize={4}
          />
        </Flex>

        {/* Index number */}
        <Text
          position="absolute"
          top={6}
          right={6}
          fontSize="10px"
          color="whiteAlpha.300"
          fontFamily="mono"
        >
          {String(index + 1).padStart(3, "0")}
        </Text>
      </MotionBox>
    </ChakraLink>
  );
}

// Loading skeleton
function SkeletonCard() {
  return (
    <Box
      h="280px"
      bg="transparent"
      border="1px solid"
      borderColor="whiteAlpha.100"
      borderRadius="0"
      p={6}
      position="relative"
    >
      <Box w="64px" h="64px" bg="whiteAlpha.100" mb={6} />
      <Box w="60%" h="24px" bg="whiteAlpha.100" mb={3} />
      <Box w="40%" h="16px" bg="whiteAlpha.050" />
    </Box>
  );
}

const ITEMS_PER_PAGE = 24;
const MARQUEE_GROUP_KEYS = ["group-a", "group-b", "group-c", "group-d"] as const;
const SKELETON_KEYS = Array.from({ length: ITEMS_PER_PAGE }, (_, index) => `skeleton-${index + 1}`);

const Home = () => {
  const { t, locale } = useTranslate();
  const activeLocale = locale || "en";

  const tagAll = allEcosystemTags[0];
  const [filter, setFilter] = useState(tagAll);
  const sorter = ProjectSorting.TWITTER;
  const [projects, setProjects] = useState<ProjectItf[]>([]);
  const [filteredProjectsCount, setFilteredProjectsCount] = useState<number>(-1);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [keyword, setKeyword] = useState<string>("");

  const { data: allProjects = [], isLoading: loading } = useSWR(
    "ecosystem-projects",
    () => EcosystemApi.fetchEcosystemProjects(1000),
    {
      revalidateOnFocus: false,
      dedupingInterval: 300000, // 5 min dedup
    },
  );

  useEffect(() => {
    const matchingProjects = allProjects
      .filter((project) => project.isLive || project.isTestnetLive)
      .filter((project: Project) => {
        return (
          (filter === tagAll || project.tags.indexOf(filter.value) !== -1) &&
          projectIncludesKeyword(project, keyword)
        );
      });

    const filteredProjects = keyword.trim()
      ? [...matchingProjects].sort((project1, project2) => {
          const relevanceDiff =
            getProjectRelevanceScore(project2, keyword) -
            getProjectRelevanceScore(project1, keyword);

          if (relevanceDiff !== 0) return relevanceDiff;

          return (
            (project2.socialMetrics?.twitterFollower || 0) -
            (project1.socialMetrics?.twitterFollower || 0)
          );
        })
      : sortBy([...matchingProjects], sorter);

    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;

    const newProjects = filteredProjects.slice(startIndex, endIndex).map((project) => {
      const projectTags = project.tags;
      return {
        ...project,
        tagsRef: allEcosystemTags.filter((tagItem: Tag) => {
          return projectTags.includes(tagItem.value);
        }),
      };
    });
    setProjects(newProjects);
    setFilteredProjectsCount(loading ? -1 : filteredProjects.length);
  }, [filter, sorter, keyword, currentPage, allProjects, loading, tagAll]);

  useEffect(() => {
    setCurrentPage(1);
  }, [filter, keyword]);

  const totalPages = Math.ceil(filteredProjectsCount / ITEMS_PER_PAGE);

  const handleChangeKeyword = (event: ChangeEvent<HTMLInputElement>) =>
    setKeyword(event.target.value);

  const liveCount = allProjects.filter((p) => p.isLive || p.isTestnetLive).length;

  return (
    <>
    <Head>
      <title>Starknet Ecosystem | Explore 300+ Projects Building on ZK</title>
      <meta name="description" content="The complete guide to the Starknet ecosystem. Explore 300+ live projects across DeFi, gaming, infrastructure, and more. Powered by avnu." />
      <meta property="og:title" content="Starknet Ecosystem | Explore 300+ Projects Building on ZK" />
      <meta property="og:description" content="The complete guide to the Starknet ecosystem. Explore 300+ live projects across DeFi, gaming, infrastructure, and more." />
      <meta property="og:type" content="website" />
    </Head>
    <Box w="full" bg="black" minH="100vh" position="relative" overflow="hidden">
      {/* Grain overlay */}
      <Box
        position="fixed"
        inset={0}
        pointerEvents="none"
        opacity={0.03}
        zIndex={100}
        className="noise-overlay"
      />

      {/* Hero Section */}
      <Box
        minH="100vh"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        px={{ base: 6, md: 12, lg: 24 }}
        position="relative"
      >
        {/* Background accent */}
        <Box
          position="absolute"
          top="20%"
          right="-10%"
          w="600px"
          h="600px"
          borderRadius="full"
          bg="accent.500"
          filter="blur(200px)"
          opacity={0.15}
          pointerEvents="none"
        />

        <VStack align="flex-start" spacing={8} maxW="1000px">
          {/* Eyebrow */}
          <MotionFlex
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            align="center"
            gap={3}
          >
            <Box w="40px" h="1px" bg="accent.500" />
            <Text
              fontSize="12px"
              color="accent.500"
              textTransform="uppercase"
              letterSpacing="0.2em"
              fontWeight="500"
            >
              {t.common?.hero_eyebrow || "Starknet Ecosystem"}
            </Text>
          </MotionFlex>

          {/* Main headline */}
          <MotionBox
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <Text
              fontSize={{ base: "48px", md: "80px", lg: "120px" }}
              fontWeight="700"
              color="white"
              lineHeight="0.95"
              letterSpacing="-0.04em"
            >
              {t.common?.hero_title_1 || "Build the"}
              <br />
              <Text
                as="span"
                color="accent.500"
                fontFamily="var(--font-geist-pixel-square)"
                fontWeight="500"
                letterSpacing="0"
                sx={{
                  textShadow: "1px 1px 0 rgba(232,121,42,0.3), 0 0 40px rgba(232,121,42,0.15)",
                }}
              >
                {t.common?.hero_title_2 || "unimaginable."}
              </Text>
            </Text>
          </MotionBox>

          {/* Subtext */}
          <MotionText
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            fontSize={{ base: "16px", md: "20px" }}
            color="gray.400"
            maxW="600px"
            lineHeight="1.6"
          >
            {t.common?.hero_description || "Bitcoin. Privacy. Integrity. Hundreds of teams shipping on a high-performance ZK ecosystem built to scale."}
          </MotionText>

          {/* CTA */}
          <MotionFlex
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            gap={4}
            pt={4}
          >
            <Button
              size="lg"
              h="56px"
              px={8}
              bg="white"
              color="black"
              borderRadius="0"
              fontWeight="500"
              fontSize="14px"
              _hover={{
                bg: "accent.500",
                color: "white",
              }}
              rightIcon={<Icon as={FontAwesomeIcon} icon={faArrowRight} />}
              onClick={() => {
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              {t.common?.explore_projects || "Explore Projects"}
            </Button>
            <ChakraLink
              href="https://github.com/419Labs/starknet-ecosystem.com/blob/main/docs/add-project.md"
              isExternal
              _hover={{ textDecoration: "none" }}
            >
              <Button
                size="lg"
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
              >
                {t.common?.submit_project || "Submit Project"}
              </Button>
            </ChakraLink>
          </MotionFlex>
        </VStack>

        {/* Scroll indicator */}
        <MotionBox
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          position="absolute"
          bottom={12}
          left="50%"
          transform="translateX(-50%)"
        >
          <VStack spacing={2}>
            <Text fontSize="10px" color="gray.600" textTransform="uppercase" letterSpacing="0.2em">
              {t.common?.scroll || "Scroll"}
            </Text>
            <Box w="1px" h="40px" bg="whiteAlpha.200" />
          </VStack>
        </MotionBox>

        {/* Stats - positioned absolutely */}
        <HStack
          position="absolute"
          bottom={12}
          right={{ base: 6, md: 12, lg: 24 }}
          spacing={12}
          display={{ base: "none", lg: "flex" }}
        >
          <VStack align="flex-end" spacing={0}>
            <Text fontSize="32px" fontWeight="500" color="white" fontFamily="var(--font-geist-pixel-square)">
              {liveCount || "---"}
            </Text>
            <Text fontSize="11px" color="gray.500" textTransform="uppercase" letterSpacing="0.1em">
              {t.common?.live_projects || "Live Projects"}
            </Text>
          </VStack>
          <Box w="1px" h="40px" bg="whiteAlpha.200" />
          <VStack align="flex-end" spacing={0}>
            <Text fontSize="32px" fontWeight="500" color="white" fontFamily="var(--font-geist-pixel-square)">
              ∞
            </Text>
            <Text fontSize="11px" color="gray.500" textTransform="uppercase" letterSpacing="0.1em">
              {t.common?.possibilities || "Possibilities"}
            </Text>
          </VStack>
        </HStack>
      </Box>

      {/* Ecosystem Highlights -Auto-scrolling carousel */}
      {!loading && allProjects.length > 0 && (() => {
        const featuredIds = [
          "84904055-cb72-407f-996a-d7aafe287372", // Loot Survivor
          "502b0dbc-5169-4db6-8796-36a968a798fd", // avnu
          "1b1fedb8-3e97-4288-91e8-7a0c39e5be66", // Vesu
          "a7e1c712-84a2-4457-8610-1cab7af37b16", // Endurfi
          "ba85310d-c82c-43c5-a42c-6479f8946b98", // Ekubo
          "00afa40f-f1a7-4cb3-a979-13c501ae9b17", // Uncap
          "8df27359-f05d-439b-8592-ca1b61cf049c", // Ready
          "eb131b7d-3ab9-44d4-b3f0-ef02d08b8379", // Nostra
          "f22a3d11-9c55-4d6f-98c3-b56230589def", // Braavos
          "00b21789-6562-43bd-a75e-f2be48590853", // LayerAkira
          "8563314d-f31d-4e5a-a372-915a4f11518f", // Realms
          "5b7f1fde-5642-4bfd-ab11-8b10c7c1ae1b", // Cartridge
          "1c57849c-ae23-400a-b9d5-6f909894ae86", // Dojo
          "c95cdd9c-a151-4b3b-b43b-8f023e77f634", // Xverse
          "8d0d1cc3-af7e-48ab-aa22-bef4ede008df", // Pragma
          "071a6e9b-08f9-4f65-9da9-3e8866731439", // Extended
          "5cec890e-fc90-48d0-b7eb-011b6a0dc13b", // Voyager
        ];

        // Override buggy API descriptions
        const descriptionOverrides: Record<string, string> = {
          "502b0dbc-5169-4db6-8796-36a968a798fd":
            "Starknet's liquidity layer. Best-price swaps, DCA, gasless transactions, and market data powering 50+ wallets and dApps.",
        };

        const featured = featuredIds
          .map((id) => {
            const project = allProjects.find((p) => p.id === id);
            if (project && descriptionOverrides[id]) {
              return { ...project, description: descriptionOverrides[id] };
            }
            return project;
          })
          .filter(Boolean) as Project[];

        const cardWidth = "280px";
        const gap = "16px";

        return (
          <Box py={20} borderTop="1px solid" borderColor="whiteAlpha.100" overflow="hidden">
            <Text
              fontSize="11px"
              color="gray.500"
              textTransform="uppercase"
              letterSpacing="0.15em"
              mb={10}
              textAlign="center"
            >
              {t.common?.powering_ecosystem || "Powering the ecosystem"}
            </Text>

            <Flex
              overflow="hidden"
              role="group"
              pb="1px"
              sx={{
                "--gap": gap,
                "--duration": `${featured.length * 4}s`,
              }}
              gap="var(--gap)"
            >
              {MARQUEE_GROUP_KEYS.map((groupKey) => (
                  <Flex
                    key={groupKey}
                    className="animate-marquee"
                    shrink={0}
                    gap="var(--gap)"
                    sx={{
                      willChange: "transform",
                      backfaceVisibility: "hidden",
                      "[role=group]:hover &": {
                        animationPlayState: "paused",
                      },
                    }}
                  >
                    {featured.map((project) => (
                      <ChakraLink
                        key={project.id}
                        href={`/${activeLocale}/projects/${project.id}`}
                        _hover={{ textDecoration: "none" }}
                        flexShrink={0}
                        w={cardWidth}
                      >
                        <Flex
                          direction="column"
                          p={6}
                          border="1px solid"
                          borderColor="whiteAlpha.100"
                          _hover={{ borderColor: "accent.500", bg: "whiteAlpha.025" }}
                          transition="border-color 0.2s ease, background 0.2s ease"
                          h="full"
                        >
                          <HStack spacing={3} mb={3}>
                            <Avatar
                              size="sm"
                              name={project.name}
                              src={project.network?.twitterImage || `/logos/${project.image}`}
                              borderRadius="0"
                            />
                            <VStack align="flex-start" spacing={0}>
                              <Text fontSize="14px" fontWeight="600" color="white">
                                {project.name}
                              </Text>
                              <Text fontSize="11px" color="gray.600" textTransform="uppercase" letterSpacing="0.05em">
                                {project.tags[0]}
                              </Text>
                            </VStack>
                          </HStack>
                          <Text
                            fontSize="13px"
                            color="gray.500"
                            lineHeight="1.5"
                            noOfLines={2}
                          >
                            {project.description}
                          </Text>
                        </Flex>
                      </ChakraLink>
                    ))}
                  </Flex>
                ))}
            </Flex>
          </Box>
        );
      })()}

      {/* Projects Section */}
      <Box id="projects" py={24} px={{ base: 6, md: 12, lg: 24 }}>
        {/* Section header */}
        <Flex
          direction={{ base: "column", lg: "row" }}
          justify="space-between"
          align={{ base: "flex-start", lg: "flex-end" }}
          mb={16}
          gap={8}
        >
          <VStack align="flex-start" spacing={4}>
            <Text
              fontSize={{ base: "36px", md: "48px" }}
              fontWeight="700"
              color="white"
              letterSpacing="-0.03em"
            >
              {t.common?.all_projects || "All Projects"}
            </Text>
            <Text fontSize="16px" color="gray.500">
              {filteredProjectsCount >= 0 ? filteredProjectsCount : "..."} {t.common?.projects_building || "projects building the future"}
            </Text>
          </VStack>

          {/* Search */}
          <InputGroup maxW={{ base: "full", lg: "400px" }} size="lg">
            <InputLeftElement pointerEvents="none" h="full">
              <Icon as={FontAwesomeIcon} icon={faSearch} color="gray.600" />
            </InputLeftElement>
            <Input
              placeholder={t.common?.search || "Search..."}
              onChange={handleChangeKeyword}
              bg="transparent"
              border="1px solid"
              borderColor="whiteAlpha.200"
              borderRadius="0"
              h="56px"
              fontSize="14px"
              color="white"
              _placeholder={{ color: "gray.600" }}
              _hover={{ borderColor: "whiteAlpha.400" }}
              _focus={{
                borderColor: "accent.500",
                boxShadow: "none",
              }}
            />
          </InputGroup>
        </Flex>

        {/* Filters */}
        <Flex
          direction="column"
          align="stretch"
          gap={6}
          mb={12}
        >
          {/* Category pills */}
          <VStack align="stretch" spacing={3} flex={1} minW={0}>
            <HStack spacing={2}>
              <Box w="6px" h="6px" borderRadius="full" bg="accent.500" />
              <Text
                fontSize="11px"
                color="gray.500"
                textTransform="uppercase"
                letterSpacing="0.1em"
                fontWeight="600"
              >
                {t.common?.project_category || "Project Category"}
              </Text>
            </HStack>
            <Box
              w="full"
              overflowX={{ base: "auto", lg: "visible" }}
              px={0}
              css={{
                "&::-webkit-scrollbar": { display: "none" },
                scrollbarWidth: "none",
              }}
            >
              <Flex
                gap={2}
                minW={{ base: "max-content", lg: "auto" }}
                flexWrap={{ base: "nowrap", lg: "wrap" }}
                pr={1}
              >
                {allEcosystemTags.map((tag) => (
                  <Pill
                    key={tag.value}
                    label={t.tags[tag.value] || tag.label}
                    isActive={filter.value === tag.value}
                    onClick={() => setFilter(tag)}
                  />
                ))}
              </Flex>
            </Box>
          </VStack>

        </Flex>

        {/* Project Grid */}
        {loading || (projects && projects.length > 0) ? (
          <Grid
            templateColumns={{
              base: "1fr",
              md: "repeat(2, 1fr)",
              lg: "repeat(3, 1fr)",
              xl: "repeat(4, 1fr)",
            }}
            gap={0}
          >
            {loading
              ? SKELETON_KEYS.map((skeletonKey) => (
                  <SkeletonCard key={skeletonKey} />
                ))
              : projects.map((project, index) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    index={index}
                    locale={activeLocale}
                  />
                ))}
          </Grid>
        ) : (
          <VStack spacing={4} py={32}>
            <Text fontSize="24px" fontWeight="600" color="white">
              {t.common?.no_projects_found || "No projects found"}
            </Text>
            <Text color="gray.500">{t.common?.try_different_filters || "Try different filters"}</Text>
          </VStack>
        )}

        {/* Pagination */}
        {!loading && totalPages > 1 && (
          <Flex
            justify="center"
            align="center"
            gap={{ base: 2, md: 4 }}
            direction={{ base: "row", md: "row" }}
            flexWrap="nowrap"
            mt={16}
            pt={16}
            borderTop="1px solid"
            borderColor="whiteAlpha.100"
            w="full"
          >
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              isDisabled={currentPage === 1}
              color="gray.400"
              _hover={{ color: "white" }}
              minW={{ base: "40px", md: "auto" }}
              px={{ base: 2, md: 3 }}
            >
              <Icon as={FontAwesomeIcon} icon={faChevronLeft} boxSize={3} />
              <Text as="span" ml={2} display={{ base: "none", md: "inline" }}>
                {t.common?.previous || "Previous"}
              </Text>
            </Button>

            <Text
              fontSize="12px"
              color="gray.500"
              fontFamily="mono"
              display={{ base: "block", md: "none" }}
              minW="70px"
              textAlign="center"
            >
              {currentPage}/{totalPages}
            </Text>

            <HStack spacing={1} display={{ base: "none", md: "flex" }}>
              {Array.from({ length: Math.min(totalPages, 7) }, (_, i) => {
                let pageNum: number;
                if (totalPages <= 7) {
                  pageNum = i + 1;
                } else if (currentPage <= 4) {
                  pageNum = i + 1;
                } else if (currentPage >= totalPages - 3) {
                  pageNum = totalPages - 6 + i;
                } else {
                  pageNum = currentPage - 3 + i;
                }

                return (
                  <Button
                    key={pageNum}
                    size="sm"
                    variant="ghost"
                    onClick={() => setCurrentPage(pageNum)}
                    color={currentPage === pageNum ? "white" : "gray.600"}
                    bg={currentPage === pageNum ? "whiteAlpha.100" : "transparent"}
                    _hover={{ bg: "whiteAlpha.100" }}
                    minW="40px"
                    borderRadius="0"
                  >
                    {pageNum}
                  </Button>
                );
              })}
            </HStack>

            <Button
              variant="ghost"
              size="sm"
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              isDisabled={currentPage === totalPages}
              color="gray.400"
              _hover={{ color: "white" }}
              minW={{ base: "40px", md: "auto" }}
              px={{ base: 2, md: 3 }}
            >
              <Text as="span" mr={2} display={{ base: "none", md: "inline" }}>
                {t.common?.next || "Next"}
              </Text>
              <Icon as={FontAwesomeIcon} icon={faChevronRight} boxSize={3} />
            </Button>
          </Flex>
        )}
      </Box>

      {/* Submit Project Banner */}
      <Flex
        mx={{ base: 6, md: 12, lg: 24 }}
        mt={16}
        p={{ base: 8, md: 12 }}
        border="1px solid"
        borderColor="whiteAlpha.200"
        justify="space-between"
        align={{ base: "flex-start", md: "center" }}
        direction={{ base: "column", md: "row" }}
        gap={6}
        _hover={{ borderColor: "accent.500" }}
        transition="border-color 0.2s ease"
      >
        <VStack align="flex-start" spacing={2}>
          <Text fontSize="lg" fontWeight="700" color="white">
            {t.common?.building_on_starknet || "Building on Starknet?"}
          </Text>
          <Text fontSize="14px" color="gray.500">
            {t.common?.add_project_description || "Add your project to the ecosystem directory. Open source, community-driven."}
          </Text>
        </VStack>
        <ChakraLink
          href="https://github.com/419Labs/starknet-ecosystem.com/blob/main/docs/add-project.md"
          isExternal
          _hover={{ textDecoration: "none" }}
          flexShrink={0}
        >
          <Button
            h="48px"
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
              bg: "whiteAlpha.050",
            }}
            rightIcon={<Icon as={FontAwesomeIcon} icon={faArrowRight} />}
          >
            {t.common?.submit_project || "Submit Project"}
          </Button>
        </ChakraLink>
      </Flex>

      {/* Footer CTA */}
      <Box
        py={32}
        px={{ base: 6, md: 12, lg: 24 }}
        borderTop="1px solid"
        borderColor="whiteAlpha.100"
      >
        <VStack spacing={8} align="center" textAlign="center">
          <Text
            fontSize={{ base: "32px", md: "48px" }}
            fontWeight="700"
            color="white"
            letterSpacing="-0.03em"
          >
            {t.common?.ready_to_build || "Ready to build?"}
          </Text>
          <Text fontSize="16px" color="gray.500" maxW="500px">
            {t.common?.ready_to_build_description || "Join hundreds of teams building the future of finance, privacy, and integrity."}
          </Text>
          <ChakraLink href={`/${activeLocale}/academy`} _hover={{ textDecoration: "none" }}>
            <Button
              size="lg"
              h="56px"
              px={10}
              bg="accent.500"
              color="white"
              borderRadius="0"
              fontWeight="600"
              fontSize="14px"
              _hover={{
                bg: "accent.400",
              }}
              rightIcon={<Icon as={FontAwesomeIcon} icon={faUpRightFromSquare} />}
            >
              {t.common?.start_building || "Start Building"}
            </Button>
          </ChakraLink>
        </VStack>
      </Box>
    </Box>
    </>
  );
};

export default Home;
