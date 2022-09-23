import type { FC } from "react";

import { useTranslate } from "../../context/TranslateProvider";
import type { Job } from "../../models/job";

import ProjectsInfos from "../project/ProjectsInfos";

interface Props {
  currentJob: Job;
}

const JobDetailSections: FC<Props> = ({ currentJob }) => {
  const { t } = useTranslate();
  return (
    <>
      <ProjectsInfos
        label={t.jobs.aboutUs || "About us"}
        value={currentJob.aboutUs}
      />
      <ProjectsInfos
        label={t.jobs.description || "Description"}
        value={currentJob.description}
      />
      <ProjectsInfos
        label={t.jobs.responsibilities || "Responsibilities"}
        value={currentJob.responsibilities}
      />
      <ProjectsInfos
        label={t.jobs.requirements || "Requirements"}
        value={currentJob.requirements}
      />
      <ProjectsInfos
        label={t.jobs.offer || "We offer"}
        value={currentJob.offer}
      />
    </>
  );
};

export default JobDetailSections;
