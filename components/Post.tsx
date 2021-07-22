import React, { useState } from "react";
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity} from 'react-native';
import { Avatar } from 'react-native-elements'
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { Ionicons } from '@expo/vector-icons'

type Props = {
    userName: string,
    avatarSrc: string,
    caption: string,
    liked: boolean,
    image: string,
    title: string
};


const Post = (props: Props) => {
    const [userName, setUserName] = useState('');
    const [profilePicture, setProfilePicture] = useState('');
    const [caption, setCaption] = useState('');
    const [liked, setLiked] = useState(false);
    const [image, setImage] = useState('');


    return(
        // <TouchableOpacity style={styles.container}>
            <View style={styles.flexStyle}>
                <TouchableOpacity onPress={() => console.log("")}>
                    <View style={styles.postHeader}>
                        <Avatar rounded title='TI' avatarStyle={styles.cardAvatar} titleStyle={styles.title} size='medium'/>
                        <Text>{props.userName}</Text>
                    </View>
                </TouchableOpacity>
                <Image style={styles.image} source={{uri: image}}/>
                <View style={styles.container_text}>
                    <Ionicons style={styles.likeIcon} name="heart-outline" size={32} color="black" />
                    <Text style={styles.title}>
                        {props.title}
                    </Text>
                    <Ionicons style={styles.commentIcon} name="chatbubble-outline" size={32} color="black" />
                </View>
                <View style={styles.captionContainer}>
                    <Text style={styles.captionText}>
                        {props.caption}
                    </Text>
                </View>
            </View>
        // {/* </TouchableOpacity> */}
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        borderRadius:20,
        elevation: 3,
        backgroundColor: 'white',
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
    flexStyle: {
         flex: 1, flexDirection: 'column', marginBottom: 10, backgroundColor: 'white',borderRadius:10,
        //elevation: 3,
        //backgroundColor: '#ffff',
        // shadowOffset: {
        //     width: 1,
        //     height: 1
        // },
        //shadowColor: '#333',
        //shadowOpacity: 0.3,
        //shadowRadius: 2,
       // height: 300,
        //flex: 1,
        //flexDirection: 'column',
        //width: 175,
        //justifyContent: 'center',
        //padding: 5,
        //marginBottom: 20,
    },
    postHeader: {
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    cardAvatar: {
        backgroundColor: 'gray'
    },
    title: {
        fontSize: 16,
        color: '#000',
        fontWeight: 'bold',
        marginTop: 10,
        //flex: 1
    },
    container_text: {
        flexDirection: 'row',
    },
    captionContainer: {
        alignItems: 'center'
    },
    captionText: {
        fontSize: 45
    },
    description: {
        marginTop: 10,
        fontSize: 11,
        fontStyle: 'italic',
    },
    image: {
        width: '100%',
        height: 300,
    },
    likeIcon: {
        //marginRight: 50,
        //paddingLeft: 10,
        flex: 1,
        justifyContent: 'flex-end'
    },
    commentIcon: {
        flex: 1,
        justifyContent: 'space-between',
        //paddingLeft: 200
    }
});
export default Post;