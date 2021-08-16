import React from 'react';
import { StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ProfileStackParamList } from '../types'
import { StackNavigationProp } from '@react-navigation/stack'
import { Text, View } from '../components/Themed';
import * as SecureStore from 'expo-secure-store';
import { localRevoke } from '../services/MySecureStore'
import { useContext } from 'react';
import { AppContext, AuthContextType } from '../context/AppContext';

type Props = {
    title: string,
    description: string,
    icon?: JSX.Element
};

type ProfileScreenNavigationProp = StackNavigationProp<ProfileStackParamList, 'MyPostsScreen'>;

const logout = () => {
    // SecureStore.deleteItemAsync('idToken')
    localRevoke("idToken").then(() => alert("revoked")).catch((error: any) => console.error(error));
}

const ProfileItem = (props: Props) => {
    const navigation = useNavigation<any>();
    const context = useContext(AppContext);

    const chooseScreen = async () => {
        let screen;
        switch(props.title){
            case 'Posts':
                screen = () => navigation.navigate('MyPostsScreen', {postCreator: context.username});
                break;
            case 'Settings':
                screen = () => navigation.navigate('SettingsScreen');
                break;
            case 'Log Out':
                //logout();
                const token = await SecureStore.getItemAsync('idToken').then(token => token);
                console.error("token ", token)
                screen = () => navigation.replace('login');
                break;
        }
        return screen
    };

    return(
        <TouchableOpacity style={styles.container} onPress={async () => chooseScreen()}>
            
            <View style={styles.icon}>{props.icon}</View>
            <View style={styles.container_text}>
                <Text style={styles.title}>
                    {props.title}
                </Text>
                <Text style={styles.description}>
                    {props.description}
                </Text>
            </View>

        </TouchableOpacity>
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
        width:'100%',
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 2,
        alignItems: 'center'
    },
    title: {
        fontSize: 16,
        color: '#000',
    },
    container_text: {
        flex: 4,
        flexDirection: 'column',
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
        flex: 1,
        justifyContent: 'center'
    },
});

export default ProfileItem;