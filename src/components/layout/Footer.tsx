import { Flex, HStack, Link, Text } from "@chakra-ui/layout";

import { useTranslate } from "../../context/TranslateProvider";

function Footer() {
  const { t } = useTranslate();

  return (
    <Flex
      w="full"
      py={4}
      direction="row"
      justify="space-between"
      align="center"
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
    </Flex>
  );
}

export default Footer;
