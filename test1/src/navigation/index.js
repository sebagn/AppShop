import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import BottomTabsNavigator from './bottom-tabs';
import AuthNavigator from './auth';

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <AuthNavigator />
      {/* <BottomTabsNavigator /> */}
    </NavigationContainer>
  );
};

export default AppNavigation;
