import { Box, Flex } from "@chakra-ui/layout";
import { Button, Hide } from "@chakra-ui/react";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";
import { useState } from "react";

import { useTranslate } from "../../context/TranslateProvider";

import Drawer from "./Drawer";
import Link from "./Link";
import Logo from "./Logo";

function Header() {
  const { locale, t } = useTranslate();
  const { pathname } = useRouter();
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
            <Link href={`/${locale}`} active={pathname === "/"}>
              {t.common.ecosystem || "Ecosystem"}
            </Link>
          </Box>
          <Box ml={6}>
            <Link href={`/${locale}/learn`} active={pathname === "/learn"}>
              {t.common.learn || "Learn"}
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
