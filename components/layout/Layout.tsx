import { Flex } from "@chakra-ui/layout";
import type { ReactNode } from "react";

import Footer from "./Footer";
import Header from "./Header";

type LayoutProps = {
  children: ReactNode;
};

function Layout({ children }: LayoutProps) {
  return (
    <Flex
      width={{ sm: "100%", md: "80%" }}
      px={{ sm: 4, md: 0 }}
      direction="column"
      margin="0 auto"
      h="100%"
      w="full"
      transition="0.5s ease-out"
    >
      <Header />
      <Flex
        flex="1 1 auto"
        as="main"
        align="flex-start"
        justify="center"
        mt={24}
      >
        {children}
      </Flex>
      <Footer />
    </Flex>
  );
}

export default Layout;
