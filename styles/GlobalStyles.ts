import { StyleSheet } from 'react-native'

const globalStyles = StyleSheet.create({
    cardAvatar: {
        height: 70,
        width: 70,
        borderRadius: 70,
    },
    postContainer: {
        flex: 1,
        flexDirection: 'column',
        marginBottom: 10,
        backgroundColor: '#EEF0F2',
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