import type { FlexProps } from "@chakra-ui/layout";
import { Flex, Link, Text } from "@chakra-ui/layout";
import { Hide, Image, Show } from "@chakra-ui/react";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { FC } from "react";

import type { Ads } from "../../models/ads";

interface Props extends FlexProps {
  ad: Ads;
}
const CardBannerAd: FC<Props> = ({ ad, ...props }) => {
  return (
    <Link w="full" isExternal href={ad.link} style={{ textDecoration: "none" }}>
      <Flex
        h="86px"
        w="full"
        onClick={() => console.log("click")}
        align="center"
        justify="space-between"
        bg={ad.bgColor}
        color={ad.fontColor}
        borderRadius="lg"
        overflow="hidden"
        py={2}
        px={{ base: 4, xl: 12 }}
        transition=".4s ease all"
        cursor="pointer"
        _hover={{
          ".banner-content": {
            transform: "scale(1.1)",
          },
        }}
        {...props}
      >
        <Image
          src={ad.bannerFull}
          alt={ad.title}
          fit="contain"
          maxH={{ base: "100%", xl: "36px" }}
        />

        <Hide below="xl">
          <Flex
            justify="center"
            align="center"
            color={ad.fontColor}
            fontWeight="bold"
          >
            <Text mr={4}>{ad.callToAction}</Text>
            <FontAwesomeIcon icon={solid("up-right-from-square")} />
          </Flex>
        </Hide>
      </Flex>
    </Link>
  );
};

export default CardBannerAd;
