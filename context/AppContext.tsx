import React, { createContext, useState, useEffect, useReducer } from 'react'

import * as AuthService from '../services/cognito/AuthService'
import * as SecureStore from 'expo-secure-store';
import { AuthParams } from '../services/cognito/authtypes'

export const AppContext = createContext({
    username: '',
    token: '',
    profilePicture: '',
    //invalidate: () => {},
    //login: (params: AuthParams) => {},
});

export type AuthContextType = {
    username: any
    token: any
    profilePicture: any
}

export const AppContextProvider = ( { children }: any) => {
    const [userState, setUserState] = useState<AuthContextType>({
        username: '',
        token: '',
        profilePicture: ''
    });

    // const logout = async () => {
    //     console.error("HELLO")
    //     let val = await AuthService.executeLogOut();
    //     console.error(SecureStore.getItemAsync('idToken'));

    //     setUserState(() => {
    //         const ret = { profilePicture: '', username: '', token: '' }
    //         return ret;
    //     })

    // }

    // const login = async (authParams: AuthParams) => {
    //     const loginSuccess = await AuthService.executeSignIn(authParams);
    //     console.error("LOGIN ",loginSuccess.authResponse);
    //     if(loginSuccess && loginSuccess.authResponse.AuthenticationResult.AccessToken){
            
    //         SecureStore.setItemAsync("idToken", loginSuccess.authResponse.AuthenticationResult.IdToken).then(() => SecureStore.setItemAsync("username", loginSuccess.user.username)).catch(error => console.error(error));
    //         setUserState(() => {
    //             const ret: AuthContextType = { profilePicture: '', username: loginSuccess.user.username, token: loginSuccess.authResponse.AuthenticationResult.IdToken }
    //             return ret;
    //         })
    //     }else {
    //         alert("FAILED LOGIN")
    //     }
    // }
    

    const getUserDetails = async () => {
        const uname = await SecureStore.getItemAsync("username");
        const token = await SecureStore.getItemAsync("idToken");
        return {username: uname, token: token};
    }

    useEffect(() => {

        const proPic = async () => {
            let userDetails = await getUserDetails();
            console.error("deets ",userDetails)
            fetch(`https://08arlo5gu0.execute-api.us-east-2.amazonaws.com/Prod/users/profilePicture/${userDetails.username}`)
            .then((response) => response.json())
            .then(json => setUserState(() =>  {
                const ret: AuthContextType = { profilePicture: json.Items[0].profilePicture, username: userDetails.username, token: userDetails.token };
                return ret;
            }))
            .catch((error) => console.error(error))
        }
        proPic();
       

    }, []);

    return (
        <AppContext.Provider value={userState}>
            {children}
        </AppContext.Provider>
    )

}