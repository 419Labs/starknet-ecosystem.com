import { Flex, SimpleGrid, Text, VStack } from "@chakra-ui/layout";

import type { ResourceItf } from "../../../data/academy";

interface CardResourceProps {
  index: number;
  resource: ResourceItf;
  indication?: any;
  cardContent?: any;
}
function CardResource({
  index,
  resource,
  indication,
  cardContent,
}: CardResourceProps) {
  const { name, description } = resource;

  const getFallbackText = (text: string) => {
    return (
      <Text fontWeight="bold" fontSize="24px">
        {text.substring(0, 1).toUpperCase()}
      </Text>
    );
  };

  const getFallbackColor = () => {
    return `flat.${((index % 9) + 1) * 100}`;
  };

  const handleClick = () => {
    if (resource.link) window.open(resource.link, "_blank");
  };

  return (
    <SimpleGrid
      minW="250px"
      transition=".4s ease all"
      _hover={{
        cursor: "pointer",
        marginTop: "-8px",
      }}
      onClick={handleClick}
      columns={2}
      gridTemplateColumns="min-content auto"
    >
      <Flex
        bg={getFallbackColor()}
        h="112px"
        w="112px"
        borderRadius="md"
        align="center"
        justify="center"
        overflow="hidden"
      >
        {cardContent || getFallbackText(name)}
      </Flex>
      <Flex
        h="full"
        direction="column"
        justify="space-between"
        align="flex-start"
        pl={4}
      >
        <Text as="h6" fontWeight="bold">
          {name}
        </Text>
        <VStack align="flex-start" justify="space-between" h="full">
          <Text
            fontSize="sm"
            color="whiteAlpha.600"
            overflow="hidden"
            textOverflow="ellipsis"
            display="-webkit-box"
            sx={{ WebkitLineClamp: "2", WebkitBoxOrient: "vertical" }}
          >
            {description}
          </Text>
          {indication}
        </VStack>
      </Flex>
    </SimpleGrid>
  );
}

export default CardResource;
