import React from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';

type Props = {
    title: string,
    image: string,
    rating: number,
    description: string,
};
interface Props1 {

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
        marginVertical: 6,
        height: 300,
        flexDirection: 'row',
        width: 175,
        justifyContent: 'center',
        paddingVertical: 5,
        paddingLeft: 10,
        // marginBottom: 10,

    },
    cardData:{
        //flex: 1,
        //marginHorizontal: 5,
        //alignContent: 'center',
        justifyContent: 'center',
    },
    photo: {
        height: 80,
        width: 80,
        borderRadius: 80/2,
        //marginLeft: 150,
        //marginTop: 45,
        alignSelf: 'center',
    },
})

export const RecipeItem = (props: Props) => {
    return(
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <View style={styles.card}>
                <View style={styles.cardData}>
                    <Image source={require("../assets/images/food.jpg")} style={styles.photo}/>
                    <Text style={{fontWeight: 'bold', fontSize: 25, textAlign: 'center'}}>{ props.title }</Text>
                    <Text style={{fontWeight: 'normal', fontStyle:'italic', fontSize: 12, textAlign: 'center'}}>{ props.description }</Text>
                </View>
            </View>
        </View>
    )
}

export default RecipeItem;
