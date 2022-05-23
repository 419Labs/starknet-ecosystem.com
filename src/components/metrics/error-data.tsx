import { Flex, Text } from "@chakra-ui/layout";
import type { FC } from "react";

interface Props {
  children: string;
}

const ErrorData: FC<Props> = ({ children }) => (
  <Flex w="full" h="full" justify="center" align="center" textAlign="center">
    <Text fontSize="sm" color="whiteAlpha.600">
      {children}
    </Text>
  </Flex>
);

export default ErrorData;
