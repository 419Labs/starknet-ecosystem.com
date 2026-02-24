import type { Project } from "../../data/ecosystem";

export enum ProjectSorting {
  A_Z = "A - Z",
  TWITTER = "Followers",
}

// Curated featured projects — powering the hero marquee and prioritised in listings
const FEATURED_PROJECT_IDS = new Set([
  "d1f39ca2-6c45-4423-a681-be45b47ec278", // Atomiq
  "502b0dbc-5169-4db6-8796-36a968a798fd", // avnu
  "f22a3d11-9c55-4d6f-98c3-b56230589def", // Braavos
  "5b7f1fde-5642-4bfd-ab11-8b10c7c1ae1b", // Cartridge
  "1c57849c-ae23-400a-b9d5-6f909894ae86", // Dojo
  "ba85310d-c82c-43c5-a42c-6479f8946b98", // Ekubo
  "a7e1c712-84a2-4457-8610-1cab7af37b16", // Endurfi
  "071a6e9b-08f9-4f65-9da9-3e8866731439", // Extended
  "ee2a37a9-cf06-4742-9d99-30921282216c", // Focus Tree
  "47b08857-89fe-4016-8cfe-e057c2857449", // Influence
  "00b21789-6562-43bd-a75e-f2be48590853", // LayerAkira
  "84904055-cb72-407f-996a-d7aafe287372", // Loot Survivor
  "f5fb9fa0-e1be-4fd9-b85d-c2dfa2743ef2", // Near intents
  "eb131b7d-3ab9-44d4-b3f0-ef02d08b8379", // Nostra
  "4a3718a7-fcef-4a1d-b631-a97c4cd03b8c", // Opus
  "8d0d1cc3-af7e-48ab-aa22-bef4ede008df", // Pragma
  "eb80b316-cb0e-4e08-9885-f86ecf34a8e0", // Re7
  "8df27359-f05d-439b-8592-ca1b61cf049c", // Ready
  "8563314d-f31d-4e5a-a372-915a4f11518f", // Realms
  "81073086-5b7a-45fe-a629-5b201c3159de", // Starknet Earn
  "0f2ecfe3-1212-4157-9176-aeeb4204294f", // Troves
  "00afa40f-f1a7-4cb3-a979-13c501ae9b17", // Uncap
  "1b1fedb8-3e97-4288-91e8-7a0c39e5be66", // Vesu
  "5cec890e-fc90-48d0-b7eb-011b6a0dc13b", // Voyager
  "c95cdd9c-a151-4b3b-b43b-8f023e77f634", // Xverse
]);

