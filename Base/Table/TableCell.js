import { memo } from 'react';
import Avatar from '../Avatar/Avatar';
import {
  AvatarContainer,
  TableBodyCell,
  TableBodyCellSubcontainer,
  TableImageContainer,
  TableImagesContainer
} from './tableStyles';

const TableCell = ({
  value = '-',
  children,
  hasAvatar,
  avatar,
  type,
  options,
  hasDefaultValue = true,
  hasShadow,
  isPopoverOpen,
  onClick,
  pr,
  pl
}) => {
  return (
    <TableBodyCell
      options={options}
      hasShadow={hasShadow}
      isPopoverOpen={isPopoverOpen}
      onClick={onClick}
      pr={pr}
      pl={pl}
    >
      <TableBodyCellSubcontainer options={options}>
        {(hasAvatar || type === 'image') && (
          <AvatarContainer>
            <Avatar
              src={hasAvatar ? avatar : value} // avatar (first column) or value (for other columns with image)
              isEditable={false}
              name="img"
              size="xxs"
            />
          </AvatarContainer>
        )}

        {type === 'images' && (
          <TableImagesContainer>
            {typeof value === 'object' &&
              value?.map((src, i) => (
                <TableImageContainer key={i}>
                  <AvatarContainer>
                    <Avatar
                      src={src || undefined}
                      isEditable={false}
                      name="img"
                      size="xxs"
                    />
                  </AvatarContainer>
                </TableImageContainer>
              ))}
          </TableImagesContainer>
        )}

        {type !== 'images' && type !== 'image' && (
          <span onClick={e => e.stopPropagation()} style={{ cursor: 'text' }}>
            {hasDefaultValue && value}
          </span>
        )}
        {children}
      </TableBodyCellSubcontainer>
    </TableBodyCell>
  );
};

export default memo(TableCell);
