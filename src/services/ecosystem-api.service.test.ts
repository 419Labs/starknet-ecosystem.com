import { afterEach, describe, expect, it, jest } from "@jest/globals";

import { allProjects, type Project } from "../../data/ecosystem";
import { EcosystemApi } from "./ecosystem-api.service";
import { isListedProject } from "./project.service";

const removedId = "00afa40f-f1a7-4cb3-a979-13c501ae9b17";
const readyX = allProjects.find((project) => project.name === "Ready X")!;
const originalFetch = global.fetch;

afterEach(() => {
  global.fetch = originalFetch;
});

const mockResponse = (body: unknown) => {
  const mockFetch = jest.fn<typeof fetch>().mockResolvedValue({
    ok: true,
    status: 200,
    json: async () => body,
  } as Response);
  global.fetch = mockFetch;
  return mockFetch;
};

describe("project curation", () => {
  it("excludes Uncap and hidden projects from stale API results", async () => {
    mockResponse({ content: [
      { ...readyX, id: removedId, name: "Uncap" },
      { ...readyX, id: "hidden", isHidden: true },
      readyX,
    ] });
    const projects = await EcosystemApi.fetchEcosystemProjects(1000);
    expect(projects.map((project) => project.id)).toEqual([readyX.id]);
  });

  it("does not fetch a retired project's detail page", async () => {
    const mockFetch = mockResponse({ ...readyX, id: removedId });
    expect(await EcosystemApi.fetchProjectById(removedId)).toBeNull();
    expect(mockFetch).not.toHaveBeenCalled();
  });

  it("corrects Ready in API lists and details while preserving API metrics", async () => {
    const stale: Project = {
      ...readyX,
      name: "Ready",
      shortName: "Ready",
      description: "Cashback and spending cards",
      network: { website: "https://www.ready.co/", twitterImage: "avatar.png" },
      socialMetrics: { date: 1, socialActivity: 2, tweetWithStarknet: 3, twitterCount: 4, twitterFollower: 5 },
    };
    mockResponse({ content: [stale] });
    const [listed] = await EcosystemApi.fetchEcosystemProjects(1000);
    mockResponse(stale);
    const detail = await EcosystemApi.fetchProjectById(readyX.id);
    for (const project of [listed, detail]) {
      expect(project?.name).toBe("Ready X");
      expect(project?.network.website).toBe("https://www.ready.co/ready-x");
      expect(project?.description).toBe(readyX.description);
      expect(project?.socialMetrics).toEqual(stale.socialMetrics);
      expect(project?.network.twitterImage).toBe("avatar.png");
    }
  });

  it("shows approved profiles without asserting they are live", () => {
    const zylith = allProjects.find((project) => project.name === "Zylith")!;
    expect(isListedProject(zylith)).toBe(true);
    expect(zylith.isLive || zylith.isTestnetLive).toBe(false);
    expect(isListedProject({ ...zylith, isHidden: true })).toBe(false);
  });
});
