export const formatLabelString = (label: string): string => {
  const trimmedLabel = label.trim();
  const len = trimmedLabel.length;
  if (len > 3) return trimmedLabel.slice(0, 3);
  return trimmedLabel;
};
