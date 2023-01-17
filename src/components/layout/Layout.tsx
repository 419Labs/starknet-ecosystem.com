import { Box, Flex } from "@chakra-ui/layout";
import type { RenderProps } from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
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
  // Todo update this id to re-display the toast to the user after policies update
  // Todo maybe add a dynamic env variable for policy version
  const id = "cookies-consent";
  useEffect(() => {
    const isCookiesAccepted = localStorage.getItem(id) === "true";
    // If cookies already accepted or already displayed, do nothing
    if (toast.isActive(id) || isCookiesAccepted) {
      return;
    }
    toast({
      id,
      status: "success",
      duration: null,
      containerStyle: {
        maxWidth: "100%",
      },
      isClosable: true,
      render({ onClose }: RenderProps): React.ReactNode {
        const onAccept = () => {
          onClose();
          localStorage.setItem(id, "true");
        };
        return <CookiesToast onAccept={onAccept} />;
      },
    });
  }, [toast]);
  return (
    <Flex
      zIndex={1}
      position="relative"
      maxW="2100px"
      width={{ base: "100%", lg: "80%" }}
      px={{ sm: 4, lg: 0 }}
      direction="column"
      margin="0 auto"
      h="100%"
      w="full"
      transition="0.5s ease-out"
    >
      <Box
        width="full"
        left={0}
        right={0}
        paddingLeft={0}
        px={[4, 0]}
        transition="background-color .2s ease-in"
        zIndex={2000}
      >
        <Header />
      </Box>
      <Flex
        flex="1 1 auto"
        as="main"
        align="flex-start"
        justify="center"
        mt={24}
        px={[4, 0]}
      >
        {children}
      </Flex>
      <Footer />
    </Flex>
  );
}

export default Layout;
