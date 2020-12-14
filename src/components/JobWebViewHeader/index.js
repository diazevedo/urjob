import React from 'react';

import TouchableWithIcon from '~/components/TouchableWithIcon';
import { useRoute, useNavigation } from '@react-navigation/native';

import * as S from './styles';

const JobWebViewHeader = () => {
  const route = useRoute();
  const navigation = useNavigation();

  return (
    <S.Container>
      <TouchableWithIcon
        icon="chevron-left"
        color="#0006a0"
        size={30}
        onPress={navigation.goBack}
      />
      <S.WrapperLeftContent>
        <S.Title numberOfLines={1} ellipsizeMode="tail">
          {route.params.title}
        </S.Title>
      </S.WrapperLeftContent>
    </S.Container>
  );
};

export default JobWebViewHeader;
