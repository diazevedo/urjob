import styled, { css } from 'styled-components/native';
import MapView from 'react-native-maps';
import { TouchableOpacity } from 'react-native-gesture-handler';

export const Wrapper = styled.View`
  flex-wrap: wrap;
  padding: 10px 0;
  flex: 1;
  background-color: #fff;
  /* border: 1px solid black; */
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
  font-family: 'Abel-Regular';
  flex: 1;
`;

export const Salary = styled.Text`
  font-size: 16px;
  font-family: 'Abel-Regular';
  margin-top: 10px;
`;

export const Website = styled.Text`
  font-size: 16px;
  margin-top: 15px;
  margin-bottom: 10px;
  font-family: 'Abel-Regular';
  color: #000122;
`;

export const Address = styled.Text`
  margin-top: 10px;
  font-size: 16px;
  color: #000122;
  margin-left: 10px;
  opacity: 0.6;
`;

export const MapWrapper = styled.View`
  height: 100px;
  width: 100%;
  margin-bottom: 20px;
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
  color: #000122;
  font-size: 14px;
  width: 100px;
`;

export const Info = styled.Text`
  color: #000122;
  font-size: 14px;
  opacity: 0.6;
`;

export const Description = styled.Text`
  color: #000122;
  font-size: 14px;
  line-height: 22px;
  text-align: justify;
`;
