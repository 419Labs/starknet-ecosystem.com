import { Box, Flex, HStack, Link, SimpleGrid, Text } from "@chakra-ui/layout";
import { solid, brands } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { FC } from "react";
import { useEffect, useState } from "react";

import { useTranslate } from "../../context/TranslateProvider";
import type { GithubRepo } from "../../models/github-repo";
import { MetricsApi } from "../../services/metrics-api.service";
import Card from "../card/Card";

import ErrorData from "./error-data";

const githubReposToFollow = [
  { organization: "starkware-libs", name: "cairo-lang" },
  { organization: "starkware-libs", name: "starkgate-frontend" },
  { organization: "starknet-community-libs", name: "get-starknet" },
  { organization: "software-mansion", name: "protostar" },
  { organization: "0xs34n", name: "starknet.js" },
  { organization: "software-mansion", name: "starknet.py" },
  { organization: "OpenZeppelin", name: "nile" },
  { organization: "Shard-Labs", name: "starknet-devnet" },
];

const GithubReposPaper: FC = () => {
  const { t } = useTranslate();
  const [githubRepos, setGithubRepos] = useState<GithubRepo[]>([]);

  useEffect(() => {
    Promise.all(
      githubReposToFollow.map((repo) =>
        MetricsApi.fetchGithubRepo(repo.organization, repo.name)
      )
    ).then((repos) => setGithubRepos(repos));
  }, []);

  return (
    <Card>
      <Flex direction="column">
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
                href={repo.url}
                isExternal
              >
                <Text fontSize="md">{repo.name}</Text>
                <HStack spacing={3} mt={1} color="whiteAlpha.600">
                  <HStack fontSize="sm" spacing={1}>
                    <FontAwesomeIcon icon={solid("eye")} />
                    <Text>{repo.subscribersCount}</Text>
                  </HStack>
                  <HStack fontSize="sm" spacing={1}>
                    <FontAwesomeIcon icon={solid("code-fork")} />
                    <Text>{repo.forksCount}</Text>
                  </HStack>
                  <HStack fontSize="sm" spacing={1}>
                    <FontAwesomeIcon icon={solid("star")} />
                    <Text>{repo.stargazersCount}</Text>
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
    </Card>
  );
};

export default GithubReposPaper;
