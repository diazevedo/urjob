import React from 'react';

import Icon from 'react-native-vector-icons/Feather';

import Swipeable from 'react-native-gesture-handler/Swipeable';

import LeftActions from '~/components/Leftactions';

import Logo from '~/assets/images/tasit-logo.png';
import colors from '~/styles/colors';

import * as C from './styles';

const JobCard = ({ company, date, icon, position, city, state, tag }) => {
  return (
    <C.Wrapper>
      <Swipeable renderLeftActions={LeftActions}>
        <C.View>
          <C.Line>
            <C.WrapperCompanyDays>
              <C.Company color={colors.primary}>{company}</C.Company>
              <C.Company color={colors.third} size={14} opacity={0.6}>
                1 day ago
              </C.Company>
            </C.WrapperCompanyDays>
            <C.CompanyLogo source={Logo} resizeMode={'cover'} />
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

            {/* <C.TagWrapper color="rgba(94, 194, 142, 0.2)">
              <C.Tags color="rgba(94, 194, 142, 1)">data visualization</C.Tags>
            </C.TagWrapper>
            <C.TagWrapper color="rgba(99, 121, 233, .2)">
              <C.Tags color="rgba(99, 121, 233, 1)">remote</C.Tags>
            </C.TagWrapper> */}
          </C.TagsLine>
        </C.View>
      </Swipeable>
    </C.Wrapper>
  );
};

export default JobCard;
