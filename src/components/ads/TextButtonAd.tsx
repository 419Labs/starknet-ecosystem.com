import type { FlexProps } from "@chakra-ui/layout";
import { Box, Flex, Link, Text } from "@chakra-ui/layout";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { FC } from "react";

import type { Ads } from "../../models/ads";

import SmallBannerAd from "./SmallBannerAd";
import SponsoredWrapper from "./SponsoredWrapper";

interface Props extends FlexProps {
  ad: Ads;
  variant?: "image" | "text-button";
}

const ButtonLink: FC<{ ad: Ads }> = ({ ad }) => {
  const { title, description } = ad;
  return (
    <Link href={ad.link} isExternal style={{ textDecoration: "none" }}>
      <Flex
        position="relative"
        cursor="pointer"
        transition=".4s ease all"
        _hover={{
          background: ad.bgColor || "gray.600",
          ".text-highlighted": {
            color: ad.fontColor || "inherit",
          },
          ".link-highlighted": {
            opacity: 1,
          },
        }}
        direction="column"
        px={4}
        py={2}
      >
        <Text fontSize="sm" fontWeight="bold">
          {title}
        </Text>
        <Text fontSize="xs" mt={2}>
          {description}
        </Text>
        <Flex
          position="absolute"
          top={0}
          bottom={0}
          left={0}
          right={0}
          justify="center"
          align="center"
          borderRadius="md"
          transition=".4s ease all"
          color={ad.fontColor}
          className="link-highlighted"
          opacity={0}
          fontWeight="400"
        >
          <Text mr={4}>{ad.callToAction}</Text>
          <FontAwesomeIcon icon={solid("up-right-from-square")} />
        </Flex>
      </Flex>
    </Link>
  );
};
const TextButtonAd: FC<Props> = ({ ad, variant = "image", ...props }) => {
  return (
    <SponsoredWrapper floatEnd {...props}>
      <Box
        border="1px solid"
        borderColor={variant === "image" ? "transparent" : "gray.300"}
        borderRadius="md"
        overflow="hidden"
      >
        {variant === "image" ? (
          <SmallBannerAd noSponsoredText ad={ad} />
        ) : (
          <ButtonLink ad={ad} />
        )}
      </Box>
    </SponsoredWrapper>
  );
};

export default TextButtonAd;
