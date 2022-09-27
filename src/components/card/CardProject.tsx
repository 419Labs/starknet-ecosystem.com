import { Box, Flex, Text } from "@chakra-ui/layout";
import { Image, Tag as ChakraTag } from "@chakra-ui/react";
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

  const getFallbackColor = () => {
    return `flat.${(index % 10) * 100}`;
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

  const indication = getIndicationText();
  return (
    <Flex
      direction="column"
      pl="20px"
      mt="20px"
      w="full"
      transition=".4s ease all"
      _hover={{
        marginTop: "16px",
      }}
      onClick={() =>
        router.push({
          pathname: "/projects",
          // TODO when API available, fetch data from getSeverSideProps in project page
          // query: {uuid: project.uuid},
        })
      }
    >
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
            src={network.twitterImage}
            alt={`${name} logo`}
            fallback={renderFallbackIcon()}
          />
        </Flex>
        <Box
          position="relative"
          zIndex={0}
          _hover={{ cursor: "pointer" }}
          maxHeight="200px"
          overflow="hidden"
          borderRadius="lg"
          bg={network.twitterBanner ? "transparent" : getFallbackColor()}
        >
          <Image
            transition=".4s ease all"
            src={network.twitterBanner}
            position="relative"
            objectFit="cover"
            height="200px"
            _hover={{
              transform: "scale(1.1)",
            }}
          />
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
                    fontWeight="medium"
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
        <Text as="h6" fontWeight="bold">
          {name}
        </Text>
        <NetworkLogos network={network} />
      </Flex>
    </Flex>
  );
}

export default CardProject;
