import { Box, Flex, Text } from "@chakra-ui/layout";
import { Image, Tag as ChakraTag } from "@chakra-ui/react";
import type { ReactElement } from "react";
import Flippy, { BackSide, FrontSide } from "react-flippy";

import type { ProjectItf } from "../../../data/ecosystem";
import { useTranslate } from "../../context/TranslateProvider";
import NetworkLogos from "../layout/NetworkLogos";

function pick(amount: number) {
  return (_: unknown, index: number) => index < amount;
}

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
        boxSize="50px"
        h="full"
        w="full"
        bg="gray.600"
        borderRadius="full"
      >
        <Text fontWeight="bold" fontSize="24px">
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

  const indication = getIndicationText();
  return (
    <Flex direction="column" ml="20px" mt="20px">
      <Box position="relative">
        <Flex
          borderRadius="50%"
          border="1px solid white"
          h="50px"
          w="50px"
          position="absolute"
          top="-20px"
          left="-20px"
          justify="center"
          align="center"
          zIndex={1}
        >
          <Image
            borderRadius="full"
            src={`/logos/${logo}`}
            alt={`${name} logo`}
            fallback={renderFallbackIcon()}
          />
        </Flex>
        <Box position="relative" zIndex={0}>
          <Image src="/arf_banner.png" borderRadius="md" position="relative" />
          <Box position="absolute" zIndex={3} bottom={0} p={2}>
            {indication && (
              <ChakraTag
                fontSize="xs"
                m={0.5}
                fontWeight="bold"
                borderRadius="xl"
                border="0.7px solid white"
                color="green.100"
                background="green.500"
              >
                {indication}
              </ChakraTag>
            )}
            {tags && tags.length > 0 ? (
              tags.filter(pick(5)).map((tag) => {
                // limit to 5 tags, as this looks nice and limits tags to 2 lines max
                return (
                  <ChakraTag
                    fontSize="xs"
                    fontWeight="bold"
                    borderRadius="xl"
                    background="primary.900"
                    border="0.7px solid white"
                    m={0.5}
                    key={`project-${name}-tag-${tag.value}`}
                  >
                    {t.tags[tag.value]}
                  </ChakraTag>
                );
              })
            ) : (
              <ChakraTag key={`project-${name}-tag-none`}>😕</ChakraTag>
            )}
          </Box>
        </Box>
      </Box>
      <Flex direction="row" justify="space-between" mt={2} px={2}>
        <Text as="h6" fontWeight="bold">{name}</Text>
        <NetworkLogos network={project.network} />
      </Flex>
    </Flex>
    /* <Flippy
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
            <Text as="h2" my={8} fontSize="xl" fontWeight="bold">
              {name}
            </Text>
            <Flex direction="row" wrap="wrap" justifyContent="center">
              {tags && tags.length > 0 ? (
                tags.filter(pick(5)).map((tag) => {
                  // limit to 5 tags, as this looks nice and limits tags to 2 lines max
                  return (
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
    </Flippy> */
  );
}

export default CardProject;
