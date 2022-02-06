import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Platform } from 'react-native';
import Orders from '../../screens/orders';
import CartScreen from '../../screens/CartScreen';

const Stack = createNativeStackNavigator();

const CartStackNavigation = () => {
    return (
        <Stack.Navigator
            initialRouteName='Cart'
            screenOptions={{
                headerStyle: {
                    backgroundColor: Platform.OS === 'android' ? 'green' : '',
                },
                headerTintColor: Platform.OS === 'android' ? 'white' : 'green',
                headerTitleStyle: {
                    fontWeight: 'bold'
                }
            }}
        >
            <Stack.Screen name="Your Cart" component={CartScreen} />
            <Stack.Screen name="Orders" component={Orders} />
        </Stack.Navigator>
    )
}

export default CartStackNavigation;
