import styled, { css } from 'styled-components/native';
import MapView from 'react-native-maps';

import { TouchableOpacity } from 'react-native-gesture-handler';

export const Wrapper = styled.ScrollView`
  padding: 10px 0;
  height: 100%;
  flex: 1;
  background-color: #fff;
`;

export const Line = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 5px 15px;

  ${(props) =>
    props.isLast &&
    css`
      border-bottom-width: 1px;
      border-bottom-color: #ebf0ff;
    `}
`;

export const Company = styled.Text`
  color: ${(props) => props.color};
  font-size: ${(props) => (props.size ? `${props.size}px` : '24px')};
  opacity: ${(props) => (props.opacity ? props.opacity : 1)};
  font-family: 'Abel';
  flex: 3;
`;

export const DaysAgo = styled(Company)`
  flex: 1;
`;

export const Salary = styled.Text`
  font-size: 16px;
  font-family: 'Advent Pro';
  margin-top: 10px;
  opacity: 0.8;
`;

export const Website = styled.Text`
  font-size: 14px;
  margin-top: 5px;
  margin-bottom: 10px;
  font-family: 'Abel';
  color: rgba(0, 1, 34, 0.6);
`;

export const AddressLine = styled(Line)`
  justify-content: flex-start;
  padding-top: 15px;
  padding-bottom: 15px;
`;

export const Address = styled.Text`
  margin-left: 10px;
  font-size: 18px;
  color: rgba(0, 1, 34, 0.6);
  font-family: 'Abel';
`;

export const MapWrapper = styled.View`
  height: 100px;
  width: 100%;
  margin-bottom: 20px;

  flex: 1;
`;

export const Map = styled(MapView)`
  flex: 1;
`;

export const Mask = styled.View`
  background-color: rgba(245, 245, 245, 0.4);
  width: 100%;
  height: 100%;
  position: absolute;
`;

export const ViewButton = styled.View`
  width: 100px;
  height: 30px;
  position: absolute;
  right: 20px;
  bottom: 10px;
`;

export const ShowMap = styled(TouchableOpacity)`
  background-color: rgba(99, 121, 233, 0.3);
  border-radius: 6px;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const TextButton = styled.Text`
  font-size: 12px;
  color: #6379e9;
`;

export const LineNoFullWidth = styled(Line)`
  justify-content: flex-start;
`;

export const Label = styled.Text`
  color: #000;
  font-size: 18px;
  width: 100px;
  font-family: 'Abel';
`;

export const Info = styled.Text`
  color: rgba(0, 1, 34, 0.6);
  font-size: 16px;
  font-family: 'Advent Pro';
`;

export const TagsLine = styled(LineNoFullWidth)`
  padding-top: 15px;
`;

export const Description = styled.Text`
  color: #000122;
  font-size: 16px;
  line-height: 25px;
  text-align: justify;
  font-family: 'Abel';
  padding-bottom: 20px;
`;
