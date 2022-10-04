import type { DeepPartial, Theme } from "@chakra-ui/react";

const Input: DeepPartial<Theme["components"]["Input"]> = {
  baseStyle: {
    field: {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      outline: "none",
      boxShadow: "none !important",
      _dark: {
        bg: "primary.700",
        _focus: {
          borderColor: "primary.500",
        },
      },
    },
  },
};

export default Input;
