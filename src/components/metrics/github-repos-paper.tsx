import { Box, Flex, HStack, Link, SimpleGrid, Text } from "@chakra-ui/layout";
import { solid, brands } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { FC } from "react";

import { useTranslate } from "../../context/TranslateProvider";
import type { GithubRepo } from "../../models/github-repo";

import ErrorData from "./error-data";

interface Props {
  githubRepos: GithubRepo[];
}

const GithubReposPaper: FC<Props> = ({ githubRepos }) => {
  const { t } = useTranslate();
  return (
    <Flex direction="column" borderRadius="md" backgroundColor="gray.800" p={5}>
      <Flex justify="space-between" alignItems="flex-start" mb={4}>
        <HStack as="h3" mb={4} fontSize="lg" fontWeight="bold">
          <FontAwesomeIcon icon={brands("github")} />
          <Text ml={1}>{t.metrics.github_repo || "Tools & Libraries"}</Text>
        </HStack>
        <Box fontSize="sm" color="whiteAlpha.600">
          <Link
            isExternal
            href="https://github.com/gakonst/awesome-starknet"
            _hover={{ textDecoration: "none", color: "whiteAlpha.500" }}
          >
            <HStack alignItems="center">
              <Text>{t.metrics.more || "view more"}</Text>
              <FontAwesomeIcon icon={solid("up-right-from-square")} />
            </HStack>
          </Link>
        </Box>
      </Flex>
      {githubRepos ? (
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
      ) : (
        <ErrorData>
          {t.common.data_error ||
            "Error while loading data, please try again later"}
        </ErrorData>
      )}
    </Flex>
  );
};

export default GithubReposPaper;
