import type { FlexProps } from "@chakra-ui/layout";
import { Flex } from "@chakra-ui/layout";
import { Image, Link } from "@chakra-ui/react";
import type { FC } from "react";

import type { Ads } from "../../models/ads";

import SponsoredWrapper, { SponsoredText } from "./SponsoredWrapper";

interface Props extends FlexProps {
  ad: Ads;
  noSponsoredText?: boolean;
}
const SmallBannerAd: FC<Props> = ({ ad, noSponsoredText, ...props }) => {
  return (
    <SponsoredWrapper
      {...props}
      hidden={noSponsoredText}
      customTextEl={<SponsoredText floatEnd mr={2} />}
    >
      <Link href={ad.link} isExternal>
        <Flex px={2} bg={ad.bgColor} h="36px" cursor="pointer">
          <Image src={ad.bannerSmall} alt={ad.title} fit="contain" />
        </Flex>
      </Link>
    </SponsoredWrapper>
  );
};

export default SmallBannerAd;
