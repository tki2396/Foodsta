import { Ionicons } from "@expo/vector-icons";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from 'react-native'

const styles = StyleSheet.create({
    header: {
        height: 100,
        paddingTop: 38,
        backgroundColor: 'coral'
    },
    title: {
        paddingTop: 20,
        textAlign: 'center',
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold'
        
    }
})

export default function Header() {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>Foodsta</Text>
        </View>
    )
}

