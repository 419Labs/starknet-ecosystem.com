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
import { NextSeo } from "next-seo";

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
        <NextSeo {...defaultSEOConfig} />
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
