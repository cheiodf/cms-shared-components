import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Button from '../components/Base/Button/Button';
import { BellIcon } from '../components/Icons';
import { wrapper } from '../store.js';
import { openModal, closeModal } from '../store/Modals/modalsActions';
import { modalTypes } from '../store/Modals/modalsLibs';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Components/Modal',
  component: <p></p>,
  argTypes: {
    component: {
      control: {
        type: 'select',
        options: Object.keys(modalTypes)
      },
      description: 'Modal component',
      type: {
        summary: Object.keys(modalTypes).join(' | '),
        required: true
      }
    },
    size: {
      control: {
        type: 'select',
        options: ['xs', 'sm', 'md', 'lg', 'xl']
      },
      description: 'Modal width',
      type: { summary: 'xs | sm | md | lg | xl' },
      table: {
        defaultValue: { summary: 'md' }
      }
    },
    loading: {
      control: 'boolean',
      description: 'Loading',
      table: {
        type: { summary: 'bool' },
        defaultValue: { summary: false }
      },
      defaultValue: false
    }
  },
  args: {
    loading: false,
    size: 'md'
  }
};

const Template = wrapper.withRedux(args => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeModal());
  }, []);

  const handleOpenModal = () => {
    dispatch(openModal({ ...args }));
  };

  return <Button onClick={handleOpenModal}>Open Modal</Button>;
});

export const ModalConfirm = Template.bind({});
ModalConfirm.args = {
  component: 'Confirm',
  size: 'sm',
  title: 'Modal Confirm Title',
  description: 'Modal description. Are you shure to confirm?',
  buttonAcceptTitle: '',
  onAccept: () => console.log('CONFIRMAR'),
  icon: null
};
ModalConfirm.storyName = 'Modal Confirm';

export const ModalConfirmIcon = Template.bind({});
ModalConfirmIcon.args = {
  component: 'Confirm',
  title: 'Modal Confirm Title',
  description: 'Modal description. Are you shure to confirm?',
  buttonAcceptTitle: 'CONFIRMAR',
  onAccept: () => console.log('CONFIRMAR'),
  icon: BellIcon
};
ModalConfirmIcon.storyName = 'Modal Confirm with Icon';

export const ModalProfileInvitation = Template.bind({});
ModalProfileInvitation.args = {
  component: 'Profile',
  title: 'Modal Profile Invitation Title',
  description:
    'Modal Profile Invitation description. Are you shure to confirm?',
  buttonAcceptTitle: 'CONFIRMAR',
  onAccept: () => console.log('CONFIRMAR')
};
ModalProfileInvitation.storyName = 'Modal Profile Invitation';
