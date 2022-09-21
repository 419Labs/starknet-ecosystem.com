import {
  Divider,
  Flex,
  HStack,
  Link,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/layout";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import NextLink from "next/link";

import { useTranslate } from "../../context/TranslateProvider";

import MenuButton from "./MenuButton";
import NetworkLogos from "./NetworkLogos";

const githubLink = "https://github.com/419Labs/starknet-ecosystem.com";
const telegramLink = "https://t.me/starknet_ecosystem";
const twitterLink = "https://twitter.com/StarkNetEco";

function Footer() {
  const { locale, t } = useTranslate();

  const renderLanguagesOptions = () => {
    return (
      <MenuButton
        menus={[
          {
            href: "",
            children: (
              <NextLink href="" passHref locale="fr">
                <Link _hover={{ textDecoration: "none" }} href="/" w="full">
                  Français
                </Link>
              </NextLink>
            ),
          },
          {
            href: "",
            children: (
              <NextLink href="" passHref locale="en">
                <Link _hover={{ textDecoration: "none" }} href="/" w="full">
                  English
                </Link>
              </NextLink>
            ),
          },
          {
            href: "",
            children: (
              <NextLink href="" passHref locale="tr">
                <Link _hover={{ textDecoration: "none" }} href="/" w="full">
                  Türk
                </Link>
              </NextLink>
            ),
          },
          {
            href: "",
            children: (
              <NextLink href="" passHref locale="it">
                <Link _hover={{ textDecoration: "none" }} href="/" w="full">
                  Italiano
                </Link>
              </NextLink>
            ),
          },
          {
            href: "",
            children: (
              <NextLink href="" passHref locale="zh_CN">
                <Link _hover={{ textDecoration: "none" }} href="/" w="full">
                  简体中文
                </Link>
              </NextLink>
            ),
          },
          {
            href: "",
            children: (
              <NextLink href="" passHref locale="zh_TW">
                <Link _hover={{ textDecoration: "none" }} href="/" w="full">
                  繁體中文
                </Link>
              </NextLink>
            ),
          },
          {
            href: "",
            children: (
              <NextLink href="" passHref locale="pl">
                <Link _hover={{ textDecoration: "none" }} href="/" w="full">
                  Polski
                </Link>
              </NextLink>
            ),
          },
          {
            href: "",
            children: (
              <NextLink href="" passHref locale="pt">
                <Link _hover={{ textDecoration: "none" }} href="/" w="full">
                  Português
                </Link>
              </NextLink>
            ),
          },
        ]}
        icon={solid("chevron-down")}
        text={locale ? locale.toUpperCase() : " - "}
      />
    );
  };

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
        <Link
          _hover={{ textDecoration: "none" }}
          isExternal
          href="https://twitter.com/alpharoad_fi"
        >
          {t.common.alpha_road_team}
        </Link>
      </HStack>
      <Divider my={4} bg="white" />
      <SimpleGrid
        columns={{ sm: 2, md: 2, lg: 3, xl: 5 }}
        spacing="20px"
        w="full"
      >
        <VStack align="flex-start">
          <Text fontSize="lg">Company</Text>
          <VStack align="flex-start" fontSize="sm" color="whiteAlpha.600">
            <Text>API</Text>
            <Text>About</Text>
            <Text>Linktree</Text>
          </VStack>
        </VStack>
        <VStack align="flex-start">
          <Text fontSize="lg">Support</Text>
          <VStack align="flex-start" fontSize="sm" color="whiteAlpha.600">
            <Text>List a project</Text>
            <Text>List a job</Text>
            <Text>Contact us</Text>
          </VStack>
        </VStack>
        <VStack align="flex-start">
          <Text fontSize="lg">About</Text>
          <VStack align="flex-start" fontSize="sm" color="whiteAlpha.600">
            <Text>Terms of service</Text>
            <Text>Privacy policy</Text>
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
          {renderLanguagesOptions()}
        </VStack>
      </SimpleGrid>
    </Flex>
  );
}

export default Footer;
