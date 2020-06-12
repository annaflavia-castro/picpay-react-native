import React from 'react';
import { AntDesign } from '@expo/vector-icons';

import avatar from '../../images/avatar.png';

import {
  Wrapper,
  Container,
  UserProfile,
  Avatar,
  AvatarTitle,
  AvatarName,
  AvatarButton,
  AvatarButtonLabel,
  OptionsContainer,
  OptionsLabel,
  Options,
  Option,
  OptionLabel,
  OptionAction,
  OptionValue,
} from './styles';

export default function Settings() {
  return (
    <Wrapper>
      <Container>
        <UserProfile>
          <Avatar source={avatar} resizeMode="contain" />

          <AvatarTitle>@joaozinho</AvatarTitle>
          <AvatarName>João da Silva</AvatarName>
          <AvatarButton>
            <AvatarButtonLabel>Ver meu perfil</AvatarButtonLabel>
            <AntDesign name="right" size={15} color="#0db060" />
          </AvatarButton>
        </UserProfile>

        <OptionsContainer>
          <OptionsLabel>Minha conta</OptionsLabel>

          <Options>
            <Option>
              <OptionLabel>Meu PicPay</OptionLabel>
              <OptionAction>
                <OptionValue>@joaozinho</OptionValue>
                <AntDesign name="right" size={15} color="#aaa" />
              </OptionAction>
            </Option>

            <Option>
              <OptionLabel>Celular</OptionLabel>
              <OptionAction>
                <OptionValue>(11) 99999-9999</OptionValue>
                <AntDesign name="right" size={15} color="#aaa" />
              </OptionAction>
            </Option>

            <Option>
              <OptionLabel>E-mail</OptionLabel>
              <OptionAction>
                <OptionValue>joaozinho@gmail.com</OptionValue>
                <AntDesign name="right" size={15} color="#aaa" />
              </OptionAction>
            </Option>

            <Option>
              <OptionLabel>Dados pessoais</OptionLabel>
              <OptionAction>
                <AntDesign name="right" size={15} color="#aaa" />
              </OptionAction>
            </Option>

            <Option>
              <OptionLabel>Conta bancária</OptionLabel>
              <OptionAction>
                <AntDesign name="right" size={15} color="#aaa" />
              </OptionAction>
            </Option>

            <Option>
              <OptionLabel>Taxas e limites</OptionLabel>
              <OptionAction>
                <AntDesign name="right" size={15} color="#aaa" />
              </OptionAction>
            </Option>

            <Option>
              <OptionLabel>Endereço</OptionLabel>
              <OptionAction>
                <AntDesign name="right" size={15} color="#aaa" />
              </OptionAction>
            </Option>

            <Option>
              <OptionLabel>Favoritos</OptionLabel>
              <OptionAction>
                <AntDesign name="right" size={15} color="#aaa" />
              </OptionAction>
            </Option>
          </Options>
        </OptionsContainer>
      </Container>
    </Wrapper>
  );
};
