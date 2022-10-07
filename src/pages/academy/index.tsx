import { Flex, Text } from "@chakra-ui/layout";
import type { FC, ChangeEvent } from "react";
import { useState } from "react";
import useInView from "react-cool-inview";

import { academyResourcesBundle } from "../../../data/academy";
import { AcademyCategory, allAcademyTags } from "../../../data/tag";
import ContributeContent from "../../components/academy/ContributeContent";
import LearnContent from "../../components/academy/LearnContent";
import NewsInfosContent from "../../components/academy/NewsInfosContent";
import ToolsContent from "../../components/academy/ToolsContent";
import WalletsContent from "../../components/academy/WalletsContent";
import HighlightedText from "../../components/layout/HighlightedText";
import Input from "../../components/layout/Input";
import Menu from "../../components/layout/Menu";
import { useTranslate } from "../../context/TranslateProvider";

const AcademyPage: FC = () => {
  const { t } = useTranslate();
  const [currentCategory, setCurrentCategory] = useState(allAcademyTags[0]);
  const [keyword, setKeyword] = useState<string>("");
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

  const handleChangeKeyword = (event: ChangeEvent<HTMLInputElement>) =>
    setKeyword(event.target.value);

  const renderContent = () => {
    switch (currentCategory.value) {
      case AcademyCategory.CONTRIBUTE:
        return (
          <ContributeContent
            resources={academyResourcesBundle.contributions}
            observe={observe}
            keyword={keyword}
          />
        );
      case AcademyCategory.TOOLS:
        return (
          <ToolsContent
            resources={academyResourcesBundle.tools}
            observe={observe}
            keyword={keyword}
          />
        );
      case AcademyCategory.WALLETS:
        return (
          <WalletsContent
            resources={academyResourcesBundle.wallets}
            observe={observe}
            keyword={keyword}
          />
        );
      case AcademyCategory.NEWS_FEED:
        return (
          <NewsInfosContent
            resources={academyResourcesBundle.newsfeed}
            observe={observe}
            keyword={keyword}
          />
        );
      case AcademyCategory.LEARNING:
      default:
        return (
          <LearnContent
            observe={observe}
            resources={academyResourcesBundle.learning}
            keyword={keyword}
          />
        );
    }
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
          {renderContent()}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default AcademyPage;
