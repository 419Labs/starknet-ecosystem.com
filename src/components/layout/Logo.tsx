import {Box, Flex, Text} from "@chakra-ui/layout";

import { useTranslate } from "../../context/TranslateProvider";
import {Image} from "@chakra-ui/react";

interface LogoProps {
    justify?: "flex-start" | "center" | "flex-end"
}
function Logo({justify = "flex-start"} : LogoProps) {
  return (
      <Flex direction="row" align="center" justify={justify}>
        <Box boxSize="36px">
          <Image src="/starknet-logo.png" alt="Starknet Logo" />
        </Box>
        <Text ml={3} fontSize="lg" fontWeight="bold">
          Starknet ecosystem
        </Text>
      </Flex>
  );
}

export default Logo;
