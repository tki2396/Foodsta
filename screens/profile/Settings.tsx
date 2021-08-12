import React from 'react'
import { StyleSheet, TouchableOpacity, FlatList, View } from 'react-native';

import { Text } from '../../components/Themed';

const Settings = () => {

    return(
        <TouchableOpacity style={styles.container}>
            
            <View style={styles.icon}></View>
            <View style={styles.container_text}>
                <Text style={styles.title}>
                    HI
                </Text>
                <Text style={styles.description}>
                    YO
                </Text>
            </View>

        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        //backgroundColor: '#FFFFFF',
        
    },
    title: {
        fontSize: 16,
        color: '#fff',
    },
    container_text: {
        flex: 4,
        flexDirection: 'column',
        justifyContent: 'center',
    },
    description: {
        fontSize: 11,
        fontStyle: 'italic',
    },
    photo: {
        height: 80,
        width: 80,
    },
    icon: {
        flex: 1,
        justifyContent: 'center'
    },
});

export default Settings;