import { Flex, Text } from "@chakra-ui/layout";
import type { FC } from "react";

interface Props {
  title: string;
  value: any;
}

const ProjectsInfosDetails: FC<Props> = ({ title, value }) => {
  // if (!project) return null;
  return (
    <Flex direction="column" mb="4">
      <Text mb="1">{title}</Text>
      {value}
    </Flex>
  );
};

export default ProjectsInfosDetails;
