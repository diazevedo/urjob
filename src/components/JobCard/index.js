import React from 'react';

import { useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/Feather';
import IconFontAWS from 'react-native-vector-icons/FontAwesome';

import Swipeable from 'react-native-gesture-handler/Swipeable';

import LeftActions from '~/components/Leftactions';
import TouchableWithIcon from '~/components/TouchableWithIcon';

import colors from '~/styles/colors';

import * as C from './styles';

const JobCard = ({ id, company, date, position, city, state, tag }) => {
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
            })
          }>
          <C.Line>
            <C.WrapperCompanyDays>
              <C.Company color={colors.primary}>{company}</C.Company>
              <C.Company color={colors.third} size={14} opacity={0.6}>
                1 day ago
              </C.Company>
            </C.WrapperCompanyDays>
            <TouchableWithIcon
              custom={true}
              icon="heart"
              size={30}
              onPress={onPressToFavorite}>
              {favorite ? (
                <IconFontAWS name="heart" color="#000AFF" size={30} />
              ) : (
                <IconFontAWS name="heart-o" color="#000122" size={30} />
              )}
            </TouchableWithIcon>
          </C.Line>
          <C.Company color={colors.fifth} size="18">
            {position}
          </C.Company>
          <C.LocationLine>
            <Icon name="navigation" size={20} color={colors.third} />
            <C.LocationText color={colors.third}>
              {city} • {state}
            </C.LocationText>
          </C.LocationLine>
          <C.TagsLine>
            {tag && (
              <C.TagWrapper color="rgba(230, 86, 90, 0.2)">
                <C.Tags color="rgba(230, 86, 90, 1)">{tag}</C.Tags>
              </C.TagWrapper>
            )}
          </C.TagsLine>
        </C.ClickableView>
      </Swipeable>
    </C.Wrapper>
  );
};

export default JobCard;