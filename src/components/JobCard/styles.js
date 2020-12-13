import styled from 'styled-components/native';

import colors from '~/styles/colors';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

export const Wrapper = styled.View`
  width: 100%;
  background-color: ${colors.fourth};
  margin-bottom: 20px;
  border-radius: 6px;
`;

export const ClickableView = styled(TouchableWithoutFeedback)`
  width: 100%;
  background-color: ${colors.fourth};
  border-radius: 6px;
  padding: 10px 16px;
`;

export const Line = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

export const WrapperCompanyDays = styled.View`
  width: 50%;
  margin-right: 30px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Company = styled.Text`
  color: ${(props) => props.color};
  font-size: ${(props) => (props.size ? `${props.size}px` : '18px')};
  opacity: ${(props) => (props.opacity ? props.opacity : 1)};
  margin-bottom: 10px;
  margin-right: 10px;
  font-family: 'Abel-Regular';
`;

export const CompanyLogo = styled.Image`
  width: 28px;
  height: 28px;
  border-radius: 4px;
  align-self: flex-start;
`;

export const LocationLine = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const LocationText = styled.Text`
  font-family: 'Abel-Regular';
  margin-left: 10px;
  font-size: 16px;
  color: ${colors.third};
`;

export const TagsLine = styled.View`
  margin-top: 10px;
  flex-direction: row;
`;
