import { memo, useEffect } from 'react';
import { ArrowDownIcon } from '../../Icons';
import Checkbox from '../Input/Checkbox/Checkbox';
import {
  TableHeadContainer,
  TableHeadRow,
  TableHeadCell,
  TableHeadCellSubContainer,
  TableHeadCellArrowContainer
} from './tableStyles';

const TableHead = ({
  hasGlobalActions,
  columns,
  hasOptions,
  sortByColumn,
  setSortByColumn,
  setSelectedData,
  setSortedData,
  hasOptionsShadow,
  isChecked,
  data
}) => {
  // sort data
  useEffect(() => {
    const newSortedData = [...data].sort((a, b) => {
      const _a = a[sortByColumn.column]?.toString().toLowerCase().trim();
      const _b = b[sortByColumn.column]?.toString().toLowerCase().trim();

      const result =
        _a?.localeCompare(_b, undefined, { numeric: true }) === -1 ? -1 : 1;

      return result * sortByColumn.order;
    });

    setSortedData(newSortedData);
  }, [sortByColumn, data]);

  // change sort state
  const handleSetSort = column => {
    const order = column !== sortByColumn.column ? 1 : sortByColumn.order * -1;
    setSortByColumn({ column, order });
  };

  return (
    <TableHeadContainer>
      <TableHeadRow>
        {hasGlobalActions ? (
          <TableHeadCell width="1px" pr="0">
            <Checkbox
              checked={isChecked}
              onChange={() =>
                isChecked ? setSelectedData([]) : setSelectedData([...data])
              }
              id="selectAllData"
            />
          </TableHeadCell>
        ) : null}

        {columns.map(column => {
          return (
            <TableHeadCell
              key={column.key}
              onClick={() => handleSetSort(column.key)}
              active={sortByColumn.column === column.key}
            >
              <TableHeadCellSubContainer>
                <span>{column.title}</span>
                {sortByColumn.column === column.key && (
                  <TableHeadCellArrowContainer order={sortByColumn.order}>
                    <ArrowDownIcon width={20} color="var(--table-head-color)" />
                  </TableHeadCellArrowContainer>
                )}
              </TableHeadCellSubContainer>
            </TableHeadCell>
          );
        })}
        {hasOptions ? (
          <TableHeadCell width="1px" options hasShadow={hasOptionsShadow} />
        ) : null}
      </TableHeadRow>
    </TableHeadContainer>
  );
};

export default memo(TableHead);
