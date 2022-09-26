import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/layout";
import { Hide, Image } from "@chakra-ui/react";
import type { GetServerSideProps } from "next";
import type { FC } from "react";
import { useEffect, useState } from "react";
import useInView from "react-cool-inview";
import useSWR, { SWRConfig } from "swr";
import useSWRInfinite from "swr/infinite";

import type { Project, ProjectItf } from "../../data/ecosystem";
import type { Tag } from "../../data/tag";
import { allTags } from "../../data/tag";
import CardProject from "../components/card/CardProject";
import HighlightedText from "../components/layout/HighlightedText";
import Menu from "../components/layout/Menu";
import { useTranslate } from "../context/TranslateProvider";
import { EcosystemApi } from "../services/ecosystem-api.service";

const fetcher = (pageIndex: number): Promise<Project[]> =>
  EcosystemApi.fetchEcosystemProjects(pageIndex);
interface Props {
  fallback: {
    allProjects: Project[];
  };
}

const Home: FC<Props> = ({ fallback }: Props) => {
  const { t } = useTranslate();
  const tagAll = allTags[0];
  const [filter, setFilter] = useState(tagAll);
  const [filteredProjects, setFilteredProjects] = useState<ProjectItf[]>([]);

  const getKey = (pageIndex, previousPageData) => {
    console.log(pageIndex);
    if (previousPageData && !previousPageData.length) return null; // reached the end
    return `${pageIndex}`; // SWR key
  };
  const { data, size, setSize } = useSWRInfinite(getKey, fetcher);

  const { observe } = useInView({
    // When the last item comes to the viewport
    onEnter: ({ unobserve }) => {
      // Pause observe when loading data
      unobserve();
      // setLastIndexLoaded(lastIndexLoaded + LOADED_STEPS);
      setSize(size + 1);
    },
  });

  /* useEffect(() => {
    if (!allProjects) return;

    const newProjects = allProjects
      .filter((project: Project) => {
        return filter === tagAll || project.tags.indexOf(filter.value) !== -1;
      })
      .sort((project1: Project, project2: Project) =>
        project1.name.toLowerCase().localeCompare(project2.name.toLowerCase())
      )
      .slice(0, lastIndexLoaded)
      .map((project: Project) => {
        const projectTags = project.tags;
        return {
          ...project,
          tagsRef: allTags.filter((tagItem: Tag) => {
            return projectTags.includes(tagItem.value);
          }),
        };
      });
    setFilteredProjects(newProjects);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter, lastIndexLoaded, allProjects]); */

  if (!data) return "loading";
  return (
    <SWRConfig value={{ fallback }}>
      <Flex
        w="full"
        direction="column"
        justify="flex-start"
        align="flex-start"
        transform="translateZ(0)"
      >
        <Flex
          direction="row"
          w="full"
          justify="space-between"
          position="relative"
        >
          {/* Big intro text */}
          <HighlightedText
            text={t.common.title_main_dapps}
            highlighted="1234"
          />
          <Box
            boxSize="500px"
            position="absolute"
            right="0"
            top="-200px"
            zIndex={0}
          >
            <Image src="/astro.png" alt="Starknet Astro" />
          </Box>
        </Flex>
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
        {/* Main part */}
        <Flex w="full" direction="row" mt={24}>
          <Hide below="md">
            <Menu
              tags={allTags}
              initialValue={tagAll}
              onChange={(newValue) => setFilter(newValue)}
            />
          </Hide>
          <SimpleGrid columns={{ sm: 1, md: 1, lg: 2, xl: 3 }} spacing="20px">
            {data.map((projects) => {
              return projects.length > 0 ? (
                projects.map((project: ProjectItf, projectIdx: number) => {
                  return (
                    <Box
                      ref={projectIdx === projects.length - 1 ? observe : null}
                      key={`project-${project.name}`}
                      flex={1}
                    >
                      <CardProject project={project} />
                    </Box>
                  );
                })
              ) : (
                <Flex my={8} direction="column" align="center" opacity=".8">
                  <Text fontSize="24px">{t.common.no_project}</Text>
                  <Text mt={2} fontSize="18px">
                    {t.common.maybe_yours}
                  </Text>
                </Flex>
              );
            })}
          </SimpleGrid>
        </Flex>
      </Flex>
    </SWRConfig>
  );
};

/*
export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=3600, stale-while-revalidate=7200"
  ); // Cache this for an hour
  const allProjects = await fetcher();
  return {
    props: {
      fallback: {
        allProjects,
      },
    } as Props,
  };
};
*/

export default Home;
