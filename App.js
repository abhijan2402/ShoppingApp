import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigation from './Navigators/AuthNavigaors';
import TabNavigation from './Navigators/TabNavigator';
export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true)
  return (
    <NavigationContainer >
      {
        isLoggedIn ?
          <AuthNavigation /> :
          <TabNavigation />
      }
    </NavigationContainer>
  );
}