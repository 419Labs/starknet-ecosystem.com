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
    color="whiteAlpha.600"
    fontSize="sm"
    {...props}
  >
    sponsored
  </Text>
);
const SponsoredWrapper: FC<Props> = ({
  children,
  customTextEl,
  floatBottom,
  floatEnd,
  hidden,
  ...props
}) => {
  return (
    <Flex {...props} direction="column">
      {floatBottom && children}
      {!hidden && (
        <Box mb={floatBottom ? 0 : 2} mt={floatBottom ? 2 : 0}>
          {customTextEl || <SponsoredText floatEnd={floatEnd} />}
        </Box>
      )}
      {!floatBottom && children}
    </Flex>
  );
};

export default SponsoredWrapper;
