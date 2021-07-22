import { StackScreenProps } from '@react-navigation/stack';
import * as React from 'react';
import { StyleSheet, TouchableOpacity, Image, TextInput } from 'react-native';
import { executeSignup } from '../services/cognito/AuthService'
import { Text, View } from '../components/Themed';

import { RootStackParamList } from '../types';

export default function RegistrationScreen({
    navigation,
  }: StackScreenProps<RootStackParamList, 'Login'>) {

    const [firstName, setFirstName] = React.useState('');
    const [lastName, setlastName] = React.useState('');
    const [email, setEmail] = React.useState('');

    const [userName, setUserName] = React.useState('');
    const [password, setPassword] = React.useState('');


    return (
        <View style={styles.container}>
            <Image source = {require('../assets/images/food.jpg')} style={[styles.image]}/>
            <View style={[styles.inputView]}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="First Name"
                    placeholderTextColor="#003f5c"
                    onChangeText={(firstName) => {
                        setFirstName(firstName)
                        // console.warn(userName)
                    }}
                />
            </View>
    
            <View style={[styles.inputView]}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Last name"
                    placeholderTextColor="#003f5c"
                    secureTextEntry={true}
                    onChangeText={(lastName) => setlastName(lastName)}
                />
            </View>
            <View style={[styles.inputView]}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Email"
                    placeholderTextColor="#003f5c"
                    secureTextEntry={true}
                    onChangeText={(email) => setlastName(email)}
                />
            </View>
            <View style={[styles.inputView]}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="userName"
                    placeholderTextColor="#003f5c"
                    secureTextEntry={true}
                    onChangeText={(userName) => setlastName(userName)}
                />
            </View>
            <View style={[styles.inputView]}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Password"
                    placeholderTextColor="#003f5c"
                    secureTextEntry={true}
                    onChangeText={(password) => setlastName(password)}
                />
            </View>
            <TouchableOpacity style={styles.loginButton}
                onPress={() => {
                    executeSignup(userName, password);
                    navigation.replace('Root')
                }}>
                <Text>SUBMIT</Text>
            </TouchableOpacity>
        </View>
    );
  }

//   const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       backgroundColor: '#fff',
//       alignItems: 'center',
//       justifyContent: 'center',
//       padding: 20,
//     },
//     title: {
//       fontSize: 20,
//       fontWeight: 'bold',
//     },
//     link: {
//       marginTop: 15,
//       paddingVertical: 15,
//     },
//     linkText: {
//       fontSize: 14,
//       color: '#2e78b7',
//     },
//   });

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        //justifyContent: 'center',
        flexDirection: 'column',
    },
    inputView: {
        borderRadius: 40,
        width: 350,
        height: 56,
        borderWidth: 1,
        marginBottom: 20,
        alignItems: "center",
        backgroundColor: '#ffffff',
        position: 'relative',
        opacity: 0.3
    },
    TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 20,
        alignItems: 'center'
    },
     image :{
        marginTop:40,
        marginBottom: 40,
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
  