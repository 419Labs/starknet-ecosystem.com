import { extendTheme } from "@chakra-ui/react";
import { Styles } from "@chakra-ui/theme-tools";

import colors from "./colors";
import Button from "./components/button";
import Input from "./components/input";
import fonts from "./fonts";

const globalStyles: Styles = {
  global: () => ({
    body: {
      color: "whiteAlpha.900",
      fontFeatureSettings: "'ss01' on,'ss02' on,'cv01' on,'cv03' on",
      fontVariant: "none !important",
      bg: "black",
      button: {
        // button breaking with globals variants(see: https://webkit.org/blog/28/buttons/)
        fontVariant: "none !important",
      },
    },
  }),
};
const customTheme = extendTheme({
  initialColorMode: "dark",
  useSystemColorMode: false,
  fonts,
  colors,
  styles: globalStyles,
  components: {
    Button,
    Input,
  },
});

export default customTheme;
