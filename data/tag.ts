export interface Tag {
  value: string;
  label: string;
  icon: string;
}

export const allTags: Tag[] = [
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
    value: "dao",
    label: "Dao",
    icon: "people-group",
  },
  {
    value: "defi",
    label: "DeFi",
    icon: "rocket",
  },
  {
    value: "digital_id",
    label: "Digital ID",
    icon: "id-card",
  },
  {
    value: "gamefi",
    label: "GameFi",
    icon: "gamepad",
  },
  {
    value: "governance",
    label: "Governance",
    icon: "magnifying-glass",
  },
  {
    value: "infrastructure",
    label: "Infrastructure",
    icon: "road",
  },
  {
    value: "mobile",
    label: "Mobile App",
    icon: "mobile",
  },
  {
    value: "nft",
    label: "NFT",
    icon: "file-image",
  },
  // {
  //   value: "cefi",
  //   label: "CeFi",
  // },
  {
    value: "payments",
    label: "Payments",
    icon: "credit-card",
  },
  // {
  //   value: "social",
  //   label: "Social",
  // },
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
  {
    value: "starkex",
    label: "StarkEx",
    icon: "ellipsis-vertical",
  },
];
