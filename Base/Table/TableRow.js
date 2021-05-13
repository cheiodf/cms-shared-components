import { memo } from 'react';
import Checkbox from '../Input/Checkbox/Checkbox';
import TableCell from './TableCell';
import TablePopover from './TablePopover';
import { TableBodyRow } from './tableStyles';
import { useRouter } from 'next/router';

const TableRow = ({
  item,
  hasShadow,
  avatar,
  options,
  columns,
  index,
  dataLength,
  hasGlobalActions,
  primaryKey,
  selectedData,
  setSelectedData,
  path,
  isOptionsVisible
}) => {
  const router = useRouter();

  const isAvatarVisible = i => i === 0 && avatar;

  const checked = selectedData.some(el => el[primaryKey] === item[primaryKey]);
  const handleSetIsChecked = () => {
    if (checked) {
      const removeEl = selectedData.filter(
        el => el[primaryKey] !== item[primaryKey]
      );
      setSelectedData([...removeEl]);
    } else {
      setSelectedData([...selectedData, item]);
    }
  };

  const handleChaneRoute = () => {
    if (path) {
      const propToRepalce = path.substring(
        path.lastIndexOf('{[') + 2,
        path.lastIndexOf(']}')
      );

      const redirectTo = path.replace(
        `{[${propToRepalce}]}`,
        item[propToRepalce]
      );

      router.push(redirectTo);
    }
  };

  return (
    <TableBodyRow active={checked} onClick={handleChaneRoute} hasPath={path}>
      {hasGlobalActions ? (
        <TableCell hasDefaultValue={false} pr="0">
          <Checkbox
            checked={checked}
            onChange={handleSetIsChecked}
            id={item[primaryKey]}
          />
        </TableCell>
      ) : null}

      {columns.map(({ key, value, type }, i) => (
        <TableCell
          key={key}
          type={type}
          value={value ? value(item[key], item) : item[key]}
          hasAvatar={isAvatarVisible(i)}
          avatar={isAvatarVisible(i) && item[avatar]}
        />
      ))}

      {isOptionsVisible && options?.length ? (
        <TablePopover
          options={options}
          hasShadow={hasShadow}
          dataLength={dataLength}
          itemIndex={index}
          item={item}
        />
      ) : null}
    </TableBodyRow>
  );
};

export default memo(TableRow);
