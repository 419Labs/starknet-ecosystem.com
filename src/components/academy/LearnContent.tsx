import { Box, SimpleGrid, VStack } from "@chakra-ui/layout";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import CardHighlight from "../card/CardHighlight";

import type { BasicContentProps } from "./BasicContent";
import BasicContent from "./BasicContent";

function LearnContent({ resources, keyword = "", observe }: BasicContentProps) {
  return (
    <VStack w="full" align="flex-start">
      <SimpleGrid columns={{ sm: 1, lg: 2, xl: 3 }} spacing={4} w="full" mb={8}>
        <Box maxH="200px">
          <CardHighlight
            color="flat.100"
            bgHover="flat.100"
            icon={<FontAwesomeIcon icon={solid("home")} />}
            title="Get started"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
            link="https://google.com"
            linkCover
          />
        </Box>
        <Box maxH="200px">
          <CardHighlight
            color="flat.100"
            bgHover="flat.100"
            colorHover="whiteAlpha.900"
            icon={<FontAwesomeIcon icon={solid("home")} />}
            title="Get started"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
            link="https://google.com"
            linkCover
          />
        </Box>
      </SimpleGrid>
      <BasicContent resources={resources} observe={observe} keyword={keyword} />
    </VStack>
  );
}

export default LearnContent;
