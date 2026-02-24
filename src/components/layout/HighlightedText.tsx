import { Box, Text } from "@chakra-ui/layout";

interface HighlightedTextProps {
  fontSize?: string | string[];
  text?: string;
  highlighted: string;
}

function HighlightedText({
  fontSize = ["36px", "48px"],
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
      fontWeight="700"
      letterSpacing="-0.03em"
      color="text.primary"
      maxWidth={{ base: "100%", sm: "600px" }}
    >
      <Box as="span" position="relative" display="inline">
        <Text
          as="span"
          position="relative"
          zIndex={1}
          bgGradient="linear(to-r, accent.500, accent.700)"
          bgClip="text"
        >
          {highlighted}
        </Text>
      </Box>
      {text && (
        <Text ml={{ base: 0, sm: 2 }} as="span" color="text.primary">
          {text}
        </Text>
      )}
    </Text>
  );
}

export default HighlightedText;
