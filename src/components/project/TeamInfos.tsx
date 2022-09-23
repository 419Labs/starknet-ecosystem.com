import {
  Box,
  Flex,
  GridItem,
  HStack,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/layout";
import type { FC } from "react";

import TeamMember from "./TeamMember";

interface Props {
  // team: Team[];
}

const TeamInfos: FC<Props> = () => {
  return (
    <Flex direction="column">
      <Text fontSize="3xl" mb={4}>
        Team
      </Text>
      <SimpleGrid columns={[2, 2, 4]} gap={6} w="full">
        <GridItem w="full">
          <TeamMember name="Mentor Reka" position="Co-founder & CEO" />
        </GridItem>
        <GridItem w="full">
          <TeamMember name="Lenny Aebischer" position="Co-founder & CTO" />
        </GridItem>
        <GridItem w="full">
          <TeamMember name="Florian Bellotti" position="Lead Engineer" />
        </GridItem>
        <GridItem w="full">
          <TeamMember name="Connor Milner" position="Business Lead" />
        </GridItem>
      </SimpleGrid>
    </Flex>
  );
};

export default TeamInfos;
