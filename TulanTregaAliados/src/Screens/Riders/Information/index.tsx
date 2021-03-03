import React, {useEffect, useState} from 'react';
import {Controller, useForm} from 'react-hook-form';
import {useDispatch, useSelector} from 'react-redux';
import {UpdateRider} from '../../../Actions/APICalls/RidersAction';
import {setRiderUserInfo} from '../../../Actions/Redux/rider.action';
import ImageUploader from '../../../Components/ImageUploader';
import LoadingButton from '../../../Components/LoadingButton';
import NumberInput from '../../../Components/NumberInput';
import TextInput from '../../../Components/TextInput';
import {RootState} from '../../../Redux/rootReducer';
import {
  ShowErrorNotification,
  ShowSuccessNotification,
} from '../../../Utils/notifications';
import {
  ButtonContainer,
  ImageContainer,
  ImageLabel,
  InformationContainer,
  InputContainer,
  InputsContainer,
} from './styles';

declare interface InformationForm {
  name: string;
  phone: string;
}

const defaultLogo =
  'https://storage.googleapis.com/tulan-trega/Riders/defaultRider.png';

const RiderInformation: React.FC = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.userReducer);
  const rider = useSelector((state: RootState) => state.riderReducer.riderInfo);
  const [image, setImage] = useState<string | undefined>();
  const [loading, setLoading] = useState<boolean>(false);

  const {control, handleSubmit, errors, setValue} = useForm<InformationForm>();

  useEffect(() => {
    if (rider) {
      if (rider.name) {
        setValue('name', rider.name);
      }
      if (rider.phone) {
        setValue('phone', rider.phone);
      }
      if (rider.image) {
        setImage(rider.image);
      } else {
        setImage(defaultLogo);
      }
    }
  }, [setValue, rider]);

  const onContinue = async (data: InformationForm) => {
    if (user.userLoggedId && rider) {
      setLoading(true);
      try {
        if (image && image !== defaultLogo) {
          const updateRider: IUpdateRider = {
            name: data.name,
            phone: data.phone,
          };
          console.log(image !== rider.image);
          if (image !== rider.image) {
            updateRider.image = image;
          }
          const result = await UpdateRider(user.userLoggedId, updateRider);
          if (result) {
            dispatch(setRiderUserInfo(result));
            ShowSuccessNotification('Los datos se han guardado correctamente');
          }
        } else {
          ShowErrorNotification('Debe seleccionar una foto de perfil');
        }
      } catch (error) {
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <InformationContainer keyboardShouldPersistTaps="handled">
      <InputsContainer>
        <ImageContainer>
          <ImageLabel category="p1">
            Presiona para ingresar una foto de perfil
          </ImageLabel>
          {image && (
            <ImageUploader defaultImg={image} onChangeImage={setImage} />
          )}
        </ImageContainer>
        <InputContainer>
          <Controller
            control={control}
            render={({onChange, value}) => (
              <TextInput
                size="large"
                placeholder="Ingresa tu nombre completo"
                value={value}
                onChange={onChange}
                error={errors.name}
              />
            )}
            name="name"
            rules={{
              required: 'Debe ingresar un nombre',
            }}
            defaultValue=""
          />
        </InputContainer>
        <InputContainer>
          <Controller
            control={control}
            render={({onChange, value}) => (
              <NumberInput
                size="large"
                placeholder="Ingresa un teléfono"
                value={value}
                onChange={onChange}
                error={errors.phone}
              />
            )}
            name="phone"
            rules={{
              required: 'Debe ingresar un número de teléfono',
            }}
            defaultValue=""
          />
        </InputContainer>
        <ButtonContainer>
          <LoadingButton
            label="Guardar"
            onPress={handleSubmit(onContinue)}
            loading={loading}
          />
        </ButtonContainer>
      </InputsContainer>
    </InformationContainer>
  );
};

export default RiderInformation;
