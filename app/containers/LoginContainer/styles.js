import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        backgroundColor: '#F5FCFF',
    },
    loginFormContainer: {
        marginRight:10,
        marginLeft:10,
    },
    buttonContainer: {
        marginTop: 100,
        flexDirection: 'row',
    },
    inputView: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        paddingTop: 10
    }

});

export default styles;
