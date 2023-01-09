import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";
import type { LegacyRef } from "react";

import type { ResourceItf } from "../../../data/academy";
import { useTranslate } from "../../context/TranslateProvider";
import { filterResources } from "../../services/resource.service";
import CardResource from "../card/CardResource";
import CardResourceSkeleton from "../card/CardResourceSkeleton";
import DifficultyIcon from "../layout/DifficultyIcon";
import NetworkLogos from "../layout/NetworkLogos";

export interface BasicContentProps {
  resources: ResourceItf[];
  keyword?: string;
  observe: LegacyRef<HTMLDivElement>;
  isLoading?: boolean;
}
function BasicContent({
  resources,
  keyword = "",
  observe,
  isLoading,
}: BasicContentProps) {
  const { t } = useTranslate();
  const filteredResources = filterResources(resources, keyword);

  const renderData = () => {
    return filteredResources.map((resource: ResourceItf, index: number) => {
      const { network, difficulty, image } = resource;
      return (
        <Box
          ref={index === resources.length - 1 ? observe : null}
          // eslint-disable-next-line react/no-array-index-key
          key={`resource-${resource.name}-${index}`}
          flex={1}
        >
          <CardResource
            index={index}
            resource={resource}
            cardContent={image ? <Image maxW="64px" src={image} /> : undefined}
            indication={
              difficulty ? (
                <DifficultyIcon difficultyLabel={difficulty} />
              ) : (
                <NetworkLogos network={network} />
              )
            }
          />
        </Box>
      );
    });
  };
  const renderLoadingState = () => {
    return Array(20)
      .fill(0)
      .map((_, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <Box key={`project-skeleton-${index}`} flex={1}>
          <CardResourceSkeleton />
        </Box>
      ));
  };

  return isLoading || (filteredResources && filteredResources.length > 0) ? (
    <SimpleGrid columns={{ sm: 1, lg: 2, xl: 3 }} spacing="20px" w="full">
      {isLoading ? renderLoadingState() : renderData()}
    </SimpleGrid>
  ) : (
    <Flex w="full" direction="column" justify="center" align="center" mt={20}>
      <Text fontSize="xl">{t.common.no_resource}</Text>
    </Flex>
  );
}

export default BasicContent;
