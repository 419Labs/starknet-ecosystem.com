import { allProjects, type Project } from "./ecosystem";

// Keep retired projects excluded even while the upstream API still lists them.
export const removedProjectIds = new Set([
  "00afa40f-f1a7-4cb3-a979-13c501ae9b17", // Uncap: team announced a wind-down.
]);

// Approved profiles without verified Starknet L2 deployment. Keep their live
// flags false while allowing the standard directory and search to show them.
export const profileOnlyProjectIds = new Set([
  "812c32ca-7fe1-4223-89fd-e623bc2fa52c", // Privily
  "f5cda1eb-1fc1-4aff-8215-f8bafb30fb4a", // FOMO
  "0a9f200e-595a-4302-8919-c99005fc357b", // Zylith
]);

const readyX = allProjects.find(
  (project) => project.id === "8df27359-f05d-439b-8592-ca1b61cf049c",
)!;

export const applyProjectCuration = (project: Project): Project | null => {
  if (removedProjectIds.has(project.id)) return null;
  if (project.id !== readyX.id) return project;

  return {
    ...project,
    name: readyX.name,
    shortName: readyX.shortName,
    description: readyX.description,
    tags: readyX.tags,
    image: readyX.image,
    network: { ...project.network, ...readyX.network },
  };
};
