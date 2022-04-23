import { Flex, HStack, Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";
import dayjs from "dayjs";
import NextLink from "next/link";
import type { FC } from "react";

import { useTranslate } from "../../context/TranslateProvider";
import type { Company } from "../../models/company";
import type { Job } from "../../models/job";
import { getJobKey } from "../../services/job.service";
import StyledTag from "../layout/StyledTag";

import JobCreatedFrom from "./JobCreatedFrom";

interface Props {
  company: Company | undefined;
  job: Job;
  last: boolean;
  observe?: (element?: HTMLElement | null | undefined) => void;
}

const JobListRaw: FC<Props> = ({ company, job, last, observe }) => {
  const { locale } = useTranslate();
  if (!company || !job) return null;

  return (
    <Flex
      w="full"
      minH="88px"
      direction="row"
      cursor="pointer"
      borderBottom="1px solid"
      borderColor="whiteAlpha.200"
      transition="background .2s linear"
      _hover={{
        backgroundColor: "whiteAlpha.200",
      }}
      ref={observe && last ? observe : null}
    >
      <NextLink href={`/${locale}/jobs/?key=${getJobKey(job, company)}`}>
        <Flex direction="row" align="center" overflow="hidden" pr={2}>
          <Image
            height="56px"
            src={`/logos/${company.logo}`}
            alt={`${company.name} logo`}
            mr={1}
          />
          <Flex direction="column" justify="space-between" overflow="hidden">
            <Text
              fontSize="md"
              fontWeight="bold"
              whiteSpace="nowrap"
              overflow="hidden"
              textOverflow="ellipsis"
            >
              {job.title}
            </Text>
            <Text fontSize="xs">{company.name}</Text>
            <HStack mt={2} color="whiteAlpha.600">
              {job.tags.map((tag) => (
                <Text key={`job-${job.companyId}-tag-${tag}`} fontSize="xs">
                  #{tag}
                </Text>
              ))}
            </HStack>
          </Flex>
        </Flex>

        {/*
        <Td padding={2}>
          <Text fontSize="xs">{job.remote ? "Remote" : job.location}</Text>
        </Td>
        <Td padding={2}>
          <JobCreatedFrom createdAt={dayjs(job.createdOn)} />
        </Td>
        <Show above={breakpoint}>
          <Td padding={2}>
            <Link isExternal href={job.applyLink}>
              <Button onClick={(event) => event.stopPropagation()}>
                Apply
              </Button>
            </Link>
          </Td>
        </Show>
      </Tr> */}
      </NextLink>
    </Flex>
  );
};

export default JobListRaw;
