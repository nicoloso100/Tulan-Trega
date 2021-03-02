import React from 'react';
import {Buttoncontainer} from './styled';
import RiderButtonImg from '../../Assets/RiderButton.svg';
import StoreButtonImg from '../../Assets/StoreButton.svg';
import {ShadowStyle} from '../../Styles/shadows';
import {Text} from '@ui-kitten/components';

interface AppContextBtn {
  onPress: () => void;
}

export const AppContextRiderBtn: React.FC<AppContextBtn> = ({onPress}) => {
  return (
    <Buttoncontainer style={ShadowStyle} onPress={onPress}>
      <Text category="h6">Quiero ser un repartidor</Text>
      <RiderButtonImg width="100%" height="100%" />
    </Buttoncontainer>
  );
};

export const AppContextStoreBtn: React.FC<AppContextBtn> = ({onPress}) => {
  return (
    <Buttoncontainer style={ShadowStyle} onPress={onPress}>
      <Text category="h6">Quiero vender productos</Text>
      <StoreButtonImg width="100%" height="100%" />
    </Buttoncontainer>
  );
};
