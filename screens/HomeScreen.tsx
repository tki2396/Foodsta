import * as React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import Feed from '../components/feed';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Feed itemList={getData()}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  button: {
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

function getData(): any {
    return [
      {
        key: 1, title: 'Albert Einstein',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
        image_url: 'http://vivirtupasion.com/wp-content/uploads/2016/05/DANI_PERFILzoomCircle.png'
      },
      {
        key: 2,
        title: 'Isaac newton',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
        image_url: 'http://3.bp.blogspot.com/-jd5x3rFRLJc/VngrSWSHcjI/AAAAAAAAGJ4/ORPqZNDpQoY/s1600/Profile%2Bcircle.png'
      },
      {
        key: 1, title: 'Albert Einstein',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
        image_url: 'http://vivirtupasion.com/wp-content/uploads/2016/05/DANI_PERFILzoomCircle.png'
      },
      {
        key: 2,
        title: 'Isaac newton',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
        image_url: 'http://3.bp.blogspot.com/-jd5x3rFRLJc/VngrSWSHcjI/AAAAAAAAGJ4/ORPqZNDpQoY/s1600/Profile%2Bcircle.png'
      },
      {
        key: 1, title: 'Albert Einstein',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
        image_url: 'http://vivirtupasion.com/wp-content/uploads/2016/05/DANI_PERFILzoomCircle.png'
      },
      {
        key: 2,
        title: 'Isaac newton',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
        image_url: 'http://3.bp.blogspot.com/-jd5x3rFRLJc/VngrSWSHcjI/AAAAAAAAGJ4/ORPqZNDpQoY/s1600/Profile%2Bcircle.png'
      },
      {
        key: 1, title: 'Albert Einstein',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
        image_url: 'http://vivirtupasion.com/wp-content/uploads/2016/05/DANI_PERFILzoomCircle.png'
      },
      {
        key: 2,
        title: 'Isaac newton',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
        image_url: 'http://3.bp.blogspot.com/-jd5x3rFRLJc/VngrSWSHcjI/AAAAAAAAGJ4/ORPqZNDpQoY/s1600/Profile%2Bcircle.png'
      },
      {
        key: 1, title: 'Albert Einstein',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
        image_url: 'http://vivirtupasion.com/wp-content/uploads/2016/05/DANI_PERFILzoomCircle.png'
      },
      {
        key: 2,
        title: 'Isaac newton',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
        image_url: 'http://3.bp.blogspot.com/-jd5x3rFRLJc/VngrSWSHcjI/AAAAAAAAGJ4/ORPqZNDpQoY/s1600/Profile%2Bcircle.png'
      },
    ]
}
