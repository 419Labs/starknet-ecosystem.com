import { allProjects, type Project } from "../../data/ecosystem";

const localLogos = new Map(allProjects.map((project) => [project.id, project.image]));

export const getProjectLocalLogoSrc = (project: Pick<Project, "id" | "image">): string =>
  `/logos/${localLogos.get(project.id) || project.image}`;

const FORCE_LOCAL_LOGO_PROJECT_IDS = new Set(["a7e1c712-84a2-4457-8610-1cab7af37b16"]);

export const getProjectLogoSrc = (project: Pick<Project, "id" | "image" | "network">): string => {
  if (FORCE_LOCAL_LOGO_PROJECT_IDS.has(project.id)) {
    return getProjectLocalLogoSrc(project);
  }
  return project.network?.twitterImage || getProjectLocalLogoSrc(project);
};
