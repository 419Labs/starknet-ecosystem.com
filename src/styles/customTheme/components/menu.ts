import type { DeepPartial, Theme } from "@chakra-ui/react";

const Menu: DeepPartial<Theme["components"]["Menu"]> = {
  baseStyle: {
    list: {
      background: "primary.700",
    },
  },
};

export default Menu;
