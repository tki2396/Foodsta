import React from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';

type Props = {
    title: string,
    description: string,
    icon?: JSX.Element
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
        elevation: 2,
        backgroundColor: '#FFFFFF',
        shadowOffset: {
            width: 1,
            height: 1
        },
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 2,
    },
    title: {
        fontSize: 16,
        color: '#000',
        //backgroundColor: 'pink'
    },
    container_text: {
        flex: 1,
        flexDirection: 'column',
        marginLeft: 12,
        justifyContent: 'center',
        //backgroundColor: 'purple'
    },
    description: {
        fontSize: 11,
        fontStyle: 'italic',
        //backgroundColor: 'blue'
    },
    photo: {
        height: 80,
        width: 80,
        //backgroundColor: 'brown'
    },
    icon: {
        marginRight: 80,
        //backgroundColor: 'yellow'
    },
});

const ProfileItem = (props: Props) => {
    return(
        <View style={styles.container}>
            <View style={styles.icon}>{props.icon}</View>
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


export default ProfileItem;