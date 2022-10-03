import { Flex } from "@chakra-ui/layout";
import { Spinner } from "@chakra-ui/react";
import type { FC } from "react";

const CardContentLoading: FC = () => {
  return (
    <Flex minH="250px" w="full" justify="center" align="center">
      <Spinner h="48px" w="48px" />
    </Flex>
  );
};

export default CardContentLoading;
