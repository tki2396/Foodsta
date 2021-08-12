import * as React from 'react'
import { useState, useEffect, useContext } from 'react';
import { StyleSheet, TouchableOpacity, ActivityIndicator, FlatList, Alert, View } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack'
import { Text } from '../../components/Themed';
import Post from '../../components/Post';
import PostModal from '../../components/PostModal'
import { AppContext } from '../../context/AppContext'
import { localGet } from '../../services/MySecureStore'
import * as SecureStore from 'expo-secure-store'

function getData(){
  return fetch("https://08arlo5gu0.execute-api.us-east-2.amazonaws.com/Prod/posts/getAll")
  .then((response) => response.json())
  .catch((error) => console.error(error))
}



const HomeScreen = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState<any>([]);
  const [username, setUsername] = useState<any>()
  useEffect(() => {
    getData().then(json => setData(json)).catch(error => console.error(error)).finally(() => setLoading(false));
    getUserName().then(res => setUsername(res))
  }, []);

  const getUserName = async () => {

    let res = await SecureStore.getItemAsync('username')
    console.error(res)
    return res;
  }

  return (

    <View style={{paddingTop:10}}>
      {isLoading ? <ActivityIndicator/> : (
        <FlatList
          refreshing={isLoading}
          onRefresh={() => getData().then(json => setData(json)).catch(err => console.log(err))}
          initialNumToRender={1}
          data={data}
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
      <View style={styles.floatingButton}>
        <PostModal username={username}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: 'white'
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

export default HomeScreen;