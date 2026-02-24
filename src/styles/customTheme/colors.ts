
/** Premium Dark Theme with BTCFi Orange accent */
const semanticTokens = {
  colors: {
    bg: {
      primary: "#09090B",
      secondary: "#18181B",
      elevated: "#27272A",
      subtle: "rgba(255, 255, 255, 0.03)",
    },
    text: {
      primary: "#FAFAFA",
      secondary: "#A1A1AA",
      muted: "#71717A",
    },
    border: {
      default: "rgba(255, 255, 255, 0.06)",
      hover: "rgba(255, 255, 255, 0.12)",
      focus: "#FF6B35",
    },
    status: {
      live: "#22C55E",
      liveBg: "rgba(34, 197, 94, 0.15)",
      testnet: "#F59E0B",
      testnetBg: "rgba(245, 158, 11, 0.15)",
    },
  },
};

const colorScales: Record<string, any> = {
    // Orange accent (BTCFi aligned)
    accent: {
      50: "rgba(255, 107, 53, 0.08)",
      100: "rgba(255, 107, 53, 0.15)",
      200: "rgba(255, 107, 53, 0.25)",
      300: "#FDBA74",
      400: "#FB923C",
      500: "#FF6B35",
      600: "#F85A20",
      700: "#EA580C",
      800: "#C2410C",
      900: "#9A3412",
    },
    // Category colors
    category: {
      100: "#3B82F6",
      200: "#8B5CF6",
      300: "#EC4899",
      400: "#06B6D4",
      500: "#10B981",
      600: "#F59E0B",
      700: "#6366F1",
      800: "#EF4444",
      900: "#14B8A6",
    },
    // Flat colors for avatars
    flat: {
      100: "#FF6B35",
      200: "#3B82F6",
      300: "#8B5CF6",
      400: "#10B981",
      500: "#EC4899",
      600: "#06B6D4",
      700: "#F59E0B",
      800: "#6366F1",
      900: "#EF4444",
    },
    // Primary scale
    primary: {
      50: "rgba(255, 107, 53, 0.08)",
      100: "rgba(255, 107, 53, 0.15)",
      200: "rgba(255, 107, 53, 0.25)",
      300: "#FDBA74",
      400: "#FB923C",
      500: "#FF6B35",
      600: "#F85A20",
      700: "#18181B",
      800: "#27272A",
      900: "#09090B",
    },
    brand: {
      100: "rgba(255, 107, 53, 0.15)",
      200: "rgba(255, 107, 53, 0.25)",
      300: "#FDBA74",
      400: "#FF6B35",
      500: "#F85A20",
      600: "#EA580C",
      700: "#C2410C",
      800: "#9A3412",
      900: "#EA580C",
    },
    warning: {
      50: "rgba(245, 158, 11, 0.1)",
      100: "rgba(245, 158, 11, 0.2)",
      200: "#FDE68A",
      300: "#FCD34D",
      400: "#FBBF24",
      500: "#F59E0B",
      600: "#D97706",
      700: "#B45309",
      800: "#A16207",
      900: "#854D0E",
    },
    error: {
      50: "rgba(239, 68, 68, 0.1)",
      100: "rgba(239, 68, 68, 0.2)",
      200: "#FECACA",
      300: "#FCA5A5",
      400: "#F87171",
      500: "#EF4444",
      600: "#DC2626",
      700: "#B91C1C",
      800: "#991B1B",
      900: "#7F1D1D",
    },
    success: {
      50: "rgba(34, 197, 94, 0.1)",
      100: "rgba(34, 197, 94, 0.2)",
      200: "#BBF7D0",
      300: "#86EFAC",
      400: "#4ADE80",
      500: "#22C55E",
      600: "#16A34A",
      700: "#15803D",
      800: "#166534",
      900: "#14532D",
    },
    // Gray scale for dark mode
    gray: {
      50: "#FAFAFA",
      100: "#F4F4F5",
      200: "#E4E4E7",
      300: "#D4D4D8",
      400: "#A1A1AA",
      500: "#71717A",
      600: "#52525B",
      700: "#3F3F46",
      800: "#27272A",
      900: "#18181B",
      950: "#09090B",
    },
  };

const colors = {
  ...colorScales,
};

export default colors;
export { semanticTokens };
