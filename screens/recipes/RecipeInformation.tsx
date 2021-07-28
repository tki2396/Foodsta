import { StyleSheet, Button, TouchableOpacity, View } from 'react-native';
import { useState, useEffect } from "react";
import * as React from 'react';
import { RecipesParamList } from '../../types';
import { StackNavigationProp } from '@react-navigation/stack'
import { FlatList } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons'
import { Text } from '../../components/Themed';

export default function RecipeInformation({
    route
  }: StackNavigationProp<RecipesParamList, 'RecipeInformation'>) {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [completed, setCompleted] = useState(false);

    return(
        <View style={{flex: 1, padding: 10}}>
            <View style={styles.IngredientsContainer}>
                <View style={{justifyContent: 'center', flex: 1, alignItems: 'center'}}>
                    <Text style={styles.title}>Ingredients</Text>
                </View>
                <View style={styles.ingredientsList}>
                    <FlatList
                        numColumns={2}
                        scrollEnabled={false}
                        horizontal={false}
                        data={INGREDIENTS}
                        keyExtractor={item => item.id}
                        renderItem={({ item }: any) => (
                            <Item title={item.name} />
                        )}
                    />
                </View>
            </View>
            
            <View style={styles.instructionsContainer}>
                <View style={{justifyContent: 'center', flex: 1, alignItems: 'center'}}>
                    <Text style={styles.title}>Instructions</Text>
                </View>
                <View style={styles.instructionslist}>
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
        </View>
    )
  
}

const INGREDIENTS = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        name: '1/2 cup non-fat greek yogurt',
    },
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        name: '1/2 peach',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        name: '1/4 cup pistachios, chopped',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29432',
        name: '1 tsp mint leaves, chopped',
    },
];

const STEPS = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        text: 'Scoop yogurt into a serving bowl.',
        completed: false,
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        text: 'Slice peach horizontal, carving out center seed. Or slice vertically to top yogurt.',
        completed: false
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        text: 'Top yogurt with peaches, pistachios, and mint..... enjoy!',
        completed: false
    },
    // {
    //     id: '58694a0f-3da1-471f-bd96-145571e29432',
    //     text: 'Chicken',
    //     completed: false
    // },
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
            <TouchableOpacity style={{marginEnd: 10, justifyContent: 'flex-start'}} onPress={() => setCompleted(!completed)}>
                {updateCheckbox(!completed)}
            </TouchableOpacity>
            <Text style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>{title}</Text>
        </View>
    )
};

const updateCheckbox = (liked: Boolean) => {
    return liked ? <Ionicons name="checkbox-outline" size={32} color="black" /> : <Ionicons name="checkbox" size={32} color="orange" />
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
        paddingTop: 10,
        paddingBottom: 10,
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
    instructionslist:{
        flex: 4
    },
    IngredientsContainer: {
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
    },
    instructionsContainer: {
        flex: 3,
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
