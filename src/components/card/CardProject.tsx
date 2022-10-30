import { Box, Flex, HStack, Text } from "@chakra-ui/layout";
import { Avatar, Image, Tag as ChakraTag } from "@chakra-ui/react";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";

import type { ProjectItf } from "../../../data/ecosystem";
import { useTranslate } from "../../context/TranslateProvider";
import NetworkLogos from "../layout/NetworkLogos";

function pick(amount: number) {
  return (_: unknown, index: number) => index < amount;
}

interface CardProjectProps {
  index: number;
  project: ProjectItf;
}
function CardProject({ index, project }: CardProjectProps) {
  const { t } = useTranslate();
  const router = useRouter();

  const { name, tagsRef: tags, network, isLive, isTestnetLive } = project;

  const getFallbackText = (text: string) => {
    return (
      <Text fontWeight="bold" fontSize="24px">
        {text}
      </Text>
    );
  };

  const getFallbackColor = () => {
    return `flat.${((index % 9) + 1) * 100}`;
  };

  const getIndicationText = (): string | undefined => {
    if (isLive) {
      return "Live";
    }
    if (isTestnetLive) {
      return "Testnet";
    }
    return undefined;
  };

  const renderFallbackImage = () => {
    return (
      <Flex
        borderTopRadius="md"
        minH="110px"
        align="flex-start"
        justify="center"
        pt={4}
        bg={getFallbackColor()}
      >
        {getFallbackText(name.toUpperCase())}
      </Flex>
    );
  };

  const indication = getIndicationText();
  return (
    <Flex
      onClick={() => router.push({ pathname: `/projects/${project.id}` })}
      align="center"
      direction="column"
      bg="primary.700"
      borderRadius="lg"
      overflow="hidden"
      p={1}
      transition=".4s ease all"
      cursor="pointer"
      _hover={{
        background: "primary.500",
        ".project-banner": {
          transform: "scale(1.1)",
        },
      }}
    >
      <Box position="relative" w="full" overflow="hidden" borderTopRadius="md">
        <Image
          minH="110px"
          fallback={renderFallbackImage()}
          transition="all .4s ease"
          src={network.twitterBanner}
          position="relative"
          objectFit="cover"
          className="project-banner"
        />
        {indication && (
          <ChakraTag
            position="absolute"
            top={2}
            left={2}
            borderRadius="xl"
            background="green.500"
          >
            <FontAwesomeIcon fontSize="8px" icon={solid("circle")} />
            <Text ml={2} fontSize="xs" color="green.100" fontWeight="bold">
              {indication}
            </Text>
          </ChakraTag>
        )}
      </Box>
      <Flex direction="column" align="center" mt="-50px">
        <Avatar
          size="xl"
          name={name}
          src={network.twitterImage}
          border="2px solid white"
          bg={getFallbackColor()}
        />
        <Text as="h6" fontSize="lg" fontWeight="bold" mt={4}>
          {name}
        </Text>
        <HStack
          spacing={0}
          flexWrap="wrap"
          justify="center"
          shouldWrapChildren
          mt={4}
        >
          {tags && tags.length > 0 ? (
            tags.filter(pick(5)).map((tag) => {
              // limit to 5 tags, as this looks nice and limits tags to 2 lines max
              return (
                <ChakraTag
                  fontSize="xs"
                  fontWeight="medium"
                  borderRadius="xl"
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
        </HStack>
        <Box my={4}>
          <NetworkLogos network={network} />
        </Box>
      </Flex>
    </Flex>
  );
}

export default CardProject;
