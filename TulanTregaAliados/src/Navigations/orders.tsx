import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import StoreOrderList from '../Screens/Stores/Orders/orderList';
import StoreOrderDetails from '../Screens/Stores/Orders/orderDetails';
import RiderOrderList from '../Screens/Riders/Orders/orderList';
import RiderOrderDetails from '../Screens/Riders/Orders/orderDetails';

const {Navigator, Screen} = createStackNavigator();

export const StoreOrdersNavigator: React.FC = () => {
  return (
    <NavigationContainer independent={true}>
      <Navigator headerMode="none">
        <Screen name="OrderstList" component={StoreOrderList} />
        <Screen name="OrderDetails" component={StoreOrderDetails} />
      </Navigator>
    </NavigationContainer>
  );
};

export const RiderOrdersNavigator: React.FC = () => {
  return (
    <NavigationContainer independent={true}>
      <Navigator headerMode="none">
        <Screen name="OrderstList" component={RiderOrderList} />
        <Screen name="OrderDetails" component={RiderOrderDetails} />
      </Navigator>
    </NavigationContainer>
  );
};
