import { Box, Flex, Text } from "@chakra-ui/layout";

interface HighlightedTextProps {
  text: string;
  highlighted: string;
}
function HighlightedText({ text, highlighted }: HighlightedTextProps) {
  return (
    <Text
      as="h1"
      align="start"
      lineHeight={1.2}
      fontSize={["48px", "68px"]}
      fontWeight="bold"
      maxWidth="600px"
    >
      <Box position="relative" display="inline">
        <Text as="span" position="relative" zIndex={1}>
          {highlighted}
        </Text>
        <Box
          zIndex={0}
          bgGradient="linear(to-l, primary.300, primary.500)"
          position="absolute"
          display="inline"
          h="30px"
          w="110%"
          left="-5%"
          bottom={0}
        />
      </Box>
      <Text ml={4} as="span">
        {text}
      </Text>
    </Text>
  );
}

export default HighlightedText;
