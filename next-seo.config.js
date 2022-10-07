/** @type {import('next-seo').DefaultSeoProps} */
const defaultSEOConfig = {
  title:
    "StarkNet Ecosystem | Discover the future of Ethereum scalability.",
  titleTemplate: "%s",
  defaultTitle:
    "Explore projects, teams, jobs, metrics and everything around StarkNet Ecosystem",
  description:
    "Explore projects, teams, jobs, metrics and everything around StarkNet Ecosystem",
  canonical: "https://starknet-ecosystem.com",
  openGraph: {
    url: "https://starknet-ecosystem.com",
    title: "StarkNet Ecosystem",
    description:
      "Explore projects, teams, jobs, metrics and everything around StarkNet Ecosystem",
    images: [
      {
        url: "https://starknet-ecosystem.com/starknet-ecosystem-banner.png",
        alt: "StarkNet Ecosystem logo",
      },
    ],
    site_name: "StarkNet Ecosystem",
  },
  twitter: {
    cardType: "summary_large_image",
    site: "@StarkNetEco",
  },
};

export default defaultSEOConfig;
