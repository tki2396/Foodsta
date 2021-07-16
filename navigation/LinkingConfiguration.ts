/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Login: {
        screens: {
          LoginScreen: 'loginscreen'
        },
      },
      Registration: {
        screens: {
          LoginScreen: 'registration'
        },
      },
      Root: {
        screens: {
          Home: {
            screens: {
              HomeScreen: 'home',
            },
          },
          Proflie: {
            screens: {
              ProfileScreen: 'profile',
            },
          },
        },
      },
      NotFound: '*',
    },
  },
};
