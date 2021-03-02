import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import OrderList from '../Screens/Orders/orderList';
import OrderDetails from '../Screens/Orders/orderDetails';

const {Navigator, Screen} = createStackNavigator();

export const OrdersNavigator: React.FC = () => {
  return (
    <NavigationContainer independent={true}>
      <Navigator headerMode="none">
        <Screen name="OrderstList" component={OrderList} />
        <Screen name="OrderDetails" component={OrderDetails} />
      </Navigator>
    </NavigationContainer>
  );
};
