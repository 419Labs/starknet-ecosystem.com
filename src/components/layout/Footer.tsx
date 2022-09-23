import {
  Divider,
  Flex,
  HStack,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/layout";

import { useTranslate } from "../../context/TranslateProvider";

import LanguageChooser from "./LanguageChooser";
import Link from "./Link";
import NetworkLogos from "./NetworkLogos";

const githubLink = "https://github.com/419Labs/starknet-ecosystem.com";
const telegramLink = "https://t.me/starknet_ecosystem";
const twitterLink = "https://twitter.com/StarkNetEco";

function Footer() {
  const { t } = useTranslate();
  return (
    <Flex
      w="full"
      py={8}
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
        <Link active href="https://twitter.com/alpharoad_fi">
          {t.common.alpha_road_team}
        </Link>
      </HStack>
      <Divider my={4} bg="whiteAlpha.900" />
      <SimpleGrid
        columns={[ 2, 2, 3, 5 ]}
        spacing="20px"
        w="full"
      >
        <VStack align="flex-start">
          <Text fontSize="lg">Company</Text>
          <VStack align="flex-start" fontSize="sm">
            <Link href="/">API</Link>
            <Link href="/">About</Link>
            <Link href="/">Linktree</Link>
          </VStack>
        </VStack>
        <VStack align="flex-start">
          <Text fontSize="lg">Support</Text>
          <VStack align="flex-start" fontSize="sm">
            <Link href="/">List a project</Link>
            <Link href="/">List a job</Link>
            <Link href="/">Contact us</Link>
          </VStack>
        </VStack>
        <VStack align="flex-start">
          <Text fontSize="lg">About</Text>
          <VStack align="flex-start" fontSize="sm">
            <Link href="/">Terms of service</Link>
            <Link href="/">Privacy policy</Link>
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
