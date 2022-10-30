import { VStack } from "@chakra-ui/layout";

import type { BasicContentProps } from "./BasicContent";
import BasicContent from "./BasicContent";

function WalletsContent({
  resources,
  keyword = "",
  observe,
}: BasicContentProps) {
  return (
    <VStack w="full" align="flex-start">
      <BasicContent resources={resources} observe={observe} keyword={keyword} />
    </VStack>
  );
}

export default WalletsContent;
