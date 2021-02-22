import { memo } from 'react';
import Avatar from '../Avatar/Avatar';
import Hidden from '../Hidden/Hidden';
import Popover from '../Popover/Popover';
import Typography from '../Typography/Typography';
import { NavAccountPopoverContainer, NavAvatarContainer } from './navbarStyles';

const NavbarAvatar = ({ setTheme, avatarPopover, userInfo }) => {
  return (
    <Popover
      width={200}
      popoverOrigin={{ vertical: 'top', horizontal: 'right' }}
      containerOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      paperProps={{ radius: 10, elevation: 6, margin: '.5rem 0 0 0' }}
      closeOnClickPopover
      responsiveType="sidebarRight"
      popoverContent={
        <NavAccountPopoverContainer>
          <Typography color="#B2B2B2" padding="0 1rem .5rem" tag="span">
            ¡Bienvenido!
          </Typography>
          {avatarPopover}
          {/* <NavAccountPopoverItem>
            <LayoutOutlineIcon width="16" color="#6E6B6B" />
            <Typography color="#6E6B6B">Dashboard</Typography>
          </NavAccountPopoverItem>
          <NavAccountPopoverItem>
            <UserOutlineIcon width="16" color="#6E6B6B" />
            <Typography color="#6E6B6B">Mi cuenta</Typography>
          </NavAccountPopoverItem>
          <NavAccountPopoverItem>
            <DocumentOutlineIcon width="16" color="#6E6B6B" />
            <Typography color="#6E6B6B">Guía de uso</Typography>
          </NavAccountPopoverItem>
          <NavAccountPopoverItem onClick={setTheme}>
            <LayoutOutlineIcon width="16" color="#6E6B6B" />
            <Typography color="#6E6B6B">Change Theme</Typography>
          </NavAccountPopoverItem>
          <Divider margin=".2rem 0" />
          <NavAccountPopoverItem onClick={handleLogout}>
            <SignOutOutlineIcon width="16" color="#6E6B6B" />
            <Typography color="#6E6B6B">Salir</Typography>
          </NavAccountPopoverItem> */}
        </NavAccountPopoverContainer>
      }
    >
      <NavAvatarContainer>
        <Avatar
          size="xxs"
          isEditable={false}
          src={userInfo?.avatar || undefined}
        />
        <Hidden down="md">
          <Typography color="#fff" maxLines={1}>
            {userInfo?.name.split(' ')[0] || 'John Doe'}
          </Typography>
        </Hidden>
      </NavAvatarContainer>
    </Popover>
  );
};

export default memo(NavbarAvatar);
