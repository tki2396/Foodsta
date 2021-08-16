import React, { createContext, useState, useEffect } from 'react'

import { UserState } from '../services/cognito/authtypes'
import * as AuthService from '../services/cognito/AuthService'
import * as SecureStore from 'expo-secure-store';

export const AppContext = createContext({});

export const AppContextProvider = ( { children }: any) => {
    const [userState, setUserState] = useState<any>({
        username: '',
        token: '',
        profilePicture: ''
    });


    const func = async () => {
        const uname = await SecureStore.getItemAsync("username");
        console.error("uname",uname)
        const token = await SecureStore.getItemAsync("idToken");
        return {username: uname, token: token};
    }

    useEffect(() => {

        const proPic = async () => {
            let username = await func();
            console.error("usernameu, ", username)
            fetch("https://08arlo5gu0.execute-api.us-east-2.amazonaws.com/Prod/users/profilePicture/Tlasso14")
            .then((response) => response.json())
            .then(json => setUserState({profilePicture: json.Items[0].profilePicture, username: username.username, token: username.token}))
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