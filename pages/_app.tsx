import "../styles/globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { ChakraProvider } from "@chakra-ui/react";
import { NextSeo } from "next-seo";
import type { AppProps } from "next/app";

import Layout from "../components/layout/Layout";
import defaultSEOConfig from "../next-seo.config";
import customTheme from "../styles/customTheme";

function StarknetEcosystem({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={customTheme}>
      <NextSeo {...defaultSEOConfig} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default StarknetEcosystem;
