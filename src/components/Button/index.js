import React from 'react';

import * as S from './styles';

const Button = ({ text, callback }) => {
  return (
    <S.Container>
      <S.Text>{text}</S.Text>
    </S.Container>
  );
};

export default Button;
