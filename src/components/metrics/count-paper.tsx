import { Box, Text } from "@chakra-ui/layout";
import type { FC } from "react";

import { formatCompactNumber } from "../../services/number.service";

interface Props {
  count: number;
  label: string;
}

const CountPaper: FC<Props> = ({ count, label }) => (
  <Box backgroundColor="gray.800" borderRadius={10} p={4} textAlign="center">
    <Text fontSize={["40px"]} fontWeight="bold">
      {formatCompactNumber(count)}
    </Text>
    <Text mb={4} fontSize={["18px"]}>
      {label}
    </Text>
  </Box>
);

export default CountPaper;
