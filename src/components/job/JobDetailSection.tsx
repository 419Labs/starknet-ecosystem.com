import { Box, Text } from "@chakra-ui/layout";
import type { FC } from "react";

interface Props {
  label: string;
  value: string | undefined;
}

const JobDetailSection: FC<Props> = ({ label, value }) => {
  if (!value) return null;
  return (
    <Box my={4}>
      <Text
        borderBottom="1px solid"
        borderColor="whiteAlpha.200"
        fontSize="xl"
        fontWeight="extrabold"
        mb={4}
      >
        {label}
      </Text>
      <Text
        fontSize="sm"
        fontWeight="normal"
        listStylePosition="inside"
        lineHeight="24px"
        whiteSpace="pre-line"
      >
        {value}
      </Text>
    </Box>
  );
};

export default JobDetailSection;
