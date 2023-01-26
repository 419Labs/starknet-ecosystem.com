import type { FlexProps, LinkProps } from "@chakra-ui/layout";
import { Flex, Link, Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { FC } from "react";

import type { Ads } from "../../models/ads";

import { SponsoredText } from "./SponsoredWrapper";

interface Props extends LinkProps {
  ad: Ads;
}
const CardAd: FC<Props> = ({ ad, ...props }) => {
  return (
    <Link
      w="full"
      isExternal
      href={ad.link}
      style={{ textDecoration: "none" }}
      {...props}
    >
      <Flex
        h="full"
        w="full"
        onClick={() => console.log("click")}
        align="center"
        justifyContent="space-between"
        direction="column"
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
      >
        <Flex h="full" direction="column" justify="space-between">
          <Flex direction="column" mt={8} px={12}>
            <Image src={ad.bannerSmall} alt={ad.title} fit="contain" />
            {ad.bannerSupp && (
              <Image mt={8} src={ad.bannerSupp} alt={ad.title} fit="contain" />
            )}
          </Flex>

          <Flex
            justify="center"
            align="center"
            color={ad.fontColor}
            fontWeight="bold"
            my={8}
          >
            <Text mr={4}>{ad.callToAction}</Text>
            <FontAwesomeIcon icon={solid("up-right-from-square")} />
          </Flex>
        </Flex>
        <Flex w="full" justify="flex-end">
          <SponsoredText color="blackAlpha.600" />
        </Flex>
      </Flex>
    </Link>
  );
};

export default CardAd;
