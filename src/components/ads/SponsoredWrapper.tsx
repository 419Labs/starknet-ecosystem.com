import type { FlexProps, TextProps } from "@chakra-ui/layout";
import { Box, Flex, Text } from "@chakra-ui/layout";
import type { FC } from "react";

interface Props extends FlexProps {
  customTextEl?: JSX.Element;
  floatBottom?: boolean;
  floatEnd?: boolean;
}

interface SponsoredTextProps extends TextProps {
  floatEnd?: boolean;
}

export const SponsoredText = ({ floatEnd, ...props }: SponsoredTextProps) => (
  <Text
    textAlign={floatEnd ? "end" : "start"}
    {...props}
    color="whiteAlpha.600"
    fontSize="sm"
  >
    sponsored
  </Text>
);
const SponsoredWrapper: FC<Props> = ({
  children,
  customTextEl,
  floatBottom,
  floatEnd,
  ...props
}) => {
  return (
    <Flex {...props} direction="column">
      {floatBottom && children}
      <Box mb={2}>{customTextEl || <SponsoredText floatEnd={floatEnd} />}</Box>
      {!floatBottom && children}
    </Flex>
  );
};

export default SponsoredWrapper;
