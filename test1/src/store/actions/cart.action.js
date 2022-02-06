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

export const confirmCart = () => ({
  type: actionTypes.confirm_cart,
  payload,
});
