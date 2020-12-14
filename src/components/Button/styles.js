import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export const Container = styled.View`
  height: 60px;
  flex: 1;
  padding: 0 15px;
  justify-content: center;
  box-shadow: 0px 8px 6px rgba(0, 10, 255, 0.3);
`;

export const Button = styled(TouchableOpacity)`
  width: 100%;
  height: 100%;
  background-color: #000aff;
  border-radius: 6px;

  justify-content: center;
  align-items: center;
`;

export const Text = styled.Text`
  font-family: 'Advent Pro';
  letter-spacing: 1px;
  font-weight: 700;
  text-transform: uppercase;
  color: #fff;
  font-size: 20px;
`;
