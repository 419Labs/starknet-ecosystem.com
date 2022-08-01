import { Box, Flex, HStack, Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";
import NextLink from "next/link";
import type { FC } from "react";

import { useTranslate } from "../../context/TranslateProvider";
import type { Company } from "../../models/company";
import type { Job } from "../../models/job";
import { getJobKey } from "../../services/job.service";

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
  if (!company || !job) return null;

  return (
    <NextLink href={`/${locale}/jobs/?key=${getJobKey(job, company)}`}>
      <Flex
        w="full"
        minH="88px"
        direction="row"
        cursor="pointer"
        borderBottom="1px solid"
        borderRight="2px solid"
        borderBottomColor="whiteAlpha.200"
        borderRightColor={selected ? "brand.900" : "transparent"}
        transition="background .2s linear"
        _hover={{
          backgroundColor: "whiteAlpha.200",
        }}
        _active={{
          backgroundColor: "whiteAlpha.300",
        }}
        ref={observe && last ? observe : null}
      >
        <Flex direction="row" align="center" overflow="hidden" pr={2}>
          <Box maxHeight="56px" maxWidth="88px" px={5} mr={1}>
            <Image
              w="full"
              src={`/logos/${company.logo}`}
              alt={`${company.name} logo`}
            />
          </Box>
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
      </Flex>
    </NextLink>
  );
};

export default JobListRaw;
