import {Layout} from '@ui-kitten/components';
import {View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import styled from 'styled-components';
import {BACKGROUND_GRAY} from '../../Styles/colors';

export const SignUpContainer = styled(Layout)`
  flex: 1;
`;

export const ImageContainer = styled(View)`
  flex: 1;
  padding: 30px;
`;

export const FormContainer = styled(ScrollView)`
  flex: 4;
  background-color: ${BACKGROUND_GRAY};
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  padding: 30px;
`;

export const InputsContainer = styled(View)`
  margin-top: 30px;
  width: 100%;
`;

export const InputContainer = styled(View)`
  margin-bottom: 10px;
`;

export const ButtonContainer = styled(View)`
  margin-top: 30px;
`;
