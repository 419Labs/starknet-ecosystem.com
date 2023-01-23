import type { FlexProps } from "@chakra-ui/layout";
import { Flex } from "@chakra-ui/layout";
import { Image, Link } from "@chakra-ui/react";
import type { FC } from "react";

import type { Ads } from "../../models/ads";

interface Props extends FlexProps {
  ad: Ads;
}
const SmallBannerAd: FC<Props> = ({ ad, ...props }) => {
  return (
    <Link href={ad.link}>
      <Flex {...props} bg={ad.color} h="36px" cursor="pointer">
        <Image src={ad.banner} alt={ad.title} fit="contain" />
      </Flex>
    </Link>
  );
};

export default SmallBannerAd;
