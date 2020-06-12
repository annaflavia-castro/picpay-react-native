import React from 'react';

import {
  Notification,
  NotificationItem,
  Message,
  Date,
} from './styles';

const items = [
  {
    key: String(Math.random()),
    message: 'Identificamos um novo acesso á sua conta. Toque aqui para saber mais.',
    date: 'Ontem às 19:45',
  },
  {
    key: String(Math.random()),
    message: 'Pague suas contas em poucos minutos. Toque aqui para saber mais.',
    date: 'Ontem às 11:14',
  },
  {
    key: String(Math.random()),
    message: 'Bem-vindo(a) ao PicPay. Toque aqui para saber mais.',
    date: 'Quarta-feira às 15:03',
  }
];

export default function Notifications() {
  return (
    <Notification>
      {items.map((item) => (
        <NotificationItem key={item.key}>
          <Message>{item.message}</Message>
          <Date>{item.date}</Date>
        </NotificationItem>
      ))}
    </Notification>
  );
};

