import { Box, Flex, Grid, HStack, SimpleGrid, Text, VStack } from "@chakra-ui/layout";
import { Avatar, Icon, Image, Link as ChakraLink } from "@chakra-ui/react";
import { faArrowLeft, faGlobe, faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faXTwitter, faDiscord, faGithub, faTelegram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { GetServerSideProps, GetServerSidePropsContext } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import type { FC } from "react";

import type { Project } from "../../../data/ecosystem";
import { allProjects as staticProjects } from "../../../data/ecosystem";
import ProjectsInfos from "../../components/project/ProjectsInfos";
import { EcosystemApi } from "../../services/ecosystem-api.service";
import { getProjectLogoSrc } from "../../services/project-logo";
import FourOhFour from "../404";

interface ProjectPageProps {
  project: Project | null;
  relatedProjects: Project[];
}

// Broad technical buckets can overpower business-category relevance (e.g. "defi").
// Prefer specific tags when available for "related projects".
const GENERIC_RELATED_TAGS = new Set(["all", "infrastructure", "tools", "security"]);
const ProjectPage: FC<ProjectPageProps> = ({ project, relatedProjects }) => {
  const router = useRouter();
  const currentLocale = router.locale || "en";
  if (!project) return <FourOhFour />;

  const twitterHandle = project.network?.twitter
    ? project.network.twitter.includes("twitter.com/")
      ? `@${project.network.twitter.split("twitter.com/")[1]?.split("/")[0] || ""}`
      : project.network.twitter.includes("x.com/")
        ? `@${project.network.twitter.split("x.com/")[1]?.split("/")[0] || ""}`
        : ""
    : "";

  const socialLinks = [
    project.network?.website && { icon: faGlobe, href: project.network.website, label: "Website" },
    project.network?.twitter && { icon: faXTwitter, href: project.network.twitter, label: "X" },
    project.network?.github && { icon: faGithub, href: project.network.github, label: "GitHub" },
    project.network?.discord && { icon: faDiscord, href: project.network.discord, label: "Discord" },
    project.network?.telegram && { icon: faTelegram, href: project.network.telegram, label: "Telegram" },
  ].filter(Boolean) as { icon: any; href: string; label: string }[];

  return (
    <>
    <Head>
      <title>{project.name} | Starknet Ecosystem</title>
      <meta name="description" content={project.description || `${project.name} on Starknet`} />
      <meta property="og:title" content={`${project.name} | Starknet Ecosystem`} />
      <meta property="og:description" content={project.description || `${project.name} on Starknet`} />
      <meta property="og:type" content="website" />
      {project.network?.twitterImage && (
        <meta property="og:image" content={project.network.twitterImage} />
      )}
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Explore", item: "https://www.starknet-ecosystem.com" },
              { "@type": "ListItem", position: 2, name: project.name, item: `https://www.starknet-ecosystem.com/projects/${project.id}` },
            ],
          }),
        }}
      />
    </Head>
    <Box w="full" bg="black" minH="100vh" pt={32} pb={24}>
      <Box maxW="900px" mx="auto" px={{ base: 6, md: 12 }}>
        {/* Back link */}
        <ChakraLink href={`/${currentLocale}`} _hover={{ textDecoration: "none" }}>
          <HStack
            spacing={2}
            color="gray.500"
            _hover={{ color: "white" }}
            transition="color 0.2s ease"
            mb={10}
          >
            <Icon as={FontAwesomeIcon} icon={faArrowLeft} boxSize={3} />
            <Text fontSize="13px" fontWeight="500">Back to Explore</Text>
          </HStack>
        </ChakraLink>

        {/* Banner */}
        <Box w="full" overflow="hidden" mb={8}>
          <Image
            src={project.network?.twitterBanner ?? `/logos/${project.image}`}
            alt={`${project.name} banner`}
            width="full"
            objectFit="cover"
            height="220px"
            fallback={
              <Box h="220px" w="full" bg="whiteAlpha.050" border="1px solid" borderColor="whiteAlpha.100" />
            }
          />
        </Box>

        {/* Header */}
        <Flex
          direction={{ base: "column", md: "row" }}
          align={{ base: "start", md: "center" }}
          justify="space-between"
          gap={6}
          mb={8}
        >
          <HStack spacing={4}>
            <Avatar
              size="xl"
              name={project.name}
              src={getProjectLogoSrc(project)}
              borderRadius="0"
            />
            <VStack align="start" spacing={1}>
              <HStack spacing={3}>
                <Text
                  fontSize="2xl"
                  fontWeight="700"
                  color="white"
                  letterSpacing="-0.02em"
                >
                  {project.name}
                </Text>
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
                      Live
                    </Text>
                  </Flex>
                )}
                {!project.isLive && project.isTestnetLive && (
                  <Text fontSize="10px" color="#FFFF00" textTransform="uppercase" letterSpacing="0.1em">
                    Testnet
                  </Text>
                )}
              </HStack>
              {twitterHandle && (
                <Text fontSize="sm" color="gray.500">
                  {twitterHandle}
                </Text>
              )}
            </VStack>
          </HStack>

          {/* Social links */}
          <HStack spacing={3}>
            {socialLinks.map((link) => (
              <ChakraLink key={link.label} href={link.href} isExternal>
                <Box
                  w="40px"
                  h="40px"
                  border="1px solid"
                  borderColor="whiteAlpha.200"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  color="gray.500"
                  transition="all 0.2s ease"
                  _hover={{ borderColor: "accent.500", color: "accent.500" }}
                >
                  <Icon as={FontAwesomeIcon} icon={link.icon} boxSize={4} />
                </Box>
              </ChakraLink>
            ))}
          </HStack>
        </Flex>

        {/* Description */}
        <Box
          p={6}
          border="1px solid"
          borderColor="whiteAlpha.100"
          mb={8}
        >
          <Text fontSize="md" color="gray.400" lineHeight={1.8}>
            {project.description}
          </Text>
        </Box>

        {/* Info + Categories */}
        <SimpleGrid columns={{ base: 1, lg: 2 }} gap={0}>
          <Box
            p={6}
            border="1px solid"
            borderColor="whiteAlpha.100"
          >
            <ProjectsInfos project={project} />
          </Box>

          {project.tags && project.tags.length > 0 && (
            <Box
              p={6}
              border="1px solid"
              borderColor="whiteAlpha.100"
            >
              <Text fontSize="lg" fontWeight="600" color="white" mb={4}>
                Categories
              </Text>
              <HStack spacing={2} flexWrap="wrap">
                {project.tags.map((tag) => (
                  <Box
                    key={tag}
                    px={3}
                    py={1}
                    border="1px solid"
                    borderColor="whiteAlpha.200"
                  >
                    <Text
                      fontSize="12px"
                      color="gray.400"
                      fontWeight="500"
                      textTransform="capitalize"
                    >
                      {tag}
                    </Text>
                  </Box>
                ))}
              </HStack>
            </Box>
          )}
        </SimpleGrid>

        {/* Visit CTA */}
        {project.network?.website && (
          <Box mt={8}>
            <ChakraLink href={project.network.website} isExternal _hover={{ textDecoration: "none" }}>
              <Flex
                p={5}
                bg="accent.500"
                align="center"
                justify="space-between"
                cursor="pointer"
                _hover={{ bg: "accent.400" }}
                transition="background 0.2s ease"
              >
                <Text fontSize="15px" fontWeight="700" color="white">
                  Visit {project.name}
                </Text>
                <Icon as={FontAwesomeIcon} icon={faUpRightFromSquare} color="white" boxSize={4} />
              </Flex>
            </ChakraLink>
          </Box>
        )}

        {/* Related Projects */}
        {relatedProjects.length > 0 && (
          <Box mt={16} pt={12} borderTop="1px solid" borderColor="whiteAlpha.100">
            <Text fontSize="lg" fontWeight="700" color="white" mb={6} letterSpacing="-0.02em">
              Related Projects
            </Text>
            <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }} gap={0}>
              {relatedProjects.map((related) => (
                <ChakraLink
                  key={related.id}
                  href={`/${currentLocale}/projects/${related.id}`}
                  _hover={{ textDecoration: "none" }}
                >
                  <Flex
                    p={5}
                    border="1px solid"
                    borderColor="whiteAlpha.100"
                    align="center"
                    gap={4}
                    _hover={{ borderColor: "accent.500", bg: "whiteAlpha.025" }}
                    transition="all 0.2s ease"
                    cursor="pointer"
                  >
                    <Avatar
                      size="md"
                      name={related.name}
                      src={getProjectLogoSrc(related)}
                      borderRadius="0"
                    />
                    <VStack align="start" spacing={0} flex={1} minW={0}>
                      <Text fontSize="14px" fontWeight="600" color="white" noOfLines={1}>
                        {related.name}
                      </Text>
                      <Text fontSize="11px" color="gray.500" noOfLines={1}>
                        {related.tags?.slice(0, 2).join(" · ")}
                      </Text>
                    </VStack>
                  </Flex>
                </ChakraLink>
              ))}
            </Grid>
          </Box>
        )}
      </Box>
    </Box>
    </>
  );
};

