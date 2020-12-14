import React from 'react';
import { Dimensions } from 'react-native';

import { formatDistanceToNow } from 'date-fns';

import Icon from 'react-native-vector-icons/Feather';

import Tags from '~/components/Tags';
import Button from '~/components/Button';

import * as S from './styles';

const { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;

const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const Job = ({ navigation, route }) => {
  const [job, setJob] = React.useState(route.params.job);
  const [loading, setLoading] = React.useState(true);

  console.tron.log(route.params.job.latitude);
  console.tron.log(route.params.job);

  React.useEffect(() => {
    // setLoading(false);
  }, [route.params.job]);

  const handleApplyPress = () => {
    console.tron.log('cvjlnf');
    navigation.navigate('JobWebView', {
      uri: job.redirect_url,
      title: 'Job web page',
    });
  };

  return (
    <S.Wrapper>
      {loading ? (
        <>
          <S.Line>
            <S.Company color="#000122">{job.company.display_name}</S.Company>
            <S.DaysAgo opacity={0.6} color="#000122" size={16}>
              {formatDistanceToNow(new Date(job.created), new Date())}
            </S.DaysAgo>
          </S.Line>
          {job.salary_max && (
            <S.Line>
              <S.Salary opacity={0.6} color="#000122" size={20}>
                {`$${job.salary_min} • `}
                {job.salary_max && `$${job.salary_max}`}
              </S.Salary>
            </S.Line>
          )}

          <S.Line isLast>
            <S.Website>company website</S.Website>
          </S.Line>
          <S.AddressLine>
            <Icon name="navigation" size={18} color="#000122" />
            <S.Address>
              {(job.location && job.location.display_name) || 'N/A'}
            </S.Address>
          </S.AddressLine>
          <S.MapWrapper>
            <S.Map
              initialRegion={{
                longitude: job.longitude || -33.865715,
                latitude: job.latitude || 151.206616,
                latitudeDelta: LATITUDE_DELTA,
                longitudeDelta: LONGITUDE_DELTA,
              }}
            />
            <S.Mask />
            <S.ViewButton>
              <S.ShowMap>
                <S.TextButton>Show on map</S.TextButton>
              </S.ShowMap>
            </S.ViewButton>
          </S.MapWrapper>
          <S.LineNoFullWidth>
            <S.Label>Role Type</S.Label>
            <S.Info>
              {job.contract_time === 'full_time' && 'Full time'}
              {job.contract_time === 'part_time' && 'Part time'}
              {!job.contract_time && 'N/A'}
            </S.Info>
          </S.LineNoFullWidth>
          <S.LineNoFullWidth>
            <S.Label>Experience</S.Label>
            <S.Info>N/A</S.Info>
          </S.LineNoFullWidth>
          {job.category.tag !== 'unknown' && (
            <S.TagsLine>
              <Tags text={job.category.tag} color="94, 131, 225" />
            </S.TagsLine>
          )}
          <S.TagsLine>
            <S.Description>
              {job.description && job.description.replace(/(<([^>]+)>)/gi, '')}
            </S.Description>
          </S.TagsLine>
          <Button text="Apply now" callback={handleApplyPress} />
        </>
      ) : null}
    </S.Wrapper>
  );
};

export default Job;
