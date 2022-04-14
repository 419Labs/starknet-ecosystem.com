import type { Company } from "../models/company";

export const findCompanyById = (
  companies: Company[],
  id: number
): Company | undefined => companies.find((company) => company.id === id);
