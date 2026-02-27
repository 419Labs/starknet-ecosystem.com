import "../styles/globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "nprogress/nprogress.css";

import { ChakraProvider } from "@chakra-ui/react";
import { config } from "@fortawesome/fontawesome-svg-core";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import { GeistPixelSquare } from "geist/font/pixel";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";
import Router from "next/router";
import Script from "next/script";
import NProgress from "nprogress";
import { useEffect, useState } from "react";

import Layout from "../components/layout/Layout";
import { TranslateProvider } from "../context/TranslateProvider";
import customTheme from "../styles/customTheme";

// Tell Font Awesome to skip adding the CSS automatically since it's being imported above
config.autoAddCss = false;

dayjs.extend(duration);

const COOKIE_CONSENT_KEY = "cookies-consent";
const SITE_URL = "https://www.starknet-ecosystem.com";
const OG_IMAGE_PATH = `${SITE_URL}/og-image.png`;
const LOCALES = ["en", "es", "zh_CN", "ko", "ja", "fr", "de", "tr", "pt", "it", "pl", "zh_TW"];

const ORGANIZATION_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Starknet Ecosystem",
  url: SITE_URL,
  logo: `${SITE_URL}/favicon-32x32.png`,
  sameAs: ["https://twitter.com/StarknetEco"],
};

const WEBSITE_JSONLD = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Starknet Ecosystem",
  url: SITE_URL,
  description: "The complete guide to the Starknet ecosystem. Explore 200+ live projects across DeFi, gaming, infrastructure, and more.",
};

function StarknetEcosystem({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [hasConsent, setHasConsent] = useState(false);

  useEffect(() => {
    NProgress.configure({ showSpinner: false, trickleSpeed: 200 });
    const start = () => NProgress.start();
    const done = () => NProgress.done();
    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", done);
    Router.events.on("routeChangeError", done);
    return () => {
      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeComplete", done);
      Router.events.off("routeChangeError", done);
    };
  }, []);

  useEffect(() => {
    const syncConsent = () => {
      setHasConsent(window.localStorage.getItem(COOKIE_CONSENT_KEY) === "true");
    };

    syncConsent();
    window.addEventListener("cookies-consent-updated", syncConsent);
    return () => window.removeEventListener("cookies-consent-updated", syncConsent);
  }, []);

  const cleanPath = router.asPath.split("?")[0].split("#")[0];
  const localePrefix = router.locale && router.locale !== router.defaultLocale ? `/${router.locale}` : "";
  const canonicalUrl = `${SITE_URL}${localePrefix}${cleanPath}`;

  return (
    <div className={GeistPixelSquare.variable}>
    <Head>
      <link rel="canonical" href={canonicalUrl} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={OG_IMAGE_PATH} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Starknet Ecosystem — Explore, Build, Ship" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@StarknetEco" />
      <meta name="twitter:image" content={OG_IMAGE_PATH} />
      {LOCALES.map((loc) => (
        <link
          key={loc}
          rel="alternate"
          hrefLang={loc.replace("_", "-")}
          href={`${SITE_URL}/${loc}${cleanPath}`}
        />
      ))}
      <link rel="alternate" hrefLang="x-default" href={`${SITE_URL}${cleanPath}`} />
      {/* eslint-disable-next-line react/no-danger */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ORGANIZATION_JSONLD) }} />
      {/* eslint-disable-next-line react/no-danger */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBSITE_JSONLD) }} />
    </Head>
    <TranslateProvider>
      <ChakraProvider theme={customTheme}>
        <Layout>
          <Component {...pageProps} />
          {hasConsent && (
            <>
              <Script
                src="https://www.googletagmanager.com/gtag/js?id=G-KW215DTHVD"
                strategy="afterInteractive"
              />
              <Script id="ga-init" strategy="afterInteractive">
                {`
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', 'G-KW215DTHVD');
                `}
              </Script>
              <Script id="hotjar-init" strategy="afterInteractive">
                {`
                  (function(h,o,t,j,a,r){
                      h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                      h._hjSettings={hjid:3341038,hjsv:6};
                      a=o.getElementsByTagName('head')[0];
                      r=o.createElement('script');r.async=1;
                      r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                      a.appendChild(r);
                  })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
                `}
              </Script>
              <Analytics />
              <SpeedInsights sampleRate={70} />
            </>
          )}
        </Layout>
      </ChakraProvider>
    </TranslateProvider>
    </div>
  );
}

export default StarknetEcosystem;
