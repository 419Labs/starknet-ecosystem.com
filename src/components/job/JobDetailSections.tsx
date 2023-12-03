import type { FC } from "react";

import { useTranslate } from "../../context/TranslateProvider";
import type { Job } from "../../models/job";

import JobDetailSection from "./JobDetailSection";

interface Props {
  currentJob: Job;
}

const JobDetailSections: FC<Props> = ({ currentJob }) => {
  const { t } = useTranslate();
  return (
    <>
      <JobDetailSection
        label={t.jobs.aboutUs || "About us"}
        value={currentJob.aboutUs}
      />
      <JobDetailSection
        label={t.jobs.description || "Description"}
        value={currentJob.description}
      />
      <JobDetailSection
        label={t.jobs.responsibilities || "Responsibilities"}
        value={currentJob.responsibilities}
      />
      <JobDetailSection
        label={t.jobs.aboutYou || "About you"}
        value={currentJob.aboutYou}
      />
      <JobDetailSection
        label={t.jobs.requirements || "Requirements"}
        value={currentJob.requirements}
      />
      <JobDetailSection
        label={t.jobs.offer || "We offer"}
        value={currentJob.offer}
      />
    </>
  );
};

export default JobDetailSections;
