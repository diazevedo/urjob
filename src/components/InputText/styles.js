import styled from 'styled-components/native';
import colors from '~/styles/colors';

export const TextInput = styled.TextInput.attrs({
  placeholderTextColor: colors.third,
})`
  flex: 1;
  margin-left: 10px;
  color: ${colors.primary};
  font-size: 18px;
  font-family: 'Advent Pro';
`;
