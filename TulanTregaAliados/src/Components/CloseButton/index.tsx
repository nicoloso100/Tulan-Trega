import {Text} from '@ui-kitten/components';
import React from 'react';
import {CloseButtonCont, CloseButtonIcon, CloseContainer} from './styles';

interface CloseButtonProps {
  onClose: () => void;
}

const CloseButton: React.FC<CloseButtonProps> = ({onClose}) => {
  return (
    <CloseContainer>
      <CloseButtonCont onPress={onClose}>
        <CloseButtonIcon fill="#8F9BB3" name="close-outline" />
        <Text category="s1">Cerrar</Text>
      </CloseButtonCont>
    </CloseContainer>
  );
};

export default CloseButton;
