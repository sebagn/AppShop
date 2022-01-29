import {View, FlatList, Text} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {PRODUCTS} from '../../utils/data/products';
import {ProductItem} from '../../components/ProductItem';

export const Products = ({navigation, route}) => {
  const productList = PRODUCTS.filter(prod => prod.category == route.params.name)

  const handleSelectedProduct = (item) => {
    navigation.navigate('ProductDetail', {
      product: item,
      name: item.title,
      productID: item.id,
    });
  };

  const renderProducts = ({item}) => (
    <ProductItem item={item} handleSelectedProduct={handleSelectedProduct} />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={productList}
        renderItem={renderProducts}
        keyExtractor={item => item.id}
      />
    </View>
  );
};
