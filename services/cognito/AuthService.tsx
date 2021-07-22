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
  
import { RegistrationParams } from '../../screens/RegistrationScreen'
export interface Props {
}
  
interface State {
    userName: string;
    password: string;
}


async function executeSignup(params: RegistrationParams){

    fetch('https://08arlo5gu0.execute-api.us-east-2.amazonaws.com/Prod/users/create', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: params.username,
        password: params.password,
        firstname: params.firstname,
        lastname: params.lastname,
        email: params.email
      })
    })
    .then((response) => response.json())
    .catch((error) => console.error(error))
    .finally(() => console.log("COMPLETE "));
}

async function executeSignIn(username: any, password: any){

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

