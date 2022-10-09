import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigation from './Navigators/AuthNavigaors';
import TabNavigation from './Navigators/TabNavigator';
import MainNavigation from './Navigators/MainNavigation';
export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  return (
    <NavigationContainer >
      {
        isLoggedIn ?
          <AuthNavigation /> :
          <MainNavigation />
      }
    </NavigationContainer>
  );
}