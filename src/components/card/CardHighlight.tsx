import { Flex, HStack, Text } from "@chakra-ui/layout";

interface CardHighlightProps {
  icon?: any;
  title: string;
  content: string;
  color?: string;
}
function CardHighlight({ icon, title, content, color }: CardHighlightProps) {
  return (
    <Flex
      direction="column"
      p={4}
      minW="250px"
      transition=".4s ease all"
      cursor="pointer"
      onClick={() => console.log("coucou")}
      bg={color || "gray.600"}
      h="300px"
      w="250px"
      borderRadius="md"
    >
      <HStack>
        {icon}
        <Text>{title}</Text>
      </HStack>
      <Text overflow="hidden" textOverflow="ellipsis">
        {content}
      </Text>
    </Flex>
  );
}

export default CardHighlight;
