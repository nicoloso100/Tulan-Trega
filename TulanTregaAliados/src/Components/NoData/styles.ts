import {Icon, Text} from '@ui-kitten/components';
import {View} from 'react-native';
import styled from 'styled-components';
import {BACKGROUND_GRAY} from '../../Styles/colors';

export const NoDataContainer = styled(View)`
  margin: 30px;
  height: 200px;
  background-color: ${BACKGROUND_GRAY};
  border-radius: 20px;
  padding: 20px;
  justify-content: space-evenly;
  align-items: center;
`;

export const NoDataText = styled(Text)`
  text-align: center;
`;

export const NoDataIcon = styled(Icon)`
  width: 50px;
  height: 50px;
`;
