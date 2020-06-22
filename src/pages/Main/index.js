import React from 'react';

import JobSearch from '~/parts/JobSearch';
import SortButtons from '~/parts/SortButtons';
import SwipeCard from '~/components/SwipeCard';

import * as C from './styles';

const Main = () => {
  return (
    <C.Wrapper>
      <JobSearch />
      <SortButtons />
      <SwipeCard />
    </C.Wrapper>
  );
};

export default Main;
