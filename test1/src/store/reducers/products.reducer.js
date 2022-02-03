import {PRODUCTS} from '../../utils/data/products';
import {actionTypes} from '../actions/products.action';

const initialState = {
  products: PRODUCTS,
  filteredProducts: [],
  selected: null,
};

const ProductsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.filter_products:
      return {
        ...state,
        filteredProducts: state.products.filter(prod => prod.category === action.payload)
      }

    case actionTypes.select_product:
      return {
        ...state,
        selected: state.products.find(prod => prod.id === action.payload)
      }
    default:
      return state;
  }
};

export default ProductsReducer;
