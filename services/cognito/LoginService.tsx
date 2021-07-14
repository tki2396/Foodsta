import {
    CognitoUserPool,
    CognitoUserAttribute, CognitoUser, AuthenticationDetails
  } from 'amazon-cognito-identity-js'
  
import { promisify } from 'util'
import { Alert } from 'react-native';

var authenticationData = {
    Username : 'username',
    Password : 'password',
};
var authenticationDetails = new AuthenticationDetails(authenticationData);
var poolData = {
    UserPoolId : '...', // Your user pool id here
    ClientId : '...' // Your client id here
};
var userPool = new CognitoUserPool(poolData);
var userData = {
    Username : 'username',
    Pool : userPool
};
var cognitoUser = new CognitoUser(userData);
cognitoUser.authenticateUser(authenticationDetails, {
    onSuccess: function (result) {
        var accessToken = result.getAccessToken().getJwtToken();

        /* Use the idToken for Logins Map when Federating User Pools with identity pools or when passing through an Authorization Header to an API Gateway Authorizer */
        var idToken = result.getIdToken();
    },


    onFailure: function(err) {
        Alert.alert(err);
    },

});  
//   ;(async () => {
//     const form = document.querySelector('.form')
//     const email = document.querySelector('.email')
//     const password = document.querySelector('.password')
  
//     const userPool = new CognitoUserPool({
//       UserPoolId: 'us-east-1_ZPwVcZizN',
//       ClientId: 'i5i3opr4jbrpucp25r0sn09qp',
//     })
  
//     form.addEventListener('submit', async (event) => {
//       event.preventDefault()
  
//       try {
//         const res = await signUp(userPool, email.value, password.value)
//         console.log('Signup success. Result: ', res)
//       } catch (e) {
//         console.log('Signup fail. Error: ', e)
//       }
//     })
//   })()
  
//   async function signUp(userPool, email, password) {
//     const emailAttribute = new CognitoUserAttribute({
//       Name: 'email',
//       Value: email,
//     })
  
//     let attributes = [emailAttribute]
  
//     const promisifiedSignUp = promisify(userPool.signUp).bind(userPool)
  
//     return promisifiedSignUp(email, password, attributes, null)
//   }