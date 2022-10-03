import {SimpleGrid, Text} from "@chakra-ui/layout";
import type { FC } from "react";
import { useEffect, useState } from "react";

import type { TweetCount } from "../../models/tweet-metric";
import { MetricsApi } from "../../services/metrics-api.service";
import Card from "../card/Card";

import TwitterTrend from "./twitter-trend";
import {Tab, TabList, TabPanel, TabPanels, Tabs} from "@chakra-ui/tabs";

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
        <Tabs variant="line" colorScheme="brand">
          <TabList>
            <Tab>#starknet</Tab>
            <Tab>#starkware</Tab>
            <Tab>#cairo</Tab>
          </TabList>

          <TabPanels>
            <TabPanel p={0}>
              <TwitterTrend values={starknetCounts} />
            </TabPanel>
            <TabPanel p={0}>
              <TwitterTrend values={starkwareCounts} />
            </TabPanel>
            <TabPanel p={0}>
              <TwitterTrend values={cairoCounts} />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Card>
    </SimpleGrid>
  );
};
export default TwitterMetrics;
