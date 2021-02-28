import {useNavigation} from '@react-navigation/native';
import {Button, Divider, Layout, TopNavigation} from '@ui-kitten/components';
import React from 'react';
import {SafeAreaView} from 'react-native';

const SignIn: React.FC = () => {
  const navigation = useNavigation();

  const navigateSignUp = () => {
    navigation.navigate('SigUp');
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <TopNavigation title="MyApp" alignment="center" />
      <Divider />
      <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Button onPress={navigateSignUp}>OPEN SIGNUP</Button>
      </Layout>
    </SafeAreaView>
  );
};

export default SignIn;
