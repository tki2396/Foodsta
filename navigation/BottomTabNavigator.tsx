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
import HomeScreen from '../screens/home/HomeScreen';
import ProfileScreen from '../screens/profile/ProfileScreen';
import CategoryScreen from '../screens/recipes/CategoryScreen';
import RecipesScreen from '../screens/recipes/RecipesScreen'
import MyPostsScreen from '../screens/profile/MyPostsScreen';
import CommentsScreen from '../screens/home/CommentsScreen'
import { BottomTabParamList, HomeStackParamList, ProfileStackParamList, RecipesParamList, AuthParamList } from '../types';
import RecipeInformation from '../screens/recipes/RecipeInformation';
import LoginScreen from '../screens/auth/LoginScreen';
import AuthStackNavigator from './AuthStackNavigator';
import { RegistrationScreen } from '../screens/auth/RegistrationScreen';
import SettingsScreen from '../screens/profile/Settings'

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
          tabBarIcon: ({ color }: any) => <TabBarIcon name="home-outline" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Recipes"
        component={RecipesNavigator}
        options={{
          tabBarIcon: ({ color }: any) => <TabBarIcon name="fast-food-outline" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={ProfileNavigator}
        options={{
          tabBarIcon: ({ color }: any) => <TabBarIcon name="md-person-outline" color={color} />,
        }}
      />
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

const HomeStack = createStackNavigator<HomeStackParamList>();

function HomeNavigator() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerTitle: 'Home' }}
      />
      <HomeStack.Screen
        name="CommentsScreen"
        component={CommentsScreen}
        options={{ headerTitle: 'Comments' }}
      />
      <ProfileStack.Screen
        name="MyPostsScreen"
        component={MyPostsScreen}
        options={{ headerTitle: `tobiijose's posts` }}
      />
    </HomeStack.Navigator>
  );
}

const ProfileStack = createStackNavigator<ProfileStackParamList>();

function ProfileNavigator() {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{ headerTitle: 'Profile' }}
      />
      <ProfileStack.Screen
        name="MyPostsScreen"
        component={MyPostsScreen}
        options={{ headerTitle: `tobiijose's posts` }}
      />
      <ProfileStack.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        options={{ headerTitle: `Settings` }}
      />
      <ProfileStack.Screen
        name="AuthStackNavigator"
        component={AuthStackNavigator}
        options={{ headerTitle: `Login` }}
      />
    </ProfileStack.Navigator>
  );
}

const RecipesStack = createStackNavigator<RecipesParamList>();

function RecipesNavigator() {
  return (
    <RecipesStack.Navigator initialRouteName="CategoryScreen">
      <RecipesStack.Screen
        name="CategoryScreen"
        component={CategoryScreen}
        options={{ headerTitle: 'Categories' }}
      />
      <RecipesStack.Screen 
        name="Recipes"
        component={RecipesScreen}
        options={({ route }: any) => ({ title: route.params.cuisine })}
      />
      <RecipesStack.Screen 
        name="Recipe Information"
        component={RecipeInformation}
        options={({ route }: any) => ({ title: route.params.recipeName })}
      />
    </RecipesStack.Navigator>
  );
}