import { aNpmDownloads, aNpmDownloadsChart } from "../models/metrics.fixture";

import { toNpmDownloadsChart } from "./metrics.service";

describe("Metrics service", () => {
  describe("toNpmDownloadsChart", () => {
    it("should format NpmDownloads to NpmDownloadsChart", () => {
      // Given
      const npmDownloads = aNpmDownloads();
      const expected = aNpmDownloadsChart();

      // When
      const result = toNpmDownloadsChart(npmDownloads);

      // Then
      expect(result).toStrictEqual(expected);
    });
  });
});
