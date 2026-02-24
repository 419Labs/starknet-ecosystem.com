const Tabs = {
  baseStyle: {
    tab: {
      color: "text.muted",
      fontWeight: "500",
      _focus: {
        boxShadow: "none",
      },
      _selected: {
        color: "accent.600",
        borderColor: "accent.500",
      },
      _hover: {
        color: "text.primary",
      },
    },
    tablist: {
      borderColor: "border.default",
    },
    tabpanel: {
      px: 0,
    },
  },
};

export default Tabs;
