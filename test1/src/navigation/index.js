import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import BottomTabsNavigator from './bottom-tabs';
import AuthNavigator from './auth';
import {useSelector} from 'react-redux';

const AppNavigation = () => {
  const isAuth = useSelector(state => state.auth.userID);
  return (
    <NavigationContainer>
      {isAuth ? <BottomTabsNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default AppNavigation;
