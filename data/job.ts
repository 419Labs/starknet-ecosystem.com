/* eslint-disable sonarjs/no-duplicate-string */
import type { Job } from "../src/models/job";

const allJobs: Array<Job> = [
  {
    key: "1",
    title: "Product Lead - Argent X",
    projectId: "8df27359-f05d-439b-8592-ca1b61cf049c",
    tags: ["Product", "Argent X"],
    location: "Remote (Europe)",
    remote: true,
    description:
      "Own Argent X’s development and redefine what’s possible in crypto, pushing the boundaries of security and ease of use.\n" +
      "\n" +
      "Argent X is an open source browser wallet. It's the first wallet for Starknet, a breakthrough network that offers unlimited scale without compromising on security.\n" +
      "\n" +
      "The aim is to move the needle for the adoption of self-custody. Argent X is in alpha, and Starknet is still on testnet, but it already has 60,000 users. Transaction volume is also exploding.\n" +
      "\n" +
      "So join us on Day 1 and shape the future of money and the internet.",
    responsibilities:
      "What you’ll be doing\n\n" +
      "- Oversee Argent X’s development from ideation to execution. With a constant focus on delighting users.\n" +
      "- Collaborate extensively with StarkWare, the team behind Starknet, as well as some of the world’s most exciting Dapp developers and founders.\n" +
      "- Work alongside Argent’s founders, giving clear product requirements and roadmaps to our engineers and designers.\n" +
      "- Define product goals, track performance and remove roadblocks.\n" +
      "If you’re successful in the role you’ll have played a pivotal part in bringing the benefits of crypto to tens of millions more people.",
    requirements:
      "- 3 years experience shipping world class products\n" +
      "- Deeply passionate about user experience.\n" +
      "- Professional crypto experience is NOT needed, but you do need to be a Dapp user that's familiar with browser, hardware and mobile wallets. Ideally you'd also be heavily immersed in the ecosystem, following developments on scaling and trying new projects.\n" +
      "- Strong expertise with analytics to understand user journeys and usage\n" +
      "- Experience managing sprints, prioritising development and coordinating releases\n" +
      "- Entrepreneurial, spotting opportunities for our growth",
    offer:
      "- Work remotely anywhere in Europe (but Europe only). No commute. Lots of flexibility. Plenty of time to care for your kids or cats.\n" +
      "- Equity in a high growth startup backed by the investors of Spotify and Slack.\n" +
      "- Autonomy: you decide how to achieve your best work.\n" +
      "- Trips across Europe: for one week every three months we collaborate in person, explore new solutions and have fun. So far we’ve stayed in Nice, Toulouse, Brussels, Lisbon and Barcelona. We'll resume these when safe following COVID.\n" +
      "- Equipment: pick the tech setup of your choice.\n" +
      "- Parental leave: generous package for new parents.\n" +
      "- Build a new industry: help define the future of the web.",
    createdOn: new Date("2022-04-20"),
    applyLink: "https://apply.workable.com/argenthq/j/56600045EE/",
  },
  {
    key: "2",
    title: "Senior Smart Contract Engineer for Starknet",
    projectId: "dce4260c-807e-48d0-b57c-d8488dbe8889",
    tags: ["Cairo", "Solidity", "Web3", "Starknet"],
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
      "- Attractive Maker compensation bonus.\n\n" +
      "This is a 100% remote position. We are open to contributors in the European timezone or in the US East-Coast time zone.",
    applyLink:
      "https://makerdao.recruitee.com/o/senior-smart-contract-engineer-for-starknet-100-remote",
    createdOn: new Date("2022-01-25"),
  },
  {
    key: "3",
    title: "Blockchain/Full Stack Devs",
    projectId: "5299693a-a684-4332-a3cc-8b8fca48b4ce",
    tags: [],
    location: "Toronto, Canada",
    remote: true,
    description:
      "PlayOasis is an NFT marketplace powered by Starknet, where our clients offer and list nfts with near zero gas fees. We are looking for a software engineer to work on frontend, backend and smart contracts.",
    requirements: "Coding knowledge and experience is required",
    createdOn: new Date("2022-03-20"),
    applyLink: "mailto:jobs@playoasis.xyz",
  },
  {
    key: "4",
    title: "Senior Software Engineer",
    projectId: "efde17bc-1077-4d74-a2d3-77d8cdc7ac8a",
    tags: ["typescript", "docker", "serverless"],
    location: "Remote",
    remote: true,
    description:
      "We are looking for a full-stack developer to join our team and help build out the project’s infrastructure. At its core, you will be responsible for building some of the key components of the protocol including front-end as well as back-end smart contract development. The position will report into our Tech Lead and will work closely with other Software Engineers, the Product Manager, as well as the Business team.",
    requirements:
      "- 0-5 years of work experience as a developer (fresh grads welcome!)\n" +
      "- Interest in blockchain, DeFi and Web 3, prior knowledge preferred but not required\n" +
      "Languages\n" +
      "- Must: TypeScript (with Node.js) \t\n" +
      "- Bonus: Solidity, Go\n" +
      "Tools & Frameworks:\n" +
      "- Must: Docker, Serverless Computing (Cloudflare Workers in particular)\n" +
      "- Bonus: CI/CD\n" +
      "- Flexible to work +8 GMT timezone\n",
    offer:
      "- Flexible working arrangements (must reside in HK most of the time)\n" +
      "- Team of young, energetic, and international people\n" +
      "- Spacious office located at the heart of Tsim Sha Tsui\n" +
      "- Competitive salary + team tokens\n",
    createdOn: new Date("2022-04-01"),
    applyLink:
      "https://docs.google.com/document/d/1HC_9pH7YoQZ0lc6KIJ0TRXvs4yA010Qt_Hn-H-0DUEw/edit",
  },
  {
    key: "5",
    title: "UI/UX Designer",
    projectId: "5368a3f6-b8f0-44e3-ba88-9b1d64adee23",
    tags: ["ui", "ux", "design"],
    location: "Remote",
    remote: true,
    description:
      "- Collaborate with key product stakeholders regularly to define requirements and prioritize key product features.\n" +
      "- Collaborate with developers, PMs, and marketing to define and design the best possible experience for the user.\n" +
      "- Communicate design ideas to stakeholders, developers, and PMs through task flow diagrams, user journeys/scenarios, as well as low and high-fidelity wireframes and mockups on figma.\n" +
      "- Present and defend designs and key milestone deliverables to appropriate teams.\n" +
      "- Working with development teams to execute best design solutions within technology constraints.\n" +
      "- Conduct user research and evaluate feedback.\n" +
      "- Determine user needs by conducting user interviews with real users.\n" +
      "- Create and run ideation workshops in support of new product explorations.\n" +
      "- Create rapid and iterative wireframes for prototyping for various ideas and concepts.\n" +
      "- Facilitate usability testing and evaluate user feedback to improve the concept or existing products further.\n" +
      "- Evaluate the user experience design of existing design concepts and on-device prototypes, and communicate design enhancements.\n" +
      "- Research interaction design trends.\n" +
      "- Research technology trends.\n" +
      "- Operating prototyping, wireframing as well as designing the whole process end-to-end.",
    requirements:
      "- Proficiency with User Experience (UX) processes, interaction and User Interface Design (UI).\n" +
      "- Strong Visual Design skills. Understanding of Front-end development is a plus.\n" +
      "- Understanding of digital platform usability principles with a portfolio of projects to demonstrate it.\n" +
      "- Solid written and verbal communication skills with the ability to present a strong rationale for design decisions.\n" +
      "- Excellent time management and organizational skills.\n" +
      "- Accuracy and attention to detail. An understanding of the latest design trends.\n" +
      "- Experience working in an Agile Team (preferably SCRUM) will be advantageous.\n" +
      "- Previous experience working in web3 is a plus.",
    offer:
      "- Fully remote\n" +
      "- Competitive salary\n" +
      "- Sharpen your skillsets from other senior high-performing individuals",
    createdOn: new Date("2022-03-01"),
    applyLink:
      "https://zkpad.notion.site/UI-UX-Designer-55ce7ece2d944b42abf6abda9633f454",
  },
  {
    key: "8",
    title: "Front-End Dev",
    projectId: "74b82528-dea9-44fe-824b-220825334699",
    tags: ["frontend"],
    location: "San Francisco",
    remote: true,
    description:
      "Help us build the Decentralized Metaverse based on ENS domains and User’s On-Chain Activity Data by working on Φ.\n" +
      "\n" +
      "We are the founding team of Φ, a decentralized & Community-owned Metaverse on Starknet, a ZK-rollup technology built on the Ethereum. Φ generates Metaverse lands by tying your ENS domain to the coordinate point of the land. And users can Claim various objects based on their on-chain activity data and place them anywhere they want on their land. In this way, all of the people’s on-chain activities will be reflected onto the Metaverse, which can embody the “Crypto is Metaverse”.\n" +
      "\n" +
      "We are a small team of 3 members. Also, we won the Prize from ENS at NFTHACK 2022\n" +
      "(https://showcase.ethglobal.com/nfthack2022/phi-land).",
    responsibilities:
      "– Respect and Collaborate with team members.\n" +
      "– Communicate regularly and quickly with the team (using weekly reports and the Scrum methodology) to check status and progress.\n" +
      "– Create website layouts/user interfaces using standard HTML/CSS techniques.\n" +
      "– Development of libraries (e.g. ensjs) for integration with internal and third-party services\n" +
      "– Using unit tests and integration tests to deliver high-quality code",
    requirements:
      "– Have a strong passion and curiosity about the future of crypto and the technical implementation of blockchain.\n" +
      "– Be passionate about acquiring new knowledge and skills, such as Cairo(Starknet language)\n" +
      "– More than 5 years of Experience in modern JS-based frontend frameworks (React preferred).\n" +
      "– Commercial experience in developing complex applications.\n" +
      "– Experienced in successfully representing graphs and objects in a browser.",
    createdOn: new Date("2022-02-06"),
    applyLink:
      "https://phi-xyz.notion.site/FrontEnd-Dev-dfd92611212f4c1fb232d489eaf657ee",
  },
  {
    key: "9",
    title: "Back-End Dev",
    projectId: "74b82528-dea9-44fe-824b-220825334699",
    tags: ["backend"],
    location: "San Francisco",
    remote: true,
    description:
      "Help us build the Decentralized Metaverse based on ENS domains and User’s On-Chain Activity Data by working on Φ.\n" +
      "\n" +
      "We are the founding team of Φ, a decentralized & Community-owned Metaverse on Starknet, a ZK-rollup technology built on the Ethereum. Φ generates Metaverse lands by tying your ENS domain to the coordinate point of the land. And users can Claim various objects based on their on-chain activity data and place them anywhere they want on their land. In this way, all of the people’s on-chain activities will be reflected onto the Metaverse, which can embody the “Crypto is Metaverse”.\n" +
      "\n" +
      "We are a small team of 3 members. Also, we won the Prize from ENS at NFTHACK 2022(https://showcase.ethglobal.com/nfthack2022/phi-land).",
    responsibilities:
      "– Respect and Collaborate with team members.\n" +
      "– Communicate regularly and quickly with the team (using weekly reports and the Scrum methodology) to check status and progress.\n" +
      "– Design and development of smart contracts in Solidity and Cairo (Ethereum Layer-1 and Starknet ZK-Rollup)\n" +
      "– Design and develop API’s\n" +
      "– Collecting on-chain data",
    requirements:
      "– Have a strong passion and curiosity about the future of crypto and the technical implementation of blockchain.\n" +
      "– Be passionate about acquiring new knowledge and skills, such as Cairo(Starknet language)\n" +
      "– 5+ years of Experience in AWS & Node.js/Python/Rust/Go\n" +
      "– 2+ years of Experience in Ethereum/EVM blockchain\n" +
      "– Experienced in commercial level database design",
    createdOn: new Date("2022-02-01"),
    applyLink:
      "https://phi-xyz.notion.site/BackEnd-Dev-ffe6b8b7ae4c401bb4d1be1fd0520765",
  },
  {
    key: "10",
    title: "JavaScript/Typescript Engineer",
    projectId: "8df27359-f05d-439b-8592-ca1b61cf049c",
    tags: ["javascript"],
    location: "Remote",
    remote: true,
    description:
      "Help us build the future of Ethereum scaling by working on Argent X.\n" +
      "\n" +
      "Argent X is the first wallet for Starknet, a zk-rollup technology built on the Ethereum blockchain, and it comes as a Browser Extension written in Javascript/Typescript.\n" +
      "\n" +
      "With a focus on world class UX and security, you’ll take ownership of the entire development lifecycle and quickly ship features in an agile environment.\n" +
      "\n" +
      "As part of the team, you will also help define and build starknet.js, an open source library helping applications interact with the Starknet protocol.\n" +
      "\n" +
      "It’s a particularly exciting time to join us as we launch on Layer 2 and prepare to bring the benefits of crypto to millions more people. We’re fortunate to be backed by Paradigm, Index Ventures and Creandum and have been building since 2017.",
    requirements:
      "– 3+ years experience working with JavaScript/Typescript\n" +
      "– Ethereum/EVM blockchain experience\n" +
      "– Strong computer science and security fundamentals\n" +
      "– Focused on delivering great UX\n" +
      "\n" +
      "You need to have expert knowledge of:\n" +
      "– Frontend: React (hooks), CSS/HTML\n" +
      "– Using unit tests and integration tests to deliver high quality code\n" +
      "\n" +
      "Major plus if you have experience with:\n" +
      "– starknet.js/ethers.js\n" +
      "– Browser Extensions\n" +
      "– Cairo\n" +
      "\n" +
      "We’re also looking for experience with:\n" +
      "– Open source software and contribution\n" +
      "– Node.js",
    createdOn: new Date("2022-01-26"),
    applyLink: "https://apply.workable.com/argenthq/j/E6F396D02C/apply/",
  },
  {
    key: "11",
    title: "JavaScript/Typescript Developer",
    projectId: "8d1d3c38-0abb-4fd3-8333-2b3eae34c5b2",
    tags: ["javascript", "typescript", "web3.js", "ether.js"],
    location: "Remote",
    remote: true,
    description:
      "You will be a developer within the Starknet team, so some of the responsibilities on this project include: \n" +
      "\n" +
      "- Analyzing, designing, and developing software features and enhancements\n" +
      "- Participating in software design meetings and analyzing user needs to determine technical requirements\n" +
      "- Providing solid technical solutions to complex issues whilst helping us deliver the best user experience and improve our product\n" +
      "- Resolving the challenging technical and application problems of the project",
    requirements:
      "To qualify for the role, you should have:\n" +
      "- 2+ years of professional experience working with JavaScript/TypeScript\n" +
      "- Strong organizational skills\n" +
      "- Excellent verbal communication skills\n" +
      "\n" +
      "Added bonus if you have:\n" +
      "\n" +
      "- Familiarity with Blockchain JavaScript libraries (web3.js or ether.js)\n" +
      "- Experience in developing npm packages and JS tools",
    createdOn: new Date("2022-03-26"),
    applyLink: "https://shardlabs.bamboohr.com/jobs/view.php?id=31",
  },
  {
    key: "12",
    title: "Cairo Developer",
    projectId: "cfe632a1-18f1-49d0-af4b-f6a08c4620c6",
    tags: ["Cairo", "Solidity", "Vyper"],
    location: "Remote",
    remote: true,
    description:
      "Everyone knows that solving scaling is one of the most critical topics in Ethereum today.\n" +
      "To that end, the Nubia team at Nethermind has been working with StarkWare on Warp, a Solidity/Vyper -> Cairo transpiler.\n" +
      "Cairo is a great language, but many existing protocols cannot switch to a new language due to time/money/talent constraints.\n" +
      "To help solve the lack of talent, we are hiring for software engineers interested in Cairo.\n" +
      "\n" +
      "At the Nubia team, you'll get to work with some of the most talented people in the Ethereum ecosystem (StarkWare), work at the bleeding edge of L2 technology, help solve one of Ethereum's most significant problems (scaling)\n" +
      "All while learning things you probably wouldn't discover anywhere else.",
    requirements:
      "Essential:\n" +
      "- Experience writing production in any low-level programming language\n" +
      "- Interest in Ethereum or blockchain in general, either on a commercial or personal basis is a must\n" +
      "- Experience deploying and interacting with smart contacts on Ethereum, either on a commercial or personal basis is a must\n" +
      "\n" +
      "Nice to have:\n" +
      "- Knowledge of the EVM\n" +
      "- Understanding of how the Ethereum protocol works\n" +
      "- Knowledge of Solidity/Vyper and their related tools\n" +
      "- High-level understanding of ZK-SNARKS & STARKS",
    createdOn: new Date("2022-05-02"),
    applyLink: "https://boards.eu.greenhouse.io/nethermind/jobs/4010880101",
  },
  {
    key: "13",
    title: "Cairo Auditor",
    projectId: "cfe632a1-18f1-49d0-af4b-f6a08c4620c6",
    tags: ["Cairo", "Solidity", "JavaScript", "TypeScript", "Python"],
    location: "Remote",
    remote: true,
    description:
      "We’re looking for developers with smart contract auditing experience/knowledge to join our newly fledged Cairo smart contract Auditing team.\n" +
      "You’ll get the opportunity to work at the bleeding edge of blockchain technology by auditing Starknet protocols and building cutting-edge security-related tooling for Cairo, Starknet’s native smart contract language.\n" +
      "Cairo is a great language, but many existing protocols cannot switch to a new language due to time/money/talent constraints.\n" +
      "\n" +
      "Responsibilities\n" +
      "- Work directly with the leading protocols in the Starknet ecosystem to review their code and help secure their protocols\n" +
      "- Design and implement solutions & tooling for difficult engineering and security analysis problems\n" +
      "- Collaborate with teammates to maintain and continually improve our existing Cairo security tools using modern software engineering practices\n" +
      "- Develop new Cairo/Starknet security tools",
    requirements:
      "- 1+ year of experience in Solidity security analysis\n" +
      "- Solid understanding of the Ethereum Virtual Machine and Yellow Paper\n" +
      "- Fluency in Solidity development and the deployment of smart contracts\n" +
      "- High-level understanding of common smart contract vulnerabilities\n" +
      "Strong debugging skills and/or experience in reverse engineering\n" +
      "\n" +
      "Nice to have:\n" +
      "- Multiple years of prior experience in traditional cybersecurity (before transitioning to the blockchain space)\n" +
      "- Experience in Python, JavaScript, and TypeScript.",
    createdOn: new Date("2022-05-02"),
    applyLink: "https://boards.eu.greenhouse.io/nethermind/jobs/4026450101",
  },
  {
    key: "14",
    title: "Generalist Developer",
    projectId: "19c738b6-2b7e-4826-bb5d-15f2c4330001",
    tags: ["Cairo", "Solidity", "Starknet"],
    location: "San Francisco or Remote",
    remote: true,
    description:
      "Stork Oracle is a new oracle in the Starknet ecosystem. We are a small, San Francisco based team. " +
      "Stork is supported by Dexterity Capital, one of the most successful and experienced algorithmic trading firms in the crypto world.\n\n" +
      "If you’re on the fence about your fit for the role, take the risk and drop us a line. Worst case, you’ll make some new friends.\n" +
      "\n" +
      "Responsibilities\n" +
      "- Building full-stack blockchain applications on Starknet\n" +
      "- Integrating with exchanges, data providers, and other APIs\n" +
      "- Contributing to whitepapers and solving complex challenges related to decentralization, security, data reliability, and more\n",

    requirements:
      "A successful candidate will have a strong bias for “getting things done” (send us links to past projects!). . There is no single “stack” experience required for this role, however, familiarity with the blockchain is required, and a strong academic or technical background will go a long way.\n\n" +
      "- Strong technical and/or academic understanding of concepts of general computing, blockchain, Ethereum, and EVM\n" +
      "- Experience with common languages used in the Web3 and DeFi stacks\n" +
      "- Examples of shipped “full-stack” Web3 applications, Solidity Contracts, Cairo projects, etc\n" +
      "- Amazing: experience with Cairo\n\n" +
      "We Offer\n" +
      "- You’ll get to work with other smart, growth-minded individuals who’ve built successful startups before\n" +
      "- Competitive Compensation (base pay + team tokens)\n" +
      "- If you’re in SF – an office, happy hours, and team events. For remote folks, we’ll make it fun.\n" +
      "- Education stipend and conference travel",
    createdOn: new Date("2022-05-08"),
    applyLink: "info@stork.network",
  },
  {
    key: "17",
    title: "Cairo Developer",
    projectId: "b19c74a5-6434-42dc-9329-98ca1ead255d",
    tags: ["Cairo", "Solidity", "Starknet", "AMM"],
    location: "Remote",
    remote: true,
    description:
      "SithSwap is developing an advanced stableswap AMM on Starknet, a permissionless decentralized ZK-Rollup operating as an L2 network over Ethereum, enabling dApps to achieve unlimited scale for its computation – without compromising Ethereum's composability and security.\n" +
      "\n" +
      "For this endeavour, SithSwap is looking to onboard a talented Cairo developer, remotely and in any capacity (ranging from task-based to full-time).\n" +
      "\n" +
      "TODO:\n" +
      "As a Cairo Developer, you will play a leading role in porting over an existing reference Solidity implementation of the SithSwap protocol (Core + Rewards contracts) over to Starknet in native Cairo language.\n\n" +
      "More specifically, in coordination with the team, you will be responsible for designing and implementing the Cairo counterparts of any provided Solidity smart contracts, suggesting modifications and adaptations as needed for successfully porting over the codebase to the latest Cairo release, starting with the Core AMM smart contracts.\n\n" +
      "To do the above, you will be relying on the most advanced tooling for Starknet yet released, using either TypeScript or Python to write your off-chain backend code.",
    requirements:
      "- 2+ years experience developing top-tier smart contracts in an EVM mainnet environment\n" +
      "- Great understanding and daily use of Cairo (up to the latest release/features)\n" +
      "- Good understanding of Solidity/Yul and the EVM\n" +
      "- Strong working knowledge of at least 1 advanced Starknet development framework (e.g. Ape, Protostar, Nile, Hardhat)\n" +
      "- A GitHub profile (doesn't need to be public, as long as we can inspect it)" +
      "\n" +
      "Nice to have:\n" +
      "- Experience with Uniswap V2 and Curve Finance contracts architectures and APIs\n" +
      "- Experience with common smart contracts patterns such as upgradability, proxy wallets, meta-transactions, and counterfactual deployments\n" +
      "- Strong knowledge of Starknet as-a-platform, its underlying architecture and tech stack\n" +
      "- Strong working knowledge of both Python and TypeScript\n" +
      "- Good knowledge of historical smart contract exploits and vulnerabilities (across all chains)\n" +
      "- Ability to write code that is clean, easy to audit, yet efficient in terms of deployment, execution and maintenance\n" +
      "- Good knowledge of the L2 ecosystem at-large, with a particular emphasis on Validium Rollups\n" +
      "- CET/CEST working hours",
    createdOn: new Date("2022-05-16"),
    applyLink: "https://apply.workable.com/sithswap/j/C20203825C/",
  },
  {
    key: "20",
    title: "Senior Full Stack Engineer",
    projectId: "30c7c562-75de-404d-bc95-570118d00653",
    tags: ["React", "Typescript", "Python", "Docker", "Cairo"],
    location: "New York City or Remote",
    remote: true,
    description:
      "Empiric Network is the zk-native oracle, bringing the principles of DeFi to data infrastructure: decentralization, transparency and composability.\n" +
      "Empiric is the leading oracle on Starknet, powered by high-quality data from the biggest market makers and exchanges, such as Alameda, CMT, Flow Traders, FTX, Gemini and Jane Street.\n" +
      "Our offer:\n" +
      "- Be at the cutting edge of web3 and help build critical infrastructure for the future of Ethereum\n" +
      "- Learn together with a world-class team, and our friends at Starkware and within the Starknet ecosystem\n" +
      "- A fast-paced, no bullshit work environment that has high expectations and helps you achieve them\n" +
      "- Work on a project that is growing extremely quickly and has clear product-market fit in an existing market — while also pursuing moonshot opportunities to re-define trustless data fetching\n" +
      "- Above-market compensation and meaningful equity",
    requirements:
      "We don't think in terms of hard requirements. Rather, here is what you'd be helping us do - if you think you're up for it, we'd love to hear from you!\n" +
      "- Build out our technology infrastructure, from our core smart contracts (Cairo) to our SDKs (Python, Docker)\n" +
      "- Help define the overall architecture of our solution and set up development processes that enable us to continue to iterate rapidly\n" +
      "- Think from first principles to tackle challenges at the cutting edge of cryptography, smart contracts and data - prioritizing safety and robustness\n" +
      "- Hire the brightest and most ambitious technical talent to come work with you",
    createdOn: new Date("2022-07-16"),
    applyLink:
      "mailto:hello@42labs.xyz?body=Hi%20Empiric%20Team%2C%0A%0AI%27d%20like%20to%20join%20your%20team%21",
  },
  {
    key: "22",
    title: "Graphic Designer / Visual Artist",
    projectId: "bcb424ed-5f3d-4bb8-8474-fb7bb11ed484",
    tags: ["Photoshop", "Illustrator"],
    location: "Remote",
    remote: true,
    description:
      "ZKX is the first permissionless protocol for derivatives built on Starknet. We’re building a decentralized exchange that lets users trade derivatives using reward mechanisms, liquidity provisioning, and simplified access to complex trading strategies.\n" +
      "\n" +
      "The role: \n" +
      "The mission for the Visual Artist is to lead the protocol’s visual identity and be the leading creative mind to structure its visual experience for users. You’ll take ownership of all design needs and will help manage external partners or coordinate with community members for additional resources. Ideally, you’re someone who’s excited about branding, memes, NFTs and more. You probably know about DeFi and crypto, and are looking to learn more about it.\n" +
      "\n" +
      "Responsibilities: \n" +
      "- Deliver creative visual assets, static and motion design that brings the brand to life.\n" +
      "- Conceptualize and develop all brand marketing assets, including social campaigns, email, paid ad campaigns, web graphics, animated videos per brand guidelines, etc.\n" +
      "- Own and lead creative projects from ideation through to production.\n" +
      "- Translate brand voice into graphics, including illustrations, logos, marketing materials, and animations across platforms.\n" +
      "- Follow established brand guidelines and deliver creative projects on time across multiple stakeholders.\n" +
      "- Managing multiple projects while ensuring deliverables in a set timeline.\n" +
      "- Constantly bring new ideas to the table that will help achieve brand & performance objectives with evolution of visual identity.\n" +
      "- Work with the team to create templates for different types of creative assets, and maintain the design language consistency at all times.\n" +
      "- To make sure every creative asset meets its functional (readability, brand visibility, visual appeal, etc) and performance objectives (Engagement, Reach, Conversion, etc).",
    requirements:
      "- 3+ years of visual design experience, having led brand creation and development across multiple mediums (animations, social media, branding etc.).\n" +
      "- Relevant experience as a visual, brand, and/or motion designer at a creative media agency, or startups or in either crypto, DeFi, web3 or a demonstrated portfolio of diverse projects is preferred.\n" +
      "- Proficiency in design tools such as Figma, Sketch, Illustrator, Photoshop, etc.\n" +
      "- Ability to thrive working in a fast paced environment, with experience of managing and delivering to multiple project deadlines.\n" +
      "- An interest to harness the power of our community to drive visual and design output for the project\n" +
      "- Proficiency in English language and Excellent communication skills.\n" +
      "- Bonus: Experience creating and having your own NFTs.",
    createdOn: new Date("2022-07-27"),
    applyLink: "https://apply.workable.com/zkx/j/4A24407CC4/",
  },
  {
    key: "24",
    title: "Senior Full Stack Engineer",
    projectId: "f22a3d11-9c55-4d6f-98c3-b56230589def",
    tags: ["React", "TypeScript", "Wallet", "Mobile", "Braavos"],
    location: "Tel-Aviv/Remote",
    remote: true,
    description:
      "We are looking for a sharp engineer with a real passion for building things, an internal sense of urgency and a getting things done mentality." +
      "\n" +
      "We are looking for someone who wants to make a big impact and is not afraid to take big responsibility on their shoulders." +
      "\n" +
      "We develop a product that handles people’s real money – you must be respectful of that, and be very aware of the risks while coding and testing your code." +
      "\n" +
      "Passionate to learn new things and constantly improve.",
    responsibilities:
      "- Perform the software design of web3 product features on top of Starknet\n" +
      "- Build web3 applications and browser extensions through appealing visual design\n" +
      "- Write tests to ensure your code is working, responsive and efficient\n" +
      "- Troubleshoot, debug and upgrade software\n" +
      "- Write technical documentation",
    requirements:
      "- Vast experience as a Full Stack Developer\n" +
      "- Experience developing mobile applications – a plus\n" +
      "- Experience with applicable software including HTML, CSS, and React\n" +
      "- Familiarity with databases (e.g. MySQL, MongoDB), web servers (e.g. Apache) and UI/UX design\n" +
      "- Ability to read specs and derive the proper requirements and design from it\n" +
      "- BSc in Computer Science",
    createdOn: new Date("2022-09-13"),
    applyLink: "mailto:jobs@braavos.app",
  },
  {
    key: "25",
    title: "Founding Engineer",
    projectId: "8d0d1cc3-af7e-48ab-aa22-bef4ede008df",
    tags: ["Infrastructure", "DeFi", "AWS"],
    location: "Paris/Remote",
    remote: true,
    description:
      "We believe that society’s crucial applications should be accessible to anyone, that transparency should replace backroom dealings and that trustless software will make the middlemen obsolete.\n" +
      "With Empiric we want to change the status quo and allow devs to access real world data without relying on an off-chain, trusted, black box oracle.\n" +
      "We are reimagining oracles with a robust and transparent architecture made possible by leveraging new zk-technology.",
    requirements:
      "- 3+ years of experience in Rust.\n" +
      "- Hands-on experience in smart-contract development (Solidity, Rust or Cairo).\n" +
      "- Successful experience designing, building, and scaling production services.\n" +
      "- Experience owning long projects, including communication of progress, dependencies, and risk mitigation directly with stakeholders and partners.\n" +
      "- A computer science degree or equivalent.\n" +
      "- Ability to be creative and resourceful when tackling ambiguous technical challenges." +
      "- Previous experience working on oracles, blockchain infrastructure, or Defi.\n" +
      "- Previous experience in big tech or top-tier blockchain company.\n" +
      "- Familiarity with AWS.\n" +
      "- Entrepreneurial / doer mindset.\n" +
      "- Familiarity with ZK technology and L2s.",
    offer:
      "- Full remote work (most of the team is based in Paris, France).\n" +
      "- High equity share. Competitive salary.\n" +
      "- Total freedom and decentralized culture.\n" +
      "- The opportunity to work with a professional team with many years of experience.\n" +
      "- Major technical challenge.",
    createdOn: new Date("2023-03-06"),
    applyLink: "mailto:nicolas@empiric.network",
  },
  {
    key: "26",
    title: "FullStack Starknet Dev",
    projectId: "3c1f84eb-46e0-45d7-b52b-02c57b0e3eb9",
    tags: ["digital_id", "nft", "tools", "typescript", "react", "cairo"],
    location: "Remote",
    remote: true,
    aboutUs:
      'Starknet ID is an identity provider on Starknet. The protocol allows you to create your Starknet Identity (that can be seen as your on-chain ID card) and to attach things to it. You can already register ".stark" human-readable domains on your starknet identity that will be used as your Starknet username.',
    description:
      "- Do you want to contribute to the best ZK rollup ecosystem (Starknet) ?\n" +
      "- Do you want to be an early employee of one of the most significant protocols of Starknet ?\n" +
      "- Do you want to be able to work remotely when you want and where you want ?\n\n" +
      "Today, you can do it all in Starknet ID",
    responsibilities:
      "- Front-end development using TypeScript, React, and blockchain tools such as starknet.js and starknet-react\n" +
      "- Starknet smart contract development using Cairo, other blockchain tools, and software\n" +
      "- Complete code reviews of other team member's code and assist in the mentoring more junior developers\n" +
      "- Define, design, and develop small products that add value to the starknet ID ecosystem \n" +
      "- Maintenance of the starknetid.js npm package",
    aboutYou:
      "- You take responsability. When you take on a task, you get it done. When you get it done, it’s not good, it’s great.\n" +
      "- You're knowledgeable about NFTs and their ecosystem (could be on Solana, Ethereum, or any chain). You love to talk about DeFi, your overpriced Jpegs, validity rollups, and blockchain tech in general. You understand the technology well enough to answer questions off-hand and are familiar with the more significant projects …\n" +
      "- You're highly independent. You're self-motivated and can work well independently, but you know when to ask for help or collaborate to achieve a common goal.\n" +
      "- You're a quick learner. You're always eager to learn new skills and technologies to improve your work, and you can quickly adapt to changing project requirements.\n\n" +
      "Does it speak to you ? So stay with me, we'll get along fine",
    requirements:
      "- Expertise in front-end development with an understanding of React best practices, optimizations, and profiling\n" +
      "- Experienced with TypeScript\n" +
      "- Some experience with smart contract development (1-year minimum)\n" +
      "- Verbal fluency in English\n" +
      "- Interest and enthusiasm for Ethereum, deFi, NFTs, and Layer 2 space.\n" +
      "- Experience in an agile work environment as well as remote/asynchronous work\n",
    offer:
      "- Great daily autonomy\n" +
      "- Quickly take on responsibilities within the company, if you are good\n" +
      "- Work from anywhere in the world and make your own schedules\n",
    compensation: {
      from: 75,
      to: 300,
    },
    createdOn: new Date("2023-03-21"),
    applyLink: "https://https://twitter.com/Fricoben",
  },
];

export default allJobs;
