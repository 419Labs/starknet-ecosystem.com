import {Flex} from "@chakra-ui/layout";
import {ReactNode} from "react";
import Header from "./Header";
import Footer from "./Footer";

type LayoutProps = {
    children: ReactNode;
};

function Layout({ children }: LayoutProps) {
    return <Flex direction="column" margin="0 auto" h="100%" w="full" transition="0.5s ease-out">
        <Header />
        <Flex
            flex="1 1 auto"
            as="main"
            align="flex-start"
            justify="center"
            mt={36}
        >
            {children}
        </Flex>
        <Footer />
    </Flex>
}

export default Layout
