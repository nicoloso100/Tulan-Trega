import 'react-native-gesture-handler';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import React, {useEffect, useState} from 'react';
import {StatusBar} from 'react-native';
import * as eva from '@eva-design/eva';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import {default as theme} from './Styles/custom-theme.json';
import {default as mapping} from './Styles/mapping.json';
import {AppNavigator} from './Navigations/root';
import ReduxStore from './Redux/configureStore';
import {Provider} from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import {SET_APP_CONTEXT} from './Utils/constants';
import {setAppContext} from './Actions/Redux/user.action';

declare const global: {HermesInternal: null | {}};

const App = () => {
  const [ready, setReady] = useState<boolean>(false);

  useEffect(() => {
    AsyncStorage.getItem(SET_APP_CONTEXT).then((value) => {
      if (value) {
        ReduxStore.dispatch(setAppContext(value as TAppContext));
      }
      setReady(true);
    });
  }, []);

  return (
    <Provider store={ReduxStore}>
      <StatusBar barStyle="light-content" backgroundColor="white" />
      {ready && (
        <React.Fragment>
          <IconRegistry icons={EvaIconsPack} />
          <ApplicationProvider
            {...eva}
            theme={{...eva.light, ...theme}}
            customMapping={mapping}>
            <AppNavigator />
          </ApplicationProvider>
        </React.Fragment>
      )}
    </Provider>
  );
};

export default App;
