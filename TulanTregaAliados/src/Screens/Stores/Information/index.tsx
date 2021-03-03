import React, {useEffect, useState} from 'react';
import {Controller, useForm} from 'react-hook-form';
import {useDispatch, useSelector} from 'react-redux';
import {UpdateStore} from '../../../Actions/APICalls/StoresActions';
import {setStoreUserInfo} from '../../../Actions/Redux/store.action';
import ImageUploader from '../../../Components/ImageUploader';
import LoadingButton from '../../../Components/LoadingButton';
import Map from '../../../Components/Map';
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
  location: string;
  phone?: string;
}

const defaultLogo =
  'https://storage.googleapis.com/tulan-trega/Stores/defaultStore.png';

const StoreInformation: React.FC = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.userReducer);
  const store = useSelector((state: RootState) => state.storeReducer.storeInfo);
  const [logo, setLogo] = useState<string | undefined>();
  const [location, setocation] = useState<ILocation | undefined>();
  const [loading, setLoading] = useState<boolean>(false);

  const {control, handleSubmit, errors, setValue} = useForm<InformationForm>();

  useEffect(() => {
    if (store) {
      if (store.name) {
        setValue('name', store.name);
      }
      if (store.phone) {
        setValue('phone', store.phone);
      }
      if (store.location) {
        setocation(store.location);
      }
      if (store.logo) {
        setLogo(store.logo);
      } else {
        setLogo(defaultLogo);
      }
    }
  }, [setValue, store]);

  const onContinue = async (data: InformationForm) => {
    if (user.userLoggedId) {
      setLoading(true);
      try {
        if (location) {
          const updateStore: IUpdateStore = {
            name: data.name,
            location: location,
          };
          if (store && logo !== store.logo && logo !== defaultLogo) {
            updateStore.logo = logo;
          }
          if (data.phone) {
            updateStore.phone = data.phone;
          }
          const result = await UpdateStore(user.userLoggedId, updateStore);
          if (result) {
            dispatch(setStoreUserInfo(result));
            ShowSuccessNotification('Los datos se han guardado correctamente');
          }
        } else {
          ShowErrorNotification('Debe seleccionar una ubicación');
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
            (Opcional) Presiona para ingresar el logo o una foto del negocio
          </ImageLabel>
          {logo && <ImageUploader defaultImg={logo} onChangeImage={setLogo} />}
        </ImageContainer>
        <InputContainer>
          <Controller
            control={control}
            render={({onChange, value}) => (
              <TextInput
                size="large"
                placeholder="Ingresa el nombre del negocio"
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
                placeholder="(Opcional) Ingresa un teléfono"
                value={value}
                onChange={onChange}
                error={errors.phone}
              />
            )}
            name="phone"
            defaultValue=""
          />
        </InputContainer>
        <InputContainer>
          <ImageLabel category="p1">Ingrese su ubicación</ImageLabel>
          <Map defaultLocation={location} onChangeLocation={setocation} />
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

export default StoreInformation;
