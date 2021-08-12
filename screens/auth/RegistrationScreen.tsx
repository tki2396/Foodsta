import { StackNavigationProp } from '@react-navigation/stack';
import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, Image, TextInput, Button, View, KeyboardAvoidingView } from 'react-native';
import { executeSignup } from '../../services/cognito/AuthService'
import { Text } from '../../components/Themed';
import { RegistrationParams } from '../../services/cognito/authtypes'
import { RootStackParamList, AuthParamList } from '../../types';
import * as ImagePicker from 'expo-image-picker';

function RegistrationScreen({
    navigation,
  }: StackNavigationProp<AuthParamList, 'RegistrationScreen'>) {

    const [firstName, setFirstName] = useState('');
    const [lastName, setlastName] = useState('');
    const [email, setEmail] = useState('');
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [avatarUri, setAvatarUri] = useState<string | undefined>('')
    const [avatarBase64, setAvatarBase64] = useState<string | undefined>()

    const setRegistrationParams = (): RegistrationParams => {
        let registrationParams: RegistrationParams = {
            username: userName,
            password: password,
            email: email,
            firstname: firstName,
            lastname: lastName,
            avatarUri: avatarUri,
            avatarBase64: avatarBase64,
            contentType: avatarUri ? avatarUri.substring(avatarUri.indexOf('.'), avatarUri.length) : 'image/jpeg'

        }
        return registrationParams;
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
            setAvatarUri(result.uri);
            setAvatarBase64(result.base64);
        } else{
            setAvatarUri('');
            setAvatarBase64('');
        }
      };
    
    const renderAvatar = (avatarUri: any) => {
        console.error(Image.getSize(avatarUri,
            (width: number, height: number) => console.error(`width ${width} height ${height}`),
            (error) => console.error(error)
        ))
        if(avatarUri !== null || avatarUri !== undefined){
            return <Image source={{ uri: avatarUri }} style={{height: 150, width: 150}}/>
        }
    }

    return (
        <View style={styles.container}>
            <View style={{flex: 1, flexDirection:'row', alignItems: 'center'}}>
                <Image source = {require('../../assets/images/food.jpg')} style={[styles.image]}/>
                {/* {renderAvatar(avatarUri)} */}
            </View>
            <KeyboardAvoidingView
                    style={{flex: 1}} 
                    behavior={'padding'} 
                    keyboardVerticalOffset={65}>
                <View style={[styles.inputView]}>
                    <TextInput
                        style={styles.inputView}
                        placeholder="First Name"
                        placeholderTextColor="#003f5c"
                        onChangeText={(firstName) => {
                            setFirstName(firstName)
                        }}
                    />
                </View>
        
                <View style={[styles.inputView]}>
                    <TextInput
                        style={styles.inputView}
                        placeholder="Last name"
                        placeholderTextColor="#003f5c"
                        onChangeText={(lastName) => setlastName(lastName)}
                    />
                </View>
                <View style={[styles.inputView]}>
                    <TextInput
                        style={styles.inputView}
                        placeholder="Email"
                        placeholderTextColor="#003f5c"
                        onChangeText={(email) => setEmail(email)}
                    />
                </View>
                <View style={[styles.inputView]}>
                    <TextInput
                        style={styles.inputView}
                        placeholder="userName"
                        placeholderTextColor="#003f5c"
                        onChangeText={(userName) => setUserName(userName)}
                    />
                </View>
                <View style={[styles.inputView]}>
                    <TextInput
                        style={styles.inputView}
                        placeholder="Password"
                        placeholderTextColor="#003f5c"
                        secureTextEntry={true}
                        onChangeText={(password) => setPassword(password)}
                    />
                </View>
            </KeyboardAvoidingView>
            <Button title="Chose a Profile Picture!" onPress={pickImage} />
            <TouchableOpacity style={styles.loginButton}
                onPress={() => {
                    let params = setRegistrationParams();
                    console.error(params)
                    executeSignup(params);
                    navigation.replace('Root')
                }}>
                <Text>SUBMIT</Text>
            </TouchableOpacity>
        </View>
    );
  }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column',
     },
    inputView: {
        borderRadius: 15,
        width: 350,
        height: 56,
        borderWidth: 1,
        alignItems: "center",
        backgroundColor: '#ffffff',
        position: 'relative',
        opacity: 0.3, 
        textAlign: 'center',
        marginBottom: 10
    },
    TextInput: {
        flex: 1,
        color: 'black'
    },
     image :{
        alignItems: "center"
    },
    forgotPasswordButton: {
        height: 30,
        marginBottom: 30,
    },
    loginButton: {
        width:"80%",
        borderRadius:25,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"#FBAF00",
        marginBottom: 25,
    }
  });

  export { RegistrationParams, RegistrationScreen}
  