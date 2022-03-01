import { Box, Flex, Link, Text } from "@chakra-ui/layout";
import { Button, Image } from "@chakra-ui/react";

function Header() {
  return (
    <Flex
      w="full"
      py={4}
      direction="row"
      justify="space-between"
      align="center"
    >
      <Flex direction="row" align="center" justify="flex-start">
        <Box boxSize="48px">
          <Image src="/starknet-logo.png" alt="Starknet Logo" />
        </Box>
        <Text ml={2} fontSize="lg" fontWeight="bold">
          Starknet ecosystem
        </Text>
      </Flex>
      <Box>
        <Link
          ml={2}
          _hover={{ textDecoration: "none" }}
          href="https://github.com/419Labs/starknet-ecosystem.com"
          isExternal
        >
          <Button>Apply</Button>
        </Link>
        <Link
            _hover={{ textDecoration: "none" }}
            href="https://t.me/starknet_ecosystem"
            isExternal
        >
          <Button>Community</Button>
        </Link>
      </Box>
    </Flex>
  );
}

export default Header;
