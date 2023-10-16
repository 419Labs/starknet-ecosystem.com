import type { DeepPartial, Theme } from "@chakra-ui/react";

const Menu: DeepPartial<Theme["components"]["Menu"]> = {
  baseStyle: {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    list: {
      background: "primary.700",
    },
    item: {
      bg: "transparent",
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      _hover: {
        bg: "whiteAlpha.200",
      },
    },
  },
};

export default Menu;
