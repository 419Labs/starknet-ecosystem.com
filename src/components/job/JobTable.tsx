import { Table, TableContainer, Tbody } from "@chakra-ui/react";
import type { FC } from "react";

import type { Company } from "../../models/company";
import type { Job } from "../../models/job";
import { findCompanyById } from "../../services/company.service";

import JobTableRaw from "./JobTableRaw";

interface Props {
  companies: Company[];
  jobs: Job[];
  observe?: (element?: HTMLElement | null | undefined) => void;
}

const JobTable: FC<Props> = ({ companies, jobs, observe }) => (
  <TableContainer whiteSpace="break-spaces">
    <Table variant="unstyled" borderRadius={10} backgroundColor="gray.800">
      <Tbody>
        {jobs.map((job, key) => (
          <JobTableRaw
            key={`${job.title}-${job.companyId}`}
            company={findCompanyById(companies, job.companyId)}
            job={job}
            last={key === jobs.length - 1}
            observe={observe}
          />
        ))}
      </Tbody>
    </Table>
  </TableContainer>
);

export default JobTable;
