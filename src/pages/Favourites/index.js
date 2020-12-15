import React from 'react';
import { FlatList } from 'react-native';

import JobCard from '~/components/JobCard';
import EmptyPage from '~/components/EmptyPage';

import { useDispatch, useSelector } from 'react-redux';

import { removeAll } from '~/store/modules/favourite/actions';

import * as C from './styles';

const Favourites = () => {
  const positions = useSelector((state) => state.favourite.favourites);

  return (
    <C.Wrapper>
      {positions.length === 0 ? (
        <EmptyPage text="You do not have any job in your favourite list." />
      ) : (
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
        />
      )}
    </C.Wrapper>
  );
};

export default Favourites;
