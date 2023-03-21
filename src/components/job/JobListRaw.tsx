import {
  Box,
  Flex,
  HStack,
  Link,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/layout";
import { Show, Button, Collapse, Image } from "@chakra-ui/react";
import dayjs from "dayjs";
import { useRouter } from "next/router";
import type { FC } from "react";
import { useEffect, useState } from "react";

import type { Project } from "../../../data/ecosystem";
import { useTranslate } from "../../context/TranslateProvider";
import type { Job } from "../../models/job";
import NetworkLogos from "../layout/NetworkLogos";
import StyledTag from "../layout/StyledTag";

import JobCreatedFrom from "./JobCreatedFrom";
import JobDetailSections from "./JobDetailSections";

interface Props {
  id: string;
  project: Project | undefined;
  job: Job;
  last: boolean;
  observe?: (element?: HTMLElement | null | undefined) => void;
}

const JobListRaw: FC<Props> = ({ id, project, job, last, observe }) => {
  const { locale } = useTranslate();
  const { t } = useTranslate();
  const [opened, setOpened] = useState(false);
  const { query } = useRouter();
  useEffect(() => {
    const { key } = query;
    if (key && typeof key === "string") {
      setOpened(id === encodeURI(key));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);
  if (!project || !job) return null;

  const renderJobDetails = () => {
    return job && project ? (
      <Flex direction="column">
        {/* Networks */}
        <Box mt={4}>
          <NetworkLogos network={project.network} />
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
    );
  };

  const renderApplyBtn = (label: string) => {
    return (
      <Link
        w="full"
        isExternal
        href={job.applyLink}
        _hover={{ textDecoration: "none" }}
      >
        <Button
          w="full"
          variant="outline"
          bg="blue"
          onClick={(event) => event.stopPropagation()}
        >
          {label || "Apply"}
        </Button>
      </Link>
    );
  };

  return (
    /* <NextLink
      id={id}
      href={`/${locale}/jobs/?key=${getJobKey(job, company)}#${id}`}
    > */
    <Flex
      onClick={() => {
        setOpened(!opened);
        window.history.pushState({}, "", `/${locale}/jobs/?key=${id}#${id}`);
      }}
      id={id}
      direction="column"
      w="full"
      minH="88px"
      cursor="pointer"
      transition="background .2s linear"
      bg="primary.700"
      borderRadius="md"
      py={4}
      px={4}
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
        <Flex justify="flex-start" pl={0} pr={5} h="full" w="88px">
          <Image
            w="full"
            src={`/logos/${project.image}`}
            alt={`${project.name} logo`}
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
            whiteSpace="normal"
            overflow="hidden"
            textOverflow="ellipsis"
          >
            {job.title}
          </Text>
          <Text fontSize="sm">{project.name}</Text>
          <VStack
            fontSize="xs"
            align="flex-start"
            spacing={1}
            color="whiteAlpha.600"
          >
            {job.compensation && (
              <Text>
                {job.compensation?.currency || "$"}
                {job.compensation?.from}k - {job.compensation?.currency || "$"}
                {job.compensation?.to}k
              </Text>
            )}
            <Text>{job.location}</Text>
          </VStack>
        </VStack>
        {/* Tags */}
        <Show above="xl">
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
        </Show>
        <Show above="md">
          <Box
            flex={1}
            textAlign="end"
            opacity={0}
            className="apply-btn"
            transition="all .2s linear"
          >
            {renderApplyBtn(t.jobs.apply)}
          </Box>
        </Show>
      </Flex>
      <Collapse in={opened}>
        <Flex
          direction="column"
          align="flex-start"
          h="full"
          px={{ base: 0, xl: "88px" }}
        >
          {renderJobDetails()}
          <Flex
            border="1px solid"
            borderColor="whiteAlpha.300"
            direction="column"
            w="full"
            p={4}
            borderRadius="xl"
          >
            {renderApplyBtn(t.jobs.apply_long)}
            <HStack align="flex-start" mt={4}>
              <Text>👉</Text>
              <Text fontSize="sm" color="whiteAlpha.600">
                Please reference you found the job on starknet-ecosystem.com,
                this helps us get more companies to post here, thanks!
              </Text>
            </HStack>
          </Flex>
        </Flex>
      </Collapse>
    </Flex>
  );
};

export default JobListRaw;
