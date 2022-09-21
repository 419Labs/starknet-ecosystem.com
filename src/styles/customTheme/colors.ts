import type { DeepPartial, Theme } from "@chakra-ui/react";

/** extend additional color here */
const extendedColors: DeepPartial<
  Record<string, Theme["colors"]["blackAlpha"]>
> = {
  brand: {
    100: "",
    200: "",
    300: "",
    400: "#fa6f31",
    500: "",
    600: "",
    700: "",
    800: "",
    900: "#ff5007",
  },
  primary: {
    300: "rgba(0,71,255,0.56)",
    500: "#7166F4",
    700: "#22244D",
    900: "#121232",
  },
  warning: {
    100: "#ffda95",
    200: "#f5a42a",
    800: "#A16207",
    900: "#854D0E",
  },
  error: {
    100: "#ff826e",
    900: "#FF4343",
  },
};

/** override chakra colors here */
const overridenChakraColors: DeepPartial<Theme["colors"]> = {};

const colors = {
  ...overridenChakraColors,
  ...extendedColors,
};

export default colors;
