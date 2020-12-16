import React from 'react';
import { FlatList, ActivityIndicator } from 'react-native';
import { APP_ID, APP_KEY } from '@env';
import api from '~/services/api';
import JobSearch from '~/parts/JobSearch';
import SortButtons from '~/parts/SortButtons';
import JobCard from '~/components/JobCard';
import EmptyPage from '~/components/EmptyPage';

import data from '~/services/data/mock';

import prepareData from '~/utils/preparePositions';

import * as C from './styles';

const Main = () => {
  const [positions, setPositions] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [loadingFooter, setLoadingFooter] = React.useState(false);
  const [searchedPosition, setSearchedPosition] = React.useState('');
  const [searchedPositionEdit, setSearchedPositionEdit] = React.useState('');
  const [sortBy, setSortBy] = React.useState('date'); // relevance, salary
  const [page, setPage] = React.useState(1); // date, salary

  const handleSearchPress = () => setSearchedPosition(searchedPositionEdit);

  const cleanInput = () => {
    setSearchedPosition('');
    setSearchedPositionEdit('');
  };

  const handleOnPressSortBy = (text) => {
    setLoading(true);
    setPage(1);
    setSortBy(text);
  };

  const loadData = React.useCallback(async () => {
    try {
      // const response = await api.get(
      //   `https://api.adzuna.com/v1/api/jobs/au/search/${page}?app_id=${APP_ID}&app_key=${APP_KEY}&results_per_page=100&content-type=application/json`,
      //   {
      //     params: { what: searchedPosition, sort_by: sortBy },
      //   },
      // );

      // setPositions((old) => {

      // const newPositions = prepareData(response.data.results);
      //   return page > 1
      //     ? [...old, ...newPositions]
      //     : newPositions;
      // });

      const preparedData = prepareData(data);
      setPositions(preparedData);
      setLoading(false);
      setLoadingFooter(false);
    } catch (error) {
      console.tron.log(error);
    }
  }, [page, sortBy, searchedPosition]);

  const refresh = () => {
    setLoading(true);
    setPage(1);
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

  const footerLoading = () => {
    return loadingFooter ? <ActivityIndicator size="large" /> : null;
  };

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
        refreshing={loading}
        onRefresh={refresh}
        onEndReachedThreshold={0.2}
        initialNumToRender={6}
        ListFooterComponent={footerLoading}
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
    </C.Wrapper>
  );
};

export default Main;
