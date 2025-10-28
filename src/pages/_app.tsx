import "../styles/globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";

import { ChakraProvider } from "@chakra-ui/react";
import { config } from "@fortawesome/fontawesome-svg-core";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import Head from "next/head";

import defaultSEOConfig from "../../next-seo.config";
import Layout from "../components/layout/Layout";
import { TranslateProvider } from "../context/TranslateProvider";
import customTheme from "../styles/customTheme";

// Tell Font Awesome to skip adding the CSS automatically since it's being imported above
config.autoAddCss = false;

dayjs.extend(duration);

function StarknetEcosystem({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <TranslateProvider>
      <ChakraProvider theme={customTheme}>
        <Head>
          <title>{defaultSEOConfig.title}</title>
          <meta name="description" content={defaultSEOConfig.description} />
          <link rel="canonical" href={defaultSEOConfig.canonical} />

          {/* Open Graph tags */}
          <meta property="og:url" content={defaultSEOConfig.openGraph.url} />
          <meta property="og:title" content={defaultSEOConfig.openGraph.title} />
          <meta property="og:description" content={defaultSEOConfig.openGraph.description} />
          <meta property="og:site_name" content={defaultSEOConfig.openGraph.site_name} />
          {defaultSEOConfig.openGraph.images?.[0] && (
            <>
              <meta property="og:image" content={defaultSEOConfig.openGraph.images[0].url} />
              <meta property="og:image:alt" content={defaultSEOConfig.openGraph.images[0].alt} />
            </>
          )}

          {/* Twitter Card tags */}
          <meta name="twitter:card" content={defaultSEOConfig.twitter.cardType} />
          <meta name="twitter:site" content={defaultSEOConfig.twitter.site} />
        </Head>
        <Layout>
          <Component {...pageProps} />
          <Analytics />
          <SpeedInsights sampleRate={70} route={router.pathname} />
        </Layout>
      </ChakraProvider>
    </TranslateProvider>
  );
}

export default StarknetEcosystem;
