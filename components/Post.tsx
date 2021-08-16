import React, { useState } from "react";
import { StyleSheet, Image, FlatList, TouchableOpacity, View } from 'react-native';
import { Avatar } from 'react-native-elements'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from "@react-navigation/core";
import { StackNavigationProp } from '@react-navigation/stack'
import { ProfileStackParamList } from '../types'
import { globalStyles } from '../styles/GlobalStyles'
import { MonoText as Text} from '../components/StyledText'
import PostHeader from '../components/PostHeader'

type Props = {
    postCreator: string,
    avatarSrc: string,
    caption: string,
    liked: boolean,
    image: string,
    title: string,
    postId: string,
    avatarUri?: string
};
type ProfileScreenNavigationProp = StackNavigationProp<ProfileStackParamList, 'ProfileScreen'>;

const Post = (props: Props) => {

    const [liked, setLiked] = useState(false);

    const navigation = useNavigation<ProfileScreenNavigationProp>();

    const updateLiked = (liked: Boolean) => {
        return liked ? <Ionicons style={styles.likeIcon} name="heart" size={32} color="red" /> : <Ionicons style={styles.likeIcon} name="heart-outline" size={32} color="black" />
    }

    return(
        <View style={globalStyles.postContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('MyPostsScreen', {postId: props.postId, username: props.postCreator})}>
            <PostHeader username={props.postCreator} avatar={props.avatarSrc}/>
                {/* <View style={styles.postHeader}> */}
                    {/* <Avatar rounded title='TI' avatarStyle={styles.cardAvatar} titleStyle={styles.title} size='medium'/> */}
                    {/* <Image source={require('../assets/images/food.jpg')} style={globalStyles.cardAvatar}></Image> */}
                    {/* <Ionicons style={globalStyles.cardAvatar} name="person-circle" size={50} color="black" /> */}
                    {/* <Text style={{fontSize: 18}}>{props.userName}</Text> */}
                {/* </View> */}
            </TouchableOpacity>
            <Image style={styles.image} source={{uri: props.image}}/>
            <View style={styles.postFooter}>
                <TouchableOpacity style={{flex: 1}} onPress={() => setLiked(!liked)}>
                    {updateLiked(liked)}
                </TouchableOpacity>
                <Text style={styles.title}>
                    {props.title}
                </Text>
                <TouchableOpacity style={{flex: 1}} onPress={() => navigation.navigate('CommentsScreen', {postId: props.postId, username: props.postCreator})}>
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
    postFooter: {
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontSize: 30,
        color: '#000',
        fontWeight: 'bold',
        marginTop: 10,
        flex: 2,
        textAlign: 'center'
    },
    captionContainer: {
        alignItems: 'center'
    },
    captionText: {
        fontSize: 20,
        padding: 10
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