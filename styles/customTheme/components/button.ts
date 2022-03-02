import type { DeepPartial, Theme } from "@chakra-ui/react";

const Button: DeepPartial<Theme["components"]["Button"]> = {
  baseStyle: {
    outline: "none",
    fontVariant: "none",
    textDecoration: "none !important",
    boxShadow: "none !important",

    _dark: {
      color: "whiteAlpha.900",
      border: "1px solid",
      borderColor: "whiteAlpha.300",
      bg: "transparent",
      _hover: {
        bg: "gray.800",
        borderColor: "gray.800",
      },
      _active: {
        bg: "gray.700",
        borderColor: "gray.700",
      },
    },
  },
};

export default Button;
