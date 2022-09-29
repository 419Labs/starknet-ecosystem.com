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
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    shortName: "Nile",
    // eslint-disable-next-line sonarjs/no-duplicate-string
    network: { twitter: "https://twitter.com/" },
  },
  {
    name: "Nile",
    // eslint-disable-next-line sonarjs/no-duplicate-string
    description: "Lorem ipsum dolor sit amet",
    shortName: "Nile",
    network: { twitter: "https://twitter.com/" },
  },
  {
    name: "Nile",
    description: "Lorem ipsum dolor sit amet",
    shortName: "Nile",
    network: { twitter: "https://twitter.com/" },
  },
  {
    name: "Nile",
    description: "Lorem ipsum dolor sit amet",
    shortName: "Nile",
    network: { twitter: "https://twitter.com/" },
  },
  {
    name: "Nile",
    description: "Lorem ipsum dolor sit amet",
    shortName: "Nile",
    network: { twitter: "https://twitter.com/" },
  },
  {
    name: "Nile",
    description: "Lorem ipsum dolor sit amet",
    shortName: "Nile",
    network: { twitter: "https://twitter.com/" },
  },
  {
    name: "Nile",
    description: "Lorem ipsum dolor sit amet",
    shortName: "Nile",
    network: { twitter: "https://twitter.com/" },
  },
  {
    name: "Nile",
    description: "Lorem ipsum dolor sit amet",
    shortName: "Nile",
    network: { twitter: "https://twitter.com/" },
  },
  {
    name: "Nile",
    description: "Lorem ipsum dolor sit amet",
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
