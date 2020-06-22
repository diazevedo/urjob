import React from 'react';
import * as C from './styles';

import colors from '~/styles/colors';

import InputText from '~/components/InputText';
import TouchableWithIcon from '~/components/TouchableWithIcon';

const JobSearch = () => {
  return (
    <C.Wrapper>
      <C.WrapperInputElements>
        <TouchableWithIcon icon="search" color={colors.third} size={22} />
        <InputText />
        <TouchableWithIcon icon="x" color={colors.primary} size={26} />
      </C.WrapperInputElements>

      <TouchableWithIcon icon="sliders" color={colors.primary} size={26} />
    </C.Wrapper>
  );
};

export default JobSearch;
