import React, { Component, useState } from 'react';
import { StyleSheet,
    Image,
    Text,
    StatusBar,
    TextInput,
    TouchableOpacity,
    Dimensions
} from 'react-native';
import { View } from '../components/Themed';


var { height } = Dimensions.get('window');

var box_count = 3;
var box_height = height / box_count;
export default function LoginScreen(){

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

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    return (
      <View style={styles.container}>
        <Image source = {require("../assets/images/food.jpg")} style={[styles.image]}/>
        <View style={[styles.inputView]}>
            <TextInput
                style={styles.TextInput}
                placeholder="Username"
                placeholderTextColor="#003f5c"
                onChangeText={(userName) => setUserName(userName)}
            />
        </View>
 
        <View style={[styles.inputView]}>
            <TextInput
                style={styles.TextInput}
                placeholder="Password."
                placeholderTextColor="#003f5c"
                secureTextEntry={true}
                onChangeText={(password) => setPassword(password)}
            />
        </View>
        <TouchableOpacity>
            <Text style={styles.forgotPasswordButton}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginButton} onPress={() => console.log("Pressed")}>
            <Text>LOGIN</Text>
        </TouchableOpacity>
      </View>
    );
}
