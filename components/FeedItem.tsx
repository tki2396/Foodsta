import React from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity} from 'react-native';

type Props = {
    title: string,
    description: string,
    image_url: NodeRequire
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        borderRadius:20,
        elevation: 3,
        backgroundColor: '#FFF',
        shadowOffset: {
            width: 1,
            height: 1
        },
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 2,
        marginHorizontal: 4,
        height: 350,
        width: "98%",
        justifyContent: 'center',
        marginBottom: 10,
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
        marginTop: 10,
        fontSize: 11,
        fontStyle: 'italic',
    },
    photo: {
        height: 200,
        width: 300,
        flex: 1,
        alignSelf:'center',
        borderRadius: 15,
        marginTop: 15
    },
    icon: {
        marginRight: 50,
        paddingLeft: 10,
        alignSelf: 'center'
    },
});

const FeedItem = (props: Props) => {
    return(
        <View style={styles.container}>
            <View style={{flex: 1, flexDirection: 'column', marginBottom: 10}}>
        
                <Image source={props.image_url} style={styles.photo} />
                <View style={styles.container_text}>
                    <Text style={styles.title}>
                        {props.title}
                    </Text>
                    <Text style={styles.description}>
                        {props.description}
                    </Text>
                </View>
            </View>
        </View>
    );
}


export default FeedItem;