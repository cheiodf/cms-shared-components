import { TableOptionItemContainer, TableOptionItemText } from './tableStyles';
import Link from 'next/link';

const TableOptionItem = ({ onClick, href, children, icon: Icon }) => {
  const Container = ({ children }) =>
    href ? (
      <Link href={href}>
        <a>{children}</a>
      </Link>
    ) : (
      <>{children}</>
    );

  return (
    <Container>
      <TableOptionItemContainer onClick={onClick}>
        {Icon && <Icon width="16" color="var(--popover-item-color)" />}
        <TableOptionItemText>{children}</TableOptionItemText>
      </TableOptionItemContainer>
    </Container>
  );
};

export default TableOptionItem;
