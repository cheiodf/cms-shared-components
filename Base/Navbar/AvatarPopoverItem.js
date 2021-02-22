import Link from 'next/link';
import React from 'react';
import { LayoutOutlineIcon } from '../../../components/Icons';
import Typography from '../Typography/Typography';
import { NavAccountPopoverItem } from './navbarStyles';

const AvatarPopoverItem = ({ onClick, path, isExternal, title }) => {
  const Container = ({ children }) =>
    path ? (
      <Link href={path}>
        <a target={isExternal ? '_blank' : null}>{children}</a>
      </Link>
    ) : (
      <>{children}</>
    );

  return (
    <Container>
      <NavAccountPopoverItem onClick={onClick}>
        <LayoutOutlineIcon width="16" color="#6E6B6B" />
        <Typography color="#6E6B6B">{title}</Typography>
      </NavAccountPopoverItem>
    </Container>
  );
};

export default AvatarPopoverItem;