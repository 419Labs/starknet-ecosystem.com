import { DeepPartial, Theme } from "@chakra-ui/react";

const Button: DeepPartial<Theme["components"]["Button"]> = {
  baseStyle: {
    borderRadius: "8px",
    outline: "none",
    fontVariant: "none",
    textDecoration: "none !important",
    boxShadow: "none !important",
    /* _light: {
      bg: "blue",
      color: "white"
    }, */
    _dark: {
      color: "whiteAlpha.900",
      bg: "gray.900",
      _hover: {
        bg: "gray.500",
      },
      _active: {
        bg: "gray.500",
      },
    },
  },
};

export default Button;
