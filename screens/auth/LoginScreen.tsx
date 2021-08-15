import { StackNavigationProp } from '@react-navigation/stack';
import * as React from 'react';
import { StyleSheet, TouchableOpacity, Image, TextInput, View, KeyboardAvoidingView } from 'react-native';
import { executeSignIn } from '../../services/cognito/AuthService'
import { Text } from '../../components/Themed';
import { AuthParams } from '../../services/cognito/authtypes'
import { AuthParamList } from '../../types';
import { localSave, localRevoke } from '../../services/MySecureStore'

const login = async (authParams: AuthParams, navigation: any) => {
    const loginSuccess = await executeSignIn(authParams);
    console.error("LOGIN ",loginSuccess.authResponse);
    if(loginSuccess && loginSuccess.authResponse.AuthenticationResult.AccessToken){
        
        localSave("idToken", loginSuccess.authResponse.AuthenticationResult.IdToken).then(() => localSave("username", loginSuccess.authResponse.user.username)).catch(error => console.error(error));
        
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
            
              <View style={{alignItems: 'center', flex: 1, paddingBottom: 100}}>
                    <Image source = {require('../../assets/images/food.jpg')} style={[styles.image]}/>
                </View>
                <KeyboardAvoidingView
                    style={styles.inputContainer} 
                    behavior={'padding'} 
                    keyboardVerticalOffset={65}>

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
                            placeholder="Password"
                            placeholderTextColor="#003f5c"
                            secureTextEntry={true}
                            onChangeText={(password) => setPassword(password)}
                        />
                    </View>
                </KeyboardAvoidingView>
                <View style={{flex: 1, alignItems:'center'}}>
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
        </View>
    );
  }

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    inputContainer: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        margin: 10,
        padding: 10
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
        marginBottom: 10
    },
    TextInput: {
        flex: 1,
    },
     image :{
        marginTop:40,
        marginBottom: 40,
        alignItems: "center"
    },
    forgotPasswordButton: {
        height: 30,
        marginBottom: 30,
        color: '#fff'
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