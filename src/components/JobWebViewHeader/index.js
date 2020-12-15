import React from 'react';

import TouchableWithIcon from '~/components/TouchableWithIcon';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';

import * as S from './styles';

const JobWebViewHeader = () => {
  const navigation = useNavigation();
  const title = useSelector((state) => state.position.current.title);

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
          {title.replace(/(<([^>]+)>)/gi, '')}
        </S.Title>
      </S.WrapperLeftContent>
    </S.Container>
  );
};

export default JobWebViewHeader;
