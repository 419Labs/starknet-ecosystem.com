import { Box, VStack } from "@chakra-ui/layout";
import { useTheme } from "@chakra-ui/react";

import CardExplanation from "../card/CardExplanation";

import type { BasicContentProps } from "./BasicContent";
import BasicContent from "./BasicContent";

function NewsInfosContent({
  resources,
  keyword = "",
  observe,
}: BasicContentProps) {
  const theme = useTheme();
  const getGradient = () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return `radial-gradient(ellipse at top, ${theme.colors.flat[100]}, transparent), radial-gradient(ellipse at bottom, ${theme.colors.flat[700]}, transparent), radial-gradient(ellipse at center, ${theme.colors.flat[700]}, transparent)`;
  };
  return (
    <VStack w="full" align="flex-start">
      <Box w="full" mb={8}>
        <CardExplanation
          bg={getGradient()}
          title="News & Feeds"
          content="Follow Starknet Ecosystem by subscribing to community newsletters, Telegram groups or StarkWare official website."
          link="https://starkware.co/content/"
        />
      </Box>
      <BasicContent resources={resources} observe={observe} keyword={keyword} />
    </VStack>
  );
}

export default NewsInfosContent;
