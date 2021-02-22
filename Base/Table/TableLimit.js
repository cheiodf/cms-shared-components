import { memo } from 'react';
import useLimit from '../../hooks/useLimit';
import Select from '../Input/Select/Select';
import Typography from '../Typography/Typography';
import { TableSelectLimit } from './tableStyles';

const TableLimit = ({ setLimit }) => {
  const { limit } = useLimit();

  const setTableLimitLocal = value => {
    window.localStorage.setItem('tableLimit', value);
    setLimit(value);
  };

  const options = [10, 20, 30, 40, 50, 100, 200];
  const optionsToShow = options.map(option => ({
    value: option,
    title: option
  }));

  return (
    <TableSelectLimit>
      <Typography color="#fff" wordWrap={false}>
        Límite
      </Typography>
      <Select
        options={optionsToShow}
        size="sm"
        margin="0"
        name="table_limit"
        defaultValue={limit}
        hasSearch={false}
        atChangeValue={value => setTableLimitLocal(value)}
      />
    </TableSelectLimit>
  );
};

export default memo(TableLimit);
