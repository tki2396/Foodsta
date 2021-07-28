import React from 'react';
import { StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';
import { Text, View } from '../components/Themed';
import { useNavigation } from '@react-navigation/native';
import { RecipesParamList } from '../types';
import { StackNavigationProp } from '@react-navigation/stack';
import { WebView } from 'react-native-webview';

type Props = {
    title: string,
    description: string,
    image_url: string
    recipeId: string
};

type RecipeScreenNavigationProp = StackNavigationProp<RecipesParamList, 'RecipeInformation'>;

const Recipe = (props: Props) => {
    const navigation = useNavigation<RecipeScreenNavigationProp>();
    return(
        <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('Recipe Information', { recipeId: props.recipeId, recipeName: props.title })}>
            <View style={{flex: 1, flexDirection: 'column', marginBottom: 10}}>
        
                <Image style={styles.photo} source={{uri: props.image_url}}/>
                <View style={styles.container_text}>
                    <Text style={styles.title}>
                        {props.title}
                    </Text>
                    <WebView style={styles.description}
                        source={{html: props.description}}
                    />
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        borderRadius:20,
        elevation: 3,
        backgroundColor: '#FFF',
        shadowOffset: {
            width: 1,
            height: 1
        },
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 2,
        marginHorizontal: 4,
        justifyContent: 'center',
        marginBottom: 25,
        paddingBottom: 50,
        marginTop: 15
    },
    title: {
        fontSize: 16,
        color: '#000',
        fontWeight: 'bold',
        marginTop: 30,
        textAlign: 'center'
    },
    container_text: {
        flex: 1,
        flexDirection: 'column',
        marginLeft: 12,
        justifyContent: 'center',
    },
    description: {
        marginTop: 10,
        fontSize: 11,
        fontStyle: 'italic',
    },
    photo: {
        height: 200,
        width: 300,
        flex: 1,
        alignSelf:'center',
        borderRadius: 15,
        marginTop: 15
    },
    icon: {
        marginRight: 50,
        paddingLeft: 10,
        alignSelf: 'center'
    },
});

export default Recipe;