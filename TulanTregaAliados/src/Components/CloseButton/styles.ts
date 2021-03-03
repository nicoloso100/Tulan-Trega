import {Icon} from '@ui-kitten/components';
import {TouchableOpacity, View} from 'react-native';
import styled from 'styled-components';

export const CloseContainer = styled(View)`
  flex-direction: row;
  justify-content: flex-end;
  margin-bottom: 20px;
`;

export const CloseButtonCont = styled(TouchableOpacity)`
  width: 70px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const CloseButtonIcon = styled(Icon)`
  width: 20px;
  height: 20px;
`;
