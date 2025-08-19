import { Link } from "@chakra-ui/layout";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import NextLink from "next/link";

import { useTranslate } from "../../context/TranslateProvider";

import MenuButton from "./MenuButton";

function LanguageChooser() {
  const { locale } = useTranslate();

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
      icon={faChevronDown}
      text={locale ? locale.toUpperCase() : " - "}
    />
  );
}

export default LanguageChooser;