// Multichain projects that also support Starknet
const MULTICHAIN_PROJECT_IDS = new Set([
  "d05225aa-d6d7-4c16-b9f1-80f166d72ee8", // CoinMarketCap
  "6175cd83-81fb-48d0-9f56-80cea421aa1c", // OKX
  "2431f5bb-9a1c-418d-9bd7-a46afdfe6f53", // Bitget Wallet
  "337960f1-a597-42de-a79b-b210ddd9cd88", // CoinGecko
  "c41a169e-7158-46ac-855f-6ddb43ece9ba", // Arkham Intel
  "babbdef0-32ae-4fe4-8176-bd80a8180f5b", // Chainlink
  "49982c0a-e7c1-407e-9c89-a3ec5218c061", // LayerZero
  "09f0b163-c62a-4fde-b30e-758915aefd51", // Orbiter
  "53df446b-6fdc-42b0-9afc-6cdfbacbad32", // Ledger
  "0db80119-886c-42b8-bbb1-e2a0099d4fa0", // Glassnode
  "b3de3519-2dbe-404a-ac45-dbe149322c10", // Midas
  "3eb8feb6-5bd1-4760-ab04-f969294b8540", // The Block
  "dd840ca2-7f31-4d08-a2f5-0903c9550f5d", // Messari
  "1d211d22-a83c-407f-aabe-9f34081048b4", // Element Market
  "fc905a5a-38ed-42ec-84ae-d8810af02961", // Chainbase
  "d63076b0-5b81-4892-b123-2b1961b9d42c", // KaitoAI
  "a05c3e70-29e2-4b8a-a143-bd873f84b152", // OpenOcean
  "db7e17a6-0be0-402f-b7ba-703a48217879", // DeFiLlama
  "f0f90980-e14e-43c4-b50b-2c1c6150f345", // Owlto
  "8cef1635-abd3-42cd-9e25-cab368f32642", // Nansen
  "3a241c3b-1234-4fea-a6f2-51549c452db5", // The Graph
  "83689aab-7a0d-46b8-948d-a71d24c6423f", // Pyth Network
  "700f7250-66bc-4d46-8393-d7b5d30ca7b6", // USDC & CCTPV2
  "99c4de9e-4e82-4268-a734-1aed4854d1f5", // RhinoFi
  "41b4285a-2f2b-471d-bb8b-61e747a8cbdc", // Redstone Oracle
  "b6712cb3-163a-412e-863e-5a72ff9ac0ec", // DappRadar
  "abb6033b-c8b6-4e4d-b030-365d2b523a9a", // Dexscreener
  "9bc2502d-3eba-4aaa-b585-b308fa0d57c2", // Reddio
  "08271a68-84cf-4467-9b66-a5d9dfaea20d", // Zapper
  "b74fbad2-1348-4649-a760-1280d7672a50", // Rango
  "ee574078-7642-4bd9-8a30-f7c0031d43ab", // Layerswap
  "cbc03d65-c0db-4295-b7b1-616edea1dd91", // TokenTerminal
  "b839f41f-991f-43b1-a37c-8a4b44a92093", // Keplr
  "14a6656a-32fe-4903-8a52-f5c8fbe8793f", // Hyperlane
  "aa053a17-af46-4587-9857-a55ecb9f26bc", // Gecko Terminal
  "f02bca5f-5e46-4833-b1ea-8fb127e18651", // a Money / Pulsar
  "d468232c-3f34-4eba-bd2f-a52d3475e235", // SimpleSwap
  "a710c64f-8f14-4333-b791-8efee04fcc18", // Infura
  "02555c59-fbb7-4fee-9f9a-0b2d541e1abb", // Retrobridge
  "db9fe341-da55-44bc-862f-12409531a9f9", // Chaineye Mini Bridge
  "6b4b74bb-3880-47a8-a0fd-f4b96f1a7509", // Snapshot
  "3f68f506-8d2b-473d-b033-7238e5ab5c1f", // OpenZeppelin
  "518b5d46-1ac9-452e-99c8-80fa5e66a0cb", // Radius
  "b5d3d5b0-9c9b-449d-b6fa-7a07bafb4a93", // Belong
  "70fbf6b2-2361-4a45-b732-dc821ee03ee4", // EdgeX
  "629c7de2-576d-480b-9395-08a25cfc150c", // TokenTable
  "ea017412-a9fc-41a3-aa05-a908fa9c2604", // Privy
  "be66566b-2837-41da-ae92-b0a1566ab179", // QuickNode
  "5931a7e3-8760-457a-a4bc-c1ffc51de175", // Footprint Analytics
  "442680e5-a275-4160-a953-3456cee39e48", // RocketX
  "5a33f51e-b28e-40d3-850a-6baf1d7bfc5f", // L2Beat
  "ca6bbf27-4302-4ada-9ec4-ed6fe9d8304a", // Artemis Analytics
  "c18c7e63-43bb-4870-9c20-95554a57a7cf", // Trail of Bits
  "ca3242b9-b196-47a8-a3da-84912614732a", // Beosin
  "a968a6ff-0782-4f1e-8f90-d9d2c701d7fa", // OK Link
  "08e527e0-ed6c-486b-975e-dd7702b989ad", // Ramp
  "03f6f911-c24f-411f-9b31-1bc113ec7a0c", // Banxa
  "a4b326b6-ceed-4b13-bc8e-36180f68111b", // Calimero
  "01babbb2-b6d9-4585-b795-2e388123ffd8", // Dynamic
  "d18f47a2-8969-4f22-bc56-cae2568d7cc6", // Zellic
  "0d63509e-a328-46c1-8e9f-716b21753e9a", // NowNodes
  "2c84583e-6c4e-4ca4-933d-1352df79b0af", // GrowthePie
  "24990877-03e8-4059-a886-c24ca1bfe93c", // Chainspect
  "c3b640d1-a808-4c48-9b9b-7ecc78548a89", // Chainstack
  "09e0f50b-6f2a-43ef-88ff-8f84ee253453", // Garden
  "32ba3cd1-4eb2-4b64-b784-257df9a90909", // DRPC
  "3969b66d-5ad6-477f-938a-a785efe97a7d", // ConsenSys Diligence
  "fafd7585-3012-44ba-a736-bfca880fa25d", // Chain Security
  "091e1603-3823-4750-894f-fdc9cd4a752e", // MetaMask SNAPS
  "769f5ad6-fca5-4f98-9002-c4971ab65343", // Dfns
  "37962c42-841e-461b-a300-8acf4ae183c4", // Alchemy
  "76b4443d-e768-4e78-ada5-63674aa4896b", // RiscZero
  "97a37caf-7345-49a2-b296-3a9f845f2e2d", // Immunefi
  "e710e02f-820f-4b70-983c-2e3b6f0d2cad", // PWN
  "4ab40ac3-4fc6-4b11-bb1f-8ec30d07d1c0", // Unlimit Crypto
  "ab4517ca-14a6-4a5e-acb9-849954a0af4d", // Lava Network
]);

