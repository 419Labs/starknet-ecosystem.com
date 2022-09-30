import {
  Box,
  Flex,
  HStack,
  Link,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/layout";
import { Button, Image } from "@chakra-ui/react";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import dayjs from "dayjs";
import NextLink from "next/link";
import type { FC } from "react";

import { useTranslate } from "../../context/TranslateProvider";
import type { Company } from "../../models/company";
import type { Job } from "../../models/job";
import { getJobKey } from "../../services/job.service";
import NetworkLogos from "../layout/NetworkLogos";
import StyledTag from "../layout/StyledTag";

import JobCreatedFrom from "./JobCreatedFrom";
import JobDetailSections from "./JobDetailSections";

interface Props {
  company: Company | undefined;
  job: Job;
  last: boolean;
  observe?: (element?: HTMLElement | null | undefined) => void;
  selected?: boolean;
}

const JobListRaw: FC<Props> = ({
  company,
  job,
  last,
  observe,
  selected = false,
}) => {
  const { locale } = useTranslate();
  const { t } = useTranslate();
  if (!company || !job) return null;

  const renderJobDetails = () => {
    return (
      <Flex direction="column" align="flex-start" h="full" pl="88px">
        {job && company ? (
          <Flex direction="column">
            {/* Networks */}
            <Box mt={4}>
              <NetworkLogos network={company.network} />
            </Box>
            <JobDetailSections currentJob={job} />
            <HStack
              spacing={1}
              my={4}
              pb={4}
              fontSize="sm"
              fontWeight="light"
              color="whiteAlpha.600"
            >
              <Text>{t.jobs.published || "Published"}</Text>
              <b>
                <JobCreatedFrom createdAt={dayjs(job.createdOn)} />
              </b>
              <Text>{t.jobs.ago || "Ago"}</Text>
            </HStack>
          </Flex>
        ) : (
          // No jobs to show
          <span>{t.jobs.no_selected || "No job selected"}</span>
        )}
      </Flex>
    );
  };

  return (
    <NextLink href={`/${locale}/jobs/?key=${getJobKey(job, company)}`}>
      <Flex
        direction="column"
        w="full"
        minH="88px"
        cursor="pointer"
        transition="background .2s linear"
        bg="primary.700"
        borderRadius="md"
        py={4}
        pr={4}
        _hover={{
          backgroundColor: "primary.700",
          ".apply-btn": {
            opacity: 1,
          },
        }}
        ref={observe && last ? observe : null}
      >
        <Flex
          w="full"
          h="full"
          direction="row"
          justify="space-between"
          align="center"
        >
          <Flex justify="flex-start" align="center" h="full" w="88px" px={5}>
            <Image
              w="full"
              src={`/logos/${company.logo}`}
              alt={`${company.name} logo`}
            />
          </Flex>
          <VStack
            flex={3}
            direction="column"
            justify="flex-start"
            align="flex-start"
            spacing={1}
          >
            <Text
              fontSize="lg"
              fontWeight="bold"
              whiteSpace="nowrap"
              overflow="hidden"
              textOverflow="ellipsis"
            >
              {job.title}
            </Text>
            <Text fontSize="sm">{company.name}</Text>
            <VStack
              fontSize="xs"
              align="flex-start"
              spacing={1}
              color="whiteAlpha.600"
            >
              {job.compensation && (
                <HStack>
                  <FontAwesomeIcon
                    fontSize="18px"
                    icon={solid("dollar-sign")}
                  />
                  <Text>
                    {job.compensation?.currency || "$"}
                    {job.compensation?.from}k -{" "}
                    {job.compensation?.currency || "$"}
                    {job.compensation?.to}k
                  </Text>
                </HStack>
              )}
              <Text>{job.location}</Text>
            </VStack>
          </VStack>
          {/* Tags */}
          <Stack
            flex={2}
            my={2}
            direction="row"
            spacing={0}
            wrap="wrap"
            shouldWrapChildren
            justify="flex-start"
          >
            {job.remote && (
              <Box mr={1} mb={2}>
                <StyledTag key="remote" selected value="Remote" size="md" />
              </Box>
            )}
            {job.tags.map((tag) => (
              <Box mr={1} mb={2} key={tag}>
                <StyledTag key={tag} value={tag} size="md" />
              </Box>
            ))}
          </Stack>
          <Box
            flex={1}
            textAlign="end"
            opacity={0}
            className="apply-btn"
            transition="all .2s linear"
          >
            <Link
              isExternal
              href={job.applyLink}
              _hover={{ textDecoration: "none" }}
            >
              <Button
                variant="outline"
                bg="blue"
                onClick={(event) => event.stopPropagation()}
              >
                {t.jobs.apply || "Apply"}
              </Button>
            </Link>
          </Box>
        </Flex>
        {selected && renderJobDetails()}
      </Flex>
    </NextLink>
  );
};

export default JobListRaw;
