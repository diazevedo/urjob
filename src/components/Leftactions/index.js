/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import * as S from './styles';

const LeftActions = () => {
  return (
    <S.WrapperActionButtons>
      <S.ActionButton color="#5EC28E">
        <S.TextAction>Apply Now</S.TextAction>
      </S.ActionButton>
      <S.ActionButton color="#6379E9" isLast={1}>
        <S.TextAction>To favorites</S.TextAction>
      </S.ActionButton>
    </S.WrapperActionButtons>
  );
};

export default LeftActions;
