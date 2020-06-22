import React from 'react';
import { Text, View } from 'react-native';

import Icon from 'react-native-vector-icons/Feather';

import Swipeable from 'react-native-gesture-handler/Swipeable';

import Logo from '~/assets/images/tasit-logo.png';
import colors from '~/styles/colors';

import * as C from './styles';

const LeftAction = () => (
  <View>
    <Text>Left</Text>
  </View>
);

const SwipeCard = () => {
  return (
    <C.Wrapper>
      <Swipeable renderLeftActions={LeftAction}>
        <C.Line>
          <C.WrapperCompanyDays>
            <C.Company color={colors.primary}>Tasit Labs</C.Company>
            <C.Company color={colors.third}>1 day ago</C.Company>
          </C.WrapperCompanyDays>
          <C.CompanyLogo source={Logo} />
        </C.Line>
        <C.Company color={colors.fifth} size="18">
          UX/UI Designer
        </C.Company>
        <C.LocationLine>
          <Icon name="navigation" size={20} color={colors.third} />
          <C.LocationText color={colors.third}>Chicago • USA </C.LocationText>
        </C.LocationLine>
        <C.TagsLine>
          <C.TagWrapper color="rgba(94, 194, 142, 0.2)">
            <C.Tags color="rgba(94, 194, 142, 1)">hot vacancy</C.Tags>
          </C.TagWrapper>
          <C.TagWrapper color="rgba(94, 194, 142, 0.2)">
            <C.Tags color="rgba(94, 194, 142, 1)">data visualization</C.Tags>
          </C.TagWrapper>
          <C.TagWrapper color="rgba(230, 86, 90, 0.2)">
            <C.Tags color="rgba(230, 86, 90, 1)">remote</C.Tags>
          </C.TagWrapper>
        </C.TagsLine>
      </Swipeable>
    </C.Wrapper>
  );
};

export default SwipeCard;
