import {View, Text, Button} from 'react-native';
import React from 'react';
import {styles} from './styles'

export const Categories = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>
        Categories
      </Text>
      <Button title={'Go to Products'} onPress={() => navigation.navigate('Products')} />
    </View>
  );
};
