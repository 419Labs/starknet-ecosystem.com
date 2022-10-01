import type { BoxProps } from "@chakra-ui/layout";
import { Box } from "@chakra-ui/layout";
import { useStyleConfig } from "@chakra-ui/react";
import type { FC } from "react";

const Card: FC<BoxProps> = ({ ...props }) => {
  const styles = useStyleConfig("Card");
  return <Box __css={styles} {...props} />;
};

export default Card;
