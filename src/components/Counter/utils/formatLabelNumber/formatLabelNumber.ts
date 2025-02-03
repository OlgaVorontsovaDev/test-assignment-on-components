export const formatLabelNumber = (label: number): string => {
  if (label > 99) return '99+';
  if (label < 0) return '0';
  return String(label);
};
