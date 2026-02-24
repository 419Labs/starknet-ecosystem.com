const Input = {
  baseStyle: {
    field: {
      borderRadius: "xl",
    },
  },
  variants: {
    outline: {
      field: {
        bg: "gray.900",
        border: "1px solid",
        borderColor: "whiteAlpha.100",
        color: "gray.50",
        _placeholder: {
          color: "gray.500",
        },
        _hover: {
          borderColor: "whiteAlpha.200",
        },
        _focus: {
          borderColor: "accent.500",
          boxShadow: "0 0 0 3px rgba(255, 107, 53, 0.15)",
        },
      },
    },
    glass: {
      field: {
        bg: "whiteAlpha.50",
        backdropFilter: "blur(20px)",
        border: "1px solid",
        borderColor: "whiteAlpha.100",
        color: "gray.50",
        _placeholder: {
          color: "gray.500",
        },
        _hover: {
          bg: "whiteAlpha.100",
        },
        _focus: {
          borderColor: "accent.500",
          boxShadow: "0 0 0 3px rgba(255, 107, 53, 0.15)",
        },
      },
    },
  },
  defaultProps: {
    variant: "outline",
  },
};

export default Input;
