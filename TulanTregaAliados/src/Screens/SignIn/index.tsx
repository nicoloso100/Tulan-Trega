import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
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
import AsyncStorage from '@react-native-community/async-storage';
import {SET_APP_CONTEXT, SET_USER_LOGGED_ID} from '../../Utils/constants';
import {Text} from '@ui-kitten/components';
import {SignInStore} from '../../Actions/APICalls/StoresActions';
import {clearAppContext, setUserLogged} from '../../Actions/Redux/user.action';
import {SignInRider} from '../../Actions/APICalls/RidersAction';

interface SignInForm {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.userReducer);
  const navigation = useNavigation();
  const [loading, setLoading] = useState<boolean>(false);

  const {control, handleSubmit, errors} = useForm<SignInForm>();

  const onContinue = async (data: SignInForm) => {
    setLoading(true);
    try {
      if (user.appContext === 'store') {
        const result = await SignInStore({
          email: data.email,
          password: data.password,
        });
        if (result) {
          AsyncStorage.setItem(SET_USER_LOGGED_ID, result);
          dispatch(setUserLogged(result));
        }
      } else if (user.appContext === 'rider') {
        const result = await SignInRider({
          email: data.email,
          password: data.password,
        });
        if (result) {
          AsyncStorage.setItem(SET_USER_LOGGED_ID, result);
          dispatch(setUserLogged(result));
        }
      }
    } finally {
      setLoading(false);
    }
  };

  const navigateSignUp = () => {
    navigation.navigate('SignUp');
  };

  const navigateSetContext = () => {
    AsyncStorage.removeItem(SET_APP_CONTEXT).then(() => {
      dispatch(clearAppContext());
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
                loading={loading}
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
