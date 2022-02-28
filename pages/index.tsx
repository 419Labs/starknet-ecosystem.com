import { Box, Flex, Stack, Text } from "@chakra-ui/layout";
import tag from "@chakra-ui/theme/src/components/tag";
import type { NextPage } from "next";
import { useState } from "react";

import type { Project } from "../components/card/CardProject";
import CardProject from "../components/card/CardProject";
import type { Tag } from "../components/layout/TagMenu";
import TagMenu from "../components/layout/TagMenu";
import ProjectItems from "../data/ecosystem.json";
import TagItems from "../data/tags.json";

const Home: NextPage = () => {
  const tagAll = TagItems[0];
  const [filter, setFilter] = useState(tagAll);
  const projects = ProjectItems.filter((project) => {
    return filter === tagAll || project.tags.indexOf(filter.value) !== -1;
  }).map((project) => {
    const projectTags = project.tags;
    return {
      ...project,
      tags: TagItems.filter((tagItem: Tag) => {
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
        The Way you Want to Follow to Scale Ethereum
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
          initialValue={TagItems[0]}
          tags={TagItems}
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
              <Box
                key={`project-${project.name}`}
                py={4}
                px={4}
                minWidth="250px"
                h="250px"
              >
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
