import styled from 'styled-components/native';
import colors from '~/styles/colors';

import { TouchableOpacity } from 'react-native-gesture-handler';

export const Button = styled(TouchableOpacity)`
  align-items: center;
`;

export const Text = styled.Text`
  color: ${(props) => (props.isActive === 1 ? colors.primary : colors.third)};
  font-size: 16px;
  font-family: 'Abel';
`;
