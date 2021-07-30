import { StackNavigationProp } from '@react-navigation/stack';
import * as React from 'react';
import { StyleSheet, TouchableOpacity, Image, TextInput } from 'react-native';
import { executeSignIn } from '../../services/cognito/AuthService'
import { Text, View } from '../../components/Themed';
import { AuthParams } from '../../services/cognito/authtypes'
import { AuthParamList } from '../../types';
import { localSave } from '../../services/MySecureStore'

const login = async (authParams: AuthParams, navigation: any) => {
    const loginSuccess = await executeSignIn(authParams);
    console.error(loginSuccess);
    if(loginSuccess && loginSuccess.AuthenticationResult.AccessToken){
        
        localSave("idToken", loginSuccess.AuthenticationResult.IdToken).catch(error => console.error(error));
        navigation.replace('Root')
    }else {
        alert("FAILED LOGIN")
    }
}

export default function LoginScreen({
    navigation,
  }: StackNavigationProp<AuthParamList, 'LoginScreen'>) {

    const [userName, setUserName] = React.useState('');
    const [password, setPassword] = React.useState('');

    const setAuthParams = (): AuthParams => {
        let authParams: AuthParams = {
            username: userName,
            password: password,
        }
        return authParams;
    }

    return (
        <View style={styles.container}>
            <Image source = {require('../../assets/images/food.jpg')} style={[styles.image]}/>
            <View style={[styles.inputView]}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Username"
                    placeholderTextColor="#003f5c"
                    onChangeText={(userName) => {
                        setUserName(userName)
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
                />
            </View>
            <TouchableOpacity onPress={() => {
                    navigation.push('Registration')
                }}>
                <Text style={styles.forgotPasswordButton}>No account? Sign up now!</Text>
            </TouchableOpacity>            
            <TouchableOpacity style={styles.loginButton}
                onPress={async () => {
                    let params = setAuthParams();
                    login(params, navigation);
                }}>
                <Text>LOGIN</Text>
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