import * as React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Account from '../Screen/Shopper/ShopperAccount';
import ModelAddress from '../Screen/ModelAddress';
import MainHomeScreen from '../Screen/Shopper/MainHomeScreen';
import OrderPage from '../Screen/Shopper/OrderPage';
import ShopperAccount from '../Screen/Shopper/ShopperAccount';
const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
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
      <Tab.Screen name="MainHomeScreen" component={MainHomeScreen} options={{
        headerShown: false,
        tabBarIcon: ({ focused }) => (
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              top: 4,
            }}>
            <Image
              source={require('../Assets/home.png')}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? '#ffffff' : 'black',
              }}
            />
            <Text
              style={{
                color: focused ? '#ffffff' : 'black',
                fontSize: 12,
              }}>
              Home
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
              source={require('../Assets/orderpage.png')}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? '#ffffff' : 'black',
              }}
            />
            <Text
              style={{
                color: focused ? '#ffffff' : 'black',
                fontSize: 12,
              }}>
              Orders
            </Text>
          </View>
        ),
      }} />
      <Tab.Screen name="ModelAddress" component={ModelAddress} options={{
        headerShown: false,
        tabBarIcon: ({ focused }) => (
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              top: 4,
            }}>
            <Image
              source={require('../Assets/location.png')}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? '#ffffff' : 'black',
              }}
            />
            <Text
              style={{
                color: focused ? '#ffffff' : 'black',
                fontSize: 12,
              }}>
              Address
            </Text>
          </View>
        ),
      }} />
      <Tab.Screen name="Account" component={ShopperAccount} options={{
        headerShown: false,
        tabBarIcon: ({ focused }) => (
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              top: 4,
            }}>
            <Image
              source={require('../Assets/account.png')}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? '#ffffff' : 'black',
              }}
            />
            <Text
              style={{
                color: focused ? '#ffffff' : 'black',
                fontSize: 12,
              }}>
              User
            </Text>
          </View>
        ),
      }}
      />
    </Tab.Navigator>
  );
}