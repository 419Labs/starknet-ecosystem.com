import { Flex, Text } from "@chakra-ui/layout";
import type { NextPage } from "next";
import type { ChangeEvent } from "react";
import { useEffect, useState } from "react";
import useInView from "react-cool-inview";

import { allProjects } from "../../../data/ecosystem";
import allJobs from "../../../data/job";
import JobTable from "../../components/job/JobTable";
import HighlightedText from "../../components/layout/HighlightedText";
import Input from "../../components/layout/Input";
import { useTranslate } from "../../context/TranslateProvider";
import type { Job } from "../../models/job";
import type { JobFilter } from "../../models/job-filter";
import { filterJobs } from "../../services/job.service";

const LOADED_STEPS = 25;

const JobsPage: NextPage = () => {
  const { t } = useTranslate();
  const [lastIndexLoaded, setLastIndexLoaded] = useState<number>(LOADED_STEPS);
  const [jobs, setJobs] = useState<Job[]>([]);
  // const [filteredJobsCount, setFilteredJobsCount] = useState<number>(-1);
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
    // setFilteredJobsCount(newJobs.length);
  }, [filters, lastIndexLoaded]);

  const { observe } = useInView({
    // When the last item comes to the viewport
    onEnter: ({ unobserve }) => {
      // Pause observe when loading data
      unobserve();
      setLastIndexLoaded(lastIndexLoaded + LOADED_STEPS);
    },
  });

  const handleChangeKeyword = (event: ChangeEvent<HTMLInputElement>) =>
    setFilters({ ...filters, search: event.target.value });

  return (
    <Flex
      w="full"
      direction="column"
      justify="flex-start"
      align="flex-start"
      transform="translateZ(0)"
    >
      <HighlightedText highlighted={t.common.job_title_main || "Jobs"} />
      {/* Sub intro text */}
      <Text
        zIndex={1}
        mt={8}
        textAlign="start"
        color="whiteAlpha.600"
        fontSize="20px"
        maxWidth="600px"
      >
        {t.common.jobs_subtitle ||
          "You may be one click away from your dream job."}
      </Text>
      <Flex w="full" direction={{ base: "column", md: "row" }} mt={24}>
        {/* <Menu
          typeText="Jobs"
          childCount={filteredJobsCount}
          tags={allJobTags}
          initialValue={allJobTags[0]}
          onChange={(newValue) => {
            const { value } = newValue;
            setFilters({
              ...filters,
              tags: value === "all" ? [] : [newValue.value],
            });
            setFilteredJobsCount(-1);
          }}
        /> */}
        <Flex direction="column" w="full" align="flex-end">
          <Input
            debounce={200}
            my={2}
            mb={8}
            maxW={{ base: "inherit", md: "250px" }}
            onChange={handleChangeKeyword}
            placeholder="Search"
          />
          <JobTable
            projects={allProjects}
            jobs={jobs}
            observe={observe}
            onFilterChanged={(updatedFilter) =>
              setFilters({ ...filters, ...updatedFilter })
            }
          />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default JobsPage;
