export interface Tag {
  key?: string;
  value: string;
  label: string;
  icon: string;
}

export const allJobTags: Tag[] = [
  {
    value: "all",
    label: "All",
    icon: "home",
  },
  {
    value: "cairo",
    label: "Cairo",
    icon: "home",
  },
  {
    value: "solidity",
    label: "Solidity",
    icon: "home",
  },
  {
    value: "docker",
    label: "Docker",
    icon: "home",
  },
  {
    value: "serverless",
    label: "Serverless",
    icon: "home",
  },
  {
    value: "hardhat",
    label: "Hardhat",
    icon: "home",
  },
  {
    value: "nile",
    label: "Nile",
    icon: "home",
  },
  {
    value: "protostar",
    label: "Protostar",
    icon: "home",
  },
  {
    value: "warp",
    label: "Warp",
    icon: "home",
  },
  {
    value: "angular",
    label: "Angular",
    icon: "home",
  },
  {
    value: "reactjs",
    label: "Reactjs",
    icon: "home",
  },
  {
    value: "nextjs",
    label: "Nextjs",
    icon: "home",
  },
  {
    value: "vuejs",
    label: "Vuejs",
    icon: "home",
  },
  {
    value: "svelte",
    label: "Svelte",
    icon: "home",
  },
  {
    value: "typescript",
    label: "Typescript",
    icon: "home",
  },
  {
    value: "javascript",
    label: "Javascript",
    icon: "home",
  },
  {
    value: "go",
    label: "Go",
    icon: "home",
  },
  {
    value: "kotlin",
    label: "Kotlin",
    icon: "home",
  },
  {
    value: "php",
    label: "Php",
    icon: "home",
  },
  {
    value: "python",
    label: "Python",
    icon: "home",
  },
  {
    value: "rust",
    label: "Rust",
    icon: "home",
  },
];

export enum AcademyCategory {
  LEARNING = "learning",
  CONTRIBUTE = "contributions",
  TOOLS = "tools",
  WALLETS = "wallets",
  NEWS_FEED = "newsfeed",
}

export const allAcademyTags: Tag[] = [
  {
    value: AcademyCategory.LEARNING,
    label: "Learn",
    icon: "graduation-cap",
  },
  /*  {
    value: AcademyCategory.CONTRIBUTE,
    label: "Contribute",
    icon: "pen",
  }, */
  {
    value: AcademyCategory.TOOLS,
    label: "Tools",
    icon: "screwdriver-wrench",
  },
  {
    value: AcademyCategory.WALLETS,
    label: "Wallets",
    icon: "wallet",
  },
  {
    value: AcademyCategory.NEWS_FEED,
    label: "News & Infos",
    icon: "rss",
  },
];

export const allEcosystemTags: Tag[] = [
  {
    value: "all",
    label: "All",
    icon: "home",
  },
  {
    value: "bridge",
    label: "Bridge",
    icon: "bridge",
  },
  {
    value: "defi",
    label: "DeFi",
    icon: "rocket",
  },
  {
    value: "gamefi",
    label: "Gaming",
    icon: "gamepad",
  },
  {
    value: "governance",
    label: "Governance",
    icon: "landmark",
  },
  {
    value: "infrastructure",
    label: "Infrastructure",
    icon: "road",
  },
  {
    value: "mobile",
    label: "Mobile",
    icon: "mobile-screen-button",
  },
  {
    value: "nft",
    label: "NFT",
    icon: "image",
  },
  {
    value: "payments",
    label: "Payments",
    icon: "credit-card",
  },
  {
    value: "privacy",
    label: "Privacy",
    icon: "user-shield",
  },
  {
    value: "security",
    label: "Security",
    icon: "shield-halved",
  },
  {
    value: "social",
    label: "Social",
    icon: "users",
  },
  {
    value: "tools",
    label: "Tools",
    icon: "screwdriver-wrench",
  },
  {
    value: "wallet",
    label: "Wallet",
    icon: "wallet",
  },
];
