/** @type {import('next-seo').DefaultSeoProps} */
const defaultSEOConfig = {
  title: "StarkNet Ecosystem | Explore all projects building & running on StarkNet L2",
  titleTemplate: "%s",
  defaultTitle: "StarkNet Ecosystem | Explore all projects building & running on StarkNet L2",
  description: "Explore all projects building & running on StarkNet L2",
  canonical: "https://starknet-ecosystem.com",
  openGraph: {
    url: "https://starknet-ecosystem.com",
    title: "StarkNet Ecosystem",
    description: "Explore all projects building & running on StarkNet L2",
    images: [
      {
        url: "https://alpharoad.fi/starknet-banner.jpg",
        alt: "StarkNet Ecosystem logo",
      },
    ],
    site_name: "StarkNet Ecosystem",
  },
  twitter: {
    cardType: "summary_large_image",
    site: "@alpharoad_fi",
  }
};

export default defaultSEOConfig;
