import { Box, Flex, Text } from "@chakra-ui/layout";
import type { FC } from "react";

import { useTranslate } from "../../context/TranslateProvider";
import type { Company } from "../../models/company";
import type { Job } from "../../models/job";
import { findCompanyById } from "../../services/company.service";
import { getJobKey } from "../../services/job.service";

import JobListRaw from "./JobListRaw";

interface Props {
  companies: Company[];
  jobs: Job[];
  observe?: (element?: HTMLElement | null | undefined) => void;
  onFilterChanged: (value: { search: string }) => void;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const JobTable: FC<Props> = ({ companies, jobs, observe, onFilterChanged }) => {
  const { t } = useTranslate();

  /* const handleChangeSearch = (event: ChangeEvent<HTMLInputElement>) =>
    onFilterChanged({ search: event.target.value }); */

  return (
    <Flex w="full" direction="column">
      {jobs && jobs.length > 0 ? (
        jobs.map((job, key) => {
          const company = findCompanyById(companies, job.companyId);
          return (
            company && (
              <Box mb={4} key={`${job.title}-${job.companyId}`}>
                <JobListRaw
                  id={getJobKey(job, company)}
                  company={company}
                  job={job}
                  last={key === jobs.length - 1}
                  observe={observe}
                />
              </Box>
            )
          );
        })
      ) : (
        <Flex justify="center" mt={4}>
          <Text fontSize="xl">{t.common.no_job}</Text>
        </Flex>
      )}
    </Flex>
  );
};

export default JobTable;
