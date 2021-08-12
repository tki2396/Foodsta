import { StyleSheet, Button, TouchableOpacity, View, FlatList } from 'react-native';
import { useState, useEffect } from "react";
import * as React from 'react';
import { RecipesParamList } from '../../types';
import { StackNavigationProp } from '@react-navigation/stack'
import { Ionicons } from '@expo/vector-icons'
import { Text } from '../../components/Themed';

const RecipeInformation = ({
    route
  }: StackNavigationProp<RecipesParamList, 'RecipeInformation'>) => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState<any>([]);
    const [completed, setCompleted] = useState(false);
    const routeParams = route.params;

    useEffect(() => {
    
        fetch(`https://08arlo5gu0.execute-api.us-east-2.amazonaws.com/Prod/recipes/${route.params.recipeId}/information`)
          .then((response) => response.json())
          .then((json) => setData(json))
          .catch((error) => console.error(error))
          .finally(() => setLoading(false));
    }, []);

    const instructions = data.Items != undefined ? data.Items[0]['instructions'].map((step: any) => { return { step: step.step }}) : '';
    const Ingredients = data.Items != undefined ? data.Items[0]['ingredientList'] : '';

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
    
    const updateCheckbox = (completed: Boolean) => {
        return completed ? <Ionicons name="checkbox-outline" size={32} color="black" /> : <Ionicons name="checkbox" size={32} color="orange" />
    }
    

    return (
        <View style={{flex: 1, padding: 10}}>
            <View style={styles.IngredientsContainer}>
                <View style={{justifyContent: 'center', flex: 1, alignItems: 'center'}}>
                    <Text style={styles.title}>Ingredients</Text>
                </View>
                <View style={styles.ingredientsList}>
                    <FlatList
                        numColumns={2}
                        horizontal={false}
                        data={Ingredients}
                        keyExtractor={item => item.id}
                        renderItem={({ item }: any) => (
                            <Item title={item} />
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
                        data={instructions}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => (
                            <InstructionsItem title={item.step}/>
                        )}
                    />
              </View>
            </View>
        </View>
    )
  
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

export default RecipeInformation;
