import { memo } from 'react';
import Button from '../Button/Button';
import {
  TableButtonsContainer,
  TableHeaderContainer,
  TableTitle
} from './tableStyles';

// table header with title and global action buttons
const TableHeader = ({ globalActions, title, selectedData }) => {
  return (
    <TableHeaderContainer isPaddingMinor={globalActions?.length || title}>
      {title ? <TableTitle>{title}</TableTitle> : <span></span>}
      {globalActions?.length ? (
        <TableButtonsContainer>
          {globalActions.map(({ title, onClick, buttonProps }, i) => (
            <Button
              key={i}
              onClick={() => onClick(selectedData)}
              size="sm"
              {...buttonProps}
              disabled={!selectedData.length || buttonProps?.disabled}
            >
              {title}
            </Button>
          ))}
        </TableButtonsContainer>
      ) : null}
    </TableHeaderContainer>
  );
};

export default memo(TableHeader);
