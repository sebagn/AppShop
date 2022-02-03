import {View, Text, Button} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {useSelector} from 'react-redux';

export const ProductDetail = ({navigation}) => {
  const product = useSelector(state => state.products.selected);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{product.title}</Text>
      <Text style={styles.text}>${product.price}</Text>
      <Text style={styles.text}>Stock:{product.stock}</Text>
      <Button
        title={'Home'}
        onPress={() => navigation.navigate('Categories')}></Button>
    </View>
  );
};
