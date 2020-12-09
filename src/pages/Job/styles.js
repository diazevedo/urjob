import styled, { css } from 'styled-components/native';

export const Wrapper = styled.View`
  flex-wrap: wrap;
  padding: 10px 15px;
  flex: 1;
  background-color: #fff;
  /* border: 1px solid black; */
`;

export const Line = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 5px 0;

  ${(props) =>
    props.isLast &&
    css`
      border-bottom-width: 1px;
      border-bottom-color: #ebf0ff;
    `}
`;

export const Company = styled.Text`
  color: ${(props) => props.color};
  font-size: ${(props) => (props.size ? `${props.size}px` : '24px')};
  opacity: ${(props) => (props.opacity ? props.opacity : 1)};
  font-family: 'Abel-Regular';
  flex: 1;
`;

export const Salary = styled.Text`
  font-size: 16px;
  font-family: 'Abel-Regular';
  margin-top: 10px;
`;

export const Website = styled.Text`
  font-size: 16px;
  margin-top: 15px;
  font-family: 'Abel-Regular';
  color: #000122;
`;

export const Address = styled.Text`
  margin-top: 10px;
  font-size: 16px;
  color: #000122;
  margin-left: 10px;
  opacity: 0.6;
`;
