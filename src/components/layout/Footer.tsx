import {
  Box,
  Divider,
  Flex,
  HStack,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/layout";
import { Tooltip as ChakraTooltip } from "@chakra-ui/react";
import { useState } from "react";

import { useTranslate } from "../../context/TranslateProvider";

import LanguageChooser from "./LanguageChooser";
import Link from "./Link";
import NetworkLogos from "./NetworkLogos";

const githubLink = "https://github.com/419Labs/starknet-ecosystem.com";
const telegramLink = "https://t.me/starknet_ecosystem";
const twitterLink = "https://twitter.com/StarkNetEco";

function Footer() {
  const { locale, t } = useTranslate();
  const [isTooltipOpen, setTooltipOpen] = useState(false);

  const renderTooltip = (label: string) => {
    const content = (
      <Text
        fontSize="sm"
        color="whiteAlpha.600"
        overflow="hidden"
        textOverflow="ellipsis"
        display="-webkit-box"
        sx={{ WebkitLineClamp: "3", WebkitBoxOrient: "vertical" }}
      >
        {label}
      </Text>
    );
    const tooltip = (
      <Flex
        fontSize="md"
        color="whiteAlpha.900"
        bg="primary.500"
        borderRadius="md"
        p={4}
      >
        {label}
      </Flex>
    );
    return (
      <ChakraTooltip isOpen={isTooltipOpen} bg="transparent" label={tooltip}>
        <Box
          onMouseEnter={() => setTooltipOpen(true)}
          onMouseLeave={() => setTooltipOpen(false)}
          onClick={() => setTooltipOpen(true)}
        >
          {content}
        </Box>
      </ChakraTooltip>
    );
  };

  return (
    <Flex
      w="full"
      pt={24}
      direction="column"
      justify="flex-start"
      align="flex-start"
      px={[4, 0]}
      pb={[12, 8]}
    >
      <HStack>
        <Text color="whiteAlpha.600">{t.common.made_with}</Text>
        <Text>❤️</Text>
        <Text color="whiteAlpha.600">{t.common.by}</Text>
        <Link isExternal active href="https://twitter.com/avnu_fi">
          {t.common.alpha_road_team}
        </Link>
      </HStack>
      <Divider my={4} bg="whiteAlpha.900" />
      <SimpleGrid columns={[2, 2, 3, 5]} spacing="20px" w="full">
        <VStack align="flex-start">
          <Text fontSize="lg">Company</Text>
          <VStack align="flex-start" fontSize="sm">
            <Link
              isExternal
              href="https://api.starknet-db.com/swagger-ui/index.html#/"
            >
              API
            </Link>
            <Link
              isExternal
              href="https://github.com/419Labs/starknet-ecosystem.com"
            >
              About
            </Link>
            <Link href={`/${locale}/privacy-policy`}>Privacy Policy</Link>
          </VStack>
        </VStack>
        <VStack align="flex-start">
          <Text fontSize="lg">Support</Text>
          <VStack align="flex-start" fontSize="sm">
            <Link
              isExternal
              href="https://github.com/419Labs/starknet-ecosystem.com/blob/main/docs/add-project.md"
            >
              List a project
            </Link>
            <Link
              isExternal
              href="https://github.com/419Labs/starknet-ecosystem.com/blob/main/docs/add-job.md"
            >
              List a job
            </Link>
            <Link isExternal href="https://t.me/starknet_ecosystem">
              Contact us
            </Link>
            <Link isExternal href="https://status.starknet-ecosystem.com">
              Status
            </Link>
          </VStack>
        </VStack>
        <VStack align="flex-start">
          <Text fontSize="lg">About</Text>
          <VStack align="flex-start" fontSize="sm" pr={8}>
            {renderTooltip(
              "This is a community-owned initiative supported by StarkWare. The\n" +
                "        links in the StarkNet Ecosystem are provided as a convenience and\n" +
                "        for informational purposes only; they do not constitute an\n" +
                "        endorsement or approval by our initiative of any of the projects\n" +
                "        or services listed therein."
            )}
          </VStack>
        </VStack>
        <VStack align="flex-start">
          <Text fontSize="lg">Follow us</Text>
          <NetworkLogos
            network={{
              github: githubLink,
              telegram: telegramLink,
              twitter: twitterLink,
            }}
          />
        </VStack>
        <VStack align="flex-start">
          <Text fontSize="lg">Language</Text>
          <LanguageChooser />
        </VStack>
      </SimpleGrid>
    </Flex>
  );
}

export default Footer;
