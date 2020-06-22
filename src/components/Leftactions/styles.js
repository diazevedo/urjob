import styled from 'styled-components';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Animated } from 'react-native';

import colors from '~/styles/colors';

export const WrapperActionButtons = styled.View`
  flex-direction: row;
`;

export const ActionButton = styled(TouchableOpacity)`
  flex: 1;
  background-color: ${(props) => props.color};
  justify-content: center;
  align-items: center;
  padding-left: 10px;
  padding-right: 20px;
  border-radius: 8px;
`;

export const TextAction = styled(Animated.Text)`
  color: ${colors.fourth};
  font-family: 'Abel-Regular';
  font-size: 12px;
`;
