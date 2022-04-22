export const formatCompactNumber = (value: number): string =>
  Intl.NumberFormat("en-US", {
    notation: "compact",
    maximumFractionDigits: 3,
  }).format(value);
