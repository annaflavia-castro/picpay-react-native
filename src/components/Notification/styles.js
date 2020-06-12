import styled from 'styled-components/native';

export const Notification = styled.ScrollView`
  background: #000;
  margin-top: 20px;
`;

export const NotificationItem = styled.TouchableOpacity`
  padding: 16px;
  border-bottom-width: 1px;
  border-color: rgba(255, 255, 255, 0.4);
  background: #1E222B;
`;

export const Message = styled.Text`
  color: #FFF;
  font-size: 16px;
  margin-bottom: 10px;
`;

export const Date = styled.Text`
  font-size: 14px;
  color: rgba(255, 255, 255, 0.6);
`;
