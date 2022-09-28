import { Box, Text, VStack } from "@chakra-ui/layout";
import type { FC } from "react";

interface Props {
  name: string;
  position: string;
}

const TeamInfos: FC<Props> = ({ name, position }) => {
  return (
    <VStack fontSize="sm" spacing={0} align="flex-start">
      <Box borderRadius="full" bg="gray.600" h="56px" w="56px" />
      <Text pt={4}>{name}</Text>
      <Text color="whiteAlpha.600">{position}</Text>
    </VStack>
  );
};

export default TeamInfos;
