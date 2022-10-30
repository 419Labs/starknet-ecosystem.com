import { Flex } from "@chakra-ui/layout";
import { Skeleton, SkeletonCircle } from "@chakra-ui/react";

function CardProjectSkeleton() {
  return (
    <Flex
      direction="column"
      borderRadius="lg"
      align="center"
      overflow="hidden"
      p={1}
      border="1px solid"
      borderColor="whiteAlpha.200"
    >
      <Skeleton w="full" h="110px" borderTopRadius="md" />
      <SkeletonCircle mt="-36px" w="72px" h="72px" />
      <Skeleton mt={4} w="30%" h="20px" />
      <Skeleton mt={4} w="40%" h="20px" />
      <Skeleton my={4} w="40%" h="20px" />
    </Flex>
  );
}

export default CardProjectSkeleton;
