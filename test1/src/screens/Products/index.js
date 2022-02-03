import {View, FlatList} from 'react-native';
import React, {useEffect} from 'react';
import {styles} from './styles';
import {ProductItem} from '../../components/ProductItem';
import {
  selectProduct,
  filterProducts,
} from '../../store/actions/products.action';
import {useDispatch, useSelector} from 'react-redux';

export const Products = ({navigation}) => {
  const dispatch = useDispatch();
  const category = useSelector(state => state.categories.selected);
  const categoryProducts = useSelector(
    state => state.products.filteredProducts,
  );

  useEffect(() => {
    dispatch(filterProducts(category.title));
    console.log(category);
    console.log(categoryProducts);
  }, []);

  const handleSelectedProduct = item => {
    dispatch(selectProduct(item.id));
    navigation.navigate('ProductDetail', {
      name: item.title,
    });
  };

  const renderProducts = ({item}) => (
    <ProductItem item={item} handleSelectedProduct={handleSelectedProduct} />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={categoryProducts}
        renderItem={renderProducts}
        keyExtractor={item => item.id}
      />
    </View>
  );
};
