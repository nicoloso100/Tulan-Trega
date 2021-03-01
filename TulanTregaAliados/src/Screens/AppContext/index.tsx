import AsyncStorage from '@react-native-community/async-storage';
import {Divider, TopNavigation} from '@ui-kitten/components';
import React from 'react';
import {useDispatch} from 'react-redux';
import {setAppContext} from '../../Actions/Redux/user.action';
import {
  AppContextRiderBtn,
  AppContextStoreBtn,
} from '../../Components/AppContextButtons';
import {Container} from '../../Styles/styledComponents';
import {SET_APP_CONTEXT} from '../../Utils/constants';
import {ButtonsContainer} from './styles';

const AppContext: React.FC = () => {
  const dispatch = useDispatch();

  const setRiderOption = () => {
    const context: TAppContext = 'rider';
    AsyncStorage.setItem(SET_APP_CONTEXT, context);
    dispatch(setAppContext(context));
  };

  const setStoreOption = () => {
    const context: TAppContext = 'store';
    AsyncStorage.setItem(SET_APP_CONTEXT, context);
    dispatch(setAppContext(context));
  };

  return (
    <Container>
      <TopNavigation title="Selecciona una opción" alignment="center" />
      <Divider />
      <ButtonsContainer>
        <AppContextRiderBtn onPress={setRiderOption} />
        <AppContextStoreBtn onPress={setStoreOption} />
      </ButtonsContainer>
    </Container>
  );
};

export default AppContext;
