import * as React from 'react';
import { useState, useEffect } from 'react';
import { StyleSheet, Button, TouchableHighlight, TouchableOpacity } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import { getCustomTabsSupportingBrowsersAsync } from 'expo-web-browser';
import DrawerNavigator from '../../navigation/DrawerNavigator'
import {useNavigation} from '@react-navigation/native';
import Sandbox from '../../components/Sandbox'
import RecipeItem from '../../components/RecipeItem';
import layout from '../../constants/Layout'
import { FlatList } from 'react-native-gesture-handler';
import { cuisines } from '../../constants/Constants'
import { RecipesParamList } from '../../types';
import PostModal from '../../components/PostModal'

export default function CategoryScreen({
  navigation
}: StackNavigationProp<RecipesParamList, 'RecipeScreen'>) {


  return (
    <View style={styles.container}>
      {/* <View style={styles.contentContainer}> */}
        <FlatList
          numColumns={2}
          data={DATA}
          keyExtractor={item => item.id}
          renderItem={({ item }) =>
          <TouchableOpacity style={{justifyContent: 'center', alignItems: 'center'}} onPress={() => navigation.navigate('Recipes', {cuisine: item.title})}>

            <RecipeItem
              title={item.title}
              image={item.image}/>
          </TouchableOpacity>
          }
        />
        <View style={styles.floatingButton}>
          <PostModal username="tobiijose"/>
        </View>
      {/* </View> */}
      
    </View>
  );
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
  floatingButton: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    width: 70,
    position: 'absolute',
    bottom: 10,
    right: 10,
    height: 70,
    backgroundColor: '#fff',
    borderRadius: 100, 
  }
});

const DATA = [
  {
    id: 1,
    title: cuisines.AMERICAN,
    image: require('../assets/images/food/american_food.jpeg')
  },
  {
    id: 2,
    title: cuisines.CHINESE,
    image: require('../assets/images/food/chinese_food.jpeg')
  },
  {
    id: 3,
    title: cuisines.INDIAN,
    image: require('../assets/images/food/indian_food.jpeg')
  },
  {
    id: 4,
    title: cuisines.ITALIAN,
    image: require('../assets/images/food/italian_food.jpeg')
  },
  {
    id: 5,
    title: cuisines.KOREAN,
    image: require('../assets/images/food/korean_food.jpeg')
  },
  {
    id: 6,
    title: cuisines.MEDITERRANEAN,
    image: require('../assets/images/food/med_food.jpeg')
  },
  {
    id: 7,
    title: cuisines.MEXICAN,
    image: require('../assets/images/food/mexican_food.jpeg')
  },
  {
    id: 8,
    title: cuisines.THAI,
    image: require('../assets/images/food/thai_food.jpeg')
  },
]