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
        if(avatarUri){
            return (
                <>
                    <Image source = {require('../../assets/images/foodsta.png')} style={[styles.image]}/>
                    <Image source={{ uri: avatarUri }} style={{height: 150, width: 150}}/>
                </>
            )
        } else {
            return (<Image source = {require('../../assets/images/foodsta.png')} style={[styles.image]}/>)
        }
    }

    return (
        <View style={styles.container}>
            <View style={{flex: 1, flexDirection:'row', alignItems: 'center'}}>
                {renderAvatar(avatarUri)}
            </View>
            <KeyboardAvoidingView
                    style={{flex: 1}} 
                    behavior={'padding'} 
                    keyboardVerticalOffset={65}>
                <View style={[styles.inputView]}>
                    <TextInput
                        style={styles.inputView}
                        placeholder="First Name"
                        placeholderTextColor="black"
                        onChangeText={(firstName) => {
                            setFirstName(firstName)
                        }}
                    />
                </View>
        
                <View style={[styles.inputView]}>
                    <TextInput
                        style={styles.inputView}
                        placeholder="Last name"
                        placeholderTextColor="black"
                        onChangeText={(lastName) => setlastName(lastName)}
                    />
                </View>
                <View style={[styles.inputView]}>
                    <TextInput
                        style={styles.inputView}
                        placeholder="Email"
                        placeholderTextColor="black"
                        onChangeText={(email) => setEmail(email)}
                    />
                </View>
                <View style={[styles.inputView]}>
                    <TextInput
                        style={styles.inputView}
                        placeholder="userName"
                        placeholderTextColor="black"
                        onChangeText={(userName) => setUserName(userName)}
                    />
                </View>
                <View style={[styles.inputView]}>
                    <TextInput
                        style={styles.inputView}
                        placeholder="Password"
                        placeholderTextColor="black"
                        secureTextEntry={true}
                        onChangeText={(password) => setPassword(password)}
                    />
                </View>
            </KeyboardAvoidingView>
            <Button title="Chose a Profile Picture!" onPress={pickImage} />
            <TouchableOpacity style={styles.loginButton}
                onPress={() => {
                    let params = setRegistrationParams();
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
        backgroundColor: '#fff',
        position: 'relative',
        opacity: 0.3, 
        textAlign: 'center',
        marginBottom: 10,
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
  