import React from 'react';

import * as S from './styles';

const EmptyPage = ({ text }) => {
  return (
    <S.Container>
      <S.Text>{text}</S.Text>
    </S.Container>
  );
};

export default EmptyPage;
