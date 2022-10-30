import { Box, SimpleGrid, VStack } from "@chakra-ui/layout";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import type { ResourceItf } from "../../../data/academy";
import CardHighlight from "../card/CardHighlight";

import type { BasicContentProps } from "./BasicContent";
import BasicContent from "./BasicContent";

interface LearnContentProps extends BasicContentProps {
  highlightedResources: ResourceItf[];
}

function LearnContent({
  highlightedResources,
  resources,
  keyword = "",
  observe,
}: LearnContentProps) {
  return (
    <VStack w="full" align="flex-start">
      {highlightedResources && (
        <SimpleGrid
          columns={{ sm: 1, lg: 2, xl: 3 }}
          spacing={4}
          w="full"
          mb={8}
        >
          {highlightedResources.slice(0, 3).map((highlightedResource) => {
            const { name, description, link, network } = highlightedResource;
            const { github, twitter, website } = network;
            return (
              <Box
                maxH="200px"
                key={`highlighted-learn-${highlightedResource.name}`}
              >
                <CardHighlight
                  color="flat.100"
                  bgHover="flat.100"
                  icon={<FontAwesomeIcon icon={solid("home")} />}
                  title={name}
                  content={description}
                  link={link || website || github || twitter}
                  linkCover
                />
              </Box>
            );
          })}
        </SimpleGrid>
      )}
      <BasicContent resources={resources} observe={observe} keyword={keyword} />
    </VStack>
  );
}

export default LearnContent;
