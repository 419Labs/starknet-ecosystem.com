import { SimpleGrid } from "@chakra-ui/layout";
import type { FC } from "react";
import { useEffect, useState } from "react";

import type { TweetCount } from "../../models/tweet-metric";
import { MetricsApi } from "../../services/metrics-api.service";
import Card from "../card/Card";

import TwitterTrend from "./twitter-trend";

const TwitterMetrics: FC = () => {
  const [starknetCounts, setStarknetCounts] = useState<TweetCount[]>();
  const [starkwareCounts, setStarkwareCounts] = useState<TweetCount[]>();
  const [cairoCounts, setCairoCounts] = useState<TweetCount[]>();

  useEffect(() => {
    MetricsApi.fetchTweetCounts("starknet").then(setStarknetCounts);
    MetricsApi.fetchTweetCounts("starkware").then(setStarkwareCounts);
    MetricsApi.fetchTweetCounts("cairo").then(setCairoCounts);
  }, []);

  return (
    <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={4}>
      <Card>
        <TwitterTrend keyword="starknet" values={starknetCounts} />
      </Card>
      <Card>
        <TwitterTrend keyword="starkware" values={starkwareCounts} />
      </Card>
      <Card>
        <TwitterTrend keyword="cairo" values={cairoCounts} />
      </Card>
    </SimpleGrid>
  );
};
export default TwitterMetrics;
