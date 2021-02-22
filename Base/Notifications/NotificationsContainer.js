import Badge from '../Badge/Badge';
import Hidden from '../Hidden/Hidden';
import Popover from '../Popover/Popover';
import Typography from '../Typography/Typography';
import { BellIcon } from '../../../components/Icons';
import NotificationItem from './NotificationItem';
import {
  NotificationCount,
  NotificationsPopoverContainer
} from './notificationsStyles';

const NotificationsContainer = ({
  showInResponsive,
  isNotificationOpen,
  setIsNotificationOpen,
  list
}) => {
  return (
    <Popover
      width={400}
      maxHeight={500}
      popoverOrigin={{ vertical: 'top', horizontal: 'right' }}
      containerOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      paperProps={{ radius: 10, elevation: 6, margin: '.5rem 0' }}
      open={isNotificationOpen}
      setIsOpen={setIsNotificationOpen}
      responsiveType="sidebarFullWidthLeft"
      popoverContent={
        <NotificationsPopoverContainer>
          <NotificationCount>
            <Hidden up={!showInResponsive ? 'sm' : null}>
              <Typography
                size={1.5}
                color="#000"
                weight="bold"
                margin="0 0 1.5rem"
              >
                Notificaciones
              </Typography>
            </Hidden>
            <Typography size={0.9} color="#B2B2B2" weight="bold">
              Tienes <span>{list.length}</span> notificaciones
            </Typography>
          </NotificationCount>

          {list.map(notification => (
            <NotificationItem
              key={notification._id}
              closePopover={() => setIsNotificationOpen(false)}
              {...notification}
            />
          ))}
        </NotificationsPopoverContainer>
      }
    >
      <Hidden down={!showInResponsive ? 'sm' : null}>
        <Badge content={list.length} variant="danger" size="xs">
          <BellIcon width={20} color="white" />
        </Badge>
      </Hidden>
    </Popover>
  );
};

export default NotificationsContainer;
