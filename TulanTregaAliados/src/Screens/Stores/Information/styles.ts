import {Text} from '@ui-kitten/components';
import {ScrollView, View} from 'react-native';
import styled from 'styled-components';

export const InformationContainer = styled(ScrollView)`
  padding: 30px;
`;

export const InputContainer = styled(View)`
  margin-bottom: 10px;
`;

export const ImageContainer = styled(View)`
  margin-bottom: 30px;
  flex-direction: column;
  align-items: center;
`;

export const ImageLabel = styled(Text)`
  margin-bottom: 10px;
`;

export const InputsContainer = styled(View)`
  flex-direction: column;
  justify-content: center;
  margin-top: 30px;
  width: 100%;
`;

export const ButtonContainer = styled(View)`
  height: 100px;
  margin-top: 30px;
  margin-bottom: 30px;
`;
