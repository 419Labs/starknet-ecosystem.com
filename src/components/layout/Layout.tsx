import { Box, Flex } from "@chakra-ui/layout";
import { IconButton, useToast } from "@chakra-ui/react";
import type { RenderProps } from "@chakra-ui/toast/dist/toast.types";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { ReactNode } from "react";
import { useEffect, useState } from "react";

import CookiesToast from "../toasts/cookies-toast";

import Footer from "./Footer";
import Header from "./Header";

type LayoutProps = {
  children: ReactNode;
};

function ScrollToTopButton() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!show) return null;

  return (
    <IconButton
      aria-label="Scroll to top"
      icon={<Box as={FontAwesomeIcon} icon={faChevronUp} />}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      position="fixed"
      bottom={8}
      right={8}
      zIndex={50}
      size="md"
      bg="accent.500"
      color="white"
      borderRadius="0"
      _hover={{ bg: "accent.400" }}
      boxShadow="0 4px 20px rgba(255, 107, 53, 0.3)"
    />
  );
}

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
      <ScrollToTopButton />
    </Flex>
  );
}

export default Layout;
