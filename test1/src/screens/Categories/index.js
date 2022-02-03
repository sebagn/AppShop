import {FlatList, SafeAreaView} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {CategoryItem} from '../../components/categoryItem';
import {useSelector, useDispatch} from 'react-redux';
import {selectCategory} from '../../store/actions/category.action';

export const Categories = ({navigation}) => {
  const dispatch = useDispatch();
  const categories = useSelector(state => state.categories.categories);

  const handleSelectedCategory = item => {
    dispatch(selectCategory(item.id));
    navigation.navigate('Products', {
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
        data={categories}
        renderItem={renderCategories}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};
