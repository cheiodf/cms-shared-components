import styled from 'styled-components';
import Link from 'next/link';

export const NotificationsPopoverContainer = styled.div`
  padding: 1rem 0.25rem 2rem;
`;

export const NotificationCount = styled.div`
  padding: 0.5rem 1rem;

  span {
    color: #7678ed;
  }
`;

export const NotificationItemContainer = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);

  :hover {
    background-color: rgba(0, 0, 0, 0.025);
  }
`;

export const NotificationItemLink = styled(Link)``;

export const NotificationAvatarContainer = styled.div`
  display: inline-block;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
  border-radius: 100%;
  width: auto;
  display: flex;
`;

export const NotificationTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

export const NotificationDateContainer = styled.div`
  align-self: flex-end;
  /* min-width: 3rem; */
  display: flex;
  justify-content: flex-end;
  margin-left: auto;
  width: fit-content;

  span {
    white-space: nowrap;
  }
`;
