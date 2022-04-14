import { Text } from "@chakra-ui/layout";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import allCompanies from "../../../data/company";
import allJobs from "../../../data/job";
import JobDetails from "../../components/job/JobDetails";
import type { Company } from "../../models/company";
import type { Job } from "../../models/job";
import { findCompanyById } from "../../services/company.service";
import { findJobFromJobKey } from "../../services/job.service";

const JobDetailPage: NextPage = () => {
  const router = useRouter();
  const { key } = router.query;
  const [job, setJob] = useState<Job>();
  const [company, setCompany] = useState<Company>();

  useEffect(() => {
    if (key && typeof key === "string") {
      setJob(findJobFromJobKey(key, allJobs, allCompanies));
    }
  }, [key]);

  useEffect(() => {
    if (job) setCompany(findCompanyById(allCompanies, job.companyId));
  }, [job]);

  if (!job || !company) return <Text>Not found</Text>;

  return <JobDetails company={company} job={job} />;
};

export default JobDetailPage;
