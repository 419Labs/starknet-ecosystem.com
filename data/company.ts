import type { Company } from "../src/models/company";

const allCompanies: Company[] = [
  {
    id: 1,
    name: "Alpha Road",
    network: {
      website: "https://alpharoad.fi",
      github: "",
      twitter: "https://twitter.com/alpharoad_fi",
      medium: "https://alpharoad.medium.com/",
      discord: "https://discord.gg/Bhfa3B2Gnq",
      telegram: "https://t.me/alpharoad_fi",
    },
    logo: "alpharoad.png",
  },
  {
    id: 2,
    name: "ZKX",
    network: {
      website: "https://www.zkx.fi",
      twitter: "https://twitter.com/zkxprotocol",
      medium: "https://zkxprotocol.medium.com",
      telegram: "https://t.me/zkxannouncements",
    },
    logo: "ZKX.png",
  },
  {
    id: 3,
    name: "zkLend",
    network: {
      website: "https://zklend.com/",
      github: "",
      twitter: "https://twitter.com/zkLend",
      medium: "",
      discord: "",
      telegram: "",
    },
    logo: "zklend.svg",
  },
  {
    id: 4,
    name: "ZigZag",
    network: {
      website: "https://trade.zigzag.exchange/",
      github: "https://github.com/ZigZagExchange/",
      twitter: "https://twitter.com/ZigZagExchange",
      medium: "",
      discord: "",
      telegram: "",
    },
    logo: "zigzag.png",
  },
  {
    id: 5,
    name: "Maker",
    network: {
      website: "https://makerdao.com/en/",
      github: "https://github.com/makerdao/starknet-dai-bridge",
      twitter: "https://twitter.com/MakerDAO",
      medium: "",
      discord: "",
      telegram: "https://t.me/makerdaoOfficial",
    },
    logo: "makerdao.png",
  },
  {
    id: 6,
    name: "Oasis",
    network: {
      website: "https://testnet.playoasis.xyz/",
      github: "https://github.com/playoasis",
      twitter: "https://twitter.com/playoasisXYZ",
      medium: "",
      discord: "https://discord.com/invite/aR2U7KtbgD",
      telegram: "https://t.me/playoasis",
    },
    logo: "oasis.png",
  },
];

export default allCompanies;
