import { Flex, HStack, Text } from "@chakra-ui/layout";
import type { FC } from "react";

import type { Project } from "../../../data/ecosystem";
import NetworkLogos from "../layout/NetworkLogos";

import ProjectsInfosDetails from "./ProjectsInfosDetails";

interface Props {
  project?: Project;
}

const ProjectsInfos: FC<Props> = ({ project }) => {

  if (!project) return null;

  return (
    <Flex direction="column" align="flex-start">
      <Text fontSize="2xl" mb={6} fontWeight="600" color="text.primary">
        Info
      </Text>
      <Flex
        direction={{ base: "column", md: "row" }}
        w="full"
        justify={{ base: "flex-start", lg: "flex-start" }}
        gap={8}
      >
        <Flex direction="column">
          <ProjectsInfosDetails
            title="Socials"
            value={<NetworkLogos network={project.network} />}
          />
          {project.token && (
            <ProjectsInfosDetails
              title="Token"
              value={
                <HStack>
                  <Text color="text.secondary">{project.token}</Text>
                </HStack>
              }
            />
          )}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ProjectsInfos;
