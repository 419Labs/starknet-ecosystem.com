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
      borderColor: "primary.700",
      bg: "transparent",
      _hover: {
        bg: "primary.700",
        borderColor: "primary.700",
      },
      _active: {
        bg: "primary.700",
        borderColor: "primary.700",
      },
    },
  },
  variants: {
    outline: {
      _dark: {
        bg: "gray.800",
        borderColor: "brand.900",
        _hover: {
          bg: "brand.900",
          borderColor: "brand.900",
        },
        _active: {
          bg: "brand.900",
          opacity: 0.7,
        },
      },
    },
  },
};

export default Button;
