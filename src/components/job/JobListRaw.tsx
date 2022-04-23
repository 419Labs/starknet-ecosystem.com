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
      h="88px"
      direction="row"
      cursor="pointer"
      borderBottom="1px solid"
      borderColor="whiteAlpha.200"
      transition="background .2s linear"
      _hover={{
        backgroundColor: "whiteAlpha.200",
      }}
    >
      <NextLink href={`/${locale}/jobs/?key=${getJobKey(job, company)}`}>
        <Flex direction="row" align="center">
          <Image
            height="56px"
            src={`/logos/${company.logo}`}
            alt={`${company.name} logo`}
            mr={1}
          />
          <Flex direction="column" justify="space-between">
            <Text
              fontSize="md"
              fontWeight="bold"
              whiteSpace="nowrap"
              overflow="hidden"
              textOverflow="ellipsis"
              width="200px"
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

        {/* <Tr
        _hover={{ backgroundColor: "gray.900" }}
        cursor="pointer"
        ref={observe && last ? observe : null}
      >
        <Td padding={2}>
          <Flex>
            <Image
              width={showAll ? "50px" : "35px"}
              maxHeight={showAll ? "50px" : "35px"}
              src={`/logos/${company.logo}`}
              alt={`${company.name} logo`}
              mr={1}
            />
            <div>
              <Text fontWeight="bold">{job.title}</Text>
              <Text fontSize="sm">{company.name}</Text>
              {job.compensation && (
                <Text fontSize="xs">
                  {job.compensation.currency || "$"}
                  {job.compensation.from}k - {job.compensation.currency || "$"}
                  {job.compensation.to}k{" "}
                </Text>
              )}
            </div>
          </Flex>
        </Td>
        <Td padding={2}>
          <Text fontSize="xs">{job.remote ? "Remote" : job.location}</Text>
        </Td>
        <Show above={breakpoint}>
          <Td padding={2}>
            {job.tags.map((tag) => (
              <StyledTag key={tag} value={tag} size="sm" />
            ))}
          </Td>
        </Show>
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
