import { Box, Flex, Link } from "@chakra-ui/layout";
import { Button, Hide } from "@chakra-ui/react";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NextLink from "next/link";
import { useState } from "react";

import { useTranslate } from "../../context/TranslateProvider";

import Drawer from "./Drawer";
import Logo from "./Logo";

function Header() {
  const { locale, t } = useTranslate();
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  return (
    <Flex
      w="full"
      py={4}
      direction="row"
      justify="space-between"
      align="center"
      px={0}
    >
      <Logo />
      <Hide below="md">
        <Flex direction="row">
          <Box ml={6}>
            <NextLink href={`/${locale}`}>
              <Link _hover={{ textDecoration: "none", opacity: ".5" }}>
                {t.common.ecosystem || "Ecosystem"}
              </Link>
            </NextLink>
          </Box>
          <Box ml={6}>
            <NextLink href={`/${locale}/learn`}>
              <Link _hover={{ textDecoration: "none", opacity: ".5" }}>
                {t.common.learn || "Learn"}
              </Link>
            </NextLink>
          </Box>
          <Box ml={6}>
            <NextLink href={`/${locale}/jobs`}>
              <Link _hover={{ textDecoration: "none", opacity: ".5" }}>
                {t.common.job || "Jobs"}
              </Link>
            </NextLink>
          </Box>
          <Box ml={6}>
            <NextLink href={`/${locale}/metrics`}>
              <Link _hover={{ textDecoration: "none", opacity: ".5" }}>
                {t.common.metrics || "Metrics"}
              </Link>
            </NextLink>
          </Box>
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
                href: `/${locale}`,
                label: t.common.ecosystem || "Ecosystem",
              },
              {
                href: `/${locale}/learn`,
                label: t.common.learn || "Learn",
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
            isOpen={isDrawerOpen}
            onClose={() => setDrawerOpen(false)}
          />
        </Flex>
      </Hide>
    </Flex>
  );
}

export default Header;
