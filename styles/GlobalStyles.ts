import { StyleSheet } from 'react-native'

const globalStyles = StyleSheet.create({
    cardAvatar: {
        height: 70,
        width: 70,
        borderRadius: 70,
    },
    commentAvatar: {
        height: 35,
        width: 35,
        borderRadius: 35,
    },
    postContainer: {
        flex: 1,
        flexDirection: 'column',
        marginBottom: 10,
        backgroundColor: 'white',
        borderRadius:10,
        elevation: 3,
        shadowOffset: {
            width: 1,
            height: 1
        },
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 2,
        marginHorizontal: 4,
        justifyContent: 'center',
    },
});

export { globalStyles };