import React from 'react';
import { StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';
import { Text, View } from '../components/Themed';
import { useNavigation } from '@react-navigation/native';
import { RecipesParamList } from '../types';
import { StackNavigationProp } from '@react-navigation/stack';
import { WebView } from 'react-native-webview';
import { RenderHTMLSource, Document } from 'react-native-render-html';
import { globalStyles } from '../styles/GlobalStyles'

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
        <TouchableOpacity style={[globalStyles.postContainer, {marginTop: 10}]} onPress={() => navigation.navigate('Recipe Information', { recipeId: props.recipeId, recipeName: props.title })}>
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