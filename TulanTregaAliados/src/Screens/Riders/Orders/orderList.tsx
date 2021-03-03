import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {FlatList} from 'react-native';
import NoData from '../../../Components/NoData';
import RidersOrderCard from '../../../Components/OrderCards/ridersOrderCard';
import {OrderListContainer} from './styles';

const DATA: IRiderOrder[] = [];

const RiderOrderList: React.FC = () => {
  const navigation = useNavigation();
  const [refreshing, setRefreshing] = useState<boolean>(false);

  const onRefresh = () => {
    setRefreshing(true);
    try {
    } finally {
      setRefreshing(false);
    }
  };

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      onRefresh();
    });

    return unsubscribe;
  }, [navigation]);

  const renderItem = ({item}: {item: IRiderOrder}) => (
    <RidersOrderCard
      order={item}
      onPress={() => navigation.navigate('OrderDetails', {id: item._id})}
    />
  );

  const noDataComponent = () => (
    <NoData text="No se han encontrado pedidos disponibles" />
  );

  return (
    <OrderListContainer>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        refreshing={refreshing}
        onRefresh={onRefresh}
        keyExtractor={(item) => item._id}
        ListEmptyComponent={noDataComponent}
      />
    </OrderListContainer>
  );
};

export default RiderOrderList;
