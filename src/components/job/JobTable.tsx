import { Box, Flex, Text } from "@chakra-ui/layout";
import { useRouter } from "next/router";
import type { FC } from "react";
import { useEffect, useState } from "react";

import { useTranslate } from "../../context/TranslateProvider";
import type { Company } from "../../models/company";
import type { Job } from "../../models/job";
import { findCompanyById } from "../../services/company.service";
import { findJobFromJobKey } from "../../services/job.service";

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
  const [currentJob, setCurrentJob] = useState<Job | undefined>(undefined);
  const router = useRouter();
  const { query } = router;

  useEffect(() => {
    const { key } = query;
    if (key && typeof key === "string") {
      const newJob = findJobFromJobKey(key, jobs, companies);
      setCurrentJob(newJob);
    } else {
      // Reset view
      setCurrentJob(undefined);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  /* const handleChangeSearch = (event: ChangeEvent<HTMLInputElement>) =>
    onFilterChanged({ search: event.target.value }); */

  return (
    <Flex w="full" direction="column">
      {jobs && jobs.length > 0 ? (
        jobs.map((job, key) => (
          <Box mb={4}>
            <JobListRaw
              key={`${job.title}-${job.companyId}`}
              company={findCompanyById(companies, job.companyId)}
              job={job}
              last={key === jobs.length - 1}
              observe={observe}
              selected={job === currentJob}
            />
          </Box>
        ))
      ) : (
        <Flex justify="center" mt={4}>
          <Text fontSize="xl">{t.common.no_job}</Text>
        </Flex>
      )}
    </Flex>
  );
};

export default JobTable;
