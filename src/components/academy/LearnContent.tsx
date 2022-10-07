import { HStack, Text, VStack } from "@chakra-ui/layout";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import CardHighlight from "../card/CardHighlight";

import type { BasicContentProps } from "./BasicContent";
import BasicContent from "./BasicContent";

function LearnContent({ resources, keyword = "", observe }: BasicContentProps) {
  return (
    <VStack w="full" align="flex-start">
      <BasicContent resources={resources} observe={observe} keyword={keyword} />
      <Text pt={20} fontSize="6xl" fontWeight="bold">
        Useful
      </Text>
      <HStack>
        <CardHighlight
          bg="flat.100"
          icon={<FontAwesomeIcon icon={solid("home")} />}
          title="Get started"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
        />
      </HStack>
    </VStack>
  );
}

export default LearnContent;
