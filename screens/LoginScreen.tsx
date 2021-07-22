import { StackScreenProps } from '@react-navigation/stack';
import * as React from 'react';
import { StyleSheet, TouchableOpacity, Image, TextInput } from 'react-native';
import { executeSignup } from '../services/cognito/AuthService'
import { Text, View } from '../components/Themed';

import { AuthParamList } from '../types';

export default function LginScreen({
    navigation,
  }: StackScreenProps<AuthParamList, 'Login'>) {

    const [userName, setUserName] = React.useState('');
    const [password, setPassword] = React.useState('');

    // return (
    //   <View style={styles.container}>
    //     <Text style={styles.title}>This screen doesn't exist.</Text>
    //     <TouchableOpacity onPress={() => navigation.replace('Root')} style={styles.link}>
    //       <Text style={styles.linkText}>Go to home screen!</Text>
    //     </TouchableOpacity>
    //     <LoginComponent />
    //   </View>
    // );
    return (
        <View style={styles.container}>
            <Image source = {require('../assets/images/food.jpg')} style={[styles.image]}/>
            <View style={[styles.inputView]}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Username"
                    placeholderTextColor="#003f5c"
                    onChangeText={(userName) => {
                        setUserName(userName)
                        // console.warn(userName)
                    } }
                />
            </View>
    
            <View style={[styles.inputView]}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Password."
                    placeholderTextColor="#003f5c"
                    secureTextEntry={true}
                    onChangeText={(password) => setPassword(password)}
                    // onChangeText={(password) => this.setState({'password': password})}
                />
            </View>
            <TouchableOpacity onPress={() => {
                    navigation.push('Registration')
                }}>
                <Text style={styles.forgotPasswordButton}>No account? Sign up now!</Text>
            </TouchableOpacity>            
            <TouchableOpacity style={styles.loginButton}
                onPress={() => {
                    //executeSignup(userName, password);
                    navigation.replace('Root')
                }}>
                <Text>LOGIN</Text>
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
  