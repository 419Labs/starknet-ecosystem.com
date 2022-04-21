import { Box, Flex, Text } from "@chakra-ui/layout";
import type { NextPage } from "next";
import { useEffect, useState } from "react";
import useInView from "react-cool-inview";

import allCompanies from "../../../data/company";
import allJobs from "../../../data/job";
import JobFilters from "../../components/job/JobFilters";
import JobTable from "../../components/job/JobTable";
import { useTranslate } from "../../context/TranslateProvider";
import type { Company } from "../../models/company";
import type { Job } from "../../models/job";
import type { JobFilter } from "../../models/job-filter";
import { filterJobs, getAllTags } from "../../services/job.service";

const LOADED_STEPS = 25;

const JobsPage: NextPage = () => {
  const { t } = useTranslate();
  const [lastIndexLoaded, setLastIndexLoaded] = useState<number>(LOADED_STEPS);
  const [companies] = useState<Company[]>(allCompanies);
  const [tags] = useState(getAllTags(allJobs));
  const [jobs, setJobs] = useState<Job[]>([]);
  const [filters, setFilters] = useState<JobFilter>({
    remote: false,
    search: "",
    tags: [],
  });

  useEffect(() => {
    const newJobs = filterJobs(allJobs, filters)
      .sort((job1, job2) => (job1.createdOn > job2.createdOn ? -1 : 1))
      .slice(0, lastIndexLoaded);
    setJobs(newJobs);
  }, [filters, lastIndexLoaded]);

  const { observe } = useInView({
    // When the last item comes to the viewport
    onEnter: ({ unobserve }) => {
      // Pause observe when loading data
      unobserve();
      setLastIndexLoaded(lastIndexLoaded + LOADED_STEPS);
    },
  });

  return (
    <Flex direction="column" w="full" h="full">
      <Text
        textAlign="center"
        lineHeight={1.2}
        fontSize={["48px", "68px"]}
        fontWeight="bold"
      >
        {t.common.job_title_main || "StarkNet Jobs"}
      </Text>
      {/* <JobFilters filters={filters} tags={tags} onChange={setFilters} /> */}
      {jobs.length === 0 ? (
        <Text textAlign="center">{t.common.no_job || "No job found"}</Text>
      ) : (
        // Fill free place on screen & hide overflow
        <Flex flex={1} overflow="hidden">
          <JobTable jobs={jobs} companies={companies} observe={observe} />
        </Flex>
      )}
    </Flex>
  );
};

export default JobsPage;
