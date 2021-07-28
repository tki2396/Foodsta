import React from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';
import Recipe from '../components/Recipe'

const RecipeFeed = ({ itemList }: any) => (
    <FlatList
            initialNumToRender={1}
            data={itemList}
            keyExtractor={item => item.RecipeId}
            renderItem={({ item }) => <Recipe
                title={item.title}
                description={item.summary}
                image_url={item.image}
                recipeId={item.RecipeId}
            />}
        />
);

export default RecipeFeed