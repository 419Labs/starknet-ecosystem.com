import { Box, Flex, HStack, SimpleGrid, Text, VStack } from "@chakra-ui/layout";
import { Input } from "@chakra-ui/react";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { FC, ChangeEvent } from "react";
import { useEffect, useState } from "react";
import useInView from "react-cool-inview";

import type { ResourceItf } from "../../../data/academy";
import {
  allAcademyCategory,
  academyResourcesBundle,
} from "../../../data/academy";
import CardHighlight from "../../components/card/CardHighlight";
import CardResource from "../../components/card/CardResource";
import HighlightedText from "../../components/layout/HighlightedText";
import Menu from "../../components/layout/Menu";
import { useTranslate } from "../../context/TranslateProvider";
import { EcosystemApi } from "../../services/ecosystem-api.service";
import { shortenText } from "../../services/project.service";

const AcademyPage: FC = () => {
  const { t } = useTranslate();
  const [currentCategory, setCurrentCategory] = useState(allAcademyCategory[0]);
  const [currentResources, setCurrentResources] = useState<ResourceItf[]>(
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    academyResourcesBundle[currentCategory.value]
  );
  const [keyword, setKeyword] = useState<string>("");
  const LOADED_STEPS = 20;
  const [lastIndexLoaded, setLastIndexLoaded] = useState<number>(LOADED_STEPS);

  useEffect(() => {
    if (currentCategory.value === "contributions") {
      EcosystemApi.fetchContributions(keyword).then((contributions) =>
        setCurrentResources(
          contributions.map((contribution) => ({
            id: contribution.id,
            name: shortenText(contribution.title, 50),
            description: contribution.projectName,
            network: {},
            link: `https://app.onlydust.xyz/contributions/${contribution.id}`,
          }))
        )
      );
      return;
    }

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const resources = academyResourcesBundle[currentCategory.value].filter(
      (resource: ResourceItf) =>
        keyword === "" ||
        resource.name.toLowerCase().includes(keyword.toLowerCase()) ||
        resource.description.toLowerCase().includes(keyword.toLowerCase())
    );
    setCurrentResources(resources);
  }, [keyword, currentCategory]);

  const { observe } = useInView({
    // When the last item comes to the viewport
    onEnter: ({ unobserve }) => {
      // Pause observe when loading data
      unobserve();
      setLastIndexLoaded(lastIndexLoaded + LOADED_STEPS);
    },
  });

  const handleChangeKeyword = (event: ChangeEvent<HTMLInputElement>) =>
    setKeyword(event.target.value);

  return (
    <Flex
      w="full"
      direction="column"
      justify="flex-start"
      align="flex-start"
      transform="translateZ(0)"
    >
      <HighlightedText highlighted="Academy" />
      {/* Sub intro text */}
      <Text
        zIndex={1}
        mt={8}
        textAlign="start"
        color="whiteAlpha.600"
        fontSize="20px"
        maxWidth="600px"
      >
        {t.common.subtitle_main}
      </Text>
      <Flex w="full" direction={{ base: "column", md: "row" }} mt={24}>
        <Menu
          typeText="Resources"
          tags={allAcademyCategory}
          initialValue={allAcademyCategory[0]}
          onChange={(newValue) => {
            setCurrentCategory(newValue);
          }}
        />
        <VStack justify="flex-start" align="flex-start">
          <Input
            value={keyword}
            onChange={handleChangeKeyword}
            placeholder="Search"
            mb={5}
          />
          {/* <Text fontSize="6xl" fontWeight="bold">
            Highlights 🔥
          </Text>
           Highlighted resources
           TODO Remove that & choose 3 resources that are hot / new / have interest ???
          <SimpleGrid columns={{ sm: 1, lg: 2, xl: 3 }} spacing="20px">
            {academyResourcesBundle.learning
              .slice(0, 3)
              .map((resource: ResourceItf, index: number) => {
                return (
                  <Box
                    ref={
                      index === academyResourcesBundle.learning.length - 1
                        ? observe
                        : null
                    }
                    key={`resource-${resource.name}`}
                    flex={1}
                  >
                    <CardResource index={index} resource={resource} />
                  </Box>
                );
              })}
          </SimpleGrid> */}
          <Text pt={20} fontSize="6xl" fontWeight="bold">
            {currentCategory.label}
          </Text>
          {currentResources && currentResources.length > 0 ? (
            <SimpleGrid columns={{ sm: 1, lg: 2, xl: 3 }} spacing="20px">
              {/* eslint-disable-next-line sonarjs/no-identical-functions */}
              {currentResources.map((resource: ResourceItf, index: number) => {
                return (
                  <Box
                    ref={index === currentResources.length - 1 ? observe : null}
                    // eslint-disable-next-line react/no-array-index-key
                    key={`resource-${resource.name}-${index}`}
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
          <Text pt={20} fontSize="6xl" fontWeight="bold">
            Useful
          </Text>
          <HStack>
            <CardHighlight
              bg="flat.100"
              icon={<FontAwesomeIcon icon={solid("home")} />}
              title="Get started"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
            />
            <CardHighlight
              color="flat.100"
              icon={<FontAwesomeIcon icon={solid("home")} />}
              title="Get started"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
            />
          </HStack>
        </VStack>
      </Flex>
    </Flex>
  );
};

export default AcademyPage;
