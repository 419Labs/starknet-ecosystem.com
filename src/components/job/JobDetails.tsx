import { Box, Flex, Stack, Text } from "@chakra-ui/layout";
import { Button, Image, Link } from "@chakra-ui/react";
import dayjs from "dayjs";
import type { FC } from "react";

import { useTranslate } from "../../context/TranslateProvider";
import type { Company } from "../../models/company";
import type { Job } from "../../models/job";
import InnerHtml from "../layout/InnerHtml";
import NetworkLogos from "../layout/NetworkLogos";
import StyledTag from "../layout/StyledTag";

import JobCreatedFrom from "./JobCreatedFrom";

interface Props {
  company: Company;
  job: Job;
}

const JobDetails: FC<Props> = ({ company, job }) => {
  const { t } = useTranslate();
  return (
    <Box
      borderRadius={10}
      backgroundColor="gray.800"
      w="full"
      pt={[2, 5]}
      pb={[2, 5]}
      pl={[2, 10]}
      pr={[2, 10]}
    >
      <Box textAlign="center" mb={5}>
        <Image
          width="100px"
          maxHeight="100px"
          src={`/logos/${company.logo}`}
          alt={`${company.name} logo`}
          m="auto"
        />
        <Text
          as="h2"
          fontSize={["25px", "35px"]}
          lineHeight={["25px", "35px"]}
          mt={3}
        >
          {company.name} {t.jobs.is_hiring | " is hiring a"}
        </Text>
        <Text
          as="h1"
          fontSize={["35px", "45px"]}
          lineHeight={["35px", "45px"]}
          fontWeight="bold"
          mb={5}
        >
          {job.title}
        </Text>
        {job.compensation && (
          <Text mb={3}>
            Compensation: {job.compensation.currency || "$"}
            {job.compensation.from}k - {job.compensation.currency || "$"}
            {job.compensation.to}k
            {job.compensation.participation && "with participation"}
          </Text>
        )}
        <Text mb={3}>{job.remote ? "Remote" : job.location}</Text>
        <Link isExternal href={job.applyLink}>
          <Button>{t.jobs.apply}</Button>
        </Link>
      </Box>
      <Box mb={4}>
        <InnerHtml html={job.description} />
      </Box>
      <Flex justifyContent="space-between">
        <Box w="full">
          <JobCreatedFrom createdAt={dayjs(job.createdOn)} />
        </Box>
        <Stack
          direction="row"
          spacing={1}
          wrap="wrap"
          shouldWrapChildren
          justify="center"
          w="full"
        >
          {job.tags.map((tag) => (
            <StyledTag key={tag} value={tag} size="sm" />
          ))}
        </Stack>
        <Box w="full">
          <NetworkLogos network={company.network} justifyContent="flex-end" />
        </Box>
      </Flex>
    </Box>
  );
};

export default JobDetails;
