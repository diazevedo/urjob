import React from 'react';

import JobSearch from '~/parts/JobSearch';
import SortButtons from '~/parts/SortButtons';

import * as C from './styles';

const Main = () => {
  return (
    <C.Wrapper>
      <JobSearch />
      <SortButtons />
    </C.Wrapper>
  );
};

export default Main;
