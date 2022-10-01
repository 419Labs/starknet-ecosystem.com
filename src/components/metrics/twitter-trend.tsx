import { Flex, HStack, Text, VStack } from "@chakra-ui/layout";
import { useTheme } from "@emotion/react";
import { brands } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  CategoryScale,
  Chart as ChartJS,
  Filler,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import dayjs from "dayjs";
import type { FC } from "react";
import { Line } from "react-chartjs-2";

import type { TweetCount } from "../../models/tweet-metric";
import Card from "../card/Card";

ChartJS.register(
  Filler,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface Props {
  keyword: string;
  values: TweetCount[] | undefined;
}

const TwitterTrend: FC<Props> = ({ keyword, values }) => {
  const theme = useTheme();

  if (!values) return null;

  let height: number;
  let width: number;
  let gradient: CanvasGradient;

  function getGradient(ctx: CanvasFillStrokeStyles, chartArea: any) {
    const chartWidth = chartArea.right - chartArea.left;
    const chartHeight = chartArea.bottom - chartArea.top;
    if (!gradient || width !== chartWidth || height !== chartHeight) {
      width = chartWidth;
      height = chartHeight;
      gradient = ctx.createLinearGradient(
        0,
        chartArea.bottom,
        0,
        chartArea.top
      );
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      gradient.addColorStop(0, theme.colors.brand["900"]);
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      gradient.addColorStop(1, theme.colors.brand["400"]);
    }

    return gradient;
  }

  return (
    <Card>
      <VStack alignItems="flex-start" spacing={0} mb={4}>
        <Flex w="full" justify="space-between" alignItems="flex-start" mb={1}>
          <HStack as="h3" fontSize="lg" fontWeight="bold">
            <FontAwesomeIcon fontSize="24px" icon={brands("twitter")} />
            <Text ml={1}>{`Tweets with keyword "${keyword}"`}</Text>
          </HStack>
        </Flex>
      </VStack>
      <Line
        options={{
          responsive: true,
          elements: { point: { radius: 0 } },
          hover: { mode: "nearest", intersect: true },
          scales: {},
          plugins: {
            tooltip: { mode: "index", intersect: false },
            filler: { propagate: true },
            legend: { display: false },
          },
        }}
        data={{
          labels: values.map((count) =>
            dayjs(parseFloat(count.date) * 1000).format("DD/MM/YYYY")
          ),
          datasets: [
            {
              fill: true,
              borderWidth: 2,
              tension: 0.4,
              label: keyword,
              data: values.map((count) => count.count),
              borderColor(context) {
                const { chart } = context;
                const { ctx, chartArea } = chart;

                if (!chartArea) {
                  // Initial chart load
                  return;
                }
                // eslint-disable-next-line consistent-return
                return getGradient(ctx, chartArea);
              },
              // eslint-disable-next-line @typescript-eslint/dot-notation
              // backgroundColor: `${theme["__cssMap"]["colors.brand.900"].value}80`,
              backgroundColor: "transparent",
            },
          ],
        }}
      />
    </Card>
  );
};

export default TwitterTrend;
