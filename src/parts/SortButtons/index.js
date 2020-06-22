import React from 'react';
import SortButton from '~/components/SortButton';

import * as C from './styles';

const SortButtons = () => {
  return (
    <C.Wrapper>
      <C.ButtonWrapper>
        <SortButton text="Newest" />
      </C.ButtonWrapper>

      <C.ButtonWrapper>
        <SortButton text="Popular" isActive={1} />
      </C.ButtonWrapper>
      <C.ButtonWrapper isLast={1}>
        <SortButton text="Nearby" />
      </C.ButtonWrapper>
    </C.Wrapper>
  );
};

export default SortButtons;
