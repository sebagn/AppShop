import {FlatList, SafeAreaView} from 'react-native';
import React from 'react';
import {styles} from './styles';
import { CATEGORIES } from '../../utils/data/categories';
import {CategoryItem} from '../../components/categoryItem';

export const Categories = ({navigation}) => {
  const handleSelectedCategory = item => {
    navigation.navigate('Products', {
      categoryID: item.title,
      name: item.title,
      color: item.color,
    });
  };
  const renderCategories = ({item}) => (
    <CategoryItem item={item} handleSelectedCategory={handleSelectedCategory} />
  );
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        style={styles.list}
        data={CATEGORIES}
        renderItem={renderCategories}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};
