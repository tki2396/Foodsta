import React from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';
import Post from '../components/Post'

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
        backgroundColor: '#FFF',
        elevation: 2,
    },
    title: {
        fontSize: 16,
        color: '#000',
    },
    container_text: {
        flex: 1,
        flexDirection: 'column',
        marginLeft: 12,
        justifyContent: 'center',
    },
    description: {
        fontSize: 11,
        fontStyle: 'italic',
    },
    photo: {
        height: 200,
        width: 200,
    },
});
//keyExtracetor={(item) => item.id}
//numColumns - add marginHorizontal/marginTop
const Feed = ({ itemList }: any) => (
    <View style={styles.container}>
        <FlatList
                data={itemList}
                renderItem={({ item }) => <Post
                    title={item.title}
                    description={item.description}
                    image_url={item.image_url}
                />}
            />

    </View>
);

export default Feed