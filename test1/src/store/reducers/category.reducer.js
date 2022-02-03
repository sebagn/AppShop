import {CATEGORIES} from '../../utils/data/categories';
import {actionTypes} from '../actions/category.action';

const initialState = {
  categories: CATEGORIES,
  selected: null,
};

const CategoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.select_category:
      const indexCategory = state.categories.findIndex(
        category => category.id === action.payload,
      );
      
      if (indexCategory === -1) return state;
      return {
        ...state,
        selected: state.categories[indexCategory],
      };
    default:
      return state;
  }
};

export default CategoryReducer;
