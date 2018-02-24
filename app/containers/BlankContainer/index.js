//@flow

import React from 'react';
import { Platform, View, Text } from 'react-native';
import { connect } from "react-redux";

import mockData from './_mockData'
import styles from './styles'

const instructions = Platform.select({
    ios: mockData.ios,
    android: mockData.android
});

export interface Props { }
class BlankContainer extends React.Component<Props> {
    
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Welcome to React Native!
                </Text>
                <Text style={styles.instructions}>
                    To get started, edit App.js
                </Text>
                <Text style={styles.instructions}>
                    {instructions}
                </Text>
            </View>
        );
    }
};

const bindAction = dispatch => ({})
const mapStateToProps = state => ({});
export default connect(mapStateToProps, bindAction)(BlankContainer);
