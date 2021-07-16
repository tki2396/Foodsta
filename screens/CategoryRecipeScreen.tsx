import * as React from 'react'
import { useState, useEffect } from 'react';
import { StyleSheet, TouchableOpacity, ActivityIndicator, FlatList } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import Feed from '../components/feed';

export default function HomeScreen({cuisine}: any) {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://tq1j7avrgh.execute-api.us-east-2.amazonaws.com/default/getRecipesByCuisine', {
      method: 'POST',
      headers: {
      },
      body: JSON.stringify({
        "cuisine": cuisine
      })
    })
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <View style={styles.container}>
      {isLoading ? <ActivityIndicator/> : (
        <Feed itemList={data}/>  
      )}
    </View>
    // <View style={{ flex: 1, padding: 24 }}>
    //   {isLoading ? <ActivityIndicator/> : (
    //     <FlatList
    //       data={data}
    //       keyExtractor={({ id }, index) => id}
    //       renderItem={({ item }) => (
    //         <Text>{item.cuisine}, {item.title}</Text>
    //       )}
    //     />
    //   )}
    // </View>
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