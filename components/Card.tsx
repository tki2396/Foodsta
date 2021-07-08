import React from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';

type Props = {
    title: string,
    image: string,
};
interface Props1 {

}

const styles = StyleSheet.create({
    card:{
        flex: 1,
        borderRadius:6,
        elevation: 3,
        backgroundColor: 'green',
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
    cardData:{
        flex: 1,
        //marginHorizontal: 5,
    },
    photo: {
        height: 80,
        width: 80,
        borderRadius: 80/2,
        marginLeft: 150,
        marginTop: 45,
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center'
    },
})

export const Card = (props: Props) => {
    return(
        <View style={styles.card}>
            <View style={styles.cardData}>
                <Text style={{fontWeight: 'bold', fontSize: 25, textAlign: 'center'}}>{ props.title }</Text>
                <Image source={require("../assets/images/food.jpg")} style={styles.photo}/>
            </View>
        </View>
    )
}

export default Card;
