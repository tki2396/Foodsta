import { MaterialIcons } from "@expo/vector-icons";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from 'react-native'
//justifyContent: flex-end, space-between, space-aroung
const styles = StyleSheet.create({
    container: {
        paddingTop:40,
        backgroundColor: '#ddd',
        //flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-end'
    },
    box1: {
        flex: 1,
        backgroundColor: 'violet',
        padding:10
    },
    box2: {
        flex: 1,
        backgroundColor: 'gold',
        padding:10
    },
    box3: {
        flex: 1,
        backgroundColor: 'green',
        padding:34
    },
    box4: {
        flex: 1,
        backgroundColor: 'blue',
        padding:44
    },
    text: {
        marginLeft: 10
    }
})

export default function Sandbox(){
    return (
        <View style={styles.container}>
            <Text style={styles.box1}>TEXT 1</Text>
            <Text style={styles.box2}> TEXT 2 </Text>
            <Text style={styles.box3}> TEXT 3 </Text>
            <Text style={[styles.box4, styles.text]}> 
            TEXT 4
            <MaterialIcons name="delete" color="white" size={32}/>
             </Text>
            
        </View>
    )
}