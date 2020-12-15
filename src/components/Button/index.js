import React from 'react';

import * as S from './styles';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';

const Button = ({ text, callback }) => {
  const tabHeight = useBottomTabBarHeight();

  return (
    <S.Container mgBottom={tabHeight / 2}>
      <S.Button onPress={() => callback()}>
        <S.Text>{text}</S.Text>
      </S.Button>
    </S.Container>
  );
};

export default Button;
