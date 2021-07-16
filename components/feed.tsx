import React from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';
import FeedItem from '../components/FeedItem'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        padding: 10,
        marginLeft:16,
        marginRight:16,
        marginTop: 8,
        marginBottom: 8,
        borderRadius: 5,
    },
});
//keyExtracetor={(item) => item.id}
//numColumns - add marginHorizontal/marginTop
const Feed = ({ itemList }: any) => (
    <View style={styles.container}>
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

    </View>
);

export default Feed