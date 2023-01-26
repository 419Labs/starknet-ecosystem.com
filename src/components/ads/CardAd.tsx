import type { FlexProps } from "@chakra-ui/layout";
import {Flex, Link, Text, VStack} from "@chakra-ui/layout";
import type { FC } from "react";

import type { Ads } from "../../models/ads";
import {Image} from "@chakra-ui/react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {solid} from "@fortawesome/fontawesome-svg-core/import.macro";
import {SponsoredText} from "./SponsoredWrapper";

interface Props extends FlexProps {
  ad: Ads;
}
const CardAd: FC<Props> = ({ ad, ...props }) => {
  return (
    <Flex
      h="full"
      onClick={() => console.log("click")}
      align="center"
      justifyContent={"space-between"}
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
      {...props}
    >
        <Flex h="full" direction="column" justify="space-between">
            <Flex direction="column" mt={8} px={12}>
                <Image src={ad.banner} alt={ad.title} fit="contain" />
                <Image mt={8} src={ad.bannerSupp} alt={ad.title} fit="contain" />
            </Flex>
            <Link my={8} isExternal href={ad.link} style={{textDecoration: "none"}}>
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
        <Flex w="full" justify="flex-end">
            <SponsoredText color={"blackAlpha.600"}/>
        </Flex>
    </Flex>
  );
};

export default CardAd;
