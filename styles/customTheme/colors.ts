import { DeepPartial, Theme } from "@chakra-ui/react";

/** extend additional color here */
const extendedColors: DeepPartial<
  Record<string, Theme["colors"]["blackAlpha"]>
> = {
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
const overridenChakraColors: DeepPartial<Theme["colors"]> = {
  gray: {
    300: "#40444f",
    500: "#2c2f35",
    900: "#191b1f",
  },
};

const colors = {
  ...overridenChakraColors,
  ...extendedColors,
};

export default colors;
