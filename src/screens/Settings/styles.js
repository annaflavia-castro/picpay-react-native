
import styled from 'styled-components/native';

export const Wrapper = styled.SafeAreaView`
  background-color: #000;
  flex: 1;
`;

export const Container = styled.ScrollView``;

export const UserProfile = styled.View`
  height: 300px;
  justify-content: center;
  align-items: center;
  margin-top: -13px;
`;

export const Avatar = styled.Image`
  width: 96px;
  height: 96px;
  margin-bottom: 20px;
`;

export const AvatarTitle = styled.Text`
  font-size: 20px;
  color: #fff;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const AvatarName = styled.Text`
  font-size: 14px;
  color: rgba(255, 255, 255, 0.6);
`;

export const AvatarButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
`;

export const AvatarButtonLabel = styled.Text`
  color: #0db060;
  margin-right: 5px;
`;

export const OptionsContainer = styled.View`
  flex: 1;
  margin-top: -20px
;`;

export const OptionsLabel = styled.Text`
  color: rgba(255, 255, 255, 0.6);
  text-transform: uppercase;
  padding: 0 16px;
  margin-top: 8px;
`;

export const Options = styled.View`
  background: #1e232a;
  padding: 0 16px;
  margin-top: 10px;
`;

export const Option = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom-width: 1px;
  border-color: rgba(255, 255, 255, 0.1);
  padding: 18px 0;
`;

export const OptionLabel = styled.Text`
  font-size: 16px;
  color: #fff;
`;

export const OptionAction = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;

export const OptionValue = styled.Text`
  font-size: 16px;
  color: rgba(255, 255, 255, 0.6);
  margin-right: 5px;
`;
