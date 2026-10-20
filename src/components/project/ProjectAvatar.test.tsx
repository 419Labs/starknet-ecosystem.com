import { afterEach, beforeEach, describe, expect, it } from "@jest/globals";
import { ChakraProvider } from "@chakra-ui/react";
import { act } from "react";
import { createRoot, type Root } from "react-dom/client";

import { allProjects } from "../../../data/ecosystem";
import { ProjectAvatar } from "./ProjectAvatar";

const originalImage = window.Image;
const attempts: MockImage[] = [];
class MockImage {
  src = "";
  onload: ((event: Event) => void) | null = null;
  onerror: ((event: Event) => void) | null = null;
  constructor() { attempts.push(this); }
}
let container: HTMLDivElement;
let root: Root;

beforeEach(() => {
  (globalThis as typeof globalThis & { IS_REACT_ACT_ENVIRONMENT: boolean }).IS_REACT_ACT_ENVIRONMENT = true;
  window.Image = MockImage as unknown as typeof Image;
  attempts.length = 0;
  container = document.createElement("div");
  document.body.appendChild(container);
  root = createRoot(container);
});
afterEach(() => {
  act(() => root.unmount());
  container.remove();
  window.Image = originalImage;
});

const project = (name: string) => ({
  ...allProjects.find((item) => item.name === name)!,
  // API filename may differ from the bundled asset.
  image: "stale-api-filename.png",
  network: { twitterImage: `https://pbs.twimg.com/${name}.png` },
});
const render = (name: string) => act(() => {
  root.render(<ChakraProvider><ProjectAvatar project={project(name)} size="lg" borderRadius="0" /></ChakraProvider>);
});
const finishAttempt = (type: "load" | "error") => act(() => {
  const image = attempts[attempts.length - 1];
  (type === "load" ? image.onload : image.onerror)?.(new Event(type));
});

describe("project logo fallback", () => {
  it.each([["Opus", "Opus.jpg"], ["Pragma", "pragma.png"], ["Troves", "troves.svg"]])(
    "shows the bundled logo for %s when its X image fails", (name, filename) => {
      render(name);
      expect(attempts[0].src).toBe(`https://pbs.twimg.com/${name}.png`);
      finishAttempt("error");
      expect(attempts[attempts.length - 1].src).toBe(`/logos/${filename}`);
      finishAttempt("load");
      expect(container.querySelector("img")?.getAttribute("src")).toBe(`/logos/${filename}`);
    },
  );
  it("retains a working remote image", () => {
    render("Opus");
    finishAttempt("load");
    expect(container.querySelector("img")?.getAttribute("src")).toBe("https://pbs.twimg.com/Opus.png");
    expect(attempts).toHaveLength(1);
  });
  it("uses initials if both sources fail without retrying indefinitely", () => {
    render("Opus");
    finishAttempt("error");
    finishAttempt("error");
    expect(container.querySelector("img")).toBeNull();
    expect(container.textContent).toContain("O");
    expect(attempts).toHaveLength(2);
  });
  it("tries the new project's image when the same component changes projects", () => {
    render("Opus");
    finishAttempt("error");
    finishAttempt("load");
    render("Pragma");
    expect(attempts[attempts.length - 1].src).toBe("https://pbs.twimg.com/Pragma.png");
    finishAttempt("load");
    expect(container.querySelector("img")?.getAttribute("src")).toBe("https://pbs.twimg.com/Pragma.png");
  });
});
