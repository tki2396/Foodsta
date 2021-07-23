import React from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';
import FeedItem from '../components/FeedItem'

//keyExtracetor={(item) => item.id}
//numColumns - add marginHorizontal/marginTop
const Feed = ({ itemList }: any) => (
    <FlatList
            initialNumToRender={1}
            data={itemList}
            keyExtractor={item => item.recipeId}
            renderItem={({ item }) => <FeedItem
                title={item.title}
                description={item.summary}
                image_url={item.image}
            />}
        />
);

export default Feed