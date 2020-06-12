import React from 'react';

import { Container, Option, Title, Img } from './styles';
import img8 from '../../images/08.png';
import img9 from '../../images/09.png';
import img10 from '../../images/10.png';
import img11 from '../../images/11.png';
import img12 from '../../images/12.png';

const items = [
  {
    key: String(Math.random()),
    img: img8,
    title: 'Pague suas contas de forma rápida e fácil',
    bgColor: '#172C4A',
  },
  {
    key: String(Math.random()),
    img: img9,
    title: 'Acabe com as dívidas sem sair de casa',
    bgColor: '#6A0159',
  },
  {
    key: String(Math.random()),
    img: img10,
    title: 'Cobre um amigo sem perder a amizade',
    bgColor: '#4139C8',
  },
  {
    key: String(Math.random()),
    img: img11,
    title: 'Scannei um QR Code e pague agora mesmo',
    bgColor: '#00AB4B',
  },
  {
    key: String(Math.random()),
    img: img12,
    title: 'Recarregue seu celular e mantenha-se conectado',
    bgColor: '#BA2F76',
  },
];

export default function Tips() {
  return (
    <Container>
      {items.map((item) => (
        <Option key={item.key} bgColor={item.bgColor}>
          <Title>{item.title}</Title>
          <Img source={item.img} />
        </Option>
      ))}
    </Container>
  );
};
