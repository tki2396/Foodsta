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
  
type AuthParams = {
    username: string;
    password: string;
}

type RegistrationParams = {
    username: string,
    password: string,
    firstname: string,
    lastname: string,
    email: string
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

async function executeSignIn(params: AuthParams){
    let check;
    fetch('https://08arlo5gu0.execute-api.us-east-2.amazonaws.com/Prod/users/auth', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: params.username,
          password: params.password,
        })
      })
      .then(response => response.json())
      .then(json => console.log(json))
      .catch((error) => console.error("error ",  error))
      .finally(() => console.log("COMPLETE "));
}

export { executeSignup, executeSignIn, AuthParams, RegistrationParams } ;