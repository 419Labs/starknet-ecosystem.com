import { Box, Flex, HStack, Text, VStack } from "@chakra-ui/layout";

interface CardHighlightProps {
  icon?: any;
  title: string;
  content: string;
  bg?: string;
  color?: string;
}
function CardHighlight({
  icon,
  title,
  content,
  bg,
  color,
}: CardHighlightProps) {
  return (
    <Flex
      position="relative"
      direction="column"
      p={4}
      minW="250px"
      transition=".4s ease all"
      cursor="pointer"
      onClick={() => console.log("coucou")}
      bg={bg || "gray.600"}
      h="300px"
      w="250px"
      borderRadius="md"
    >
      <HStack overflow="hidden" align="flex-start">
        <Box h="full" pt={1} color={color || "inherit"}>
          {icon}
        </Box>
        <VStack pl={4} align="flex-start">
          <Text fontSize="xl" fontWeight="bold" color={color || "inherit"}>
            {title}
          </Text>
          <Text>{content}</Text>
        </VStack>
      </HStack>
      <Box
        top={0}
        bottom={0}
        left={0}
        right={0}
        position="absolute"
        borderRadius="md"
        sx={{
          boxShadow: `inset 0 -46px 13px -10px ${
            bg
              ? // eslint-disable-next-line sonarjs/no-nested-template-literals
                `var(--chakra-colors-${bg.replace(".", "-")})`
              : "var(--chakra-colors-gray-600)"
          }`,
        }}
      />
    </Flex>
  );
}

export default CardHighlight;
