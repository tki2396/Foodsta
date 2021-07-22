import * as React from 'react'
import { useState, useEffect } from 'react';
import { StyleSheet, View, TouchableOpacity, ActivityIndicator, FlatList, Alert} from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text } from '../components/Themed';
import Feed from '../components/feed';
import { stringify } from 'querystring';
import Post from '../components/Post';
import PostModal from '../components/PostModal'

export default function HomeScreen() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://08arlo5gu0.execute-api.us-east-2.amazonaws.com/Prod/recipes/getAll")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);


  return (
    // <View style={styles.container}>
    //   {isLoading ? <ActivityIndicator/> : (
    //     <Feed itemList={data}/>  
    //   )}
    // </View>
    <View style={{ flex: 1, padding: 15, flexDirection: 'column'}}>
      {isLoading ? <ActivityIndicator/> : (
        <FlatList
          initialNumToRender={10}
          data={data}
          keyExtractor={(item) => item.recipeId}
          renderItem={({ item }) => (
            <Post id={1}
              userName={"TOBI"}
              avatarSrc={""}
              caption={item.recipeId}
              liked={true}
              image={item.image}
              title={item.title}/>
          )}
        />
        
      )}
      <View style={styles.floatingButton}>
        <PostModal username={'tobiijose'}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //alignItems: 'center',
    //justifyContent: 'center',
    backgroundColor: 'white'
  },
  container1: {
    backgroundColor: 'red'
    //flex: 1,
    //flexDirection: 'row',
    //padding: 10,
    // marginLeft:16,
    // marginRight:16,
    // marginTop: 8,
    // marginBottom: 8,
    // borderRadius: 5,
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

function getData(): any {
    return [
      {
        key: 1, title: 'Albert Einstein',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
        image_url: require('../assets/images/butter_chicken.jpeg')
      },
      {
        key: 2,
        title: 'Isaac newton',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
        image_url: require('../assets/images/butter_chicken.jpeg')
      },
      {
        key: 1, title: 'Albert Einstein',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
        image_url: require('../assets/images/butter_chicken.jpeg')
      },
      {
        key: 2,
        title: 'Isaac newton',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
        image_url: require('../assets/images/butter_chicken.jpeg')
      },
      {
        key: 1, title: 'Albert Einstein',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
        image_url: require('../assets/images/butter_chicken.jpeg')
      },
      {
        key: 2,
        title: 'Isaac newton',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
        image_url: require('../assets/images/butter_chicken.jpeg')
      },
      {
        key: 1, title: 'Albert Einstein',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
        image_url: require('../assets/images/butter_chicken.jpeg')
      },
      {
        key: 2,
        title: 'Isaac newton',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
        image_url: require('../assets/images/butter_chicken.jpeg')
      },
      {
        key: 1, title: 'Albert Einstein',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
        image_url: require('../assets/images/butter_chicken.jpeg')
      },
      {
        key: 2,
        title: 'Isaac newton',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
        image_url: require('../assets/images/butter_chicken.jpeg')
      },
    ]
}
