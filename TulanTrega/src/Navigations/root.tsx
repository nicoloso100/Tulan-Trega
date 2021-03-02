import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SignIn from '../Screens/SignIn';
import SignUp from '../Screens/SignUp';
import {useSelector} from 'react-redux';
import {RootState} from '../Redux/rootReducer';
import AppContext from '../Screens/AppContext';
import HomeNavigation from './home';

const {Navigator, Screen} = createStackNavigator();

export const AppNavigator: React.FC = () => {
  const user = useSelector((state: RootState) => state.userReducer);
  return (
    <NavigationContainer>
      <Navigator headerMode="none">
        {!user.userLoggedId ? (
          user.appContext === null ? (
            <Screen name="SetContext" component={AppContext} />
          ) : (
            <React.Fragment>
              <Screen name="SignIn" component={SignIn} />
              <Screen name="SignUp" component={SignUp} />
            </React.Fragment>
          )
        ) : (
          <Screen name="Home" component={HomeNavigation} />
        )}
      </Navigator>
    </NavigationContainer>
  );
};
