import {Text} from '@ui-kitten/components';
import React from 'react';
import {View} from 'react-native';
import {ShadowStyle} from '../../Styles/shadows';
import {
  CardContainer,
  CardContent,
  CardContentPrice,
  CardContentTexts,
  CardLine,
} from './styles';

interface RidersOrderCardProps {
  order: IRiderOrder;
  onPress: () => void;
}

const RidersOrderCard: React.FC<RidersOrderCardProps> = ({order, onPress}) => {
  return (
    <CardContainer style={ShadowStyle}>
      <CardLine />
      <CardContent onPress={onPress}>
        <CardContentTexts>
          <View>
            <Text
              lineBreakMode="tail"
              numberOfLines={1}
              category="s1">{`${order.itemsNumber} productos ordenados`}</Text>
            <Text
              lineBreakMode="tail"
              numberOfLines={1}
              category="s1">{`${order.storesNumber} tiendas`}</Text>
          </View>
          <Text
            appearance="hint"
            lineBreakMode="tail"
            numberOfLines={2}
            category="c1">{`Pedido por: ${order.userName}`}</Text>
        </CardContentTexts>
        <CardContentPrice>
          <Text category="s1">{`$${order.ridePrice}`}</Text>
        </CardContentPrice>
      </CardContent>
    </CardContainer>
  );
};

export default RidersOrderCard;
