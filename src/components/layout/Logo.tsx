import { Box, Flex, Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";
import Link from "next/link";

import { useTranslate } from "../../context/TranslateProvider";

interface LogoProps {
  justify?: "flex-start" | "center" | "flex-end";
}
function Logo({ justify = "flex-start" }: LogoProps) {
  const { locale } = useTranslate();
  return (
    <Link href={`/${locale}`} passHref>
      <Flex direction="row" align="center" justify={justify} cursor="pointer">
        <Box boxSize="36px">
          <Image src="/starknet-logo.png" alt="Starknet Logo" />
        </Box>
        <Text ml={3} fontSize="lg" fontWeight="bold">
          StarkNet Ecosystem
        </Text>
      </Flex>
    </Link>
  );
}

export default Logo;
