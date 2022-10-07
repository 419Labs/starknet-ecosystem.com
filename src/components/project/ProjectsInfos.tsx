import { Flex, HStack, Text } from "@chakra-ui/layout";
import type { FC } from "react";
import { useEffect, useState } from "react";

import type { Project } from "../../../data/ecosystem";
import allJobs from "../../../data/job";
import { useTranslate } from "../../context/TranslateProvider";
import Link from "../layout/Link";
import NetworkLogos from "../layout/NetworkLogos";

import ProjectsInfosDetails from "./ProjectsInfosDetails";

interface Props {
  project?: Project;
}

const ProjectsInfos: FC<Props> = ({ project }) => {
  const { t } = useTranslate();
  const [jobCount, setJobCount] = useState(0);

  useEffect(() => {
    setJobCount(allJobs.filter((job) => job.projectId === project?.id).length);
  }, [project]);

  // const renderTechStack = () => {
  //   return (
  //     <Flex direction="column">
  //       <ProjectsInfosDetails
  //         title="Tech stack"
  //         value={
  //           <HStack wrap="wrap" spacing={0}>
  //             <ImageTooltip
  //               img={
  //                 <Image
  //                   mr={1}
  //                   src="/tech-logos/next-logo.png"
  //                   objectFit="fill"
  //                   height="24px"
  //                 />
  //               }
  //               tooltipText="Nextjs"
  //             />
  //             <ImageTooltip
  //               img={
  //                 <Image
  //                   mr={1}
  //                   src="/tech-logos/spring-logo.png"
  //                   objectFit="fill"
  //                   height="24px"
  //                 />
  //               }
  //               tooltipText="Spring"
  //             />
  //             <ImageTooltip
  //               img={
  //                 <Image
  //                   mr={1}
  //                   src="/tech-logos/cairo-logo.png"
  //                   objectFit="fill"
  //                   height="24px"
  //                 />
  //               }
  //               tooltipText="Cairo"
  //             />
  //           </HStack>
  //         }
  //       />
  //     </Flex>
  //   );
  // };
  if (!project) return null;
  return (
    <Flex direction="column" align="flex-start">
      <Text fontSize="3xl" mb={8} fontWeight="bold">
        Infos
      </Text>
      <Flex
        direction={{ base: "column", md: "row" }}
        w="full"
        justify={{ base: "flex-start", lg: "flex-start" }}
      >
        <Flex
          direction="column"
          borderRight="1px solid"
          borderColor={{ base: "transparent", md: "whiteAlpha.300" }}
          pr={12}
          mr={12}
        >
          <ProjectsInfosDetails
            title="Socials"
            value={<NetworkLogos network={project.network} />}
          />
          {project.token && (
            <ProjectsInfosDetails
              title="Token"
              value={
                <HStack>
                  <Text color="whiteAlpha.600">{project.token}</Text>
                  {/* <Link */}
                  {/*  href="/" */}
                  {/*  color="primary.200" */}
                  {/*  hoverOpacity=".5" */}
                  {/*  fontWeight="bold" */}
                  {/* > */}
                  {/*  0x1234...5678 */}
                  {/* </Link> */}
                </HStack>
              }
            />
          )}
          {/* <ProjectsInfosDetails */}
          {/*  title="Founded" */}
          {/*  value={<Text color="whiteAlpha.600">2021</Text>} */}
          {/* /> */}
        </Flex>
        <Flex
          direction="column"
          borderRight="1px solid"
          borderColor={{
            base: "transparent",
            md: "whiteAlpha.300",
            xl: "transparent",
          }}
          mr={12}
        >
          {/* <ProjectsInfosDetails */}
          {/*  title="Contracts" */}
          {/*  value={ */}
          {/*    <VStack align="flex-start" spacing={0}> */}
          {/*      <Link */}
          {/*        href="/" */}
          {/*        color="primary.200" */}
          {/*        hoverOpacity=".5" */}
          {/*        fontWeight="bold" */}
          {/*      > */}
          {/*        0x1234...5678 */}
          {/*      </Link> */}
          {/*      <Link */}
          {/*        href="/" */}
          {/*        color="primary.200" */}
          {/*        hoverOpacity=".5" */}
          {/*        fontWeight="bold" */}
          {/*      > */}
          {/*        0x1234...5678 */}
          {/*      </Link> */}
          {/*    </VStack> */}
          {/*  } */}
          {/* /> */}
          {/* <ProjectsInfosDetails */}
          {/*  title="Audited" */}
          {/*  value={<Text color="whiteAlpha.600">No</Text>} */}
          {/* /> */}
          <ProjectsInfosDetails
            title={t.common.jobs || "Jobs"}
            value={
              <HStack>
                <Text color="whiteAlpha.600">
                  {jobCount === 0
                    ? "No open positon"
                    : `${jobCount} open positions`}
                </Text>
                <Link
                  href="/jobs"
                  color="primary.200"
                  hoverOpacity=".5"
                  fontWeight="bold"
                >
                  see
                </Link>
              </HStack>
            }
          />
          {/* <Hide below="xl">{renderTechStack()}</Hide> */}
        </Flex>
        {/* <Hide above="xl">{renderTechStack()}</Hide> */}
      </Flex>
    </Flex>
  );
};

export default ProjectsInfos;
