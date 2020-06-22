import styled from 'styled-components/native';
import colors from '~/styles/colors';

export const Wrapper = styled.View`
  width: 100%;
  background-color: ${colors.fourth};
  margin-top: 20px;
  border-radius: 6px;
  padding: 12px;
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
  margin-bottom: 10px;
  font-family: 'Abel-Regular';
`;

export const CompanyLogo = styled.Image`
  width: 30px;
  height: 30px;
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

export const TagWrapper = styled.View`
  padding: 5px 10px;
  /* background-color: rgba(94, 194, 142, 0.2); */
  background-color: ${(props) => props.color};
  margin-right: 10px;
  border-radius: 10px;
`;

export const Tags = styled.Text`
  /* color: #5ec28e; */
  color: ${(props) => props.color}
  font-family: 'Abel-Regular';
`;
