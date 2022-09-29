import type { Network } from "../src/models/company";

import type { Tag } from "./tag";

export interface Resource {
  id?: string;
  name: string;
  shortName?: string;
  description: string;
  tags?: string[];
  image?: string;
  network: Network;
}

export interface ResourceItf extends Resource {
  tagsRef?: Tag[];
}

export const allAcademyCategory: Tag[] = [
  {
    value: "learn",
    label: "Learn",
    icon: "bridge",
  },
  {
    value: "contribute",
    label: "Contribute",
    icon: "people-group",
  },
  {
    value: "tools",
    label: "Tools",
    icon: "rocket",
  },
  {
    value: "wallets",
    label: "Wallets",
    icon: "id-card",
  },
  {
    value: "news",
    label: "News & Infos",
    icon: "gamepad",
  },
];
