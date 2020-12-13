import styled from 'styled-components/native';

/**Create an array with colors and access them by name e.g. color[name] */
export const TagWrapper = styled.View`
  padding: 5px 10px;
  background-color: ${(props) => props.color};
  margin-right: 10px;
  border-radius: 10px;
`;

export const Tags = styled.Text`
  color: ${(props) => props.color};
  font-family: 'Abel';
`;
