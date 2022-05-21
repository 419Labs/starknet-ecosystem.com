import { aListOfCompany } from "../models/job.fixture";

import { findCompanyById } from "./company.service";

describe("Company service", () => {
  describe("findCompanyById", () => {
    it("should return matching Company", () => {
      // Given
      const companies = aListOfCompany();

      // When
      const result = findCompanyById(companies, 1);

      // Then
      expect(result).toStrictEqual(companies[0]);
    });

    it("should return undefined when no matching company", () => {
      // Given
      const companies = aListOfCompany();

      // When
      const result = findCompanyById(companies, 3);

      // Then
      expect(result).toBe(undefined);
    });
  });
});
