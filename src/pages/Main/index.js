import React from 'react';

import api from '~/services/api';
import JobSearch from '~/parts/JobSearch';
import SortButtons from '~/parts/SortButtons';
import SwipeCard from '~/components/SwipeCard';

import * as C from './styles';

const Main = () => {
  const loadData = React.useCallback(async () => {
    const response = await api.get();
    console.tron.log(response);
  }, []);

  React.useEffect(() => {
    loadData();
  }, [loadData]);

  return (
    <C.Wrapper>
      <JobSearch />
      <SortButtons />
      <SwipeCard />
    </C.Wrapper>
  );
};

export default Main;
