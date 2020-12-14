import React from 'react';
import { formatDistanceToNow } from 'date-fns';
import { useNavigation } from '@react-navigation/native';

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
  const [favorite, setFavorite] = React.useState(false);
  const navigation = useNavigation();

  const onPressToFavorite = (e) => {
    setFavorite((prevState) => !prevState);
  };

  return (
    <C.Wrapper>
      <Swipeable renderLeftActions={LeftActions}>
        <C.ClickableView
          onPress={() =>
            navigation.navigate('Job', {
              title: position,
              id,
              job,
            })
          }>
          <C.Line>
            <C.WrapperCompanyDays>
              <C.Company color={colors.primary}>{company}</C.Company>
              <C.DaysAgo color={colors.third} size={14} opacity={0.6}>
                {formatDistanceToNow(new Date(created))}
              </C.DaysAgo>
            </C.WrapperCompanyDays>
            <TouchableWithIcon
              custom={true}
              icon="heart"
              size={30}
              onPress={onPressToFavorite}>
              {favorite ? (
                <IconFontAWS name="heart" color="#0006A0" size={30} />
              ) : (
                <IconFontAWS name="heart-o" color="#000122" size={30} />
              )}
            </TouchableWithIcon>
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

export default JobCard;
