import styled from 'styled-components/native';
import colors from '~/styles/colors';

export const Wrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  border-radius: 16px;
  width: 100%;
  background-color: ${colors.fourth};
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const ButtonWrapper = styled.View`
  width: 33%;
  padding: 12px 30px;
`;
