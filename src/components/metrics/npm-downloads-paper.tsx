import { Box, Text } from "@chakra-ui/layout";
import { useTheme } from "@chakra-ui/react";
import { faNpm } from "@fortawesome/free-brands-svg-icons";
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
import type { FC } from "react";
import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";

import { useTranslate } from "../../context/TranslateProvider";
import type {
  NpmDownloads,
  NpmDownloadsChart,
} from "../../models/npm-downloads";
import { toNpmDownloadsChart } from "../../services/metrics.service";

interface Props {
  npmDownloads: NpmDownloads;
}

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

const NpmDownloadsPaper: FC<Props> = ({ npmDownloads }) => {
  const theme = useTheme();
  const { t } = useTranslate();
  const [values, setValues] = useState<NpmDownloadsChart>();

  useEffect(() => {
    setValues(toNpmDownloadsChart(npmDownloads));
  }, [npmDownloads]);

  if (!values) return null;

  return (
    <Box borderRadius={10} backgroundColor="gray.800" p={4}>
      <Box display="flex" justifyContent="space-between">
        <Text
          as="h3"
          mb={4}
          fontSize={["20px"]}
          lineHeight="30px"
          fontWeight="bold"
        >
          <FontAwesomeIcon icon={faNpm} /> {values.package}
        </Text>
        <Text mb={4} lineHeight="30px" fontSize="sm">
          {values.downloads[values.downloads.length - 1].downloads}{" "}
          {t.common.npm_last_downloads || "downloads last 7 days"}
        </Text>
      </Box>
      <Line
        options={{
          responsive: true,
          elements: {
            point: {
              radius: 0,
            },
          },
          hover: {
            mode: "nearest",
            intersect: true,
          },
          scales: {
            xAxis: {
              display: false,
            },
          },
          plugins: {
            tooltip: {
              mode: "index",
              intersect: false,
            },
            filler: {
              propagate: true,
            },
            legend: {
              display: false,
            },
          },
        }}
        data={{
          labels: values.downloads.map(
            (week) => `${week.start} to ${week.end}`
          ),
          datasets: [
            {
              fill: true,
              label: values.package,
              data: values.downloads.map((week) => week.downloads),
              // eslint-disable-next-line @typescript-eslint/dot-notation
              borderColor: theme["__cssMap"]["colors.brand.900"].value,
              // eslint-disable-next-line @typescript-eslint/dot-notation
              backgroundColor: `${theme["__cssMap"]["colors.brand.900"].value}80`,
            },
          ],
        }}
      />
    </Box>
  );
};

export default NpmDownloadsPaper;
