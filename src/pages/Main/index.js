import React from 'react';
import { FlatList, ActivityIndicator } from 'react-native';

import JobSearch from '~/parts/JobSearch';
import SortButtons from '~/parts/SortButtons';
import JobCard from '~/components/JobCard';
import EmptyPage from '~/components/EmptyPage';
import { useSelector, useDispatch } from 'react-redux';

import {
  getJobsRequest,
  getMoreJobsRequest,
} from '~/store/modules/jobs/actions';

import { removeAll } from '~/store/modules/favourite/actions';

import * as C from './styles';

const Main = () => {
  const [loadingFooter, setLoadingFooter] = React.useState(false);
  const [searchedPosition, setSearchedPosition] = React.useState('');
  const [searchedPositionEdit, setSearchedPositionEdit] = React.useState('');
  const [sortBy, setSortBy] = React.useState('date'); // relevance, salary
  const [page, setPage] = React.useState(1); // date, salary

  const dispatch = useDispatch();

  const positions = useSelector((state) => state.jobs.positions);
  const loading = useSelector((state) => state.jobs.loading);
  const handleSearchPress = () => setSearchedPosition(searchedPositionEdit);

  const cleanInput = () => {
    setSearchedPosition('');
    setSearchedPositionEdit('');
  };

  const handleOnPressSortBy = (text) => {
    setPage(1);
    setSortBy(text);
  };

  const loadData = React.useCallback(async () => {
    dispatch(removeAll());
    try {
      // if (page === 1) {

      dispatch(
        getJobsRequest({
          what: searchedPosition,
          sort_by: sortBy,
          page,
        }),
      );
      // } else {
      //   console.tron.log('page is equal to MORE THAN 1');
      //   dispatch(
      //     getMoreJobsRequest({
      //       what: searchedPosition,
      //       sort_by: sortBy,
      //       page,
      //     }),
      //   );
      // }

      setLoadingFooter(false);
    } catch (error) {
      console.tron.log(error);
    }
  }, [page, searchedPosition, sortBy, dispatch]);

  const refresh = () => {
    setPage(setPage);

    loadData();
  };

  const loadMore = () => {
    const newPage = page + 1;
    setLoadingFooter(true);
    setPage(newPage);
  };

  React.useEffect(() => {
    loadData();
  }, [loadData]);

  /** To do
   * move all positions to redux so I will get positions by id or adref
   * and I wont need to pass all job to job card
   * With that change I will  use saga as it comes from a api === async action
   *
   * Publishing Adzuna ad listings:
   * An API user shall label each displayed advert with the phrase "Jobs by Adzuna" at least 116 X 23 pixels in size, wherein the word "Jobs" shall be hyperlinked to http://www.adzuna.co.uk or the relevant local domain and the word "Adzuna" shall be the Adzuna Logo Image and shall also be hyperlinked to http://www.adzuna.co.uk or the relevant local domain.
   * Adzuna Logo images can be found at: http://www.adzuna.co.uk/press.html
   */

  const renderJobCard = ({ item }) => (
    <JobCard
      position={item.title}
      id={item.id}
      key={item.adref.toString()}
      city={item.city}
      state={item.state}
      company={item.company.display_name}
      created={item.created}
      tag={item.tag}
      job={item}
    />
  );

  const List = () => {
    if (positions.length === 0) {
      return <EmptyPage text="Sorry any job was found." />;
    }

    return (
      <FlatList
        showsVerticalScrollIndicator={false}
        data={positions}
        renderItem={renderJobCard}
        keyExtractor={(item) => item.adref.toString()}
        onEndReached={loadMore}
        refreshing={loadingFooter}
        onRefresh={refresh}
        onEndReachedThreshold={0.1}
        initialNumToRender={10}
      />
    );
  };

  return (
    <C.Wrapper>
      <JobSearch
        initialValue={searchedPositionEdit}
        clean={cleanInput}
        onChangeText={setSearchedPositionEdit}
        search={handleSearchPress}
      />
      <SortButtons handleOnPressSortBy={handleOnPressSortBy} />
      {loading ? <ActivityIndicator size="large" /> : List()}
      {loadingFooter ? <ActivityIndicator size="large" /> : null}
    </C.Wrapper>
  );
};

export default Main;
