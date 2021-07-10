import * as React from 'react';
import { StyleSheet, Button} from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { getCustomTabsSupportingBrowsersAsync } from 'expo-web-browser';
import DrawerNavigator from '../navigation/DrawerNavigator'
import {useNavigation} from '@react-navigation/native';
import { DrawerRouteConfig, DrawerParamList } from '../types';
import Sandbox from '../components/Sandbox'
import { RecipeItem } from '../components/RecipeItem';
import layout from '../constants/Layout'

export default function RecipeScreen({props}: any) {
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <RecipeItem title="Butter Chicken" image="image" rating={5} description="indian"/>
        <RecipeItem title="Butter Chicken" image="image" rating={5} description="indian"/>
      </View>
      <View style={styles.contentContainer}>
        <RecipeItem title="Butter Chicken" image="image" rating={5} description="indian food is the best food of all time I love butter chicken"/>
        <RecipeItem title="Butter Chicken" image="image" rating={5} description="indian"/>
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
    flexDirection: 'column',
  },
  contentContainer:{
    flexDirection: 'row',
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
