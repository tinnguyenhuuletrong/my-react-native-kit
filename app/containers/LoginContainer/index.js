//@flow

import React from 'react';
import { Alert, View, Text, Button, TextInput, ImageBackground } from 'react-native';
import { connect } from "react-redux";
import { NavigationActions } from 'react-navigation';

import { styles, assets } from './styles';
import { actionLogin } from '../../actions';
import CustomButton from '../../components/CustomButton';
import ConvertErrorMessage from '../../utils/error';

export interface Props {
    navigation: any,
    user: Object,
    doLogin: Function
}
export interface State {
    userName: any,
    pass: any
}
class LoginContainer extends React.Component<Props, State> {
    static navigationOptions = { header: null };

    constructor(props) {
        super(props);
        this.state = {
            userName: null,
            pass: null
        };
    }

    goToHomeScene(userInfo) {
        const resetAction = NavigationActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({
                routeName: 'Home',
                params: {
                    userName: userInfo.userName
                }
            })],
        });
        this.props.navigation.dispatch(resetAction);
    }

    componentWillReceiveProps(nextProps) {
        const { user } = nextProps
        if (user) {
            this.goToHomeScene(user);
        }
    }

    _showError(msg) {
        Alert.alert(
            'Opp!',
            msg,
            [],
            { cancelable: false }
        );
    }

    render() {
        return (
            <ImageBackground
                source={assets.bg}
                style={styles.container}
            >
                <View style={styles.loginFormContainer}>
                    <View style={styles.inputView}>
                        <TextInput
                            style={{ height: 40, width: 250, fontSize: 20 }}
                            placeholder="User Name"
                            onChangeText={val => this.setState({ userName: val })}
                        />
                    </View>

                    <View style={styles.inputView}>
                        <TextInput
                            style={{ height: 40, width: 250, fontSize: 20 }}
                            secureTextEntry
                            placeholder="Password"
                            onChangeText={val => this.setState({ pass: val })}
                        />
                    </View>
                </View>
                <View style={styles.buttonContainer}>
                    <CustomButton
                        style={{ width: 200 }}
                        onPress={_ => {
                            const { userName, pass } = this.state
                            console.log(userName, pass)
                            if (!(userName && pass))
                                return this._showError(ConvertErrorMessage('MissingUserNameOrPass'));

                            this.props.doLogin(userName, pass)
                        }}>
                        <Text>Login</Text>
                    </CustomButton>

                </View>
            </ImageBackground>
        );
    }
};

const bindAction = dispatch => ({
    doLogin: (usrName, pass) => dispatch(actionLogin(dispatch, usrName, pass))
})
const mapStateToProps = state => ({
    user: state.appStateReducer.user
});
export default connect(mapStateToProps, bindAction)(LoginContainer);
