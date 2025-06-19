import * as ImagePicker from 'expo-image-picker';

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
  
    if (!result.canceled) {
        uri = result.assets[0].uri;
        base64Image = result.assets[0].base64;
    }

    return { uri: uri, base64Image: base64Image }
};

export { pickImage }