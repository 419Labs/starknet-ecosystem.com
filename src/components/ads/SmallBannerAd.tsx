import type { FlexProps } from "@chakra-ui/layout";
import { Flex, Text } from "@chakra-ui/layout";
import { Image, Link } from "@chakra-ui/react";
import type { FC } from "react";

import type { Ads } from "../../models/ads";

import SponsoredWrapper, { SponsoredText } from "./SponsoredWrapper";

interface Props extends FlexProps {
  ad: Ads;
}
const SmallBannerAd: FC<Props> = ({ ad, ...props }) => {
  return (
    <SponsoredWrapper {...props} customTextEl={<SponsoredText floatEnd mr={2} />}>
      <Link href={ad.link}>
        <Flex px={2} bg={ad.color} h="36px" cursor="pointer">
          <Image src={ad.banner} alt={ad.title} fit="contain" />
        </Flex>
      </Link>
    </SponsoredWrapper>
  );
};

export default SmallBannerAd;
