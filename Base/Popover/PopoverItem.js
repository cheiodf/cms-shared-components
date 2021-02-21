import { PopoverItemContainer, PopoverItemText } from './popoverStyles';
import Link from 'next/link';

const PopoverItem = ({ onClick, href, children }) => {
  return (
    <PopoverItemContainer onClick={onClick}>
      {href ? (
        <Link href={href}>
          <PopoverItemText>{children}</PopoverItemText>
        </Link>
      ) : (
        <PopoverItemText>{children}</PopoverItemText>
      )}
    </PopoverItemContainer>
  );
};

export default PopoverItem;
