import type { FlexProps, TextProps } from "@chakra-ui/layout";
import { Box, Flex, Text } from "@chakra-ui/layout";
import type { FC } from "react";

interface Props extends FlexProps {
  customTextEl?: JSX.Element;
}

export const SponsoredText = (props: TextProps) => (
  <Text {...props} textAlign="end" color="whiteAlpha.600" fontSize="sm">
    sponsored
  </Text>
);
const SponsoredWrapper: FC<Props> = ({ children, customTextEl, ...props }) => {
  return (
    <Flex {...props} direction="column">
      <Box mb={2}>{customTextEl || <SponsoredText />}</Box>
      {children}
    </Flex>
  );
};

export default SponsoredWrapper;
