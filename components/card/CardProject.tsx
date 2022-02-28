import { Flex, Text } from "@chakra-ui/layout";

export interface Project {
  name: string;
  shot_name: string;
  description: string;
  website: string;
  github: string;
  twitter: string;
  medium: string;
  discord: string;
  telegram: string;
}

interface CardProjectProps {
  project: Project;
}
function CardProject({ project }: CardProjectProps) {
  const { name } = project;
  return (
    <Flex
      flex={1}
      p={6}
      bg="gray.800"
      border="1px solid blue"
      w="full"
      direction="row"
      justify="space-between"
      align="center"
    >
      <Text>{name}</Text>
    </Flex>
  );
}

export default CardProject;
