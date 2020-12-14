import React from 'react';
import * as C from './styles';

import colors from '~/styles/colors';

import InputText from '~/components/InputText';
import TouchableWithIcon from '~/components/TouchableWithIcon';

const JobSearch = ({ initialValue, clean, onChangeText, search }) => {
  return (
    <C.Wrapper>
      <C.WrapperInputElements>
        <TouchableWithIcon
          icon="search"
          color={colors.third}
          size={22}
          onPress={() => search()}
        />
        <InputText initialValue={initialValue} onChangeText={onChangeText} />
        <TouchableWithIcon
          icon="x"
          color={colors.primary}
          size={26}
          onPress={() => clean()}
        />
      </C.WrapperInputElements>

      <TouchableWithIcon icon="sliders" color={colors.primary} size={26} />
    </C.Wrapper>
  );
};

export default JobSearch;
