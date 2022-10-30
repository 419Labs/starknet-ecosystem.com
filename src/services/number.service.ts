export const formatCompactNumber = (value: number | string): string => {
  if (typeof value === "string") return parseFloat(value).toFixed(4);
  return Intl.NumberFormat("en-US", {
    notation: "compact",
    maximumFractionDigits: 3,
  }).format(value);
};
