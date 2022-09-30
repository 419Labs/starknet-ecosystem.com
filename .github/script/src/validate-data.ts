import { allProjects } from '../../../data/ecosystem';

const projectIds: string[] = [];
const projectNames: string[] = [];

allProjects.forEach((project) => {
  if (projectNames.includes(project.name)) {
    throw Error(`Conflict: ${project.name} already exists`);
  }
  if (projectIds.includes(project.id)) {
    throw Error(`Conflict: ${project.id} already exists`);
  }
  projectNames.push(project.name);
  projectIds.push(project.id);
});
