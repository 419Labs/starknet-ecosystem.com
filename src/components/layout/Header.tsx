import { Box, Flex, HStack, Text } from "@chakra-ui/layout";
import { Button, Hide } from "@chakra-ui/react";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";
import { useState } from "react";

import { useTranslate } from "../../context/TranslateProvider";

import Drawer from "./Drawer";
import LanguageChooser from "./LanguageChooser";
import Link from "./Link";
import Logo from "./Logo";

const addProjectUrl =
  "https://github.com/419Labs/starknet-ecosystem.com/blob/main/docs/add-project.md";
const bridgeUrl = "https://starkgate.starknet.io/";

function Header() {
  const { locale, t } = useTranslate();
  const { pathname } = useRouter();
  const router = useRouter();
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
      <Logo
        icon={
          router && router.pathname.startsWith("/projects")
            ? solid("arrow-left")
            : undefined
        }
      />
      <Hide below="md">
        <Flex direction="row" align="center">
          <Box ml={6}>
            <Link href={`/${locale}`} active={pathname === "/"}>
              {t.common.ecosystem || "Ecosystem"}
            </Link>
          </Box>
          <Box ml={6}>
            <Link href={`/${locale}/academy`} active={pathname === "/academy"}>
              {t.common.academy || "Academy"}
            </Link>
          </Box>
          <Box ml={6}>
            <Link href={`/${locale}/jobs`} active={pathname === "/jobs"}>
              {t.common.job || "Jobs"}
            </Link>
          </Box>
          <Box ml={6}>
            <Link href={`/${locale}/metrics`} active={pathname === "/metrics"}>
              {t.common.metrics || "Metrics"}
            </Link>
          </Box>
          <Box ml={6}>
            <Link isExternal href={addProjectUrl}>
              {t.common.apply || "Apply"}
            </Link>
          </Box>
          <Box
            mx={6}
            h="28px"
            w="1px"
            borderLeft="1px solid"
            borderColor="whiteAlpha.300"
          />
          <Box>
            <Link isExternal href={bridgeUrl}>
              {t.common.bridge || "Bridge"}
            </Link>
          </Box>
          <Box ml={6}>
            <LanguageChooser />
          </Box>
        </Flex>
      </Hide>
      <Hide above="md">
        <Flex justify="flex-end">
          <Button onClick={() => setDrawerOpen(true)}>
            <FontAwesomeIcon fontSize="24px" icon={solid("bars")} />
          </Button>
          <Drawer
            headerAction={<LanguageChooser />}
            links={[
              {
                href: `/${locale}`,
                label: t.common.ecosystem || "Ecosystem",
              },
              {
                href: `/${locale}/academy`,
                label: t.common.academy || "Academy",
              },
              {
                href: `/${locale}/jobs`,
                label: t.common.job || "Jobs",
              },
              {
                href: `/${locale}/metrics`,
                label: t.common.metrics || "Metrics",
              },
              {
                isExternal: true,
                href: bridgeUrl,
                label: t.common.bridge || "Bridge",
              },
              {
                isExternal: true,
                href: addProjectUrl,
                label: t.common.apply || "Apply",
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
