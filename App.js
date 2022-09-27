import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Screen/Home';
import Account from './Screen/Account';
import ChatRoom from './Screen/ChatRoom';
import OrderPage from './Screen/OrderPage';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer >
      <Tab.Navigator  >
        <Tab.Screen name="Home" component={Home} options={{ headerShown: false, }} />
        <Tab.Screen name="Account" component={Account} options={{ headerShown: false, }} />
        <Tab.Screen name="Chat" component={ChatRoom} options={{ headerShown: false, }} />
        <Tab.Screen name="OrderPage" component={OrderPage} options={{ headerShown: false, }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}