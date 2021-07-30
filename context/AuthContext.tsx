// import React, { createContext, useReducer } from 'react';
// import { useDispatch } from 'react-redux'

// const authReducer = (state: any, action: any) => {
//     switch (action.type) {
//       case 'signout':
//         return {idToken: null, username: '', accessToken: null};
//       case 'login':
//       case 'register':
//         return {
//           idToken: action.payload.token,
//           username: action.payload.username,
//         };
//       default:
//         return state;
//     }
// };

// const signup = ({dispatch}: any) => {
//     return ({username, password}: any) => {
//         console.log('Signup');
//     };
// };

// const signin = () => {
//     const dispatch = useDispatch();

//     return ({email, password}: any) => {
//         // Do some API Request here
//         console.log('Signin');
//         dispatch({
//             type: 'signin',
//             payload: {
//                 token: 'some access token here',
//                 email,
//             },
//       });
//     };
// };

// const signout = () => {
//     const dispatch = useDispatch();

//     return () => {
//         dispatch({type: 'signout'});
//     };
//   };

// const Context = React.createContext({});
// const defaultValue = {};

// const Provider = ({ children }: any) => {
//     const [ state, dispatch ] = useReducer(authReducer, defaultValue);

//     const actions = {signin, signup, signout};
//     const boundActions: any = {}
//     for (let key in actions){
//         boundActions[key] = actions[key](dispatch);
//     }

//     return(
//         <Context.Provider value={{ state, ...boundActions }}>
//             { children }
//         </Context.Provider>
//     )
// };

// export const AuthContext = {Context: Context, Provider: Provider}