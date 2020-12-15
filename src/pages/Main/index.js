import React from 'react';
import { FlatList, ActivityIndicator } from 'react-native';
import { APP_ID, APP_KEY } from '@env';
import api from '~/services/api';
import JobSearch from '~/parts/JobSearch';
import SortButtons from '~/parts/SortButtons';
import JobCard from '~/components/JobCard';

import { removeAll } from '~/store/modules/favourite/actions';

const data = [
  {
    redirect_url:
      'https://www.adzuna.com.au/details/1801626793?se=2DKYbGA56xGQh_wOu670cA&utm_medium=api&utm_source=8e0f4672&v=F418812A52D8F1783D5553412BF8A8D1AE3F539B',
    adref:
      'eyJhbGciOiJIUzI1NiJ9.eyJzIjoiMkRLWWJHQTU2eEdRaF93T3U2NzBjQSIsImkiOiIxODAxNjI2NzkzIn0.kthWctl04gsmS2dBhjdrEuMbyDzaj4A3ITkmBVcooUM',
    __CLASS__: 'Adzuna::API::Response::Job',
    description:
      'A technology client is seeking a <strong>JavaScript</strong> <strong>Developer</strong> to design and develop well-tested, high-performing, and scalable applications. One of the key responsibilities you ...',
    created: '2020-11-04T13:24:00Z',
    longitude: 151.206616,
    company: {
      __CLASS__: 'Adzuna::API::Response::Company',
      display_name: 'Hire Digital',
    },
    location: {
      __CLASS__: 'Adzuna::API::Response::Location',
      area: [
        'Australia',
        'New South Wales',
        'Sydney Region',
        'Sydney',
        'The Rocks',
      ],
      display_name: 'The Rocks, Sydney',
    },
    title: '<strong>Javascript</strong> <strong>Developer</strong>',
    id: '1801626793',
    latitude: -33.865715,
    salary_is_predicted: '0',
    category: {
      label: 'Unknown',
      __CLASS__: 'Adzuna::API::Response::Category',
      tag: 'unknown',
    },
  },
  {
    category: {
      tag: 'unknown',
      __CLASS__: 'Adzuna::API::Response::Category',
      label: 'Unknown',
    },
    id: '1801626829',
    latitude: -37.844856,
    salary_is_predicted: '0',
    redirect_url:
      'https://www.adzuna.com.au/details/1801626829?se=2DKYbGA56xGQh_wOu670cA&utm_medium=api&utm_source=8e0f4672&v=A171C44403BFCBC5E38C50B9E1AD8E6613576057',
    adref:
      'eyJhbGciOiJIUzI1NiJ9.eyJpIjoiMTgwMTYyNjgyOSIsInMiOiIyREtZYkdBNTZ4R1FoX3dPdTY3MGNBIn0.SFmJSszB8nH4k7bc6ov3HJZh3YbYjYbPukgWof-ywnE',
    title: '<strong>Javascript</strong> <strong>Developer</strong>',
    __CLASS__: 'Adzuna::API::Response::Job',
    created: '2020-11-04T13:24:10Z',
    description:
      'A technology client is seeking a <strong>JavaScript</strong> <strong>Developer</strong> to design and develop well-tested, high-performing, and scalable applications. One of the key responsibilities you ...',
    longitude: 144.977613,
    company: {
      display_name: 'Hire Digital',
      __CLASS__: 'Adzuna::API::Response::Company',
    },
    location: {
      display_name: 'Middle Park, Port Phillip',
      __CLASS__: 'Adzuna::API::Response::Location',
      area: [
        'Australia',
        'Victoria',
        'Melbourne Region',
        'Port Phillip',
        'Middle Park',
      ],
    },
  },
  {
    category: {
      tag: 'it-jobs',
      __CLASS__: 'Adzuna::API::Response::Category',
      label: 'IT Jobs',
    },
    contract_type: 'permanent',
    salary_is_predicted: '0',
    id: '1847928639',
    contract_time: 'full_time',
    adref:
      'eyJhbGciOiJIUzI1NiJ9.eyJzIjoiMkRLWWJHQTU2eEdRaF93T3U2NzBjQSIsImkiOiIxODQ3OTI4NjM5In0.gbRITh7KNAZXtQmfJnSPms8muRsRWoXFEXosdYCLtPk',
    redirect_url:
      'https://www.adzuna.com.au/details/1847928639?se=2DKYbGA56xGQh_wOu670cA&utm_medium=api&utm_source=8e0f4672&v=EDE9310DDB22536C997F923DE26A9B28D38E3B88',
    salary_min: 0,
    salary_max: 130000,
    title: 'Backend <strong>Javascript</strong> <strong>Developer</strong>',
    description:
      'Work in projects that are making IoT-powered future possible. Long term career progression and training available. <strong>Javascript</strong> <strong>Developer</strong> We are excited to partner with this amazing ...  advanced solutions to demanding real-world problems, pushing the boundaries of performance. As a <strong>Javascript</strong> <strong>developer</strong>, you’ll be working with intelligent and genuinely passionate ...',
    location: {
      display_name: 'Australia',
      area: ['Australia'],
      __CLASS__: 'Adzuna::API::Response::Location',
    },
    created: '2020-11-28T05:20:30Z',
    company: {
      display_name: 'Simplified Recruitment',
      __CLASS__: 'Adzuna::API::Response::Company',
    },
    __CLASS__: 'Adzuna::API::Response::Job',
  },
  {
    id: '1852900563',
    salary_max: 130,
    title: 'Fullstack <strong>Javascript</strong> <strong>Developer</strong>',
    description:
      ', and to share this with their doctors. THE OPPORTUNITY AT SEER We are looking for a Fullstack <strong>JavaScript</strong> <strong>developer</strong> to join our growing software team and help us develop new capabilities ...  (including both front and back-end <strong>development</strong>) Very comfortable writing <strong>JavaScript</strong> and experienced with at least one modern front-end JavaScript framework Good communication skills ...',
    company: {
      display_name: 'Seer',
      __CLASS__: 'Adzuna::API::Response::Company',
    },
    created: '2020-12-01T07:28:45Z',
    salary_min: 120,
    contract_time: 'full_time',
    category: {
      label: 'IT Jobs',
      __CLASS__: 'Adzuna::API::Response::Category',
      tag: 'it-jobs',
    },
    salary_is_predicted: '0',
    latitude: -37.844856,
    longitude: 144.977613,
    location: {
      __CLASS__: 'Adzuna::API::Response::Location',
      area: [
        'Australia',
        'Victoria',
        'Melbourne Region',
        'Port Phillip',
        'Middle Park',
      ],
      display_name: 'Middle Park, Port Phillip',
    },
    __CLASS__: 'Adzuna::API::Response::Job',
    redirect_url:
      'https://www.adzuna.com.au/details/1852900563?se=2DKYbGA56xGQh_wOu670cA&utm_medium=api&utm_source=8e0f4672&v=22C84A1022816DD509294E9ED7D192DDEEFD87EE',
    adref:
      'eyJhbGciOiJIUzI1NiJ9.eyJzIjoiMkRLWWJHQTU2eEdRaF93T3U2NzBjQSIsImkiOiIxODUyOTAwNTYzIn0.fIZ8YRCNQkbdjddnwdS7jJ4QiQPvnub8jkZ-X5FDkEo',
  },
  {
    category: {
      tag: 'it-jobs',
      __CLASS__: 'Adzuna::API::Response::Category',
      label: 'IT Jobs',
    },
    contract_type: 'permanent',
    salary_is_predicted: '0',
    id: '1844770600',
    contract_time: 'full_time',
    adref:
      'eyJhbGciOiJIUzI1NiJ9.eyJzIjoiMkRLWWJHQTU2eEdRaF93T3U2NzBjQSIsImkiOiIxODQ0NzcwNjAwIn0.oskrzODVa7cLz56LHrFqQzAzr3wVZbcz-JsZFWDjQmQ',
    redirect_url:
      'https://www.adzuna.com.au/details/1844770600?se=2DKYbGA56xGQh_wOu670cA&utm_medium=api&utm_source=8e0f4672&v=F5DCDB8DFD28C055CC90979A795870C26CC7839A',
    title: 'Full Stack <strong>JavaScript</strong> <strong>Developers</strong>',
    location: {
      area: ['Australia', 'Western Australia', 'Perth Region'],
      __CLASS__: 'Adzuna::API::Response::Location',
      display_name: 'Perth Region, Western Australia',
    },
    description:
      'Full Stack <strong>JavaScript</strong> <strong>Developers</strong> - Contact Daryl Lim on 08 9323 0257 Hudson are leaders in assisting employers and job seekers surface information to assist them find the right ...  by the organization. We do also expect more vacancies to become available in the weeks to come. So if you are a Full Stack <strong>JavaScript</strong> <strong>Developer</strong> and wanted to be kept in the loop about opportunities ...',
    created: '2020-11-26T11:49:29Z',
    company: {
      display_name: 'Hudson',
      __CLASS__: 'Adzuna::API::Response::Company',
    },
    __CLASS__: 'Adzuna::API::Response::Job',
  },
];

