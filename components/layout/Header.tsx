import { Box, Flex, Link, Text } from "@chakra-ui/layout";
import { Button, Image, Hide } from "@chakra-ui/react";
import { faGithub, faTelegram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Header() {
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
        <Box>
          <Link
            _hover={{ textDecoration: "none" }}
            href={githubLink}
            isExternal
          >
            <Button>Apply</Button>
          </Link>
          <Link
            ml={2}
            _hover={{ textDecoration: "none" }}
            href={telegramLink}
            isExternal
          >
            <Button>Community</Button>
          </Link>
        </Box>
      </Hide>
      <Hide above="sm">
        <Flex justify="flex-end" fontSize="24px">
          <Link isExternal href={githubLink}>
            <FontAwesomeIcon icon={faGithub} />
          </Link>
          <Link ml={4} isExternal href={telegramLink}>
            <FontAwesomeIcon icon={faTelegram} />
          </Link>
        </Flex>
      </Hide>
    </Flex>
  );
}

export default Header;
