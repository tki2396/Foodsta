import * as React from 'react'
import { useState, useEffect } from 'react';
import { StyleSheet, TouchableOpacity, ActivityIndicator, FlatList, Alert, View } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text } from '../../components/Themed';
import Feed from '../../components/feed';
import { stringify } from 'querystring';
import Post from '../../components/Post';
import PostModal from '../../components/PostModal'

function getData(){
  return fetch("https://08arlo5gu0.execute-api.us-east-2.amazonaws.com/Prod/posts/getAll")
  .then((response) => response.json())
  .catch((error) => console.error(error))
}

const MyPostsScreen = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    getData()
    .then(json => setData(json))
    .catch(error => console.error(error))
    .finally(() => setLoading(false))
  }, []);

  return (

    <View style={{ flex: 1, padding: 10, flexDirection: 'column'}}>
      {isLoading ? <ActivityIndicator/> : (
        <FlatList
          refreshing={isLoading}
          onRefresh={() => getData().then(json => setData(json)).catch(err => console.log(err))}
          initialNumToRender={1}
          data={data}
          keyExtractor={(item) => item.Id}
          renderItem={({ item }: any) => (
            <Post id={item.Id}
              userName={item['cognito-username']}
              avatarSrc={""}
              caption={item.caption}
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
    backgroundColor: 'white'
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

export default MyPostsScreen
