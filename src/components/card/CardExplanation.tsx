import { Box, Flex, Link, Text, VStack } from "@chakra-ui/layout";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface CardExplanationProps {
  title: string;
  content: string;
  bg: string;
  link?: string;
}
function CardExplanation({ title, content, bg, link }: CardExplanationProps) {
  return (
    <Flex
      w="full"
      direction="column"
      minH="200px"
      align="flex-start"
      justify="flex-start"
      borderRadius="lg"
      overflow="hidden"
      p={4}
      bg={bg}
    >
      <Text fontSize="xl" fontWeight="bold">
        {title}
      </Text>
      <Flex flex={1} fontSize="md" direction="column" justify="space-between">
        <Text mt={4} dangerouslySetInnerHTML={{ __html: content }}/>
        {link && (
          <Link
            fontWeight="bold"
            isExternal
            href="https://goerli.voyager.online"
            _hover={{ textDecoration: "none", color: "whiteAlpha.900" }}
            display="flex"
            mt={4}
          >
            <Text mr={1}>Read more</Text>
            <FontAwesomeIcon icon={solid("up-right-from-square")} />
          </Link>
        )}
      </Flex>
    </Flex>
  );
}

export default CardExplanation;
