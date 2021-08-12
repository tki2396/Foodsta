import React, { useState, useEffect } from "react";
import { Alert, Button, Modal, StyleSheet, Text, Image, Pressable, View, TextInput, Platform} from "react-native";
import { AntDesign } from '@expo/vector-icons'
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import * as ImagePicker from 'expo-image-picker';

type Props = {
  username: string,
}

const LogBackIn = (props: Props) => {
    const [modalVisible, setModalVisible] = useState(false);

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
                <View style={{flex: 1}}>
                </View>
              <View style={{flex: 1, flexDirection: 'column', width: 200, justifyContent: 'center'}}> 
                </View>
                <View style={styles.buttonContainer}>
                  <View style={styles.postButton}>
                  </View>
                  <View style={styles.postButton}>
                  </View>
                </View>         
              </View>
            </View>
        </Modal>
        <Pressable>
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
  
  export default PostModal;