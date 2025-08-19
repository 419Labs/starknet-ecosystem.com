import { Flex, Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";
import type { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

import { useTranslate } from "../../context/TranslateProvider";

interface LogoProps {
  justify?: "flex-start" | "center" | "flex-end";
  icon?: IconDefinition;
}
function Logo({ justify = "flex-start", icon }: LogoProps) {
  const { locale } = useTranslate();
  return (
    <Link href={`/${locale}`} passHref>
      <Flex direction="row" align="center" justify={justify} cursor="pointer">
        <Flex boxSize="36px" alignItems="center">
          {icon ? (
            <FontAwesomeIcon
              color="whiteAlpha.900"
              fontSize="18px"
              icon={icon}
            />
          ) : (
            <Image src="/starknet-logo.png" alt="Starknet Logo" />
          )}
        </Flex>
        <Text ml={3} fontSize="lg" fontWeight="bold">
          StarkNet Ecosystem
        </Text>
      </Flex>
    </Link>
  );
}

export default Logo;
