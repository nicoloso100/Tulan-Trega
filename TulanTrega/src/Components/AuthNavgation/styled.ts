import {Icon, Text} from '@ui-kitten/components';
import {TouchableOpacity, View} from 'react-native';
import styled from 'styled-components';

export const AuthNavigationContainer = styled(TouchableOpacity)`
  flex-direction: row;
  align-items: center;
`;

export const AuthNavigationIcon = styled(Icon)`
  width: 30px;
  height: 30px;
  margin-right: 10px;
`;

export const AuthNavigationTextContainer = styled(View)`
  flex: 1;
  flex-direction: row;
  justify-content: center;
`;

export const AuthNavigationText = styled(Text)`
  margin-left: -30px;
`;
