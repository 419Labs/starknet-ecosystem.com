import { Box, Text } from "@chakra-ui/layout";

interface HighlightedTextProps {
  fontSize?: string | string[];
  maxHighlightWidth?: string;
  highlightOffset?: string;
  text?: string;
  highlighted: string;
}
function HighlightedText({
  fontSize = ["48px", "68px"],
  maxHighlightWidth = "110%",
  highlightOffset = "10px",
  text,
  highlighted,
}: HighlightedTextProps) {
  return (
    <Text
      zIndex={1}
      as="h1"
      align="start"
      lineHeight={1.2}
      fontSize={fontSize}
      fontWeight="bold"
      maxWidth={{ base: "300px", sm: "600px" }}
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
          h="40%"
          w="110%"
          maxWidth={maxHighlightWidth}
          left={`-${highlightOffset}`}
          bottom={0}
        />
      </Box>
      {text && (
        <Text ml={{ base: 0, sm: 4 }} as="span">
          {text}
        </Text>
      )}
    </Text>
  );
}

export default HighlightedText;
