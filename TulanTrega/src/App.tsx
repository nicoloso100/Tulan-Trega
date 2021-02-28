import 'react-native-gesture-handler';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import React from 'react';
import {StatusBar} from 'react-native';
import * as eva from '@eva-design/eva';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import {default as theme} from './Styles/custom-theme.json';
import {default as mapping} from './Styles/mapping.json';
import {AppNavigator} from './Navigations/root';

declare const global: {HermesInternal: null | {}};

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="white" />
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider
        {...eva}
        theme={{...eva.light, ...theme}}
        customMapping={mapping}>
        <AppNavigator />
      </ApplicationProvider>
    </>
  );
};

export default App;
