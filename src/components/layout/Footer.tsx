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
        <Link isExternal active href="https://twitter.com/alpharoad_fi">
          {t.common.alpha_road_team}
        </Link>
      </HStack>
      <Divider my={4} bg="whiteAlpha.900" />
      <SimpleGrid columns={[2, 2, 3, 5]} spacing="20px" w="full">
        <VStack align="flex-start">
          <Text fontSize="lg">Company</Text>
          <VStack align="flex-start" fontSize="sm">
            <Link isExternal href="https://api.starknet-db.com/swagger-ui/index.html#/">
              API
            </Link>
            <Link isExternal href="https://github.com/419Labs/starknet-ecosystem.com">
              About
            </Link>
            <Link isExternal href="https://twitter.com/StarkNetEco">Linktree</Link>
          </VStack>
        </VStack>
        <VStack align="flex-start">
          <Text fontSize="lg">Support</Text>
          <VStack align="flex-start" fontSize="sm">
            <Link isExternal href="https://github.com/419Labs/starknet-ecosystem.com/blob/main/docs/add-project.md">
              List a project
            </Link>
            <Link isExternal href="https://github.com/419Labs/starknet-ecosystem.com/blob/main/docs/add-job.md">
              List a job
            </Link>
            <Link isExternal href="https://t.me/starknet_ecosystem">Contact us</Link>
          </VStack>
        </VStack>
        <VStack align="flex-start">
          <Text fontSize="lg">About</Text>
          <VStack align="flex-start" fontSize="sm">
            <Link href="/">
              This is a community-owned initiative supported by StarkWare. The
              links in the StarkNet Ecosystem are provided as a convenience and
              for informational purposes only; they do not constitute an
              endorsement or approval by our initiative of any of the projects
              or services listed therein.
            </Link>
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
