import { Box, Flex, Link } from "@chakra-ui/layout";
import { Button, Hide } from "@chakra-ui/react";
import { faBars } from "@fortawesome/pro-regular-svg-icons";
import { faChevronDown } from "@fortawesome/pro-solid-svg-icons";
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
        icon={faChevronDown}
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
          <Link
            _hover={{ textDecoration: "none" }}
            href={githubLink}
            isExternal
          >
            <Button>{t.common.apply}</Button>
          </Link>
          <Link
            ml={2}
            _hover={{ textDecoration: "none" }}
            href={telegramLink}
            isExternal
          >
            <Button>{t.common.community}</Button>
          </Link>
          <Box ml={2}>{renderLanguagesOptions()}</Box>
        </Flex>
      </Hide>
      <Hide above="md">
        <Flex justify="flex-end">
          <Button onClick={() => setDrawerOpen(true)}>
            <FontAwesomeIcon fontSize="24px" icon={faBars} />
          </Button>
          <Drawer
            links={[
              { href: githubLink, label: t.common.apply },
              { href: telegramLink, label: t.common.community },
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
