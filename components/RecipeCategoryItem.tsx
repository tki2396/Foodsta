import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Image, FlatList } from 'react-native';

type Props = {
    title: string,
    image: any,
};

const RecipeCategoryItem = (props: Props) => {
    return(
        <View style={styles.card}>
            <View style={styles.photoContainer}>
                <Image source={props.image} style={styles.photo}/>
            </View>
            <View style={styles.cardData}>
                <Text style={{fontWeight: 'bold', fontSize: 20, textAlign: 'center', marginTop: 15}}>{ props.title }</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card:{
        borderRadius:50,
        elevation: 3,
        backgroundColor: '#ffff',
        shadowOffset: {
            width: 1,
            height: 1
        },
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 2,
        marginHorizontal: 4,
        marginVertical: 8,
        height: 300,
        flexGrow: 1,
        flexDirection: 'column',
        width: 175,
        justifyContent: 'center',
        paddingVertical: 5,
        paddingLeft: 10,
        marginBottom: 10,

    },
    cardData:{
        flex: 1,
        justifyContent: 'center',
    },
    photo: {
        height: 100,
        width: 100,
        borderRadius: 100,
        marginTop: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    photoContainer: {
        flex: 1,
        alignItems: 'center'
    }
})

export default RecipeCategoryItem;
