import type { LinkProps } from "@chakra-ui/layout";
import { Box, Link as ChakraLink } from "@chakra-ui/layout";
import NextLink from "next/link";

interface Props extends LinkProps {
  active?: boolean;
  color?: string;
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
  fontWeight,
  fontSize,
  isExternal,
}: Props) {
  return (
    <Box
      fontSize={fontSize}
      fontWeight={fontWeight}
      color={color || (active ? "accent.600" : "text.secondary")}
      transition="color 0.15s ease"
      _hover={{
        textDecoration: "none",
        color: active ? "accent.600" : "text.primary",
      }}
    >
      {isExternal ? (
        <ChakraLink
          _hover={{
            textDecoration: "none",
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
