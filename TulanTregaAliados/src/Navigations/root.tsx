import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SignIn from '../Screens/SignIn';
import SignUp from '../Screens/SignUp';

const {Navigator, Screen} = createStackNavigator();

export const AppNavigator: React.FC = () => (
  <NavigationContainer>
    <Navigator headerMode="none">
      <Screen name="SignIn" component={SignIn} />
      <Screen name="SigUp" component={SignUp} />
    </Navigator>
  </NavigationContainer>
);
