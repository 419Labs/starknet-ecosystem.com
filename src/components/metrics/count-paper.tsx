import { Text } from "@chakra-ui/layout";
import type { FC } from "react";

import { formatCompactNumber } from "../../services/number.service";
import Card from "../card/Card";

interface Props {
  count: number | string | undefined;
  label: string;
  subtitle?: string;
  big?: boolean;
}

const CountPaper: FC<Props> = ({ count, label, subtitle, big }) => (
  <Card textAlign="center">
    <Text fontSize={big ? "3xl" : "2xl"} fontWeight="bold">
      {count !== undefined && formatCompactNumber(count)}
    </Text>
    <Text mt={2} fontSize="md" color="whiteAlpha.600">
      {label}
    </Text>
    {subtitle && (
      <Text mt={2} fontSize="md" color="whiteAlpha.600">
        {subtitle}
      </Text>
    )}
  </Card>
);

export default CountPaper;
