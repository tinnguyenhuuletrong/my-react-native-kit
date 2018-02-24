import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%', 
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
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
        margin: 10
    }
});

const assets = {
    bg: require('../../assets/bg.png')
};

export {
    styles,
    assets
}
