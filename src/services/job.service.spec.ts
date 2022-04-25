import {
  aCompany,
  aJob,
  aListOfCompany,
  aListOfJob,
} from "../models/job.fixture";

import {
  filterJobs,
  findJobFromJobKey,
  getAllTags,
  getJobKey,
} from "./job.service";

describe("Job service", () => {
  describe("getAllTags", () => {
    it("should return a list of unique tag values from a list of job", () => {
      // Given
      const jobs: { tags: string[] }[] = [
        { tags: ["Remote", "Dev"] },
        { tags: ["Remote", "DeFi"] },
      ];
      const expected: string[] = ["Remote", "Dev", "DeFi"];

      // When
      const result = getAllTags(jobs);

      // Then
      expect(result).toStrictEqual(expected);
    });
  });

  describe("getJobKey", () => {
    it("should format job key", () => {
      // Given
      const job = aJob();
      const company = aCompany();

      // When
      const result = getJobKey(job, company);

      // Then
      expect(result).toStrictEqual("alpha_road-senior__backend__developer-1");
    });
  });

  describe("findJobFromJobKey", () => {
    it("should find job from a job key", () => {
      // Given
      const key = "alpha_road-senior__backend__developer-1";

      // When
      const result = findJobFromJobKey(key, aListOfJob(), aListOfCompany());

      // Then
      expect(result).toStrictEqual(aListOfJob()[0]);
    });

    it("should return undefined when nothing matches the job key", () => {
      // Given
      const key = "alpha_road-senior-wrong__backend__developer-1";

      // When
      const result = findJobFromJobKey(key, aListOfJob(), aListOfCompany());

      // Then
      expect(result).toBe(undefined);
    });
  });

  describe("filterJobs", () => {
    [
      { given: { remote: false, search: "", tags: [] }, expectedJobCounts: 3 },
      { given: { remote: true, search: "", tags: [] }, expectedJobCounts: 2 },
      {
        given: { remote: false, search: "Backend developer", tags: [] },
        expectedJobCounts: 2,
      },
      {
        given: { remote: false, search: "", tags: ["test"] },
        expectedJobCounts: 1,
      },
      {
        given: {
          remote: true,
          search: "Senior backend developer",
          tags: ["test"],
        },
        expectedJobCounts: 0,
      },
    ].forEach(({ given, expectedJobCounts }) =>
      it(`should return ${expectedJobCounts} jobs when jobFilter is ${JSON.stringify(
        given
      )}`, () => {
        // When
        const result = filterJobs(aListOfJob(), given);

        // Then
        expect(result.length).toBe(expectedJobCounts);
      })
    );
  });
});
