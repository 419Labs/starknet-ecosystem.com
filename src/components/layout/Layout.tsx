import { Box, Flex } from "@chakra-ui/layout";
import type { ReactNode } from "react";

import Footer from "./Footer";
import Header from "./Header";

type LayoutProps = {
  children: ReactNode;
};

function Layout({ children }: LayoutProps) {
  return (
    <Flex
      zIndex={1}
      position="relative"
      maxW="2100px"
      width={{ sm: "100%", md: "80%" }}
      px={{ sm: 4, md: 0 }}
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
