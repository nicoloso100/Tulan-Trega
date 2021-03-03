import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {Controller, useForm} from 'react-hook-form';
import {
  DeleteProduct,
  GetProductDetails,
  TriggerProduct,
  UpdateProduct,
} from '../../../Actions/APICalls/ProductsAction';
import CloseButton from '../../../Components/CloseButton';
import ImageUploader from '../../../Components/ImageUploader';
import LoadingButton from '../../../Components/LoadingButton';
import NumberInput from '../../../Components/NumberInput';
import TextInput from '../../../Components/TextInput';
import {ShowSuccessNotification} from '../../../Utils/notifications';
import {
  ButtonModifyCont,
  ButtonsModifyCont,
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

const ModifyProduct: React.FC = () => {
  const navigation = useNavigation();
  const route = useRoute<any>();
  const [defaultLogo, setDefaultLogo] = useState<string | undefined>();
  const [logo, setLogo] = useState<string | undefined>();
  const [active, setActive] = useState<boolean | undefined>();
  const [loading, setLoading] = useState<boolean>(false);
  const [deleteLoading, setDeleteLoading] = useState<boolean>(false);
  const [disableLoading, setDisableLoading] = useState<boolean>(false);

  const {control, handleSubmit, errors, setValue} = useForm<ProductForm>();

  useEffect(() => {
    if (route && route.params && route.params.id) {
      GetProductDetails(route.params.id).then((product) => {
        if (product) {
          setActive(product.active);
          setLogo(product.image);
          setDefaultLogo(product.image);
          setValue('name', product.name);
          setValue('measure', product.measure);
          setValue('price', product.price.toString());
        }
      });
    }
  }, [route, setValue]);

  const onContinue = async (data: ProductForm) => {
    if (route && route.params && route.params.id) {
      setLoading(true);
      try {
        const newProduct: IUpdateProduct = {
          name: data.name,
          measure: data.measure,
          price: data.price,
        };
        if (logo !== defaultLogo) {
          newProduct.image = logo;
        }
        await UpdateProduct(route.params.id, newProduct);
        ShowSuccessNotification('El producto ha sido actualizado exitosamente');
        navigation.navigate('ProductList');
      } finally {
        setLoading(false);
      }
    }
  };

  const onDeleteProduct = async () => {
    if (route && route.params && route.params.id) {
      setDeleteLoading(true);
      try {
        await DeleteProduct(route.params.id);
        ShowSuccessNotification('El producto ha sido eliminado exitosamente');
        navigation.navigate('ProductList');
      } finally {
        setDeleteLoading(false);
      }
    }
  };

  const onTriggerProduct = async (triggerActive: boolean) => {
    if (route && route.params && route.params.id) {
      setDisableLoading(true);
      try {
        await TriggerProduct(route.params.id, triggerActive);
        ShowSuccessNotification(
          `El producto ha sido ${
            triggerActive ? 'habilitado' : 'deshabilitado'
          } exitosamente`,
        );
        navigation.navigate('ProductList');
      } finally {
        setDisableLoading(false);
      }
    }
  };

  const onClose = () => {
    navigation.navigate('ProductList');
  };

  return (
    <ProductsContainer>
      <CloseButton onClose={onClose} />
      <ImageLabel category="p1">
        ¿No tienes disponible el producto? Puedes deshabilitarlo y volverlo a
        habilitar en cualquier momento
      </ImageLabel>
      {active !== undefined && (
        <ButtonModifyCont>
          {active ? (
            <LoadingButton
              status="warning"
              label="Deshabilitar"
              onPress={() => onTriggerProduct(false)}
              loading={disableLoading}
            />
          ) : (
            <LoadingButton
              status="info"
              label="Habilitar"
              onPress={() => onTriggerProduct(true)}
              loading={disableLoading}
            />
          )}
        </ButtonModifyCont>
      )}
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
        <ButtonsModifyCont>
          <ButtonModifyCont>
            <LoadingButton
              label="Guardar"
              onPress={handleSubmit(onContinue)}
              loading={loading}
            />
          </ButtonModifyCont>
          <ButtonModifyCont>
            <LoadingButton
              status="danger"
              label="Eliminar"
              onPress={onDeleteProduct}
              loading={deleteLoading}
            />
          </ButtonModifyCont>
        </ButtonsModifyCont>
      </InputsContainer>
    </ProductsContainer>
  );
};

export default ModifyProduct;
