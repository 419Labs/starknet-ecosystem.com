import type { Project } from "../../data/ecosystem";
import type { Job } from "../models/job";
import type { JobFilter } from "../models/job-filter";

export const getAllTags = (jobs: { tags: string[] }[]): string[] =>
  Array.from(new Set(jobs.flatMap((job) => job.tags)));

const formatString = (value: string): string =>
  value.toLowerCase().replaceAll("/", "").replaceAll("-", "");

export const getJobKey = (job: Job, project: Project): string => {
  const companyName = formatString(project.name).replaceAll(" ", "_");
  const jobTitle = formatString(job.title).replaceAll(" ", "_");
  return encodeURI(`${companyName}-${jobTitle}-${project.id}`);
};

export const filterJobs = (jobs: Job[], filters: JobFilter): Job[] =>
  jobs.filter(
    (job) =>
      (!filters.remote || filters.remote === job.remote) &&
      filters.tags.filter((tag) => job.tags.includes(tag)).length ===
        filters.tags.length &&
      (!filters.search ||
        job.title.toLowerCase().includes(filters.search.toLowerCase()) ||
        job.location.toLowerCase().includes(filters.search.toLowerCase()) ||
        job.tags.includes(filters.search.toLowerCase()))
  );
