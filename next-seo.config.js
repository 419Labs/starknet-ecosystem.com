/** @type {import('next-seo').DefaultSeoProps} */
const defaultSEOConfig = {
  title:
    "StarkNet Ecosystem | Explore projects, teams, jobs, metrics and everything around StarkNet",
  titleTemplate: "%s",
  defaultTitle:
    "StarkNet Ecosystem | Explore projects, teams, jobs, metrics and everything around StarkNet",
  description:
    "Explore projects, teams, jobs, metrics and everything around StarkNet",
  canonical: "https://starknet-ecosystem.com",
  openGraph: {
    url: "https://starknet-ecosystem.com",
    title: "StarkNet Ecosystem",
    description:
      "Explore projects, teams, jobs, metrics and everything around StarkNet",
    images: [
      {
        url: "https://starknet-ecosystem.com/starknet-banner.jpg",
        alt: "StarkNet Ecosystem logo",
      },
    ],
    site_name: "StarkNet Ecosystem",
  },
  twitter: {
    cardType: "summary_large_image",
    site: "@alpharoad_fi",
  },
};

export default defaultSEOConfig;
