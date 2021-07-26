import React from 'react';
import { StyleSheet, Image, FlatList, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ProfileStackParamList } from '../types'
import { StackNavigationProp } from '@react-navigation/stack'
import { Text, View } from '../components/Themed';
import { Avatar } from 'react-native-elements'

type Props = {
    username: string,
    commentText: string,
    icon?: JSX.Element
};

type ProfileScreenNavigationProp = StackNavigationProp<ProfileStackParamList, 'MyPostsScreen'>;

const Comment = (props: Props) => {
    const navigation = useNavigation<ProfileScreenNavigationProp>();

    return(
        <View style={styles.container}>            
            <Avatar rounded title='TI' avatarStyle={styles.cardAvatar} titleStyle={styles.title} size='small'/>
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
        marginRight: 50,
        paddingLeft: 10,
        alignSelf: 'center'
        //backgroundColor: 'yellow'
    },
    cardAvatar: {
        backgroundColor: 'gray'
    },
});

export default Comment;