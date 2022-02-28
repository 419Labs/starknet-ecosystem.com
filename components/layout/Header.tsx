import { Box, Flex, Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";

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
      <Text>Menu</Text>
      <Text>Actions</Text>
    </Flex>
  );
}

export default Header;
