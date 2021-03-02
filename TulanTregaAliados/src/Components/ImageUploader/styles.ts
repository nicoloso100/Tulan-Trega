import {TouchableOpacity, Image, View} from 'react-native';
import styled from 'styled-components';
import Modal from 'react-native-modal';
import {PRIMARY_COLOR} from '../../Styles/colors';
import {Icon} from '@ui-kitten/components';

export const ImageContainer = styled(TouchableOpacity)`
  width: 200px;
  height: 200px;
`;

export const ImageHolder = styled(Image)`
  width: 200px;
  height: 200px;
  border-radius: 30px;
`;

export const ModalPicker = styled(Modal as any)`
  margin: 0;
  justify-content: flex-end;
`;

export const ModalPickerContent = styled(View)`
  background-color: white;
  height: 200px;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  padding: 20px;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

export const ModalPickerButton = styled(TouchableOpacity)`
  width: 100px;
  height: 100px;
  background-color: ${PRIMARY_COLOR};
  border-radius: 30px;
  justify-content: center;
  align-items: center;
`;

export const ModalPickerButtonIcon = styled(Icon)`
  width: 50px;
  height: 50px;
`;

export const ImageAContainer = styled(View)`
  flex-direction: row;
`;

export const ImageActionsContainer = styled(View)`
  width: 60px;
  justify-content: space-evenly;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 20px;
`;

export const ImageActionIcon = styled(Icon)`
  width: 30px;
  height: 30px;
`;
