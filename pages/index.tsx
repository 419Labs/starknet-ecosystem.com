import { Box, Flex, Stack, Text } from "@chakra-ui/layout";
import type { NextPage } from "next";
import { useState } from "react";

import CardProject from "../components/card/CardProject";
import TagMenu from "../components/layout/TagMenu";
import type { Project, ProjectItf } from "../data/ecosystem";
import { allProjects } from "../data/ecosystem";
import type { Tag } from "../data/tag";
import { allTags } from "../data/tag";

const Home: NextPage = () => {
  const tagAll = allTags[0];
  const [flippedIndex, setFlippedIndex] = useState(-1);
  const [filter, setFilter] = useState(tagAll);

  const projects: ProjectItf[] = allProjects
    .filter((project: Project) => {
      return filter === tagAll || project.tags.indexOf(filter.value) !== -1;
    })
    .sort((project1, project2) =>
      project1.name.toLowerCase().localeCompare(project2.name.toLowerCase())
    )
    .map((project) => {
      const projectTags = project.tags;
      return {
        ...project,
        tagsRef: allTags.filter((tagItem: Tag) => {
          return projectTags.includes(tagItem.value);
        }),
      };
    });
  return (
    <Flex direction="column" justify="flex-start" align="center" px={[4, 0]}>
      {/* Big intro text */}
      <Text
        mt={12}
        textAlign="center"
        lineHeight={1.2}
        fontSize={["48px", "68px"]}
        fontWeight="bold"
        maxWidth="850px"
      >
        StarkNet revolution is coming out of the woods
      </Text>
      {/* Sub intro text */}
      <Text
        mt={8}
        textAlign="center"
        color="whiteAlpha.600"
        fontSize="24px"
        maxWidth="400px"
      >
        Explore all projects building & running on StarkNet L2
      </Text>
      {/* Main part */}
      <Flex w="full" direction="column" mt={8}>
        <TagMenu
          initialValue={allTags[0]}
          tags={allTags}
          onChange={(newFilter) => {
            setFilter(newFilter);
            setFlippedIndex(-1);
          }}
        />
        <Stack
          mt={10}
          direction="row"
          justify="center"
          spacing={0}
          wrap="wrap"
          shouldWrapChildren
        >
          {projects && projects.length > 0 ? (
            projects.map((project: ProjectItf, index: number) => {
              return (
                <Box
                  key={`project-${project.name}`}
                  py={4}
                  px={4}
                  width="300px"
                >
                  <CardProject
                    project={project}
                    isFlipped={flippedIndex === index}
                    onClick={() => setFlippedIndex(index)}
                  />
                </Box>
              );
            })
          ) : (
            <Flex my={8} direction="column" align="center" opacity=".8">
              <Text fontSize="24px" opacity=".8">
                😕 No projects in this category
              </Text>
              <Text mt={2} fontSize="18px">
                Maybe yours?
              </Text>
            </Flex>
          )}
        </Stack>
      </Flex>
    </Flex>
  );
};

export default Home;
