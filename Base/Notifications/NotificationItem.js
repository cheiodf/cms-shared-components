import Avatar from '../Avatar/Avatar';
import Typography from '../Typography/Typography';
import {
  NotificationAvatarContainer,
  NotificationDateContainer,
  NotificationItemContainer,
  NotificationItemLink,
  NotificationTextContainer
} from './notificationsStyles';

const NotificationItem = ({
  image,
  sender,
  title,
  createdAt,
  destination,
  closePopover,
  read
}) => {
  const timeSince = date => {
    const seconds = Math.floor((new Date() - date) / 1000);

    let interval = seconds / 31536000;

    if (interval > 1) return Math.floor(interval) + ' años';
    interval = seconds / 2592000;

    if (interval > 1)
      return (
        Math.floor(interval) + (Math.floor(interval) > 1 ? ' meses' : ' mes')
      );
    interval = seconds / 86400;

    if (interval > 1)
      return (
        Math.floor(interval) + (Math.floor(interval) > 1 ? ' días' : ' día')
      );
    interval = seconds / 3600;

    if (interval > 1) return Math.floor(interval) + ' hs.';

    interval = seconds / 60;
    if (interval > 1) return Math.floor(interval) + ' min.';

    return Math.floor(seconds) + ' sg.';
  };

  return (
    <NotificationItemLink href={destination}>
      <a>
        <NotificationItemContainer onClick={closePopover} read={read}>
          <NotificationAvatarContainer>
            <Avatar
              isEditable={false}
              src={image || '/static/images/defaultNotificationImage.png'}
              size="xs"
            />
          </NotificationAvatarContainer>
          <NotificationTextContainer>
            <Typography maxLines={1} color="#212529" weight="bold" size={0.95}>
              {sender.name}
            </Typography>
            <Typography maxLines={2} color="#B2B2B2" tag="span">
              {title}
            </Typography>
          </NotificationTextContainer>
          <NotificationDateContainer>
            <Typography tag="span" weight="semi-bold" color="#B2B2B2">
              {timeSince(new Date(createdAt).getTime())}
            </Typography>
          </NotificationDateContainer>
        </NotificationItemContainer>
      </a>
    </NotificationItemLink>
  );
};

export default NotificationItem;
