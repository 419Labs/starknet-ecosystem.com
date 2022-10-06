import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";
import type { ChangeEvent } from "react";
import { useEffect, useState } from "react";
import useInView from "react-cool-inview";

import type { Project, ProjectItf } from "../../data/ecosystem";
import type { Tag } from "../../data/tag";
import { allEcosystemTags } from "../../data/tag";
import CardProject from "../components/card/CardProject";
import CardProjectSkeleton from "../components/card/CardProjectSkeleton";
import HighlightedText from "../components/layout/HighlightedText";
import Input from "../components/layout/Input";
import Menu from "../components/layout/Menu";
import { useTranslate } from "../context/TranslateProvider";
import { EcosystemApi } from "../services/ecosystem-api.service";
import { projectIncludesKeyword } from "../services/project.service";

const Home = () => {
  const { t } = useTranslate();
  const LOADED_STEPS = 10;
  const tagAll = allEcosystemTags[0];
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState(tagAll);
  const [allProjects, setAllProjects] = useState<Project[]>([]);
  const [projects, setProjects] = useState<ProjectItf[]>([]);
  const [filteredProjectsCount, setFilteredProjectsCount] =
    useState<number>(-1);
  const [lastIndexLoaded, setLastIndexLoaded] = useState<number>(LOADED_STEPS);
  const [keyword, setKeyword] = useState<string>("");

  useEffect(() => {
    EcosystemApi.fetchEcosystemProjects(1000)
      .then(setAllProjects)
      .then(() => setLoading(false));
  }, []);

  useEffect(() => {
    const filteredProjects = allProjects
      .filter((project: Project) => {
        return (
          (filter === tagAll || project.tags.indexOf(filter.value) !== -1) &&
          projectIncludesKeyword(project, keyword)
        );
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
          tagsRef: allEcosystemTags.filter((tagItem: Tag) => {
            return projectTags.includes(tagItem.value);
          }),
        };
      });
    setProjects(newProjects);
    setFilteredProjectsCount(loading ? -1 : filteredProjects.length);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter, keyword, lastIndexLoaded, allProjects]);

  const { observe } = useInView({
    // When the last item comes to the viewport
    onEnter: ({ unobserve }) => {
      // Pause observe when loading data
      unobserve();
      setLastIndexLoaded(lastIndexLoaded + LOADED_STEPS);
    },
  });

  const handleChangeKeyword = (event: ChangeEvent<HTMLInputElement>) =>
    setKeyword(event.target.value);

  const renderLoadingState = () => {
    return Array(20)
      .fill(0)
      .map((_, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <Box key={`project-skeleton-${index}`} flex={1}>
          <CardProjectSkeleton />
        </Box>
      ));
  };

  const renderData = () => {
    return projects.map((project: ProjectItf, index: number) => {
      return (
        <Box
          ref={index === projects.length - 1 ? observe : null}
          key={`project-${project.name}`}
          flex={1}
        >
          <CardProject index={index} project={project} />
        </Box>
      );
    });
  };
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
          boxSize="400px"
          position="absolute"
          right="0"
          top="-100px"
          zIndex={0}
        >
          <Image src="/astro_3.png" alt="Starknet Astro" />
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
      <Flex w="full" h="full" direction={{ base: "column", md: "row" }} mt={24}>
        <Menu
          typeText="Projects"
          tags={allEcosystemTags}
          initialValue={tagAll}
          childCount={filteredProjectsCount}
          onChange={(newValue) => {
            setFilter(newValue);
            setFilteredProjectsCount(-1);
          }}
        />
        <Flex direction="column" w="full" align="flex-end">
          <Input
            debounce={200}
            my={2}
            mb={8}
            maxW={{ base: "inherit", md: "250px" }}
            onChange={handleChangeKeyword}
            placeholder="Search project"
          />
          {loading || (projects && projects.length > 0) ? (
            <SimpleGrid
              columns={{ sm: 1, md: 1, lg: 2, xl: 3 }}
              spacing="20px"
              w="full"
            >
              {loading ? renderLoadingState() : renderData()}
            </SimpleGrid>
          ) : (
            <Flex
              w="full"
              h="full"
              direction="column"
              justify="center"
              align="center"
              mt={{ base: 24, md: 0 }}
            >
              <Text fontSize="24px">{t.common.no_project}</Text>
              <Text mt={2} fontSize="18px">
                {t.common.maybe_yours}
              </Text>
            </Flex>
          )}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Home;
