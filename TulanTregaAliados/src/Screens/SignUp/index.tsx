import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Container} from '../../Styles/styledComponents';
import {
  ButtonContainer,
  FormContainer,
  ImageContainer,
  InputContainer,
  InputsContainer,
  SignUpContainer,
} from './styles';
import {ShadowStyle} from '../../Styles/shadows';
import {Controller, useForm} from 'react-hook-form';
import TextInput from '../../Components/TextInput';
import PasswordInput from '../../Components/PasswordInput';
import {emailRegex} from '../../Utils';
import LoadingButton from '../../Components/LoadingButton';
import AuthNavigation from '../../Components/AuthNavgation';
import SignUpImg from '../../Assets/SignUpIcon.svg';

interface SignUpForm {
  email: string;
  confirmEmail: string;
  password: string;
  confirmPassword: string;
}

const SignUp: React.FC = () => {
  const navigation = useNavigation();

  const {control, handleSubmit, errors, watch} = useForm<SignUpForm>();

  const onContinue = (data: SignUpForm) => {
    console.log(data);
  };

  const navigateSetContext = () => {
    navigation.navigate('SignIn');
  };

  return (
    <Container>
      <SignUpContainer>
        <ImageContainer>
          <SignUpImg width="100%" height="100%" />
        </ImageContainer>
        <FormContainer style={ShadowStyle}>
          <AuthNavigation text="Registro" onBack={navigateSetContext} />
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
                  <TextInput
                    size="large"
                    placeholder="Confirma tu Email"
                    value={value}
                    onChange={onChange}
                    error={errors.confirmEmail}
                  />
                )}
                name="confirmEmail"
                rules={{
                  required: 'Debe ingresar un email',
                  pattern: {
                    value: emailRegex,
                    message: 'El correo ingresado es inválido',
                  },
                  validate: (value) =>
                    value === watch('email') || 'Los correos no coinciden',
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
                rules={{required: 'Debes ingresar una contraseña'}}
                defaultValue=""
              />
            </InputContainer>
            <InputContainer>
              <Controller
                control={control}
                render={({onChange, value}) => (
                  <PasswordInput
                    size="large"
                    placeholder="Contirma tu contraseña"
                    value={value}
                    onChange={onChange}
                    error={errors.confirmPassword}
                  />
                )}
                name="confirmPassword"
                rules={{
                  required: 'Debes confirmar tu contraseña',
                  validate: (value) =>
                    value === watch('password') ||
                    'Las contraseñas no coinciden',
                }}
                defaultValue=""
              />
            </InputContainer>
            <ButtonContainer>
              <LoadingButton
                label="Crear cuenta"
                onPress={handleSubmit(onContinue)}
              />
            </ButtonContainer>
          </InputsContainer>
        </FormContainer>
      </SignUpContainer>
    </Container>
  );
};

export default SignUp;
