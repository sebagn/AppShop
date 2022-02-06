import database from '@react-native-firebase/database';

export const actionTypes = {
  get_orders: 'GET_ORDERS',
  delete_order: 'DELETE_ORDER',
};

export const getOrders = () => {
  return async dispatch => {
    try {
      let orders = [];

      database()
        .ref('orders')
        .once('value')
        .then(snapshot => {
          if (!!snapshot.val()) {
            orders = Object.values(snapshot.val());
          }

          dispatch({
            type: actionTypes.get_orders,
            payload: orders,
          });
        });
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const deleteOrder = orderID => {
  return async dispatch => {
    try {
      database()
        .ref(`orders/order-${orderID}`)
        .set(null)
        .then(console.warn(`succesfully eliminated: order-${orderID}`));
      dispatch(getOrders());
    } catch (error) {
      console.log(error.message);
    }
  };
};
