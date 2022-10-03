import type { Project } from "../../data/ecosystem";

const STARKNET_DB_BASE_URL = "https://api.starknet-db.com";

const fetchEcosystemProjects = (size: number): Promise<Project[]> =>
  fetch(`${STARKNET_DB_BASE_URL}/projects?size=${size}`)
    .then((response: Response) => {
      if (!response.ok) {
        throw new Error(`${response.statusText} while fetching projects`);
      }
      return response.json();
    })
    .then((response) => response.content);

const fetchProjectById = (id: string): Promise<Project> =>
  fetch(`${STARKNET_DB_BASE_URL}/projects/${id}`).then((response: Response) => {
    if (!response.ok) {
      throw new Error(`${response.statusText} while fetching project`);
    }
    return response.json();
  });

export const EcosystemApi = {
  fetchEcosystemProjects,
  fetchProjectById,
};
