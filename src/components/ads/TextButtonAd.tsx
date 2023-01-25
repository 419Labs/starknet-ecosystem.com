import type { FlexProps } from "@chakra-ui/layout";
import { Flex } from "@chakra-ui/layout";
import { Image, Link } from "@chakra-ui/react";
import type { FC } from "react";

import type { Ads } from "../../models/ads";

interface Props extends FlexProps {
  ad: Ads;
}
const TextButtonAd: FC<Props> = ({ ad, ...props }) => {
  return (
      <Flex {...props} bg={ad.color} h="36px" cursor="pointer">
         coucou
      </Flex>
  );
};

export default TextButtonAd;
