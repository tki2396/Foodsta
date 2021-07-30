/**
 * Learn more about createBottomTabNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import TouchableOpacity from 'react-native'

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import LoginScreen from '../screens/auth/LoginScreen';
import { RegistrationScreen } from '../screens/auth/RegistrationScreen'
import { BottomTabParamList, HomeStackParamList, ProfileStackParamList, RecipesParamList, AuthParamList } from '../types';

const AuthStack = createStackNavigator<AuthParamList>();

export default function AuthStackNavigator() {
  const colorScheme = useColorScheme();

  return (

    <AuthStack.Navigator initialRouteName="Login">
      <AuthStack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerTitle: 'LOGIN' }}
      />
      <AuthStack.Screen
        name="Registration"
        component={RegistrationScreen}
        options={{ headerTitle: 'REGISTER' }}
      />
    </AuthStack.Navigator>
  );
}

