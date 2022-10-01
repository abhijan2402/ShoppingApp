import * as React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Screen/Home';
import Account from './Screen/Account';
import ChatRoom from './Screen/ChatRoom';
import OrderPage from './Screen/OrderPage';
import ProductDetails from './Screen/ProductDetails';
import OrderPageDetail from './Screen/OrderPageDetail';
import LogIn from './Screen/AuthScreen/LogIn';
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer >
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: '#e91e63',
          tabBarShowLabel: false,
          tabBarStyle: {
            position: 'absolute',
            backgroundColor: '#3063A0',
            borderRadius: 15,
            elevation: 15,
            bottom: 10,
            left: 20,
            right: 20,
            height: 70,
          },
        }}>
        <Tab.Screen name="Home" component={Home} options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                top: 4,
              }}>
              <Image
                source={require('../ShoppingApp/Assets/home.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#ffffff' : '#748c94',
                }}
              />
              <Text
                style={{
                  color: focused ? '#ffffff' : '#748c94',
                  fontSize: 12,
                }}>
                Home
              </Text>
            </View>
          ),
        }} />
        <Tab.Screen name="Account" component={Account} options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                top: 4,
              }}>
              <Image
                source={require('../ShoppingApp/Assets/account.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#ffffff' : '#748c94',
                }}
              />
              <Text
                style={{
                  color: focused ? '#ffffff' : '#748c94',
                  fontSize: 12,
                }}>
                User
              </Text>
            </View>
          ),
        }}
        />
        <Tab.Screen name="Chat" component={ChatRoom} options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                top: 4,
              }}>
              <Image
                source={require('../ShoppingApp/Assets/chat.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#ffffff' : '#748c94',
                }}
              />
              <Text
                style={{
                  color: focused ? '#ffffff' : '#748c94',
                  fontSize: 12,
                }}>
                Chat
              </Text>
            </View>
          ),
        }} />
        <Tab.Screen name="OrderPage" component={OrderPage} options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                top: 4,
              }}>
              <Image
                source={require('../ShoppingApp/Assets/orderpage.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#ffffff' : '#748c94',
                }}
              />
              <Text
                style={{
                  color: focused ? '#ffffff' : '#748c94',
                  fontSize: 12,
                }}>
                Orders
              </Text>
            </View>
          ),
        }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}