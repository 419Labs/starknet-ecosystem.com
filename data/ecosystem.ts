import {Tag} from "./tag";

export interface Project {
    name: string;
    short_name: string;
    description: string;
    tags: string[];
    logo: string;
    website: string;
    github: string;
    twitter: string;
    medium: string;
    discord: string;
    telegram: string;
    isLive: boolean;
    isTestnetLive: boolean;
}

export const allProjects: Array<Project> = [
    {
        name: "Alpha Road",
        short_name: "Alpha Road",
        description: "My alpha road description",
        tags: ["defi", "nft"],
        logo: "alpharoad.png",
        website: "https://alpharoad.fi",
        github: "",
        twitter:  "https://twitter.com/alpharoad_fi",
        medium: "https://alpharoad.medium.com/",
        discord: "https://discord.gg/Bhfa3B2Gnq",
        telegram: "https://t.me/alpharoad_fi",
        isLive: false,
        isTestnetLive: false
    },
    {
        name: "Banxa",
        short_name: "Banxa",
        description: "Payments",
        tags: ["defi", "payments"],
        logo: "banxa.svg",
        website: "https://banxa.com/",
        github: "",
        twitter:  "https://twitter.com/BanxaOfficial",
        medium: "",
        discord: "",
        telegram: "",
        isLive: false,
        isTestnetLive: false
    },
    {
        name: "CurveZero",
        short_name: "CurveZero",
        description: "CurveZero is a protocol for Fixed rate USD loans. It does this by solving for the USD term structure i.e. what are rates for 6/12/24 months etc.",
        tags: ["defi", "payments"],
        logo: "",
        website: "https://docs.google.com/document/d/1rrYC32w63FzzV61rJWqqYomEMgfZ3cRR1jOlJmnnxeY/edit",
        github: "",
        twitter:  "",
        medium: "",
        discord: "",
        telegram: "",
        isLive: false,
        isTestnetLive: false
    },
    {
        name: "FujiDAO",
        short_name: "FujiDAO",
        description: "A cross-chain borrowing aggregator.",
        tags: ["defi"],
        logo: "fujidao.svg",
        website: "https://www.fujidao.org/#/",
        github: "https://github.com/Fujicracy/fuji-protocol",
        twitter:  "https://twitter.com/FujiFinance",
        medium: "",
        discord: "",
        telegram: "",
        isLive: false,
        isTestnetLive: false
    },
    {
        name: "JediSwap",
        short_name: "JediSwap",
        description: "JediSwap is a fully permissionless and composable AMM on StarkNet. Users can swap assets instantaneously with 0 gas fees while relying on Ethereum security. Anyone can add a pair on Jediswap, and builders can build more advanced applications using JediSwap open sourced contracts",
        tags: ["defi"],
        logo: "jediswap.svg",
        website: "https://jediswap.xyz/",
        github: "",
        twitter:  "https://twitter.com/jediswap",
        medium: "",
        discord: "",
        telegram: "",
        isLive: false,
        isTestnetLive: false
    },
    {
        name: "Maker",
        short_name: "Maker",
        description: "Import Maker protocol",
        tags: ["defi"],
        logo: "makerdao.png",
        website: "https://makerdao.com/en/",
        github: "https://github.com/makerdao/starknet-dai-bridge",
        twitter:  "https://twitter.com/MakerDAO",
        medium: "",
        discord: "",
        telegram: "https://t.me/makerdaoOfficial",
        isLive: false,
        isTestnetLive: false
    },
    {
        name: "Myswap",
        short_name: "Myswap",
        description: "AMM",
        tags: ["defi"],
        logo: "myswap.png",
        website: "https://www.myswap.xyz/#/",
        github: "",
        twitter:  "",
        medium: "",
        discord: "",
        telegram: "",
        isLive: false,
        isTestnetLive: false
    },
    {
        name: "Sandclock",
        short_name: "Sandclock",
        description: "Unlocking the programmability of principal and yield with automation.",
        tags: ["defi"],
        logo: "",
        website: "https://www.sandclock.org/",
        github: "https://github.com/sandclock-org/proof-of-competence",
        twitter:  "",
        medium: "",
        discord: "",
        telegram: "",
        isLive: false,
        isTestnetLive: false
    },
    {
        name: "Serity",
        short_name: "Serity",
        description: "Serity is a PCV-based protocol for the minting and trading of yield-backed synthetic assets.",
        tags: ["defi"],
        logo: "serity.png",
        website: "https://serity.finance/",
        github: "https://github.com/Serity-Finance",
        twitter: "https://twitter.com/SerityFinance",
        medium: "",
        discord: "",
        telegram: "",
        isLive: false,
        isTestnetLive: false
    },
    {
        name: "Suez",
        short_name: "Suez",
        description: "Bridge and DeFi pooling",
        tags: ["defi", "bridge"],
        logo: "",
        website: "https://suez.dev/",
        github: "https://github.com/agolajko/suez",
        twitter: "https://twitter.com/SuezBridge",
        medium: "",
        discord: "",
        telegram: "",
        isLive: true,
        isTestnetLive: true
    },
    {
        name: "StarkSwap",
        short_name: "StarkSwap",
        description: "Building the next generation of DeFi on StarkNet. First offering is an AMM, with other DeFi products to follow.",
        tags: ["defi"],
        logo: "starkswap.png",
        website: "https://www.starkswap.co/",
        github: "https://github.com/Starkswap",
        twitter: "https://twitter.com/starkswap",
        medium: "",
        discord: "",
        telegram: "",
        isLive: false,
        isTestnetLive: false
    },
    {
        name: "xBank",
        short_name: "xBank",
        description: "xBank is a decentralized non-custodial liquidity market protocol. xBank manages deposits for the lenders and facilitates lending of the deposited asset for the borrowers while performing appropriate risk management to protect the lenders from risks of illiquidity and insolvency.",
        tags: ["defi"],
        logo: "xbank.jpeg",
        website: "https://www.xbank.finance/",
        github: "https://github.com/xbank-lab",
        twitter: "https://twitter.com/xBankFinance",
        medium: "",
        discord: "https://discord.com/invite/Ywh9hJg6xv",
        telegram: "",
        isLive: false,
        isTestnetLive: false
    },
    {
        name: "ZigZag",
        short_name: "ZigZag",
        description: "Order-book based exchange",
        tags: ["defi"],
        logo: "zigzag.png",
        website: "https://trade.zigzag.exchange/",
        github: "https://github.com/ZigZagExchange/",
        twitter: "https://twitter.com/ZigZagExchange",
        medium: "",
        discord: "",
        telegram: "",
        isLive: false,
        isTestnetLive: false
    },
    {
        name: "zkLend",
        short_name: "zkLend",
        description: "zkLend is an L2 money-market protocol built on StarkNet, combining zk-rollup scalability, superior transaction speed, and cost-savings with Ethereum’s security. The protocol offers a dual solution: a permissioned and compliance-focused solution for institutional clients, and a permissionless service for DeFi users - all without sacrificing decentralisation.",
        tags: ["defi"],
        logo: "zklend.svg",
        website: "https://zklend.com/",
        github: "",
        twitter: "https://twitter.com/zkLend",
        medium: "",
        discord: "",
        telegram: "",
        isLive: false,
        isTestnetLive: false
    },
    {
        name: "ZkPad",
        short_name: "ZkPad",
        description: "Building a secure launchpad to help Starknet-based projects raise funds.",
        tags: ["defi"],
        logo: "zkpad.png",
        website: "https://zkpad.io/",
        github: "",
        twitter: "https://twitter.com/ZKPadfi",
        medium: "",
        discord: "",
        telegram: "",
        isLive: false,
        isTestnetLive: false
    },
    {
        name: "ZKX",
        short_name: "ZKX",
        description: "A perpetual swaps exchange optimized for off-chain asset trading and gamified user experience. Currently in stealth mode.",
        tags: ["defi"],
        logo: "",
        website: "http://zkx.fi/",
        github: "",
        twitter: "",
        medium: "",
        discord: "",
        telegram: "",
        isLive: false,
        isTestnetLive: false
    },
];
