const Card = {
  baseStyle: {
    container: {
      bg: "gray.900",
      borderRadius: "xl",
      border: "1px solid",
      borderColor: "whiteAlpha.100",
      overflow: "hidden",
      transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
    },
    header: {
      p: 5,
    },
    body: {
      p: 5,
      pt: 0,
    },
    footer: {
      p: 5,
      pt: 0,
    },
  },
  variants: {
    elevated: {
      container: {
        bg: "gray.900",
        _hover: {
          transform: "translateY(-4px)",
          boxShadow: "xl",
          borderColor: "whiteAlpha.200",
        },
      },
    },
    glass: {
      container: {
        bg: "whiteAlpha.50",
        backdropFilter: "blur(20px)",
        borderColor: "whiteAlpha.100",
        _hover: {
          bg: "whiteAlpha.100",
          borderColor: "whiteAlpha.200",
        },
      },
    },
    glow: {
      container: {
        bg: "gray.900",
        position: "relative",
        _hover: {
          transform: "translateY(-4px)",
          borderColor: "accent.500",
          boxShadow: "0 0 40px rgba(255, 107, 53, 0.15)",
        },
      },
    },
    featured: {
      container: {
        bg: "linear-gradient(180deg, rgba(255, 107, 53, 0.1) 0%, rgba(255, 107, 53, 0.02) 100%)",
        borderColor: "accent.500",
        borderWidth: "1px",
        _hover: {
          transform: "translateY(-6px)",
          boxShadow: "glow",
        },
      },
    },
  },
  defaultProps: {
    variant: "elevated",
  },
};

export default Card;
