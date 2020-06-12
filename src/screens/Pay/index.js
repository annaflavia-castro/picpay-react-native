
import React from 'react';
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';

import Suggestions from '../../components/Suggestions';

import { Wrapper, Header, Container, Input, TextInput, Text } from './styles';
import Services from '../../components/Services';

export default function Pay() {
  return (
    <Wrapper>
      <Container>
        <Header>
          <MaterialCommunityIcons
            name="qrcode-scan"
            size={30}
            color="#00fc6c"
          />

          <Input>
            <AntDesign name="search1" size={20} color="#AAAFBB" />
            <TextInput
              placeholder="Pesquisar..."
              keyboardAppearance="dark"
            />
          </Input>
        </Header>
        <Text>Sugestões</Text>
        <Suggestions />
        <Services />
      </Container>
    </Wrapper>
  );
};
