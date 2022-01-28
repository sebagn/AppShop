import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './styles';

export const ProductItem = ({item, handleSelectedProduct}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => handleSelectedProduct(item)}>
      <Text style={styles.text}>{item.title}</Text>
    </TouchableOpacity>
  );
};
