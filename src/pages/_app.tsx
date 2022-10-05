import "../styles/globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { ChakraProvider } from "@chakra-ui/react";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import { NextSeo } from "next-seo";
import type { AppProps } from "next/app";

import defaultSEOConfig from "../../next-seo.config";
import Layout from "../components/layout/Layout";
import { TranslateProvider } from "../context/TranslateProvider";
import customTheme from "../styles/customTheme";

import { useEffect, useState } from "react";

dayjs.extend(duration);

function StarknetEcosystem({ Component, pageProps }: AppProps) {

  const [isModalOpen, setIsModalOpen] = useState('none');

  useEffect(() => {
    setTimeout(() => {
      setIsModalOpen("flex")
    }, 0)
  }, [])

  const closeModal = () => {
    setIsModalOpen("none")
  }

  return (
    <>
      <div className="dialog" style={{ display: isModalOpen }}>
        <div className="dialog-container">
          <div className="dialog-icon">
            <svg t="1664901067773" className="icon-yk_yuanquan_fill" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1650" width="64" height="64"><path d="M512 65.98144c-245.91872 0-446.01856 200.09472-446.01856 446.01856 0 245.95456 200.064 446.01856 446.01856 446.01856s446.01856-200.064 446.01856-446.01856c0-245.91872-200.064-446.01856-446.01856-446.01856z" fill="#D3FAE5" p-id="1651"></path></svg>
            <svg t="1664900854839" className="icon-warning-full" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1506" width="32" height="32"><path d="M1014.9 864.7L791.1 477.1 567.3 89.5c-12.3-21.3-33.9-32-55.4-32-21.6 0-43.1 10.7-55.4 32L232.7 477.1 8.9 864.7c-24.6 42.7 6.2 96 55.4 96h895.2c49.3 0 80-53.3 55.4-96z m-558.4-77.4v-55.5c0-15.3 12.4-27.7 27.7-27.7h55.5c15.3 0 27.7 12.4 27.7 27.7v55.5c0 15.3-12.4 27.7-27.7 27.7h-55.5c-15.2 0-27.7-12.4-27.7-27.7z m110.3-388.8l-12.9 270.1c-0.2 3.7-3.2 6.6-6.9 6.6h-70c-3.7 0-6.8-2.9-6.9-6.6l-12.9-270.1c-0.4-7.9 5.9-14.5 13.9-14.5h81.8c7.9 0 14.3 6.6 13.9 14.5z" fill="#1B936D" p-id="1507"></path></svg>
          </div>
          <p className="dialog-content">The links in the StarkNet Ecosystem are provided as a convenience and for informational purposes only; they do not constitute an endorsement or approval by Offchain Labs of any of the projects or services listed therein. Offchain Labs bears no responsibility for the accuracy, legality, security or content of the external sites linked or for that of subsequent links. For any questions or comments surrounding any of the projects listed, please contact such projects directly.</p>
          <button className="dialog-button" onClick={closeModal}>OK</button>
        </div>
      </div>

      <TranslateProvider>
        <ChakraProvider theme={customTheme}>
          <NextSeo {...defaultSEOConfig} />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ChakraProvider>
      </TranslateProvider>
    </>
  );
}

export default StarknetEcosystem;
