import styled from 'styled-components/native';
import colors from '~/styles/colors';

export const Wrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  border-radius: 16px;
  width: 100%;
  background-color: ${colors.fourth};
  margin-top: 20px;
`;

export const ButtonWrapper = styled.View`
  width: 33%;
  border-right-color: ${(props) =>
    props.isLast === 1 ? 'transparent' : '#000'};
  border-right-width: ${(props) => (props.isLast === 1 ? '0px' : '1px')};

  padding: 12px 30px;
`;
