import { Box, Text } from "@chakra-ui/layout";
import type { FC } from "react";

import { formatCompactNumber } from "../../services/number.service";

interface Props {
  count: number | undefined;
  label: string;
}

const CountPaper: FC<Props> = ({ count, label }) => (
  <Box backgroundColor="gray.800" borderRadius="md" p={5} textAlign="center">
    <Text fontSize="3xl" fontWeight="bold">
      {count !== undefined && formatCompactNumber(count)}
    </Text>
    <Text mt={2} fontSize="md" color="whiteAlpha.600">
      {label}
    </Text>
  </Box>
);

export default CountPaper;
