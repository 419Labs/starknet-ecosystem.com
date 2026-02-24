const SITE_URL = "https://www.starknet-ecosystem.com";
const LOCALES = ["en", "es", "zh_CN", "ko", "ja", "fr", "de", "tr", "pt", "it", "pl", "zh_TW"];

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: SITE_URL,
  generateRobotsTxt: true,
  generateIndexSitemap: true,
  exclude: ["/server-sitemap.xml"],
  robotsTxtOptions: {
    additionalSitemaps: [`${SITE_URL}/server-sitemap.xml`],
  },
  alternateRefs: LOCALES.map((locale) => ({
    href: `${SITE_URL}/${locale}`,
    hreflang: locale.replace("_", "-"),
  })),
};
