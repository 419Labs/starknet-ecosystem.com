import { Box, Flex, HStack, Link, SimpleGrid, Text } from "@chakra-ui/layout";
import { solid, brands } from "@fortawesome/fontawesome-svg-core/import.macro";
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
      <Flex justify="space-between" alignItems="center" mb={4}>
        <HStack as="h3" mb={4} fontSize="lg" fontWeight="bold">
          <FontAwesomeIcon icon={brands("github")} />
          <Text ml={1}>{t.common.github_repo || "Tools & Libraries"}</Text>
        </HStack>
        <HStack fontSize="sm" color="whiteAlpha.600" spacing={1}>
          <Link isExternal href="https://github.com/gakonst/awesome-starknet">
            <Text>{t.common.more || "more"}</Text>
          </Link>
        </HStack>
      </Flex>
      <SimpleGrid columns={2} spacing={4}>
        {githubRepos.map((repo) => (
          <Link
            key={repo.id}
            _hover={{ textDecoration: "none", opacity: 0.5 }}
            href={repo.html_url}
            isExternal
          >
            <Text fontSize="md">{repo.name}</Text>
            <HStack spacing={3} mt={1} color="whiteAlpha.600">
              <HStack fontSize="sm" spacing={1}>
                <FontAwesomeIcon icon={solid("eye")} />
                <Text>{repo.subscribers_count}</Text>
              </HStack>
              <HStack fontSize="sm" spacing={1}>
                <FontAwesomeIcon icon={solid("code-fork")} />
                <Text>{repo.forks_count}</Text>
              </HStack>
              <HStack fontSize="sm" spacing={1}>
                <FontAwesomeIcon icon={solid("star")} />
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
