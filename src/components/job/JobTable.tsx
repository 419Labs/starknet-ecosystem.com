import { Box, Flex, HStack, Stack, Text } from "@chakra-ui/layout";
import { Tag as ChakraTag } from "@chakra-ui/react";
import { useRouter } from "next/router";
import type { FC, ReactElement } from "react";
import { useEffect, useState } from "react";

import type { Company } from "../../models/company";
import type { Job } from "../../models/job";
import { findCompanyById } from "../../services/company.service";
import { findJobFromJobKey } from "../../services/job.service";
import NetworkLogos from "../layout/NetworkLogos";
import StyledTag from "../layout/StyledTag";

import JobListRaw from "./JobListRaw";

interface Props {
  companies: Company[];
  jobs: Job[];
  observe?: (element?: HTMLElement | null | undefined) => void;
}

const JobTable: FC<Props> = ({ companies, jobs, observe }) => {
  const [currentJob, setCurrentJob] = useState<Job | undefined>(undefined);
  const [currentCompany, setCurrentCompany] = useState<Company | undefined>(
    undefined
  );

  const router = useRouter();
  const { query } = router;

  useEffect(() => {
    const { key } = query;
    if (key && typeof key === "string") {
      const newJob = findJobFromJobKey(key, jobs, companies);
      setCurrentJob(newJob);
      setCurrentCompany(
        newJob ? findCompanyById(companies, newJob.companyId) : undefined
      );
    }
  }, [companies, jobs, query]);

  const renderBaseCard = (content: ReactElement) => {
    return (
      <Flex
        overflow="scroll"
        w="full"
        border="1px solid"
        borderColor="gray.800"
        bg="gray.800"
        borderRadius="md"
        direction="column"
        justify="flex-start"
        align="flex-start"
      >
        {content}
      </Flex>
    );
  };

  return (
    <Flex w="full" direction="row">
      {/* Left pane */}
      <Flex minW="300px" h="full" flex={2} pr={2}>
        {renderBaseCard(
          <Box w="full" maxH="0px">
            {/* Wrapped in screen */}
            {jobs.map((job, key) => (
              <JobListRaw
                key={`${job.title}-${job.companyId}`}
                company={findCompanyById(companies, job.companyId)}
                job={job}
                last={key === jobs.length - 1}
                observe={observe}
              />
            ))}
          </Box>
        )}
      </Flex>
      {/* Right pane */}
      <Flex h="full" flex={10} pl={2}>
        {renderBaseCard(
          currentJob && currentCompany ? (
            <Flex p={4} direction="column" maxH="0px">
              {/* Wrapped in screen */}
              <Flex direction="row" align="center">
                <Text fontSize="2xl" fontWeight="black">
                  {currentJob.title}
                </Text>
                <Box h="80%" w="1px" bg="gray.600" mx={4} />
                <Text fontSize="md" fontWeight="normal">
                  {currentCompany?.name}
                </Text>
              </Flex>
              {/* Compensation */}
              <Text mt={1} fontSize="md" fontWeight="normal" color="whiteAlpha.600">
                {currentJob.compensation?.currency || "$"}
                {currentJob.compensation?.from}k -{" "}
                {currentJob.compensation?.currency || "$"}
                {currentJob.compensation?.to}k
              </Text>
              {/* Networks */}
              <Box mt={6} mb={2}>
                <NetworkLogos network={currentCompany.network} />
              </Box>
              {/* Tags */}
              <Stack
                my={2}
                direction="row"
                spacing={2}
                wrap="wrap"
                shouldWrapChildren
                justify="flex-start"
              >
                {currentJob.remote && (
                  <StyledTag key="remote" selected value="Remote" size="md" />
                )}
                {currentJob.tags.map((tag) => (
                  <StyledTag key={tag} value={tag} size="md" />
                ))}
              </Stack>
              {/* Job description */}
              <Box my={4}>
                <Text
                  borderBottom="1px solid"
                  borderColor="whiteAlpha.200"
                  fontSize="xl"
                  fontWeight="extrabold"
                  mb={4}
                >
                  Description
                </Text>
                <Text
                  fontSize="sm"
                  fontWeight="normal"
                  listStylePosition="inside"
                  lineHeight="24px"
                  dangerouslySetInnerHTML={{ __html: currentJob.description }}
                />
              </Box>
              {/* Job Requirements */}
              <Box my={4} pb={4}>
                <Text
                  borderBottom="1px solid"
                  borderColor="whiteAlpha.200"
                  fontSize="xl"
                  fontWeight="extrabold"
                  mb={4}
                >
                  Requirements
                </Text>
                <Text
                  fontSize="sm"
                  fontWeight="normal"
                  listStylePosition="inside"
                  lineHeight="24px"
                  dangerouslySetInnerHTML={{ __html: currentJob.description }}
                />
              </Box>
            </Flex>
          ) : (
            // No jobs to show
            <span>No job selected</span>
          )
        )}
      </Flex>
    </Flex>
  );
};

export default JobTable;
