import { useForm } from 'react-hook-form';
import Select from '../Input/Select/Select';
import Typography from '../Typography/Typography';
import { TableSelectLimit } from './tableStyles';

const TableLimit = ({ options, onChange }) => {
  const { control, setValue } = useForm();

  const optionsToShow = options.map(option => ({
    value: option,
    title: option
  }));

  return (
    <TableSelectLimit>
      <Typography color="#fff" wordWrap={false}>
        Límite
      </Typography>
      <form>
        <Select
          options={optionsToShow}
          size="sm"
          margin="0"
          control={control}
          name="table_limit"
          defaultValue={10}
          setValue={setValue}
          hasSearch={false}
          onChange={onChange}
        />
      </form>
    </TableSelectLimit>
  );
};

export default TableLimit;
