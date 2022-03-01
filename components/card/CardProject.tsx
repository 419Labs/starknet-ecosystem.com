import { Box, Flex, HStack, Link, Text } from "@chakra-ui/layout";
import { Image, Tag as ChakraTag } from "@chakra-ui/react";
import {
  faDiscord,
  faGithub,
  faMedium,
  faTelegram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/pro-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { ReactElement } from "react";
import Flippy, { FrontSide, BackSide } from "react-flippy";

import type { ProjectItf } from "../../data/ecosystem";
import type { Tag } from "../../data/tag";

interface CardProjectProps {
  project: ProjectItf;
  isFlipped: boolean;
  onClick: () => void;
}
function CardProject({ project, isFlipped, onClick }: CardProjectProps) {
  const {
    name,
    description,
    tagsRef: tags,
    logo,
    discord,
    github,
    telegram,
    twitter,
    medium,
    website,
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

  const renderBaseCard = (content: ReactElement, indication?: string) => {
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
            <HStack
              align="flex-start"
              spacing={4}
              fontSize="20px"
              onClick={(e) => e.stopPropagation()}
            >
              {website && (
                <Link isExternal href={website}>
                  <FontAwesomeIcon icon={faGlobe} />
                </Link>
              )}
              {twitter && (
                <Link isExternal href={twitter}>
                  <FontAwesomeIcon icon={faTwitter} />
                </Link>
              )}
              {telegram && (
                <Link isExternal href={telegram}>
                  <FontAwesomeIcon icon={faTelegram} />
                </Link>
              )}
              {discord && (
                <Link isExternal href={discord}>
                  <FontAwesomeIcon icon={faDiscord} />
                </Link>
              )}
              {medium && (
                <Link isExternal href={medium}>
                  <FontAwesomeIcon icon={faMedium} />
                </Link>
              )}
              {github && (
                <Link isExternal href={github}>
                  <FontAwesomeIcon icon={faGithub} />
                </Link>
              )}
            </HStack>
          </Flex>
        )}
      </BackSide>
    </Flippy>
  );
}

export default CardProject;
