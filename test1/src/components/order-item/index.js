import React from 'react';
import {Button, Text, View} from 'react-native';
import { useDispatch } from 'react-redux';
import { deleteOrder } from '../../store/actions/orders.action';
import styles from './styles';

const OrderItem = ({item}) => { 
  const dispatch = useDispatch()
  const handleDeleteOrder = orderID => {
    dispatch(deleteOrder(orderID))
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Order: {item.orderID}</Text>
      </View>
      <View style={styles.details}>
        <Text>User: {item.user}</Text>
        <Text>$ {item.total}</Text>
        <Button title="RM" onPress={() => handleDeleteOrder(item.orderID)} />
      </View>
    </View>
  );
};

export default OrderItem;
