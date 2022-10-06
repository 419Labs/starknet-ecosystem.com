import { Flex, VStack } from "@chakra-ui/layout";
import { Skeleton } from "@chakra-ui/react";

function CardProjectSkeleton() {
  return (
    <Flex direction="row">
      <Skeleton h="112px" w="112px" borderRadius="md" />
      <Flex
        pl={4}
        flex={1}
        direction="column"
        justify="space-between"
        align="flex-start"
        w="full"
        h="112px"
      >
        <VStack w="full" align="flex-start">
          <Skeleton w="30%" h="20px" />
          <Skeleton w="50%" h="15px" />
        </VStack>
        <Skeleton w="50%" h="15px" />
      </Flex>
    </Flex>
  );
}

export default CardProjectSkeleton;
