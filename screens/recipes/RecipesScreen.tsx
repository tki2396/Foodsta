import * as React from 'react'
import { useState, useEffect } from 'react';
import { StyleSheet, TouchableOpacity, ActivityIndicator, FlatList, Button, View } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

import { RecipesParamList } from '../../types';
import EditScreenInfo from '../../components/EditScreenInfo';
import { Text } from '../../components/Themed';
import RecipeFeed from '../../components/RecipeFeed';

const RecipeScreen = ({
  route
}: StackNavigationProp<RecipesParamList, 'RecipeScreen'>) => {

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState<any>([]);
  const {cuisine} = route.params;

  useEffect(() => {
    
    fetch(`https://08arlo5gu0.execute-api.us-east-2.amazonaws.com/Prod/recipes/cuisine/${cuisine}`)
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);



  return (
    <View style={styles.container}>
   
      {isLoading ? <ActivityIndicator/> : (

        <RecipeFeed itemList={data.Items}/>  
      )}
    </View>
  );
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
    button: {
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

export default RecipeScreen;