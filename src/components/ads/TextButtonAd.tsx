import type { FlexProps } from "@chakra-ui/layout";
import { Flex } from "@chakra-ui/layout";
import type { FC } from "react";

import type { Ads } from "../../models/ads";

import SponsoredWrapper, { SponsoredText } from "./SponsoredWrapper";

interface Props extends FlexProps {
  ad: Ads;
}
const TextButtonAd: FC<Props> = ({ ad, ...props }) => {
  return (
    <SponsoredWrapper floatBottom {...props} customTextEl={<SponsoredText mr={2} />}>
      <Flex bg={ad.color} h="36px" cursor="pointer">
        coucou
      </Flex>
    </SponsoredWrapper>
  );
};

export default TextButtonAd;
