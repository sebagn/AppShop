import {View, Text, Button} from 'react-native';
import React from 'react';
import {styles} from './styles'

export const Products = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Products</Text>
      
      <Button title={'Go to Product Detail'} onPress={() => navigation.navigate('ProductDetail')}></Button>
    </View>
  );
};
