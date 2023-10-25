import type { Project } from "../../data/ecosystem";
import { aListOfProject } from "../models/job.fixture";

import {
  findProjectById,
  projectIncludesKeyword,
  shortenText,
} from "./project.service";

describe("Project service", () => {
  describe("projectIncludesKeyword", () => {
    const project: Project = {
      id: "e207d9e6-d1ca-422b-a50c-415e8748be21",
      name: "ZKEX: Multi-Chain DEX",
      shortName: "ZKEX",
      description:
        "ZKEX is a bridgeless multi-chain order book DEX, secured with zero-knowledge proofs, powered by zkLink, Starknet, and zkSync.",
      tags: ["defi"],
      image: "zkex-logo-rounded.png",
      network: {
        website: "https://zkex.com",
        github: "",
        twitter: "https://twitter.com/ZKEX_Official",
        medium: "https://medium.com/@zkex",
        discord: "https://discord.gg/ctDAYrrNTH",
        telegram: "https://t.me/ZKEX_Official",
      },
      isLive: false,
      isTestnetLive: false,
    };

    it("should return true when project includes keyword", () => {
      // When
      const result = projectIncludesKeyword(project, "kex");

      // Then
      expect(result).toBe(true);
    });

    it("should return true when keyword is empty", () => {
      // When
      const result = projectIncludesKeyword(project, "");

      // Then
      expect(result).toBe(true);
    });

    it("should return false when project does not include keyword", () => {
      // When
      const result = projectIncludesKeyword(project, "road");

      // Then
      expect(result).toBe(false);
    });
  });

  describe("findProjectById", () => {
    it("should return matching project", () => {
      // Given
      const projects = aListOfProject();

      // When
      const result = findProjectById(projects, "1");

      // Then
      expect(result).toStrictEqual(projects[0]);
    });

    it("should return undefined when no matching project", () => {
      // Given
      const projects = aListOfProject();

      // When
      const result = findProjectById(projects, "3");

      // Then
      expect(result).toBe(undefined);
    });
  });

  describe("shortenText", () => {
    [
      { text: "", maxLength: 10, expected: "" },
      { text: "this is a test", maxLength: 10, expected: "this is a..." },
    ].forEach(({ text, maxLength, expected }) =>
      it(`should return '${expected}' when maxLength is '${maxLength}'`, () => {
        // When
        const result = shortenText(text, maxLength);

        // Then
        expect(result).toStrictEqual(expected);
      })
    );
  });
});
