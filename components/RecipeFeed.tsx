import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';
import { SearchBar } from 'react-native-elements';

import Recipe from '../components/Recipe'

const RecipeFeed = ({ itemList }: any) => {


    const [search, updateSearch] = useState('');

    return(
        <>
    <SearchBar
         placeholder="Search"
         onChangeText={(val: string) => updateSearch(val)}
         value={search}
       />

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
    </>
    )};

export default RecipeFeed