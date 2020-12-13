import React from 'react';
import { Dimensions } from 'react-native';

import Icon from 'react-native-vector-icons/Feather';

import Tags from '~/components/Tags';
import Button from '~/components/Button';

import * as S from './styles';
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

const txt = `You will be one of the first hires at Tasit Labs, and my hope is that you want to grow with the company in a maaaajor way. Our tech stack is all "modern" JavaScript (React, React Native, Node.js, Serverless, AWS) and blockchain (Ethereum to start).

Tasit Labs cares very much about inclusion, and we aim to hire lots of people from diverse backgrounds. Many startups say they care about inclusion, but we actually do!`;

const { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;

const LATITUDE_DELTA = 0.0222;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

console.log({ LONGITUDE_DELTA, LATITUDE_DELTA });

const Job = ({ navigation, route }) => {
  const [job, setJob] = React.useState({});
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const jobInfo = data.find((item) => item.id === route.params.id);
    setJob(jobInfo);
    setLoading(false);
  }, [route.params.id, loading]);

  return (
    <S.Wrapper>
      <S.Line>
        {loading ? (
          <S.Company color="#000122">is loading</S.Company>
        ) : (
          <>
            <S.Company color="#000122">{job.company.display_name}</S.Company>
            <S.Company opacity={0.6} color="#000122" size={16}>
              1 day ago
            </S.Company>
          </>
        )}
      </S.Line>
      <S.Line>
        <S.Salary opacity={0.6} color="#000122" size={20}>
          $80k – $95k • 2.0% – 4.0%
        </S.Salary>
      </S.Line>
      <S.Line isLast>
        <S.Website>company website</S.Website>
      </S.Line>
      <S.Line style={{ justifyContent: 'flex-start' }}>
        <Icon name="navigation" size={18} color="#000122" />
        <S.Address>2045 W Grand Ave Ste B, Chicago</S.Address>
      </S.Line>
      <S.MapWrapper>
        <S.Map
          initialRegion={{
            latitude: -33.8886656,
            longitude: 151.2472576,
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
        <S.Label>Job Type</S.Label>
        <S.Info>Full-time</S.Info>
      </S.LineNoFullWidth>
      <S.LineNoFullWidth>
        <S.Label>Experience</S.Label>
        <S.Info>2+ years</S.Info>
      </S.LineNoFullWidth>
      <S.LineNoFullWidth>
        <Tags text="data visualization" color="94, 131, 225" />
        <Tags text="UX/UI Design" color="94, 131, 225" />
        <Tags text="sketch" color="94, 131, 225" />
      </S.LineNoFullWidth>
      <S.LineNoFullWidth>
        <S.Description>{txt}</S.Description>
      </S.LineNoFullWidth>

      <Button text="Apply now" />
    </S.Wrapper>
  );
};

export default Job;
