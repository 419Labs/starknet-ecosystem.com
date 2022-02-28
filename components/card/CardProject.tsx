import { Box, Flex, HStack, Text } from "@chakra-ui/layout";
import { Image, Tag as ChakraTag } from "@chakra-ui/react";

import type { Tag } from "../layout/TagMenu";

export interface Project {
  name: string;
  shot_name: string;
  description: string;
  tags: Tag[];
  website: string;
  github: string;
  twitter: string;
  medium: string;
  discord: string;
  telegram: string;
  isLive: boolean;
  isTestnetLive: boolean;
}

interface CardProjectProps {
  project: Project;
}
function CardProject({ project }: CardProjectProps) {
  const { name, tags } = project;
  return (
    <Flex
      flex={1}
      p={6}
      w="full"
      h="full"
      cursor="pointer"
      bg="gray.800"
      borderRadius="md"
      direction="column"
      justify="space-between"
      align="center"
    >
      <Box boxSize="170px">
        <Image src="/starknet-logo.png" alt={`${name} logo`} />
      </Box>
      <Text my={8} fontSize="xl" fontWeight="bold">
        {name}
      </Text>
      <HStack spacing={2}>
        {tags && tags.length > 0 ? (
          tags.map((tag: Tag) => {
            return (
              <ChakraTag key={`project-${name}-tag-${tag.value}`}>
                {tag.label}
              </ChakraTag>
            );
          })
        ) : (
          <ChakraTag key={`project-${name}-tag-none`}>😕</ChakraTag>
        )}
      </HStack>
    </Flex>
  );
}

export default CardProject;
