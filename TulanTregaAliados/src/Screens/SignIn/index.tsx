import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../Redux/rootReducer';
import {Container} from '../../Styles/styledComponents';
import RiderImg from '../../Assets/RiderButton.svg';
import StoreImg from '../../Assets/StoreButton.svg';
import {
  ButtonContainer,
  FormContainer,
  ImageContainer,
  InputContainer,
  InputsContainer,
  SignInContainer,
  SignUpContainer,
} from './styles';
import {ShadowStyle} from '../../Styles/shadows';
import {Controller, useForm} from 'react-hook-form';
import TextInput from '../../Components/TextInput';
import PasswordInput from '../../Components/PasswordInput';
import {emailRegex} from '../../Utils';
import LoadingButton from '../../Components/LoadingButton';
import AuthNavigation from '../../Components/AuthNavgation';
import {clearAppContext} from '../../Actions/Redux/user.action';
import AsyncStorage from '@react-native-community/async-storage';
import {SET_APP_CONTEXT} from '../../Utils/constants';
import {Text} from '@ui-kitten/components';

interface SignInForm {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const dipatch = useDispatch();
  const user = useSelector((state: RootState) => state.userReducer);
  const navigation = useNavigation();

  const {control, handleSubmit, errors} = useForm<SignInForm>();
  const onContinue = (data: SignInForm) => {
    console.log(data);
  };

  const navigateSignUp = () => {
    navigation.navigate('SignUp');
  };

  const navigateSetContext = () => {
    AsyncStorage.removeItem(SET_APP_CONTEXT).then(() => {
      dipatch(clearAppContext());
    });
  };

  return (
    <Container>
      <SignInContainer>
        <ImageContainer>
          {user.appContext === 'rider' ? (
            <RiderImg width="100%" height="100%" />
          ) : (
            <StoreImg width="100%" height="100%" />
          )}
        </ImageContainer>
        <FormContainer style={ShadowStyle}>
          <AuthNavigation text="Ingreso" onBack={navigateSetContext} />
          <InputsContainer>
            <InputContainer>
              <Controller
                control={control}
                render={({onChange, value}) => (
                  <TextInput
                    size="large"
                    placeholder="Ingresa tu Email"
                    value={value}
                    onChange={onChange}
                    error={errors.email}
                  />
                )}
                name="email"
                rules={{
                  required: 'Debe ingresar un email',
                  pattern: {
                    value: emailRegex,
                    message: 'El correo ingresado es inválido',
                  },
                }}
                defaultValue=""
              />
            </InputContainer>
            <InputContainer>
              <Controller
                control={control}
                render={({onChange, value}) => (
                  <PasswordInput
                    size="large"
                    placeholder="Ingresa la contraseña"
                    value={value}
                    onChange={onChange}
                    error={errors.password}
                  />
                )}
                name="password"
                rules={{required: 'Debe ingresar un email'}}
                defaultValue=""
              />
            </InputContainer>
            <ButtonContainer>
              <LoadingButton
                label="Continuar"
                onPress={handleSubmit(onContinue)}
              />
            </ButtonContainer>
          </InputsContainer>
          <SignUpContainer onPress={navigateSignUp}>
            <Text category="s2">¿No tienes cuenta? Regístrate</Text>
          </SignUpContainer>
        </FormContainer>
      </SignInContainer>
    </Container>
  );
};

export default SignIn;
