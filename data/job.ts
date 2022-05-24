import type { Job } from "../src/models/job";

const allJobs: Array<Job> = [
  {
    key: "1",
    title: "Product Lead - Argent X",
    companyId: 10,
    tags: ["Product", "Argent X"],
    location: "Remote (Europe)",
    remote: true,
    description:
      "Own Argent X’s development and redefine what’s possible in crypto, pushing the boundaries of security and ease of use.\n" +
      "\n" +
      "Argent X is an open source browser wallet. It's the first wallet for StarkNet, a breakthrough network that offers unlimited scale without compromising on security.\n" +
      "\n" +
      "The aim is to move the needle for the adoption of self-custody. Argent X is in alpha, and StarkNet is still on testnet, but it already has 60,000 users. Transaction volume is also exploding.\n" +
      "\n" +
      "So join us on Day 1 and shape the future of money and the internet.",
    responsibilities:
      "What you’ll be doing\n\n" +
      "- Oversee Argent X’s development from ideation to execution. With a constant focus on delighting users.\n" +
      "- Collaborate extensively with StarkWare, the team behind StarkNet, as well as some of the world’s most exciting Dapp developers and founders.\n" +
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
    title: "Head of Growth",
    companyId: 2,
    tags: [],
    location: "Remote",
    remote: true,
    description:
      "ZKX is developing a decentralized derivatives protocol on Starknet, the upcoming ZK-rollup by Starkware. Offering an innovative permissionless protocol for perpetual swaps, ZKX will bring unique complex trading strategies to a simplified and fun trading environment. We’re supported by well-known venture funds and are currently coming out of stealth. This is a remote position with travel opportunities and the chance to work for an innovative DeFi project. Join us in the journey to Web3!",
    responsibilities:
      "Experienced tech marketer with a thorough understanding of growth frameworks and quantitative marketing skills. Team management skills with ability to implement KPI, OKR and agile processes. You’ll be working with a partner marketing agency for high-level PR and campaign initiatives, as well as our internal marketing team. You’ll be the voice of the community when required, with a passion for organic channels and long-term brand building.",
    requirements:
      "- Overall proven experience at scale in tech startups and businesses, with at least +5 years of experience as a marketer and growth strategist.\n" +
      "- Experience with growth experimentation (multivariate testing, ICE, cohorts, funnel optimization…) and agile methodologies for marketing.\n" +
      "- Ability to interface and work with both internal and external marketing teams and stakeholders. Experience interacting with product and tech teams to optimize user experience will be valued.\n" +
      "- Battle-tested knowledge of community building and campaign management with influencers, media and other stakeholders.\n" +
      "- Interest and understanding of marketing across channels (TikTok, Discord, Reddit, Twitter…) familiar to fintech and crypto communities.",
    offer:
      "The ability to work remotely ALWAYS, not just now (we are a remote-first company)\n" +
      "Professional growth opportunities and career prospects\n" +
      "Resources support to improve your remote working environment\n" +
      "Salary plus incentives package to align the team with the project's success\n\n" +
      "We offer a unique opportunity to build an international project in an international team, influence the process, be heard, and really see the results of your work.",
    applyLink: "https://apply.workable.com/zkx/j/D9B94653A8/apply/",
    createdOn: new Date("2022-04-25"),
  },
  {
    key: "3",
    title: "Senior Smart Contract Engineer for StarkNet",
    companyId: 5,
    tags: ["Cairo", "Solidity", "Web3", "StarkNet"],
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
    key: "4",
    title: "Blockchain/Full Stack Devs",
    companyId: 6,
    tags: [],
    location: "Toronto, Canada",
    remote: true,
    description:
      "PlayOasis is an NFT marketplace powered by StarkNet, where our clients offer and list nfts with near zero gas fees. We are looking for a software engineer to work on frontend, backend and smart contracts.",
    requirements: "Coding knowledge and experience is required",
    createdOn: new Date("2022-03-20"),
    applyLink: "mailto:jobs@playoasis.xyz",
  },
  {
    key: "5",
    title: "Senior Software Engineer",
    companyId: 3,
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
    key: "6",
    title: "UI/UX Designer",
    companyId: 12,
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
    key: "7",
    title: "StarkNet Developer Advocate",
    companyId: 7,
    tags: [],
    location: "Remote",
    remote: true,
    description:
      "StarkWare is looking for a Developer Advocate to educate developers who will build on/for StarkNet. We’re looking to hire two people: one in North America, the other in the Far East.\n" +
      "\n" +
      "StarkNet is a permissionless ZK-Rollup, powered by the STARK zero-knowledge proof protocol. It is a Layer-2 scaling solution that settles on Ethereum. StarkNet Alpha, supporting general computation and composability, has been on a public testnet since June 2021, and on Mainnet Ethereum since Nov 2021.\n" +
      "\n" +
      "StarkWare is a 4-year old company, which has raised over $150M from Paradigm, Sequoia, the Ethereum Foundation, Vitalik Buterin, and other notable investors. Over the past year, its permissioned scaling solution, StarkEx, has settled over 100M txs on Ethereum, and over $400B for dYdX, Sorare, Immutable, and DeversiFi. Both StarkNet and StarkEx are written in Cairo, a Turing-complete language for STARK-proving computational statements. Cairo was invented by StarkWare.\n" +
      "\n" +
      "Geography: we are looking for two Developer Advocates: one who is based in North America, and one who is based in the Far East. Most of the team is based in Israel.\n" +
      "\n" +
      "Objective: spreading the StarkNet and Cairo gospel",
    responsibilities:
      "- Write technical content, including tutorials\n" +
      "- Regularly write Cairo and use the fast-moving StarkNet toolchain in order to better understand the developer experience\n" +
      "- Review and critique code for newcomers to StarkNet\n" +
      "- Plan and host meetups/workshops/hackathons, both online and in-person, to educate developers. Travel is a must.",
    requirements:
      "A strong candidate should be:\n" +
      "- Curious\n" +
      "- An excellent communicator (teacher, f2f, and on Crypto-Twitter)\n" +
      "- Fluent in English (North America) or Mandarin (Far East). Other languages are a plus\n" +
      "- Familiar with and interested in blockchain/crypto/DeFi\n" +
      "- Knows how to initiate and promote new activities",
    createdOn: new Date("2022-02-15"),
    applyLink: "mailto:jobs@starkware.co",
  },
  {
    key: "8",
    title: "Protocol Engineer",
    companyId: 8,
    tags: [],
    location: "Sydney",
    remote: true,
    description:
      "Engineers will be exposed to novel research and applications of practical cryptography at scale in rollup systems i.e. StarkEx / StarkNet. They’ll also be involved in the research, design and implementation of some of the very first layer-2 building blocks for NFTs such as a limit order DEX, asset bridges across our multi-layer system (L1-L2-LN?), trading primitives (AMM / sharding / fractionalisation of NFTs, auctions, derivatives and more) as well as setting the gold standard for the rest of the DeFi / NFT ecosystem on areas such as token, bridging, metadata and royalty standards among others.",
    requirements:
      "Most of the work here will require deep prerequisite knowledge of smart contracts and layer-1 systems and ideally but not necessarily practical experience in field arithmetics, cryptography, zero-knowledge proofs (commitment schemes), DeFi (decentralised financial systems), and layer-2 rollup systems.",
    createdOn: new Date("2022-02-21"),
    applyLink: "mailto:ignatius.widjaja@immutable.com",
  },
  {
    key: "9",
    title: "Front-End Dev",
    companyId: 9,
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
    key: "10",
    title: "Back-End Dev",
    companyId: 9,
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
      "– Design and development of smart contracts in Solidity and Cairo (Ethereum Layer-1 and StarkNet ZK-Rollup)\n" +
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
    key: "11",
    title: "JavaScript/Typescript Engineer",
    companyId: 10,
    tags: ["javascript"],
    location: "Remote",
    remote: true,
    description:
      "Help us build the future of Ethereum scaling by working on Argent X.\n" +
      "\n" +
      "Argent X is the first wallet for StarkNet, a zk-rollup technology built on the Ethereum blockchain, and it comes as a Browser Extension written in Javascript/Typescript.\n" +
      "\n" +
      "With a focus on world class UX and security, you’ll take ownership of the entire development lifecycle and quickly ship features in an agile environment.\n" +
      "\n" +
      "As part of the team, you will also help define and build starknet.js, an open source library helping applications interact with the StarkNet protocol.\n" +
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
    key: "12",
    title: "JavaScript/Typescript Developer",
    companyId: 11,
    tags: ["javascript", "typescript", "web3.js", "ether.js"],
    location: "Remote",
    remote: true,
    description:
      "You will be a developer within the StarkNet team, so some of the responsibilities on this project include: \n" +
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
    key: "13",
    title: "Cairo Developer",
    companyId: 14,
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
    key: "14",
    title: "Cairo Auditor",
    companyId: 14,
    tags: ["Cairo", "Solidity", "JavaScript", "TypeScript", "Python"],
    location: "Remote",
    remote: true,
    description:
      "We’re looking for developers with smart contract auditing experience/knowledge to join our newly fledged Cairo smart contract Auditing team.\n" +
      "You’ll get the opportunity to work at the bleeding edge of blockchain technology by auditing StarkNet protocols and building cutting-edge security-related tooling for Cairo, StarkNet’s native smart contract language.\n" +
      "Cairo is a great language, but many existing protocols cannot switch to a new language due to time/money/talent constraints.\n" +
      "\n" +
      "Responsibilities\n" +
      "- Work directly with the leading protocols in the StarkNet ecosystem to review their code and help secure their protocols\n" +
      "- Design and implement solutions & tooling for difficult engineering and security analysis problems\n" +
      "- Collaborate with teammates to maintain and continually improve our existing Cairo security tools using modern software engineering practices\n" +
      "- Develop new Cairo/StarkNet security tools",
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
    key: "15",
    title: "Senior Software Developer - Solidity / Cairo",
    companyId: 2,
    tags: ["Cairo", "Solidity", "AWS", "Node.js"],
    location: "Remote",
    remote: true,
    description:
      "ZKX is developing a decentralized derivatives protocol on Starknet, the upcoming ZK-rollup by Starkware.\n" +
      "Offering an innovative permissionless protocol for perpetual swaps, ZKX will bring unique complex trading strategies to a simplified and fun trading environment.\n" +
      "This is a remote position with travel opportunities and the chance to work on an innovative DeFi project. Join us on the journey to Web3!\n" +
      "\n" +
      "Responsibilities\n" +
      "- Design and development of Solidity and Cairo Smart contracts (Ethereum Layer-1, StarkWare Layer-2)\n" +
      "- Architecture and design of smart-contracts ecosystem\n" +
      "- Integration with internal and 3rd-party services",
    requirements:
      "- Commercial experience in Blockchain development (including Ethereum)\n" +
      "- Commercial experience in developing complex applications (before you became a blockchain engineer)\n" +
      "- Commercial experience in developing decentralized applications (would be a plus)\n" +
      "- Experience in agile/scrum methodology\n" +
      "- Strong debugging skills and/or experience in reverse engineering\n" +
      "\n" +
      "Nice to have:\n" +
      "- Multiple years of prior experience in traditional cybersecurity (before transitioning to the blockchain space)\n" +
      "- Understanding of the engineering principles of developing robust applications, practical application of methodologies, algorithms\n" +
      "- Understanding of financial markets and derivatives will be valued.",
    createdOn: new Date("2022-04-22"),
    applyLink: "https://apply.workable.com/zkx/j/FF60C0DB6C/",
  },
  {
    key: "16",
    title: "UI-UX Lead Designer / UI-UX Senior Engineer / Senior Web-designer",
    companyId: 2,
    tags: ["UI/UX"],
    location: "Remote",
    remote: true,
    description:
      "ZKX is developing a decentralized derivatives protocol on Starknet, the upcoming ZK-rollup by Starkware.\n" +
      "Offering an innovative permissionless protocol for perpetual swaps, ZKX will bring unique complex trading strategies to a simplified and fun trading environment.\n" +
      "This is a remote position with travel opportunities and the chance to work on an innovative DeFi project. Join us on the journey to Web3!\n" +
      "\n" +
      "Responsibilities\n" +
      "- Lead the design and user-experience of a new product in financial services\n" +
      "- Design beautiful and functional graphical interfaces for applications and websites - B2B and B2C web applications, mobile applications\n" +
      "- Development of design concepts for web and mobile applications and interfaces driver by personas, user-stories and user experience\n" +
      "- Developing user scripts, design layouts, development of user-first interfaces and widgets\n" +
      "- Work in a friendly team in close collaboration with developers, PM, PO, QA\n" +
      "- Participation in the planning and discussion of projects\n" +
      "- Interaction with the development team for the implementation and development of the prepared design concept",
    requirements:
      "- 3+ years of work experience and professional knowledge of Figma, Sketch, Adobe Creative Suite (Photoshop, Illustrator, InDesign) and related tools\n" +
      "- 2+ years of experience in creating UI / UX for SaaS, interface development, web and mobile application development\n" +
      "- Good understanding of the technical possibilities and limitations of the design and its applicability\n" +
      "- Ability to analyse and develop data-driven layout / UI user scenarios\n" +
      "- Understanding the principles of UX, understanding the effective flow from the touch-point to the target action\n" +
      "- Experience in using analytical tools – you design and develop using data\n" +
      "- Creativity, responsibility and accuracy\n" +
      "- Having a portfolio on Behance or similar – is a must\n" +
      "\n" +
      "We offer:\n" +
      "- The ability to work remotely ALWAYS, not just now (we are remote-first company)\n" +
      "- Professional growth opportunities and career prospects\n" +
      "- Salary plus incentives package to align the team with the project's success",
    createdOn: new Date("2022-04-22"),
    applyLink: "https://apply.workable.com/zkx/j/0E3AABE10C/",
  },
  {
    key: "17",
    title:
      "Manual QA Engineer - Manual Testing / Quality Assurance / Quality Control",
    companyId: 2,
    tags: ["node.js", "Typescript", "React", "Redux", "Next.js"],
    location: "Remote",
    remote: true,
    description:
      "ZKX is developing high-load decentralized software systems for financial analytics and synthetic assets. We are looking for talented developers and engineers (in European and Asian time zones only) to work on the further development of our products. This is a remote position with travel opportunities and the chance to work for an innovative project in the blockchain space.\n" +
      "\n" +
      "Responsibilities\n" +
      "- Lead the manual acceptance and regression testing of API, Web, Back-End applications\n" +
      "- Work in an agile product team with a designer, PO, QA, BE developers\n" +
      "- Run automated tests, analyze test run results on different environments\n" +
      "- Create and maintain test documentation: detailed checklists and test cases\n" +
      "- Work according to well-defined requirements (Jira), work in a result-oriented team.",
    requirements:
      "- Commercial experience as a Quality Control Engineer (3+ years)\n" +
      "- Understanding QA and QC concepts\n" +
      "- Experience in test design – development of software testing processes, development of test cases, definition of quality criteria and testing goals\n" +
      "\n" +
      "Nice to have:\n" +
      "- Knowledge of Java or another programming language sufficient to write simple automated tests\n" +
      "- Knowledge of the HTTP protocol and the REST concept, experience in testing API and HTTP services\n" +
      "- Experience with Selenium, Selenide, TestNG/JUnit, Xpath and CSS",
    createdOn: new Date("2022-04-22"),
    applyLink: "https://apply.workable.com/zkx/j/8347B933EA/",
  },
  {
    key: "18",
    title: "VP of Engineering (Hands on)",
    companyId: 2,
    tags: ["node.js", "Typescript", "Go", "MongoDB"],
    location: "Remote",
    remote: true,
    description:
      "ZKX is developing a decentralized derivatives protocol on Starknet, the upcoming ZK-rollup by Starkware.\n" +
      "Offering an innovative permissionless protocol for perpetual swaps, ZKX will bring unique complex trading strategies to a simplified and fun trading environment.\n" +
      "This is a remote position with travel opportunities and the chance to work on an innovative DeFi project. Join us on the journey to Web3!\n" +
      "\n" +
      "Responsibilities\n" +
      "- Develop high-load decentralized services architecture and its ecosystem\n" +
      "- Maintain and optimize existing codebase\n" +
      "- Test coverage\n" +
      "- Architecture design\n" +
      "- API design\n" +
      "- Participate in solving problems and incidents in high-load systems\n" +
      "- Integration with external services",
    requirements:
      "- Commercial experience in the development of Backend services and microservices\n" +
      "- (high load and decentralised) is a MUST\n" +
      "- Commercial Node.js/GO lang development experience (5+ years)\n" +
      "- Commercial experience in high-load applications design and development\n" +
      "- Commercial experience in developing decentralized applications\n" +
      "- Excellent knowledge of object-oriented development\n" +
      "- Good understanding of Service Oriented Architecture, Microservice Architecture\n" +
      "- Experience in building complex RESTful APIs\n" +
      "- Test Driven Development - TDD, CI / CD\n" +
      "- Experience in agile/scrum methodology\n" +
      "- Understanding of the engineering principles of developing robust applications\n" +
      "- Practical application of methodologies, algorithms\n" +
      "- Experience of blockchain technology\n" +
      "- Background in a high growth start-up or scale-up",
    createdOn: new Date("2022-04-22"),
    applyLink: "https://apply.workable.com/zkx/j/6DEA9DB4E5/",
  },
  {
    key: "19",
    title: "Generalist Developer",
    companyId: 15,
    tags: ["Cairo", "Solidity", "StarkNet"],
    location: "San Francisco or Remote",
    remote: true,
    description:
      "Stork Oracle is a new oracle in the StarkNet ecosystem. We are a small, San Francisco based team. " +
      "Stork is supported by Dexterity Capital, one of the most successful and experienced algorithmic trading firms in the crypto world.\n\n" +
      "If you’re on the fence about your fit for the role, take the risk and drop us a line. Worst case, you’ll make some new friends.\n" +
      "\n" +
      "Responsibilities\n" +
      "- Building full-stack blockchain applications on StarkNet\n" +
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
    key: "20",
    title: "Head of Product Lead",
    companyId: 16,
    tags: ["gaming"],
    location: "Remote",
    remote: true,
    description:
      "The Technical and Product Lead will have an understanding of blockchain technology, specifically Layer 2s and zkRollups. They will lead technical projects that solve challenging technical problems. This includes writing design specifications, creating demonstrations, and managing teams of developers. They will have a high degree of autonomy to pursue their interests and build their own schedule, all while receiving competitive compensation and equity in Matchbox DAO.\n" +
      "\n" +
      "Responsibilities\n" +
      "- Write technical specifications of blockchain gaming primitives\n" +
      "- Lead dev teams building gaming utilities and components\n" +
      "- Onboard and mentor research fellows to design and write about gaming primitives\n" +
      "- Maintain and document repositories of primitives\n" +
      "- Report directly to Matchbox lead (Yoni Ben Shimon)",
    requirements:
      "- You are a technical product manager with 2+ years of experience\n" +
      "- You have experience managing and coordinating programmers\n" +
      "- You have a comprehension of blockchain technology\n" +
      "- You are passionate about gaming and the future of online games\n" +
      "\n" +
      "Nice to have:\n" +
      "- Introductory knowledge to zkRollups and StarkNet\n" +
      "- Experience with Cairo (StarkNet’s native programming language)",
    createdOn: new Date("2022-05-08"),
    applyLink:
      "https://www.notion.so/Hiring-Matchbox-DAO-head-of-Product-Lead-59c6cecf35624d6c87a422482496ba4a",
  },
  {
    key: "21",
    title: "Program Manager",
    companyId: 16,
    tags: ["gaming"],
    location: "Remote",
    remote: true,
    description:
      "Matchbox DAO envisions itself as the primary ecosystem for web3 game builders. Currently, we are a thriving community of developers and content creators who are passionate about on-chain gaming. We are looking for a technical product manager to lead a variety of Matchbox’s technical projects. \n" +
      "\n" +
      "The accelerator Lead will have an understanding of blockchain technology, specifically Layer 2s and zkRollups. They will accept teams that solve challenging technical problems.\n" +
      "\n" +
      "This includes interviewing the new candidates and evaluating their technical and product acumen.  They will have a high degree of autonomy to pursue their interests and build their own schedule, all while receiving competitive compensation and equity in Matchbox DAO.\n" +
      "\n" +
      "Responsibilities\n" +
      "- Evaluate and judge teams that get into the accelerator\n" +
      "- Help build the launch strategy to matchbox and its projects\n" +
      "- Creating flows for them\n" +
      "- Onboard and mentor research fellows to design and write about gaming primitives",
    requirements:
      "- You have a comprehension of blockchain technology\n" +
      "- You have experience working with teams\n" +
      "- You are passionate about gaming and the future of online games\n" +
      "\n" +
      "Nice to have:\n" +
      "- Introductory knowledge to zkRollups and StarkNet\n" +
      "- Experience with Cairo (StarkNet’s native programming language)",
    createdOn: new Date("2022-05-08"),
    applyLink:
      "https://www.notion.so/Hiring-Matchbox-program-manager-28440dab9f4142818ccb8f4db8484f21",
  },
  {
    key: "22",
    title: "Cairo Developer",
    companyId: 17,
    tags: ["Cairo", "Solidity", "StarkNet", "AMM"],
    location: "Remote",
    remote: true,
    description:
        "SithSwap is developing an advanced stableswap AMM on StarkNet, a permissionless decentralized ZK-Rollup operating as an L2 network over Ethereum, enabling dApps to achieve unlimited scale for its computation – without compromising Ethereum's composability and security.\n" +
        "\n" +
        "For this endeavour, SithSwap is looking to onboard a talented Cairo developer, remotely and in any capacity (ranging from task-based to full-time).\n" +
        "\n" +
        "TODO:\n" +
        "As a Cairo Developer, you will play a leading role in porting over an existing reference Solidity implementation of the SithSwap protocol (Core + Rewards contracts) over to StarkNet in native Cairo language.\n\n" +
        "More specifically, in coordination with the team, you will be responsible for designing and implementing the Cairo counterparts of any provided Solidity smart contracts, suggesting modifications and adaptations as needed for successfully porting over the codebase to the latest Cairo release, starting with the Core AMM smart contracts.\n\n" +
        "To do the above, you will be relying on the most advanced tooling for StarkNet yet released, using either TypeScript or Python to write your off-chain backend code.",
    requirements:
        "- 2+ years experience developing top-tier smart contracts in an EVM mainnet environment\n" +
        "- Great understanding and daily use of Cairo (up to the latest release/features)\n" +
        "- Good understanding of Solidity/Yul and the EVM\n" +
        "- Strong working knowledge of at least 1 advanced StarkNet development framework (e.g. Ape, Protostar, Nile, Hardhat)\n" +
        "- A GitHub profile (doesn't need to be public, as long as we can inspect it)" +
        "\n" +
        "Nice to have:\n" +
        "- Experience with Uniswap V2 and Curve Finance contracts architectures and APIs\n" +
        "- Experience with common smart contracts patterns such as upgradability, proxy wallets, meta-transactions, and counterfactual deployments\n" +
        "- Strong knowledge of StarkNet as-a-platform, its underlying architecture and tech stack\n" +
        "- Strong working knowledge of both Python and TypeScript\n" +
        "- Good knowledge of historical smart contract exploits and vulnerabilities (across all chains)\n" +
        "- Ability to write code that is clean, easy to audit, yet efficient in terms of deployment, execution and maintenance\n" +
        "- Good knowledge of the L2 ecosystem at-large, with a particular emphasis on Validium Rollups\n" +
        "- CET/CEST working hours",
        createdOn: new Date("2022-05-16"),
    applyLink: "https://apply.workable.com/sithswap/j/C20203825C/",
  },
  {
    key: "23",
    title: "Senior frontend engineer",
    companyId: 18,
    tags: ["UI", "React", "TypeScript"],
    location: "Remote",
    remote: true,
    description:
        "Yuki works with the best engineering teams in the Ethereum and Layer 2 ecosystem. We help them to design and build outstanding Web3 user experiences – positioning their technology and products for success.\n" +
        "\n" +
        "We’re looking for an enthusiastic, self-motivated frontend engineer to help us support even more teams and projects. You’ll be joining a small but close knit team known for shipping quality design and frontend.\n" +
        "\n" +
        "Crypto and Web3 can be complex – experience is a plus but not required – you will have a strong support system in the Yuki team to help navigate new concepts and technologies.\n" +
        "\n" +
        "What you'll do:\n" +
        "Work closely with Yuki’s product designers and crypto teams to understand the problems they are solving and implement beautiful and usable interfaces that make their technology accessible to users\n" +
        "Rapidly implement functional UI elements from design mocks, with an eye toward performance and accessibility\n" +
        "Know when to create abstractions vs. one-off features\n" +
        "Ensure that components are functional, elegant, accessible, performant, and mobile-friendly\n" +
        "Understand when and how to run UI tests",
    requirements:
        "- At least 3 years of React experience\n" +
        "- A deep understanding of the architecture of modern client-side React applications\n" +
        "- Prior experience working with component libraries or design teams in user-facing applications\n" +
        "- A desire to keep up with modern best practices in web development\n" +
        "\n" +
        "Nice to have:\n" +
        "- Prior experience creating a design system or component library\n" +
        "- Familiarity with the web3 frontend stack (ethers.js/web3.js, EIP-1193, client-side private key management, etc.)\n" +
        "- Familiarity with React Hooks\n" +
        "- Experience with TypeScript in React",
        createdOn: new Date("2022-05-24"),
    applyLink: "https://yuki-labs.notion.site/yuki-labs/Senior-frontend-engineer-contract-to-hire-22162a6fa8e54c9c98926df688917195",
  },
  {
    key: "24",
    title: "Product designer",
    companyId: 18,
    tags: ["Figma"],
    location: "Remote",
    remote: true,
    description:
        "Yuki works with the best engineering teams in the Ethereum and Layer 2 ecosystem. We help them to design and build outstanding Web3 user experiences – positioning their technology and products for success.\n" +
        "\n" +
        "We’re looking for an enthusiastic, self-motivated frontend engineer to help us support even more teams and projects. You’ll be joining a small but close knit team known for shipping quality design and frontend.\n" +
        "\n" +
        "Crypto and Web3 can be complex – experience is a plus but not required – you will have a strong support system in the Yuki team to help navigate new concepts and technologies.\n" +
        "\n" +
        "What you'll do:\n" +
        "Work closely with crypto teams to understand the problems they are solving and design beautiful and usable interfaces that make their technology accessible to users\n" +
        "Help crypto teams that need guidance on how to turn their idea into a tangible product.\n" +
        "Guide teams through the design process, from problem definition through to beautifully polished visual designs",
    requirements:
        "- 3 years of product design experience including research, prototyping and visual design\n" +
        "- Prior experience shipping web / mobile apps\n" +
        "- Comfortable guiding and managing projects with clients\n" +
        "- Prior experience working with component libraries or design systems\n" +
        "- A desire to design within the context of web3/crypto.\n" +
        "- Experience designing with Figma",
        createdOn: new Date("2022-05-24"),
    applyLink: "https://yuki-labs.notion.site/yuki-labs/Product-designer-contract-to-hire-bc55db9c1c0d4d81952334ed648f587f",
  },
];

export default allJobs;
