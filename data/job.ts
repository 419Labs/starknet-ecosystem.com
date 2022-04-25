import type { Job } from "../src/models/job";

const allJobs: Array<Job> = [
  {
    key: "1",
    title: "Senior Software Developer - Solidity / Cairo",
    companyId: 2,
    tags: ["Cairo", "Solidity", "Web3"],
    location: "Remote",
    remote: true,
    description:
      "ZKX is developing a decentralized derivatives protocol on Starknet, the upcoming ZK-rollup by Starkware. Offering an innovative permissionless protocol for perpetual swaps, ZKX will bring unique complex trading strategies to a simplified and fun trading environment. We're supported by well-known venture funds and are currently coming out of stealth. This is a remote position with travel opportunities and the chance to work on an innovative DeFi project. Join us on the journey to Web3!\n\n" +
      "Responsibilities:\n" +
      "- Design and development of Solidity and Cairo Smart contracts (Ethereum Layer-1, StarkWare Layer-2)\n" +
      "- Architecture and design of smart-contracts ecosystem\n" +
      "- Integration with internal and 3rd-party services",
    requirements:
      "- Commercial experience in Blockchain development (including Ethereum)\n" +
      "- Commercial experience in developing complex applications (before you became a blockchain engineer)\n" +
      "- Commercial experience in developing decentralized applications (would be a plus)\n" +
      "- Experience in agile/scrum methodology\n" +
      "- Understanding of the engineering principles of developing robust applications, practical application of methodologies, algorithms\n" +
      "- Understanding of financial markets and derivatives will be valued.",
    offer:
      "- The ability to work remotely ALWAYS, not just now (we are remote-first company)\n" +
      "- Professional growth opportunities and career prospects\n" +
      "- Salary plus incentives package to align the team with the project's success\n\n" +
      "We offer a unique opportunity to build an international project in an international team, influence the process, be heard, and really see the results of your work.",
    applyLink: "https://apply.workable.com/zkx/?lng=en",
    createdOn: new Date("2022-04-25"),
  },
  {
    key: "2",
    title: "Senior Smart Contract Engineer for Starknet",
    companyId: 5,
    tags: ["Cairo", "Solidity", "Web3"],
    location: "Remote",
    remote: true,
    aboutUs:
      "We are the Starknet Engineering Core Unit. We are a small team of 3 members (one Facilitator, 2 Engineers) and&nbsp;we are financed 50/50 by MakerDAO and Starknet.&nbsp;Our Core Unit was ratified in September 2021. Our ultimate mandate is to rebuild Maker onto Starknet. During phase one we built a simple bridge between Maker and Starknet. Phase II will start in January and will implement the wormhole design aiming at making DAI the easiest stablecoin to move around the ecosystem.\n\n" +
      "About Maker and Starknet / Starkware\n" +
      "Maker is one of the biggest and most established DeFi protocol with ~$20Bn value locked. Starknet is the zk-rollup by Starkware that just launched the alpha of its Mainnet. Starkware is a $2bn company and their previous scalability solution (Starkex) is used by dYdX, Deversifi, ImmutableX, and Sorare, among others.",
    description:
      "Challenges for the first 6 months\n" +
      "We will be implementing the Starknet version of the DAI wormhole. This will involve:\n" +
      "- Develop the wormhole Oracle on Starknet (providing mint attestation)\n" +
      "- Update our L1 and L2 bridge contracts with wormhole specific functions\n" +
      "- Develop the Maker core module other related Maker contracts\n" +
      "- Build unit tests and end-to-end tests working across L1, Starknet, and other rollup.\n\n" +
      "Challenges for the 6-12 months period\n" +
      "We will be implementing multi-collateral DAI on Starknet. This will involve to:\n" +
      "- Develop the liquidation module.\n" +
      "- Develop the price oracle module.\n" +
      "- Develop the emergency shutdown module\n" +
      "- Develop the system stabilizer module",
    requirements:
      "- Contribute to our design discussion and implementations.\n" +
      "- Find pragmatic solutions to hard technical challenges.\n" +
      "- Understand trust assumptions and be able to&nbsp;identify attack vectors\n" +
      "- Technical leadership with strong smart contract development background\n\n" +
      "Our ideal candidate:\n" +
      "- has an extensive experience in back-end software engineering\n" +
      "- has experience building on Layer-2 scaling solutions, and its associated challenges (bridges, oracles, data availability, finality etc...)\n" +
      "- has experience developing Solidity Smart Contract and protocols\n" +
      "- Has developed smart contracts that were pushed onto Mainnet\n" +
      "- is a team player, has mentored Engineers\n" +
      "- is eager to learn Cairo (Starknet language)\n" +
      "- Bonus track: experience with zk-proofs.",
    offer:
      "- We are backed up by both Starkware and MakerDAO\n" +
      "- This is a full time position\n" +
      "- Competitive salary in USD (we can also pay in DAI)\n" +
      "- Attractive Maker compensation bonus.\n" +
      "This is a 100% remote position. We are open to contributors in the European timezone or in the US East-Coast time zone.",
    applyLink:
      "https://makerdao.recruitee.com/o/senior-smart-contract-engineer-for-starknet-100-remote",
    createdOn: new Date("2022-04-25"),
  },
  {
    key: "3",
    title: "Blockchain/Full Stack Devs",
    companyId: 6,
    tags: [],
    location: "Toronto, Canada",
    remote: true,
    description:
      "PlayOasis is an NFT marketplace powered by StarkNet, where our clients offer and list nfts with near zero gas fees. We are looking for a software engineer to work on frontend, backend and smart contracts.\n\n" +
      "To apply, please send a mail to jobs@playoasis.xyz.",
    requirements: "Coding knowledge and experience is required",
    createdOn: new Date("2022-03-20"),
  },
];

export default allJobs;
