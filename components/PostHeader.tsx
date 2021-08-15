import React, { useState } from "react";
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
    return (
        <View style={styles.postHeader}>
                            {/* <Avatar rounded title='TI' avatarStyle={styles.cardAvatar} titleStyle={styles.title} size='medium'/> */}
                            {/* <Image source={require('../assets/images/food.jpg')} style={globalStyles.cardAvatar}></Image> */}
            <Ionicons style={globalStyles.cardAvatar} name="person-circle" size={50} color="black" />
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

