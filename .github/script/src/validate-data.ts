import { allProjects } from '../../../data/ecosystem';
import { parse } from 'uuid';

const projectIds: string[] = [];
const projectNames: string[] = [];

allProjects.forEach((project) => {
  // Check if id is a UUID
  try {
    parse(project.id);
  } catch (e) {
    console.error(`${project.id} is invalid uuid`);
    throw e;
  }

  if (projectNames.includes(project.name)) {
    throw Error(`Conflict: ${project.name} already exists`);
  }
  if (projectIds.includes(project.id)) {
    throw Error(`Conflict: ${project.id} already exists`);
  }
  projectNames.push(project.name);
  projectIds.push(project.id);
});
