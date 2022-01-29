import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Platform } from 'react-native';
import Cart from '../../screens/Cart';
import Orders from '../../screens/orders';

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
            <Stack.Screen name="Cart" component={Cart} />
            <Stack.Screen name="Orders" component={Orders} />
        </Stack.Navigator>
    )
}

export default CartStackNavigation;
