import React from 'react';
import { formatDistanceToNow } from 'date-fns';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';

import { setPosition } from '~/store/modules/position/actions';
import {
  addJobToFavourite,
  removeJobFromFavourite,
} from '~/store/modules/favourite/actions';

import Icon from 'react-native-vector-icons/Feather';
import IconFontAWS from 'react-native-vector-icons/FontAwesome';

import Swipeable from 'react-native-gesture-handler/Swipeable';

import LeftActions from '~/components/Leftactions';
import TouchableWithIcon from '~/components/TouchableWithIcon';
import Tags from '~/components/Tags';

import colors from '~/styles/colors';

import * as C from './styles';

const JobCard = ({ id, company, created, position, city, state, tag, job }) => {
  /** it is just for now, then it will come from a global state. */
  const [favourite, setFavourite] = React.useState();
  const navigation = useNavigation();

  const favourites = useSelector(
    (stateStore) => stateStore.favourite.favourites,
  );

  const dispatch = useDispatch();

  const handlePressCard = () => {
    dispatch(setPosition({ job }));
    navigation.navigate('Job');
  };

  React.useEffect(() => {
    const isFavourite = favourites.some((item) => item.id === id);
    setFavourite(isFavourite);
  }, [setFavourite, id, favourites]);

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
    <C.Wrapper>
      <Swipeable renderLeftActions={LeftActions}>
        <C.ClickableView onPress={() => handlePressCard()}>
          <C.Line>
            <C.WrapperCompanyDays>
              <C.Company color={colors.primary}>{company}</C.Company>
              <C.DaysAgo color={colors.third} size={14} opacity={0.6}>
                {formatDistanceToNow(new Date(created))}
              </C.DaysAgo>
            </C.WrapperCompanyDays>
            <C.IconFavourite>
              <TouchableWithIcon
                custom={true}
                icon="heart"
                size={30}
                onPress={AddToFavourite}>
                {favourite ? (
                  <IconFontAWS name="heart" color="#0006A0" size={30} />
                ) : (
                  <IconFontAWS name="heart-o" color="#000122" size={30} />
                )}
              </TouchableWithIcon>
            </C.IconFavourite>
          </C.Line>
          <C.DaysAgo color={colors.fifth} size="18">
            {position}
          </C.DaysAgo>
          <C.LocationLine>
            <Icon name="navigation" size={20} color={colors.third} />
            <C.LocationText color={colors.third}>
              {city} • {state}
            </C.LocationText>
          </C.LocationLine>
          <C.TagsLine>
            {tag && <Tags text={tag} color="230, 86, 90" />}
          </C.TagsLine>
        </C.ClickableView>
      </Swipeable>
    </C.Wrapper>
  );
};

export default React.memo(JobCard);
