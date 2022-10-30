import type { DeepPartial, Theme } from "@chakra-ui/react";

const Menu: DeepPartial<Theme["components"]["Menu"]> = {
  baseStyle: {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    list: {
      background: "primary.700",
    },
  },
};

export default Menu;
