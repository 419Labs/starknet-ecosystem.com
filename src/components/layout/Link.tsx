import { Link as ChakraLink } from "@chakra-ui/layout";
import NextLink from "next/link";

interface LinkProps {
  children: string;
  active?: boolean;
  color?: string;
  hoverOpacity?: string;
  href: string;
  fontWeight?: string;
  fontSize?: string;
}
function Link({
  children,
  active,
  href,
  color,
  hoverOpacity = "1",
  fontWeight,
  fontSize,
}: LinkProps) {
  return (
    <NextLink href={href}>
      <ChakraLink
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
        {children}
      </ChakraLink>
    </NextLink>
  );
}

export default Link;
