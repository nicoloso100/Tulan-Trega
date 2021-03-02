import React from 'react';
import {
  ProductCardCont,
  ProductCardImage,
  ProductCardText,
  ProductCardTexts,
} from './styles';

interface ProductCardProps {
  product: IProductItem;
}

const ProductCard: React.FC<ProductCardProps> = ({product}) => {
  return (
    <ProductCardCont>
      <ProductCardImage source={{uri: product.image}} />
      <ProductCardTexts>
        <ProductCardText numberOfLines={2} lineBreakMode="tail" category="s1">
          {product.name}
        </ProductCardText>
        <ProductCardText
          numberOfLines={1}
          lineBreakMode="tail"
          appearance="hint"
          category="c1">
          {product.measure}
        </ProductCardText>
      </ProductCardTexts>
    </ProductCardCont>
  );
};

export default ProductCard;
