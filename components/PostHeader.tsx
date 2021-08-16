import React, { useState, useEffect } from "react";
import { StyleSheet, Image, FlatList, TouchableOpacity, View } from 'react-native';
import { Avatar } from 'react-native-elements'
import { Ionicons } from '@expo/vector-icons'
import { MonoText as Text} from '../components/StyledText'
import { globalStyles } from '../styles/GlobalStyles'

type HeaderProps = {
    username: string,
    avatar: string
}

const PostHeader = (props: HeaderProps) => {
    const [avatar, setAvatar] = useState('')

    useEffect(() => {
        fetch(`https://08arlo5gu0.execute-api.us-east-2.amazonaws.com/Prod/users/profilePicture/${props.username}`)
        .then((response) => response.json())
        .then(json => setAvatar(json.Items[0].profilePicture))
        .catch((error) => console.error(error))
    },[]);

    return (
        <View style={styles.postHeader}>
            <Image source={{uri: avatar}} style={globalStyles.cardAvatar}></Image>
            <Text style={{fontSize: 18}}>{props.username}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    postHeader: {
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
});

export default PostHeader;

