import type { Project } from "../../data/ecosystem";

export enum ProjectSorting {
  A_Z = "A - Z",
  TWITTER = "Followers",
}
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

export const shortenText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  return `${text.substr(0, text.lastIndexOf(" ", maxLength))}...`;
};

export const sortBy = (
  projects: Project[],
  sorting?: ProjectSorting
): Project[] => {
  return projects.sort((project1, project2) => {
    if (sorting === ProjectSorting.TWITTER) {
      return (
        (project2.socialMetrics?.twitterFollower || 0) -
        (project1.socialMetrics?.twitterFollower || 0)
      );
    }
    if (sorting === ProjectSorting.A_Z) {
      return project1.name
        .toLowerCase()
        .localeCompare(project2.name.toLowerCase());
    }
    return 0;
  });
};
