import React, { useState } from "react";
import { StyleSheet, Image, FlatList, TouchableOpacity} from 'react-native';
import { Avatar } from 'react-native-elements'
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { Ionicons } from '@expo/vector-icons'
import { Text, View } from '../components/Themed';
import { useNavigation } from "@react-navigation/core";
import {StackNavigationProp} from '@react-navigation/stack'
import { ProfileStackParamList } from '../types'

type Props = {
    userName: string,
    avatarSrc: string,
    caption: string,
    liked: boolean,
    image: string,
    title: string,
    postId: string,
};
type ProfileScreenNavigationProp = StackNavigationProp<ProfileStackParamList, 'ProfileScreen'>;

const Post = (props: Props) => {
    const [userName, setUserName] = useState('');
    const [profilePicture, setProfilePicture] = useState('');
    const [caption, setCaption] = useState('');
    const [liked, setLiked] = useState(false);
    const [image, setImage] = useState('');
    const [postId, setPostId] = useState('')

    const navigation = useNavigation<ProfileScreenNavigationProp>();

    const updateLiked = (liked: Boolean) => {
        return liked ? <Ionicons style={styles.likeIcon} name="heart" size={32} color="red" /> : <Ionicons style={styles.likeIcon} name="heart-outline" size={32} color="black" />
    }

    return(
        <View style={styles.cardContainer}>
        <TouchableOpacity>
                <View style={styles.postHeader}>
                    <Avatar rounded title='TI' avatarStyle={styles.cardAvatar} titleStyle={styles.title} size='medium'/>
                    <Text style={{fontSize: 18}}>{props.userName}</Text>
                </View>
            </TouchableOpacity>
            <Image style={styles.image} source={{uri: props.image}}/>
            <View style={styles.postFooter}>
                <TouchableOpacity style={{flex: 1}} onPress={() => setLiked(!liked)}>
                    {updateLiked(liked)}
                </TouchableOpacity>
                <Text style={styles.title}>
                    {props.title}
                </Text>
                <TouchableOpacity style={{flex: 1}} onPress={() => navigation.navigate('CommentsScreen', {postId: props.postId, username: 'tobiijose'})}>
                    {<Ionicons style={styles.commentIcon} name="chatbubble-outline" size={32} color="black" />}
                </TouchableOpacity>
            </View>
            <View style={styles.captionContainer}>
                <Text style={styles.captionText}>
                    {props.caption}
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    cardContainer: {
        flex: 1,
        flexDirection: 'column',
        marginBottom: 10,
        backgroundColor: 'white',
        borderRadius:10,
        //flex: 1,
        //flexDirection: 'row',
        //borderRadius:20,
        elevation: 3,
        //backgroundColor: '#FFF',
        shadowOffset: {
            width: 1,
            height: 1
        },
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 2,
        marginHorizontal: 4,
        //height: 350,
        //width: "98%",
        justifyContent: 'center',
        //marginBottom: 25,
        //paddingBottom: 50,
        //marginTop: 15
    },
    postHeader: {
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    postFooter: {
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    cardAvatar: {
        backgroundColor: 'gray'
    },
    title: {
        fontSize: 30,
        color: '#000',
        fontWeight: 'bold',
        marginTop: 10,
        flex: 2,
    },
    container_text: {
        flexDirection: 'row',
    },
    captionContainer: {
        alignItems: 'center'
    },
    captionText: {
        fontSize: 20,
        paddingBottom: 10
    },
    description: {
        marginTop: 10,
        fontSize: 11,
        fontStyle: 'italic',
    },
    image: {
        width: '98%',
        height: 300,
        alignSelf: 'center',
        borderRadius: 15
    },
    likeIcon: {
        flex: 1,
        justifyContent: 'flex-end',
        marginTop: 20
    },
    commentIcon: {
        flex: 1,
        justifyContent: 'flex-start',
        left: 40,
        marginTop: 20
    }
});
export default Post;