import { Box, Flex, HStack, Link, Text, VStack, Wrap, WrapItem } from "@chakra-ui/layout";
import {
  Drawer as ChakraDrawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  IconButton,
} from "@chakra-ui/react";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface DrawerProps {
  links: { href: string; label: string; icon?: any; isExternal?: boolean }[];
  isOpen: boolean;
  onClose: () => void;
  localeLabels?: Record<string, string>;
  currentLocale?: string;
  onLocaleChange?: (locale: string) => void;
}

function Drawer({ links, isOpen, onClose, localeLabels, currentLocale, onLocaleChange }: DrawerProps) {
  return (
    <ChakraDrawer
      autoFocus={false}
      placement="right"
      onClose={onClose}
      isOpen={isOpen}
      size="full"
    >
      <DrawerOverlay bg="rgba(0, 0, 0, 0.8)" backdropFilter="blur(10px)" />
      <DrawerContent bg="black">
        <DrawerHeader
          borderBottomWidth="1px"
          borderColor="whiteAlpha.100"
          py={4}
          px={6}
        >
          <Flex w="full" direction="row" justify="space-between" align="center">
            <HStack spacing={3}>
              <Box
                as="img"
                src="/favicon-32x32.png"
                alt="Starknet"
                w="32px"
                h="32px"
              />
              <Text
                fontSize="14px"
                fontWeight="600"
                color="white"
                letterSpacing="-0.02em"
              >
                STARKNET
              </Text>
            </HStack>
            <IconButton
              aria-label="Close menu"
              icon={<FontAwesomeIcon icon={faXmark} />}
              variant="ghost"
              color="white"
              fontSize="xl"
              onClick={onClose}
              _hover={{ bg: "whiteAlpha.100" }}
            />
          </Flex>
        </DrawerHeader>
        <DrawerBody px={6} py={8}>
          <VStack spacing={0} align="stretch">
            {links.map(({ href, label, isExternal }, index) => {
              return (
                <Link
                  key={`drawer-item-${label}`}
                  py={5}
                  style={{ textDecoration: "none" }}
                  isExternal={isExternal}
                  href={href}
                  borderBottom="1px solid"
                  borderColor="whiteAlpha.100"
                  _hover={{ bg: "whiteAlpha.050" }}
                  transition="background 0.15s ease"
                  onClick={onClose}
                >
                  <HStack justifyContent="space-between">
                    <Text
                      fontSize="11px"
                      color="gray.600"
                      fontFamily="mono"
                    >
                      {String(index + 1).padStart(2, "0")}
                    </Text>
                    <Text
                      fontSize="18px"
                      fontWeight="500"
                      color="white"
                      textTransform="uppercase"
                      letterSpacing="0.05em"
                    >
                      {label}
                    </Text>
                  </HStack>
                </Link>
              );
            })}
          </VStack>

          {localeLabels && onLocaleChange && (
            <Box mt={8} pt={6} borderTop="1px solid" borderColor="whiteAlpha.100">
              <Text fontSize="11px" color="gray.600" textTransform="uppercase" letterSpacing="0.05em" mb={3}>
                Language
              </Text>
              <Wrap spacing={2}>
                {Object.entries(localeLabels).map(([code, label]) => (
                  <WrapItem key={code}>
                    <Box
                      as="button"
                      px={3}
                      py={1.5}
                      fontSize="12px"
                      fontWeight={currentLocale === code ? "600" : "400"}
                      color={currentLocale === code ? "white" : "gray.500"}
                      border="1px solid"
                      borderColor={currentLocale === code ? "accent.500" : "whiteAlpha.200"}
                      bg={currentLocale === code ? "whiteAlpha.100" : "transparent"}
                      _hover={{ borderColor: "whiteAlpha.400", color: "white" }}
                      transition="all 0.15s ease"
                      onClick={() => {
                        onLocaleChange(code);
                        onClose();
                      }}
                    >
                      {label}
                    </Box>
                  </WrapItem>
                ))}
              </Wrap>
            </Box>
          )}
        </DrawerBody>
      </DrawerContent>
    </ChakraDrawer>
  );
}

export default Drawer;
