import React from 'react';

import {
  Wrapper,
  Title,
} from './styles';
import Notification from '../../components/Notification';

export default function Notifications() {
  return (
    <Wrapper>
      <Title>Notificações</Title>
      <Notification />
    </Wrapper>
  );
};
