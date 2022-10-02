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
    value: "learning",
    label: "Learn",
    icon: "bridge",
  },
  {
    value: "contributions",
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
    value: "newsfeed",
    label: "News & Infos",
    icon: "gamepad",
  },
];

// ======================================================================
// Learning links
// ======================================================================
export const learning: Resource[] = [
  {
    name: "Hello, StarkNet",
    shortName: "hello-starknet-official-doc",
    description:
      "This tutorial walks you through writing and deploying a StarkNet contract.",
    tags: ["starknet", "learn"],
    network: {
      website: "https://www.cairo-lang.org/docs/hello_starknet/index.html",
    },
  },
  {
    name: "Hello, Cairo",
    shortName: "hello-cairo-official-doc",
    description:
      "“Hello, Cairo describes Cairo for the programmer who wishes to understand what Cairo can do hands-on, and start writing programs in Cairo.",
    tags: ["starknet", "cairo", "learn"],
    network: {
      website: "https://www.cairo-lang.org/docs/hello_cairo/index.html",
    },
  },
];

// ======================================================================
// Tooling links
// ======================================================================
export const tools: Resource[] = [
  {
    name: "EIP-1155 Implementation (by Astraly)",
    shortName: "EIP-1155-astraly",
    description: "Cairo implementation of ERC1155",
    tags: ["EIP1155", "EIP", "tools"],
    network: {
      github:
        "https://github.com/Astraly-Labs/astraly-contracts/tree/main/contracts/erc1155",
    },
  },
  {
    name: "EIP-1155 Implementation (by The Ninth)",
    shortName: "EIP-1155-the-ninth",
    description: "Cairo implementation of EIP 1155",
    tags: ["EIP1155", "EIP", "tools"],
    network: {
      github:
        "https://github.com/the-ninth/cairo-contracts/tree/main/contracts/erc1155",
    },
  },
  {
    name: "ERC-4626 Implementation (by Milan Cermak)",
    shortName: "ERC-4626-milan-cermak",
    description: "Cairo implementation of EIP 4626",
    tags: ["EIP4626", "EIP", "tools"],
    network: {
      github: "https://github.com/milancermak/cairo-4626",
    },
  },
  {
    name: "Cairo Goldmine",
    shortName: "cairo-goldmine",
    description:
      "A comprehensive, annotated list of repositories of the starknet ecosystem.",
    tags: ["Cairo", "tools", "libraries"],
    network: {
      github: "https://github.com/beautyisourbusiness/cairo-goldmine",
    },
  },
];

// ======================================================================
// Wallet links
// ======================================================================
export const wallets: Resource[] = [
  {
    name: "Argent X",
    shortName: "argent-x",
    description:
      'First StarkNet wallet to interact with tokens and NFTs. Manage your identities with "Sign in with StarkNet" (very soon ™️), and enjoy the best of defi. Made with ❤️ by the Argent team.',
    tags: ["wallet"],
    image: "argent-x.svg",
    network: {
      website: "https://www.argent.xyz/argent-x/",
      github: "https://github.com/argentlabs/argent-x",
      twitter: "https://twitter.com/argentHQ",
      medium: "",
      discord: "",
      telegram: "",
    },
  },
  {
    name: "Braavos",
    shortName: "Braavos",
    description:
      "First and only StarkNet wallet on mobile, Android & iOS. Use all your favorite StarkNet dApps on the go! Also available for chrome, Firefox and Edge. All in one assets management - DeFi and NFTs",
    tags: ["wallet"],
    image: "braavos.svg",
    network: {
      website: "https://braavos.app/",
      github: "https://github.com/myBraavos",
      twitter: "https://twitter.com/myBraavos",
      medium: "https://medium.com/@braavos_starknet_wallet",
      discord: "https://discord.gg/9Ks7V5DN9z",
      telegram: "https://t.me/mybraavos",
    },
  },
];

// ======================================================================
// Newsfeed links
// ======================================================================
export const newsfeed: Resource[] = [
  {
    name: "Swagtimus - Newsletter (StarkNet Roundup)",
    shortName: "swagtimus-newsletter",
    description:
      "Weekly summary of everything that is going on with the StarkNet protocol & ecosystem",
    tags: ["newsletter"],
    network: {
      website: "https://swagtimus.substack.com/",
    },
  },
];

export interface ResourceBundleItf {
  learning: ResourceItf[];
  contributions: ResourceItf[];
  tools: ResourceItf[];
  wallets: ResourceItf[];
  newsfeed: ResourceItf[];
}

export const academyResourcesBundle: ResourceBundleItf = {
  learning,
  contributions: [],
  tools,
  wallets,
  newsfeed,
};
