import React, { useState, useEffect } from "react";
import { Alert, Button, Modal, StyleSheet, Text, Image, Pressable, View, TextInput, Platform} from "react-native";
import { AntDesign } from '@expo/vector-icons'
import * as ImagePicker from 'expo-image-picker';
import { ModalContext, ModalState } from '../context/AppContext';
import { v4 as uuidv4 } from 'uuid';
import * as Random from 'expo-random'

type Props = {
  username: any,
}

const PostModal = (props: Props) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [title, setTitle] = useState('');
    const [caption, setCaption] = useState('');
    const [imageUri, setImage] = useState<string | null>();
    const [imageBase64, setImageBase64] = useState<string | undefined>()
    const [postId, setPostId] = useState('')

    useEffect(() => {
      (async () => {
        if (Platform.OS !== 'web') {
          const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
          if (status !== 'granted') {
            Alert.alert('Sorry, we need camera roll permissions to make this work!');
          }
        }
      })();
    }, []);

    const getuuid = async () => uuidv4( { random: await Random.getRandomBytesAsync( 16 ) } )

    const createPost = async () => {
      let id =  getuuid().then(id => setPostId(id)).catch(error => console.error(error));

      fetch('https://08arlo5gu0.execute-api.us-east-2.amazonaws.com/Prod/posts/create', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: props.username,
          caption: caption,
          imageBase64: imageBase64,
          title: title,
          postId: postId,
          contentType: imageUri ? imageUri.substring(imageUri.indexOf('.'), imageUri.length) : 'image/jpeg'
        })
      })
      .then((response) => response.json())
      .catch((error) => console.error(error))
      .finally(() => console.log("COMPLETE "));
    }

    const pickImage = async () => {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 0.5,
        base64: true,
      });
    
      if (!result.cancelled) {
        setImage(result.uri);
        setImageBase64(result.base64);
      }
    };

    const onSubmit = async () => {
      try {  
        setTitle(title);
        createPost();
      } catch (e) {
        console.error(e)
      }
    }

    return (
      <View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <View style={{flex: 1, flexDirection:'column'}}>
                  <Button title="Start with a picture!" onPress={pickImage} />
                  {imageUri && <Image source={{ uri: imageUri }} style={{ width: 200, height: 200 }} />}
                </View>
              <View style={{flex: 2, paddingTop: 200, flexDirection: 'column', width: 200, justifyContent: 'center'}}> 
                  <TextInput
                    style={styles.titleInput}
                    onChangeText={setTitle}
                    value={title}
                    placeholder="Title"
                  />
                  <TextInput
                    style={styles.captionInput}
                    onChangeText={setCaption}
                    value={caption}
                    placeholder="Caption"
                  />
                </View>
                <View style={styles.buttonContainer}>
                  <View>
                    <Button
                      title="Post"
                      onPress={() => {
                        onSubmit();
                        setModalVisible(!modalVisible)
                      }}
                    />
                  </View>
                  <View>
                    <Button
                      title="Cancel"
                      onPress={() => {
                        setModalVisible(!modalVisible)
                        setImage(null)
                        setCaption('')
                        setTitle('')
                      }}
                    />
                  </View>
                </View>         
              </View>
            </View>
        </Modal>
        <Pressable
          style={[styles.button]}
          onPress={() => setModalVisible(true)}
        >
          <AntDesign name='plus' size={32}/>
        </Pressable>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22,
    },
    buttonContainer: {
      marginTop: 15,
      flexDirection: 'row',
      flex: 1,
      width: '100%'
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
  
  // const ModalWithContext = () => {
  //   const [modalVisible, setModalVisible] = useState(false);
    
  //   return (
  //     <ModalContext.Provider value={{setModalVisible, setModalVisible}}>
  //       <PostModal />
  //     </ModalContext.Provider>
  //   )
  // };

  export default PostModal;