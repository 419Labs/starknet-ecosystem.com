import type { Project } from "../../data/ecosystem";

export const projectIncludesKeyword = (
  project: Project,
  keyword: string
): boolean =>
  keyword === "" ||
  project.name.toLowerCase().includes(keyword.toLowerCase()) ||
  project.shortName.toLowerCase().includes(keyword.toLowerCase()) ||
  project.description.toLowerCase().includes(keyword.toLowerCase());

export const findProjectById = (
  projects: Project[],
  id: string
): Project | undefined => projects.find((project) => project.id === id);
