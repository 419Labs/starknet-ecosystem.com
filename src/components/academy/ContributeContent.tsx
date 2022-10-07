import { VStack } from "@chakra-ui/layout";
import { useEffect, useState } from "react";

import type { ResourceItf } from "../../../data/academy";
import { EcosystemApi } from "../../services/ecosystem-api.service";
import { shortenText } from "../../services/project.service";

import type { BasicContentProps } from "./BasicContent";
import BasicContent from "./BasicContent";

function ContributeContent({ keyword = "", observe }: BasicContentProps) {
  const [resources, setResources] = useState<ResourceItf[]>([]);
  const [isLoading, setLoading] = useState<boolean>();
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

  return (
    <VStack w="full" align="flex-start">
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
