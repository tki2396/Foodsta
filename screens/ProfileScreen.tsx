import * as React from 'react';
import { StyleSheet, Image, View } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text } from '../components/Themed';
import ProfileItem from '../components/ProfileItem';
import Card from '../components/Card';
import { Ionicons } from '@expo/vector-icons'
import PostModal from '../components/PostModal'

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/images/food.jpg")} style={styles.photo}/>
      <ProfileItem title="Posts" description="My Posts" icon={<Ionicons name="home" size={32}/>}></ProfileItem>
      <ProfileItem title="Settings" description="Go to Settings" icon={<Ionicons name="home" size={32}/>}></ProfileItem>
      <ProfileItem title="Log Out" description="Log Out" icon={<Ionicons name="home" size={32}/>}></ProfileItem>
      <View style={styles.floatingButton}>
        <PostModal />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    //backgroundColor: 'blue'
  },
  profileOptions: {
    //backgroundColor: 'green',
    flex: 1,
    flexDirection: 'row',
    padding: 10,
        marginRight:160,
        marginTop: 8,
        marginBottom: 8,
        borderRadius: 5,
        // backgroundColor: '#FFF',
        elevation: 2,

  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'green'
  },
  rating: {
    height: 100,
    backgroundColor: 'blue'
  },
  photo: {
    height: 150,
    width: 150,
    borderRadius: 150/2,
    marginBottom: 90
  },
  card:{
    flex: 1,
    backgroundColor: "blue",
    borderRadius:6,
    elevation: 3,
    shadowOffset: {
        width: 1,
        height: 1
    },
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 4,
    marginVertical: 6,
    height: 1,
    flexDirection: 'row'
  },
  floatingButton: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    width: 70,
    position: 'absolute',
    bottom: 10,
    right: 10,
    height: 70,
    backgroundColor: '#fff',
    borderRadius: 100, 
  }
});