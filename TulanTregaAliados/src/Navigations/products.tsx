import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import ProductList from '../Screens/Stores/Products/productList';
import AddProduct from '../Screens/Stores/Products/addProduct';
import ModifyProduct from '../Screens/Stores/Products/modifyProduct';

const {Navigator, Screen} = createStackNavigator();

export const ProductsNavigator: React.FC = () => {
  return (
    <NavigationContainer independent={true}>
      <Navigator headerMode="none">
        <Screen name="ProductList" component={ProductList} />
        <Screen name="AddProduct" component={AddProduct} />
        <Screen name="ModifyProduct" component={ModifyProduct} />
      </Navigator>
    </NavigationContainer>
  );
};
