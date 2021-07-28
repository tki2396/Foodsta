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

export type HomeStackParamList = {
  HomeScreen: undefined;
  PostsScreen: undefined;
  CommentsScreen: undefined;
};

export type ProfileStackParamList = {
  ProfileScreen: undefined;
  MyPostsScreen: undefined;
  SettingsScreen: undefined;
};

export type RecipesParamList = {
  CategoryScreen: undefined;
  RecipeScreen: {
    cuisine: string,
  };
  RecipeInformation: {
    recipeId: string,
    recipeName: string
  }
};

export type AuthParamList = {
  RegistrationScreen: undefined,
  LoginScreen: undefined;
}
