import {View, Text, Button} from 'react-native';
import React from 'react';
import {styles} from './styles'

export const ProductDetail = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Product Details</Text>
      
      <Button title={'Home'} onPress={() => navigation.navigate('Categories')}></Button>
    </View>
  );
};
