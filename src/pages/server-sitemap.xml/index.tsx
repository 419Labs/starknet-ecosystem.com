import type { GetServerSideProps } from "next";
import { getServerSideSitemapLegacy } from "next-sitemap";

import { allProjects } from "../../../data/ecosystem";

const SITE_URL = "https://www.starknet-ecosystem.com";
const LOCALES = ["en", "es", "zh_CN", "ko", "ja", "fr", "de", "tr", "pt", "it", "pl", "zh_TW"];

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const visibleProjects = allProjects.filter((p) => !p.isHidden);

  const fields = visibleProjects.flatMap((project) => ({
    loc: `${SITE_URL}/projects/${project.id}`,
    lastmod: new Date().toISOString(),
    alternateRefs: LOCALES.map((locale) => ({
      href: `${SITE_URL}/${locale}/projects/${project.id}`,
      hreflang: locale.replace("_", "-"),
    })),
  }));

  return getServerSideSitemapLegacy(ctx, fields);
};

export default function SitemapIndex() {
  return null;
}
