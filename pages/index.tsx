import { Flex, Stack, Text } from "@chakra-ui/layout";
import type { NextPage } from "next";

import type { Project } from "../components/card/CardProject";
import CardProject from "../components/card/CardProject";
import TagMenu from "../components/layout/TagMenu";
import ProjectItems from "../data/ecosystem.json";
import TagItems from "../data/tags.json";

const Home: NextPage = () => {
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
        <TagMenu initialValue={TagItems[0]} tags={TagItems} />
        <Stack
          mt={4}
          direction="row"
          spacing={4}
          wrap="wrap"
          shouldWrapChildren
        >
          {ProjectItems.map((project: Project) => {
            return <CardProject project={project} />;
          })}
        </Stack>
      </Flex>
    </Flex>
  );
};

export default Home;
