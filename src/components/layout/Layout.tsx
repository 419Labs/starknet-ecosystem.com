import { Flex } from "@chakra-ui/layout";
import { useToast } from "@chakra-ui/react";
import type { RenderProps } from "@chakra-ui/toast/dist/toast.types";
import type { ReactNode } from "react";
import { useEffect } from "react";

import CookiesToast from "../toasts/cookies-toast";

import Footer from "./Footer";
import Header from "./Header";

type LayoutProps = {
  children: ReactNode;
};

function Layout({ children }: LayoutProps) {
  const toast = useToast();
  const id = "cookies-consent";

  useEffect(() => {
    const isCookiesAccepted = localStorage.getItem(id) === "true";
    if (toast.isActive(id) || isCookiesAccepted) {
      return;
    }
    toast({
      id,
      status: "success",
      position: "bottom",
      duration: null,
      containerStyle: {
        maxWidth: "100%",
        marginInline: "8px",
        marginBottom: "8px",
      },
      isClosable: true,
      render({ onClose }: RenderProps): React.ReactNode {
        const onAccept = () => {
          onClose();
          localStorage.setItem(id, "true");
          window.dispatchEvent(new Event("cookies-consent-updated"));
        };
        return <CookiesToast onAccept={onAccept} />;
      },
    });
  }, [toast]);

  return (
    <Flex
      position="relative"
      direction="column"
      minH="100vh"
      bg="black"
    >
      <Header />

      <Flex
        flex="1"
        as="main"
        direction="column"
        align="stretch"
      >
        {children}
      </Flex>

      <Footer />
    </Flex>
  );
}

export default Layout;
