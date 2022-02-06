import {View, Text, Button} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {useDispatch, useSelector} from 'react-redux';
import { addItem } from '../../store/actions/cart.action';

export const ProductDetail = () => {
  const dispatch = useDispatch()
  const product = useSelector(state => state.products.selected);

  const handleAddItem = () => {
    dispatch(addItem(product))
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{product.title}</Text>
      <Text style={styles.text}>${product.price}</Text>
      <Text style={styles.text}>Stock:{product.stock}</Text>
      <Button
        title={'Agregar al carrito'}
        onPress={handleAddItem}></Button>
    </View>
  );
};
