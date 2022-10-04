import { aJob, aListOfJob, aProject } from "../models/job.fixture";

import { filterJobs, getAllTags, getJobKey } from "./job.service";

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
      const project = aProject();

      // When
      const result = getJobKey(job, project);

      // Then
      expect(result).toStrictEqual(
        "alpha_road-senior__backend__developer-502b0dbc-5169-4db6-8796-36a968a798fd"
      );
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
