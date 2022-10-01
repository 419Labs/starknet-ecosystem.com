import { Text } from "@chakra-ui/layout";
import type { FC } from "react";

import { formatCompactNumber } from "../../services/number.service";
import Card from "../card/Card";

interface Props {
  count: number | undefined;
  label: string;
}

const CountPaper: FC<Props> = ({ count, label }) => (
  <Card textAlign="center">
    <Text fontSize="3xl" fontWeight="bold">
      {count !== undefined && formatCompactNumber(count)}
    </Text>
    <Text mt={2} fontSize="md" color="whiteAlpha.600">
      {label}
    </Text>
  </Card>
);

export default CountPaper;
