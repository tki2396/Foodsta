import { DrawerContentScrollView, DrawerItem, DrawerItemList, createDrawerNavigator } from '@react-navigation/drawer';
import * as React from 'react';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import { useWindowDimensions } from 'react-native';
import { DrawerRouteConfig, DrawerParamList } from '../types'


// function HomeScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Button
//         onPress={() => navigation.navigate('Notifications')}
//         title="Go to notifications"
//       />
//     </View>
//   );
// }

// function NotificationsScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Button onPress={() => navigation.goBack()} title="Go back home" />
//     </View>
//   );
// }
function CustomDrawerContent(props: any) {
    return (
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem
          label="Close drawer"
          onPress={() => props.navigation.closeDrawer()}
        />
        <DrawerItem
          label="Toggle drawer"
          onPress={() => props.navigation.toggleDrawer()}
        />
      </DrawerContentScrollView>
    );
  }
const Drawer = createDrawerNavigator<DrawerRouteConfig>();

export default function DrawerNavigator() {
    const dimensions = useWindowDimensions();
    

    return (
        <Drawer.Navigator gestureEnabled={true} initialRouteName="Recipes" drawerContent={(props: any) => <CustomDrawerContent {...props}/>} 
            drawerType={dimensions.width >= 768 ? 'permanent' : 'front'} drawerIcon>
            <Drawer.Screen name="Home" component={HomeScreen} />
            <Drawer.Screen name="Login" component={LoginScreen}/>
        </Drawer.Navigator>
  );
}