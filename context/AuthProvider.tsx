// import * as React from 'react';
// import {
//   getItemAsync as getToken,
//   setItemAsync as setToken,
//   deleteItemAsync as removeToken,
// } from 'expo-secure-store'
// import { Alert } from 'react-native'

// const AuthContext = React.createContext({
//   status: 'idle',
//   authToken: null,
//   signIn: () => {Alert.alert("HI"); console.error("hello")},
//   signOut: () => {},
// });

// export const useAuthorization = () => {
//     const context = React.useContext(AuthContext);
//     if (!context) {
//       throw new Error('Error');
//     }
//     return context;
//   };

// export const AuthProvider = (props: any) => {
//     const [state, dispatch] = React.useReducer(reducer, {
//       status: 'idle',
//       authToken: null,
//     });
//     React.useEffect(() => {
//       const initState = async () => {
//         try {
//           const authToken = await getToken('idToken');
//           if (authToken !== null) {
//             dispatch({type: 'SIGN_IN', token: authToken});
//           } else {
//             dispatch({type: 'SIGN_OUT'});
//           }
//         } catch (e) {
//           console.log(e);
//         }
//       };
//       initState();
//     }, [state, dispatch]);
//     const actions = React.useMemo(
//       () => ({
//         signIn: async () => {
//           dispatch({type: 'SIGN_IN', token: "token"});
//           await setToken('idToken', "token");
//         },
//         signOut: async () => {
//           dispatch({type: 'SIGN_OUT'});
//           await removeToken('idToken');
//         },
//       }),
//       [state, dispatch],
//     );
//     return (
//       <AuthContext.Provider value={{...state, ...actions}}>
//         {props.children}
//       </AuthContext.Provider>
//     );
//   };

//   const initialState = {
//       accessToken: null,
//       idtoken: null,
//       refreshToken: null,
//       expiresIn: null,
//   }
//   const reducer = (state: any, action: any) => {
//     switch (action.type) {
//       case 'SIGN_OUT':
//         return {
//           ...state,
//           status: 'signOut',
//           authToken: null,
//         };
//       case 'SIGN_IN':
//         return {
//           ...state,
//           status: 'signIn',
//           authToken: action.token,
//         };
//     }
//   };