import * as C from './styles';

const Main = () => {
  const [positions, setPositions] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [searchedPosition, setSearchedPosition] = React.useState('');
  const [sortBy, setSortBy] = React.useState('date'); // relevance, salary
  const [page, setPage] = React.useState(1); // date, salary

  const cleanInput = () => {
    setSearchedPosition('');
  };

  const handleOnPressSortBy = (text) => {
    setLoading(true);
    setPage(1);
    setSortBy(text);
    // loadData();
  };

  const loadData = React.useCallback(async () => {
    try {
      // const response = await api.get(
      //   `https://api.adzuna.com/v1/api/jobs/au/search/${page}?app_id=${APP_ID}&app_key=${APP_KEY}&results_per_page=7&content-type=application/json`,
      //   {
      //     params: { what: searchedPosition, sort_by: sortBy },
      //   },
      // );

      // setPositions((old) => {
      //   console.tron.log({ old });
      //   console.tron.log({ new: response.data.results });
      //   return page > 1
      //     ? [...old, ...response.data.results]
      //     : response.data.results;
      // });
      setLoading(false);
      setPositions(data);
    } catch (error) {}
  }, [page, sortBy, searchedPosition]);

  const incrementPage = () => {
    const newPage = page + 1;
    setPage(newPage);
  };

  // const refresh = () => {
  //   setPage(1);
  //   console.tron.log('rrrrr');
  //   setLoading(true);
  //   loadData();
  // };

  // const loadMore = () => {
  // console.tron.log('loadMore');
  // incrementPage();
  // setLoading(true);
  // loadData();
  // };

  React.useEffect(() => {
    loadData();
  }, [loadData]);

  // React.useEffect(() => {
  //   dispatch(removeAll());
  // }, [dispatch]);

  return (
    <C.Wrapper>
      <JobSearch
        initialValue={searchedPosition}
        clean={cleanInput}
        onChangeText={setSearchedPosition}
        search={loadData}
      />
      <SortButtons handleOnPressSortBy={handleOnPressSortBy} />
      {loading ? (
        <ActivityIndicator size="large" />
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
              onPress={() => console.tron.log('frrrrrrrr')}
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
      )}
    </C.Wrapper>
  );
};

export default Main;
