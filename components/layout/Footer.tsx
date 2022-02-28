import { Flex, HStack, Link, Text } from "@chakra-ui/layout";

function Footer() {
  return (
    <Flex
      w="full"
      py={4}
      direction="row"
      justify="space-between"
      align="center"
    >
      <HStack>
        <Text color="whiteAlpha.600">Dev with</Text>
        <Text>❤️</Text>
        <Text color="whiteAlpha.600">by</Text>
        <Link isExternal href="https://alpharoad.fi">
          AlphaRoadFinance
        </Link>
      </HStack>
    </Flex>
  );
}

export default Footer;
