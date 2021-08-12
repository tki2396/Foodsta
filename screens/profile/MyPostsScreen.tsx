import * as React from 'react'
import { useState, useEffect } from 'react';
import { StyleSheet, TouchableOpacity, ActivityIndicator, Alert, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text } from '../../components/Themed';
import { stringify } from 'querystring';
import Post from '../../components/Post';
import PostModal from '../../components/PostModal'
import { StackNavigationProp } from '@react-navigation/stack'
import { ProfileStackParamList } from '../../types';

function getData(username: any) {
  return fetch(`https://08arlo5gu0.execute-api.us-east-2.amazonaws.com/Prod/posts/${username}`)
  .then((response) => response.json())
  .catch((error) => console.error(error))
}

const MyPostsScreen = ({route}: StackNavigationProp<ProfileStackParamList, 'MyPostsScreen'>) => {

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    getData(route.params.username)
    .then(json => setData(json))
    .catch(error => console.error(error))
    .finally(() => setLoading(false))
  }, []);
  console.error(data)
  return (

    <View style={{paddingTop:10}}>
      {isLoading ? <ActivityIndicator/> : (
        <FlatList
          refreshing={isLoading}
          onRefresh={() => getData(route.params.username).then(json => setData(json)).catch(err => console.log(err))}
          initialNumToRender={1}
          data={data.Items}
          keyExtractor={(item: any) => item.id}
          renderItem={({ item }: any) => (
            <Post
              userName={item['cognito-username']}
              avatarSrc={""}
              caption={item.caption}
              liked={true}
              image={item.image}
              title={item.title}
              postId={item.id}/>
          )}
        />
        
      )}

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
