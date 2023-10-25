import { useTheme } from "@emotion/react";
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
  values: TweetCount[] | undefined;
}

const TwitterTrend: FC<Props> = ({ values }) => {
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
      gradient.addColorStop(0, theme.colors.primary["500"]);
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      gradient.addColorStop(1, theme.colors.primary["300"]);
    }

    return gradient;
  }

  return (
    <Card p={0} pt={5}>
      <Line
        options={{
          animation: {
            duration: 0,
          },
          responsive: true,
          elements: { point: { radius: 0 } },
          hover: { mode: "nearest", intersect: true },
          scales: {
            y: {
              grid: {
                display: false,
              },
              ticks: {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                color: theme.colors.whiteAlpha["600"],
                font: {
                  size: 12,
                },
              },
            },
            x: {
              display: false,
            },
          },
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
