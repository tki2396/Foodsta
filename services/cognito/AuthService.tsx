import React, { Component, useState } from 'react';
import { StyleSheet,
    Image,
    Text,
    StatusBar,
    TextInput,
    TouchableOpacity,
    Dimensions
} from 'react-native';
import { View } from '../../components/Themed';
import { Alert } from 'react-native';
import {
    CognitoUserPool,
    CognitoUserAttribute,
  } from 'amazon-cognito-identity-js'
  
import { promisify } from 'util'

export interface Props {
}
  
interface State {
    userName: string;
    password: string;
}


async function signUp(userPool: any, userName: any, password: any) {
    const nameAttribute = new CognitoUserAttribute({
      Name: 'name',
      Value: userName,
    })
    const emaulAttribute = new CognitoUserAttribute({
        Name: 'email',
        Value: 'ijosetobi@gmail.com'
    })
  
    let attributes = [nameAttribute, emaulAttribute]
  
    const promisifiedSignUp = promisify(userPool.signUp).bind(userPool)
  
    return promisifiedSignUp(userName, password, attributes, null)
}

async function executeSignup(userName: any, password: any){

    console.warn("message " + userName + ' ' + password)
    const userPool = new CognitoUserPool({
        UserPoolId: 'us-east-2_1KSzAIFxZ',
        ClientId: '3mqjrnttm06h9cfqjgbmbdnh5k',
    })
    try {
        const res = await signUp(userPool, userName, password)
        Alert.alert("SUCCESS");
        console.log('Signup success. Result: ', res)
      } catch (e) {
        Alert.alert("FAILED");
        console.error(e.message)
      }
}



export { executeSignup } ;
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

