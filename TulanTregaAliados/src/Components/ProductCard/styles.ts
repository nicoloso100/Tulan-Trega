import {Text} from '@ui-kitten/components';
import {Image, View} from 'react-native';
import styled from 'styled-components';

export const ProductCardCont = styled(View)`
  width: 100px;
  height: 150px;
  margin: 3px;
`;

export const ProductCardImage = styled(Image)`
  width: 100%;
  flex: 1;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-radius: 10px;
`;

export const ProductCardTexts = styled(View)`
  padding: 5px;
`;

export const ProductCardText = styled(Text)`
  height: 15px;
`;
