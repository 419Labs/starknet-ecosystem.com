import { extendTheme } from "@chakra-ui/react";
import type { Styles } from "@chakra-ui/theme-tools";

import colors, { semanticTokens } from "./colors";
import Button from "./components/button";
import Card from "./components/card";
import Input from "./components/input";
import Menu from "./components/menu";
import Tabs from "./components/tabs";
import fonts from "./fonts";

const globalStyles: Styles = {
  global: () => ({
    body: {
      color: "gray.50",
      bg: "gray.950",
      fontFeatureSettings: "'ss01' on,'ss02' on,'cv01' on,'cv03' on",
    },
    "*::selection": {
      bg: "accent.500",
      color: "white",
    },
  }),
};

const customTheme = extendTheme({
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
  fonts,
  colors,
  semanticTokens,
  styles: globalStyles,
  components: {
    Button,
    Input,
    Menu,
    Card,
    Tabs,
  },
  shadows: {
    sm: "0 1px 2px rgba(0, 0, 0, 0.5)",
    md: "0 4px 12px rgba(0, 0, 0, 0.4)",
    lg: "0 8px 30px rgba(0, 0, 0, 0.5)",
    xl: "0 20px 50px rgba(0, 0, 0, 0.6)",
    glow: "0 0 60px rgba(255, 107, 53, 0.4)",
    "glow-sm": "0 0 20px rgba(255, 107, 53, 0.3)",
  },
  radii: {
    sm: "6px",
    md: "8px",
    lg: "12px",
    xl: "16px",
    "2xl": "24px",
    full: "9999px",
  },
});

export default customTheme;