export const getProjectRelevanceScore = (
  project: Project,
  keyword: string,
): number => {
  const normalizedKeyword = keyword.trim().toLowerCase();
  if (!normalizedKeyword) return 0;

  const name = project.name.toLowerCase();
  const shortName = project.shortName.toLowerCase();
  const description = project.description.toLowerCase();

  let score = 0;

  if (name === normalizedKeyword) score += 120;
  if (shortName === normalizedKeyword) score += 110;
  if (name.startsWith(normalizedKeyword)) score += 95;
  if (shortName.startsWith(normalizedKeyword)) score += 85;
  if (name.includes(normalizedKeyword)) score += 75;
  if (shortName.includes(normalizedKeyword)) score += 65;
  if (
    project.tags.some((tag) =>
      tag.toLowerCase().includes(normalizedKeyword),
    )
  ) {
    score += 35;
  }
  if (description.includes(normalizedKeyword)) score += 20;

  return score;
};

export const projectIncludesKeyword = (
  project: Project,
  keyword: string,
): boolean => {
  if (!keyword.trim()) return true;
  return getProjectRelevanceScore(project, keyword) > 0;
};

export const findProjectById = (
  projects: Project[],
  id: string,
): Project | undefined => projects.find((project) => project.id === id);

export const shortenText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  return `${text.substr(0, text.lastIndexOf(" ", maxLength))}...`;
};

export const isFeaturedProject = (project: Project): boolean =>
  FEATURED_PROJECT_IDS.has(project.id);

// Sort tier: 0 = featured, 1 = Starknet-native, 2 = multichain
const getProjectTier = (project: Project): number => {
  if (FEATURED_PROJECT_IDS.has(project.id)) return 0;
  if (MULTICHAIN_PROJECT_IDS.has(project.id)) return 2;
  return 1;
};

export const sortBy = (
  projects: Project[],
  sorting?: ProjectSorting,
): Project[] => {
  return projects.sort((project1, project2) => {
    if (sorting === ProjectSorting.TWITTER) {
      // Featured first, then Starknet-native, then multichain — each sorted by followers
      const tier1 = getProjectTier(project1);
      const tier2 = getProjectTier(project2);
      if (tier1 !== tier2) return tier1 - tier2;
      const score1 = project1.socialMetrics?.twitterFollower || 0;
      const score2 = project2.socialMetrics?.twitterFollower || 0;
      return score2 - score1;
    }
    if (sorting === ProjectSorting.A_Z) {
      return project1.name
        .toLowerCase()
        .localeCompare(project2.name.toLowerCase());
    }
    return 0;
  });
};
