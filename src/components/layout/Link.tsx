import type { LinkProps } from "@chakra-ui/layout";
import { Box, Link as ChakraLink } from "@chakra-ui/layout";
import NextLink from "next/link";

interface Props extends LinkProps {
  active?: boolean;
  color?: string;
  hoverOpacity?: string;
  href: string;
  fontWeight?: string;
  fontSize?: string;
  isExternal?: boolean;
}
function Link({
  children,
  active,
  href,
  color,
  hoverOpacity = "1",
  fontWeight,
  fontSize,
  isExternal,
}: Props) {
  return (
    <Box
      fontSize={fontSize}
      fontWeight={fontWeight}
      color={color}
      opacity={color || active ? "1" : "0.5"}
      transition=".4s all ease"
      _hover={{
        textDecoration: "none",
        opacity: hoverOpacity,
      }}
    >
      {isExternal ? (
        <ChakraLink
          _hover={{
            textDecoration: "none",
            opacity: hoverOpacity,
          }}
          isExternal
          href={href}
        >
          {children}
        </ChakraLink>
      ) : (
        <NextLink href={href}>{children}</NextLink>
      )}
    </Box>
  );
}

export default Link;
