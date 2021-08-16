import React, { useEffect, useContext, useState } from 'react';
import { StyleSheet, Image, FlatList, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ProfileStackParamList } from '../types'
import { StackNavigationProp } from '@react-navigation/stack'
import { Text, View } from '../components/Themed';
import { AppContext } from '../context/AppContext';
import { globalStyles } from '../styles/GlobalStyles'

type Props = {
    username: string,
    commentText: string,
    icon?: JSX.Element
};

type ProfileScreenNavigationProp = StackNavigationProp<ProfileStackParamList, 'MyPostsScreen'>;

const Comment = (props: Props) => {
    const navigation = useNavigation<ProfileScreenNavigationProp>();
    const context = useContext(AppContext)
    const [avatar, setAvatar] = useState('')

    useEffect(() => {
        fetch(`https://08arlo5gu0.execute-api.us-east-2.amazonaws.com/Prod/users/profilePicture/${props.username}`)
        .then((response) => response.json())
        .then(json => setAvatar(json.Items[0].profilePicture))
        .catch((error) => console.error(error))
    },[]);

    return(
        <View style={styles.container}> 
                   
            <Image source={{uri: context.profilePicture}} style={globalStyles.commentAvatar}></Image>
            <View style={styles.container_text}>
                <Text style={styles.title}>
                    {props.username}
                </Text>
                <Text style={styles.description}>
                    {props.commentText}
                </Text>
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        padding: 10,
        marginStart: 10,
        marginRight:10,
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
    icon: {
        marginRight: 50,
        paddingLeft: 10,
        alignSelf: 'center'
    },
    cardAvatar: {
        backgroundColor: 'gray'
    },
});

export default Comment;