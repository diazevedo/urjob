import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import {
  addJobToFavourite,
  removeJobFromFavourite,
} from '~/store/modules/favourite/actions';

import TouchableWithIcon from '~/components/TouchableWithIcon';
import IconFontAWS from 'react-native-vector-icons/FontAwesome';

import { useNavigation } from '@react-navigation/native';

import * as S from './styles';

const JobHeader = () => {
  const navigation = useNavigation();
  const [favourite, setFavourite] = React.useState(false);

  const dispatch = useDispatch();

  const job = useSelector((state) => state.position.current);

  const favourites = useSelector(
    (stateStore) => stateStore.favourite.favourites,
  );

  React.useEffect(() => {
    const isFavourite = favourites.some((item) => item.id === job.id);
    setFavourite(isFavourite);
  }, [setFavourite, job.id, favourites]);

  const AddToFavourite = () => {
    setFavourite((prevState) => {
      if (!prevState) {
        dispatch(addJobToFavourite({ job }));
      } else {
        dispatch(removeJobFromFavourite({ id: job.id }));
      }

      return !prevState;
    });
  };

  return (
    <S.Container>
      <S.WrapperLeftContent>
        <TouchableWithIcon
          icon="chevron-left"
          color="#0006a0"
          size={30}
          onPress={navigation.goBack}
        />
        <S.Title numberOfLines={1} ellipsizeMode="tail">
          {job.title.replace(/(<([^>]+)>)/gi, '')}
        </S.Title>
      </S.WrapperLeftContent>
      <TouchableWithIcon custom onPress={AddToFavourite}>
        {favourite ? (
          <IconFontAWS name="heart" color="#000AFF" size={30} />
        ) : (
          <IconFontAWS name="heart-o" color="#9098B1" size={30} />
        )}
      </TouchableWithIcon>
    </S.Container>
  );
};

export default JobHeader;
