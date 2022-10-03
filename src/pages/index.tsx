import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";
import type { GetServerSideProps } from "next";
import { useEffect, useState } from "react";
import useInView from "react-cool-inview";

import type { Project, ProjectItf } from "../../data/ecosystem";
import type { Tag } from "../../data/tag";
import { allTags } from "../../data/tag";
import CardProject from "../components/card/CardProject";
import HighlightedText from "../components/layout/HighlightedText";
import Menu from "../components/layout/Menu";
import { useTranslate } from "../context/TranslateProvider";
import { EcosystemApi } from "../services/ecosystem-api.service";

interface Props {
  allProjects: ProjectItf[];
}

const Home = ({ allProjects }: Props) => {
  const { t } = useTranslate();
  const LOADED_STEPS = 10;
  const tagAll = allTags[0];
  const [filter, setFilter] = useState(tagAll);
  const [projects, setProjects] = useState<ProjectItf[]>([]);
  const [filteredProjectsCount, setFilteredProjectsCount] =
    useState<number>(-1);
  const [lastIndexLoaded, setLastIndexLoaded] = useState<number>(LOADED_STEPS);

  useEffect(() => {
    const filteredProjects = allProjects
      .filter((project: Project) => {
        return filter === tagAll || project.tags.indexOf(filter.value) !== -1;
      })
      .sort(
        (project1, project2) =>
          (project2.socialMetrics?.twitterFollower || 0) -
          (project1.socialMetrics?.twitterFollower || 0)
      );
    const newProjects = filteredProjects
      .slice(0, lastIndexLoaded)
      .map((project) => {
        const projectTags = project.tags;
        return {
          ...project,
          tagsRef: allTags.filter((tagItem: Tag) => {
            return projectTags.includes(tagItem.value);
          }),
        };
      });
    setProjects(newProjects);
    setFilteredProjectsCount(filteredProjects.length);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter, lastIndexLoaded]);

  const { observe } = useInView({
    // When the last item comes to the viewport
    onEnter: ({ unobserve }) => {
      // Pause observe when loading data
      unobserve();
      setLastIndexLoaded(lastIndexLoaded + LOADED_STEPS);
    },
  });

  return (
    <Flex
      w="full"
      direction="column"
      justify="flex-start"
      align="flex-start"
      transform="translateZ(0)"
    >
      <Flex
        direction="row"
        w="full"
        justify="space-between"
        position="relative"
      >
        {/* Big intro text */}
        <HighlightedText text={t.common.title_main_dapps} highlighted="1234" />
        <Box
          boxSize="500px"
          position="absolute"
          right="0"
          top="-200px"
          zIndex={0}
        >
          <Image src="/astro.png" alt="Starknet Astro" />
        </Box>
      </Flex>
      {/* Sub intro text */}
      <Text
        zIndex={1}
        mt={8}
        textAlign="start"
        color="whiteAlpha.600"
        fontSize="20px"
        maxWidth="600px"
      >
        {t.common.subtitle_main}
      </Text>
      {/* Main part */}
      <Flex w="full" direction={{ base: "column", md: "row" }} mt={24}>
        <Menu
          typeText="Projects"
          tags={allTags}
          initialValue={tagAll}
          childCount={filteredProjectsCount}
          onChange={(newValue) => {
            setFilter(newValue);
            setFilteredProjectsCount(-1);
          }}
        />
        {projects && projects.length > 0 ? (
          <SimpleGrid columns={{ sm: 1, md: 1, lg: 2, xl: 3 }} spacing="20px">
            {projects.map((project: ProjectItf, index: number) => {
              return (
                <Box
                  ref={index === projects.length - 1 ? observe : null}
                  key={`project-${project.name}`}
                  flex={1}
                >
                  <CardProject index={index} project={project} />
                </Box>
              );
            })}
          </SimpleGrid>
        ) : (
          <Flex w="full" direction="column" align="center" opacity=".8">
            <Text fontSize="24px">{t.common.no_project}</Text>
            <Text mt={2} fontSize="18px">
              {t.common.maybe_yours}
            </Text>
          </Flex>
        )}
      </Flex>
    </Flex>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=3600, stale-while-revalidate=7200"
  ); // Cache this for an hour
  const allProjects = await EcosystemApi.fetchEcosystemProjects(1000);
  return {
    props: {
      allProjects,
    } as Props,
  };
};

export default Home;
