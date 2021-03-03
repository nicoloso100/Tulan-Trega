import {useNavigation} from '@react-navigation/native';
import {Text} from '@ui-kitten/components';
import React, {useState} from 'react';
import {Controller, useForm} from 'react-hook-form';
import {useSelector} from 'react-redux';
import {CreateProduct} from '../../../Actions/APICalls/ProductsAction';
import ImageUploader from '../../../Components/ImageUploader';
import LoadingButton from '../../../Components/LoadingButton';
import NumberInput from '../../../Components/NumberInput';
import TextInput from '../../../Components/TextInput';
import {RootState} from '../../../Redux/rootReducer';
import {ShowSuccessNotification} from '../../../Utils/notifications';
import {
  ButtonContainer,
  CloseButton,
  CloseButtonIcon,
  CloseContainer,
  ImageContainer,
  ImageLabel,
  InputContainer,
  InputsContainer,
  ProductsContainer,
} from './styles';

interface ProductForm {
  name: string;
  measure: string;
  price: number;
}

const defaultProduct =
  'https://storage.googleapis.com/tulan-trega/Products/defaultProduct.png';

const AddProduct: React.FC = () => {
  const navigation = useNavigation();
  const userId = useSelector(
    (state: RootState) => state.userReducer.userLoggedId,
  );
  const [logo, setLogo] = useState<string>(defaultProduct);
  const [loading, setLoading] = useState<boolean>(false);

  const {control, handleSubmit, errors} = useForm<ProductForm>();

  const onContinue = async (data: ProductForm) => {
    if (userId) {
      setLoading(true);
      try {
        const newProduct: ICreateProduct = {
          name: data.name,
          measure: data.measure,
          price: data.price,
          store: userId,
        };
        if (logo !== defaultProduct) {
          newProduct.image = logo;
        }
        await CreateProduct(newProduct);
        ShowSuccessNotification('El producto ha sido creado exitosamente');
        navigation.navigate('ProductList');
      } catch (error) {
      } finally {
        setLoading(false);
      }
    }
  };

  const onClose = () => {
    navigation.navigate('ProductList');
  };

  return (
    <ProductsContainer>
      <CloseContainer>
        <CloseButton onPress={onClose}>
          <CloseButtonIcon fill="#8F9BB3" name="close-outline" />
          <Text category="s1">Cerrar</Text>
        </CloseButton>
      </CloseContainer>
      <InputsContainer>
        <ImageContainer>
          <ImageLabel category="p1">
            (Opcional) Presiona para ingresar una foto del producto
          </ImageLabel>
          {logo && <ImageUploader defaultImg={logo} onChangeImage={setLogo} />}
        </ImageContainer>
        <InputContainer>
          <Controller
            control={control}
            render={({onChange, value}) => (
              <TextInput
                size="large"
                placeholder="Ingresa el nombre del producto"
                value={value}
                onChange={onChange}
                error={errors.name}
                caption="Ej. Pechuga de pollo"
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
              <TextInput
                size="large"
                placeholder="Ingresa la medida del producto"
                value={value}
                onChange={onChange}
                error={errors.measure}
                caption="Ej. 1 unidad, 3 libras, 400 mililitros"
              />
            )}
            name="measure"
            rules={{
              required: 'Debe ingresar una medida',
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
                placeholder="Ingresa el precio del producto"
                value={value}
                onChange={onChange}
                error={errors.price}
                caption="Ej. $300"
              />
            )}
            name="price"
            rules={{
              required: 'Debe ingresar un precio',
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
    </ProductsContainer>
  );
};

export default AddProduct;
