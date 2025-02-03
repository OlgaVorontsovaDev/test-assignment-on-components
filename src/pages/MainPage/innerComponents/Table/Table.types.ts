import { HTMLAttributes, ReactNode } from 'react';

export type TableProps = {
  headers: (string | ReactNode)[];
  rows: (string | ReactNode)[][];
} & HTMLAttributes<HTMLTableElement>;
