import { Flex, Link } from "@chakra-ui/layout";
import {
  Drawer as ChakraDrawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
} from "@chakra-ui/modal";
import type { ReactElement } from "react";

import Logo from "./Logo";

interface DrawerProps {
  links: { href: string; label: string }[];
  headerAction: ReactElement;
  isOpen: boolean;
  onClose: () => void;
}
function Drawer({ links, headerAction, isOpen, onClose }: DrawerProps) {
  return (
    <ChakraDrawer
      autoFocus={false}
      placement="top"
      onClose={onClose}
      isOpen={isOpen}
    >
      <DrawerOverlay />
      <DrawerContent bg="gray.800">
        <DrawerHeader borderBottomWidth="1px">
          <Flex w="full" direction="row" justify="space-between" align="center">
            <Logo justify="flex-start" />
            {headerAction}
          </Flex>
        </DrawerHeader>
        <DrawerBody>
          <Flex direction="column" justify="center" align="center">
            {links.map(({ href, label }) => {
              return (
                <Link
                  key={`drawer-item-${label}`}
                  py={2}
                  style={{ textDecoration: "none" }}
                  isExternal
                  href={href}
                >
                  {label}
                </Link>
              );
            })}
          </Flex>
        </DrawerBody>
      </DrawerContent>
    </ChakraDrawer>
  );
}

export default Drawer;
