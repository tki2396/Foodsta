import React, { useState, useEffect } from "react";
import { Alert, Button, Modal, StyleSheet, Image, Pressable, View, TextInput, Platform} from "react-native";
import { AntDesign } from '@expo/vector-icons'
import { TouchableOpacity } from "react-native-gesture-handler";
import * as ImagePicker from 'expo-image-picker';
import { StackNavigationProp } from '@react-navigation/stack';
import { ProfileStackParamList, HomeStackParamList } from "../../types";
import Comment from '../../components/Comment';
import { Avatar } from 'react-native-elements'
import { Text } from '../../components/Themed';
import { FlatList } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons'


type FoodstaComment = {
  postId: string,
  commentId: string,
  text: string,
  username: string
}

type ProfileScreenNavigationProp = StackNavigationProp<ProfileStackParamList, 'ProfileScreen'>;

const uuidv4 = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    const uuid = v.toString(16);
    return uuid;
  });
}


const CommentsScreen = ({route}: StackNavigationProp<HomeStackParamList, 'CommentsScreen'>) => {

    const [modalVisible, setModalVisible] = useState(false);
    const [comment, setComment] = useState<FoodstaComment>()
    const [commentText, setCommentText] = useState('')
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([])


    useEffect(() => {
      getComments(route.params.username, route.params.postId).then(json => setData(json['Items'])).catch(error => console.error(error))
      console.error(data)
      console.error("HELO")
    }, []);


  
    const saveComment = (comment: FoodstaComment) => {
      fetch('https://08arlo5gu0.execute-api.us-east-2.amazonaws.com/Prod/posts/addComment', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: comment.username,
          postId: comment.postId,
          text: comment.text,
          commentId: comment.commentId
        })
      })
      .then((response) => response.json())
      .catch((error) => console.error(error))
      .finally(() => console.log("COMPLETE "));
    }

    const createComment = (commentText: string): FoodstaComment => {
      return {
        postId: route.params.postId,
        username: route.params.username,
        text: commentText,
        commentId: uuidv4(),
      }
    }

    return (
      <View style={{flex: 1, backgroundColor:'white'}}>
        <View style={{flex:6}}>
          <View style={styles.comments}>
            {/* <View style={styles.comment}> */}                
                <FlatList
                        horizontal={false}
                        data={data}
                        keyExtractor={item => item.id}
                        renderItem={({ item }: any) => (
                            <Comment username={route.params.username} commentText={item.comment} />
                        )}
                    />

            {/* </View> */}
          </View>
          </View>
          <View style={styles.makeComment}>
            <Avatar rounded title='TI' avatarStyle={{backgroundColor: 'gray'}} titleStyle={{fontSize: 16,color: '#000'}} size='small'/>
            <TextInput style={{borderColor:'red', width:'78%', marginLeft: 10, backgroundColor:'gray'}}
                        placeholder='Leave a comment...'
                        textAlign='left'
                        onChangeText={(text) => setCommentText(text)}
                />
                <TouchableOpacity onPress={() => {
                    let commentToSave = createComment(commentText)
                    setComment(commentToSave);
                    saveComment(commentToSave);

                }}>
                  <Ionicons style={{paddingLeft: 6}} name="arrow-forward-circle-outline" size={28} color="black" />
                </TouchableOpacity>
              
          </View>
      </View>
    );
  };
  
  function getComments(username: string, postId: string) {
    return fetch('https://08arlo5gu0.execute-api.us-east-2.amazonaws.com/Prod/posts/getComments', {
      method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: username,
          postId: postId,
        })
    })
    .then((response) => response.json())
    .catch((error) => console.error(error))
  }


  const DATA = [
    {
        postId: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        commentText: 'this rice looks amazing!',
        username: 'tobiijose',
        commentId: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    },
    {
      postId: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      commentText: 'this rice looks amazing!',
      username: 'tobiijose',
      commentId: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    },
    {
      postId: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      commentText: 'this rice looks amazing!',
      username: 'tobiijose',
      commentId: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    },
    {
      postId: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      commentText: 'this rice looks amazing!',
      username: 'tobiijose',
      commentId: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
  },
];

  const styles = StyleSheet.create({
    comments: {
      flex: 1,
      //justifyContent: "center",
      //alignItems: "center",
      marginTop: 22,
      flexDirection: 'column',
      // backgroundColor:'red',
      
    },
    comment: {
      // flex: 1,
      justifyContent: 'center',
      //alignItems: "center",
      //marginTop: 22,
      flexDirection: 'column',
      // backgroundColor:'blue',
      width: '100%',
      height: 200
    },
    makeComment: {
      flex: 1,
      //justifyContent: "center",
      alignItems: "center",
      marginTop: 22,
      paddingLeft: 15,
      flexDirection: 'row',
      // backgroundColor: 'green'
    },
    postButton:{
      borderWidth:1,
       borderColor:'rgba(0,0,0,0.2)',
       alignItems:'center',
       borderRadius:10,
    },
    buttonContainer: {
      marginTop: 15,
      flexDirection: 'row',
      justifyContent: 'flex-end',
    },
    modalView: {
      margin: 20,
      backgroundColor: '#fff',
      borderRadius: 20,
      padding: 70,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      height: '80%',
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
      flexDirection: 'column'
    },
    button: {
      borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.2)',
        alignItems: 'center',
        justifyContent: 'center',
        width: 70,
        height: 70,
        backgroundColor: 'orange',
        borderRadius: 100,
    },
    titleInput: {
      borderRadius: 15,
      borderColor: 'black',
      borderWidth: 2,
      height: 50,
      marginBottom: 20,
    },
    captionInput: {
       borderRadius: 15,
       borderColor: 'black',
       borderWidth: 2,
       height: 50
     },
  });
  
  export default CommentsScreen;