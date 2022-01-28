import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './styles';

export const CategoryItem = ({item, handleSelectedCategory}) => {
  return (
    <TouchableOpacity
      style={[styles.container, {backgroundColor: item.color}]}
      onPress={() => handleSelectedCategory(item)}>
      <Text style={styles.text}>{item.title}</Text>
    </TouchableOpacity>
  );
};
