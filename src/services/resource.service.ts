import type { ResourceItf } from "../../data/academy";

export const filterResources = (
  resources: ResourceItf[],
  keyword: string
): ResourceItf[] =>
  resources.filter(
    (resource: ResourceItf) =>
      keyword === "" ||
      resource.name.toLowerCase().includes(keyword.toLowerCase()) ||
      resource.description.toLowerCase().includes(keyword.toLowerCase())
  );
