import React from 'react';

import * as S from './styles';

const Button = ({ text, callback }) => {
  return (
    <S.Container>
      <S.Button>
        <S.Text>{text}</S.Text>
      </S.Button>
    </S.Container>
  );
};

export default Button;
