import {actionTypes} from '../actions/orders.action';

const initialState = {
  orderList: [],
};

const OrderReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.get_orders:
      return {
        ...state,
        orderList: action.payload,
      };

    default:
      return state;
  }
};

export default OrderReducer;
