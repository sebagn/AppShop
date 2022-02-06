import {actionTypes} from '../actions/cart.action';

const initialState = {
  items: [],
  total: 0,
};

const sumTotal = list =>
  list.reduce((acc, item) => acc + item.price * item.quantity, 0);

const CartReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.add_item:
      let updatedCart = [];
      if (state.items.find(item => item.id === action.item.id)) {
        updatedCart = state.items.map(item => {
          if (item.id === action.item.id) {
            item.quantity++;
          }
          return item;
        });
      } else {
        const item = {...action.item, quantity: 1};
        updatedCart = [...state.items, item];
      }
      return {
        ...state,
        items: updatedCart,
        total: sumTotal(updatedCart),
      };

    case actionTypes.remove_item:
      let filteredCart = state.items.filter(item => item.id !== action.payload)
      return {
        ...state,
        items: filteredCart,
        total: sumTotal(filteredCart),
      };

    case actionTypes.confirm_cart:

    default:
      return state;
  }
};

export default CartReducer;
