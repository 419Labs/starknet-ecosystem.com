import type { Learn } from "../src/models/learn";

export const learn: Learn = {
  categories: [
    {
      name: "StarkNet",
      description:
        "StarkNet is a permissionless decentralized ZK-Rollup operating as an L2 network over Ethereum, where any dApp can achieve unlimited scale for its computation, without compromising Ethereum’s composability and security.",
      links: [
        { label: "StarkNet Official Doc", url: "https://starknet.io/docs/" },
      ],
    },
    {
      name: "Cairo",
      description:
        "Cairo is a programming language for writing provable programs, where one party can prove to another that a certain computation was executed correctly. Cairo and similar proof systems can be used to provide scalability to blockchains.",
      links: [
        {
          label: "Cairo Official Doc",
          url: "https://www.cairo-lang.org/docs/",
        },
      ],
    },
  ],
};
