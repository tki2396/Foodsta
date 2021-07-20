import React, { useState } from "react";
import { Alert, Button, Modal, StyleSheet, Text, Image, Pressable, View } from "react-native";
import { AntDesign } from '@expo/vector-icons'
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
//import CameraRoll from '@react-native-community/cameraroll';
import MyImagePicker from '../components/MyImagePicker'

const PostModal = () => {
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
                <View>
                    <MyImagePicker />
                  </View>
                {/* <Pressable
                  style={[styles.closeButton]}
                  onPress={() => setModalVisible(!modalVisible)}
                >
                  <AntDesign name='close' size={32}/>
                </Pressable> */}
                <View style={styles.buttonContainer}>
                  <View style={styles.postButton}>
                  <Button
                      title="Post"
                      onPress={() => setModalVisible(!modalVisible)}
                  />
                  </View>
                  <View style={styles.postButton}>
                    <Button
                      title="Cancel"
                      onPress={() => setModalVisible(!modalVisible)}
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
      //backgroundColor: 'red'
    },
    postButton:{
      borderWidth:1,
       borderColor:'rgba(0,0,0,0.2)',
       alignItems:'center',
       borderRadius:10,
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
    },
    choosePicture: {
      flexDirection: 'column',
      justifyContent: 'flex-start',
      backgroundColor:'blue'
    },
    modalView: {
      margin: 20,
      backgroundColor: "#fff",
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
    },
    button: {
      borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.2)',
        alignItems: 'center',
        justifyContent: 'center',
        width: 70,
        position: 'absolute',
        bottom: 85,
        right: 10,
        height: 70,
        backgroundColor: 'orange',
        borderRadius: 100,
    },
    closeButton: {
      borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.2)',
        alignItems: 'center',
        justifyContent: 'center',
        width: 70,
        position: 'absolute',
        bottom: 155,
        right: 10,
        height: 70,
        backgroundColor: 'orange',
        borderRadius: 100,
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center",
      justifyContent: 'center',
      alignItems: 'center'
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center",
      height: 100,
      width: 200
    }
  });
  
  export default PostModal;