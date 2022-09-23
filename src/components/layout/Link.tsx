import { Link as ChakraLink } from "@chakra-ui/layout";
import NextLink from "next/link";

interface LinkProps {
  children: string;
  active?: boolean;
  href: string;
}
function Link({ children, active, href }: LinkProps) {
  return (
    <NextLink href={href}>
      <ChakraLink
        opacity={active ? "1" : "0.5"}
        _hover={{ textDecoration: "none", opacity: "1" }}
      >
        {children}
      </ChakraLink>
    </NextLink>
  );
}

export default Link;
