import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";
import defaultSEOConfig from "../next-seo.config";

import Layout from "../components/layout/Layout";
import customTheme from "../styles/customTheme";

function StarknetEcosystem({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={customTheme}>
        <DefaultSeo {...defaultSEOConfig} />
        <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default StarknetEcosystem;
