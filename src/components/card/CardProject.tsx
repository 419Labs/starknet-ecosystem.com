import { Box, Flex, Text } from "@chakra-ui/layout";
import { Image, Tag as ChakraTag } from "@chakra-ui/react";
import type { ReactElement } from "react";
import Flippy, { BackSide, FrontSide } from "react-flippy";

import type { ProjectItf } from "../../../data/ecosystem";
import type { Tag } from "../../../data/tag";
import { useTranslate } from "../../context/TranslateProvider";
import NetworkLogos from "../layout/NetworkLogos";

interface CardProjectProps {
  project: ProjectItf;
  isFlipped: boolean;
  onClick: () => void;
}
function CardProject({ project, isFlipped, onClick }: CardProjectProps) {
  const { t } = useTranslate();

  const {
    name,
    description,
    tagsRef: tags,
    logo,
    isLive,
    isTestnetLive,
  } = project;

  const getIndicationText = (): string | undefined => {
    if (isLive) {
      return "Live";
    }
    if (isTestnetLive) {
      return "Testnet";
    }
    return undefined;
  };

  const renderFallbackIcon = () => {
    return (
      <Flex
        align="center"
        justify="center"
        boxSize="170px"
        bg="gray.600"
        borderRadius="50%"
      >
        <Text fontWeight="bold" fontSize="56px" color="gray.800">
          {name.substring(0, 2).toUpperCase()}
        </Text>
      </Flex>
    );
  };

  const renderBaseCard = (content: ReactElement, indication?: string) => {
    return (
      <Flex
        border="1px solid"
        borderColor="gray.800"
        _hover={{
          // boxShadow: "0px 0px 1px #1a202c, 0 0px 20px #46526a",
          borderColor: "gray.600",
        }}
        cursor="pointer"
        p={5}
        bg="gray.800"
        borderRadius="md"
        direction="column"
        justify="space-between"
        align="center"
        minHeight="350px"
        height="full"
        position="relative"
      >
        {indication && (
          <Box position="absolute" right={2} top={2}>
            <ChakraTag color="green.100" background="green.500">
              {indication}
            </ChakraTag>
          </Box>
        )}
        {content}
      </Flex>
    );
  };
  return (
    <Flippy
      isFlipped={isFlipped}
      height="100%"
      flipDirection="horizontal"
      onClick={onClick}
    >
      <FrontSide style={{ padding: 0 }}>
        {renderBaseCard(
          <>
            <Flex align="center" justify="center" flex={1}>
              <Image
                width="170px"
                maxHeight="170px"
                src={`/logos/${logo}`}
                alt={`${name} logo`}
                fallback={renderFallbackIcon()}
              />
            </Flex>
            <Text my={8} fontSize="xl" fontWeight="bold">
              {name}
            </Text>
            <Flex direction="row" wrap="wrap">
              {tags && tags.length > 0 ? (
                tags.map((tag: Tag) => {
                  return (
                    // Maybe show only 3-4 firsts ? but keep all for sort/filters
                    <ChakraTag m={0.5} key={`project-${name}-tag-${tag.value}`}>
                      {t.tags[tag.value]}
                    </ChakraTag>
                  );
                })
              ) : (
                <ChakraTag key={`project-${name}-tag-none`}>😕</ChakraTag>
              )}
            </Flex>
          </>,
          getIndicationText()
        )}
      </FrontSide>
      <BackSide style={{ padding: 0 }}>
        {renderBaseCard(
          <Flex
            position="relative"
            direction="column"
            justify="space-between"
            align="flex-start"
            h="full"
            w="full"
          >
            <Text
              fontSize="md"
              fontWeight="500"
              opacity=".8"
              px={0}
              noOfLines={10}
            >
              {description}
            </Text>
            <NetworkLogos network={project.network} />
          </Flex>
        )}
      </BackSide>
    </Flippy>
  );
}

export default CardProject;
