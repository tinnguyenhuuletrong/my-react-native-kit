//@flow

import React from 'react';
import { Platform, View, Text, Button, TextInput } from 'react-native';
import { connect } from "react-redux";

import styles from './styles'

export interface Props { }
class LoginContainer extends React.Component<Props> {
    static navigationOptions = { title: 'Welcome', header: null };
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.loginFormContainer}>
                    <Text>UserName</Text>
                    <View style={styles.inputView}>
                        <TextInput style={{ height: 40, width: 200, fontSize: 20 }} />
                    </View>

                    <View style={{ marginTop: 30 }} />
                    
                    <Text>Password</Text>
                    <View style={styles.inputView}>
                        <TextInput 
                            style={{ height: 40, width: 200, fontSize: 20 }} 
                            secureTextEntry />
                    </View>
                </View>
                <View style={styles.buttonContainer}>
                    <Button 
                        title="Login" 
                        style={{ width: 200 }} 
                        onPress={_ => {this.props.navigation.navigate('Home')}}
                    />
                </View>
            </View>
        );
    }
};

const bindAction = dispatch => ({})
const mapStateToProps = state => ({});
export default connect(mapStateToProps, bindAction)(LoginContainer);
