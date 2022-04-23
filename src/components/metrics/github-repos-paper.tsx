import { Box, HStack, Link, SimpleGrid, Text } from "@chakra-ui/layout";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEye, faStar } from "@fortawesome/free-regular-svg-icons";
import { faCodeFork } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { FC } from "react";

import { useTranslate } from "../../context/TranslateProvider";
import type { GithubRepo } from "../../models/github-repo";

interface Props {
  githubRepos: GithubRepo[];
}

const GithubReposPaper: FC<Props> = ({ githubRepos }) => {
  const { t } = useTranslate();
  return (
    <Box borderRadius="md" backgroundColor="gray.800" p={5}>
      <HStack as="h3" mb={4} fontSize="lg" fontWeight="bold">
        <FontAwesomeIcon icon={faGithub} />
        <Text ml={1}>{t.common.github_repo || "Tools & Libraries"}</Text>
      </HStack>
      <SimpleGrid columns={2} spacing={4}>
        {githubRepos.map((repo) => (
          <Link
            key={repo.id}
            _hover={{ textDecoration: "none", opacity: 0.5}}
            href={repo.html_url}
            isExternal
          >
            <Text fontSize="md">{repo.name}</Text>
            <HStack spacing={3} mt={1} color="whiteAlpha.600">
              <HStack fontSize="sm" spacing={1}>
                <FontAwesomeIcon icon={faEye} />
                <Text>{repo.subscribers_count}</Text>
              </HStack>
              <HStack fontSize="sm" spacing={1}>
                <FontAwesomeIcon icon={faCodeFork} />
                <Text>{repo.forks_count}</Text>
              </HStack>
              <HStack fontSize="sm" spacing={1}>
                <FontAwesomeIcon icon={faStar} />
                <Text>{repo.stargazers_count}</Text>
              </HStack>
            </HStack>
          </Link>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default GithubReposPaper;
