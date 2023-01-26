import type { FlexProps } from "@chakra-ui/layout";
import { Flex, Link, Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { FC } from "react";

import type { Ads } from "../../models/ads";

interface Props extends FlexProps {
  ad: Ads;
}
const CardBannerAd: FC<Props> = ({ ad, ...props }) => {
  return (
    <Flex
      w="full"
      onClick={() => console.log("click")}
      align="center"
      bg={ad.bgColor}
      color={ad.fontColor}
      borderRadius="lg"
      overflow="hidden"
      p={2}
      transition=".4s ease all"
      cursor="pointer"
      _hover={{
        ".banner-content": {
          transform: "scale(1.1)",
        },
      }}
      {...props}
    >
      <Flex mt={8} px={12}>
        <Image src={ad.banner} alt={ad.title} fit="contain" />
        <Image mt={8} src={ad.bannerSupp} alt={ad.title} fit="contain" />
      </Flex>
      <Link my={8} isExternal href={ad.link} style={{ textDecoration: "none" }}>
        <Flex
          justify="center"
          align="center"
          color={ad.fontColor}
          fontWeight="bold"
        >
          <Text mr={4}>{ad.callToAction}</Text>
          <FontAwesomeIcon icon={solid("up-right-from-square")} />
        </Flex>
      </Link>
    </Flex>
  );
};

export default CardBannerAd;
