/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

export type RootStackParamList = {
  Login: undefined;
  Root: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  Home: undefined;
  Profile: undefined;
  Feed: undefined;
  Login: undefined;
};

export type TabOneParamList = {
  HomeScreen: undefined;
};

export type TabTwoParamList = {
  ProfileScreen: undefined;
};

export type RecipesParamList = {
  CategoryScreen: undefined;
  RecipeScreen: {
    cuisine: string
  };
};

export type AuthParamList = {
  RegistrationScreen: undefined,
  LoginScreen: undefined;
}

export type DrawerRouteConfig = {
  Home: undefined,
  Login: undefined,
  Recipes: undefined
}

export type DrawerParamList = {
    initialRouteName: 'Login',
    gesturesEnabled: false,
    headerMode: 'none',
    contentComponent: undefined,
    contentOptions: {
      labelStyle: {
        color: 'white'
      }
    }
}
