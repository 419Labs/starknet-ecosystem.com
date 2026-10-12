import type { Project } from "../../data/ecosystem";
import { applyProjectCuration, removedProjectIds } from "../../data/project-curation";

const STARKNET_DB_BASE_URL = "https://api.starknet-db.com";

const fetchEcosystemProjects = (size: number): Promise<Project[]> =>
  fetch(`${STARKNET_DB_BASE_URL}/projects?size=${size}`)
    .then((response: Response) => {
      if (!response.ok) {
        throw new Error(`${response.statusText} while fetching projects`);
      }
      return response.json();
    })
    .then((response) => response.content)
    .then((projects) => {
      return projects
        .map(applyProjectCuration)
        .filter((project: Project | null): project is Project => Boolean(project && !project.isHidden));
    });

const fetchProjectById = (id: string): Promise<Project | null> => {
  if (removedProjectIds.has(id)) return Promise.resolve(null);
  return fetch(`${STARKNET_DB_BASE_URL}/projects/${id}`).then((response: Response) => {
    if (response.status === 404) {
      return null;
    }
    if (!response.ok) {
      throw new Error(`${response.statusText} while fetching project`);
    }
    return response.json();
  }).then((project: Project | null) => project ? applyProjectCuration(project) : null);
};

export const EcosystemApi = {
  fetchEcosystemProjects,
  fetchProjectById,
};
