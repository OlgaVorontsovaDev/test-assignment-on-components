import { formatLabelNumber } from '../formatLabelNumber';
import { formatLabelString } from '../formatLabelString';

export const formatLabel = (label: string | number): string => {
  if (typeof label === 'string') {
    return formatLabelString(label);
  }
  return formatLabelNumber(label);
};
