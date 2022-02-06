import React, {useEffect} from 'react';
import {View, FlatList} from 'react-native';
import styles from './styles';
import OrderItem from '../../components/order-item';

import {useDispatch, useSelector} from 'react-redux';
import {getOrders} from '../../store/actions/orders.action';

const Orders = () => {
  const dispatch = useDispatch();
  const orderList = useSelector(state => state.orders.orderList);

  useEffect(() => {
    dispatch(getOrders());
  }, []);
  
  const renderItems = data => <OrderItem item={data.item} />;
  return (
    <View style={styles.container}>
      <View style={styles.list}>
        <FlatList
          data={orderList}
          renderItem={renderItems}
          keyExtractor={item => item.orderID}
        />
      </View>
    </View>
  );
};

export default Orders;
