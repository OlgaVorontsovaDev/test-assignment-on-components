import { FC, useMemo } from 'react';
import cn from 'classnames';

import { TableProps } from './Table.types';
import styles from './Table.styles.module.styl';

export const Table: FC<TableProps> = ({
  headers,
  rows,
  className,
  ...props
}) => {
  const classNames = useMemo(() => {
    return cn(styles.table, className);
  }, [className]);

  return (
    <table {...props} className={classNames}>
      <thead>
        <tr>
          <th />
          {headers.map((header, index) => (
            <th key={index}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, rowIndex) => (
          <tr key={rowIndex}>
            <td>{row[0]}</td>
            {row.slice(1).map((cell, cellIndex) => (
              <td key={cellIndex}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
