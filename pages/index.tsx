import { Box, Flex, Stack, Text } from "@chakra-ui/layout";
import tag from "@chakra-ui/theme/src/components/tag";
import type { NextPage } from "next";
import { useState } from "react";

import CardProject from "../components/card/CardProject";
import TagMenu from "../components/layout/TagMenu";
import { allProjects, Project } from "../data/ecosystem"
import { allTags, Tag } from "../data/tag"

const Home: NextPage = () => {
  const tagAll = allTags[0];
  const [filter, setFilter] = useState(tagAll);
  const projects = allProjects.filter((project) => {
    return filter === tagAll || project.tags.indexOf(filter.value) !== -1;
  }).map((project) => {
    const projectTags = project.tags;
    return {
      ...project,
      tags: allTags.filter((tagItem: Tag) => {
        return projectTags.includes(tagItem.value);
      }),
    };
  });
  return (
    <Flex direction="column" justify="flex-start" align="center">
      {/* Big intro text */}
      <Text
        textAlign="center"
        lineHeight={1.2}
        fontSize="64px"
        fontWeight="bold"
        maxWidth="800px"
      >
        Starknet Ecosystem
      </Text>
      {/* Sub intro text */}
      <Text
        mt={4}
        textAlign="center"
        color="whiteAlpha.600"
        fontSize="24px"
        maxWidth="400px"
      >
        Explore all projects Building & Running on Starknet L2
      </Text>
      {/* Main part */}
      <Flex w="full" direction="column" mt={8}>
        <TagMenu
          initialValue={allTags[0]}
          tags={allTags}
          onChange={setFilter}
        />
        <Stack
          mt={10}
          direction="row"
          justify="center"
          spacing={0}
          wrap="wrap"
          shouldWrapChildren
        >
          {projects.map((project: Project) => {
            return (
              <Box key={`project-${project.name}`} py={4} px={4} width="300px">
                <CardProject project={project} />
              </Box>
            );
          })}
        </Stack>
      </Flex>
    </Flex>
  );
};

export default Home;
