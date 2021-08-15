import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';
import { SearchBar } from 'react-native-elements';

import Recipe from '../components/Recipe'

const RecipeFeed = ({ itemList }: any) => {

    const [search, updateSearch] = useState('');
    const [data, setData] = useState<any>([]);

    useEffect(() => {
        setData(itemList);
    }, []);

    const renderHeader = () => {    
        return (      
          <SearchBar        
            placeholder="Type Here..."        
            lightTheme        
            round        
            onChangeText={(text: any) => {
                searchFilterFunction(text)
                updateSearch(text)
            }}
            autoCorrect={false}
            value={search}
            platform="ios"          
          />    
        );  
    };
    
    const searchFilterFunction = (text: any) => {
        const newData = itemList.filter((item: any) => {      
            const itemData = `${item.title.toUpperCase()}`;
            const textData = text.toUpperCase();
            return itemData.indexOf(textData) > -1;    
        });
        
        setData(newData);  
    };

    return(
        <>
            <FlatList
                ListHeaderComponent={renderHeader()}
                initialNumToRender={1}
                data={data}
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