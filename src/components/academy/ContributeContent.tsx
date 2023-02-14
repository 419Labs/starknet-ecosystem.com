import { Box, VStack } from "@chakra-ui/layout";
import { useTheme } from "@emotion/react";
import { useEffect, useState } from "react";

import type { ResourceItf } from "../../../data/academy";
import { EcosystemApi } from "../../services/ecosystem-api.service";
import { shortenText } from "../../services/project.service";
import CardExplanation from "../card/CardExplanation";

import type { BasicContentProps } from "./BasicContent";
import BasicContent from "./BasicContent";

function ContributeContent({ keyword = "", observe }: BasicContentProps) {
  const [resources, setResources] = useState<ResourceItf[]>([]);
  const [isLoading, setLoading] = useState<boolean>();
  const theme = useTheme();
  useEffect(() => {
    setLoading(true);
    EcosystemApi.fetchContributions(keyword).then((contributions) => {
      setResources(
        contributions.map((contribution) => ({
          id: contribution.id,
          image: contribution.image,
          name: shortenText(contribution.title, 50),
          description: contribution.projectName,
          network: {},
          link: `https://app.onlydust.xyz/contributions/${contribution.id}`,
          sourceName: contribution.sourceName,
          difficulty: contribution.difficulty,
        }))
      );
      setLoading(false);
    });
  }, [keyword]);

  const getGradient = () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return `radial-gradient(ellipse at top, ${theme.colors.onlyDust[100]}, transparent), radial-gradient(ellipse at bottom, ${theme.colors.onlyDust[200]}, transparent), radial-gradient(ellipse at center, ${theme.colors.onlyDust[500]}, transparent), radial-gradient(ellipse at left, ${theme.colors.onlyDust[400]}, transparent)`;
  };

  return (
    <VStack w="full" align="flex-start">
      <Box w="full" mb={8}>
        <CardExplanation
          bg={getGradient()}
          title="Open contributions"
          content="Thanks to our partnership with OnlyDust you can find below all open contributions provided by the Starknet ecosystem. <br/>Get involved, contribute & get paid for that."
          link="https://www.onlydust.xyz/"
        />
      </Box>
      <BasicContent
        isLoading={isLoading}
        resources={resources}
        observe={observe}
        keyword={keyword}
      />
    </VStack>
  );
}

export default ContributeContent;
