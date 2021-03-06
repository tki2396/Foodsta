import React, { useState, useEffect, useContext } from 'react';
import { StyleSheet, Image, View } from 'react-native';

import { Text } from '../../components/Themed';
import ProfileItem from '../../components/ProfileItem';
import { Ionicons } from '@expo/vector-icons'
import PostModal from '../../components/PostModal'
import { MaterialIcons } from '@expo/vector-icons';
import { localGet } from '../../services/MySecureStore'
import { AppContext } from '../../context/AppContext'

const  ProfileScreen = () => {
  const [profilePicture, setProfilePicture] = useState('');
  const context = useContext(AppContext);

  return (
    <View style={styles.container}>
      <View>
        <Image source={{uri: context.profilePicture}} style={styles.photo}/>
      </View>
      <View style={{flex:1}}>
        <ProfileItem title="Posts" description="My Posts" icon={<Ionicons name="home" size={32}/>}></ProfileItem>
        <ProfileItem title="Settings" description="Go to Settings" icon={<Ionicons name="ios-settings" size={32}/>}></ProfileItem>
        <ProfileItem title="Log Out" description="Log Out" icon={<Ionicons name="log-out" size={32}/>}></ProfileItem>
      </View>
      <View style={styles.floatingButton}>
        <PostModal/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileOptions: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
    marginRight:160,
    marginTop: 8,
    marginBottom: 8,
    borderRadius: 5,
    elevation: 2,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  photo: {
    height: 150,
    width: 150,
    borderRadius: 150/2,
    marginBottom: 100,
    marginTop:  100
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

export default ProfileScreen