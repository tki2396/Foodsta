import React, { Component, useState } from 'react';
import { StyleSheet, Image, Text, StatusBar, TextInput, TouchableOpacity } from 'react-native';
import { View } from '../../components/Themed';
import { Alert } from 'react-native';
import * as AuthTypes from './authtypes'
  
interface State {
    userName: string;
    password: string;
}

async function executeSignup(params: AuthTypes.RegistrationParams){

    fetch('https://08arlo5gu0.execute-api.us-east-2.amazonaws.com/Prod/users/create', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(params)
    })
    .then((response) => response.json())
    .catch((error) => console.error(error))
    .finally(() => console.log("COMPLETE "));
}

async function executeSignIn(params: AuthTypes.AuthParams) {    
    return fetch('https://08arlo5gu0.execute-api.us-east-2.amazonaws.com/Prod/users/auth', {
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
      .catch((error) => Alert.alert(error))
}

export { executeSignup, executeSignIn } ;