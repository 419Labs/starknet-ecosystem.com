import {
  aCumulativeNpmDownloadsChart,
  aNpmDownloads,
  aNpmDownloadsChart,
} from "../models/metrics.fixture";

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
    it("should format NpmDownloads to NpmDownloadsChart when cumulative is true", () => {
      // Given
      const npmDownloads = aNpmDownloads();
      const expected = aCumulativeNpmDownloadsChart();

      // When
      const result = toNpmDownloadsChart(npmDownloads, true);

      // Then
      expect(result).toStrictEqual(expected);
    });
  });
});
