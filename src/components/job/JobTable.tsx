import { Box, Flex, Text } from "@chakra-ui/layout";
import type { FC } from "react";

import type { Project } from "../../../data/ecosystem";
import { useTranslate } from "../../context/TranslateProvider";
import type { Job } from "../../models/job";
import { getJobKey } from "../../services/job.service";
import { findProjectById } from "../../services/project.service";

import JobListRaw from "./JobListRaw";

interface Props {
  projects: Project[];
  jobs: Job[];
  observe?: (element?: HTMLElement | null | undefined) => void;
  onFilterChanged: (value: { search: string }) => void;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const JobTable: FC<Props> = ({ projects, jobs, observe, onFilterChanged }) => {
  const { t } = useTranslate();

  /* const handleChangeSearch = (event: ChangeEvent<HTMLInputElement>) =>
    onFilterChanged({ search: event.target.value }); */

  return (
    <Flex w="full" direction="column">
      {jobs && jobs.length > 0 ? (
        jobs.map((job, key) => {
          const project = findProjectById(projects, job.projectId);
          return (
            project && (
              <Box mb={4} key={`${job.title}-${job.projectId}`}>
                <JobListRaw
                  id={getJobKey(job, project)}
                  project={project}
                  job={job}
                  last={key === jobs.length - 1}
                  observe={observe}
                />
              </Box>
            )
          );
        })
      ) : (
        <Flex
          w="full"
          direction="column"
          justify="center"
          align="center"
          mt={20}
        >
          <Text fontSize="xl">{t.common.no_job}</Text>
        </Flex>
      )}
    </Flex>
  );
};

export default JobTable;
