import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/layout";
import { Hide, Image } from "@chakra-ui/react";
import type { NextPage } from "next";
import { useEffect, useState } from "react";
import useInView from "react-cool-inview";

import type { Project, ProjectItf } from "../../data/ecosystem";
import { allProjects } from "../../data/ecosystem";
import type { Tag } from "../../data/tag";
import { allTags } from "../../data/tag";
import CardProject from "../components/card/CardProject";
import HighlightedText from "../components/layout/HighlightedText";
import Menu from "../components/layout/Menu";
import { useTranslate } from "../context/TranslateProvider";

const Home: NextPage = () => {
  const { t } = useTranslate();
  const LOADED_STEPS = 10;
  const tagAll = allTags[0];
  const [filter, setFilter] = useState(tagAll);
  const [projects, setProjects] = useState<ProjectItf[]>([]);
  const [lastIndexLoaded, setLastIndexLoaded] = useState<number>(LOADED_STEPS);

  useEffect(() => {
    const newProjects = allProjects
      .filter((project: Project) => {
        return filter === tagAll || project.tags.indexOf(filter.value) !== -1;
      })
      .sort((project1, project2) =>
        project1.name.toLowerCase().localeCompare(project2.name.toLowerCase())
      )
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
      px={[4, 0]}
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
          boxSize="600px"
          position="absolute"
          right="-200px"
          top="-100px"
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
      <Flex w="full" direction="row" mt={8}>
        <Hide below="md">
          <Menu
            tags={allTags}
            initialValue={tagAll}
            onChange={(newValue) => setFilter(newValue)}
          />
        </Hide>
        <SimpleGrid
          minChildWidth="300px"
          spacing="20px"
          w="full"
          maxHeight="0px"
        >
          {projects && projects.length > 0 ? (
            projects.map((project: ProjectItf, index: number) => {
              return (
                <Box
                  ref={index === projects.length - 1 ? observe : null}
                  key={`project-${project.name}`}
                  flex={1}
                >
                  <CardProject project={project} />
                </Box>
              );
            })
          ) : (
            <Flex my={8} direction="column" align="center" opacity=".8">
              <Text fontSize="24px">{t.common.no_project}</Text>
              <Text mt={2} fontSize="18px">
                {t.common.maybe_yours}
              </Text>
            </Flex>
          )}
        </SimpleGrid>
      </Flex>
    </Flex>
  );
};

export default Home;
