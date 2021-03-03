import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useEffect} from 'react';
import CloseButton from '../../../Components/CloseButton';
import {OrderDetailsContainer} from './styles';

const RiderOrderDetails: React.FC = () => {
  const navigation = useNavigation();
  const route = useRoute<any>();

  useEffect(() => {
    if (route.params.id) {
      console.log(route.params.id);
    }
  }, [route]);

  const onClose = () => {
    navigation.navigate('OrderstList');
  };

  return (
    <OrderDetailsContainer>
      <CloseButton onClose={onClose} />
    </OrderDetailsContainer>
  );
};

export default RiderOrderDetails;
