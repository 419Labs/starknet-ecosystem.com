import { Box, Flex, HStack, Text } from "@chakra-ui/layout";
import { Image, Tag as ChakraTag } from "@chakra-ui/react";
import type { ReactElement } from "react";
import Flippy, { FrontSide, BackSide } from "react-flippy";

import type { ProjectItf } from "../../data/ecosystem";
import type { Tag } from "../../data/tag";

interface CardProjectProps {
  project: ProjectItf;
}
function CardProject({ project }: CardProjectProps) {
  const { name, description, tagsRef: tags, logo } = project;
  const renderBaseCard = (content: ReactElement) => {
    return (
      <Flex
        cursor="pointer"
        boxShadow="0 0px 0px 50 rgb(255 255 255 / 20%)"
        p={6}
        bg="gray.800"
        borderRadius="md"
        direction="column"
        justify="space-between"
        align="center"
        minHeight="350px"
      >
        {content}
      </Flex>
    );
  };
  return (
    <Flippy flipOnClick flipDirection="horizontal">
      <FrontSide style={{ padding: 0 }}>
        {renderBaseCard(
          <>
            <Flex align="center" justify="center" flex={1}>
              <Image
                width="170px"
                maxHeight="170px"
                src={logo === "" ? "/starknet-logo.png" : `/logos/${logo}`}
                alt={`${name} logo`}
              />
            </Flex>
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
          </>
        )}
      </FrontSide>
      <BackSide style={{ padding: 0 }}>
        {renderBaseCard(<Text>{description}</Text>)}
      </BackSide>
    </Flippy>
  );
}

export default CardProject;
