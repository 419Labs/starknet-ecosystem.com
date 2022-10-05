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
  highlight?: boolean;
  link?: string;
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
  {
    name: "starklings",
    shortName: "starklings",
    description:
      "An interactive tutorial to get you up and running with Starknet",
    tags: ["learn", "tutorial"],
    network: {
      github: "https://github.com/onlydustxyz/starklings",
    },
  },
  {
    name: "cairomate",
    shortName: "cairomate",
    description: "Structured, dependable legos for starknet development.",
    tags: ["learn"],
    network: {
      github: "https://github.com/abigger87/cairomate",
    },
  },
  {
    name: "fullstack-starknet",
    shortName: "fullstack-starknet",
    description: "Tutorials for on-ramping to StarkNet",
    tags: ["learn", "tutorial"],
    network: {
      github: "https://github.com/sambarnes/fullstack-starknet",
    },
  },
  {
    name: "cairo-by-example",
    shortName: "cairo-by-example",
    description: "Verbosely Documented, Minimal Starknet Contract Examples.",
    tags: ["learn"],
    network: {
      github: "https://github.com/abigger87/cairo-by-example",
    },
  },
  {
    name: "oriac",
    shortName: "oriac",
    description: "A toy Cairo VM implementation in Rust",
    tags: ["learn"],
    network: {
      github: "https://github.com/xJonathanLEI/oriac",
    },
  },
  {
    name: "starknet-messaging-bridge",
    shortName: "starknet-messaging-bridge",
    description:
      "Learn how to build StarkNet <-> Ethereum cross layer applications",
    tags: ["learn"],
    network: {
      github: "https://github.com/starknet-edu/starknet-messaging-bridge",
    },
  },
  {
    name: "starknet-hardhat-example",
    shortName: "starknet-hardhat-example",
    description: "Examples of how Starknet Hardhat plugin can be used.",
    tags: ["learn"],
    network: {
      github: "https://github.com/Shard-Labs/starknet-hardhat-example",
    },
  },
  {
    name: "cairo-resources-list",
    shortName: "cairo-resources-list",
    description:
      "A curated list of awesome Cairo resources, libraries, tools and more",
    tags: ["learn"],
    network: {
      github: "https://github.com/Narcissa-Team/cairo-resources-list",
    },
  },
  {
    name: "basecamp",
    shortName: "basecamp",
    description:
      "So you've landed in a strange finite field. Only thing to do now is setup basecamp",
    tags: ["learn"],
    network: {
      github: "https://github.com/starknet-edu/basecamp",
    },
  },
  {
    name: "cairostarter",
    shortName: "cairostarter",
    description: "Forkable, Minimal Template for Starknet Projects.",
    tags: ["learn"],
    network: {
      github: "https://github.com/abigger87/cairostarter",
    },
  },
  {
    name: "cairopal",
    shortName: "cairopal",
    description: "Modern, Flexible Starknet Dapp Template",
    tags: ["learn"],
    network: {
      github: "https://github.com/abigger87/cairopal",
    },
  },
  {
    name: "cairopractice",
    shortName: "cairopractice",
    description: "Code samples for the accompanying  @cairopractice blog",
    tags: ["learn"],
    network: {
      github: "https://github.com/milancermak/cairopractice",
    },
  },
  {
    name: "starknet-erc721",
    shortName: "starknet-erc721",
    description:
      "Learn how to deploy and customize an ERC721 token on StarkNet",
    tags: ["learn"],
    network: {
      github: "https://github.com/starknet-edu/starknet-erc721",
    },
  },
  {
    name: "starknet-contracts",
    shortName: "starknet-contracts",
    description: "No description, website, or topics provided.",
    tags: ["learn"],
    network: {
      github: "https://github.com/playoasis/starknet-contracts",
    },
  },
  {
    name: "starknet-tutorial",
    shortName: "starknet-tutorial",
    description: "No description, website, or topics provided.",
    tags: ["learn", "tutorial"],
    network: {
      github: "https://github.com/cryptobenkei/starknet-tutorial",
    },
  },
  {
    name: "starknet-debug",
    shortName: "starknet-debug",
    description: "Learn how to debug a StarkNet smart contract",
    tags: ["learn"],
    network: {
      github: "https://github.com/starknet-edu/starknet-debug/",
    },
  },
  {
    name: "workshop-arf-dapp",
    shortName: "workshop-arf-dapp",
    description: "Workshop for starknetCC (nextjs x starknetjs x cairo)",
    tags: ["learn"],
    network: {
      github:
        "https://github.com/419Labs/workshop-arf-dapp) - Workshop for starknetCC (nextjs x starknetjs x cairo",
    },
  },
  {
    name: "starkware-demo",
    shortName: "starkware-demo",
    description: "Automated Market Maker demo running on Starknet.",
    tags: ["learn"],
    network: {
      github: "https://github.com/dOrgTech/starkware-demo",
    },
  },
  {
    name: "Solidity-vs-Cairo",
    shortName: "solidity-vs-cairo",
    description:
      "This repo shows the cairo equivalents of the solidity language patterns",
    tags: ["learn"],
    network: {
      github: "https://github.com/behzatce/Solidity-vs-Cairo",
    },
  },
  {
    name: "basic-starknet-js-wallet",
    shortName: "basic-starknet-js-wallet",
    description:
      "Basic example of deploying and using starknet.js for basic wallet operations",
    tags: ["learn"],
    network: {
      github: "https://github.com/amanusk/basic-starknet-js-wallet",
    },
  },
  {
    name: "starknet-cc-tdd",
    shortName: "starknet-cc-tdd",
    description: "TDD (Test Driven Development) with your Cairo contracts",
    tags: ["learn"],
    network: {
      github:
        "https://github.com/419Labs/starknet-cc-tdd) - TDD (Test Driven Development",
    },
  },
  {
    name: "starknet-cairo-101-Turkish-translation",
    shortName: "starknet-cairo-101-turkish-translation",
    description: "Cairo 101 turkish translation",
    tags: ["learn"],
    network: {
      github:
        "https://github.com/utkukoca/starknet-cairo-101-Turkish-translation",
    },
  },
  {
    name: "development-guidelines",
    shortName: "development-guidelines",
    description: "StarkNet development guidelines",
    tags: ["learn"],
    network: {
      github: "https://github.com/onlydustxyz/development-guidelines/",
    },
  },
  {
    name: "StarkNet-NFT-Template",
    shortName: "starknet-nft-template",
    description: "A Template for deploying NFT Projects on StarkNet",
    tags: ["learn"],
    network: {
      github: "https://github.com/rzmahmood/StarkNet-NFT-Template",
    },
  },
  {
    name: "starknet-tokens-showdown",
    shortName: "starknet-tokens-showdown",
    description:
      "Illustrates the difference in gas costs when using a Uint256 and a felt based token on StarkNet",
    tags: ["learn"],
    network: {
      github: "https://github.com/milancermak/starknet-tokens-showdown",
    },
  },
  {
    name: "starknet-tx-hash-demo",
    shortName: "starknet-tx-hash-demo",
    description:
      "This repo demonstrates an important StarkNet concept with regard to transaction hashes and how they are processed by StarkNet Alpha v4.",
    tags: ["learn"],
    network: {
      github: "https://github.com/hubsmoke/starknet-tx-hash-demo",
    },
  },
  {
    name: "cairopal",
    shortName: "cairopal",
    description: "Modern, Flexible Starknet Dapp Template",
    tags: ["learn"],
    network: {
      github: "https://github.com/sambarnes/cairopal",
    },
  },
  {
    name: "points-migrator",
    shortName: "points-migrator",
    description: "migrate the tutorial points to another wallet",
    tags: ["learn", "tutorial"],
    network: {
      github: "https://github.com/starknet-edu/points-migrator",
    },
  },
  {
    name: "perama-v",
    shortName: "perama-v",
    description: "No description, website, or topics provided.",
    tags: ["learn"],
    network: {
      github: "https://github.com/perama-v/perama-v.github.io",
    },
  },
  {
    name: "starknet-data-availability-cost",
    shortName: "starknet-data-availability-cost",
    description: "calculates the cost of data availability in StarkNet",
    tags: ["learn"],
    network: {
      github: "https://github.com/lucadonnoh/starknet-data-availability-cost",
    },
  },
  {
    name: "starknet-erc721-protostar",
    shortName: "starknet-erc721-protostar",
    description: "ERC721 tutorial adapted to Protostar",
    tags: ["learn", "tutorial"],
    network: {
      github: "https://github.com/dpinones/starknet-erc721-protostar",
    },
  },
  {
    name: "voting-starkware",
    shortName: "voting-starkware",
    description: "This repo shows how to connect your React app to StarkNet.",
    tags: ["learn"],
    network: {
      github: "https://github.com/ironsoul0/voting-starkware",
    },
  },
  {
    name: "cairo_starter",
    shortName: "cairo_starter",
    description: "Forkable, Minimal Template for Starknet Projects.",
    tags: ["learn"],
    network: {
      github: "https://github.com/rrzhang139/cairo_starter",
    },
  },
  {
    name: "cairo-starknet",
    shortName: "cairo-starknet",
    description:
      "A curated list of Cairo/StarkNet resources, libraries, tools, and more",
    tags: ["learn"],
    network: {
      github: "https://github.com/stars/pcaversaccio/lists/cairo-starknet",
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
  {
    name: "cairo-contracts",
    shortName: "cairo-contracts",
    description:
      "OpenZeppelin Contracts written in Cairo for StarkNet, a decentralized ZK Rollup",
    tags: ["tools"],
    network: {
      github: "https://github.com/OpenZeppelin/cairo-contracts",
    },
  },
  {
    name: "nile",
    shortName: "nile",
    description: "CLI tool to develop StarkNet projects written in Cairo",
    tags: ["tools"],
    network: {
      github: "https://github.com/OpenZeppelin/nile",
    },
  },
  {
    name: "starknet.js",
    shortName: "starknet.js",
    description: "JavaScript library for StarkNet",
    tags: ["tools"],
    network: {
      github: "https://github.com/0xs34n/starknet.js",
    },
  },
  {
    name: "cairo-rs",
    shortName: "cairo-rs",
    description: "Rust implementation of the Cairo VM",
    tags: ["tools"],
    network: {
      github: "https://github.com/lambdaclass/cairo-rs",
    },
  },
  {
    name: "protostar",
    shortName: "protostar",
    description:
      "Protostar is a toolchain for developing and testing with Cairo contracts for StarkNet",
    tags: ["tools"],
    network: {
      github: "https://github.com/software-mansion/protostar",
    },
  },
  {
    name: "starknet.py",
    shortName: "starknet.py",
    description: "Python SDK for StarkNet.",
    tags: ["tools"],
    network: {
      github: "https://github.com/software-mansion/starknet.py",
    },
  },
  {
    name: "starknet-hardhat-plugin",
    shortName: "starknet-hardhat-plugin",
    description:
      "A plugin for integrating Starknet tools into Hardhat projects",
    tags: ["tools"],
    network: {
      github: "https://github.com/Shard-Labs/starknet-hardhat-plugin",
    },
  },
  {
    name: "starknet-devnet",
    shortName: "starknet-devnet",
    description: "A local testnet for Starknet",
    tags: ["tools"],
    network: {
      github: "https://github.com/Shard-Labs/starknet-devnet",
    },
  },
  {
    name: "amarna",
    shortName: "amarna",
    description:
      "Amarna is a static-analyzer and linter for the Cairo programming language",
    tags: ["tools"],
    network: {
      github: "https://github.com/crytic/amarna",
    },
  },
  {
    name: "giza",
    shortName: "giza",
    description: "A Cairo VM prover implemented using Winterfell",
    tags: ["tools"],
    network: {
      github: "https://github.com/maxgillett/giza",
    },
  },
  {
    name: "toth",
    shortName: "toth",
    description: "Cairo/Starknet bytecode analyzer & disassembler",
    tags: ["tools"],
    network: {
      github: "https://github.com/FuzzingLabs/thoth",
    },
  },
  {
    name: "onlydustxyz/generator-starknet",
    shortName: "onlydustxyz/generator-starknet",
    description:
      "This is a development platform to quickly generate, develop & deploy smart contract based applications on StarkNet",
    tags: ["tools"],
    network: {
      github: "https://github.com/onlydustxyz/generator-starknet",
    },
  },
  {
    name: "pytest-cairo",
    shortName: "pytest-cairo",
    description: "pytest-cairo: pytest support for cairo-lang and starknet",
    tags: ["tools"],
    network: {
      github: "https://github.com/TimNooren/pytest-cairo",
    },
  },
  {
    name: "cairo-base64",
    shortName: "cairo-base64",
    description: "A base64 encoding library for Cairo",
    tags: ["tools"],
    network: {
      github: "https://github.com/dhruvkelawala/cairo-base64",
    },
  },
  {
    name: "cairo-jupyter",
    shortName: "cairo-jupyter",
    description: "Jupyter kernel for Cairo smart contract language",
    tags: ["tools"],
    network: {
      github: "https://github.com/ankitchiplunkar/cairo-jupyter",
    },
  },
  {
    name: "Papyrus",
    shortName: "papyrus",
    description: "A Symbolic Execution Tool for Cairo",
    tags: ["tools"],
    network: {
      github: "https://github.com/Veridise/Papyrus",
    },
  },
  {
    name: "felucca",
    shortName: "felucca",
    description: "Felucca: Dependency Management for Cairo",
    tags: ["tools"],
    network: {
      github: "https://github.com/franalgaba/felucca",
    },
  },
  {
    name: "scaffold-stark",
    shortName: "scaffold-stark",
    description:
      "StarkNet dev stack focused on fast product iterations, inspired by scaffold-eth",
    tags: ["tools"],
    network: {
      github: "https://github.com/parketh/scaffold-stark",
    },
  },
  {
    name: "cairo-foundry",
    shortName: "cairo-foundry",
    description: "Foundry like framework for starknet contracts",
    tags: ["tools"],
    network: {
      github: "https://github.com/onlydustxyz/cairo-foundry",
    },
  },
  {
    name: "starknet-jvm",
    shortName: "starknet-jvm",
    description: "SDK for JVM languages (java, kotlin and others).",
    tags: ["tools"],
    network: {
      github:
        "https://github.com/software-mansion/starknet-jvm) - SDK for JVM languages (java, kotlin and others",
    },
  },
  {
    name: "Starkops",
    shortName: "starkops",
    description: "StarkNet Toolchain CLI written in TypeScript.",
    tags: ["tools"],
    network: {
      github: "https://github.com/0xs34n/starkops",
    },
  },
  {
    name: "starknet-web3-rpc-adapter",
    shortName: "starknet-web3-rpc-adapter",
    description:
      "Adapter application for consuming web3 messages from ie. wallets, and passing them on to starknet",
    tags: ["tools"],
    network: {
      github:
        "https://github.com/software-mansion-labs/starknet-web3-rpc-adapter",
    },
  },
  {
    name: "starknet-boilerplate",
    shortName: "starknet-boilerplate",
    description:
      "A basic starting point for starknet / cairo projects using starknetjs and nile.",
    tags: ["tools"],
    network: {
      github: "https://github.com/threepwave/starknet-boilerplate",
    },
  },
  {
    name: "ape-starknet",
    shortName: "ape-starknet",
    description: "An ape plugin for the StarkNet networks",
    tags: ["tools"],
    network: {
      github: "https://github.com/ApeWorX/ape-starknet",
    },
  },
  {
    name: "pre-commit-cairo",
    shortName: "pre-commit-cairo",
    description: "",
    tags: ["tools"],
    network: {
      github: "https://github.com/franalgaba/pre-commit-cairo",
    },
  },
  {
    name: "cairo-glyph",
    shortName: "cairo-glyph",
    description: "Proof-of-concept package manager for Cairo",
    tags: ["tools"],
    network: {
      github: "https://github.com/sambarnes/cairo-glyph",
    },
  },
  {
    name: "onnx-cairo",
    shortName: "onnx-cairo",
    description: "",
    tags: ["tools"],
    network: {
      github: "https://github.com/franalgaba/onnx-cairo",
    },
  },
  {
    name: "StarkWare",
    shortName: "starkware",
    description: "StarkTx - StarkNet transactions decoder",
    tags: ["tools"],
    network: {
      github: "https://github.com/TokenFlowInsights/StarkTx",
    },
  },
  {
    name: "prototype",
    shortName: "prototype",
    description: "a batteries-included template for Cairo projects on StarkNet",
    tags: ["tools"],
    network: {
      github: "https://github.com/sambarnes/prototype",
    },
  },
  {
    name: "starkware-remix-plugin",
    shortName: "starkware-remix-plugin",
    description:
      "This plugin aims for having smart contracts which are written in Cairo to be compilied and then deployed.",
    tags: ["tools"],
    network: {
      github: "https://github.com/hexdivision/starkware-remix-plugin",
    },
  },
  {
    name: "cairo-base64",
    shortName: "cairo-base64",
    description: "A library for base64 encoding multi character ascii felts",
    tags: ["tools"],
    network: {
      github: "https://github.com/cartridge-gg/cairo-base64",
    },
  },
  {
    name: "cairo-cli-docker",
    shortName: "cairo-cli-docker",
    description:
      "This is a repository for building and pushing Docker images required by Cairo tools.",
    tags: ["tools"],
    network: {
      github: "https://github.com/Shard-Labs/cairo-cli-docker",
    },
  },
  {
    name: "smartonnx",
    shortName: "smartonnx",
    description: "Tool to convert a ONNX model to Cairo smart contract",
    tags: ["tools"],
    network: {
      github: "https://github.com/franalgaba/smartonnx",
    },
  },
  {
    name: "protostar-vs-nile",
    shortName: "protostar-vs-nile",
    description: "comparing 2 development frameworks for starknet",
    tags: ["tools"],
    network: {
      github: "https://github.com/onlydustxyz/protostar-vs-nile",
    },
  },
  {
    name: "cairo-dap",
    shortName: "cairo-dap",
    description: "Debugger Adapter Protocol Server",
    tags: ["tools"],
    network: {
      github: "https://github.com/fracek/cairo-dap",
    },
  },
  {
    name: "cairotest",
    shortName: "cairotest",
    description: "A test suite for Cairo based on PyTest and Hypothesis",
    tags: ["tools"],
    network: {
      github: "https://github.com/bellissimogiorno/cairotest",
    },
  },
  {
    name: "ape-cairo",
    shortName: "ape-cairo",
    description: "A compiler plugin for ape for the Cairo-lang",
    tags: ["tools"],
    network: {
      github: "https://github.com/ApeWorX/ape-cairo",
    },
  },
  {
    name: "starknet-hardhat-typescript-example",
    shortName: "starknet-hardhat-typescript-example",
    description:
      "Example setup of a Starknet-Hardhat-TypeScript project. This is an empty project that you can take a fork. It's configured and works following the instructions.",
    tags: ["tools"],
    network: {
      github: "https://github.com/ccarnino/starknet-hardhat-typescript-example",
    },
  },
  {
    name: "Zem",
    shortName: "zem",
    description:
      "A deployment system for Hardhat which supports EVM and StarkNet contracts",
    tags: ["tools"],
    network: {
      github: "https://github.com/anders-torbjornsen/zem",
    },
  },
  {
    name: "starkBridgeLocal",
    shortName: "starkbridgelocal",
    description: "Local Test Environment For StarkNet L1 <> L2 Messaging",
    tags: ["tools"],
    network: {
      github: "https://github.com/dontpanicdao/starkBridgeLocal",
    },
  },
  {
    name: "encodingutils",
    shortName: "encodingutils",
    description: "Small utils for encoding/decoding",
    tags: ["tools"],
    network: {
      github: "https://github.com/beautyisourbusiness/encodingutils",
    },
  },
  {
    name: "hardhat-starknetjs",
    shortName: "hardhat-starknetjs",
    description:
      "Hardhat plugin which integrates StarkNet.js to allow deploying and interacting with StarkNet contracts from Hardhat projects",
    tags: ["tools"],
    network: {
      github: "https://github.com/playmint/hardhat-starknetjs",
    },
  },
  {
    name: "starknet-stack",
    shortName: "starknet-stack",
    description:
      "FIFO stack,install hardhat, and understand how to write tests",
    tags: ["tools"],
    network: {
      github: "https://github.com/gaetbout/starknet-stack",
    },
  },
  {
    name: "protostar-vscode-test-adapter",
    shortName: "protostar-vscode-test-adapter",
    description:
      "vscode extension to view protostar tests in the Test Explorer",
    tags: ["tools"],
    network: {
      github: "https://github.com/onlydustxyz/protostar-vscode-test-adapter",
    },
  },
  {
    name: "stark-util",
    shortName: "stark-util",
    description: "Suite of Dev Tools for Stark/Cairo",
    tags: ["tools"],
    network: {
      github: "https://github.com/dontpanicdao/stark-util",
    },
  },
  {
    name: "simps",
    shortName: "simps",
    description: "Monorepo for StarkNet Improvement Projects (SIMPs) platform",
    tags: ["tools"],
    network: {
      github:
        "https://github.com/socol-labs/simps.app) - Monorepo for StarkNet Improvement Projects (SIMPs",
    },
  },
  {
    name: "gaetbout/huffman-coding",
    shortName: "gaetbout/huffman-coding",
    description:
      "In this repository I'll try to implement the Huffman coding algorithm. This is a lossless compression algorithm.",
    tags: ["tools"],
    network: {
      github: "https://github.com/gaetbout/huffman-coding",
    },
  },
  {
    name: "stark-browniesh",
    shortName: "stark-browniesh",
    description: "Interactive CLI wrapper for nile (OZ) and starknet-devnet",
    tags: ["tools"],
    network: {
      github:
        "https://github.com/ctrlc03/stark-browniesh) - Interactive CLI wrapper for nile (OZ",
    },
  },
  {
    name: "starknet-hardhat-lab-1",
    shortName: "starknet-hardhat-lab-1",
    description: "Advanced Sample Hardhat Project",
    tags: ["tools"],
    network: {
      github: "https://github.com/timPrachasri/starknet-hardhat-lab-1",
    },
  },
  {
    name: "hardhat-starknet-compile",
    shortName: "hardhat-starknet-compile",
    description:
      "Hardhat plugin for automatically and intelligently compiling StarkNet contracts",
    tags: ["tools"],
    network: {
      github: "https://github.com/playmint/hardhat-starknet-compile",
    },
  },
  {
    name: "cairo-math-64x61",
    shortName: "cairo-math-64x61",
    description: "Fixed point 64.61 math library for Cairo / Starknet",
    tags: ["math", "tools"],
    network: {
      github: "https://github.com/influenceth/cairo-math-64x61",
    },
  },
  {
    name: "cairo-integer-types",
    shortName: "cairo-integer-types",
    description:
      "A library for bitwise integer types (e.g. int64 or uint32) in Cairo, with a test suite",
    tags: ["math", "tools"],
    network: {
      github:
        "https://github.com/bellissimogiorno/cairo-integer-types) - A library for bitwise integer types (e.g. int64 or uint32",
    },
  },
  {
    name: "cairo-math",
    shortName: "cairo-math",
    description: "Smart contract Cairo library for advanced fixed-point math",
    tags: ["math", "tools"],
    network: {
      github: "https://github.com/pedrobeirao/cairo-math",
    },
  },
  {
    name: "graphiro",
    shortName: "graphiro",
    description: "A graph library built with Cairo",
    tags: ["math", "tools"],
    network: {
      github: "https://github.com/lucadonnoh/graphiro",
    },
  },
  {
    name: "xoroshiro-cairo",
    shortName: "xoroshiro-cairo",
    description:
      "A xoroshiro128** pseudorandom number generator implementation in Cairo",
    tags: ["math", "tools"],
    network: {
      github: "https://github.com/milancermak/xoroshiro-cairo",
    },
  },
  {
    name: "cairo-graphs",
    shortName: "cairo-graphs",
    description: "A graph library in Cairo",
    tags: ["math", "tools"],
    network: {
      github: "https://github.com/msaug/cairo-graphs",
    },
  },
  {
    name: "ratios_cairo",
    shortName: "ratios_cairo",
    description:
      "Repository that defines a cairo struct called ratio that represents a rational number, x/y where x and y are in z mod p. Defines several operations between ratios.",
    tags: ["math", "tools"],
    network: {
      github: "https://github.com/andrepn/ratios_cairo",
    },
  },
  {
    name: "Cairo-SafeMath",
    shortName: "cairo-safemath",
    description: "No description, website, or topics provided.",
    tags: ["math", "tools"],
    network: {
      github: "https://github.com/NethermindEth/Cairo-SafeMath",
    },
  },
  {
    name: "cairo-wadray",
    shortName: "cairo-wadray",
    description: "A felt-based WadRay library for Cairo and Starknet",
    tags: ["math", "tools"],
    network: {
      github: "https://github.com/lindy-labs/cairo-wadray",
    },
  },
  {
    name: "fixed_point",
    shortName: "fixed_point",
    description: "fixed point math in cairo",
    tags: ["math", "tools"],
    network: {
      github: "https://github.com/0xtonysprocket/fixed_point",
    },
  },
  {
    name: "ff-cairo",
    shortName: "ff-cairo",
    description: "An Cairo implementation of finite field operations",
    tags: ["math", "tools"],
    network: {
      github: "https://github.com/EulerSmile/ff-cairo",
    },
  },
  {
    name: "fangcheng",
    shortName: "fangcheng",
    description: "Cairo solver of systems of linear equations and matrix utils",
    tags: ["math", "tools"],
    network: {
      github: "https://github.com/beautyisourbusiness/fangcheng",
    },
  },
  {
    name: "specialfunctions_cairo",
    shortName: "specialfunctions_cairo",
    description: "Special functions of mathematical physics for Cairo-lang",
    tags: ["math", "tools"],
    network: {
      github: "https://github.com/abstractnull/specialfunctions_cairo",
    },
  },
  {
    name: "shortest-path-faster-cairo",
    shortName: "shortest-path-faster-cairo",
    description: "Cairo implementation of the Shortest Path Faster algorithm",
    tags: ["math", "tools"],
    network: {
      github: "https://github.com/AdeptusDigitales/shortest-path-faster-cairo",
    },
  },
  {
    name: "multi-precision_cairo",
    shortName: "multi-precision_cairo",
    description:
      "Math of 384 bit numbers in pure cairo. Geared towards being used in ecc",
    tags: ["math", "tools"],
    network: {
      github: "https://github.com/0xNonCents/multi-precision_cairo",
    },
  },
  {
    name: "cairo-rand-64x61",
    shortName: "cairo-rand-64x61",
    description:
      "A pseudorandom and procedural generation library using 64.61 fixed point math for Cairo",
    tags: ["math", "tools"],
    network: {
      github: "https://github.com/influenceth/cairo-rand-64x61",
    },
  },
  {
    name: "rpow",
    shortName: "rpow",
    description:
      "Cairo Implementation of fast exponentiation algorithm by MakerDAO",
    tags: ["math", "tools"],
    network: {
      github: "https://github.com/EvolveArt/rpow",
    },
  },
  {
    name: "DecimalToBinary",
    shortName: "decimaltobinary",
    description: "Starknet smart contract converting decimal to binary",
    tags: ["math", "tools"],
    network: {
      github: "https://github.com/smchala/DecimalToBinary",
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
    name: "StarkNet Edu Newsletter",
    shortName: "starknet-edu-newsletter",
    description: "Official weekly edu newsletter",
    tags: ["newsletter"],
    network: {
      website: "https://starknet.substack.com/",
    },
  },
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
  {
    name: "Official latest updates about StarkNet",
    shortName: "official-latest-updates",
    description: "Official latest updates about StarkNet from StarkWare",
    tags: ["newsletter"],
    network: {
      website: "https://starknet.io/latest-updates/",
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
