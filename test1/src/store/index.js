import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import CategoryReducer from './reducers/category.reducer';
import ProductsReducer from './reducers/products.reducer';
import CartReducer from './reducers/cart.reducer';
import OrderReducer from './reducers/orders.reducer';

const RootReducer = combineReducers({
  categories: CategoryReducer,
  products: ProductsReducer,
  cart: CartReducer,
  orders: OrderReducer,
});

export default createStore(RootReducer, applyMiddleware(thunk));
