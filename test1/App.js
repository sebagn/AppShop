/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import AppNavigation from './src/navigation/';
import {Provider} from 'react-redux';
import store from './src/store/index';

const App = () => {
  return (
    <Provider store={store}>
      <AppNavigation />;
    </Provider>
  );
};

export default App;