export const getServerSideProps: GetServerSideProps<ProjectPageProps> = async (
  context: GetServerSidePropsContext,
) => {
  const projectId = context.params?.id;

  if (typeof projectId !== "string") {
    return { notFound: true };
  }

  try {
    const project = await EcosystemApi.fetchProjectById(projectId);

    if (!project || project.isHidden) {
      // API returned null (404) — fall back to static data
      const staticProject = staticProjects.find((p) => p.id === projectId);
      if (staticProject && !staticProject.isHidden) {
        return { props: { project: staticProject, relatedProjects: [] } };
      }
      return { notFound: true };
    }

    // Fetch related projects by matching tags
    let relatedProjects: Project[] = [];
    try {
      const allProjects = await EcosystemApi.fetchEcosystemProjects(1000);
      const projectTags = project.tags || [];
      const specificTags = projectTags.filter((tag) => !GENERIC_RELATED_TAGS.has(tag));
      const tagsToMatch = specificTags.length > 0 ? specificTags : projectTags;

      relatedProjects = allProjects
        .filter(
          (p) =>
            p.id !== project.id &&
            !p.isHidden &&
            (p.isLive || p.isTestnetLive) &&
            p.tags?.some((tag: string) => tagsToMatch.includes(tag)),
        )
        .sort(
          (a, b) => {
            const aSharedCount = a.tags?.filter((tag) => tagsToMatch.includes(tag)).length || 0;
            const bSharedCount = b.tags?.filter((tag) => tagsToMatch.includes(tag)).length || 0;

            if (bSharedCount !== aSharedCount) {
              return bSharedCount - aSharedCount;
            }

            return (
              (b.socialMetrics?.twitterFollower || 0) -
              (a.socialMetrics?.twitterFollower || 0)
            );
          },
        )
        .slice(0, 6);
    } catch {
      // Non-critical, continue without related projects
    }

    return {
      props: {
        project,
        relatedProjects,
      },
    };
  } catch {
    // Network/server error — try static data before giving up
    const staticProject = staticProjects.find((p) => p.id === projectId);
    if (staticProject && !staticProject.isHidden) {
      return { props: { project: staticProject, relatedProjects: [] } };
    }
    return { notFound: true };
  }
};

export default ProjectPage;
