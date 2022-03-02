import { Box, Flex } from "@chakra-ui/layout";
import type { ReactNode } from "react";
import Particles from "react-tsparticles";

import Footer from "./Footer";
import Header from "./Header";
import ParticlesOptions from "./Particles";

type LayoutProps = {
  children: ReactNode;
};

function Layout({ children }: LayoutProps) {
  return (
    <>
      <Flex
        zIndex={1}
        position="relative"
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
          position="fixed"
          left={0}
          right={0}
          paddingLeft={{ sm: 0, md: "10%" }}
          px={{ sm: 4, md: 0 }}
          transition="background-color .2s ease-in"
          bgColor="black"
          zIndex={2000}
        >
          <Box
            w="full"
            paddingLeft={{ sm: 0, md: "10%" }}
            paddingRight={{ sm: 0, md: "10%" }}
          >
            <Header />
          </Box>
        </Box>
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
      <Particles id="tsparticles" options={{ ...ParticlesOptions }} />
    </>
  );
}

export default Layout;
