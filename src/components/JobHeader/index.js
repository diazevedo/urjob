import React from 'react';

import TouchableWithIcon from '~/components/TouchableWithIcon';
import IconFontAWS from 'react-native-vector-icons/FontAwesome';

import { useRoute, useNavigation } from '@react-navigation/native';

import * as S from './styles';

const JobHeader = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const favorite = false;

  return (
    <S.Container>
      <S.WrapperLeftContent>
        <TouchableWithIcon
          icon="chevron-left"
          color="#000122"
          size={30}
          onPress={navigation.goBack}
        />
        <S.Title
          numberOfLines={1}
          ellipsizeMode="tail"
          onPress={() =>
            console.log(
              'it will open a card to show the complete position text',
            )
          }>
          {route.params.title}
        </S.Title>
      </S.WrapperLeftContent>
      <TouchableWithIcon custom>
        {favorite ? (
          <IconFontAWS name="heart" color="#000AFF" size={30} />
        ) : (
          <IconFontAWS name="heart-o" color="#9098B1" size={30} />
        )}
      </TouchableWithIcon>
    </S.Container>
  );
};

export default JobHeader;
