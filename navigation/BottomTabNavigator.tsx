/**
 * Learn more about createBottomTabNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import TouchableOpacity from 'react-native'

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import RecipeScreen from '../screens/RecipeScreen';
import CategoryRecipeScreen from '../screens/CategoryRecipeScreen'
// import LoginScreen from '../screens/LoginScreen';
import { BottomTabParamList, TabOneParamList, TabTwoParamList, RecipesParamList, AuthParamList, DrawerRouteConfig } from '../types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (

    <BottomTab.Navigator
      initialRouteName="Home"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
      <BottomTab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }: any) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Recipes"
        component={RecipesNavigator}
        options={{
          tabBarIcon: ({ color }: any) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={ProfileNavigator}
        options={{
          tabBarIcon: ({ color }: any) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
      {/* <BottomTab.Screen
        name="Login"
        component={LoginNavigator}
        options={{
          tabBarIcon: ({ color }: any) => <TabBarIcon name="ios-code" color={color} />,
        }}
      /> */}
    </BottomTab.Navigator>

  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab

const HomeStack = createStackNavigator<TabOneParamList>();

function HomeNavigator() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerTitle: 'Home' }}
      />
    </HomeStack.Navigator>
  );
}

const ProfileStack = createStackNavigator<TabTwoParamList>();

function ProfileNavigator() {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{ headerTitle: 'LOAD PROFILE NAME' }}
      />
    </ProfileStack.Navigator>
  );
}

// const LoginStack = createStackNavigator<LoginParamList>();

// function LoginNavigator() {
//   return (
//     <LoginStack.Navigator>
//       <LoginStack.Screen
//         name="LoginScreen"
//         component={LoginScreen}
//         options={{ headerTitle: 'LOGIN' }}
//       />
//     </LoginStack.Navigator>
//   );
// }


const RecipesStack = createStackNavigator<RecipesParamList>();

function RecipesNavigator() {
  return (
    <RecipesStack.Navigator initialRouteName="CategoryScreen">
      <RecipesStack.Screen
        name="CategoryScreen"
        component={RecipeScreen}
        options={{ headerTitle: 'Recipes' }}
      />
      <RecipesStack.Screen 
        name="RecipesScreen"
        component={CategoryRecipeScreen}
      />
    </RecipesStack.Navigator>
  );
}