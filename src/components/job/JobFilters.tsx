import { Input } from "@chakra-ui/input";
import { Box, Stack } from "@chakra-ui/layout";
import type { FC, ChangeEvent } from "react";

import type { JobFilter } from "../../models/job-filter";
import StyledTag from "../layout/StyledTag";

interface Props {
  filters: JobFilter;
  tags: string[];
  onChange: (value: JobFilter) => void;
}

const JobFilters: FC<Props> = ({ filters, tags, onChange }) => {
  const handleChangeRemote = () =>
    onChange({ ...filters, remote: !filters.remote });

  const handleChangeSearch = (event: ChangeEvent<HTMLInputElement>) =>
    onChange({ ...filters, search: event.target.value });

  const handleClickTag = (value: string, add: boolean) => () =>
    add
      ? onChange({
          ...filters,
          tags: Array.from(new Set([...filters.tags, value])),
        })
      : onChange({
          ...filters,
          tags: filters.tags.filter((tag) => tag !== value),
        });

  return (
    <Box padding={4} mt={4} mb={4}>
      <Stack
        direction="row"
        spacing={4}
        wrap="wrap"
        shouldWrapChildren
        justify="center"
        mb={2}
      >
        <StyledTag
          value="Remote"
          selected={filters.remote}
          onClick={handleChangeRemote}
        />
      </Stack>
      <Stack
        direction="row"
        spacing={4}
        wrap="wrap"
        shouldWrapChildren
        justify="center"
        marginBottom={4}
      >
        {tags.map((tag) => (
          <StyledTag
            key={tag}
            value={tag}
            selected={filters.tags.includes(tag)}
            onClick={handleClickTag(tag, !filters.tags.includes(tag))}
          />
        ))}
      </Stack>
      <Stack
        direction="row"
        spacing={4}
        wrap="wrap"
        shouldWrapChildren
        justify="center"
        marginBottom={4}
      >
        <Input
          title="Search"
          placeholder="Search"
          size="md"
          value={filters.search}
          onChange={handleChangeSearch}
          _placeholder={{ opacity: 0.4, color: "white" }}
          focusBorderColor="brand.900"
        />
      </Stack>
    </Box>
  );
};

export default JobFilters;
