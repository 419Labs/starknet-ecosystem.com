import type { Project } from "../../data/ecosystem";
import type { Contribution } from "../models/contribution";

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

const fetchContributions = (keyword: string): Promise<Contribution[]> =>
  fetch(`${STARKNET_DB_BASE_URL}/contributions?size=100&keyword=${keyword}`)
    .then((response: Response) => {
      if (!response.ok) {
        throw new Error(`${response.statusText} while fetching contributions`);
      }
      return response.json();
    })
    .then((response) => response.content);

export const EcosystemApi = {
  fetchEcosystemProjects,
  fetchProjectById,
  fetchContributions,
};
