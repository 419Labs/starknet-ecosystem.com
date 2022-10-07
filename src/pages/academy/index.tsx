import { Box, Flex, HStack, SimpleGrid, Text, VStack } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { FC, ChangeEvent } from "react";
import { useEffect, useState } from "react";
import useInView from "react-cool-inview";

import type { ResourceItf } from "../../../data/academy";
import { academyResourcesBundle } from "../../../data/academy";
import { allAcademyTags } from "../../../data/tag";
import CardHighlight from "../../components/card/CardHighlight";
import CardResource from "../../components/card/CardResource";
import CardResourceSkeleton from "../../components/card/CardResourceSkeleton";
import DifficultyIcon from "../../components/layout/DifficultyIcon";
import HighlightedText from "../../components/layout/HighlightedText";
import Input from "../../components/layout/Input";
import Menu from "../../components/layout/Menu";
import NetworkLogos from "../../components/layout/NetworkLogos";
import { useTranslate } from "../../context/TranslateProvider";
import { EcosystemApi } from "../../services/ecosystem-api.service";
import { shortenText } from "../../services/project.service";

const AcademyPage: FC = () => {
  const { t } = useTranslate();
  const [loading, setLoading] = useState(false);
  const [currentCategory, setCurrentCategory] = useState(allAcademyTags[0]);
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
      setLoading(true);
      EcosystemApi.fetchContributions(keyword).then((contributions) => {
        setCurrentResources(
          contributions.map((contribution) => ({
            id: contribution.id,
            image: contribution.image,
            name: shortenText(contribution.title, 50),
            description: contribution.projectName,
            network: {},
            link: `https://app.onlydust.xyz/contributions/${contribution.id}`,
            sourceName: contribution.sourceName,
            difficulty: contribution.difficulty,
          }))
        );
        setLoading(false);
      });
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

  const renderLoadingState = () => {
    return Array(20)
      .fill(0)
      .map((_, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <Box key={`project-skeleton-${index}`} flex={1}>
          <CardResourceSkeleton />
        </Box>
      ));
  };

  const renderData = () => {
    return currentResources.map((resource: ResourceItf, index: number) => {
      const { network, difficulty, image } = resource;
      return (
        <Box
          ref={index === currentResources.length - 1 ? observe : null}
          // eslint-disable-next-line react/no-array-index-key
          key={`resource-${resource.name}-${index}`}
          flex={1}
        >
          <CardResource
            index={index}
            resource={resource}
            cardContent={image ? <Image src={image} /> : undefined}
            indication={
              difficulty ? (
                <DifficultyIcon difficultyLabel={difficulty} />
              ) : (
                <NetworkLogos network={network} />
              )
            }
          />
        </Box>
      );
    });
  };

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
        {t.common.academy_subtitle}
      </Text>
      <Flex w="full" direction={{ base: "column", md: "row" }} mt={24}>
        <Menu
          typeText="Resources"
          tags={allAcademyTags}
          initialValue={allAcademyTags[0]}
          onChange={(newValue) => {
            setCurrentCategory(newValue);
          }}
        />
        <Flex direction="column" w="full" align="flex-end">
          <Input
            debounce={200}
            my={2}
            mb={8}
            maxW={{ base: "inherit", md: "250px" }}
            onChange={handleChangeKeyword}
            placeholder="Search"
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
          <VStack w="full" align="flex-start">
            {loading || (currentResources && currentResources.length > 0) ? (
              <SimpleGrid
                columns={{ sm: 1, lg: 2, xl: 3 }}
                spacing="20px"
                w="full"
              >
                {/* eslint-disable-next-line sonarjs/no-identical-functions */}
                {loading ? renderLoadingState() : renderData()}
              </SimpleGrid>
            ) : (
              <Flex
                w="full"
                direction="column"
                justify="center"
                align="center"
                mt={20}
              >
                <Text fontSize="xl">{t.common.no_resource}</Text>
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
            </HStack>
          </VStack>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default AcademyPage;
