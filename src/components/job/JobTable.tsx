import { Box, Flex } from "@chakra-ui/layout";
import { Tag as ChakraTag } from "@chakra-ui/tag/dist/declarations/src/tag";
import type { FC, ReactElement } from "react";

import type { Company } from "../../models/company";
import type { Job } from "../../models/job";
import { findCompanyById } from "../../services/company.service";

import JobListRaw from "./JobListRaw";

interface Props {
  companies: Company[];
  jobs: Job[];
  observe?: (element?: HTMLElement | null | undefined) => void;
}

const JobTable: FC<Props> = ({ companies, jobs, observe }) => {
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
      <Flex h="full" flex={10} pl={2}>
        {renderBaseCard(<span>coucou</span>)}
      </Flex>
    </Flex>
  );
};

export default JobTable;
