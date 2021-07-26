import { StyleSheet, Button, TouchableHighlight, TouchableOpacity, View } from 'react-native';
import { useState, useEffect } from "react";
import * as React from 'react';
import { RecipesParamList } from '../../types';
import { StackNavigationProp } from '@react-navigation/stack'
import { FlatList } from 'react-native-gesture-handler';
import { render } from 'react-dom';
import { Ionicons } from '@expo/vector-icons'
import { Text } from '../../components/Themed';

export default function RecipeInformation({
    route
  }: StackNavigationProp<RecipesParamList, 'RecipeInformation'>) {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [completed, setCompleted] = useState(false);
    const {recipeId} = route.params;

    return(
        <View style={{flex: 1}}>
            <View style={styles.IngredientsContainer}>
                <View style={{justifyContent: 'center', flex: 1, alignItems: 'center'}}>
                    <Text style={styles.title}>INGREDIENTS</Text>
                </View>
                <View style={styles.ingredientsList}>
                    <FlatList
                        numColumns={2}
                        scrollEnabled={false}
                        horizontal={false}
                        data={DATA}
                        keyExtractor={item => item.id}
                        renderItem={({ item }: any) => (
                            <Item title={item.title} />
                        )}
                    />
                </View>
            </View>
            <View style={styles.instructionsContainer}>
                <FlatList
                    horizontal={false}
                    data={STEPS}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <InstructionsItem title={item.text}/>
                        
                    )}
              />
            </View>
        </View>
    )
  
}

const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'Rice',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Beans',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Chicken',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29432',
        title: 'Chicken',
    },
];

const STEPS = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        text: 'Rice',
        completed: false,
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        text: 'Beans',
        completed: false
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        text: 'Chicken',
        completed: false
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29432',
        text: 'Chicken',
        completed: false
    },
];

const Item = ({ title }: any) => (
    <View style={styles.item}>
        <Text>{title}</Text>
    </View>
);
  
const InstructionsItem = ({ title }: any) => {
    const [completed, setCompleted] = useState(false);

    return (
        <View style={styles.instructionsItem}>
            <TouchableOpacity style={{marginEnd: 10}} onPress={() => setCompleted(!completed)}>
                {updateCheckbox(!completed)}
            </TouchableOpacity>
            <Text style={{alignItems: 'center', justifyContent: 'center'}}>{title}</Text>
        </View>
    )
};

const updateCheckbox = (liked: Boolean) => {
    return liked ? <Ionicons name="checkbox-outline" size={32} color="black" /> : <Ionicons name="checkbox" size={32} color="black" />
}


const styles = StyleSheet.create({
    item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        flexDirection: 'column',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    instructionsItem: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        flexDirection: 'row',
        flex: 1,
    },
    title: {
        fontSize: 32,
    },
    ingredientsList:{
        flex: 3
    },
    IngredientsContainer: {
        flex: 1,
        flexDirection: 'column',
        marginBottom: 10,
        backgroundColor: 'white',
        borderRadius:10,
        elevation: 3,
        shadowOffset: {
            width: 1,
            height: 1
        },
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 2,
        marginHorizontal: 4,
        justifyContent: 'center',
    },
    instructionsContainer: {
        flex: 2,
        flexDirection: 'column',
        marginBottom: 10,
        backgroundColor: 'white',
        borderRadius:10,
        elevation: 3,
        shadowOffset: {
            width: 1,
            height: 1
        },
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 2,
        marginHorizontal: 4,
        justifyContent: 'center',
    }
});
