const Button = {
  baseStyle: {
    fontWeight: "600",
    borderRadius: "lg",
    transition: "all 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
  },
  variants: {
    solid: {
      bg: "accent.500",
      color: "white",
      _hover: {
        bg: "accent.600",
        transform: "translateY(-2px)",
        boxShadow: "glow-sm",
      },
      _active: {
        bg: "accent.700",
        transform: "translateY(0)",
      },
    },
    outline: {
      bg: "transparent",
      color: "gray.50",
      border: "1px solid",
      borderColor: "whiteAlpha.100",
      _hover: {
        bg: "whiteAlpha.50",
        borderColor: "whiteAlpha.200",
      },
      _active: {
        bg: "whiteAlpha.100",
      },
    },
    ghost: {
      bg: "transparent",
      color: "gray.400",
      _hover: {
        bg: "whiteAlpha.50",
        color: "gray.50",
      },
      _active: {
        bg: "whiteAlpha.100",
      },
    },
    glass: {
      bg: "whiteAlpha.50",
      color: "gray.50",
      backdropFilter: "blur(20px)",
      border: "1px solid",
      borderColor: "whiteAlpha.100",
      _hover: {
        bg: "whiteAlpha.100",
        borderColor: "whiteAlpha.200",
      },
    },
    accent: {
      bg: "accent.50",
      color: "accent.500",
      _hover: {
        bg: "accent.100",
      },
      _active: {
        bg: "accent.200",
      },
    },
    glow: {
      bg: "accent.500",
      color: "white",
      boxShadow: "glow-sm",
      _hover: {
        bg: "accent.600",
        boxShadow: "glow",
        transform: "translateY(-2px)",
      },
    },
  },
  defaultProps: {
    variant: "outline",
  },
};

export default Button;
