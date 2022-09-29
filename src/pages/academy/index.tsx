import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/layout";
import type { FC } from "react";
import { useState } from "react";
import useInView from "react-cool-inview";

import type { ResourceItf } from "../../../data/academy";
import { allAcademyCategory } from "../../../data/academy";
import CardResource from "../../components/card/CardResource";
import Menu from "../../components/layout/Menu";
import { useTranslate } from "../../context/TranslateProvider";

const resources: ResourceItf[] = [
  {
    name: "Nile",
    description: "Lorem ipsum dollor site Lorem ipsum dollor site Lorem ipsum dollor site Lorem ipsum dollor site Lorem ipsum dollor site Lorem ipsum dollor site Lorem ipsum dollor site Lorem ipsum dollor site",
    shortName: "Nile",
    network: { twitter: "https://twitter.com/" },
  },{
    name: "Nile",
    description: "Lorem ipsum dollor site",
    shortName: "Nile",
    network: { twitter: "https://twitter.com/" },
  },{
    name: "Nile",
    description: "Lorem ipsum dollor site",
    shortName: "Nile",
    network: { twitter: "https://twitter.com/" },
  },{
    name: "Nile",
    description: "Lorem ipsum dollor site",
    shortName: "Nile",
    network: { twitter: "https://twitter.com/" },
  },{
    name: "Nile",
    description: "Lorem ipsum dollor site",
    shortName: "Nile",
    network: { twitter: "https://twitter.com/" },
  },{
    name: "Nile",
    description: "Lorem ipsum dollor site",
    shortName: "Nile",
    network: { twitter: "https://twitter.com/" },
  },{
    name: "Nile",
    description: "Lorem ipsum dollor site",
    shortName: "Nile",
    network: { twitter: "https://twitter.com/" },
  },{
    name: "Nile",
    description: "Lorem ipsum dollor site",
    shortName: "Nile",
    network: { twitter: "https://twitter.com/" },
  },{
    name: "Nile",
    description: "Lorem ipsum dollor site",
    shortName: "Nile",
    network: { twitter: "https://twitter.com/" },
  },
];

const AcademyPage: FC = () => {
  const { t } = useTranslate();
  const LOADED_STEPS = 20;
  const [lastIndexLoaded, setLastIndexLoaded] = useState<number>(LOADED_STEPS);
  const { observe } = useInView({
    // When the last item comes to the viewport
    onEnter: ({ unobserve }) => {
      // Pause observe when loading data
      unobserve();
      setLastIndexLoaded(lastIndexLoaded + LOADED_STEPS);
    },
  });

  return (
    <Flex w="full" direction={{ base: "column", md: "row" }} mt={24}>
      <Menu
        tags={allAcademyCategory}
        initialValue={allAcademyCategory[0]}
        onChange={(newValue) => {
          console.log(newValue);
        }}
      />
      {resources && resources.length > 0 ? (
        <SimpleGrid columns={{ sm: 1, lg: 2, xl: 3 }} spacing="20px">
          {resources.map((resource: ResourceItf, index: number) => {
            return (
              <Box
                ref={index === resources.length - 1 ? observe : null}
                key={`resource-${resource.name}`}
                flex={1}
              >
                <CardResource index={index} resource={resource} />
              </Box>
            );
          })}
        </SimpleGrid>
      ) : (
        <Flex w="full" direction="column" align="center" opacity=".8">
          <Text fontSize="24px">{t.common.no_project}</Text>
          <Text mt={2} fontSize="18px">
            {t.common.maybe_yours}
          </Text>
        </Flex>
      )}
    </Flex>
  );
};

export default AcademyPage;
