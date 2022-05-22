import { Box, Flex, HStack, Link } from "@chakra-ui/layout";
import { Button, Hide } from "@chakra-ui/react";
import { brands, solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NextLink from "next/link";
import { useState } from "react";

import { useTranslate } from "../../context/TranslateProvider";

import Drawer from "./Drawer";
import Logo from "./Logo";
import MenuButton from "./MenuButton";

function Header() {
  const { locale, t } = useTranslate();
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const githubLink = "https://github.com/419Labs/starknet-ecosystem.com";
  const telegramLink = "https://t.me/starknet_ecosystem";
  const twitterLink = "https://twitter.com/StarkNetEco";

  const renderLanguagesOptions = () => {
    return (
      <MenuButton
        menus={[
          {
            href: "",
            children: (
              <NextLink href="/" passHref locale="fr">
                <Link _hover={{ textDecoration: "none" }} href="/" w="full">
                  Français
                </Link>
              </NextLink>
            ),
          },
          {
            href: "",
            children: (
              <NextLink href="/" passHref locale="en">
                <Link _hover={{ textDecoration: "none" }} href="/" w="full">
                  English
                </Link>
              </NextLink>
            ),
          },
          {
            href: "",
            children: (
              <NextLink href="/" passHref locale="tr">
                <Link _hover={{ textDecoration: "none" }} href="/" w="full">
                  Türk
                </Link>
              </NextLink>
            ),
          },
          {
            href: "",
            children: (
              <NextLink href="/" passHref locale="it">
                <Link _hover={{ textDecoration: "none" }} href="/" w="full">
                  Italiano
                </Link>
              </NextLink>
            ),
          },
          {
            href: "",
            children: (
              <NextLink href="/" passHref locale="zh_CN">
                <Link _hover={{ textDecoration: "none" }} href="/" w="full">
                  简体中文
                </Link>
              </NextLink>
            ),
          },
          {
            href: "",
            children: (
              <NextLink href="/" passHref locale="zh_TW">
                <Link _hover={{ textDecoration: "none" }} href="/" w="full">
                  繁體中文
                </Link>
              </NextLink>
            ),
          },
          {
            href: "",
            children: (
              <NextLink href="/" passHref locale="pl">
                <Link _hover={{ textDecoration: "none" }} href="/" w="full">
                  Polski
                </Link>
              </NextLink>
            ),
          },
          {
            href: "",
            children: (
              <NextLink href="/" passHref locale="pt">
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
      py={4}
      direction="row"
      justify="space-between"
      align="center"
      px={[4, 0]}
    >
      <Logo />
      <Hide below="md">
        <Flex direction="row">
          <HStack spacing={4} mr={2}>
            <Link isExternal href={twitterLink}>
              <FontAwesomeIcon fontSize="24px" icon={brands("twitter")} />
            </Link>
            <Link isExternal href={telegramLink}>
              <FontAwesomeIcon fontSize="24px" icon={brands("telegram")} />
            </Link>
            <Link isExternal href={githubLink}>
              <FontAwesomeIcon fontSize="24px" icon={brands("github")} />
            </Link>
          </HStack>
          <Box ml={2}>
            <NextLink href={`/${locale}/jobs`}>
              <Button>{t.common.job || "Jobs"}</Button>
            </NextLink>
          </Box>
          <Box ml={2}>
            <NextLink href={`/${locale}/metrics`}>
              <Button>{t.common.metrics || "Metrics"}</Button>
            </NextLink>
          </Box>
          <Box ml={2}>{renderLanguagesOptions()}</Box>
        </Flex>
      </Hide>
      <Hide above="md">
        <Flex justify="flex-end">
          <Button onClick={() => setDrawerOpen(true)}>
            <FontAwesomeIcon fontSize="24px" icon={solid("bars")} />
          </Button>
          <Drawer
            links={[
              {
                href: twitterLink,
                icon: brands("twitter"),
                label: "Twitter",
                isExternal: true,
              },
              {
                href: telegramLink,
                icon: brands("telegram"),
                label: t.common.community,
                isExternal: true,
              },
              {
                href: githubLink,
                icon: brands("github"),
                label: t.common.apply,
                isExternal: true,
              },
              {
                href: `/${locale}/jobs`,
                label: t.common.job || "Jobs",
              },
              {
                href: `/${locale}/metrics`,
                label: t.common.metrics || "Metrics",
              },
            ]}
            headerAction={renderLanguagesOptions()}
            isOpen={isDrawerOpen}
            onClose={() => setDrawerOpen(false)}
          />
        </Flex>
      </Hide>
    </Flex>
  );
}

export default Header;
