import { GridItem, SimpleGrid, Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";
import type { GetServerSidePropsContext } from "next";
import type { FC } from "react";

import type { Project } from "../../../data/ecosystem";
import HighlightedText from "../../components/layout/HighlightedText";
import ProjectsInfos from "../../components/project/ProjectsInfos";
import { EcosystemApi } from "../../services/ecosystem-api.service";

interface Props {
  project: Project;
  error: boolean;
}
const ProjectPage: FC<Props> = ({ project, error }: Props) => {
  if (!project && error) return <p>404</p>; // TODO 404 page
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

export async function getServerSideProps({ query }: GetServerSidePropsContext) {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return EcosystemApi.fetchProjectById(query.id)
    .then((project) => {
      return {
        props: {
          project,
        },
      };
    })
    .catch(() => {
      return {
        props: {
          project: undefined,
          error: true,
        }, // will be passed to the page component as props
      };
    });
}

export default ProjectPage;
