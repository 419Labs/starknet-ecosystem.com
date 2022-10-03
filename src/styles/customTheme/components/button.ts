import type { DeepPartial, Theme } from "@chakra-ui/react";

const Button: DeepPartial<Theme["components"]["Button"]> = {
  baseStyle: {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    outline: "none",
    fontVariant: "none",
    textDecoration: "none !important",
    boxShadow: "none !important",

    _dark: {
      color: "whiteAlpha.900",
      border: "1px solid",
      // eslint-disable-next-line sonarjs/no-duplicate-string
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
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      _dark: {
        outline: "none",
        bg: "primary.200",
        borderColor: "primary.200",
        _hover: {
          // eslint-disable-next-line sonarjs/no-duplicate-string
          bg: "primary.300",
          borderColor: "primary.300",
        },
        _active: {
          bg: "primary.300",
          opacity: 0.7,
        },
      },
    },
  },
};

export default Button;
