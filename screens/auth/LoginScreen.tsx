import { StackNavigationProp } from '@react-navigation/stack';
import * as React from 'react';
import { StyleSheet, TouchableOpacity, Image, TextInput, View, KeyboardAvoidingView } from 'react-native';
import { executeSignIn } from '../../services/cognito/AuthService'
import { Text } from '../../components/Themed';
import { AuthParams } from '../../services/cognito/authtypes'
import { AuthParamList } from '../../types';
import { localSave } from '../../services/MySecureStore'
import { useContext } from 'react';
import { AppContext } from '../../context/AppContext';

const LoginScreen = ({
    navigation,
  }: StackNavigationProp<AuthParamList, 'LoginScreen'>) => {

    const [userName, setUserName] = React.useState('');
    const [password, setPassword] = React.useState('');
    const context = useContext(AppContext);

    // const login = (navigation: any) => {
    //     console.error("context ", context)
    //     let params = setAuthParams();
    //     //context.login(params)
    //     console.error(context)
    //     if(context.username && context.token){            
    //         navigation.replace('Root')
    //     }else {
    //         alert("FAILED LOGIN")
    //     }
    // }

    const login = async (authParams: AuthParams, navigation: any) => {
        const loginSuccess = await executeSignIn(authParams);
        if(loginSuccess && loginSuccess.authResponse.AuthenticationResult.AccessToken){
            
            localSave("idToken", loginSuccess.authResponse.AuthenticationResult.IdToken).then(() => localSave("username", loginSuccess.user.username)).catch(error => console.error(error));
            navigation.replace('Root')
        }else {
            alert("FAILED LOGIN")
        }
    }

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
                    <Image source = {require('../../assets/images/foodsta.png')} style={[styles.image]}/>
                </View>
                <KeyboardAvoidingView
                    style={styles.inputContainer} 
                    behavior={'padding'} 
                    keyboardVerticalOffset={65}>

                    <View style={[styles.inputView]}>
                        <TextInput
                            style={styles.TextInput}
                            placeholder="Username"
                            placeholderTextColor="black"
                            onChangeText={(userName) => {
                                setUserName(userName)
                            } }
                        />
                    </View>
            
                    <View style={[styles.inputView]}>
                        <TextInput
                            style={styles.TextInput}
                            placeholder="Password"
                            placeholderTextColor="black"
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
                        onPress={() => {
                            let params = setAuthParams();
                            login(params, navigation)
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
        color: 'black'
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

export default LoginScreen;