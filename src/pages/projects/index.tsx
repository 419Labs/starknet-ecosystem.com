import { GridItem, SimpleGrid, Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";
import type { FC } from "react";

import { allProjects } from "../../../data/ecosystem";
import HighlightedText from "../../components/layout/HighlightedText";
import ProjectsInfos from "../../components/project/ProjectsInfos";
import TeamInfos from "../../components/project/TeamInfos";
import { useTranslate } from "../../context/TranslateProvider";

const ProjectPage: FC = ({}) => {
  const { t } = useTranslate();
  // TODO Fetch correct project by UUID in service side props
  const project = allProjects[0];

  const getHighlighted = () => {
    return project.name.split(" ")[0];
  };

  const getText = () => {
    const words = project.name.split(" ");
    if (words.length === 1) return "";
    return words.slice(1, words.length).join(" ");
  };

  return (
    <SimpleGrid columns={{ lg: 1, xl: 2 }} gap={6} w="full">
      <GridItem w="full">
        <Image
          src="/arf_banner.png"
          width="full"
          borderRadius="lg"
          position="relative"
          objectFit="cover"
          height="200px"
        />
      </GridItem>
      <GridItem w="100%">
        <ProjectsInfos project={project} />
      </GridItem>
      <GridItem w="full">
        <HighlightedText
          fontSize="5xl"
          highlighted={getHighlighted()}
          text={getText()}
        />
        <Text mt={8} textAlign="start" color="whiteAlpha.600" fontSize="md">
          {t.common.subtitle_main}
        </Text>
      </GridItem>
      <GridItem w="full">
        <TeamInfos />
      </GridItem>
    </SimpleGrid>
  );
};

export default ProjectPage;
