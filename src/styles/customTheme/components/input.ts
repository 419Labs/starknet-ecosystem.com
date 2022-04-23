import type { DeepPartial, Theme } from "@chakra-ui/react";

const Input: DeepPartial<Theme["components"]["Input"]> = {
  baseStyle: {
    field: {
      outline: "none",
      boxShadow: "none !important",
      _dark: {
        color: "whiteAlpha.900",
        border: "2px solid",
        borderColor: "gray.800",
        bg: "black",
        _focus: {
          borderColor: "brand.900",
        },
      },
    },
  },
};

export default Input;
