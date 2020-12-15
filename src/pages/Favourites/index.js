import React from 'react';
import { FlatList } from 'react-native';

import JobCard from '~/components/JobCard';

import { useDispatch, useSelector } from 'react-redux';

import {
  addJobToFavourite,
  removeJobFromFavourite,
} from '~/store/modules/favourite/actions';

import * as C from './styles';

const Favourites = () => {
  const positions = useSelector((state) => state.favourite.favourites);

  return (
    <C.Wrapper>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={positions}
        renderItem={({ item }) => (
          <JobCard
            position={item.title.replace(/(<([^>]+)>)/gi, '')}
            id={item.id}
            key={item.id.toString()}
            city={item.location.area[3] || 'Australia'}
            state={item.location.area[1] || 'Australia'}
            company={item.company.display_name}
            created={item.created}
            tag={
              item.category.label === 'Unknown' ? false : item.category.label
            }
            job={item}
          />
        )}
        keyExtractor={(item) => item.id.toString()}
        // onEndReached={loadMore}
        // refreshing={loading}
        // onRefresh={refresh}
        // onEndReachedThreshold={0.5}
        // extraData={loading}
        // ListFooterComponent={() => <ActivityIndicator size="large" />}
      />
    </C.Wrapper>
  );
};

export default Favourites;
