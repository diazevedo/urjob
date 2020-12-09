import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
`;

export const WrapperLeftContent = styled.View`
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  margin-left: -10px;
  width: 90%;
`;

export const Title = styled.Text`
  margin-top: 10px;
  margin-left: 15px;
  font-size: 26px;
  color: #0006a0;
  flex: 1;
  font-weight: 700;
  font-family: 'Abel-Regular';
`;
