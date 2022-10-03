import type { DeepPartial, Theme } from "@chakra-ui/react";

const Menu: DeepPartial<Theme["components"]["Tabs"]> = {
  baseStyle: {
    tab: {
      color: "whiteAlpha.600",
      _focus: {
        boxShadow: "none",
      },
    },
  },
};

export default Menu;
