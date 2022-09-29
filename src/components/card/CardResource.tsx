import { Box, Flex, HStack, SimpleGrid, Text, VStack } from "@chakra-ui/layout";
import { useRouter } from "next/router";

import type { ResourceItf } from "../../../data/academy";
import { useTranslate } from "../../context/TranslateProvider";
import NetworkLogos from "../layout/NetworkLogos";

interface CardResourceProps {
  index: number;
  resource: ResourceItf;
}
function CardResource({ index, resource }: CardResourceProps) {
  const { t } = useTranslate();

  const { name, description, tagsRef: tags, network } = resource;

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

  return (
    <SimpleGrid
      minW="250px"
      transition=".4s ease all"
      _hover={{
        cursor: "pointer",
        marginTop: "-8px",
      }}
      onClick={() => console.log("coucou")}
      columns={2}
      gridTemplateColumns="min-content auto"
    >
      <Flex bg={getFallbackColor()} h="112px" w="112px" borderRadius="md" align="center" justify="center">
        {getFallbackText(name)}
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
        <VStack align="flex-start">
          <Text
            fontSize="xs"
            color="whiteAlpha.600"
            overflow="hidden"
            textOverflow="ellipsis"
            display="-webkit-box"
            sx={{ "-webkit-line-clamp": "3", "-webkit-box-orient": "vertical" }}
          >
            {description}
          </Text>
          <NetworkLogos network={network} />
        </VStack>
      </Flex>
    </SimpleGrid>
  );
}

export default CardResource;
