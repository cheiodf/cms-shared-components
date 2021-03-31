import { useEffect, useState } from 'react';
import { MoreIcon } from '../../../components/Icons';
import Popover from '../Popover/Popover';
import TableCell from './TableCell';
import TableOptionItem from './TableOptionItem';
import { OptionsContainer } from './tableStyles';

const TablePopover = ({ options, item, hasShadow, dataLength, itemIndex }) => {
  const [open, setOpen] = useState(false);
  const [animationStatus, setAnimationStatus] = useState(false);

  useEffect(() => {
    if (!open) {
      setAnimationStatus(0.5);
      setTimeout(() => setAnimationStatus(false), 300); // closing delay for css animation
    } else {
      setAnimationStatus(true);
    }
  }, [open]);

  const handleSetOpen = e => {
    e.stopPropagation();
    setTimeout(() => setOpen(!open), 100); // open delay to solve visual bug when other popover is closing
  };

  const filterOptions = options.filter(({ hidden }) =>
    hidden ? !hidden(item) : true
  );
  return (
    <TableCell
      options
      hasShadow={hasShadow}
      isPopoverOpen={animationStatus}
      onClick={handleSetOpen}
      hasDefaultValue={false}
    >
      <Popover
        containerOrigin={{
          horizontal: 'right',
          vertical:
            dataLength - itemIndex > filterOptions.length ? 'bottom' : 'top'
        }}
        popoverOrigin={{
          horizontal: 'right',
          vertical:
            dataLength - itemIndex > filterOptions.length ? 'top' : 'bottom'
        }}
        paperProps={{ elevation: 15, radius: 20 }}
        responsiveType="bottomsheet"
        popoverContent={
          <div onClick={handleSetOpen}>
            {filterOptions.map(({ title, onClick, icon }, i) => (
              <TableOptionItem
                key={i}
                onClick={() => onClick(item)}
                icon={icon}
              >
                {title}
              </TableOptionItem>
            ))}
          </div>
        }
        width={300}
        open={filterOptions.length ? open : false}
        setIsOpen={setOpen}
      >
        {!!filterOptions.length && (
          <OptionsContainer>
            <MoreIcon
              color="var(--table-color)"
              width={4}
              title="Más opciones"
            />
          </OptionsContainer>
        )}
      </Popover>
    </TableCell>
  );
};

export default TablePopover;
