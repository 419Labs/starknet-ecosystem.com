import type { Project } from "../../data/ecosystem";

import {
  findProjectById,
  getProjectRelevanceScore,
  projectIncludesKeyword,
  shortenText,
  sortBy,
  ProjectSorting,
} from "./project.service";

const makeProject = (overrides: Partial<Project> = {}): Project => ({
  id: "1",
  name: "Test Project",
  shortName: "TP",
  description: "A test project for unit tests.",
  tags: ["defi"],
  image: "test.png",
  network: {
    website: "https://example.com",
    github: "",
    twitter: "",
  },
  isLive: true,
  isTestnetLive: false,
  ...overrides,
});

describe("Project service", () => {
  describe("projectIncludesKeyword", () => {
    const project = makeProject({
      name: "ZKEX: Multi-Chain DEX",
      shortName: "ZKEX",
      description:
        "ZKEX is a bridgeless multi-chain order book DEX, secured with zero-knowledge proofs.",
    });

    it("should return true when project includes keyword", () => {
      expect(projectIncludesKeyword(project, "kex")).toBe(true);
    });

    it("should return true when keyword is empty", () => {
      expect(projectIncludesKeyword(project, "")).toBe(true);
    });

    it("should return false when project does not include keyword", () => {
      expect(projectIncludesKeyword(project, "road")).toBe(false);
    });
  });

  describe("getProjectRelevanceScore", () => {
    const project = makeProject({
      name: "ZKEX: Multi-Chain DEX",
      shortName: "ZKEX",
      description:
        "ZKEX is a bridgeless multi-chain order book DEX, secured with zero-knowledge proofs.",
    });

    it("should return a higher score for exact name match than unrelated text", () => {
      const exact = getProjectRelevanceScore(project, "zkex: multi-chain dex");
      const unrelated = getProjectRelevanceScore(project, "roadmap");
      expect(exact).toBeGreaterThan(unrelated);
    });

    it("should return 0 when keyword is empty", () => {
      expect(getProjectRelevanceScore(project, "   ")).toBe(0);
    });

    it("should score tag matches", () => {
      expect(getProjectRelevanceScore(project, "defi")).toBeGreaterThan(0);
    });
  });

  describe("findProjectById", () => {
    const projects = [makeProject({ id: "1" }), makeProject({ id: "2" })];

    it("should return matching project", () => {
      expect(findProjectById(projects, "1")).toStrictEqual(projects[0]);
    });

    it("should return undefined when no matching project", () => {
      expect(findProjectById(projects, "3")).toBe(undefined);
    });
  });

  describe("shortenText", () => {
    it.each([
      { text: "", maxLength: 10, expected: "" },
      { text: "this is a test", maxLength: 10, expected: "this is a..." },
    ])(
      "should return '$expected' when maxLength is $maxLength",
      ({ text, maxLength, expected }) => {
        expect(shortenText(text, maxLength)).toStrictEqual(expected);
      },
    );
  });

  describe("sortBy", () => {
    it("should sort alphabetically with A_Z", () => {
      const projects = [
        makeProject({ name: "Bravo" }),
        makeProject({ name: "Alpha" }),
      ];
      const sorted = sortBy([...projects], ProjectSorting.A_Z);
      expect(sorted[0].name).toBe("Alpha");
      expect(sorted[1].name).toBe("Bravo");
    });

    it("should sort by twitter followers descending", () => {
      const projects = [
        makeProject({
          name: "Low",
          socialMetrics: { twitterFollower: 100 },
        }),
        makeProject({
          name: "High",
          socialMetrics: { twitterFollower: 5000 },
        }),
      ];
      const sorted = sortBy([...projects], ProjectSorting.TWITTER);
      expect(sorted[0].name).toBe("High");
    });
  });
});
