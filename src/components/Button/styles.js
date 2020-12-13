import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export const Container = styled(TouchableOpacity)`
  width: 90%;
  background-color: #000aff;
  border-radius: 6px;
  height: 60px;
  margin-top: 50px;

  align-self: center;

  justify-content: center;
  align-items: center;
`;

export const Text = styled.Text`
  color: #fff;
  font-size: 18px;
`;
