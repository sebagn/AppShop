import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Categories} from '../screens/Categories';
import {ProductDetail} from '../screens/product-detail';
import {Products} from '../screens/Products';

const Stack = createNativeStackNavigator();

export const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Categories"
        screenOptions={{
          headerStyle: {
            backgroundColor: Platform.OS === 'android' ? 'green' : 'blue',
          },
          headerTintColor: Platform.OS === 'android' ? 'white' : 'green',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
        <Stack.Screen name="Categories" component={Categories} />
        <Stack.Screen
          name="Products"
          component={Products}
          options={({route}) => ({
            title: route.params.name,
            headerStyle: {
              backgroundColor: route.params.color,
            },
          })}
        />
        <Stack.Screen
          name="ProductDetail"
          component={ProductDetail}
          options={({route}) => ({
            title: route.params.name,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
