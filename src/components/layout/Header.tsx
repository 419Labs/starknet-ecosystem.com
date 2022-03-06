import { Box, Flex, Link, Text } from "@chakra-ui/layout";
import { Button, Image, Hide } from "@chakra-ui/react";
import { faGithub, faTelegram } from "@fortawesome/free-brands-svg-icons";
import { faChevronDown } from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NextLink from "next/link";

import { useTranslate } from "../../context/TranslateProvider";

import MenuButton from "./MenuButton";

function Header() {
  const { locale, t } = useTranslate();

  const githubLink = "https://github.com/419Labs/starknet-ecosystem.com";
  const telegramLink = "https://t.me/starknet_ecosystem";
  return (
    <Flex
      w="full"
      py={4}
      direction="row"
      justify="space-between"
      align="center"
      px={[4, 0]}
    >
      <Flex direction="row" align="center" justify="flex-start">
        <Box boxSize="36px">
          <Image src="/starknet-logo.png" alt="Starknet Logo" />
        </Box>
        <Text ml={3} fontSize="lg" fontWeight="bold">
          Starknet ecosystem
        </Text>
      </Flex>
      <Hide below="sm">
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
          <Box ml={2}>
            <MenuButton
              menus={[
                {
                  href: "",
                  children: (
                    <NextLink href="/" passHref locale="fr">
                      <Link
                        _hover={{ textDecoration: "none" }}
                        href="/"
                        w="full"
                      >
                        Français
                      </Link>
                    </NextLink>
                  ),
                },
                {
                  href: "",
                  children: (
                    <NextLink href="/" passHref locale="en">
                      <Link
                        _hover={{ textDecoration: "none" }}
                        href="/"
                        w="full"
                      >
                        English
                      </Link>
                    </NextLink>
                  ),
                },
                {
                  href: "",
                  children: (
                    <NextLink href="/" passHref locale="tr">
                      <Link
                        _hover={{ textDecoration: "none" }}
                        href="/"
                        w="full"
                      >
                        Türk
                      </Link>
                    </NextLink>
                  ),
                },
                {
                  href: "",
                  children: (
                    <NextLink href="/" passHref locale="it">
                      <Link
                        _hover={{ textDecoration: "none" }}
                        href="/"
                        w="full"
                      >
                        Italiano
                      </Link>
                    </NextLink>
                  ),
                },
                {
                  href: "",
                  children: (
                    <NextLink href="/" passHref locale="zh_CN">
                      <Link
                        _hover={{ textDecoration: "none" }}
                        href="/"
                        w="full"
                      >
                        简体中文
                      </Link>
                    </NextLink>
                  ),
                },
                {
                  href: "",
                  children: (
                    <NextLink href="/" passHref locale="zh_TW">
                      <Link
                        _hover={{ textDecoration: "none" }}
                        href="/"
                        w="full"
                      >
                        繁體中文
                      </Link>
                    </NextLink>
                  ),
                },
              ]}
              icon={faChevronDown}
              text={locale ? locale.toUpperCase() : " - "}
            />
          </Box>
        </Flex>
      </Hide>
      <Hide above="sm">
        <Flex justify="flex-end">
          <Link isExternal href={githubLink}>
            <FontAwesomeIcon fontSize="24px" icon={faGithub} />
          </Link>
          <Link ml={4} isExternal href={telegramLink}>
            <FontAwesomeIcon fontSize="24px" icon={faTelegram} />
          </Link>
        </Flex>
      </Hide>
    </Flex>
  );
}

export default Header;
