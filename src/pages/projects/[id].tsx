import { GridItem, SimpleGrid, Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";
import { useRouter } from "next/router";
import type { FC } from "react";
import { useEffect, useState } from "react";

import type { Project } from "../../../data/ecosystem";
import HighlightedText from "../../components/layout/HighlightedText";
import ProjectsInfos from "../../components/project/ProjectsInfos";
import { EcosystemApi } from "../../services/ecosystem-api.service";
import FourOhFour from "../404";

const ProjectPage: FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const [project, setProject] = useState<Project>();
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    if (typeof id === "string") {
      EcosystemApi.fetchProjectById(id)
        .then(setProject)
        .catch(() => setError(true));
    } else {
      setError(true);
    }
  }, [id]);

  if (!project && error) return <FourOhFour />;
  if (!project) return <p>Loading</p>; // TODO loading

  const getHighlighted = (): string => project.name.split(" ")[0];

  const getText = (): string => {
    const words = project.name.split(" ");
    if (words.length === 1) return "";
    return words.slice(1, words.length).join(" ");
  };

  return (
    <SimpleGrid
      columns={{ lg: 1, xl: 2 }}
      gap={6}
      w="full"
      templateAreas={{
        base: `"banner"
                  "title"
                  "infos"
                  "team"`,
        xl: `"banner infos"
                  "title team"`,
      }}
    >
      <GridItem w="full" area="banner">
        <Image
          src={project.network.twitterBanner ?? project.image}
          width="full"
          borderRadius="lg"
          position="relative"
          objectFit="cover"
          height="200px"
        />
      </GridItem>
      <GridItem w="100%" area="infos">
        <ProjectsInfos project={project} />
      </GridItem>
      <GridItem w="full" area="title">
        <HighlightedText
          fontSize="5xl"
          highlighted={getHighlighted()}
          text={getText()}
        />
        <Text mt={8} textAlign="start" color="whiteAlpha.600" fontSize="md">
          {project.description}
        </Text>
      </GridItem>
      {/* <GridItem w="full" area="team"> */}
      {/*  <TeamInfos /> */}
      {/* </GridItem> */}
    </SimpleGrid>
  );
};

export default ProjectPage;
