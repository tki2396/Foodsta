import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons'

const styles = StyleSheet.create({
    floatingButton: {
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.2)',
        alignItems: 'center',
        justifyContent: 'center',
        width: 70,
        position: 'absolute',
        bottom: 85,
        right: 10,
        height: 70,
        backgroundColor: 'orange',
        borderRadius: 100,
    },
})

const FloatingButton = () => {

    return(
        <View>
            <TouchableOpacity style={styles.floatingButton}>
                <AntDesign name='plus' size={32}/>
            </TouchableOpacity>
        </View>
    )
}

export default FloatingButton;