import type { DeepPartial, Theme } from "@chakra-ui/react";

/** extend additional color here */
const extendedColors: DeepPartial<
  Record<string, Theme["colors"]["blackAlpha"]>
> = {
  flat: {
    100: "#2ECC71",
    200: "#3498DB",
    300: "#9B59B6",
    400: "#34495E",
    500: "#F08080",
    600: "#647687",
    700: "#1ABC9C",
    800: "#DDA0DD",
    900: "#F0E68C",
  },
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
  onlyDust: {
    100: "#4329b8",
    200: "#db02fb",
    300: "#3802ee",
    400: "red",
    500: "#fde038",
    600: "",
    700: "",
    800: "",
    900: "",
  },
  primary: {
    200: "#2E5CFF",
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
