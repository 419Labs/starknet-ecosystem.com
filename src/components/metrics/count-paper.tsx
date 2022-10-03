import { Flex, Text } from "@chakra-ui/layout";
import { Skeleton } from "@chakra-ui/react";
import type { FC } from "react";

import { formatCompactNumber } from "../../services/number.service";
import Card from "../card/Card";

interface Props {
  count: number | string | undefined;
  label: string;
  subtitle?: string;
  big?: boolean;
}

/* const renderSkeleton = (big = false) => {
  return big ? (
    <Stack w="full" align="center">
      <Skeleton w="200px" h={8} />
      <Skeleton w="180px" h={4} />
      <Skeleton w="180px" h={4} />
    </Stack>
  ) : (
    <Stack align="center">
      <Skeleton maxW="200px" w="full" h={6} />
      <Skeleton maxW="180px" w="80%" h={3} />
      <Skeleton maxW="180px" w="80%" h={3} />
    </Stack>
  );
}; */
const CountPaper: FC<Props> = ({ count, label, subtitle, big }) => (
  <Card textAlign="center">
    <Flex h="full" direction="column" justify="center" align="center">
      {count ? (
        <Text fontSize={big ? "3xl" : "2xl"} fontWeight="bold">
          {formatCompactNumber(count)}
        </Text>
      ) : (
        <Skeleton w="full" maxW="200px" h={8} />
      )}
      <Text mt={2} fontSize="md" color="whiteAlpha.600">
        {label}
      </Text>
      {subtitle && (
        <Text mt={2} fontSize="md" color="whiteAlpha.600">
          {subtitle}
        </Text>
      )}
    </Flex>
  </Card>
);

export default CountPaper;
