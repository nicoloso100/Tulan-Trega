import {useNavigation} from '@react-navigation/native';
import {Button, Icon} from '@ui-kitten/components';
import React, {useState} from 'react';
import {ScrollView, TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';
import {GetAllProducts} from '../../../Actions/APICalls/ProductsAction';
import ProductCard from '../../../Components/ProductCard';
import {RootState} from '../../../Redux/rootReducer';
import {ShowErrorNotification} from '../../../Utils/notifications';
import {ProductsBtnCont, ProductsListContainer} from './styles';

const PlusIcon = (props: any) => <Icon {...props} name="plus" />;

const ProductList: React.FC = () => {
  const navigation = useNavigation();
  const userId = useSelector(
    (state: RootState) => state.userReducer.userLoggedId,
  );
  const info = useSelector((state: RootState) => state.storeReducer.storeInfo);
  const [products, setProducts] = useState<IProductItem[]>([]);

  const onCreateProduct = () => {
    if (info && info.name === undefined && info.location === undefined) {
      navigation.navigate('AddProduct');
    } else {
      ShowErrorNotification(
        'Primero debe completar la información de su perfil',
      );
    }
  };

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      if (userId) {
        GetAllProducts(userId).then((productsList) => {
          if (productsList) {
            setProducts(productsList);
          }
        });
      }
    });

    return unsubscribe;
  }, [navigation, userId]);

  const onModifyProduct = (id: string) => {
    navigation.navigate('ModifyProduct', {id: id});
  };

  return (
    <ScrollView>
      <ProductsBtnCont>
        <Button
          onPress={onCreateProduct}
          accessoryLeft={PlusIcon}
          size="large"
          appearance="outline">
          CREAR PRODUCTO
        </Button>
      </ProductsBtnCont>
      <ProductsListContainer>
        {products.map((product) => {
          return (
            <TouchableOpacity
              key={product._id}
              onPress={() => onModifyProduct(product._id)}>
              <ProductCard product={product} />
            </TouchableOpacity>
          );
        })}
      </ProductsListContainer>
    </ScrollView>
  );
};

export default ProductList;
