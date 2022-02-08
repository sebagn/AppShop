import {URL_AUTH} from '../../utils/data/firebase';

export const actionTypes = {
  signup: 'SIGNUP',
  signin: 'SIGNIN',
};

export const signin = (email, password) => {
  return async dispatch => {
    const response = await fetch(URL_AUTH, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
        returnSecureToken: true,
      }),
    });
    
    const data = await response.json();

    dispatch({
      type: actionTypes.signup,
      payload: {
        token: data.idToken,
        userID: data.localId,
      },
    });
  };
};
