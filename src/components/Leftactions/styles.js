import styled, { css } from 'styled-components';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Animated } from 'react-native';

import colors from '~/styles/colors';

export const WrapperActionButtons = styled.View`
  flex-direction: row;
  background-color: #5ec28e;
  border-radius: 8px;
`;

export const ActionButton = styled(TouchableOpacity)`
  flex: 1;
  background-color: ${(props) => props.color};
  justify-content: center;
  align-items: center;

  padding-right: 20px;
  border-radius: 8px;
  width: 100px;
  ${(props) =>
    props.isLast &&
    css`
      width: 100px;
    `}
`;

export const TextAction = styled(Animated.Text)`
  color: ${colors.fourth};
  font-family: 'Abel';
  font-size: 14px;
`;
