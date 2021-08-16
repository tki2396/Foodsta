import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { ColorSchemeName } from 'react-native';

import NotFoundScreen from '../screens/NotFoundScreen';
import { RootStackParamList } from '../types';
import BottomTabNavigator from './BottomTabNavigator';
import LinkingConfiguration from './LinkingConfiguration';
import LoginScreen from '../screens/auth/LoginScreen';
import AuthStackNavigator from './AuthStackNavigator';

export default function Navigation({ colorScheme, token }: { colorScheme: ColorSchemeName, token: any }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator route={chooseRoute(token)}/>
    </NavigationContainer>
  );
}

const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator(route: any) {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={route.route}>
      <Stack.Screen name="login" component={AuthStackNavigator} />
      <Stack.Screen name="Root" component={BottomTabNavigator} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
    </Stack.Navigator>
  );
}

const chooseRoute = (token: any) => {
  let route =  token ? "Root" : "login";
  return route;
}