import database from '@react-native-firebase/database';

export const actionTypes = {
  add_item: 'ADD_ITEM',
  remove_item: 'REMOVE_ITEM',
  confirm_cart: 'CONFIRM_CART',
};

export const addItem = item => ({
  type: actionTypes.add_item,
  item,
});

export const removeItem = itemID => ({
  type: actionTypes.remove_item,
  payload: itemID,
});

export const confirmCart = (items, total) => {
  return async dispatch => {
    try {
      let orderID = Math.random().toString(36).slice(2);
      let order = {
        orderID,
        user: 'usuario1',
        items,
        total,
      };

      // Crea orden en firebase
      database()
        .ref(`/orders/order-${orderID}`)
        .set(order)
        .then(() => console.warn(`ORDER SENT! OrderID: ${orderID}`));

      
      dispatch({
        type: actionTypes.confirm_cart,
        confirmed: true,
      });
    } catch (err) {
      console.log(err.message);
    }
  };
};
