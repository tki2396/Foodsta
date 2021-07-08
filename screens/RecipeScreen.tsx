import * as React from 'react';
import { StyleSheet, Button} from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { getCustomTabsSupportingBrowsersAsync } from 'expo-web-browser';
import DrawerNavigator from '../navigation/DrawerNavigator'
import {useNavigation} from '@react-navigation/native';
import { DrawerRouteConfig, DrawerParamList } from '../types';
import Sandbox from '../components/Sandbox'

export default function RecipeScreen({props}: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Feed</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/RecipeScreen.tsx" />
      <View style={styles.container}>
        <Text style={styles.title}>Feed</Text>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        <EditScreenInfo path="/screens/RecipeScreen.tsx" />
      </View>
    </View>
  );

  // const navigation = useNavigation<DrawerRouteConfig>();
  //   return(
  //     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
  //       <Text>Recipes Screen</Text>
  //       <DrawerNavigator />
  //     </View>
  //   )
  // return(
  //     <Sandbox />
  // )
    
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
