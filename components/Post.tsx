import React from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';

type Props = {
    title: string,
    image_url?: string,
    description: string,
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        padding: 10,
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
        height: 80,
        width: 80,
    },
});

const Post = (props: Props) => {
    return(
        <View style={styles.container}>
            <Image source={{uri: props.image_url}} style={styles.photo} />
            <View style={styles.container_text}>
                <Text style={styles.title}>
                    {props.title}
                </Text>
                <Text style={styles.description}>
                    {props.description}
                </Text>
            </View>

        </View>
    );
}


export default Post;