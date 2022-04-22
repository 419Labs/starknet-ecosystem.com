import { Box, Link, SimpleGrid, Text } from "@chakra-ui/layout";
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
    <Box borderRadius={10} backgroundColor="gray.800" p={4}>
      <Text as="h3" mb={4} fontSize={["20px"]} fontWeight="bold">
        <FontAwesomeIcon icon={faGithub} />{" "}
        {t.common.github_repo || "Tools & Libraries"}
      </Text>
      <SimpleGrid columns={2} spacing={4}>
        {githubRepos.map((repo) => (
          <Link
            key={repo.id}
            _hover={{ textDecoration: "none" }}
            href={repo.html_url}
            isExternal
          >
            <Text fontWeight="bold">{repo.name}</Text>
            <Box display="flex" justifyContent="left">
              <Text mr={4}>
                <FontAwesomeIcon icon={faEye} /> {repo.subscribers_count}
              </Text>
              <Text mr={4}>
                <FontAwesomeIcon icon={faCodeFork} /> {repo.forks_count}
              </Text>
              <Text>
                <FontAwesomeIcon icon={faStar} /> {repo.stargazers_count}
              </Text>
            </Box>
          </Link>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default GithubReposPaper;
