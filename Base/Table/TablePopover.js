import { useState } from 'react';
import { MoreIcon } from '../../../components/Icons';
import Popover from '../Popover/Popover';
import PopoverItem from '../Popover/PopoverItem';
import TableCell from './TableCell';
import { OptionsContainer } from './tableStyles';

const TablePopover = ({ options, item, hasShadow, dataLength, itemIndex }) => {
  const [open, setOpen] = useState(false);

  const handleSetOpen = e => {
    e.stopPropagation();
    setTimeout(() => setOpen(!open), 100); // open delay to solve visual bug when other popover is closing
  };

  return (
    <TableCell
      options
      hasShadow={hasShadow}
      isPopoverOpen={open}
      onClick={handleSetOpen}
      hasDefaultValue={false}
    >
      <Popover
        containerOrigin={{
          horizontal: 'right',
          vertical: dataLength - itemIndex > options.length ? 'bottom' : 'top'
        }}
        popoverOrigin={{
          horizontal: 'right',
          vertical: dataLength - itemIndex > options.length ? 'top' : 'bottom'
        }}
        paperProps={{ elevation: 15, radius: 20 }}
        responsiveType="bottomsheet"
        popoverContent={
          <div onClick={handleSetOpen}>
            {options.map(({ title, onClick }, i) => (
              <PopoverItem key={i} onClick={() => onClick(item)}>
                {title}
              </PopoverItem>
            ))}
          </div>
        }
        width={300}
        open={open}
        setIsOpen={setOpen}
      >
        <OptionsContainer>
          <MoreIcon color="var(--table-color)" width={4} title="Más opciones" />
        </OptionsContainer>
      </Popover>
    </TableCell>
  );
};

export default TablePopover;
