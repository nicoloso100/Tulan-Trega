import AsyncStorage from '@react-native-community/async-storage';
import {
  BottomNavigation,
  BottomNavigationTab,
  Button,
  Divider,
  Icon,
  Layout,
  Text,
  TopNavigation,
  ViewPager,
} from '@ui-kitten/components';
import React, {useEffect} from 'react';
import {Linking, StyleSheet, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import {GetRiderInfo} from '../Actions/APICalls/RidersAction';
import {GetStoreInfo} from '../Actions/APICalls/StoresActions';
import {setRiderUserInfo} from '../Actions/Redux/rider.action';
import {setStoreUserInfo} from '../Actions/Redux/store.action';
import {closeSession} from '../Actions/Redux/user.action';
import {RootState} from '../Redux/rootReducer';
import RiderInformation from '../Screens/Riders/Information';
import StoreInformation from '../Screens/Stores/Information';
import {Container} from '../Styles/styledComponents';
import {SET_USER_LOGGED_ID} from '../Utils/constants';
import {RiderOrdersNavigator, StoreOrdersNavigator} from './orders';
import {ProductsNavigator} from './products';

const PersonIcon = (props: any) => <Icon {...props} name="person-outline" />;

const ListIcon = (props: any) => <Icon {...props} name="list-outline" />;

const ItemsIcon = (props: any) => <Icon {...props} name="grid-outline" />;

const HomeNavigation: React.FC = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.userReducer);
  const [selectedIndex, setSelectedIndex] = React.useState<number>(0);
  const [errorMessage, setErrorMessage] = React.useState<string | null>(null);
  const [completedProfile, setCompletedProfile] = React.useState<
    boolean | undefined
  >(undefined);

  useEffect(() => {
    if (user.appContext === 'store') {
      if (user.userLoggedId) {
        GetStoreInfo(user.userLoggedId).then((info) => {
          if (info) {
            dispatch(setStoreUserInfo(info));
            if (info.name === undefined && info.location === undefined) {
              if (!info.enabled) {
                setErrorMessage('Su usuario se encuentra deshabilitado');
              }
              setSelectedIndex(2);
              setCompletedProfile(false);
            } else {
              setCompletedProfile(true);
            }
          } else {
            setErrorMessage(
              'Ha ocurrido un error al obtener la información del usuario',
            );
          }
        });
      } else {
        setErrorMessage(
          'Ha ocurrido un error al obtener la información del usuario',
        );
      }
    }
  }, [dispatch, user.appContext, user.userLoggedId]);

  useEffect(() => {
    if (user.appContext === 'rider') {
      if (user.userLoggedId) {
        GetRiderInfo(user.userLoggedId).then((info) => {
          if (info) {
            dispatch(setRiderUserInfo(info));
            if (info.name === undefined) {
              if (!info.enabled) {
                setErrorMessage('Su usuario se encuentra deshabilitado');
              }
              setSelectedIndex(1);
              setCompletedProfile(false);
            } else {
              setCompletedProfile(true);
            }
          } else {
            setErrorMessage(
              'Ha ocurrido un error al obtener la información del usuario',
            );
          }
        });
      } else {
        setErrorMessage(
          'Ha ocurrido un error al obtener la información del usuario',
        );
      }
    }
  }, [dispatch, user.appContext, user.userLoggedId]);

  const setCloseSession = async () => {
    await AsyncStorage.removeItem(SET_USER_LOGGED_ID);
    dispatch(closeSession());
  };

  const contactSupport = () => {
    Linking.openURL('tel:7752354163');
  };

  return (
    <Container>
      {errorMessage === null ? (
        completedProfile !== undefined &&
        (user.userLoggedId && user.appContext === 'store' ? (
          <React.Fragment>
            <ViewPager
              style={styles.container}
              selectedIndex={selectedIndex}
              onSelect={(index) => setSelectedIndex(index)}>
              <Layout level="2" style={styles.tab}>
                <TopNavigation title="PEDIDOS" alignment="center" />
                <Divider />
                {selectedIndex === 0 && <StoreOrdersNavigator />}
              </Layout>
              <Layout level="2" style={styles.tab}>
                <TopNavigation title="MIS PRODUCTOS" alignment="center" />
                <Divider />
                {selectedIndex === 1 && <ProductsNavigator />}
              </Layout>
              <Layout level="2" style={styles.tab}>
                <TopNavigation title="MI INFORMACIÓN" alignment="center" />
                <Divider />
                {selectedIndex === 2 && <StoreInformation />}
              </Layout>
            </ViewPager>
            <BottomNavigation
              selectedIndex={selectedIndex}
              onSelect={(index) => setSelectedIndex(index)}>
              <BottomNavigationTab icon={ListIcon} />
              <BottomNavigationTab icon={ItemsIcon} />
              <BottomNavigationTab icon={PersonIcon} />
            </BottomNavigation>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <ViewPager
              style={styles.container}
              selectedIndex={selectedIndex}
              onSelect={(index) => setSelectedIndex(index)}>
              <Layout level="2" style={styles.tab}>
                <TopNavigation title="PEDIDOS DISPONIBLES" alignment="center" />
                <Divider />
                {selectedIndex === 0 && <RiderOrdersNavigator />}
              </Layout>
              <Layout level="2" style={styles.tab}>
                <TopNavigation title="MIS INFORMACIÓN" alignment="center" />
                <Divider />
                {selectedIndex === 1 && <RiderInformation />}
              </Layout>
            </ViewPager>
            <BottomNavigation
              selectedIndex={selectedIndex}
              onSelect={(index) => setSelectedIndex(index)}>
              <BottomNavigationTab icon={ListIcon} />
              <BottomNavigationTab icon={PersonIcon} />
            </BottomNavigation>
          </React.Fragment>
        ))
      ) : (
        <View style={styles.noData}>
          <View>
            <Text category="h2" style={styles.noDataText}>
              {errorMessage}
            </Text>
            <Button onPress={setCloseSession}>Cerrar sesión</Button>
          </View>
          <TouchableOpacity onPress={contactSupport}>
            <Text category="p1" style={styles.noDataSubText}>
              ¿Tienes algún problema? Comunícate con soporte con el número
              7752354163
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tab: {
    flex: 1,
  },
  noData: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    padding: 30,
  },
  noDataText: {
    textAlign: 'center',
    marginBottom: 30,
  },
  noDataSubText: {
    textAlign: 'center',
  },
});

export default HomeNavigation;
