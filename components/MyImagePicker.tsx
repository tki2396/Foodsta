import React, { useState, useEffect } from 'react';
import { Alert, Button, Image, View, Platform, TextInput, StyleSheet} from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const MyImagePicker = () => {
  const [image, setImage] = useState(null);
  const [title, setTitle] = React.useState('');
  const [caption, setCaption] = React.useState('');

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

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };
  return (
    <View style={{ flex: 1}}>
      {/* <View style={styles.imagePicker}> */}
        <Button title="Start with a picture!" onPress={() => pickImage()} />
      {/* </View> */}
      {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
    </View>
  );
}

const styles = StyleSheet.create({
  textInput: {
    //height: 50,
    alignItems: 'center',
    borderRadius: 40,
    width: 150,
    borderWidth: 1,
    backgroundColor: '#ffffff',
    opacity: 0.3

  },
  imagePicker: {
    alignItems: 'center',
    backgroundColor:'blue'
  }
})

export default MyImagePicker;
