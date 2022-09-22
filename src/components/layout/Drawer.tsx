import { Flex, HStack, Link, Text } from "@chakra-ui/layout";
import {
  Drawer as ChakraDrawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
} from "@chakra-ui/modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { ReactElement } from "react";

import Logo from "./Logo";

interface DrawerProps {
  links: { href: string; label: string; icon?: any; isExternal?: boolean }[];
  headerAction?: ReactElement;
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
      <DrawerContent bg="primary.700">
        <DrawerHeader borderBottomWidth="1px">
          <Flex w="full" direction="row" justify="space-between" align="center">
            <Logo justify="flex-start" />
            {headerAction}
          </Flex>
        </DrawerHeader>
        <DrawerBody>
          <Flex direction="column" justify="center" align="flex-start">
            {links.map(({ href, label, icon, isExternal }) => {
              return (
                <Link
                  w="full"
                  key={`drawer-item-${label}`}
                  py={2}
                  style={{ textDecoration: "none" }}
                  isExternal={isExternal}
                  href={href}
                >
                  <HStack justifyContent="space-between">
                    <Text>{label}</Text>
                    {icon && <FontAwesomeIcon fontSize="24px" icon={icon} />}
                  </HStack>
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
