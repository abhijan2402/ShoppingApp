import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LogIn from '../Screen/AuthScreen/LogIn';
import SignUp from '../Screen/AuthScreen/SignUp'
import Profile from '../Screen/AuthScreen/Profile';
import Welcomepage from '../Screen/Welcomepage';
const Stack = createNativeStackNavigator();

function AuthNavigation() {
  return (
      <Stack.Navigator screenOptions={{
        headerShown:false
      }}>
        <Stack.Screen name="Welcomepage" component={Welcomepage} />
        <Stack.Screen name="Login" component={LogIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="CompleteProfile" component={Profile} />
      </Stack.Navigator>
  );
}
export default AuthNavigation;