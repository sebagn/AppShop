import {actionTypes} from '../actions/auth.action';

const initialState = {
  token: null,
  userID: null,
};
const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
      case actionTypes.signup:
        return {
          ...state,
          token: action.payload.token,
          userID: action.payload.userID,
        };
      default:
        return state;
    }
};

export default AuthReducer;
