import { Divider, Flex, HStack, Text, VStack } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";
import type { FC } from "react";

import type { Project } from "../../../data/ecosystem";
import Link from "../layout/Link";
import NetworkLogos from "../layout/NetworkLogos";

import ImageTooltip from "./ImageTooltip";
import ProjectsInfosDetails from "./ProjectsInfosDetails";

interface Props {
  project?: Project;
}

const ProjectsInfos: FC<Props> = ({ project }) => {
  if (!project) return null;
  return (
    <Flex direction="column">
      <Text fontSize="3xl" mb={4}>
        Infos
      </Text>
      <Flex direction="row" w="full">
        <Flex
          direction="column"
          borderRight="1px solid"
          borderColor="whiteAlpha.300"
          pr={12}
          mr={12}
        >
          <ProjectsInfosDetails
            title="Socials"
            value={<NetworkLogos network={project.network} />}
          />
          <ProjectsInfosDetails
            title="Token"
            value={
              <HStack>
                <Text color="whiteAlpha.600">AVNU - </Text>
                <Link
                  href="/"
                  color="primary.200"
                  hoverOpacity=".5"
                  fontWeight="bold"
                >
                  0x1234...5678
                </Link>
              </HStack>
            }
          />
          <ProjectsInfosDetails
            title="Founded"
            value={<Text color="whiteAlpha.600">2021</Text>}
          />
        </Flex>
        <Flex direction="column">
          <ProjectsInfosDetails
            title="Contracts"
            value={
              <VStack align="flex-start" spacing={0}>
                <Link
                  href="/"
                  color="primary.200"
                  hoverOpacity=".5"
                  fontWeight="bold"
                >
                  0x1234...5678
                </Link>
                <Link
                  href="/"
                  color="primary.200"
                  hoverOpacity=".5"
                  fontWeight="bold"
                >
                  0x1234...5678
                </Link>
              </VStack>
            }
          />
          <ProjectsInfosDetails
            title="Audited"
            value={<Text color="whiteAlpha.600">No</Text>}
          />
          <ProjectsInfosDetails
            title="Jobs"
            value={
              <HStack>
                <Text color="whiteAlpha.600">3 open positions</Text>
                <Link
                  href="/"
                  color="primary.200"
                  hoverOpacity=".5"
                  fontWeight="bold"
                >
                  see
                </Link>
              </HStack>
            }
          />
          <ProjectsInfosDetails
            title="Tech stack"
            value={
              <HStack>
                <ImageTooltip
                  img={
                    <Image
                      src="/tech-logos/next-logo.png"
                      objectFit="fill"
                      height="24px"
                    />
                  }
                  tooltipText="Nextjs"
                />
                <ImageTooltip
                  img={
                    <Image
                      src="/tech-logos/spring-logo.png"
                      objectFit="fill"
                      height="24px"
                    />
                  }
                  tooltipText="Spring"
                />
                <ImageTooltip
                  img={
                    <Image
                      src="/tech-logos/cairo-logo.png"
                      objectFit="fill"
                      height="24px"
                    />
                  }
                  tooltipText="Cairo"
                />
              </HStack>
            }
          />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ProjectsInfos;
