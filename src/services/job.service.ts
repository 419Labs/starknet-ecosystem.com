import type { Company } from "../models/company";
import type { Job } from "../models/job";
import type { JobFilter } from "../models/job-filter";

import { findCompanyById } from "./company.service";

export const getAllTags = (jobs: { tags: string[] }[]): string[] =>
  Array.from(new Set(jobs.flatMap((job) => job.tags)));

const formatString = (value: string): string =>
  value.toLowerCase().replaceAll("/", "").replaceAll("-", "");

export const getJobKey = (job: Job, company: Company): string => {
  const companyName = formatString(company.name).replaceAll(" ", "_");
  const jobTitle = formatString(job.title).replaceAll(" ", "_");
  return `${companyName}-${jobTitle}-${company.id}`;
};

export const findJobFromJobKey = (
  key: string,
  jobs: Job[],
  companies: Company[]
): Job | undefined => {
  const keyParts = key.split("-");
  const companyName = keyParts[0].replaceAll("_", " ");
  const jobTitle = keyParts[1].replaceAll("_", " ");
  const companyId = keyParts[2];

  const matchingJobs = jobs
    .filter((job) => formatString(job.title) === jobTitle)
    .filter((job) => {
      const company = findCompanyById(companies, job.companyId);
      return (
        company &&
        company.id === Number(companyId) &&
        formatString(company.name) === companyName
      );
    });
  return matchingJobs.length > 0 ? matchingJobs[0] : undefined;
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
