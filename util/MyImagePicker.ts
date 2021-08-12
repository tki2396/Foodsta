import React, { useState, useEffect } from "react";
import { Alert, Button, Modal, StyleSheet, Text, Image, Pressable, View, TextInput, Platform} from "react-native";
import { AntDesign } from '@expo/vector-icons'
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import * as ImagePicker from 'expo-image-picker';
import { ModalContext, ModalState } from '../context/AppContext';

const MyImagePicker = () => {
}

const pickImage = async () => {
    let uri, base64Image
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.5,
      base64: true,
    });
  
    if (!result.cancelled) {
        uri = result.uri;
        base64Image = result.base64;
    }

    return { uri: uri, base64Image: base64Image }
};

export { pickImage }