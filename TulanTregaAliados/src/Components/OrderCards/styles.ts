import {TouchableOpacity, View} from 'react-native';
import styled from 'styled-components';
import {PRIMARY_COLOR} from '../../Styles/colors';

export const CardContainer = styled(View)`
  height: 100px;
  background-color: white;
  border-radius: 10px;
  margin: 20px;
  flex-direction: row;
`;

export const CardLine = styled(View)`
  width: 15px;
  height: 100px;
  background-color: ${PRIMARY_COLOR};
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
`;

export const CardContent = styled(TouchableOpacity)`
  flex: 1;
  padding: 10px;
  flex-direction: row;
`;

export const CardContentTexts = styled(View)`
  flex: 1;
  justify-content: space-evenly;
`;

export const CardContentPrice = styled(View)`
  justify-content: center;
  align-items: center;
`;
